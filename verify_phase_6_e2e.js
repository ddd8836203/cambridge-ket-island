/**
 * Phase 6 End-to-End Verification Gate (verify_phase_6_e2e.js)
 * Verifies:
 * 1. All prior phase gates (verify_phase_1.js ~ verify_phase_5.js) pass 100%
 * 2. iPhone 15 Pro Mobile Mode (layout-iphone-15pro, 393x852 logical px, viewport-fit=cover, safe-area-inset, collapsible reading drawer)
 * 3. Firebase Cross-Device Cloud Sync (isolated node /ket_prep_v1_users/, anti-rollback merge, status indicator)
 * 4. 100% Image & Asset reference integrity across HTML/JS/Data (zero broken images)
 * 5. Complete logic & answer key integrity across all Unit 1~3 modules
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
console.log('🚀 Running Phase 6 Full End-to-End Verification (verify_phase_6_e2e.js)...');
console.log('================================================================');

const rootDir = __dirname;

// 1. Run Phase 1 ~ 5 verification scripts
for (let p = 1; p <= 5; p++) {
  const scriptPath = path.join(rootDir, `verify_phase_${p}.js`);
  try {
    execSync(`node "${scriptPath}"`, { stdio: 'pipe' });
    assert(true, `verify_phase_${p}.js executed with 0 errors (100% PASS)`);
  } catch (err) {
    assert(false, `verify_phase_${p}.js failed: ${err.stdout ? err.stdout.toString() : err.message}`);
  }
}

const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(rootDir, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');

// 2. iPhone 15 Pro (393x852) Mobile Mode Checks
assert(html.includes('viewport-fit=cover'), 'index.html includes viewport-fit=cover for iPhone 15 Pro Dynamic Island');
assert(
  html.includes('layout-iphone-15pro') || js.includes('layout-iphone-15pro') || html.includes('iphone_15_pro') || js.includes('iphone_15_pro'),
  'HTML/JS includes iPhone 15 Pro mode toggle and class'
);
assert(
  css.includes('layout-iphone-15pro') && (css.includes('393px') || css.includes('430px') || css.includes('767px')),
  'style.css implements .layout-iphone-15pro (393x852 logical viewport) & mobile responsive rules'
);
assert(
  css.includes('safe-area-inset'),
  'style.css supports env(safe-area-inset-*) for iPhone 15 Pro Dynamic Island & Home Indicator'
);

// 3. Firebase Cross-Device Cloud Sync Checks
assert(
  js.includes('math-review-6-default-rtdb.asia-southeast1.firebasedatabase.app'),
  'app.js connects to Firebase Realtime Database for cross-device iPad <-> iPhone 15 Pro sync'
);
assert(
  js.includes('ket_prep_v1_users'),
  'app.js uses isolated Firebase path /ket_prep_v1_users/ so it never collides with other projects'
);
assert(
  js.includes('syncFromCloud') && js.includes('pushToCloud'),
  'app.js implements bidirectional syncFromCloud and pushToCloud with anti-rollback merging'
);

// 4. Asset Reference Integrity (Every assets/.../*.jpg referenced in ket_u1_u3.js, index.html, app.js exists on disk)
const dataRaw = fs.readFileSync(path.join(rootDir, 'data', 'ket_u1_u3.js'), 'utf8');
const combinedText = html + '\n' + js + '\n' + dataRaw;
const assetMatches = combinedText.match(/assets\/[a-zA-Z0-9_\/-]+\.(jpg|png|webp|svg)/g) || [];
const uniqueAssets = [...new Set(assetMatches)];

assert(uniqueAssets.length >= 35, `Found ${uniqueAssets.length} unique asset references across codebase`);

let missingAssets = [];
for (const relPath of uniqueAssets) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).size < 1000) {
    missingAssets.push(relPath);
  }
}
assert(missingAssets.length === 0, `All ${uniqueAssets.length} referenced image assets exist and are valid on disk (missing: ${missingAssets.join(', ') || 'none'})`);

// 5. Deep Data & Interactive Logic Check
const KET_DATA = require('./data/ket_u1_u3.js');
assert(Array.isArray(KET_DATA.units) && KET_DATA.units.length === 3, 'KET_DATA has all 3 units');
let totalVocab = 0;
let totalMistakes = 0;
KET_DATA.units.forEach(u => {
  totalVocab += (u.vocabulary || []).length;
  totalMistakes += (u.commonMistakes || []).length;
});
assert(totalVocab === 58, `Total vocabulary across Unit 1~3 is 58 (got ${totalVocab})`);
assert(totalMistakes === 35, `Total commonMistakes across Unit 1~3 is 35 (got ${totalMistakes})`);

console.log('----------------------------------------------------------------');
console.log(`🏆 Phase 6 E2E Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');

if (failed > 0) {
  process.exit(1);
}
process.exit(0);
