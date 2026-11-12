const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const u1Path = path.join(dataDir, "u1_raw.json");
const u2Path = path.join(dataDir, "u2_raw.json");
const u3Path = path.join(dataDir, "u3_raw.json");
const outJsPath = path.join(dataDir, "ket_u1_u3.js");

if (!fs.existsSync(u1Path) || !fs.existsSync(u2Path) || !fs.existsSync(u3Path)) {
  console.log("Waiting for all 3 unit files (u1_raw.json, u2_raw.json, u3_raw.json) to be generated...");
  process.exit(1);
}

const u1 = JSON.parse(fs.readFileSync(u1Path, "utf8"));
const u2 = JSON.parse(fs.readFileSync(u2Path, "utf8"));
const u3 = JSON.parse(fs.readFileSync(u3Path, "utf8"));

function normalizeCommonMistakes(unitId, raw) {
  if (Array.isArray(raw)) return raw;
  const list = [];
  if (unitId === "u1" && raw) {
    if (Array.isArray(raw.haveGotMistakes)) {
      raw.haveGotMistakes.forEach((m, i) => list.push({
        id: `u1_cm_hg_${i+1}`,
        wrong: m.wrong,
        correct: m.correct,
        errorSpan: m.errorSpan || m.target,
        correction: m.correction,
        rule: m.rule
      }));
    }
    if (Array.isArray(raw.presentSimpleMistakes)) {
      raw.presentSimpleMistakes.forEach((m, i) => list.push({
        id: `u1_cm_ps_${i+1}`,
        wrong: m.wrong,
        correct: m.correct,
        errorSpan: m.errorSpan || m.target,
        correction: m.correction,
        rule: m.rule
      }));
    }
  } else if (unitId === "u2" && raw) {
    if (raw.adverbsOfFrequency && Array.isArray(raw.adverbsOfFrequency.mistakes)) {
      raw.adverbsOfFrequency.mistakes.forEach((m, i) => list.push({
        id: `u2_cm_adv_${i+1}`,
        wrong: m.wrong || m.wrongSpan || m.target || m.originalSentence,
        correct: m.correct || m.correctSpan || m.correction,
        errorSpan: m.errorSpan || m.wrongSpan || m.error,
        correction: m.correction || m.correctSpan,
        rule: m.rule || m.explanation
      }));
    }
    if (raw.pronouns && Array.isArray(raw.pronouns.items)) {
      raw.pronouns.items.forEach((m, i) => list.push({
        id: `u2_cm_pro_${i+1}`,
        wrong: m.sentence || m.wrong,
        correct: m.sentence ? m.sentence.replace("______", m.answer) : m.correct,
        errorSpan: m.answer,
        correction: m.answer,
        rule: m.explanation || m.rule
      }));
    }
  }
  return list;
}

