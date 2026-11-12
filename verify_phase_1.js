const fs = require("fs");
const path = require("path");

let passed = 0;
let failed = 0;

function assert(cond, msg) {
  if (cond) {
    console.log(`✅ [PASS] ${msg}`);
    passed++;
  } else {
    console.error(`❌ [FAIL] ${msg}`);
    failed++;
  }
}

console.log("=== Phase 1 Verification Gate ===");

// 1. Check 4 Core Logs & 3-Tier Progressive Disclosure Structure
const requiredLogs = [
  { file: "goals_and_roadmap.log", prefix: "#GOAL-" },
  { file: "web_architecture_and_design.log", prefix: "#ARCH-" },
  { file: "source_manifest.log", prefix: "#MAN-" },
  { file: "memory.log", prefix: "#MEM-" },
];

for (const log of requiredLogs) {
  const exists = fs.existsSync(log.file);
  assert(exists, `Log file exists: ${log.file}`);
  if (exists) {
    const content = fs.readFileSync(log.file, "utf8");
    const lines = content.split(/\r?\n/);
    const top25 = lines.slice(0, 25).join("\n");
    assert(
      top25.includes("0. 當下狀態快照 (TL;DR Current Snapshot)"),
      `${log.file} has '0. 當下狀態快照' within top 25 lines`
    );
    assert(
      content.includes("一、錨點索引大綱 (Indexed Outline"),
      `${log.file} has Section 1 Indexed Outline`
    );
    assert(
      content.includes("二、單一真實來源細節 (Single-Source Detailed Specifications)"),
      `${log.file} has Section 2 Single-Source Detailed Specifications`
    );
    assert(
      content.includes(`[${log.prefix}`),
      `${log.file} contains required anchor prefix [${log.prefix}*]`
    );
  }
}

// 2. Check Upright Spreads in assets/pages/
const expectedSpreads = [
  "map_of_units_p4_p5.jpg",
  "u1_p6_p7.jpg",
  "u1_p8_p9.jpg",
  "u1_p10_p11.jpg",
  "u2_p12_p13.jpg",
  "u2_p14_p15.jpg",
  "u2_p16_p17.jpg",
  "u3_p18_p19.jpg",
  "u3_p20_p21.jpg",
  "u3_p22_p23.jpg",
  "rev_u1_u2_p78_p79.jpg",
  "rev_u3_u4_p80_p81.jpg",
];

for (const s of expectedSpreads) {
  const p = path.join("assets", "pages", s);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  assert(exists && size > 100000, `Spread image valid (>100KB): ${p} (${Math.round(size / 1024)} KB)`);
}

// 3. Check Cropped Images & Manifest
const manifestPath = path.join("data", "image_manifest_u1_u3.json");
assert(fs.existsSync(manifestPath), `Image manifest exists: ${manifestPath}`);
if (fs.existsSync(manifestPath)) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  assert(manifest.crops && manifest.crops.length === 23, `Manifest has all 23 cropped figures (got ${manifest.crops.length})`);
  for (const c of manifest.crops) {
    const exists = fs.existsSync(c.path);
    const size = exists ? fs.statSync(c.path).size : 0;
    assert(
      exists && size > 20000 && c.width >= 1500 && c.height >= 700,
      `Cropped figure valid & @2x Retina ready: ${c.path} (${c.width}x${c.height}, ${Math.round(size / 1024)} KB)`
    );
  }
}

// 4. Sandbox Hygiene Check (no temp folder left behind)
assert(!fs.existsSync("temp"), "Zero-Popup Sandbox Hygiene: ./temp directory cleaned up");

console.log(`\n=== Summary: ${passed} PASSED, ${failed} FAILED ===`);
process.exit(failed === 0 ? 0 : 1);
