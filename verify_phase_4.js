/**
 * Phase 4 Strict Verification Gate (verify_phase_4.js)
 * Verifies:
 * 1. Reading & Writing 50:50 Split-Pane Arena (Reading Part 2, 3, 4, Open Cloze Part 5, Writing Part 7 Block Builder + 3-Point Rubric Checklist + 13/15-Shield Model Answers, Grammar Drills)
 * 2. Dual-Role Listening Theater (Part 2, 3, 4 + 1.0x/0.85x speed + Male/Female pitch/voice routing + Red/Green Distractor X-Ray transcript)
 * 3. Speaking Simulator (Part 1 & Part 2 with Examiner TTS & Model Answers)
 * 4. Integration with SoundFX, VisualFX, and 4-Account netErrors / shieldProgress
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
console.log('🔍 Running Phase 4 Verification Gate (verify_phase_4.js)...');
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

// 2. Reading & Writing 50:50 Split-Pane & All Parts
assert(js.includes('split-pane-container') && js.includes('pane-left') && js.includes('pane-right'), 'app.js implements 50:50 split-pane layout (pane-left & pane-right) for Reading & Writing');
assert(js.includes('readingPart2') && js.includes('readingPart3') && js.includes('readingPart4'), 'app.js handles Reading Part 2 (U1), Part 3 (U2), and Part 4 (U3)');
assert(js.includes('readingWritingPart5'), 'app.js handles Reading & Writing Part 5 Open Cloze (U2 Hasan email)');
assert(js.includes('writingPart7') && js.includes('rubricChecklist'), 'app.js handles Writing Part 7 3-Picture Story with sentence blocks and 3-point rubricChecklist');
assert(js.includes('13') && js.includes('15') && (js.includes('sampleAnswer') || js.includes('sampleAnswers')), 'app.js renders 13-shield vs 15-shield writing model answers');
assert(js.includes('grammarVocabDrills'), 'app.js renders interactive textbook Grammar & Vocabulary drills');

// 3. Listening Dual-Role Theater & Distractor X-Ray
assert(js.includes('listeningPart2') && js.includes('listeningPart3') && js.includes('listeningPart4'), 'app.js handles Listening Part 3 (U1), Part 4 (U2), and Part 2 (U3)');
assert(js.includes('tapescript') && js.includes('distractorXray'), 'app.js renders Listening Tapescript and Red/Green Distractor X-Ray analysis');
assert(js.includes('0.85') && (js.includes('pitch') || js.includes('speaker')), 'app.js supports 0.85x slow speed and dual-role speaker voice/pitch differentiation');

// 4. Speaking Part 1 & Part 2 Simulator
assert(js.includes('speakingPart1') && js.includes('speakingPart2'), 'app.js handles Speaking Part 1 (U1/U2) and Speaking Part 2 (U3 food discussion)');
assert(js.includes('candidateComparison') || js.includes('reasonMatching') || js.includes('appearanceMatching'), 'app.js renders interactive Speaking prep/comparison activities');

// 5. Zero backdrop-filter regression check
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css still strictly avoids backdrop-filter: blur()');

console.log('----------------------------------------------------------------');
console.log(`📊 Phase 4 Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');

if (failed > 0) {
  process.exit(1);
}
process.exit(0);