function normalizeUnit(raw) {
  const meta = raw.unitMetadata || raw.unit || raw;
  const unitId = meta.id || raw.id;
  const ex = raw.exercises || {};

  // Standardize Common Mistakes
  const commonMistakes = normalizeCommonMistakes(unitId, raw.commonMistakes);

  // Standardize Listening
  let listening = ex.listeningPart2 || ex.listeningPart3 || ex.listeningPart4;
  if (unitId === "u1" && ex.listeningPart3) {
    const l = ex.listeningPart3;
    listening = {
      part: 3,
      title: l.title || "Listening Part 3 (Simon's Interview)",
      examTip: l.examTip,
      image: l.image,
      audioTrack: "Track 04",
      questions: (l.examTask && l.examTask.questions) || l.questions || [],
      tapescript: l.tapescript || [],
      distractorXray: (l.tapescript || []).filter(t => t.isKey || t.isDistractor),
      prepTask: l.prepTask,
      questionWordsDrill: l.questionWordsDrill
    };
  } else if (unitId === "u2" && ex.listeningPart4) {
    const l = ex.listeningPart4;
    const items = (l.exam_task && l.exam_task.items) || [];
    listening = {
      part: 4,
      title: (l.exam_task && l.exam_task.title) || "Listening Part 4 (5 Short Conversations)",
      audioTrack: "Track 07",
      items: items,
      questions: items.map(it => ({
        id: it.number,
        number: it.number,
        prompt: it.prompt,
        options: it.options,
        answer: it.answer
      })),
      tapescript: items.flatMap(it => it.tapescript || []),
      distractorXray: items.map(it => it.distractorXray),
      examFormatEx1: l.ex1_exam_format,
      prepTrack06: l.ex2_track06_prep,
      analysisTrack06: l.ex3_ex4_track06_analysis
    };
  } else if (unitId === "u3" && ex.listeningPart2) {
    const l = ex.listeningPart2;
    listening = {
      part: 2,
      title: (l.examTask && l.examTask.title) || (l.track10_examTask && l.track10_examTask.title) || l.title || "Listening Part 2 (Note Completion)",
      audioTrack: "Track 10",
      questions: l.questions || (l.track10_examTask && l.track10_examTask.questions) || [],
      tapescript: l.tapescript || (l.track10_examTask && l.track10_examTask.tapescript) || [],
      distractorXray: l.distractorXray || [],
      cafeMenuTrack09: l.track09_menuPrices || l.cafeMenuTrack09
    };
  }

  // Standardize Writing
  let writing = ex.writingPart7 || ex.writing;
  if (unitId === "u1" && ex.writingPart7) {
    const w = ex.writingPart7;
    const blocksArray = Array.isArray(w.blocks) ? w.blocks : Object.values(w.blocks || {});
    writing = {
      part: 7,
      title: w.title,
      picturePrompt: w.picturePrompt,
      storyTitle: w.storyTitle,
      blocks: blocksArray,
      rubricChecklist: w.rubricChecklist,
      sampleAnswer: {
        merit13: (w.sampleAnswers && w.sampleAnswers.guaranteed13Shields) || (w.sampleAnswer && w.sampleAnswer.merit13),
        distinction15: (w.sampleAnswers && w.sampleAnswers.fullMarks15Shields) || (w.sampleAnswer && w.sampleAnswer.distinction15)
      },
      sampleAnswers: w.sampleAnswers,
      practiceTask: w.practiceTask
    };
  } else if (unitId === "u2" && ex.readingWritingPart5) {
    const p5 = ex.readingWritingPart5;
    writing = {
      part: 5,
      type: "readingWritingPart5",
      title: "Reading & Writing Part 5 (Open Cloze Email)",
      examTask: p5.exam_task || p5.examTask
    };
  } else if (unitId === "u3" && ex.writingPart7) {
    const w = ex.writingPart7;
    writing = {
      part: 7,
      title: w.title,
      picturePrompt: w.picturePrompt,
      blocks: Array.isArray(w.blocks) ? w.blocks : Object.values(w.blocks || {}),
      rubricChecklist: w.rubricChecklist,
      sampleAnswer: w.sampleAnswer,
      examTask: w.examTask
    };
  }

  // Standardize Speaking
  let speaking = ex.speakingPart1 || ex.speakingPart2 || ex.speaking;
  if (unitId === "u1" && ex.speakingPart1) {
    const sp = ex.speakingPart1;
    const qList = Array.isArray(sp.examTask) ? sp.examTask : (sp.examTask && sp.examTask.questions) || [];
    speaking = {
      part: 1,
      title: sp.title || "Speaking Part 1 (Personal Questions)",
      examTip: sp.examTip,
      image: sp.image,
      questions: qList,
      appearanceMatching: sp.appearanceMatching,
      teacherDescription: sp.teacherDescription
    };
  } else if (unitId === "u2" && ex.speakingPart1) {
    const sp = ex.speakingPart1;
    const qList = (sp.ex6_speaking_expansion && sp.ex6_speaking_expansion.modelInterviews) || (sp.ex2_personal_opinions && sp.ex2_personal_opinions.templates) || [];
    speaking = {
      part: 1,
      title: "Speaking Part 1 (Hobbies & Free Time)",
      questions: qList,
      dialogues: qList,
      classification: sp.ex1_classification,
      examinerDialogueTrack08: sp.ex4_ex5_track08_examiner,
      expansion: sp.ex6_speaking_expansion
    };
  } else if (unitId === "u3" && ex.speakingPart2) {
    const sp = ex.speakingPart2;
    speaking = {
      part: 2,
      title: sp.title || "Speaking Part 2 (Food & Meals Discussion)",
      questions: (sp.examTask && sp.examTask.discussionCards) || sp.questions || [],
      dialogue: (sp.candidateComparison && sp.candidateComparison.dialogue) || [],
      reasonMatching: sp.reasonMatching,
      candidateComparison: sp.candidateComparison,
      examTask: sp.examTask
    };
  }

  // Standardize Revision
  let revision = ex.revisionUnit1 || ex.revisionUnit2 || ex.revisionUnit3 || ex.revision;
  if (unitId === "u1" && ex.revisionUnit1) {
    const r = ex.revisionUnit1;
    revision = {
      unitId: "u1",
      totalPoints: r.totalMarks || 27,
      totalMarks: r.totalMarks || 27,
      pageImage: r.pageImage,
      exercises: [r.exercise1, r.exercise2, r.exercise3, r.exercise4]
    };
  } else if (unitId === "u2" && ex.revisionUnit2) {
    const r = ex.revisionUnit2;
    revision = {
      unitId: "u2",
      totalPoints: (r.meta && r.meta.totalMarks) || 20,
      totalMarks: (r.meta && r.meta.totalMarks) || 20,
      exercises: [r.ex1_adverbs_rewrite, r.ex2_like_would_like, r.ex3_vocab_fill]
    };
  } else if (unitId === "u3" && ex.revisionUnit3) {
    const r = ex.revisionUnit3;
    revision = {
      unitId: "u3",
      totalPoints: r.totalPoints || 24,
      totalMarks: r.totalPoints || 24,
      exercises: [r.ex1_furniture_crossword, r.ex2_some_any, r.ex3_have_to]
    };
  }

  // Reading task
  let reading = ex.readingPart2 || ex.readingPart3 || ex.readingPart4;
  if (unitId === "u1") reading = ex.readingPart2;
  if (unitId === "u2") reading = ex.readingPart3;
  if (unitId === "u3") reading = ex.readingPart4;

  const normalizedEx = {
    ...ex,
    reading: reading,
    readingPart2: unitId === "u1" ? reading : ex.readingPart2,
    readingPart3: unitId === "u2" ? reading : ex.readingPart3,
    readingPart4: unitId === "u3" ? reading : ex.readingPart4,
    listening: listening,
    listeningPart2: unitId === "u3" ? listening : null,
    listeningPart3: unitId === "u1" ? listening : null,
    listeningPart4: unitId === "u2" ? listening : null,
    writing: writing,
    writingPart7: (unitId === "u1" || unitId === "u3") ? writing : null,
    speaking: speaking,
    speakingPart1: (unitId === "u1" || unitId === "u2") ? speaking : null,
    speakingPart2: unitId === "u3" ? speaking : null,
    revision: revision,
    revisionUnit1: unitId === "u1" ? revision : null,
    revisionUnit2: unitId === "u2" ? revision : null,
    revisionUnit3: unitId === "u3" ? revision : null
  };

  return {
    id: unitId,
    number: meta.number || raw.number,
    title: meta.title || raw.title,
    topic: meta.topic || raw.topic,
    grammarFocus: meta.grammarFocus || raw.grammarFocus,
    spreadPages: meta.spreadPages || raw.spreadPages,
    revisionPage: meta.revisionPage || raw.revisionPage,
    images: meta.images || meta.croppedImages || raw.images || raw.croppedImages,
    vocabulary: raw.vocabulary || [],
    commonMistakes: commonMistakes,
    exercises: normalizedEx
  };
}

