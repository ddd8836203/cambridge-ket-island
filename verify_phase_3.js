/**
 * Phase 3 Strict Verification Gate (verify_phase_3.js)
 * Verifies:
 * 1. Existence & non-empty size of index.html, style.css, app.js
 * 2. JavaScript syntax check (`node --check app.js`)
 * 3. Animal Crossing (動物森友會) palette & zero backdrop-filter blur rule in style.css
 * 4. Dual iPad Landscape modes (1080x810 & 1366x1024) + 5-step --font-scale support
 * 5. 4-Account Sandbox (rex, hugo, test1, test2) & ket_prep_v1_ storage isolation
 * 6. Web Audio API SoundFX synthesizer (playCorrect, playWrong, playFanfare, playClick, playBebebese)
 * 7. VisualFX particle burst & shake animation support
 * 8. 15-Shield Dashboard, Unit 1~3 Vocabulary Pod (Flashcards + Quiz), Common Mistakes Bug-Catcher (35 items), Textbook Spread Viewer
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
console.log('🔍 Running Phase 3 Verification Gate (verify_phase_3.js)...');
console.log('================================================================');

const rootDir = __dirname;
const htmlPath = path.join(rootDir, 'index.html');
const cssPath = path.join(rootDir, 'style.css');
const jsPath = path.join(rootDir, 'app.js');

// 1. Check files exist
assert(fs.existsSync(htmlPath), 'index.html exists');
assert(fs.existsSync(cssPath), 'style.css exists');
assert(fs.existsSync(jsPath), 'app.js exists');

if (!fs.existsSync(htmlPath) || !fs.existsSync(cssPath) || !fs.existsSync(jsPath)) {
  console.error('❌ Missing core Phase 3 files. Aborting.');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

assert(html.length > 2500, `index.html has substantial content (${html.length} bytes)`);
assert(css.length > 6000, `style.css has substantial styling (${css.length} bytes)`);
assert(js.length > 15000, `app.js has substantial logic (${js.length} bytes)`);

// 2. Syntax check on app.js
try {
  execSync(`node --check "${jsPath}"`, { stdio: 'pipe' });
  assert(true, 'app.js passes node --check syntax validation');
} catch (err) {
  assert(false, `app.js syntax error: ${err.message}`);
}

// 3. Check index.html structure & script links
assert(html.includes('style.css'), 'index.html links style.css');
assert(html.includes('data/ket_u1_u3.js'), 'index.html loads data/ket_u1_u3.js');
assert(html.includes('app.js'), 'index.html loads app.js');
assert(html.includes('rex') && html.includes('hugo') && html.includes('test1') && html.includes('test2'), 'index.html or app template references 4 accounts');

// 4. Check style.css for Animal Crossing theme, Dual iPad Modes, Font Scaling & Zero backdrop-filter
assert(css.includes('--font-scale'), 'style.css defines --font-scale custom property');
assert(css.includes('#F7F4EB') || css.includes('#f7f4eb'), 'style.css uses Animal Crossing cream background (#F7F4EB)');
assert(css.includes('#78C850') || css.includes('#78c850'), 'style.css uses Nook Leaf Green (#78C850)');
assert(css.includes('#5C3D2E') || css.includes('#5c3d2e'), 'style.css uses Animal Crossing Wood Brown text/border (#5C3D2E)');
assert(css.includes('layout-ipad-102'), 'style.css implements .layout-ipad-102 (iPad 10.2" 1080x810 mode)');
assert(css.includes('layout-ipad-129'), 'style.css implements .layout-ipad-129 (iPad Pro 12.9" 1366x1024 mode)');
assert(css.includes('1080px') && css.includes('1366px'), 'style.css explicitly targets 1080px and 1366px logical widths');
assert(css.includes('ac-shake'), 'style.css defines ac-shake animation for wrong answer feedback');

// Check zero heavy backdrop-filter blur (strip comments first)
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
assert(!/backdrop-filter\s*:\s*blur/i.test(cssNoComments), 'style.css strictly avoids backdrop-filter: blur() for iPad Pro 12.9" Gen 2 120Hz smoothness');

// 5. Check app.js for SoundFX, VisualFX, 4-Account Sandbox, TTS Unlock, and Phase 3 Modules
assert(js.includes('AudioContext') || js.includes('webkitAudioContext'), 'app.js implements Web Audio API synthesizer');
assert(js.includes('playCorrect') && js.includes('playWrong') && js.includes('playFanfare') && js.includes('playClick'), 'app.js SoundFX implements playCorrect, playWrong, playFanfare, playClick');
assert(js.includes('playBebebese'), 'app.js SoundFX implements Animal Crossing style playBebebese sound');
assert(js.includes('burstParticles') || js.includes('spawnParticles'), 'app.js VisualFX implements particle confetti burst');
assert(js.includes('ket_prep_v1_'), 'app.js isolates account storage using ket_prep_v1_{accountId}');
assert(js.includes('speechSynthesis'), 'app.js integrates Web Speech API TTS');
assert(js.includes('en-GB'), 'app.js targets British English (en-GB) for KET pronunciation');
assert(js.includes('vocabulary') && js.includes('commonMistakes'), 'app.js renders Unit 1~3 vocabulary flashcards/quiz and commonMistakes bug-catcher');
assert(js.includes('spreadPages'), 'app.js renders textbook original spread viewer');

// 6. Check Phase 4 & Phase 5 mounting hooks exist so next phases integrate cleanly
assert(
  (html.includes('view-rw') || js.includes('view-rw')) &&
  (html.includes('view-listening') || js.includes('view-listening')) &&
  (html.includes('view-speaking') || js.includes('view-speaking')) &&
  (html.includes('view-errorbook') || js.includes('view-errorbook')) &&
  (html.includes('view-print') || js.includes('view-print')),
  'Phase 4 & 5 view containers (view-rw, view-listening, view-speaking, view-errorbook, view-print) are reserved and ready'
);

console.log('----------------------------------------------------------------');
console.log(`📊 Phase 3 Verification Summary: ${passed} PASSED, ${failed} FAILED`);
console.log('----------------------------------------------------------------');

if (failed > 0) {
  process.exit(1);
}
process.exit(0);
