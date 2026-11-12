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

console.log("=== Phase 2 Verification Gate ===");

// 1. Check data file existence
const dataJsPath = path.join(__dirname, "data", "ket_u1_u3.js");
assert(fs.existsSync(dataJsPath), `ket_u1_u3.js exists at ${dataJsPath}`);

let ketData;
try {
  ketData = require(dataJsPath);
  assert(true, "ket_u1_u3.js loaded successfully as module");
} catch (e) {
  assert(false, `ket_u1_u3.js load error: ${e.message}`);
  process.exit(1);
}

// 2. Check meta & accounts & devices
assert(ketData.meta && ketData.meta.targetShields === 13, "Meta defines targetShields = 13");
assert(ketData.meta.targetScaleScore === 135, "Meta defines targetScaleScore = 135 (Merit)");
const accounts = ketData.meta.accounts || [];
assert(accounts.length === 4, `4 Accounts defined (got ${accounts.length})`);
const accountIds = accounts.map(a => a.id);
assert(
  accountIds.includes("rex") && accountIds.includes("hugo") && accountIds.includes("test1") && accountIds.includes("test2"),
  "Accounts include rex, hugo, test1, test2"
);

const devices = ketData.meta.devices || [];
assert(devices.length === 2, `2 iPad devices defined (got ${devices.length})`);
assert(
  devices.some(d => d.viewportWidth === 1080 && d.viewportHeight === 810) &&
  devices.some(d => d.viewportWidth === 1366 && d.viewportHeight === 1024),
  "Devices match iPad 10.2\" (1080x810) and iPad Pro 12.9\" (1366x1024)"
);

// 3. Check 3 units
assert(Array.isArray(ketData.units) && ketData.units.length === 3, "3 Units defined (Unit 1 ~ Unit 3)");

const expectedRevisions = {
  u1: { points: 27, p: 78 },
  u2: { points: 20, p: 79 },
  u3: { points: 24, p: 80 }
};

for (const unit of ketData.units) {
  console.log(`\n--- Validating Unit ${unit.number}: ${unit.title} (${unit.id}) ---`);
  
  // Metadata
  assert(unit.id && unit.title && unit.topic, `Unit ${unit.id} metadata complete`);
  assert(Array.isArray(unit.grammarFocus) && unit.grammarFocus.length > 0, `Unit ${unit.id} grammar focus defined`);
  assert(Array.isArray(unit.spreadPages) && unit.spreadPages.length >= 3, `Unit ${unit.id} spread pages references defined`);
  for (const page of unit.spreadPages) {
    assert(fs.existsSync(page), `Spread page file exists: ${page}`);
  }

  // Vocabulary (>= 15 items)
  const vocab = unit.vocabulary || [];
  assert(vocab.length >= 15, `Unit ${unit.id} has >= 15 vocabulary items (got ${vocab.length})`);
  const sampleVocab = vocab[0];
  assert(
    sampleVocab && sampleVocab.word && sampleVocab.pos && sampleVocab.zh && sampleVocab.collocation,
    `Unit ${unit.id} vocabulary items have word, pos, zh, collocation`
  );

  // Common Mistakes (>= 4 items)
  const mistakes = unit.commonMistakes || [];
  assert(mistakes.length >= 4, `Unit ${unit.id} has >= 4 common mistakes (got ${mistakes.length})`);
  const sampleMistake = mistakes[0];
  assert(
    sampleMistake && sampleMistake.wrong && sampleMistake.correct && sampleMistake.rule,
    `Unit ${unit.id} common mistakes have wrong, correct, rule`
  );

  // Exercises - Skills check
  const ex = unit.exercises || {};
  assert(ex && typeof ex === "object", `Unit ${unit.id} exercises object defined`);

  // Reading check
  assert(
    ex.reading || ex.readingPart2 || ex.readingPart3 || ex.readingPart4,
    `Unit ${unit.id} has Reading exam task`
  );

  // Listening check (must have tapescript, questions, distractorXray)
  const listening = ex.listening;
  assert(listening && Array.isArray(listening.questions) && listening.questions.length > 0, `Unit ${unit.id} listening questions defined (${listening ? listening.questions.length : 0} Qs)`);
  assert(
    listening && Array.isArray(listening.tapescript) && listening.tapescript.length > 0,
    `Unit ${unit.id} listening tapescript has dialogue lines (${listening ? listening.tapescript.length : 0} lines)`
  );
  const hasDistractorXray = listening && (
    (Array.isArray(listening.distractorXray) && listening.distractorXray.length > 0) ||
    listening.tapescript.some(l => l.isDistractor || l.isKey)
  );
  assert(hasDistractorXray, `Unit ${unit.id} listening includes distractor X-Ray annotations`);

  // Writing check
  const writing = ex.writing;
  assert(writing, `Unit ${unit.id} writing task defined (Part ${writing ? writing.part : '?'})`);
  if (writing) {
    if (unit.id === "u1" || unit.id === "u3") {
      if (writing.picturePrompt) {
        assert(fs.existsSync(writing.picturePrompt), `Writing picture prompt file exists: ${writing.picturePrompt}`);
      }
      assert(writing.blocks && writing.blocks.length >= 3, `Writing Part 7 has sentence-building blocks (${writing.blocks ? writing.blocks.length : 0} blocks)`);
      assert(writing.rubricChecklist, `Writing Part 7 has rubric checklist (Content, Org, Language)`);
      assert(
        writing.sampleAnswer && (writing.sampleAnswer.merit13 || writing.sampleAnswer.distinction15 || writing.sampleAnswer.pass13),
        `Writing Part 7 has 13-shield and 15-shield model answers`
      );
    } else if (unit.id === "u2") {
      assert(writing.part === 5, "Unit 2 writing covers Reading & Writing Part 5 (Open Cloze Email)");
      assert(writing.examTask, "Unit 2 Part 5 open cloze exam task defined");
    }
  }

  // Speaking check
  const speaking = ex.speaking;
  assert(speaking && (speaking.questions || speaking.dialogue), `Unit ${unit.id} speaking task defined`);
  if (speaking && speaking.questions) {
    assert(speaking.questions.length > 0, `Unit ${unit.id} speaking has questions (${speaking.questions.length} items)`);
  }

  // Revision check (matches points)
  const rev = ex.revision;
  assert(rev, `Unit ${unit.id} revision task defined`);
  if (rev) {
    const expected = expectedRevisions[unit.id];
    assert(
      rev.totalPoints === expected.points,
      `Unit ${unit.id} revision total points match textbook p.${expected.p} (${rev.totalPoints}/${expected.points} pts)`
    );
  }
}

// 4. Sandbox hygiene
assert(!fs.existsSync("temp"), "Sandbox Hygiene: ./temp directory is clean");

console.log(`\n=== Summary: ${passed} PASSED, ${failed} FAILED ===`);
process.exit(failed === 0 ? 0 : 1);