const ketData = {
  meta: {
    bookTitle: "Compact Key for Schools (2nd Edition)",
    targetShields: 13,
    targetScaleScore: 135,
    minPassAccuracy: 0.82,
    totalUnits: 3,
    accounts: [
      { id: "rex", name: "Rex", grade: "6年級", role: "student", avatar: "🦁", notes: "主力考生1號：獨立錯題本與 15 盾牌雷達" },
      { id: "hugo", name: "Hugo", grade: "5年級", role: "student", avatar: "🐯", notes: "主力考生2號：強化單字字根與詞性提示輔助" },
      { id: "test1", name: "家長測試 1", grade: "家長/老師", role: "tester", avatar: "🧪", notes: "功能驗證沙盒，不污染考生數據" },
      { id: "test2", name: "訪客測試 2", grade: "訪客備用", role: "tester", avatar: "🛠️", notes: "快速演練與展示" }
    ],
    devices: [
      { id: "ipad_102", name: "iPad 10.2\"", viewportWidth: 1080, viewportHeight: 810, safeHeight: 680, cssClass: "layout-ipad-102" },
      { id: "ipad_pro_129", name: "iPad Pro 12.9\"", viewportWidth: 1366, viewportHeight: 1024, safeHeight: 900, cssClass: "layout-ipad-129" }
    ]
  },
  units: [normalizeUnit(u1), normalizeUnit(u2), normalizeUnit(u3)]
};

const jsContent = `/**
 * Cambridge English: A2 Key (KET) Preparation System
 * Unit 1 ~ Unit 3 + Revision 1 ~ 3 Complete Structured Database
 * Generated automatically by Phase 2 Pipeline
 */
const KET_DATA = ${JSON.stringify(ketData, null, 2)};
if (typeof window !== 'undefined') {
  window.KET_DATA = KET_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KET_DATA;
}
`;

fs.writeFileSync(outJsPath, jsContent, "utf8");
console.log(`✅ Successfully assembled ${outJsPath} (Size: ${Math.round(Buffer.byteLength(jsContent, "utf8") / 1024)} KB)`);

// Sandbox Hygiene: Clean up any temp folder created during build
const tempDir = path.join(__dirname, "temp");
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log("🧹 Cleaned up ./temp folder");
}
