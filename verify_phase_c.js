/**
 * Phase C Strict Verification Gate (verify_phase_c.js)
 * Verifies Unit 2 crafted self-contained KET Exam Bank (`data/ket_exam_bank_u2.js`)
 */
const path = require('path');
const fs = require('fs');
const { validateExamQuestions } = require('./build_exam_bank.js');

const file = path.join(__dirname, 'data', 'ket_exam_bank_u2.js');
if (!fs.existsSync(file)) {
  console.error('❌ Missing data/ket_exam_bank_u2.js');
  process.exit(1);
}
const questions = require(file);
const errors = validateExamQuestions(questions, { expectedPrefix: 'U02-', minCount: 28 });

const partsPresent = new Set(questions.map(q => q.ketPart));
const requiredParts = ['RWP1', 'RWP3', 'RWP4', 'RWP5', 'RWP6', 'LSP4', 'LSP5', 'SPP1'];
requiredParts.forEach(p => {
  if (!partsPresent.has(p)) errors.push(`Unit 2 bank missing required KET part: ${p}`);
});

if (errors.length > 0) {
  console.error('❌ Phase C (Unit 2) Verification FAILED:');
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}

console.log(`✅ Phase C Verification 100% PASS: ${questions.length} self-contained Unit 2 questions verified across [${[...partsPresent].join(', ')}]`);
process.exit(0);
