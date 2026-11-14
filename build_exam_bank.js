/**
 * Builds & Strictly Validates `data/ket_exam_bank.js`
 * Combines:
 *   - data/ket_exam_bank_u1.js (Phase B)
 *   - data/ket_exam_bank_u2.js (Phase C)
 *   - data/ket_exam_bank_u3.js (Phase D)
 * Exported helper `validateExamQuestions(questions)` is also used by verify_phase_b/c/d.
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const KET_PARTS_META = [
  { id: 'RWP1', section: 'reading', name: 'RW Part 1', fullName: 'Part 1 短訊/告示三選一', desc: '看懂簡短告示牌、簡訊或便條的核心語意' },
  { id: 'RWP2', section: 'reading', name: 'RW Part 2', fullName: 'Part 2 三選一文本配對', desc: '閱讀三位人物短文並配對 7 個細節問題' },
  { id: 'RWP3', section: 'reading', name: 'RW Part 3', fullName: 'Part 3 三選一長文理解', desc: '閱讀專訪或報導長文，測試細節與主旨轉換' },
  { id: 'RWP4', section: 'reading', name: 'RW Part 4', fullName: 'Part 4 詞彙克漏字', desc: '短文挖 6 空，從三個相近字詞中選出正確搭配' },
  { id: 'RWP5', section: 'reading', name: 'RW Part 5', fullName: 'Part 5 開放式文法填空', desc: '無選項！依上下文與文法結構每格寫出 1 個字' },
  { id: 'RWP6', section: 'writing', name: 'WR Part 6', fullName: 'Part 6 短訊寫作 (25+字)', desc: '依情境與 3 個提示點寫一封完整短訊或 Email' },
  { id: 'RWP7', section: 'writing', name: 'WR Part 7', fullName: 'Part 7 看圖寫故事 (35+字)', desc: '根據三張連環圖片寫出有時序與連貫性的過去式故事' },
  { id: 'LSP1', section: 'listening', name: 'LS Part 1', fullName: 'Part 1 聽力圖片三選一', desc: '聽短對話選出正確的圖示、時間或物品' },
  { id: 'LSP2', section: 'listening', name: 'LS Part 2', fullName: 'Part 2 聽力表格填空', desc: '聽獨白廣播填寫價格、時間、人名拼字與數量' },
  { id: 'LSP3', section: 'listening', name: 'LS Part 3', fullName: 'Part 3 聽力長對話理解', desc: '聽兩人長對話掌握細節與態度轉折' },
  { id: 'LSP4', section: 'listening', name: 'LS Part 4', fullName: 'Part 4 聽力短對話主旨', desc: '聽獨立短對話或獨白判斷目的、感受或理由' },
  { id: 'LSP5', section: 'listening', name: 'LS Part 5', fullName: 'Part 5 聽力資訊配對', desc: '聽長對話將 5 個對象配對 8 個活動或地點選項' },
  { id: 'SPP1', section: 'speaking', name: 'SP Part 1', fullName: 'Part 1 口說考官問答', desc: '基本資料回答 + 日常話題完整句子表達' },
  { id: 'SPP2', section: 'speaking', name: 'SP Part 2', fullName: 'Part 2 口說五圖互動討論', desc: '與搭檔針對 5 張情境圖討論喜好與原因並回答追問' }
];

function validateExamQuestions(questions, { expectedPrefix = null, minCount = 1 } = {}) {
  const errors = [];
  if (!Array.isArray(questions) || questions.length < minCount) {
    errors.push(`Expected at least ${minCount} questions, got ${Array.isArray(questions) ? questions.length : typeof questions}`);
    return errors;
  }

  const seenCodes = new Set();
  const codeRegex = /^(U0[1-3]|REV|EXT)-(RWP[1-7]|LSP[1-5]|SPP[1-2])-S[1-5]-\d{3}$/;
  const textbookRefRegex = /page\s+\d+|exercise\s+\d+\s+on\s+p\.|參考課本第\s*\d+\s*頁|課本上方方框/i;

  questions.forEach((q, idx) => {
    const tag = q && q.code ? q.code : `#${idx}`;
    if (!q || typeof q !== 'object') {
      errors.push(`${tag}: Not an object`);
      return;
    }
    if (!codeRegex.test(q.code)) {
      errors.push(`${tag}: Invalid code format "${q.code}" (must match U0x/REV-PART-Sx-xxx)`);
    }
    if (expectedPrefix && !String(q.code).startsWith(expectedPrefix) && !String(q.code).startsWith('REV-')) {
      errors.push(`${tag}: Code must start with ${expectedPrefix}`);
    }
    if (seenCodes.has(q.code)) {
      errors.push(`${tag}: Duplicate question code`);
    }
    seenCodes.add(q.code);

    if (!['u1', 'u2', 'u3', 'rev'].includes(q.unitId)) {
      errors.push(`${tag}: Invalid unitId "${q.unitId}"`);
    }
    if (!Number.isInteger(q.difficulty) || q.difficulty < 1 || q.difficulty > 5) {
      errors.push(`${tag}: Difficulty must be integer 1..5 (got ${q.difficulty})`);
    }
    if (!['choice', 'gap', 'writing', 'speaking'].includes(q.questionType)) {
      errors.push(`${tag}: Invalid questionType "${q.questionType}"`);
    }
    if (!q.prompt || String(q.prompt).trim().length < 10) {
      errors.push(`${tag}: Missing or too-short prompt`);
    }
    if (textbookRefRegex.test(String(q.prompt)) || textbookRefRegex.test(String(q.instruction || ''))) {
      errors.push(`${tag}: Contains textbook dependency reference instead of being self-contained`);
    }

    // Image existence check
    if (q.image) {
      const imgPath = path.join(ROOT, q.image);
      if (!fs.existsSync(imgPath)) {
        errors.push(`${tag}: Referenced image does not exist on disk: ${q.image}`);
      }
    }

    // Section-specific self-containment
    const isReadingContextPart = ['RWP1', 'RWP2', 'RWP3', 'RWP4', 'RWP5'].includes(q.ketPart);
    if (isReadingContextPart && (!q.passageHtml || q.passageHtml.length < 40)) {
      errors.push(`${tag}: Reading part ${q.ketPart} must include full self-contained passageHtml`);
    }
    if (q.section === 'listening' || String(q.ketPart).startsWith('LS')) {
      if (!Array.isArray(q.audioLines) || q.audioLines.length < 3) {
        errors.push(`${tag}: Listening item must include audioLines (>= 3 turns)`);
      }
    }

    // Options & Answer validation
    if (q.questionType === 'choice') {
      if (!Array.isArray(q.options) || q.options.length < 3) {
        errors.push(`${tag}: choice question must have >= 3 options`);
      } else {
        const keys = q.options.map(o => o.key);
        if (!keys.includes(q.answer)) {
          errors.push(`${tag}: answer "${q.answer}" not in option keys [${keys.join(', ')}]`);
        }
        // Check EVERY wrong option is explained in distractorAnalysis!
        const da = q.explanation && q.explanation.distractorAnalysis;
        if (!da || typeof da !== 'object') {
          errors.push(`${tag}: choice question missing explanation.distractorAnalysis`);
        } else {
          const wrongKeys = keys.filter(k => k !== q.answer);
          const missingWrong = wrongKeys.filter(wk => !da[wk] || String(da[wk]).trim().length < 8);
          if (missingWrong.length > 0 && keys.length <= 4) {
            errors.push(`${tag}: distractorAnalysis missing detailed reason for wrong option(s): ${missingWrong.join(', ')}`);
          } else if (keys.length > 4 && Object.keys(da).length < 2) {
            errors.push(`${tag}: LSP5 matching question needs >= 2 distractor explanations in distractorAnalysis`);
          }
        }
      }
    } else if (q.questionType === 'gap') {
      if (q.options !== null && q.options !== undefined) {
        errors.push(`${tag}: gap question MUST have options: null (zero word bank spoiler before submit)`);
      }
      if (!Array.isArray(q.answer) || q.answer.length === 0) {
        errors.push(`${tag}: gap question must have non-empty answer array`);
      }
      const traps = q.explanation && q.explanation.commonTraps;
      if (!Array.isArray(traps) || traps.length < 2) {
        errors.push(`${tag}: gap question must explain >= 2 commonTraps`);
      }
    } else if (q.questionType === 'writing' || q.questionType === 'speaking') {
      if (!q.modelAnswers || (!q.modelAnswers.band13 && !q.modelAnswers.band15)) {
        errors.push(`${tag}: ${q.questionType} question must include modelAnswers (band13 / band15)`);
      }
      const traps = q.explanation && q.explanation.commonTraps;
      if (!Array.isArray(traps) || traps.length < 2) {
        errors.push(`${tag}: ${q.questionType} question must explain >= 2 commonTraps`);
      }
    }

    // Core Flyers-to-KET explanation & extensionStudy checks
    if (!q.explanation || !q.explanation.examPurpose || q.explanation.examPurpose.length < 18) {
      errors.push(`${tag}: Missing or too-short explanation.examPurpose`);
    }
    if (!q.explanation || !q.explanation.correctReason || q.explanation.correctReason.length < 20) {
      errors.push(`${tag}: Missing or too-short explanation.correctReason`);
    }
    if (!q.extensionStudy) {
      errors.push(`${tag}: Missing extensionStudy object`);
    } else {
      if (!Array.isArray(q.extensionStudy.synonyms) || q.extensionStudy.synonyms.length < 2) {
        errors.push(`${tag}: extensionStudy.synonyms must contain >= 2 items`);
      }
      if (!q.extensionStudy.grammarCompare || q.extensionStudy.grammarCompare.length < 18) {
        errors.push(`${tag}: extensionStudy.grammarCompare missing or too short`);
      }
      if (!q.extensionStudy.examVariations || q.extensionStudy.examVariations.length < 18) {
        errors.push(`${tag}: extensionStudy.examVariations missing or too short`);
      }
    }
  });

  return errors;
}

function buildCombinedBank() {
  const unitFiles = [
    path.join(ROOT, 'data', 'ket_exam_bank_u1.js'),
    path.join(ROOT, 'data', 'ket_exam_bank_u2.js'),
    path.join(ROOT, 'data', 'ket_exam_bank_u3.js')
  ];

  let combined = [];
  for (const uf of unitFiles) {
    if (!fs.existsSync(uf)) {
      throw new Error(`Missing unit module: ${uf}`);
    }
    delete require.cache[require.resolve(uf)];
    const arr = require(uf);
    if (!Array.isArray(arr)) {
      throw new Error(`${uf} must export an Array of questions`);
    }
    combined = combined.concat(arr);
  }

  const errors = validateExamQuestions(combined, { minCount: 80 });
  if (errors.length > 0) {
    console.error('❌ Validation failed while building ket_exam_bank.js:');
    errors.forEach(e => console.error('  -', e));
    process.exit(1);
  }

  const outObj = {
    version: '2.1.0',
    generatedAt: new Date().toISOString(),
    ketParts: KET_PARTS_META,
    questions: combined
  };

  const outContent = `/**
 * 🏝️ 動森 KET 13盾衝刺島 — 100% 獨立自足・純淨真考題庫 (window.KET_EXAM_BANK)
 * 自動整合自 Unit 1, Unit 2, Unit 3 & Revision 精煉題庫 (共 ${combined.length} 題，完整覆蓋 14 大 KET 官方 Part)
 * Do not edit manually; regenerate via build_exam_bank.js
 */
const KET_EXAM_BANK = ${JSON.stringify(outObj, null, 2)};

if (typeof window !== 'undefined') {
  window.KET_EXAM_BANK = KET_EXAM_BANK;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KET_EXAM_BANK;
}
`;

  const outPath = path.join(ROOT, 'data', 'ket_exam_bank.js');
  fs.writeFileSync(outPath, outContent, 'utf8');
  console.log(`✅ Built ${outPath} successfully (${combined.length} verified questions, ${(outContent.length / 1024).toFixed(1)} KB).`);
  return outObj;
}

if (require.main === module) {
  buildCombinedBank();
}

module.exports = { KET_PARTS_META, validateExamQuestions, buildCombinedBank };
