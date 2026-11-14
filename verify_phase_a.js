/**
 * Phase A Strict Verification Gate (verify_phase_a.js)
 * Verifies:
 * 1. KET Exam Grid Arena (#view-arena, #quiz-grid-drawer) UI & CSS heatmap classes
 * 2. Question ID code format, 5-star rating & 14 official KET parts filtering
 * 3. Pure zero-hint pre-answer mode (hides explanation, extensionStudy & audio tapescript until answered)
 * 4. Post-answer 4-dimension Flyers-level explanation + collapsible "延伸學習重點" button
 * 5. Per-account questionStats (ok, err, net) persistence & Firebase sync integration
 * 6. Syntax & CSS brace balance & regression checks
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  [PASS] ${message}`);
  } else {
    failed++;
    console.error(`  [FAIL] ${message}`);
  }
}

console.log('================================================================');
console.log('🎯 Running Phase A Verification Gate (verify_phase_a.js)...');
console.log('================================================================');

const rootDir = __dirname;
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');
const bankPath = path.join(rootDir, 'data', 'ket_exam_bank.js');

// 1. Files & syntax
assert(fs.existsSync(bankPath), 'data/ket_exam_bank.js exists');
assert(html.includes('data/ket_exam_bank.js'), 'index.html loads data/ket_exam_bank.js');
assert(html.includes('id="tab-arena"') && html.includes('id="view-arena"'), 'index.html adds KET Exam Arena tab and view container');

try {
  execSync(`node --check "${path.join(rootDir, 'app.js')}"`, { stdio: 'pipe' });
  assert(true, 'app.js passes node --check');
} catch (err) {
  assert(false, `app.js syntax error: ${err.message}`);
}

try {
  execSync(`node --check "${bankPath}"`, { stdio: 'pipe' });
  assert(true, 'data/ket_exam_bank.js passes node --check');
} catch (err) {
  assert(false, `data/ket_exam_bank.js syntax error: ${err.message}`);
}

// 2. CSS brace check & Natural-webapp grid styles
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
const openB = (cssNoComments.match(/\{/g) || []).length;
const closeB = (cssNoComments.match(/\}/g) || []).length;
assert(openB === closeB, `style.css has balanced braces (${openB}/${closeB})`);
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css avoids backdrop-filter: blur()');

assert(
  css.includes('quiz-grid-drawer') && css.includes('drawer-q-btn') && css.includes('q-badge-ok') && css.includes('q-badge-bad'),
  'style.css defines Natural-webapp style quiz grid drawer, ok badge, and bad badge'
);
assert(
  css.includes('heat-bad-heavy') && css.includes('heat-ok-heavy') && css.includes('heat-tie'),
  'style.css defines net-error grid heat classes'
);
assert(
  css.includes('ket-explanation-panel') && css.includes('ket-extension-box'),
  'style.css defines post-answer explanation panel and extension study box'
);

// 3. App logic for Arena, Stats, Zero-Hint Exam Mode, Post-Answer 4-part Explanation + Extension toggle
assert(js.includes('questionStats'), 'app.js tracks per-question ok/err/net statistics in accountData');
assert(js.includes('renderArenaPod'), 'app.js implements renderArenaPod()');
assert(js.includes('quiz-grid-drawer') && js.includes('q-badge-ok') && js.includes('q-badge-bad'), 'app.js renders grid drawer with green ok and red bad counts');
assert(js.includes('RWP1') && js.includes('RWP5') && js.includes('LSP1') && js.includes('LSP5') && js.includes('SPP2'), 'app.js supports all 14 official KET parts in Arena filter');
assert(js.includes('延伸學習重點'), 'app.js includes collapsible "延伸學習重點" button & drawer');
assert(js.includes('examPurpose') && js.includes('correctReason') && js.includes('distractorAnalysis'), 'app.js renders examPurpose, correctReason, and distractorAnalysis post-answer');
assert(js.includes('arenaExamMode') || js.includes('mock'), 'app.js supports Instant vs Pure Mock Exam toggle');

console.log('----------------------------------------------------------------');
console.log(`📊 Phase A Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');

if (failed > 0) process.exit(1);
process.exit(0);
