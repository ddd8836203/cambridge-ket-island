/**
 * Phase B Strict Verification Gate (verify_phase_b.js)
 * Verifies Unit 1 crafted self-contained KET Exam Bank (`data/ket_exam_bank_u1.js`)
 */
const path = require('path');
const fs = require('fs');
const { validateExamQuestions } = require('./build_exam_bank.js');

const file = path.join(__dirname, 'data', 'ket_exam_bank_u1.js');
if (!fs.existsSync(file)) {
  console.error('❌ Missing data/ket_exam_bank_u1.js');
  process.exit(1);
}
const questions = require(file);
const errors = validateExamQuestions(questions, { expectedPrefix: 'U01-', minCount: 28 });

// Must cover Unit 1 core parts
const partsPresent = new Set(questions.map(q => q.ketPart));
const requiredParts = ['RWP1', 'RWP2', 'RWP3', 'RWP4', 'RWP5', 'RWP7', 'LSP1', 'LSP3', 'SPP1'];
requiredParts.forEach(p => {
  if (!partsPresent.has(p)) errors.push(`Unit 1 bank missing required KET part: ${p}`);
});

if (errors.length > 0) {
  console.error('❌ Phase B (Unit 1) Verification FAILED:');
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}

console.log(`✅ Phase B Verification 100% PASS: ${questions.length} self-contained Unit 1 questions verified across [${[...partsPresent].join(', ')}]`);
process.exit(0);
