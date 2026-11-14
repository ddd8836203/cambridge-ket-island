/**
 * Phase F Strict Verification Gate (verify_phase_f.js)
 * Verifies:
 * 1. Rebuilds combined data/ket_exam_bank.js from Unit 1, Unit 2, Unit 3 modules via buildCombinedBank()
 * 2. Asserts Unit 1, Unit 2, and Unit 3 EACH cover ALL 14 official KET parts (RWP1-7, LSP1-5, SPP1-2) with >= 1 question per part (zero 0-count pill gaps!)
 * 3. Validates every question via validateExamQuestions() (unique codes, verified disk assets, 4D explanations, extensionStudy, zero textbook refs)
 * 4. Confirms combined bank integrates cleanly into window.KET_EXAM_BANK and passes node --check
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { KET_PARTS_META, validateExamQuestions, buildCombinedBank } = require('./build_exam_bank');

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
console.log('🧩 Running Phase F Full-14-Part Coverage Verification (verify_phase_f.js)...');
console.log('================================================================');

const bank = buildCombinedBank();
const questions = bank && Array.isArray(bank.questions) ? bank.questions : [];
const allParts = KET_PARTS_META.map(p => p.id);

assert(allParts.length === 14, `KET_PARTS_META defines all ${allParts.length} official parts`);
assert(questions.length >= 140, `Combined bank contains ${questions.length} total questions (>= 140)`);

try {
  execSync(`node --check "${path.join(__dirname, 'data', 'ket_exam_bank.js')}"`, { stdio: 'pipe' });
  assert(true, 'data/ket_exam_bank.js passes node --check');
} catch (e) {
  assert(false, 'data/ket_exam_bank.js syntax error: ' + e.message);
}

const valErrors = validateExamQuestions(questions, { minCount: 140 });
if (valErrors.length > 0) {
  valErrors.slice(0, 15).forEach(err => console.error('  [VAL ERR]', err));
}
assert(valErrors.length === 0, `validateExamQuestions passes with 0 errors across all ${questions.length} questions`);

const codeSet = new Set(questions.map(q => q.code));
assert(codeSet.size === questions.length, `All ${questions.length} question codes are strictly unique`);

// Verify EACH unit individually has >= 1 question in ALL 14 Parts
['u1', 'u2', 'u3'].forEach(uid => {
  const unitQs = questions.filter(q => q.unitId === uid);
  const missing = allParts.filter(p => !unitQs.some(q => q.ketPart === p));
  const counts = allParts.map(p => `${p}:${unitQs.filter(q => q.ketPart === p).length}`).join(' ');
  console.log(`  [INFO] ${uid.toUpperCase()} (${unitQs.length} Qs): ${counts}`);
  assert(
    missing.length === 0,
    `${uid.toUpperCase()} covers all 14 official KET Parts with >= 1 question each (missing: ${missing.join(', ') || 'none'})`
  );
});

const revQs = questions.filter(q => q.unitId === 'rev');
assert(revQs.length >= 6, `Revision bank contains ${revQs.length} comprehensive questions (>= 6)`);

console.log('----------------------------------------------------------------');
console.log(`📊 Phase F Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');
if (failed > 0) process.exit(1);
process.exit(0);
