/**
 * Phase D Strict Verification Gate (verify_phase_d.js)
 * Verifies Unit 3 & Revision (`data/ket_exam_bank_u3.js`), compiles `data/ket_exam_bank.js`,
 * checks full 14-Part Cambridge KET coverage, and runs Phase A + Phase 6 E2E regression tests.
 */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const { KET_PARTS_META, validateExamQuestions, buildCombinedBank } = require('./build_exam_bank.js');

const file = path.join(__dirname, 'data', 'ket_exam_bank_u3.js');
if (!fs.existsSync(file)) {
  console.error('❌ Missing data/ket_exam_bank_u3.js');
  process.exit(1);
}
const u3Questions = require(file);
const errors = validateExamQuestions(u3Questions, { expectedPrefix: 'U03-', minCount: 28 });

const partsPresentU3 = new Set(u3Questions.map(q => q.ketPart));
const requiredU3Parts = ['RWP1', 'RWP4', 'RWP5', 'RWP7', 'LSP2', 'LSP3', 'SPP2'];
requiredU3Parts.forEach(p => {
  if (!partsPresentU3.has(p)) errors.push(`Unit 3 bank missing required KET part: ${p}`);
});

if (errors.length > 0) {
  console.error('❌ Phase D (Unit 3) Verification FAILED:');
  errors.forEach(e => console.error('  -', e));
  process.exit(1);
}

// Build combined ket_exam_bank.js and verify ALL 14 official KET parts exist
const combinedBank = buildCombinedBank();
const allParts = new Set(combinedBank.questions.map(q => q.ketPart));
const missingOfficialParts = KET_PARTS_META.map(p => p.id).filter(id => !allParts.has(id));

if (missingOfficialParts.length > 0) {
  console.error(`❌ Combined bank missing official KET Parts: ${missingOfficialParts.join(', ')}`);
  process.exit(1);
}

// Check revision presence
const revCount = combinedBank.questions.filter(q => q.unitId === 'rev').length;
if (revCount < 4) {
  console.error(`❌ Combined bank must have >= 4 Revision (unitId: 'rev') cumulative questions (got ${revCount})`);
  process.exit(1);
}

// Verify all downstream test suites pass
console.log('🔍 Running verify_phase_a.js & verify_phase_6_e2e.js regressions...');
execSync(`node "${path.join(__dirname, 'verify_phase_a.js')}"`, { stdio: 'inherit' });
execSync(`node "${path.join(__dirname, 'verify_phase_6_e2e.js')}"`, { stdio: 'inherit' });

console.log(`🏆 Phase D Total E2E 100% PASS! Combined Bank: ${combinedBank.questions.length} self-contained KET questions covering ALL 14 official Parts (Rev: ${revCount}).`);
process.exit(0);
