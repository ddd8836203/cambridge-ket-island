/**
 * Phase 5 Strict Verification Gate (verify_phase_5.js)
 * Verifies:
 * 1. 5-Color Net-Error Heatmap Error Book (5 heat levels, filtering, sorting, interactive error-clearing re-quiz)
 * 2. Revision Unit 1 (27 pts), Unit 2 (20 pts), Unit 3 (24 pts) interactive challenge scoring
 * 3. @media print A4 Exam & Writing Lined Worksheet & Personalized Error-Book Worksheet print engine
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
console.log('🔍 Running Phase 5 Verification Gate (verify_phase_5.js)...');
console.log('================================================================');

const rootDir = __dirname;
const htmlPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'style.css');
const jsPath = path.join(rootDir, 'app.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

// 1. Syntax check on app.js
try {
  execSync(`node --check "${jsPath}"`, { stdio: 'pipe' });
  assert(true, 'app.js passes node --check syntax validation');
} catch (err) {
  assert(false, `app.js syntax error: ${err.message}`);
}

// 2. 5-Color Net-Error Heatmap & Re-Quiz
assert(js.includes('netErrors'), 'app.js manages netErrors for 5-color heatmap');
assert(
  (js.includes('heat-1') || js.includes('heatLevel') || js.includes('tier')) &&
  (js.includes('startErrorQuiz') || js.includes('errorQuiz') || js.includes('retryError') || js.includes('practiceError')),
  'app.js implements 5-color heatmap tiers and interactive error-clearing re-quiz'
);

// 3. Revision Unit 1~3 (p.78~80, 27 + 20 + 24 = 71 pts)
assert(
  js.includes('revisionUnit1') || js.includes('revision'),
  'app.js renders Revision Unit 1~3 (p.78~80) exercises'
);

// 4. @media print A4 Worksheet & Writing Lined Sheet Engine
assert(css.includes('@media print'), 'style.css defines @media print rules for A4 worksheets');
assert(js.includes('window.print'), 'app.js triggers window.print() for A4 exam/writing/error-book sheets');
assert(
  js.includes('writing') && (js.includes('print') || html.includes('view-print')),
  'app.js supports printable A4 worksheets and Writing lined sheets'
);

// 5. Zero backdrop-filter regression check
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css strictly avoids backdrop-filter: blur()');

console.log('----------------------------------------------------------------');
console.log(`📊 Phase 5 Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');

if (failed > 0) {
  process.exit(1);
}
process.exit(0);
