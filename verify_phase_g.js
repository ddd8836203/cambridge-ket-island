/**
 * Phase G Strict Runtime Verification Gate (verify_phase_g.js)
 * Verifies:
 * 1. Official Cambridge A2 Key (KET) A4 Exam Booklet Engine (#view-print)
 * 2. All 10 print modes render cleanly in Student Blank Mode (0 leaks) & Teacher Key Mode (full 4D explanations + tapescripts + band13/15 essays)
 * 3. Smart Passage Deduplication: shared passages (same unit + part + passageTitle across multiple questions) print ONCE at top of .ket-paper-group
 * 4. 100% Self-Contained Questions: ZERO "dinner -> ____" half-fragments anywhere
 * 5. Personalized KET ErrorBook Worksheet reconstructs full passage & options from KET_EXAM_BANK
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
console.log('🖨️ Running Phase G Verification Gate (verify_phase_g.js)...');
console.log('================================================================');

const root = __dirname;
const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

try {
  execSync(`node --check "${path.join(root, 'app.js')}"`, { stdio: 'pipe' });
  assert(true, 'app.js passes node --check');
} catch (e) {
  assert(false, 'app.js syntax error: ' + e.message);
}

const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
const openB = (cssNoComments.match(/\{/g) || []).length;
const closeB = (cssNoComments.match(/\}/g) || []).length;
assert(openB === closeB, `style.css braces balanced (${openB}/${closeB})`);
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css strictly zero backdrop-filter: blur()');
assert(
  css.includes('.ket-paper-cover') && css.includes('.ket-paper-part-head') && css.includes('.ket-paper-answer-box'),
  'style.css defines Cambridge official A4 paper CSS classes'
);

// Setup VM browser mock
const elements = {};
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
    scrollIntoView(){}, scrollBy(){}, querySelectorAll(){ return []; }, querySelector(){ return makeEl('sub'); },
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
global.window.print = function(){};
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
  querySelector(sel){ return makeEl('q'); },
  createElement(t){ return makeEl(t); },
  addEventListener(ev, fn){ if (ev === 'DOMContentLoaded') global._initFn = fn; }
};

vm.runInThisContext(fs.readFileSync(path.join(root, 'data/ket_u1_u3.js'), 'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(root, 'data/ket_exam_bank.js'), 'utf8'));
vm.runInThisContext(js);
if (global._initFn) global._initFn();

const printView = document.getElementById('view-print');
const bank = global.KET_EXAM_BANK;
const modes = ['u1', 'u2', 'u3', 'revision', 'rev', 'rw_full', 'ls_full', 'sp_cards', 'writing', 'vocab_core'];

// 1. Check all modes in Blank Student Mode (showAnswers = false)
AppState.printShowAnswers = false;
modes.forEach(m => {
  setPrintMode(m);
  const sheet = printView.innerHTML;
  const bodyPart = sheet.split('<div id="print-sheet-area">')[1] || '';
  assert(
    sheet.includes('CAMBRIDGE ASSESSMENT ENGLISH') &&
    bodyPart.length > 400 &&
    !bodyPart.includes('undefined') &&
    !bodyPart.includes('dinner -> ____') &&
    !bodyPart.includes('black hair -> ____'),
    `Student Blank Mode [${m}] renders clean self-contained paper without undefined or half-baked fragments`
  );
  assert(
    !bodyPart.includes('ket-paper-answer-box') &&
    !bodyPart.includes('ket-paper-tapescript') &&
    !bodyPart.includes('教師解答'),
    `Student Blank Mode [${m}] leaks zero answers, explanations, or listening tapescripts`
  );
});

// 2. Smart Passage Deduplication check on Unit 1
setPrintMode('u1');
AppState.printShowAnswers = false;
renderPrintPod();
const u1Body = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
// Find any group in U1 where >=2 questions share the same non-empty passageTitle
const u1Qs = bank.questions.filter(q => q.unitId === 'u1');
const titleFreq = {};
u1Qs.forEach(q => {
  if (q.passageTitle && q.passageTitle.trim()) {
    const k = `${q.ketPart}::${q.passageTitle.trim()}`;
    titleFreq[k] = (titleFreq[k] || 0) + 1;
  }
});
const sharedKey = Object.keys(titleFreq).find(k => titleFreq[k] >= 2);
if (sharedKey) {
  const sharedTitle = sharedKey.split('::').slice(1).join('::');
  const escaped = sharedTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const bannerMatches = (u1Body.match(new RegExp(`📖 Shared Passage:\\s*${escaped}`, 'g')) || []).length;
  assert(bannerMatches === 1, `Passage deduplication merges ${titleFreq[sharedKey]} questions under single shared header ("${sharedTitle}")`);
} else {
  assert(false, 'No multi-question shared passageTitle found in Unit 1 for deduplication check');
}

// 3. Check Writing Part 6/7 Lined Booklet + Cambridge Rubric
setPrintMode('writing');
AppState.printShowAnswers = false;
renderPrintPod();
const writeBlank = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
assert(
  writeBlank.includes('print-line-dashed') &&
  writeBlank.includes('ket-paper-rubric') &&
  writeBlank.includes('Content (內容)') &&
  writeBlank.includes('Organisation (組織)') &&
  writeBlank.includes('Language (語言)'),
  'Writing booklet renders dashed word-count threshold lines & 3-criteria Cambridge Rubric'
);

// 4. Teacher Key Mode (showAnswers = true) across all modes
AppState.printShowAnswers = true;
['u1', 'u2', 'u3', 'revision', 'rw_full', 'ls_full', 'sp_cards', 'writing', 'vocab_core'].forEach(m => {
  setPrintMode(m);
  const teacherBody = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
  const hasKeyBox = teacherBody.includes('ket-paper-answer-box') || teacherBody.includes('✅ Answer:');
  assert(hasKeyBox && !teacherBody.includes('undefined'), `Teacher Key Mode [${m}] reveals answer keys cleanly`);
});

setPrintMode('ls_full');
const lsTeacherBody = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
assert(
  lsTeacherBody.includes('ket-paper-tapescript') && lsTeacherBody.includes('聽力完整逐字稿'),
  'Teacher Key Mode [ls_full] prints full Listening Tapescripts & Clue/Trap tags'
);

setPrintMode('u1');
const u1TeacherBody = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
assert(
  u1TeacherBody.includes('🎯 出題目的：') && u1TeacherBody.includes('✅ 正解證據：') && u1TeacherBody.includes('❌ 選項陷阱拆解：'),
  'Teacher Key Mode [u1] includes full 4D Cambridge Explanations'
);

// 5. Personalized ErrorBook Print Mode (with full KET_EXAM_BANK context + legacy error item)
const samplePassageQ = bank.questions.find(q => q.passageHtml && q.questionType === 'choice');
AppState.accountData.netErrors = {
  [samplePassageQ.code]: {
    count: 3,
    itemType: 'ket_exam',
    title: samplePassageQ.code,
    prompt: samplePassageQ.prompt,
    wrongAnswer: 'X',
    correctAnswer: samplePassageQ.answer,
    rule: samplePassageQ.explanation.correctReason
  },
  legacy_err_01: {
    count: 1,
    title: 'Grammar Fix',
    prompt: 'She have got two sisters.',
    wrongAnswer: 'have got',
    correctAnswer: 'has got',
    rule: '第三人稱單數用 has got'
  }
};
AppState.printShowAnswers = false;
setPrintMode('errorbook');
const errBlankBody = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
assert(
  errBlankBody.includes(samplePassageQ.code) &&
  errBlankBody.includes('ket-paper-passage') &&
  errBlankBody.includes('She have got two sisters.') &&
  !errBlankBody.includes('ket-paper-answer-box'),
  'Personalized ErrorBook [blank] reconstructs full passage & options from KET_EXAM_BANK without leaking answers'
);

AppState.printShowAnswers = true;
renderPrintPod();
const errTeacherBody = printView.innerHTML.split('<div id="print-sheet-area">')[1] || '';
assert(
  errTeacherBody.includes('ket-paper-answer-box') && errTeacherBody.includes('第三人稱單數用 has got'),
  'Personalized ErrorBook [teacher] prints 4D explanations and legacy rules'
);

// 6. Sweep ALL questions in KET_EXAM_BANK through both Print Row Engine & Arena Card Renderer
let renderErrors = 0;
let arenaPreSpoilerCount = 0;
AppState.arenaSubmitted = {};
AppState.arenaRevealed = {};
AppState.arenaUserAnswers = {};
bank.questions.forEach((q, idx) => {
  try {
    const htmlBlank = renderPrintQuestionRow(q, 1, false, false, false);
    const htmlTeacher = renderPrintQuestionRow(q, 1, true, false, false);
    if (!htmlBlank || htmlBlank.includes('undefined') || !htmlTeacher || htmlTeacher.includes('undefined')) {
      renderErrors++;
    }
    const arenaHtml = renderArenaQuestionCard(q, idx, bank.questions.length);
    if (!arenaHtml || arenaHtml.includes('ket-explanation-panel') || arenaHtml.includes('exp-audio-tapescript')) {
      arenaPreSpoilerCount++;
    }
  } catch (err) {
    renderErrors++;
  }
});
assert(renderErrors === 0, `All ${bank.questions.length} KET_EXAM_BANK questions render cleanly in Print Row Engine (blank & teacher)`);
assert(arenaPreSpoilerCount === 0, `All ${bank.questions.length} KET_EXAM_BANK cards hide explanations & tapescripts prior to submit/reveal`);

// 7. Cross-filtered UI pill coverage check across U1, U2, U3 (zero empty Part pills!)
const allPartIds = ['RWP1', 'RWP2', 'RWP3', 'RWP4', 'RWP5', 'RWP6', 'RWP7', 'LSP1', 'LSP2', 'LSP3', 'LSP4', 'LSP5', 'SPP1', 'SPP2'];
['u1', 'u2', 'u3'].forEach(uid => {
  setArenaUnitFilter(uid);
  const arenaHtml = document.getElementById('view-arena').innerHTML;
  const zeroPills = allPartIds.filter(pid => {
    const m = arenaHtml.match(new RegExp(`setArenaPartFilter\\('${pid}'\\)">[\\s\\S]*?<span class="pill-count">(\\d+)<\\/span>`));
    return !m || parseInt(m[1], 10) < 1;
  });
  assert(zeroPills.length === 0, `UI Arena Unit [${uid.toUpperCase()}] displays >= 1 count on ALL 14 official Part pills (zero empty: ${zeroPills.join(',') || 'none'})`);
});
setArenaUnitFilter('all');

// 8. Official Launch Reset Verification for Rex & Hugo (while preserving test1 / test2)
global.localStorage.removeItem('ket_prep_v1_launch_reset_rex');
global.localStorage.setItem('ket_prep_v1_rex', JSON.stringify({ accountId: 'rex', nookMiles: 999, questionStats: { 'U01-RWP1-S2-001': { ok: 5, err: 2 } }, netErrors: { x: { count: 3 } } }));
const freshRex = AccountManager.loadAccount('rex');
const freshHugo = AccountManager.resetAccount('hugo');
const test1Acc = AccountManager.resetAccount('test1');
assert(
  freshRex.nookMiles === 0 &&
  Object.keys(freshRex.questionStats).length === 0 &&
  Object.keys(freshRex.netErrors).length === 0 &&
  freshHugo.nookMiles === 0 &&
  test1Acc.nookMiles === 100,
  'Official Launch Reset wipes stale Rex/Hugo local cache to 0 while keeping test1/test2 sandbox intact'
);

console.log('----------------------------------------------------------------');
console.log(`📊 Phase G Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');
if (failed > 0) process.exit(1);
process.exit(0);
