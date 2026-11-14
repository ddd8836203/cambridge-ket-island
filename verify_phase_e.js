/**
 * Phase E Strict Runtime & Static Verification Gate (verify_phase_e.js)
 * Verifies:
 * 1. Bottom prev/next nav bar inside .ket-exam-card + smooth scroll
 * 2. "👀 看答案" -> "⭕ 我答對 / ❌ 我答錯" on Arena (gap, writing, speaking) & legacy Key-in screens + clean Revision placeholders
 * 3. "🔄 全部恢復未答題" clears session state while 100% preserving questionStats & netErrors
 * 4. Cross-filtered Part pill counts accurately reflect active Unit filter (never global count when Unit filtered)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

let passed = 0;
let failed = 0;
function assert(cond, msg) {
  if (cond) {
    passed++;
    console.log(`  [PASS] ${msg}`);
  } else {
    failed++;
    console.error(`  [FAIL] ${msg}`);
  }
}

console.log('================================================================');
console.log('🧪 Running Phase E Verification Gate (verify_phase_e.js)...');
console.log('================================================================');

const root = __dirname;
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

try {
  execSync(`node --check "${path.join(root, 'app.js')}"`, { stdio: 'pipe' });
  assert(true, 'app.js passes node --check');
} catch (e) {
  assert(false, 'app.js syntax check failed: ' + e.message);
}

const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
const openB = (cssNoComments.match(/\{/g) || []).length;
const closeB = (cssNoComments.match(/\}/g) || []).length;
assert(openB === closeB, `style.css braces balanced (${openB}/${closeB})`);
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css zero backdrop-filter: blur()');

// Mock browser environment via vm
const elements = {};
let scrolledCount = 0;
function makeClassList() {
  const s = new Set();
  return {
    add(...c) { c.forEach(x => x && s.add(x)); },
    remove(...c) { c.forEach(x => s.delete(x)); },
    toggle(c, f) { if (f === true) { s.add(c); return true; } if (f === false) { s.delete(c); return false; } if (s.has(c)) { s.delete(c); return false; } s.add(c); return true; },
    contains(c) { return s.has(c); }
  };
}
function makeEl(id, extra = {}) {
  return Object.assign({
    id, style: { setProperty(){} }, classList: makeClassList(),
    setAttribute(){}, getAttribute(){ return ''; }, addEventListener(){}, appendChild(){}, remove(){},
    scrollIntoView(){ scrolledCount++; }, scrollBy(){},
    querySelectorAll(){ return []; }, querySelector(){ return makeEl('sub'); },
    innerHTML: '', textContent: '', value: '', dataset: {},
    getBoundingClientRect(){ return { left: 100, top: 100, width: 50, height: 30 }; }
  }, extra);
}
const navTabNames = ['dashboard', 'arena', 'vocab', 'mistakes', 'spreads', 'rw', 'listening', 'speaking', 'errorbook', 'print'];
const navTabs = navTabNames.map(t => makeEl('tab-' + t, { dataset: { tab: t } }));

global.window = global;
global.window.addEventListener = function(){};
global.window.innerWidth = 1440;
global.window.innerHeight = 900;
global.confirm = () => true;
global.alert = () => {};
global.localStorage = { _d: {}, getItem(k){ return this._d[k] || null; }, setItem(k,v){ this._d[k] = String(v); }, removeItem(k){ delete this._d[k]; } };
global.speechSynthesis = { getVoices(){ return []; }, speak(){}, cancel(){}, onvoiceschanged: null };
global.SpeechSynthesisUtterance = function(t){ this.text = t; };
global.AudioContext = function(){ return { state: 'running', resume(){ return Promise.resolve(); }, createOscillator(){ return { connect(){}, start(){}, stop(){}, frequency: { setValueAtTime(){}, exponentialRampToValueAtTime(){}, linearRampToValueAtTime(){} }, type: 'sine' }; }, createGain(){ return { connect(){}, gain: { setValueAtTime(){}, exponentialRampToValueAtTime(){}, linearRampToValueAtTime(){} } }; }, currentTime: 0, destination: {} }; };
global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve(null) });
global.document = {
  body: makeEl('body'), documentElement: makeEl('html'), activeElement: { tagName: 'BODY' },
  getElementById(id){ if (!elements[id]) elements[id] = makeEl(id); return elements[id]; },
  querySelectorAll(sel){
    if (sel === '.nav-tab') return navTabs;
    if (sel === '.ac-view') return navTabNames.map(n => global.document.getElementById('view-' + n));
    return [];
  },
  querySelector(sel){ if (sel === '#view-arena .quiz-head') return makeEl('quiz-head'); return makeEl('q'); },
  createElement(t){ return makeEl(t); },
  addEventListener(ev, fn){ if (ev === 'DOMContentLoaded') global._initFn = fn; }
};

vm.runInThisContext(fs.readFileSync(path.join(root, 'data/ket_u1_u3.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(root, 'data/ket_exam_bank.js'), 'utf8'));
vm.runInThisContext(js);
if (global._initFn) global._initFn();

const arenaView = document.getElementById('view-arena');
const bank = global.KET_EXAM_BANK;

// Test 1: Bottom navigation bar + scrollIntoView
AppState.arenaCurrentIndex = 0;
renderArenaPod();
assert(arenaView.innerHTML.includes('arena-bottom-nav') && arenaView.innerHTML.includes('jumpArenaQuestion(1, true)'), 'Renders bottom navigation bar inside .ket-exam-card');
const prevScroll = scrolledCount;
jumpArenaQuestion(1, true);
assert(AppState.arenaCurrentIndex === 1 && scrolledCount > prevScroll, 'jumpArenaQuestion(1, true) updates index and smooth scrolls');

// Test 2: Gap "看答案" -> "我答對 / 我答錯"
const gapQs = bank.questions.filter(q => q.questionType === 'gap');
AppState.arenaCurrentIndex = bank.questions.indexOf(gapQs[0]);
renderArenaPod();
assert(arenaView.innerHTML.includes('👀 看答案') && !arenaView.innerHTML.includes('ket-explanation-panel'), 'Gap renders "👀 看答案" and keeps explanation hidden pre-reveal');

revealArenaAnswer(gapQs[0].code);
assert(
  arenaView.innerHTML.includes('ket-selfgrade-banner') &&
  arenaView.innerHTML.includes('btn-self-ok') &&
  arenaView.innerHTML.includes('btn-self-bad') &&
  arenaView.innerHTML.includes('ket-explanation-panel'),
  'revealArenaAnswer shows answer + self-grade buttons + 4D explanation without mutating stats'
);
assert(!AppState.accountData.questionStats[gapQs[0].code], 'Stats untouched until student chooses "我答對" or "我答錯"');

selfGradeArenaQuestion(gapQs[0].code, true);
assert(
  AppState.accountData.questionStats[gapQs[0].code] && AppState.accountData.questionStats[gapQs[0].code].ok === 1,
  'selfGradeArenaQuestion(true) increments green ok stat to 1'
);

AppState.arenaCurrentIndex = bank.questions.indexOf(gapQs[1]);
renderArenaPod();
revealArenaAnswer(gapQs[1].code);
selfGradeArenaQuestion(gapQs[1].code, false);
assert(
  AppState.accountData.questionStats[gapQs[1].code].err === 1 &&
  AppState.accountData.netErrors[gapQs[1].code] &&
  AppState.accountData.netErrors[gapQs[1].code].count === 1,
  'selfGradeArenaQuestion(false) increments red err stat and logs into 5-color ErrorBook'
);

// Test 3: Writing & Speaking self-grade + Legacy Key-in "看答案" + clean Revision placeholders
const writeQ = bank.questions.find(q => q.questionType === 'writing');
const speakQ = bank.questions.find(q => q.questionType === 'speaking');
AppState.arenaCurrentIndex = bank.questions.indexOf(writeQ);
renderArenaPod();
assert(arenaView.innerHTML.includes('revealArenaAnswer') && arenaView.innerHTML.includes('👀 看答案'), 'Writing includes "👀 看答案" button');
revealArenaAnswer(writeQ.code);
selfGradeArenaQuestion(writeQ.code, true);
assert(AppState.accountData.questionStats[writeQ.code].ok === 1, 'Writing self-grade records stats cleanly');

AppState.arenaCurrentIndex = bank.questions.indexOf(speakQ);
renderArenaPod();
revealArenaAnswer(speakQ.code);
selfGradeArenaQuestion(speakQ.code, false);
assert(AppState.accountData.questionStats[speakQ.code].err === 1, 'Speaking self-grade records stats cleanly');

AppState.rwMode = 'readingWritingPart5';
renderReadingWritingPod();
assert(document.getElementById('view-rw').innerHTML.includes('revealLegacyGapAnswer'), 'Legacy RW Part 5 includes "👀 看答案" self-grade button');
AppState.rwMode = 'revision';
renderReadingWritingPod();
const revHtml = document.getElementById('view-rw').innerHTML;
assert(
  revHtml.includes('revealRevisionExAnswers') && !revHtml.includes('placeholder="Have you got"'),
  'Revision exercises include "👀 看本大題答案" and remove spoiler placeholders'
);
AppState.listeningMode = 'listeningPart2';
renderListeningPod();
assert(document.getElementById('view-listening').innerHTML.includes('revealLegacyGapAnswer'), 'Legacy Listening Part 2 includes "👀 看答案" button');

// Test 4: resetAllArenaProgress clears session state while preserving stats & netErrors
assert(arenaView.innerHTML.includes('session-done'), 'Drawer marks answered items with .session-done before reset');
resetAllArenaProgress();
assert(
  Object.keys(AppState.arenaSubmitted).length === 0 &&
  Object.keys(AppState.arenaUserAnswers).length === 0 &&
  Object.keys(AppState.arenaRevealed).length === 0 &&
  AppState.arenaCurrentIndex === 0,
  'resetAllArenaProgress() resets all session UI answers/submissions/index to fresh state'
);
assert(
  AppState.accountData.questionStats[gapQs[0].code].ok === 1 &&
  AppState.accountData.netErrors[gapQs[1].code].count === 1,
  'resetAllArenaProgress() 100% preserves questionStats and ErrorBook counts'
);

// Test 5: Dynamic cross-filtered Part pill counts when Unit filter changes
setArenaUnitFilter('u1');
const u1Spp2Count = bank.questions.filter(q => q.unitId === 'u1' && q.ketPart === 'SPP2').length;
const u1Html = arenaView.innerHTML;
const spp2PillMatch = u1Html.match(/setArenaPartFilter\('SPP2'\)">[\s\S]*?<span class="pill-count">(\d+)<\/span>/);
assert(
  spp2PillMatch && parseInt(spp2PillMatch[1], 10) === u1Spp2Count,
  `Unit 1 active -> SPP2 pill count matches actual Unit 1 count (${u1Spp2Count}, not global)`
);
setArenaUnitFilter('all');

console.log('----------------------------------------------------------------');
console.log(`📊 Phase E Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');
if (failed > 0) process.exit(1);
process.exit(0);
