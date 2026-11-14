/**
 * 🏝️ 動森 KET 13盾衝刺島 — Unit 1 純淨真考題庫 (data/ket_exam_bank_u1.js)
 * 100% 獨立自足 (Zero Textbook Dependency) · 零提示干擾 · 完整劍橋 A2 Key 規格
 * 涵蓋 Unit 1: My family, my friends & me
 * 題數：49 題 (U01-RWP1-S2-001 ~ U01-SPP2-S3-049)
 */

const U1_PASSAGE_RWP2 = `<div class="ket-multi-passage">
  <div class="ket-person-box">
    <h4>A. Leo</h4>
    <p>There are a lot of us in my family, and I love it. Our house is crowded, so I'm never alone or bored. I've got a brother and three sisters. My brother and I have one bedroom, and my sisters have another. Mum and Dad work a lot, and my grandparents live near us, so they often look after us when my parents are working. My grandfather is from France, and he sometimes helps me with my French homework.</p>
  </div>
  <div class="ket-person-box">
    <h4>B. Bastian</h4>
    <p>I live with my mum, dad and brother. My brother and I have our own bedrooms. He's only a year older than me, so we do lots of things together, which is fun. We've got an aunt and uncle who live in the same street as us, together with their daughter - our cousin - and our grandparents. Dad works in an office, and Mum is a teacher. She was born in Italy, but she came to live here in the USA a long time ago.</p>
  </div>
  <div class="ket-person-box">
    <h4>C. Callum</h4>
    <p>My family is big, but we don't all live in the same place. I have cousins in Germany and Australia, so I don't see them very often. My parents, my sister and I share a house with my grandma, but my sister and I have our own bedrooms. Mum and Dad go out to work, and they don't have much free time, so sometimes I tidy up the house. Mum likes it when I do that.</p>
  </div>
</div>`;

const U1_PASSAGE_RWP3 = `<div class="ket-article-box">
  <div class="ket-article-head">
    <h3>Simon's Island Journey to School</h3>
    <p class="ket-byline">By Amanda Clark | School Life Magazine</p>
  </div>
  <p>Twelve-year-old Simon lives on a small Scottish island where there are only thirty houses and one small shop. For the past six years, he attended the little primary school near his home, which had just two classrooms. But this September, Simon began an entirely new routine: he now travels across the sea every morning to attend secondary school on the mainland.</p>
  <p>Simon's day starts very early. His mother knocks on his bedroom door at quarter past six. After a quick breakfast of cereal and toast, he packs his school bag and leaves home at seven o'clock. He then walks ten minutes down the steep hill to the island harbour. The passenger ferry departs at half past seven sharp. "If the sea is calm, the crossing takes about twenty minutes," Simon explains. "I usually sit on the top deck with my older brother, who is fourteen. He is already used to the journey, but I still love watching the seabirds flying alongside our boat."</p>
  <p>However, winter weather can make the journey challenging. When strong winds produce rough waves, the ferry moves slowly and gets wet from sea spray. Very rarely, when the storm is dangerous, all boat trips are cancelled, and island pupils must complete their school tasks online from their bedrooms. "I actually prefer being in the real classroom with my classmates," laughs Simon.</p>
  <p>After school lessons end at 3.30 p.m., Simon doesn't head straight back to the harbour. Instead, he joins the school football club until five o'clock. Afterwards, he visits his Aunt Tanya, who lives only a few streets away from the school. He enjoys a hot evening meal with her and does his homework until it is time for the seven o'clock evening ferry home. Simon says, "People from big cities might think taking a boat every day sounds tiring or strange, but to me, it's the best part of my day!"</p>
</div>`;

const U1_PASSAGE_RWP4 = `<div class="ket-cloze-box">
  <div class="ket-cloze-head">
    <h4>Life in a Big Twin Family</h4>
  </div>
  <p>David comes from a very interesting family. He is eleven years old and he has two twin brothers who are eight, and two twin sisters who are five. Having four younger brothers and sisters can sometimes feel very <strong>(1) [ ______ ]</strong> because their house is full of noise and toys. David shares a bedroom with his two brothers, so he is almost never <strong>(2) [ ______ ]</strong> in the evenings.</p>
  <p>Both of David's parents work long hours in the city hospital. Because of this, his grandparents live in the next street and often come over to <strong>(3) [ ______ ]</strong> after the children. David's grandmother helps the younger children with their reading, while David helps his grandfather prepare dinner.</p>
  <p>Before his parents <strong>(4) [ ______ ]</strong> home from work around seven in the evening, David always tries to <strong>(5) [ ______ ]</strong> up the living room by putting away the children's games. David's father is always very pleased. Many people think having so many twins in one home is <strong>(6) [ ______ ]</strong>, but David believes his family is the most wonderful team in the world!</p>
</div>`;

const U1_PASSAGE_RWP5 = `<div class="ket-email-box">
  <div class="ket-email-meta">
    <strong>To:</strong> Alex<br>
    <strong>From:</strong> Lucas<br>
    <strong>Subject:</strong> My New Neighbour!
  </div>
  <p>Hi Alex,<br>
  How are you? I am writing to tell you some exciting news. A friendly new family <strong>(1) [ ______ ]</strong> just moved into the house next door to us! They have a son called Oliver, who is twelve years old. He goes to our school, but he <strong>(2) [ ______ ]</strong> not catch the school bus because he cycles every morning.</p>
  <p>Yesterday afternoon, Oliver invited me to play video games <strong>(3) [ ______ ]</strong> his house. His parents were very kind and offered us some fresh biscuits. Oliver's father is a professional photographer, and he took several pictures of us <strong>(4) [ ______ ]</strong> his new camera.</p>
  <p>Oliver said he and his parents are having a garden barbecue this Sunday. They have invited <strong>(5) [ ______ ]</strong> neighbours, including my whole family! Would you like to come with me? Write back soon!<br>
  Lucas</p>
</div>`;

const questions = [
  // ==========================================
  // RWP1: Part 1 短訊/告示三選一 (4 題: 001~004)
  // ==========================================
  {
    code: 'U01-RWP1-S2-001',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 2,
    questionType: 'choice',
    passageTitle: 'Text Message from Mum',
    noticeType: 'sms',
    passageHtml: '<div class="ket-sms-box"><div class="ket-sms-head">💬 SMS — From: Mum (16:15)</div><p>Hi Tom, Grandma is picking up your twin sisters at 4.30, so she won\'t be at home when you finish football practice. Don\'t forget your house key is under the blue flowerpot! I\'ll get home from the office by 6.15. Could you tidy up your bedroom before dinner?</p></div>',
    instruction: 'Read the text message. Choose the correct answer (A, B or C).',
    prompt: 'What does Tom\'s mum want him to do after football practice?',
    options: [
      { key: 'A', text: 'Collect his sisters on his way home.' },
      { key: 'B', text: 'Wait outside the house until 6.15.' },
      { key: 'C', text: 'Clean his room before they eat evening meal.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗短訊中的核心要求與同義改寫（tidy up bedroom = clean his room；before dinner = before they eat evening meal）。剛過 Flyers 的同學常習慣在文章中找一模一樣的單字，KET 則以同義字代換為核心考查重點。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n媽媽最後一句說："Could you tidy up your bedroom before dinner?"\n• tidy up = clean / make neat（整理清潔）\n• before dinner = before they eat evening meal（晚餐前）。兩者語意完全吻合。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：主詞張冠李戴】文中確實提到接雙胞胎妹妹（picking up your twin sisters），但負責接人的是 Grandma，而不是 Tom。',
        'B': '❌ 【選項 (B) 陷阱：忽略關鍵細節】雖然媽媽 6:15 才下班，但她已交代鑰匙在藍色花盆下（key is under the blue flowerpot），Tom 可以自行開門進屋，無需在門外等待。'
      }
    },
    extensionStudy: {
      synonyms: [
        'tidy up = clean / put away（整理收拾）',
        'pick up = collect（開車或走路去接某人）',
        'get home = arrive home（回到家，home 前不加介系詞 to）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n請求句型 Could you + 原形動詞 (tidy) ...? 雖然 Could 外觀為過去式，但在客氣請求句中表示現在禮貌語氣，後面一律接原形動詞！',
      examVariations: '🔮 【下次考場可能變形】\n若在聽力長對話 Part 3 出現，說話者常會先提出要求 "Can you collect the girls?"，隨後以 "Actually Grandma will do it" 進行修正翻盤。'
    }
  },
  {
    code: 'U01-RWP1-S3-002',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Note on the Fridge',
    noticeType: 'notice',
    passageHtml: '<div class="ket-notice-box"><div class="ket-notice-head">📌 Kitchen Notice — Family Sunday Lunch</div><p><strong>To all family members:</strong><br>Aunt Tanya called this morning. Her train from the countryside arrives two hours later than expected on Sunday. Because of this, our big family lunch will start at 2.30 p.m. instead of 12.30 p.m. Please do not eat lunch before she arrives!</p></div>',
    instruction: 'Read the notice on the kitchen fridge. Choose the correct answer (A, B or C).',
    prompt: 'What has changed about Sunday lunch?',
    options: [
      { key: 'A', text: 'It will take place at Aunt Tanya\'s house.' },
      { key: 'B', text: 'It will begin later than usual.' },
      { key: 'C', text: 'It has been cancelled because of train problems.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗時間轉折與同義概念改寫（two hours later / 2.30 instead of 12.30 = begin later）。Flyers 考生常看到 train problem 就直覺誤判為活動取消，需具備完整讀懂因果關係的能力。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n便條上明確指出："our big family lunch will start at 2.30 p.m. instead of 12.30 p.m."（延後兩小時至 2:30 開始），對應選項 (B) It will begin later than usual（比平時更晚開始）。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：地點混淆】姑姑 Tanya 是搭火車來家裡作客（Her train arrives...），並不是全家改去姑姑家聚餐。',
        'C': '❌ 【選項 (C) 陷阱：過度推論】便條僅表示午餐延後（start at 2.30），並未取消（cancelled），且叮嚀大家務必等姑姑到達後一起享用。'
      }
    },
    extensionStudy: {
      synonyms: [
        'two hours later = delayed by two hours / begin later（延後兩小時）',
        'instead of = rather than / in place of（代替、而不是）',
        'as expected = according to the plan（如預期地）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ninstead of 是介系詞片語，後接動詞時必須加 -ing（例如 instead of eating at 12.30），若接名詞或時間則直接接（instead of 12.30 p.m.）。此結構在 Part 5 開放填空常考 of。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題常考時間干擾：先提及 12.30，再由另一個人提出延後至 2.30，最後敲定新時間。需特別注意 "instead of" 後面接的是被淘汰的原時間。'
    }
  },
  {
    code: 'U01-RWP1-S3-003',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'School Entrance Notice',
    noticeType: 'notice',
    passageHtml: '<div class="ket-notice-box"><div class="ket-notice-head">🔔 Notice to All Students — Main Entrance</div><p>The main school entrance is closed for floor repairs this week. Pupils must use the side gate next to the bicycle sheds between 8.00 and 8.30 a.m. Anyone arriving after 8.30 a.m. must report to the reception office to sign the late register.</p></div>',
    instruction: 'Read the school entrance notice. Choose the correct answer (A, B or C).',
    prompt: 'What should students do if they arrive at school at 8.40 a.m.?',
    options: [
      { key: 'A', text: 'Enter through the main front doors.' },
      { key: 'B', text: 'Leave their bicycles outside the side gate.' },
      { key: 'C', text: 'Go to reception to write their names down.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗條件句理解與同義代換（after 8.30 包含 8.40；sign the late register = write their names down）。小五/小六學生必須精準捕捉時間條件與動作指引。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n告示載明："Anyone arriving after 8.30 a.m. must report to the reception office to sign the late register."。8:40 屬於 8:30 之後抵達，因此必須至接待處簽名登記（sign the register = write their names down）。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：無視明確禁令】大門本週因地面維修而關閉（closed for floor repairs this week），整週皆不得從大門進出。',
        'B': '❌ 【選項 (B) 陷阱：關鍵字拼湊干擾】腳踏車棚（bicycle sheds）僅為側門位置的參考地標，告示並未規定將車輛留在門外。'
      }
    },
    extensionStudy: {
      synonyms: [
        'sign the register = write one\'s name in the logbook（簽到登記）',
        'pupils = students / schoolchildren（學童、學生）',
        'report to = go and speak to someone in authority（向...報到）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n"Anyone arriving after 8.30" 中的 arriving 為現在分詞片語，修飾代名詞 Anyone（相當於 Anyone who arrives）。KET 閱讀經常省略關係代名詞與助動詞，直接以 V-ing 進行後位修飾。',
      examVariations: '🔮 【下次考場可能變形】\n在 Part 4 克漏字中，常挖空動詞片語搭配：report [to] the office 或 arrive [at] school。'
    }
  },
  {
    code: 'U01-RWP1-S4-004',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Text Message from Football Coach',
    noticeType: 'sms',
    passageHtml: '<div class="ket-sms-box"><div class="ket-sms-head">💬 SMS — Coach Miller (17:45)</div><p>Hi Leo, someone left a dark blue sports bag with yellow stripes in the changing room after practice today. It has a French dictionary inside. If it belongs to you, you can collect it from the sports hall reception before Friday; otherwise it will be moved to the school main lost property office.</p></div>',
    instruction: 'Read the message from Coach Miller. Choose the correct answer (A, B or C).',
    prompt: 'What is Coach Miller telling Leo in the text message?',
    options: [
      { key: 'A', text: 'To bring his French dictionary to football practice on Friday.' },
      { key: 'B', text: 'Where and when he can pick up a sports bag left behind.' },
      { key: 'C', text: 'To help look for a missing sports bag in the changing room.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗短訊整體主旨歸納與片語代換（collect = pick up；left in changing room = left behind）。屬於難度 4 的典型目的型閱讀題。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n教練通知 Leo 遺落了一件運動提袋，若為失主可在週五前至體育館前台領取（collect it = pick up），清楚說明了地點與期限（Where and when）。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：單字移花接木】法語字典是包包裡的辨識物品（helps identify the owner），教練並未要求 Leo 週五攜帶字典到場。',
        'C': '❌ 【選項 (C) 陷阱：情境理解顛倒】提袋已經被拾獲並暫存在體育館接待處，不需要 Leo 前往更衣室協助尋找。'
      }
    },
    extensionStudy: {
      synonyms: [
        'collect = pick up / retrieve（領取、拿回）',
        'belong to = be owned by（屬於...所有）',
        'lost property = lost and found（失物招領處）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nbelong to 為及物動詞片語，主動即代表「屬於」，不可寫成被動態 be belonged to！例如 "The bag belongs to Leo"，絕不可寫 "is belonged to"。',
      examVariations: '🔮 【下次考場可能變形】\nPart 6 短訊寫作高頻情境：寫一封 25+ 字便條給朋友說明自己在更衣室落下了提袋，請對方幫忙領取。'
    }
  },

  // ==========================================
  // RWP2: Part 2 三選一文本配對 (7 題: 005~011)
  // Leo (A), Bastian (B), Callum (C)
  // ==========================================
  {
    code: 'U01-RWP2-S3-005',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person has got family members in different countries?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗跨段落資訊定位與細節辨析。三篇短文皆提及外國地名（France, Italy, USA, Germany, Australia），要求考生精準區分誰的親戚「目前居住在不同國家」。',
      correctReason: '✅ 【為什麼選 Callum (C) 是對的？】\nCallum 明確敘述："I have cousins in Germany and Australia, so I don\'t see them very often."（親堂表親分住在德國與澳洲），符合 family members in different countries。',
      distractorAnalysis: {
        'A': '❌ 【Leo 陷阱】Leo 提到祖父來自法國（My grandfather is from France），但祖父母目前住在附近（live near us），並非居住在不同國家。',
        'B': '❌ 【Bastian 陷阱】Bastian 提到母親出生於義大利（She was born in Italy），但很久以前已遷居美國（came to live here in the USA a long time ago），目前親人均在同一條街。'
      }
    },
    extensionStudy: {
      synonyms: [
        'in different countries = abroad / overseas（在不同國家、在海外）',
        'see someone very often = visit someone frequently（時常見面）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhave got 相當於 have，口語中常用 \'ve got。否定句為 haven\'t got，疑問句將 have 提前：Have you got...?，不同於一般動詞的 don\'t have / Do you have...。',
      examVariations: '🔮 【下次考場可能變形】\n配對題常將國家名稱（Germany, Australia）改寫為形容詞或廣義詞（European and Oceanic relatives），考驗同義擴充能力。'
    }
  },
  {
    code: 'U01-RWP2-S3-006',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person shares a bedroom with another member of his family?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗核心詞彙 "share" 與反義概念 "own bedroom" 的對比辨析。',
      correctReason: '✅ 【為什麼選 Leo (A) 是對的？】\nLeo 明確表示："My brother and I have one bedroom, and my sisters have another."（我和哥哥共用一間臥室），符合 shares a bedroom。',
      distractorAnalysis: {
        'B': '❌ 【Bastian 陷阱】Bastian 清楚表示："My brother and I have our own bedrooms."（各自擁有自己的獨立房間），並未與他人共用。',
        'C': '❌ 【Callum 陷阱】Callum 提到："my sister and I have our own bedrooms."，兩人同樣擁有各自獨立的房間，僅與家人合住整棟屋子（share a house with grandma）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'share a bedroom = sleep in the same room / have one bedroom together（共用臥室）',
        'have one\'s own room = have a private room（擁有自己的獨立房間）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n注意 one... another... 的用法：Leo 說 "have one bedroom, and my sisters have another"；another 意指「另一間（非特定的下一個）」，若只有兩間中的另一間則用 the other。',
      examVariations: '🔮 【下次考場可能變形】\n考官在口說 Part 1 常問："Do you have your own bedroom or do you share with your brother/sister?"，考生可用 "I share a bedroom with..." 進行完整回覆。'
    }
  },
  {
    code: 'U01-RWP2-S3-007',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person has got a cousin who lives near him?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗親戚稱謂（cousin, aunt, uncle）與居住距離描述（live in the same street = live near）的關聯理解。',
      correctReason: '✅ 【為什麼選 Bastian (B) 是對的？】\nBastian 敘述："We\'ve got an aunt and uncle who live in the same street as us, together with their daughter - our cousin..."（姑姑叔叔與表妹住在同一條街上），完全符合 cousin who lives near him。',
      distractorAnalysis: {
        'A': '❌ 【Leo 陷阱】Leo 僅提及祖父母住附近（grandparents live near us），短文中未出現任何 cousin（堂表親）。',
        'C': '❌ 【Callum 陷阱】Callum 雖有堂表親（cousins），但分住在德國與澳洲（in Germany and Australia），極難見面，並非住在附近。'
      }
    },
    extensionStudy: {
      synonyms: [
        'live in the same street = live nearby / live close by（住在同一條街、住在附近）',
        'cousin = child of one\'s aunt or uncle（堂/表兄弟姊妹）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n關係子句 "who live in the same street"：先行詞是 an aunt and uncle（複數人稱），關係代名詞用 who，後面動詞使用原形 live。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題常以街道名稱或步行時間進行干擾（"She lives just five doors down the road" = near）。'
    }
  },
  {
    code: 'U01-RWP2-S4-008',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person helps someone in his family?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗題目主詞的主被動關係辨析。剛過 Flyers 的學生極易被文章中出現的單字 "helps" 吸引，而忽略究竟是「主角主動幫人」還是「他人幫助主角」。',
      correctReason: '✅ 【為什麼選 Callum (C) 是對的？】\nCallum 提到父母忙碌工作："so sometimes I tidy up the house. Mum likes it when I do that."（主動幫忙打掃家裡），符合主角主動幫助家人分擔家務。',
      distractorAnalysis: {
        'A': '❌ 【Leo 陷阱：主被動顛倒】Leo 說 "he [grandfather] sometimes helps me with my French homework"，這是祖父幫助 Leo，而非 Leo 幫助家人！題目主詞為 Which person helps someone。',
        'B': '❌ 【Bastian 陷阱】Bastian 提到與哥哥經常一起玩樂（do lots of things together, which is fun），未提及協助家事或幫忙家人。'
      }
    },
    extensionStudy: {
      synonyms: [
        'help someone = give someone a hand / do chores for someone（幫忙、分擔家務）',
        'tidy up the house = do the housework / clean the rooms（打掃家裡）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhelp 的句型結構：\n1. help someone with something（在某事上幫助某人，如 helps me with my homework）。\n2. help someone (to) do something（幫助某人做某事）。',
      examVariations: '🔮 【下次考場可能變形】\nPart 4 詞彙克漏字常挖空介系詞：helps me [with] my homework。'
    }
  },
  {
    code: 'U01-RWP2-S3-009',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person lives with a grandparent?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗「同住一屋 (live with / share a house with)」與「住在附近 (live near / in the same street)」之精準區別。',
      correctReason: '✅ 【為什麼選 Callum (C) 是對的？】\nCallum 寫道："My parents, my sister and I share a house with my grandma..."（全家與祖母同住在一棟房子裡），完全吻合 lives with a grandparent。',
      distractorAnalysis: {
        'A': '❌ 【Leo 陷阱】Leo 表示 "my grandparents live near us"（祖父母住在附近，非同住），僅在父母上班時代為照料。',
        'B': '❌ 【Bastian 陷阱】Bastian 提到祖父母住在同一條街（live in the same street as us, together with... grandparents），亦非同住一屋簷下。'
      }
    },
    extensionStudy: {
      synonyms: [
        'live with = share a home/house with（與...同住）',
        'grandparent = grandmother or grandfather（祖父母、外祖父母）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nshare a house with someone：share 作為及物動詞直接接被分享的事物（share a house / share a room），後以介系詞 with 連接共同使用者。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題可能出現：Grandma comes to visit every afternoon vs Grandma lives in our spare bedroom，測驗考生是否能區分短期造訪與同住。'
    }
  },
  {
    code: 'U01-RWP2-S4-010',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person enjoys spending time with one member of his family?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗特定人物指涉（one member of his family）與情感感受代換（do things together, which is fun = enjoys spending time with）。',
      correctReason: '✅ 【為什麼選 Bastian (B) 是對的？】\nBastian 針對其哥哥敘述："He\'s only a year older than me, so we do lots of things together, which is fun."（兩人常一起活動且覺得很有趣），符合享受與特定一位家人相處。',
      distractorAnalysis: {
        'A': '❌ 【Leo 陷阱】Leo 雖然表達熱愛熱鬧大家庭（There are a lot of us in my family, and I love it），但這指全家整體氣氛，並未指明特定一位成員。',
        'C': '❌ 【Callum 陷阱】Callum 僅提到媽媽喜歡他打掃家裡（Mum likes it when I do that），並未表達自己享受與特定家人相處的愉悅感受。'
      }
    },
    extensionStudy: {
      synonyms: [
        'enjoys spending time with = likes being with / has fun together with（享受與...相處的時光）',
        'do lots of things together = participate in activities together（一起做很多事）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nwhich 引導的非限定關係子句："...we do lots of things together, which is fun." 中的 which 代替前面整件事（一起做很多事），在寫作中是獲得 15 盾的高分句型。',
      examVariations: '🔮 【下次考場可能變形】\n口說 Part 1 提問："Who in your family do you spend the most time with?"，可仿照 Bastian 的句型：I spend lots of time with my brother because we have similar hobbies, which is fun.'
    }
  },
  {
    code: 'U01-RWP2-S4-011',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Three Teenagers Talking About Their Families',
    passageHtml: U1_PASSAGE_RWP2,
    instruction: 'Read the three texts about Leo, Bastian and Callum. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person thinks it is good to have a big family?',
    options: [
      { key: 'A', text: 'Leo' },
      { key: 'B', text: 'Bastian' },
      { key: 'C', text: 'Callum' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗肯定態度（thinks it is good = love it / never alone or bored）與客觀事實描述的判斷差異。',
      correctReason: '✅ 【為什麼選 Leo (A) 是對的？】\nLeo 開門見山指出："There are a lot of us in my family, and I love it. Our house is crowded, so I\'m never alone or bored."（家裡人很多而且我超愛，永遠不孤單無聊），明確肯定大家庭的好處。',
      distractorAnalysis: {
        'B': '❌ 【Bastian 陷阱】Bastian 家中僅有父母與兩兄弟共四人（I live with my mum, dad and brother），並非大家庭，全文亦未評述大家庭的好處。',
        'C': '❌ 【Callum 陷阱】Callum 雖然也說 "My family is big"，但下一句立即接轉折 "but we don\'t all live in the same place"，並未表達讚賞或肯定其好處的心態。'
      }
    },
    extensionStudy: {
      synonyms: [
        'thinks it is good = loves it / sees the positive side（認為很好、喜愛）',
        'never bored = always entertained / never tired of it（永不無聊）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n虛主詞句型 "It is good to have..."：It 為形式主詞，真正的真主詞是後面的不定詞片語 to have a big family。這在閱讀與寫作中皆屬必備結構。',
      examVariations: '🔮 【下次考場可能變形】\n閱讀 Part 3 常出現態度推論題：What is the author\'s attitude towards his crowded home? (A: He wishes it was quieter. B: He enjoys the lively atmosphere. C: He wants to move out.)'
    }
  },

  // ==========================================
  // RWP3: Part 3 三選一長文理解 (5 題: 012~016)
  // Simon's Island Journey to School
  // ==========================================
  {
    code: 'U01-RWP3-S3-012',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Simon\'s Island Journey to School',
    passageHtml: U1_PASSAGE_RWP3,
    instruction: 'Read the article about Simon\'s journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'What has changed for Simon this September?',
    options: [
      { key: 'A', text: 'He has moved to live on the mainland.' },
      { key: 'B', text: 'He has started travelling to another school.' },
      { key: 'C', text: 'He has joined a primary school with two classrooms.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗第一段核心事實細節理解與同義轉換（began an entirely new routine: travels across the sea to attend secondary school = started travelling to another school）。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n第一段說明 Simon 滿十二歲後："this September, Simon began an entirely new routine: he now travels across the sea every morning to attend secondary school on the mainland."（開始搭船至本島中學就讀），完全對應 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：地點混淆】Simon 每天搭船往返，他依然住在海島的家中，並未搬家到本島定居。',
        'C': '❌ 【選項 (C) 陷阱：時間混淆】只有兩間教室的小學是他過去六年就讀的學校（attended for the past six years），並非今年九月的新變化。'
      }
    },
    extensionStudy: {
      synonyms: [
        'began an entirely new routine = started a new schedule/lifestyle（展開全新的生活作息）',
        'travel across the sea = cross the water by boat（搭船渡海）',
        'secondary school = high school / middle school（中學）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n現在完成式 vs 過去簡單式：文章中 "attended the little primary school" 使用過去式（過去六年已結束）；而 "has changed" 則強調過去發生的改變對現在的影響。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題常考年齡與學制對應：11 歲小學畢業，12 歲就讀中學（secondary school）。'
    }
  },
  {
    code: 'U01-RWP3-S3-013',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Simon\'s Island Journey to School',
    passageHtml: U1_PASSAGE_RWP3,
    instruction: 'Read the article about Simon\'s journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'What time does Simon\'s boat leave the island harbour?',
    options: [
      { key: 'A', text: '6.15 a.m.' },
      { key: 'B', text: '7.00 a.m.' },
      { key: 'C', text: '7.30 a.m.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗文章中多重時間數字的動作歸屬辨析。KET 閱讀經常在同一段落出現 3 個相近時間，要求考生精確鎖定渡輪出發的關鍵句。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n第二段明確寫道："The passenger ferry departs at half past seven sharp."（渡輪在 7 點 30 分準時出發），half past seven 即為 7.30 a.m.。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：時間動作錯置】6:15（quarter past six）是媽媽敲門叫醒 Simon 的起床時間。',
        'B': '❌ 【選項 (B) 陷阱：時間動作錯置】7:00（seven o\'clock）是他整理好書包離家出門的時間。'
      }
    },
    extensionStudy: {
      synonyms: [
        'departs = leaves / sets off（出發、開船）',
        'at half past seven sharp = at exactly 7.30（七點半準時）',
        'passenger ferry = boat carrying people across water（客運渡輪）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n時鐘表達法互換：\n• 7.30 = half past seven\n• 6.15 = quarter past six\n• 7.45 = quarter to eight\nKET 考試極常在題幹用數字（7.30），而在原文用文字（half past seven）進行轉換。',
      examVariations: '🔮 【下次考場可能變形】\n聽力 Part 1 鐘面選擇題（u1_clocks.jpg），三個時鐘分別顯示 6.15、7.00 與 7.30，需專注聽取關鍵動詞 leaves the harbour。'
    }
  },
  {
    code: 'U01-RWP3-S4-014',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Simon\'s Island Journey to School',
    passageHtml: U1_PASSAGE_RWP3,
    instruction: 'Read the article about Simon\'s journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'During the boat crossing, Simon enjoys',
    options: [
      { key: 'A', text: 'looking at the birds around the ferry.' },
      { key: 'B', text: 'helping his older brother with homework.' },
      { key: 'C', text: 'sleeping on the warm bottom deck.' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗人物喜好與行為細節同義轉換（love watching seabirds flying alongside boat = enjoys looking at the birds around the ferry）。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n第二段引述 Simon 的話："I still love watching the seabirds flying alongside our boat."（我依然喜愛看海鳥伴隨船隻飛翔），與選項 (A) 完全吻合。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：無中生有】哥哥（14歲）只是習慣了搭船坐在他旁邊，文中未提及兩人在船上寫作業或互相幫忙。',
        'C': '❌ 【選項 (C) 陷阱：事實相反】Simon 明確說他坐在頂層甲板（sit on the top deck），不是底層，而且他正在看鳥而非睡覺。'
      }
    },
    extensionStudy: {
      synonyms: [
        'love watching = enjoy looking at（喜愛觀賞）',
        'seabirds flying alongside = birds around the ferry（船隻周遭的海鳥）',
        'crossing = sea journey between two ports（渡海航程）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n感官動詞用法：watch / see someone/something doing something（觀看某物正在做某動作），例如 "watching the seabirds flying"；flying 為現在分詞表當下生動動作。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題常考情感形容詞代換：I still find watching the seabirds wonderful / fascinating.'
    }
  },
  {
    code: 'U01-RWP3-S4-015',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Simon\'s Island Journey to School',
    passageHtml: U1_PASSAGE_RWP3,
    instruction: 'Read the article about Simon\'s journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'When the weather is very stormy and dangerous, Simon',
    options: [
      { key: 'A', text: 'takes a different, larger ship to school.' },
      { key: 'B', text: 'studies at home using the internet.' },
      { key: 'C', text: 'stays with his classmates at school.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗極端氣候條件下的因果推論與代換（all boat trips cancelled... complete tasks online from bedrooms = studies at home using the internet）。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n第三段指出當風暴危險時："all boat trips are cancelled, and island pupils must complete their school tasks online from their bedrooms."（船班全部取消，學生在家中房間透過網路完成課業），對應 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：曲解原文】文中說所有船班取消（all boat trips are cancelled），並無其他較大船隻營運。',
        'C': '❌ 【選項 (C) 陷阱：邏輯矛盾】船班取消時學生根本無法渡海抵達學校，因此不可能與同學留在學校。'
      }
    },
    extensionStudy: {
      synonyms: [
        'complete tasks online = study using the internet（透過網路線上學習）',
        'cancelled = called off / not running（取消、停駛）',
        'rough waves = big, violent sea waves（洶湧波濤）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nmust + 原形動詞表義務："pupils must complete their school tasks"。在過去式或間接敘述中，must 通常會轉換為 had to。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 開放填空常考短語：study [at] home 或 [on] the internet。'
    }
  },
  {
    code: 'U01-RWP3-S5-016',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 5,
    questionType: 'choice',
    passageTitle: 'Simon\'s Island Journey to School',
    passageHtml: U1_PASSAGE_RWP3,
    instruction: 'Read the article about Simon\'s journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'What does Simon say about his daily journey to school?',
    options: [
      { key: 'A', text: 'He wishes he lived closer to the football club.' },
      { key: 'B', text: 'He feels very tired when he gets home at night.' },
      { key: 'C', text: 'He really likes travelling by boat every day.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗全文總結與態度推論題。判斷主角本人真實感受與外界他人看法之間的對比（他人認為 tiring or strange vs 主角自己認為 best part of my day）。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n第四段文末 Simon 親口總結："People from big cities might think taking a boat every day sounds tiring or strange, but to me, it\'s the best part of my day!"（對我來說，這是整天最棒的部分！），顯示他非常熱愛每日搭船。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：無中生有】Simon 樂於參加足球社，但從未表示希望搬到離社團更近的地方。',
        'B': '❌ 【選項 (B) 陷阱：主體混淆】"tiring or strange" 是大城市居民可能產生的預期想法（People might think...），並非 Simon 本人的實際感受。'
      }
    },
    extensionStudy: {
      synonyms: [
        'the best part of my day = my favourite moment / something I really like（一天中最棒的部分、極度喜愛）',
        'tiring = exhausting / making you feel weary（令人疲勞的）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n情態助動詞 might 的推測語氣："People might think..." 表示「人們可能會這樣想（但事實往往並非如此）」。轉折連接詞 but 接在後面帶出主角真實想法。',
      examVariations: '🔮 【下次考場可能變形】\n口說 Part 2 討論題：Do you think travelling by boat to school every day is fun or tiring? Why?'
    }
  },

  // ==========================================
  // RWP4: Part 4 詞彙克漏字 (6 題: 017~022)
  // Life in a Big Twin Family
  // ==========================================
  {
    code: 'U01-RWP4-S2-017',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 2,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (1).',
    options: [
      { key: 'A', text: 'crowded' },
      { key: 'B', text: 'quiet' },
      { key: 'C', text: 'empty' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗形容詞詞彙語意搭配。依據上下文 "four younger brothers and sisters" 與 "full of noise and toys" 選出最恰當的環境描述詞。',
      correctReason: '✅ 【為什麼選 (A) crowded 是對的？】\n後句明確解釋原因："because their house is full of noise and toys"（家裡充滿噪音與玩具），家中有四個弟妹，氣氛自然非常擁擠、熱鬧（crowded）。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) quiet 陷阱：語意相反】quiet 是安靜的，與 full of noise（充滿吵鬧聲）形成直接矛盾。',
        'C': '❌ 【選項 (C) empty 陷阱：語意矛盾】empty 是空無一物的，家中住了多位手足且玩具堆滿，絕非 empty。'
      }
    },
    extensionStudy: {
      synonyms: [
        'crowded = packed / full of people（擁擠熱鬧的）',
        'full of = filled with（充滿著）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n連綴動詞 feel 後接形容詞：feel very crowded（感覺很擁擠）。不能接副詞 crowdedly。常見連綴動詞還有 look, sound, smell, taste。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 常挖空片語中的介系詞：full [of] noise and toys。'
    }
  },
  {
    code: 'U01-RWP4-S3-018',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (2).',
    options: [
      { key: 'A', text: 'lonely' },
      { key: 'B', text: 'alone' },
      { key: 'C', text: 'single' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗 Flyers 升 KET 經典易混淆詞辨析：alone（客觀獨自一人）vs lonely（主觀寂寞孤單）。',
      correctReason: '✅ 【為什麼選 (B) alone 是對的？】\n前句說 "David shares a bedroom with his two brothers"（與兩位弟弟共用臥室），表示客觀物理空間上「絕非獨自一人」，因此用 alone。be alone = 獨自一人。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) lonely 陷阱】lonely 強調心理情感上的「寂寞、孤獨難過」，即使身邊有人也可能感到 lonely。此處上下文是在講房間有人同住的客觀狀態。',
        'C': '❌ 【選項 (C) single 陷阱】single 指單一的、單身的，不能放在 be 動詞後直接作表語表示「獨自一人」。'
      }
    },
    extensionStudy: {
      synonyms: [
        'never alone = always has company（身邊總有人陪伴）',
        'on his own = by himself / alone（獨自一人）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nalone vs lonely：\n• He lives alone.（他一個人住，客觀狀態）\n• He feels lonely.（他感到孤單寂寞，主觀情緒）\nalone 通常只作表語或副詞，不放在名詞前修飾名詞；lonely 則可作定語（a lonely old man）。',
      examVariations: '🔮 【下次考場可能變形】\n在 Part 5 中常考片語：on his [own] 或 by [himself]。'
    }
  },
  {
    code: 'U01-RWP4-S3-019',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (3).',
    options: [
      { key: 'A', text: 'see' },
      { key: 'B', text: 'watch' },
      { key: 'C', text: 'look' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗高頻動詞片語固定搭配：look after（照顧、照料）。',
      correctReason: '✅ 【為什麼選 (C) look 是對的？】\n空格後接介系詞 "after the children"。「look after」為固定動詞片語，意為「照料、照顧」，完全符合祖父母來家裡幫忙照顧小孩的語境。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) see 陷阱】英語中沒有 "see after" 這種動詞片語。',
        'B': '❌ 【選項 (B) watch 陷阱】watch 為及物動詞直接接受詞（watch the children），不可加 after。'
      }
    },
    extensionStudy: {
      synonyms: [
        'look after = take care of / care for（照顧、照看）',
        'come over = visit one\'s home（過來拜訪）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nlook 的常見考點片語：\n• look after = take care of（照顧）\n• look for = search for（尋找）\n• look at = view / inspect（注視）\n在 Part 4 克漏字中，看清楚後面的介系詞是破題唯一關鍵！',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 開放填空常挖空 after：Who will look [after] your dog while you are away?'
    }
  },
  {
    code: 'U01-RWP4-S3-020',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (4).',
    options: [
      { key: 'A', text: 'get' },
      { key: 'B', text: 'take' },
      { key: 'C', text: 'make' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗「抵達、回到家」的日常高頻固定動詞搭配：get home。',
      correctReason: '✅ 【為什麼選 (A) get 是對的？】\n"get home" 是劍橋英檢最標準的日常用語，意為「回到家、抵達家門」。句中 "Before his parents get home from work" 語意非常通順精準。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) take 陷阱】take home 意為「帶某物回家」（如 take food home），受詞不能省略且主詞動作不合。',
        'C': '❌ 【選項 (C) make 陷阱】make 不能與 home 直接搭配表示回到家。'
      }
    },
    extensionStudy: {
      synonyms: [
        'get home = arrive home / reach home（回到家）',
        'around seven = at about 7.00（大約七點）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhome 在此為地方副詞，前方絕對不能加介系詞 to！例如：get home（正），不可寫 get to home（誤）。同理還有 go home, arrive home, come home。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 中常出現陷阱：What time did you get [ ______ ] home yesterday? 學生若習慣填 to 就會失分，答案是無需介系詞，若為填空題則挖空 get：What time did you [get] home?'
    }
  },
  {
    code: 'U01-RWP4-S4-021',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (5).',
    options: [
      { key: 'A', text: 'pick' },
      { key: 'B', text: 'tidy' },
      { key: 'C', text: 'wash' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗家務動詞片語搭配：tidy up the living room（整理客廳）。',
      correctReason: '✅ 【為什麼選 (B) tidy 是對的？】\n後方有介系詞 "up the living room by putting away the children\'s games"。「tidy up」指將凌亂的物品歸位收拾乾淨，與 putting away games（收好遊戲玩具）形成完美的同義補充。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) pick 陷阱】pick up 後面接的是具體的物品（如 pick up toys），不能說 pick up the living room。',
        'C': '❌ 【選項 (C) wash 陷阱】wash up 在英式英文中指「洗碗盤」，不能用於整理客廳房間。'
      }
    },
    extensionStudy: {
      synonyms: [
        'tidy up = put in order / clear up（整理整齊）',
        'put away = return items to their proper places（將物品收好歸位）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nby + V-ing 表手段與方法："by putting away the children\'s games"（藉由把孩子們的遊戲玩具收好）。介系詞 by 後面接動詞必須加 -ing。',
      examVariations: '🔮 【下次考場可能變形】\nPart 1 短訊常出現：Could you please [tidy] up your desk before dinner?'
    }
  },
  {
    code: 'U01-RWP4-S4-022',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Life in a Big Twin Family',
    passageHtml: U1_PASSAGE_RWP4,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap (6).',
    options: [
      { key: 'A', text: 'unusual' },
      { key: 'B', text: 'impossible' },
      { key: 'C', text: 'dangerous' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗形容詞語意在文章主題中的精準表達：unusual（不尋常的、少見特別的）。',
      correctReason: '✅ 【為什麼選 (A) unusual 是對的？】\n家中同時有兩對雙胞胎（four twins）確實非常罕見少有，因此許多人會認為 "having so many twins in one home is unusual"（很不尋常/特別），隨後以 but 轉折帶出主角認為是 wonderful team。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) impossible 陷阱】impossible 代表「不可能發生」，然而這家人的存在是活生生的真實事實，不可選不可能。',
        'C': '❌ 【選項 (C) dangerous 陷阱】dangerous 意為「危險的」，雙胞胎手足眾多只會熱鬧吵雜，並不具有人身危險性。'
      }
    },
    extensionStudy: {
      synonyms: [
        'unusual = rare / uncommon / extraordinary（不尋常的、罕見的）',
        'pleased = glad / satisfied（欣慰高興的）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n字首 un- 表反義：usual（尋常的）➔ unusual（不尋常的）。KET 常考的 un- 字首單字還包括：unhappy, unkind, untidy, unwell。',
      examVariations: '🔮 【下次考場可能變形】\n聽力題 Amanda 評論 Simon 的生活作息時，正是使用 "Your school day is really unusual!"（參見 LSP3 題型）。'
    }
  },

  // ==========================================
  // RWP5: Part 5 開放式文法填空 (5 題: 023~027)
  // Email: My New Neighbour
  // ==========================================
  {
    code: 'U01-RWP5-S3-023',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Email: My New Neighbour',
    noticeType: 'email',
    passageHtml: U1_PASSAGE_RWP5,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'A friendly new family [ ______ ] just moved into the house next door to us!',
    options: null,
    answer: ['has', '\'s'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗現在完成式助動詞 have/has 的用法。無選項填空中，完成式助動詞是 KET 最容易失分的文法死角。',
      correctReason: '✅ 【為什麼填 has 是對的？】\n句中動詞為過去分詞 "moved"，且搭配副詞 "just"（剛剛），形成標準的現在完成式結構（have/has + just + p.p.）。主詞 "A friendly new family" 為單數集合名詞，助動詞填 **has**（縮寫 \'s 亦算對）。',
      commonTraps: [
        { wrong: '填 is', whyWrong: '中文思考容易誤把現在完成式 has just moved 想成現在進行式 is moving。moved 是過去分詞，前面必須用助動詞 has！' },
        { wrong: '填 have', whyWrong: 'family 在此作為單一家庭單位，且前方有不定冠詞 A，依據劍橋 A2 Key 標準文法，主詞視為第三人稱單數，應搭配 has。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'just moved into = recently arrived at（剛搬進）',
        'next door to us = neighbouring us（在我們隔壁）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n現在完成式常與 just, already, yet 連用：\n• have/has just + p.p.（剛剛完成某事）\n• have/has already + p.p.（已經完成某事）\n記住空格後面若緊跟著 just + p.p.，90% 都是考 have 或 has！',
      examVariations: '🔮 【下次考場可能變形】\n題目有時會挖空副詞 just：A friendly family has [just] moved into our street.'
    }
  },
  {
    code: 'U01-RWP5-S3-024',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Email: My New Neighbour',
    noticeType: 'email',
    passageHtml: U1_PASSAGE_RWP5,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: '...but he [ ______ ] not catch the school bus because he cycles every morning.',
    options: null,
    answer: ['does'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗一般動詞現在式第三人稱單數否定句的助動詞 does。',
      correctReason: '✅ 【為什麼填 does 是對的？】\n空格後緊跟著否定詞 "not" 與一般動詞原形 "catch"。此句描述日常習慣（現在簡單式），主詞為單數 he，否定句必須使用助動詞 **does**（does not catch）。',
      commonTraps: [
        { wrong: '填 is', whyWrong: '剛過 Flyers 的學生極常看見 not 就直覺填 is。但後面的 catch 是原形一般動詞，若填 is 後面動詞必須是 catching！一般動詞否定必須用 does not。' },
        { wrong: '填 did', whyWrong: '整段文章敘述日常作息習慣（goes to our school, cycles every morning），全部為現在式，絕不可填過去式 did。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'catch the bus = take the bus（搭公車）',
        'cycle = ride a bicycle（騎腳踏車）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n現在簡單式否定結構：\n• I / You / We / They + do not + 原形動詞\n• He / She / It + does not + 原形動詞\n助動詞 does 出現後，後面的動詞必須打回原形（catch，絕不能加 -es）！',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 也很常挖空否定詞 not：He does [not] take the bus because he walks.'
    }
  },
  {
    code: 'U01-RWP5-S4-025',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 4,
    questionType: 'gap',
    passageTitle: 'Email: My New Neighbour',
    noticeType: 'email',
    passageHtml: U1_PASSAGE_RWP5,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Yesterday afternoon, Oliver invited me to play video games [ ______ ] his house.',
    options: null,
    answer: ['at'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗地點介系詞的固定搭配：at someone\'s house / at home。',
      correctReason: '✅ 【為什麼填 at 是對的？】\n表示「在某人的住家或建築物地點」從事活動時，劍橋標準介系詞慣用 **at**（at his house）。就像 at home, at school 一樣，皆使用 at 表示特定活動定點。',
      commonTraps: [
        { wrong: '填 in', whyWrong: '雖然日常口語偶爾會聽見 in his house，但在 KET 官方真考開放填空中，表達在某人家聚會標準答案優先採納 **at**。' },
        { wrong: '填 to', whyWrong: '若填 to 代表方向（去他家），但前方已經有完整的 play video games 不定詞片語，此處需要的是表示活動地點的介系詞 at。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'at his house = at his place / at home（在他家）',
        'invite someone to = ask someone cordially to（邀請某人去...）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n地點介系詞三大比較：\n• at：表示點或機構（at school, at home, at the station, at his house）。\n• in：表示封閉大空間或行政區域（in the room, in London, in Taiwan）。\n• on：表示平面或街道（on the table, on Green Street）。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 常挖空動詞後面的介系詞：invited me [to] his birthday party。'
    }
  },
  {
    code: 'U01-RWP5-S4-026',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 4,
    questionType: 'gap',
    passageTitle: 'Email: My New Neighbour',
    noticeType: 'email',
    passageHtml: U1_PASSAGE_RWP5,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: '...and he took several pictures of us [ ______ ] his new camera.',
    options: null,
    answer: ['with'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗工具與器械介系詞 with 的用法（用相機拍攝 = take pictures with a camera）。',
      correctReason: '✅ 【為什麼填 with 是對的？】\n在英語中，使用具體的工具、儀器或器械來完成某動作時，必須使用介系詞 **with**（如 cut with a knife, write with a pen, take photos with a camera）。因此填 with。',
      commonTraps: [
        { wrong: '填 by', whyWrong: '中文常說「透過/藉由相機」，很多同學直覺翻譯為 by。但 by 僅用於交通方式（by train）或方法後接 V-ing（by taking photos），具體器械必須用 with！' },
        { wrong: '填 in 或 use', whyWrong: 'in 不能表示操作器械；use 是動詞，一個句子在沒有連接詞時不可直接塞入第二個主要動詞。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'take pictures of = photograph / capture photos of（替...拍照）',
        'professional photographer = expert camera operator（專業攝影師）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n介系詞 with 的四大考點：\n1. 伴隨：come with me（跟我一起來）。\n2. 擁有：a girl with long dark hair（留著長黑髮的女孩）。\n3. 工具：take photos with a camera（用相機拍照）。\n4. 餡料/配料：coffee with milk（加牛奶的咖啡）。',
      examVariations: '🔮 【下次考場可能變形】\n口說 Part 1 提問："Do you prefer taking photos with your phone or with a camera?"'
    }
  },
  {
    code: 'U01-RWP5-S5-027',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 5,
    questionType: 'gap',
    passageTitle: 'Email: My New Neighbour',
    noticeType: 'email',
    passageHtml: U1_PASSAGE_RWP5,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'They have invited [ ______ ] neighbours, including my whole family!',
    options: null,
    answer: ['their', 'all'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗代名詞所有格 their（他們的）或限定詞 all（所有的）在名詞前的限定用法。',
      correctReason: '✅ 【為什麼填 their 或 all 是對的？】\n句子主詞為 "They"（鄰居一家），邀請的對象是「他們的鄰居」或「所有的鄰居」，後方緊接複數名詞 neighbours。填入所有格 **their** 或定量代名詞 **all** 在文法與語意上皆完全正確。',
      commonTraps: [
        { wrong: '填 them', whyWrong: 'them 是受格人稱代名詞（如 invite them），不能直接放在名詞 neighbours 前面當修飾語！修飾名詞必須用所有格 their。' },
        { wrong: '填 there', whyWrong: '重大拼字混淆地雷！there 是地方副詞（那裡），表示「他們的」必須拼作 **their**。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'neighbours = people who live near you（鄰居們）',
        'whole family = entire household（全家人）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ntheir vs there vs they\'re 同音異義詞辨析：\n• their：所有格代名詞，後接名詞（their neighbours）。\n• there：地方副詞，表示地點或存在句（over there, there is...）。\n• they\'re：they are 的縮寫（they\'re coming）。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 也常考介系詞 including 的上下文：They invited many people, [including] their neighbours.'
    }
  },

  // ==========================================
  // LSP1: Part 1 聽力圖片/細節三選一 (2 題: 028~029)
  // ==========================================
  {
    code: 'U01-LSP1-S3-028',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP1',
    ketPartName: 'LS Part 1 · 聽力圖片三選一',
    difficulty: 3,
    questionType: 'choice',
    image: 'assets/images/u1/u1_clocks.jpg',
    audioTrack: 'Track 01',
    instruction: 'Listen to the conversation. Choose the correct picture (A, B or C).',
    prompt: 'What time are the two friends going to meet outside the sports centre?',
    options: [
      { key: 'A', text: '4.15 (quarter past four)' },
      { key: 'B', text: '4.45 (quarter to five)' },
      { key: 'C', text: '5.15 (quarter past five)' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Tom', role: 'Boy', text: 'Hi Sarah, what time are we meeting outside the sports centre this afternoon? Is it quarter past four?', isClue: false, isTrap: true },
      { speaker: 'Sarah', role: 'Girl', text: 'Well, I originally planned to be there at quarter past four, but my mum needs me to help tidy up the kitchen first.', isClue: false, isTrap: true },
      { speaker: 'Tom', role: 'Boy', text: 'Oh I see. So should we make it quarter past five instead?', isClue: false, isTrap: true },
      { speaker: 'Sarah', role: 'Girl', text: 'No, that\'s too late — our basketball game starts at five o\'clock! Let\'s meet at quarter to five. That gives us fifteen minutes to warm up.', isClue: true, isTrap: false },
      { speaker: 'Tom', role: 'Boy', text: 'Quarter to five it is then! See you at 4.45.', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗 KET 聽力 Part 1 最具代表性的「時間推翻與最後敲定」題型。對話中會把 A、B、C 三個時間全部講一遍，考驗學生是否能捕捉真正的最終決定。',
      correctReason: '✅ 【為什麼選 (B) 4.45 是對的？】\nSarah 最終明確提出："Let\'s meet at quarter to five. That gives us fifteen minutes to warm up."，Tom 隨即附和覆誦："Quarter to five it is then! See you at 4.45."。quarter to five 即為 4:45（選項 B）。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 4.15 陷阱：原先計畫被推翻】雖然兩人都提到 4:15（quarter past four），但 Sarah 明確表示原本打算那時到，因要幫媽媽整理廚房而取消了。',
        'C': '❌ 【選項 (C) 5.15 陷阱：提議遭對方拒絕】Tom 提議延到 5:15（quarter past five），但 Sarah 立刻說 "No, that\'s too late — our game starts at five!"，已被當場否決。'
      }
    },
    extensionStudy: {
      synonyms: [
        'quarter to five = 4.45（四點四十五分、差一刻五點）',
        'quarter past four = 4.15（四點十五分、四點過一刻）',
        'warm up = prepare for exercise（熱身準備）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n聽力中辨識提議接受與否的關鍵信號詞：\n• 否定/拒絕信號：No, actually... / That won\'t work / That\'s too late...\n• 敲定/贊同信號：Let\'s... / How about... / That sounds perfect / ...it is then!',
      examVariations: '🔮 【下次考場可能變形】\n有時答案會考「比賽開始的時間」（5.00）或是「熱身的時間長度」（15 minutes），考生在音檔播放前務必先看清題幹問的是「meet」的時間！'
    }
  },
  {
    code: 'U01-LSP1-S4-029',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP1',
    ketPartName: 'LS Part 1 · 聽力圖片三選一',
    difficulty: 4,
    questionType: 'choice',
    image: 'assets/images/u1/u1_speaking_people_af.jpg',
    audioTrack: 'Track 02',
    instruction: 'Listen to the conversation. Look at the people in the picture. Choose the correct person (A, B or C).',
    prompt: 'Which boy in the picture is Lucas?',
    options: [
      { key: 'A', text: 'The short boy in the bright orange Polo shirt with straight blond hair.' },
      { key: 'B', text: 'The boy wearing a bright green T-shirt and dark curly hair.' },
      { key: 'C', text: 'The tall boy with blue eyes wearing a green shirt over a red top.' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Liam', role: 'Boy', text: 'Hey Emma, look at this photo from our school sports day! Which person here is Lucas?', isClue: false, isTrap: false },
      { speaker: 'Emma', role: 'Girl', text: 'Can you see the boys on the grass? Which one do you think he is?', isClue: false, isTrap: false },
      { speaker: 'Liam', role: 'Boy', text: 'Is he that tall boy over there with blue eyes wearing the green shirt with red inside?', isClue: false, isTrap: true },
      { speaker: 'Emma', role: 'Girl', text: 'No, that\'s Jason, my best friend! Lucas is much shorter than him.', isClue: false, isTrap: true },
      { speaker: 'Liam', role: 'Boy', text: 'Oh! Is he the short boy over on the left in the bright orange Polo shirt?', isClue: false, isTrap: true },
      { speaker: 'Emma', role: 'Girl', text: 'No, that\'s Trent! Lucas has got dark curly hair and he\'s wearing that bright green T-shirt with the big smile.', isClue: true, isTrap: false },
      { speaker: 'Liam', role: 'Boy', text: 'Ah, I see him now! That\'s definitely Lucas.', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗人物外貌特徵（curly hair, short/tall）與衣著顏色（green T-shirt, orange Polo shirt）的聽力排除辨析能力。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nEmma 在最後明確指證 Lucas 的外貌與服裝特徵："Lucas has got dark curly hair and he\'s wearing that bright green T-shirt with the big smile."，完全對應選項 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：另有其人】穿橘色 Polo 衫且留著金黃直髮的小男生是 Trent（Emma 明確說：No, that\'s Trent!），不是 Lucas。',
        'C': '❌ 【選項 (C) 陷阱：另有其人】身材高大、藍眼睛、綠襯衫內搭紅衣的是 Jason（Emma 說：No, that\'s Jason, my best friend!）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'dark curly hair = wavy black hair（深色短捲髮）',
        'bright green T-shirt = vivid green short-sleeved top（鮮綠色短袖上衣）',
        'big smile = grinning cheerfully（開朗燦笑）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n形容外貌與衣著的句型：\n• He has got + 髮型特徵（He has got dark curly hair）。\n• He is wearing + 衣服配件（He is wearing a green T-shirt）。\n• He is + 身材特徵（He is tall / short）。',
      examVariations: '🔮 【下次考場可能變形】\n口說 Part 1 考官常出題："Describe your best friend\'s appearance."，考生需同時熟練運用 has got hair/eyes 與 is wearing clothes。'
    }
  },

  // ==========================================
  // LSP3: Part 3 聽力長對話理解 (3 題: 030~032)
  // Simon & Amanda Long Dialogue
  // ==========================================
  {
    code: 'U01-LSP3-S3-030',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 3,
    questionType: 'choice',
    audioTrack: 'Track 04',
    instruction: 'Listen to Simon talking to Amanda about his journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'Why is Amanda feeling so tired today?',
    options: [
      { key: 'A', text: 'She had to wake up very early.' },
      { key: 'B', text: 'She went to sleep after midnight.' },
      { key: 'C', text: 'She watched television in her bed.' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Amanda', role: 'Interviewer', text: 'Hi Simon, you look wide awake! I\'m completely exhausted today.', isClue: false, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'Why Amanda? Do you have to get up really early in the morning like me?', isClue: false, isTrap: true },
      { speaker: 'Amanda', role: 'Interviewer', text: 'No, not at all! I woke up at eight o\'clock. But I watched a film on television in the living room, and then I went to sleep very late, past midnight!', isClue: true, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'Wow, I could never do that. My mum knocks on my bedroom door at quarter past six.', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗雙人長對話中對某一方陳述之原因的捕捉能力（went to sleep very late, past midnight = went to sleep after midnight）。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nAmanda 親自解釋自己疲累的原因："No, not at all! I woke up at eight o\'clock... then I went to sleep very late, past midnight!"（午夜過後才睡覺），與選項 (B) 完全吻合。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：對象顛倒】早起的是 Simon（6:15 起床），Amanda 睡到 8:00 才起床（I woke up at eight o\'clock），一點也不早。',
        'C': '❌ 【選項 (C) 陷阱：地點移花接木】Amanda 是在「客廳（in the living room）」看電視電影，並不是在床上看（in her bed）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'past midnight = after twelve at night（半夜十二點過後）',
        'completely exhausted = very tired / worn out（精疲力竭）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nnot... until... 結構：Amanda 提到 "I never go to sleep until after midnight"（直到過了半夜才睡覺）。until 表直到某時，在否定句中強調動作延遲發生。',
      examVariations: '🔮 【下次考場可能變形】\n考官在口說中問："What time do you usually go to bed on school nights?"，回答不可只說 10，應說 "I usually go to bed at around ten o\'clock".'
    }
  },
  {
    code: 'U01-LSP3-S4-031',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 4,
    questionType: 'choice',
    audioTrack: 'Track 04',
    instruction: 'Listen to Simon talking to Amanda about his journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'What time does the ferry to Simon\'s school leave the island?',
    options: [
      { key: 'A', text: '6.15 a.m.' },
      { key: 'B', text: '7.00 a.m.' },
      { key: 'C', text: '7.30 a.m.' }
    ],
    answer: 'C',
    audioLines: [
      { speaker: 'Simon', role: 'Island Student', text: 'My mum knocks on my bedroom door and wakes me up at quarter past six.', isClue: false, isTrap: true },
      { speaker: 'Amanda', role: 'Interviewer', text: 'Quarter past six? That\'s so early! Why do you need to be up then?', isClue: false, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'Well, I have breakfast and get dressed, and then I leave home at seven o\'clock.', isClue: false, isTrap: true },
      { speaker: 'Amanda', role: 'Interviewer', text: 'And how do you get across the sea to the mainland?', isClue: false, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'I walk down to the harbour. The boat to school leaves the island at half past seven sharp, so I can\'t be late.', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗在連續對話資訊流中精確抓取目標動詞（leaves the island）所搭配的時間（half past seven = 7.30 a.m.），不受前置時間干擾。',
      correctReason: '✅ 【為什麼選 (C) 7.30 是對的？】\nSimon 清楚回答渡輪啟航的時間："The boat to school leaves the island at half past seven sharp"（開往學校的船在 7 點半準時出發），half past seven 即 7.30 a.m.。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 6.15 陷阱】6:15（quarter past six）是媽媽叫醒 Simon 的時間（wakes me up）。',
        'B': '❌ 【選項 (B) 7.00 陷阱】7:00（seven o\'clock）是他吃完早餐整裝離家出門的時間（leave home）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'half past seven = 7.30（七點半）',
        'quarter past six = 6.15（六點十五分）',
        'leaves the island = departs from the port（從島嶼港口出航）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n交通工具班表用「現在簡單式」表預定時間：\n"The boat to school leaves at half past seven." 雖然船班是未來的動作，但依照既定時刻表行駛的公車、火車、渡輪，文法一律使用現在簡單式。',
      examVariations: '🔮 【下次考場可能變形】\n聽力 Part 2 表格填空常考渡輪出發時間，學生必須在考卷上準確拼寫出 "7.30" 或 "7.30 a.m."。'
    }
  },
  {
    code: 'U01-LSP3-S4-032',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 4,
    questionType: 'choice',
    audioTrack: 'Track 04',
    instruction: 'Listen to Simon talking to Amanda about his journey to school. For each question, choose the correct answer (A, B or C).',
    prompt: 'Where does Simon have his evening dinner on school days?',
    options: [
      { key: 'A', text: 'At his aunt\'s house on the mainland.' },
      { key: 'B', text: 'At home with his parents on the island.' },
      { key: 'C', text: 'In the secondary school dining hall.' }
    ],
    answer: 'A',
    audioLines: [
      { speaker: 'Amanda', role: 'Interviewer', text: 'And what happens after school? Do you take the boat straight back home?', isClue: false, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'We have football practice until five o\'clock. Then I go to my Aunt Tanya\'s house on the mainland. I eat my dinner with her, and then catch the seven o\'clock evening ferry home.', isClue: true, isTrap: false },
      { speaker: 'Amanda', role: 'Interviewer', text: 'That\'s really convenient having family living near your school!', isClue: false, isTrap: false },
      { speaker: 'Simon', role: 'Island Student', text: 'Yes, it makes the long school day much easier for me.', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗放學後多步驟活動鏈中的地點歸納（football practice ➔ Aunt Tanya\'s house for dinner ➔ evening ferry home）。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\nSimon 詳細交代放學後安排："Then I go to my Aunt Tanya\'s house on the mainland. I eat my dinner with her..."（到本島的 Tanya 姑姑家和她一起吃晚餐），完全符合選項 (A)。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：時間順序混淆】他在本島姑姑家吃完晚餐後，才在 7 點搭晚班船回海島家中，回到家時已過了晚餐時間。',
        'C': '❌ 【選項 (C) 陷阱：活動地點混淆】他在學校只是留下來進行足球訓練（football practice until 5.00），並未在學校餐廳吃晚餐。'
      }
    },
    extensionStudy: {
      synonyms: [
        'have evening dinner = eat dinner / enjoy an evening meal（吃晚餐）',
        'catch the evening ferry = take the evening boat（搭乘晚間渡輪）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n餐點前不加冠詞 a/an：have dinner, have breakfast, have lunch（不可加 a dinner）。但如果有形容詞修飾時則可加：have a delicious dinner。',
      examVariations: '🔮 【下次考場可能變形】\nPart 4 克漏字常考三餐動詞搭配：[have] breakfast / [eat] dinner。'
    }
  },

  // ==========================================
  // RWP7: Part 7 看圖寫故事 (1 題: 033)
  // 3-Picture Story: Late for the School Bus
  // ==========================================
  {
    code: 'U01-RWP7-S4-033',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'writing',
    ketPart: 'RWP7',
    ketPartName: 'WR Part 7 · 看圖寫故事 (35+字)',
    difficulty: 4,
    questionType: 'writing',
    image: 'assets/images/u1/u1_writing_part7_exam.jpg',
    passageTitle: 'Writing Part 7 - 3-Picture Story',
    instruction: 'Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.',
    prompt: 'Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.',
    options: null,
    modelAnswers: {
      checklist: [
        'Picture 1: 說明男孩在臥室床上放鬆/聽音樂，沒有意識到時間。',
        'Picture 2: 爸爸在廚房著急指著時鐘（8:30），妹妹正在快速吃早餐。',
        'Picture 3: 兩人抓起書包衝出家門，朝著即將開走的紅色校車招手趕車。',
        '字數達到 35 字以上（建議 45~60 字），全文使用過去式，時間連接詞 (Suddenly, Then, Finally) 銜接流暢。'
      ],
      band13: 'One morning, Jack sat on his bed and listened to music. Then his father pointed at the clock in the kitchen and said they were late. Jack and his sister ran out of the house. His sister waved to catch the red bus.',
      band15: 'One morning, Jack was sitting on his bed in his bedroom, relaxing with music. Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly ate her breakfast. They rushed out of the house, and his sister ran along the street, waving her hand to catch the departing red school bus.'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Writing Part 7 測驗三格連環圖的完整敘事能力。小五/小六剛過 Flyers 的學生最常犯的重大扣分錯誤是「時態混亂（忽現忽過）」或「漏寫其中一張圖的細節」。',
      correctReason: '✅ 【滿分 15 盾評分規準解析】\n1. Content (5/5)：完整點出三幅圖所有關鍵動作（聽音樂 ➔ 指時鐘發現遲到 ➔ 追趕紅色公車）。\n2. Organisation (5/5)：善用 One morning, Suddenly, because, and 等連接詞，邏輯時序分明。\n3. Language (5/5)：精準運用過去進行式 (was sitting) 與過去簡單式 (pointed, rushed, waved)，字數 61 字恰到好處，拼字文法零瑕疵。',
      commonTraps: [
        { wrong: '時態現在式與過去式混合使用（如 Jack sits on his bed... Then his dad pointed...）', whyWrong: '敘述過去發生的故事，全文動詞必須統一使用過去式 (Past Simple / Past Continuous)。時態跳躍會直接被扣 Language 分數！' },
        { wrong: '字數未滿 35 字（例如只寫了 28 個字）', whyWrong: 'KET Part 7 規定嚴格："Write 35 words or more"。字數不足 35 字會直接在 Content 與 Organisation 遭嚴厲扣分，喪失 13/15 盾資格！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'rush out of the house = run out quickly / hurry outside（飛奔衝出家門）',
        'departing bus = bus that is pulling away / leaving（即將駛離的公車）',
        'catch the bus = reach the bus before it leaves（趕上公車）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n過去進行式 vs 過去簡單式在敘事中的搭配：\n• 背景狀態用進行式：Jack was sitting on his bed...\n• 突然發生的動作跳入用簡單式：Suddenly, his father rushed in and pointed at the clock.\n這種「進行式＋簡單式」的交替運用是衝擊 15 盾 Distinction 的必備高分技巧。',
      examVariations: '🔮 【下次考場可能變形】\n常見看圖題型還包括：在書店買書忘拿錢包、去海邊野餐遇暴雨、騎腳踏車爆胎等。核心要領永遠是「三圖兼顧＋過去式貫徹＋時間副詞連接」。'
    }
  },

  // ==========================================
  // SPP1: Part 1 口說考官問答 (1 題: 034)
  // Personal Questions: Family & Sundays
  // ==========================================
  {
    code: 'U01-SPP1-S3-034',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'speaking',
    ketPart: 'SPP1',
    ketPartName: 'SP Part 1 · 口說考官問答',
    difficulty: 3,
    questionType: 'speaking',
    passageTitle: 'Speaking Part 1 - Personal Questions',
    instruction: 'Answer the examiner\'s question. Speak in full sentences and extend your answers using connectors.',
    prompt: 'Tell me about your family and what you usually do together on Sundays.',
    options: null,
    audioLines: [
      { speaker: 'Examiner', role: 'Examiner', text: 'Now, let\'s talk about your family. Tell me about your family and what you usually do together on Sundays.', isClue: false, isTrap: false },
      { speaker: 'Student', role: 'Candidate', text: 'There are four people in my family: my parents, my older brother and me. On Sundays, we usually go for a bike ride in the park together, and then we visit my grandparents for dinner.', isClue: true, isTrap: false },
      { speaker: 'Examiner', role: 'Examiner', text: 'Do you enjoy having dinner with your grandparents?', isClue: false, isTrap: false },
      { speaker: 'Student', role: 'Candidate', text: 'Yes, because my grandmother always cooks delicious Italian pasta, and we have lots of fun chatting together.', isClue: true, isTrap: false }
    ],
    modelAnswers: {
      checklist: [
        '包含至少 3~4 個完整句子，切忌只回答單詞或片語。',
        '明確交代家庭成員（人數、父母、手足身分）。',
        '具體描述週日的戶外/休閒活動與用餐安排。',
        '精準運用連接詞 (because, and, so, then, which is) 拓展句型深度。'
      ],
      band13: 'There are four people in my family: my parents, my brother and me. On Sundays, we often go to the park and play basketball. In the evening, we have dinner together at home.',
      band15: 'There are four of us in my family: my parents, my older brother and me. On Sunday mornings, we usually ride our bicycles to the local park, which is great fun. In the afternoon, we often visit my grandparents because my grandmother cooks wonderful pasta, and we all enjoy spending time together.'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】測驗口說 Part 1 "Tell me something about..." 的長句延伸與自發表達能力。Flyers 小朋友常習慣考官問什麼只回答兩三個字，但在 KET 口說中，考官評估的是考生能否獨立組織 3 句以上語意連貫且具有細節的完整回答。',
      correctReason: '✅ 【滿分 15 盾評分規準解析】\n1. 結構完整層次分明：家庭成員 ➔ 週日早晨活動 ➔ 傍晚安排與個人正面感受。\n2. 連接詞靈活自如： ride bicycles..., which is great fun / visit grandparents because...\n3. 發音清晰流暢，完全沒有單詞停頓或需要考官重複提示。',
      commonTraps: [
        { wrong: '單詞破裂式回答（如 Four people. Dad, mum, me. Sunday park play games.）', whyWrong: '考官無法評定你的句子文法與組織架構，口說最高只能落在 10~11 盾，無法通過 13 盾 Pass with Merit！' },
        { wrong: '死記硬背背誦非題目的長模版', whyWrong: '考官極易聽出機械背誦感。如果題目問的是 family and Sundays，卻硬背學校生活或個人嗜好，會因離題遭扣分。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'There are four of us in my family = I come from a family of four（我們家有四口人）',
        'spend time together = enjoy each other\'s company（享受彼此相處時光）',
        'delicious = wonderful / tasty（美味可口的）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n頻率副詞位置與介系詞規則：\n• 頻率副詞（usually, often, always）放在一般動詞前面（we usually go），但放在 be 動詞後面（we are always happy）。\n• on Sundays：加上複數 -s 表示「每逢星期日」，表示習慣性活動。',
      examVariations: '🔮 【下次考場可能變形】\n考官延伸追問常考："What is your favourite day of the week and why?"，可用 "My favourite day is Sunday because my whole family can spend time together outdoors." 來作答。'
    }
  },

  // ==========================================
  // RWP6: Part 6 短訊寫作 (25+字) (1 題: 035)
  // Email to Penfriend Alex
  // ==========================================
  {
    code: 'U01-RWP6-S3-035',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'writing',
    ketPart: 'RWP6',
    ketPartName: 'WR Part 6 · 短訊寫作 (25+字)',
    difficulty: 3,
    questionType: 'writing',
    passageTitle: 'Write an Email to Penfriend Alex',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Alex<br><strong>Subject:</strong> Your family and weekends!</div>
      <p>Hi!</p>
      <p>I would love to know more about you and your home life! Who do you live with in your house? What does your favourite family member look like? And what exciting things do you do together at weekends?</p>
      <p>Hope to hear from you soon!<br>Alex</p>
    </div>`,
    instruction: 'Read the email from your English penfriend Alex. Write an email to Alex and answer the questions. Write 25 words or more.',
    prompt: 'Write an email to Alex. In your email:\n• tell Alex who you live with in your family\n• describe what one family member looks like (use "has got")\n• say what you usually do together at weekends\nWrite 25 words or more.',
    options: null,
    answer: ['Writing Task: Evaluated by CEFR A2 Rubric (Band 13 / Band 15)'],
    modelAnswers: {
      checklist: [
        'Point 1 (Who you live with): 明確說明自己同住的家庭成員（如 parents, older brother）。',
        'Point 2 (Appearance with has got): 使用 has got 句型精準描寫一位家人的外貌特徵（如 curly hair, glasses）。',
        'Point 3 (Weekend activity): 具體寫出週末常一起進行的休閒活動（如 ride bikes in the park）。',
        'Word count: 內文字數必須達到 25 字以上（建議 35–50 字最佳，避免冗長或不足）。'
      ],
      band13: 'Hi Alex,\nI live with my parents and my brother. My brother has got short dark hair and brown eyes. At weekends, we usually ride our bicycles in the park together. Write back soon!\n(35 words — 達到 A2 Key 標準 13 盾)',
      band15: 'Hi Alex,\nThanks for your lovely email! In my family, I live with my parents and my younger sister. My sister is very cheerful and she has got curly blond hair and big blue eyes. At weekends, we often bake delicious chocolate cookies together and watch funny movies. What about your family?\n(52 words — 榮獲 KET 滿分 15 盾 Excellence 範本)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Writing Part 6 嚴格測驗考生針對三大提示點（Points）進行自足書信溝通的能力。Flyers 學生最容易犯的重大錯誤是「漏答其中一個 point」或「字數少於 25 字」，導致 Content 項目慘遭扣分。',
      correctReason: '✅ 【滿分 15 盾評分規準解析】\n1. Content (5/5)：精準完整回應全部 3 個提示點（同住家庭成員 ➔ 外貌特徵 has got curly hair ➔ 週末烘焙與看電影）。\n2. Organisation (5/5)：具備標準書信框架（Hi Alex, 開頭 ➔ Thanks for your email 禮貌承接 ➔ What about your family? 互動結尾）。\n3. Language (5/5)：運用 A2 進階外貌詞彙與形容詞（cheerful, curly blond hair），文法時態與標點零瑕疵。',
      commonTraps: [
        { wrong: '字數低於 25 字（例如只寫了 20 個字）', whyWrong: '⚠️ 考場致命傷！Part 6 題目要求 "Write 25 words or more"。字數不足 25 字在劍橋評分中 Content 會被直接扣除至少 2 分，失去取得 13 盾的資格！' },
        { wrong: '漏寫外貌描寫，只提到名字（如 My sister is Lily.）', whyWrong: '⚠️ 提示點明確要求 describe appearance using "has got"。若未寫出具體外貌特徵（如 hair, eyes, height），該 point 會被判定為 omitted 或 incomplete！' },
        { wrong: 'has got 主詞動詞不一致（如 My sister have got...）', whyWrong: '第三人稱單數（he, she, my sister）必須搭配 has got；只有第一/二人稱與複數才用 have got。主動詞不一致屬於 Language 扣分重點。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'cheerful = friendly and happy（開朗樂觀的、友善愉快的）',
        'bake cookies = make biscuits（烘烤餅乾）',
        'curly blond hair = wavy fair hair（金色捲髮）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhave got / has got 在英式英語中的外貌描寫：\n• 肯定句：She has got long straight hair.（口語常縮寫為 She\'s got...）\n• 否定句：He hasn\'t got glasses.\n• 疑問句：Has he got brown eyes? Yes, he has. / No, he hasn\'t.\n美式英語常直接用 have / has（She has long hair），但在劍橋 KET 閱讀與聽力中，has got / have got 出現頻率極高，寫作中使用格外地道！',
      examVariations: '🔮 【下次考場可能變形】\n題目提示點可能變形為：描述你最喜歡的老師的外貌、介紹新鄰居長相，或描寫寵物外觀。只要牢記 "主詞 + has/have got + [長短/捲直] + [顏色] + hair" 公式即可快速破題。'
    }
  },

  // ==========================================
  // LSP2: Part 2 聽力表格填空 (5 題: 036~040)
  // Monologue: International Penfriend Club Profile (Emma McLeod)
  // ==========================================
  {
    code: 'U01-LSP2-S2-036',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 2,
    questionType: 'gap',
    passageTitle: 'LS Part 2 · International Penfriend Club Profile',
    instruction: 'You will hear a club leader talking about a new Scottish penfriend, Emma. For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.',
    prompt: 'International Penfriend Club Profile — Age of penfriend: [ (36) ______ ] years old',
    options: null,
    answer: ['12', 'twelve'],
    audioLines: [
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Good afternoon, club members! Today I am delighted to introduce our newest international penfriend from the Scottish Highlands.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Her first name is Emma. Some club members thought her surname was MacDonald, but that\'s her mother\'s family name. Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D. McLeod.', isClue: false, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Now, about Emma\'s family. Her older brother is fourteen and her little sister is eight, but Emma herself has just turned twelve years old last month, so she is the exact same age as most of you.', isClue: true, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Emma lives in a beautiful countryside village. Because her school is far away, she has an early daily routine. Her father gets up at six o\'clock to prepare breakfast, but Emma wakes up at quarter to seven — that\'s six forty-five every school morning.', isClue: false, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'After getting dressed, she leaves home at seven thirty to catch the morning school coach.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'In her free time at weekends, Emma is very active outdoors. Many of you asked if she goes swimming. Well, she used to go swimming every Saturday, but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling along the lake.', isClue: false, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Finally, if you want to write to Emma, she has a busy schedule. On Friday evenings she goes to youth club and Tuesdays are for music lessons. Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon.', isClue: false, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'I have written Emma\'s contact email on the board, so please take a pen and write down her profile carefully!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生在聽力獨白中排除多個親屬年齡數字干擾，精確定位目標人物（Emma herself）的真實年齡。',
      correctReason: '✅ 【為什麼填 12 / twelve 是對的？】\n廣播第 3 段中，社長清楚指出哥哥 14 歲、妹妹 8 歲，隨後強調："Emma herself has just turned twelve years old"（Emma 本人剛滿 12 歲），因此空格應填寫阿拉伯數字 12 或英文單字 twelve。',
      commonTraps: [
        { wrong: '填寫 14', whyWrong: '【家人年齡混淆】：14 歲是 Emma 的哥哥（older brother is fourteen），而非 Emma 本人的年齡！' },
        { wrong: '填寫 8', whyWrong: '【家人年齡混淆】：8 歲是 Emma 的妹妹（little sister is eight），切勿混淆家中不同成員。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'turn twelve = reach the age of twelve（滿 12 歲）',
        'same age as = of identical age（同年齡、同歲）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n年齡填空數字寫法規範：\n在劍橋 KET 聽力 Part 2 中，年齡可寫阿拉伯數字 "12" 亦可拼寫為單字 "twelve"。官方建議優先寫阿拉伯數字，能大幅降低拼字失誤風險！',
      examVariations: '🔮 【下次考場可能變形】\n考題常出現 "She will be 13 next year" 或 "She is in Year 7"，考驗推算或精確聽取當前年齡。'
    }
  },
  {
    code: 'U01-LSP2-S3-037',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'LS Part 2 · International Penfriend Club Profile',
    instruction: 'You will hear a club leader talking about a new Scottish penfriend, Emma. For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.',
    prompt: 'International Penfriend Club Profile — Penfriend surname: [ (37) ______ ]',
    options: null,
    answer: ['mcleod', 'McLeod'],
    audioLines: [
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Good afternoon, club members! Today I am delighted to introduce our newest international penfriend from the Scottish Highlands.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Her first name is Emma. Some club members thought her surname was MacDonald, but that\'s her mother\'s family name. Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D. McLeod.', isClue: true, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Now, about Emma\'s family. Her older brother is fourteen and her little sister is eight, but Emma herself has just turned twelve years old last month, so she is the exact same age as most of you.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Emma lives in a beautiful countryside village. Because her school is far away, she has an early daily routine. Her father gets up at six o\'clock to prepare breakfast, but Emma wakes up at quarter to seven — that\'s six forty-five every school morning.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'After getting dressed, she leaves home at seven thirty to catch the morning school coach.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'In her free time at weekends, Emma is very active outdoors. Many of you asked if she goes swimming. Well, she used to go swimming every Saturday, but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling along the lake.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Finally, if you want to write to Emma, she has a busy schedule. On Friday evenings she goes to youth club and Tuesdays are for music lessons. Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'I have written Emma\'s contact email on the board, so please take a pen and write down her profile carefully!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗 KET 聽力 Part 2 必考核心考點「英文字母逐字拼讀（Spelling Names）」，並能識別干擾姓氏。',
      correctReason: '✅ 【為什麼填 McLeod / mcleod 是對的？】\n社長先排除了媽媽的姓氏 MacDonald，接著明確拼讀："Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D."。大小寫皆計分，正解為 McLeod。',
      commonTraps: [
        { wrong: '填寫 MacDonald', whyWrong: '【母親姓氏干擾】：社長特別澄清 MacDonald 是媽媽娘家的姓（her mother\'s family name），Emma 真正的姓氏是 McLeod！' },
        { wrong: '拼錯字母（如 Mcloud, Macleod）', whyWrong: '聽力專有名詞拼讀必須一字不差：M-C-L-E-O-D。若遺漏字母或多加字母均算全錯！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'surname = last name / family name（姓氏）',
        'first name = given name（名字）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n英式姓氏前綴發音與拼讀：\n蘇格蘭常見姓氏前綴 Mc- / Mac- 意為「…之子」。在聽力填空中，考官一定會逐字朗讀拼音（如 M-C-L-E-O-D），聽到連字號停頓時必須迅速記下每個字母！',
      examVariations: '🔮 【下次考場可能變形】\n常考英式拼讀易混淆字母：G / J、C / S、B / V、I / E，平時需做字母聽音盲打訓練。'
    }
  },
  {
    code: 'U01-LSP2-S3-038',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'LS Part 2 · International Penfriend Club Profile',
    instruction: 'You will hear a club leader talking about a new Scottish penfriend, Emma. For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.',
    prompt: 'International Penfriend Club Profile — Daily morning wake-up time: [ (38) ______ ] a.m.',
    options: null,
    answer: ['6.45', '6:45', 'quarter to seven'],
    audioLines: [
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Good afternoon, club members! Today I am delighted to introduce our newest international penfriend from the Scottish Highlands.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Her first name is Emma. Some club members thought her surname was MacDonald, but that\'s her mother\'s family name. Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D. McLeod.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Now, about Emma\'s family. Her older brother is fourteen and her little sister is eight, but Emma herself has just turned twelve years old last month, so she is the exact same age as most of you.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Emma lives in a beautiful countryside village. Because her school is far away, she has an early daily routine. Her father gets up at six o\'clock to prepare breakfast, but Emma wakes up at quarter to seven — that\'s six forty-five every school morning.', isClue: true, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'After getting dressed, she leaves home at seven thirty to catch the morning school coach.', isClue: false, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'In her free time at weekends, Emma is very active outdoors. Many of you asked if she goes swimming. Well, she used to go swimming every Saturday, but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling along the lake.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Finally, if you want to write to Emma, she has a busy schedule. On Friday evenings she goes to youth club and Tuesdays are for music lessons. Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'I have written Emma\'s contact email on the board, so please take a pen and write down her profile carefully!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生在連續時間資訊（6.00 ➔ 6.45 ➔ 7.30）中，準確捕捉目標動作「Emma 起床（wakes up）」所對應的時間。',
      correctReason: '✅ 【為什麼填 6.45 / quarter to seven 是對的？】\n社長說道："Her father gets up at six o\'clock... but Emma wakes up at quarter to seven — that\'s six forty-five every school morning."，明確指出 Emma 起床時刻為 6:45（quarter to seven）。',
      commonTraps: [
        { wrong: '填寫 6.00 或 6:00', whyWrong: '【父親起床時間干擾】：六點（six o\'clock）是爸爸起床做早餐的時間，不是 Emma 起床時間！' },
        { wrong: '填寫 7.30 或 7:30', whyWrong: '【出門搭車時間干擾】：七點半（seven thirty）是 Emma 離家搭乘校車的時間，不是起床時間！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'quarter to seven = 6.45 / 6:45（差十五分七點 / 六點四十五分）',
        'gets up = wakes up / rises from bed（起床）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n劍橋時間標點寫法：\n在英式英語與劍橋官方考卷中，時間通常以點號標記（如 6.45 或 7.30），亦接受冒號（6:45）。若題目後面已有 "a.m."，空格內切勿重複寫 a.m.。',
      examVariations: '🔮 【下次考場可能變形】\n考官常考 "half past"（半點）與 "quarter past"（十五分），如 half past six (6.30)。'
    }
  },
  {
    code: 'U01-LSP2-S4-039',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 4,
    questionType: 'gap',
    passageTitle: 'LS Part 2 · International Penfriend Club Profile',
    instruction: 'You will hear a club leader talking about a new Scottish penfriend, Emma. For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.',
    prompt: 'International Penfriend Club Profile — Favourite weekend activity: [ (39) ______ ]',
    options: null,
    answer: ['cycling'],
    audioLines: [
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Good afternoon, club members! Today I am delighted to introduce our newest international penfriend from the Scottish Highlands.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Her first name is Emma. Some club members thought her surname was MacDonald, but that\'s her mother\'s family name. Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D. McLeod.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Now, about Emma\'s family. Her older brother is fourteen and her little sister is eight, but Emma herself has just turned twelve years old last month, so she is the exact same age as most of you.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Emma lives in a beautiful countryside village. Because her school is far away, she has an early daily routine. Her father gets up at six o\'clock to prepare breakfast, but Emma wakes up at quarter to seven — that\'s six forty-five every school morning.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'After getting dressed, she leaves home at seven thirty to catch the morning school coach.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'In her free time at weekends, Emma is very active outdoors. Many of you asked if she goes swimming. Well, she used to go swimming every Saturday, but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling along the lake.', isClue: true, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Finally, if you want to write to Emma, she has a busy schedule. On Friday evenings she goes to youth club and Tuesdays are for music lessons. Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'I have written Emma\'s contact email on the board, so please take a pen and write down her profile carefully!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生聽辨「used to 過去習慣干擾 vs 當前最愛（favourite hobby now）」的語意轉折並精準填入名詞/動名詞。',
      correctReason: '✅ 【為什麼填 cycling 是對的？】\n社長明確說明："Many of you asked if she goes swimming. Well, she used to go swimming... but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling..."，因此當前最喜歡的週末活動必為 cycling。',
      commonTraps: [
        { wrong: '填寫 swimming', whyWrong: '【過去習慣/設施關閉干擾】：社長說明游泳池目前關閉維修（closed for repairs），且是過去的習慣（used to go swimming），已被排除！' },
        { wrong: '拼寫成 riding 或 bike', whyWrong: '社長清楚說出目前最愛的運動單字 "cycling"，若填寫與音檔不符的詞語容易遭判分失誤。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'cycling = riding a bicycle / bike riding（騎自行車）',
        'favourite hobby = preferred pastime / best-loved activity（最喜愛的嗜好）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nused to + V 表示「過去曾經…（但現在已經沒有了）」：\n• "She used to go swimming" 意謂她以前常去游泳，但現在沒有在游了。\n在 KET 聽力中，凡是在 used to 後面出現的活動，99% 是用來誘騙考生的無效干擾項！',
      examVariations: '🔮 【下次考場可能變形】\n同類考題常在 skating, dancing, painting 間設置 "used to" 干擾，務必鎖定轉折詞 "now" 或 "currently"。'
    }
  },
  {
    code: 'U01-LSP2-S5-040',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 5,
    questionType: 'gap',
    passageTitle: 'LS Part 2 · International Penfriend Club Profile',
    instruction: 'You will hear a club leader talking about a new Scottish penfriend, Emma. For each question, write the correct answer in the gap. Write ONE word or a number or a date or a time.',
    prompt: 'International Penfriend Club Profile — Best day to send emails / chat: [ (40) ______ ]',
    options: null,
    answer: ['wednesday', 'Wednesday'],
    audioLines: [
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Good afternoon, club members! Today I am delighted to introduce our newest international penfriend from the Scottish Highlands.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Her first name is Emma. Some club members thought her surname was MacDonald, but that\'s her mother\'s family name. Emma\'s actual surname is McLeod. Let me spell that clearly for your notes: that\'s M-C-L-E-O-D. McLeod.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Now, about Emma\'s family. Her older brother is fourteen and her little sister is eight, but Emma herself has just turned twelve years old last month, so she is the exact same age as most of you.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Emma lives in a beautiful countryside village. Because her school is far away, she has an early daily routine. Her father gets up at six o\'clock to prepare breakfast, but Emma wakes up at quarter to seven — that\'s six forty-five every school morning.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'After getting dressed, she leaves home at seven thirty to catch the morning school coach.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'In her free time at weekends, Emma is very active outdoors. Many of you asked if she goes swimming. Well, she used to go swimming every Saturday, but our local pool is currently closed for repairs. So her absolute favourite hobby now is cycling along the lake.', isClue: false, isTrap: false },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'Finally, if you want to write to Emma, she has a busy schedule. On Friday evenings she goes to youth club and Tuesdays are for music lessons. Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon.', isClue: true, isTrap: true },
      { speaker: 'Club Leader', role: 'Club Organiser', text: 'I have written Emma\'s contact email on the board, so please take a pen and write down her profile carefully!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗一週七天星期單字的聽力抓取與拼寫，並能排除繁忙行程干擾，鎖定唯一合適的通訊日（best day）。',
      correctReason: '✅ 【為什麼填 Wednesday / wednesday 是對的？】\n社長逐一排除週五（青年社團）與週二（音樂課）後，以 Therefore 總結："Therefore, the best day of the week to send her an email or message is Wednesday, during her free study afternoon."，故填 Wednesday。',
      commonTraps: [
        { wrong: '填寫 Friday', whyWrong: '【行程繁忙干擾】：週五晚上 Emma 要去青年社團活動（goes to youth club），不是聯絡的最佳時間！' },
        { wrong: '填寫 Tuesday', whyWrong: '【音樂課干擾】：週二是上音樂課的日子（music lessons），行程滿檔。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'best day = most suitable day / ideal time（最理想的日子）',
        'youth club = community centre for young people（青年俱樂部）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n星期單字拼寫大魔王：\nWednesday 的中間 "d" 不發音（英音 /ˈwenz.deɪ/），剛過 Flyers 的學生極常漏拼 d（如 Wenesday）或拼錯成 Wednsday。記住口訣：Wed - nes - day！',
      examVariations: '🔮 【下次考場可能變形】\nPart 2 表格填空也很常考 Thursday（星期四）與 Saturday（星期六），首字母在作答紙上無論大小寫均可得分，但字母完整度必須百分之百。'
    }
  },

  // ==========================================
  // LSP4: Part 4 聽力短對話主旨 (3 題: 041~043)
  // Short everyday Unit 1 dialogues & voicemail
  // ==========================================
  {
    code: 'U01-LSP4-S3-041',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'LS Part 4 · Tidying the Shared Bedroom',
    instruction: 'You will hear two siblings talking about tidying their shared bedroom. Choose the correct answer (A, B or C).',
    prompt: 'What do the brother and sister agree to do first?',
    options: [
      { key: 'A', text: 'put the books on the shelf' },
      { key: 'B', text: 'put the games in the toy box' },
      { key: 'C', text: 'take the dirty clothes to wash' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Brother', role: 'Sibling A', text: 'Look at our bedroom floor, Lily! There are socks, school books and board games everywhere. We need to tidy up before Mum comes home.', isClue: false, isTrap: false },
      { speaker: 'Sister', role: 'Sibling B', text: 'I know. Should we put all the books back on the bookshelf first? They are making a huge mess.', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Brother', role: 'Sibling A', text: 'Well, if we do that, we might step on the puzzle pieces and break them. Why don\'t we collect the toys and board games off the carpet first?', isClue: true, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Sister', role: 'Sibling B', text: 'Good thinking! Let\'s put those into the toy box right now, and then we can sort out the books and dirty clothes.', isClue: true, isTrap: true, distractorTarget: 'C' },
      { speaker: 'Brother', role: 'Sibling A', text: 'Deal! I\'ll grab the big plastic box from the corner.', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET 聽力 Part 4 短對話「討論先後順序與達成共識（Agreement）」題型。考查學生捕捉否定、建議句型（Why don\'t we...）與最終贊同標記詞（Good thinking / Deal）。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n妹妹原本提議先放書本 (A)，但哥哥以會踩壞拼圖為由提出反建議："Why don\'t we collect the toys and board games off the carpet first?"，妹妹隨即表示贊同："Good thinking! Let\'s put those into the toy box right now"，因此兩人同意最先做的事是收拾玩具與桌遊 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：妹妹最初提議被推翻】妹妹雖然問 "Should we put all the books back... first?"，但哥哥解釋會踩壞拼圖而建議延後，妹妹最後同意排在後面處理。',
        'C': '❌ 【選項 (C) 陷阱：排在最後的次要任務】洗衣服（dirty clothes）是妹妹在決定收好桌遊之後才提到的後續步驟（"and then we can sort out the books and dirty clothes"），並非最先做的事。'
      }
    },
    extensionStudy: {
      synonyms: [
        'tidy up = clean up / put things in order（收拾整理）',
        'good thinking = brilliant idea / that makes sense（好主意、有道理）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n提議與贊同句型：\n• 提議：Why don\'t we + 原形動詞...? / Shall we...? / How about + V-ing...?\n• 贊同：Good thinking! / Let\'s do that. / Deal! / I agree.\n聽力對話中，第一個提出的選項往往是誘餌，後面伴隨 "Why don\'t we..." 的才是真正答案！',
      examVariations: '🔮 【下次考場可能變形】\n常見變形題目包括：兩位朋友討論先去圖書館借書還是先去買三明治，破題關鍵同樣在抓取轉折同意詞。'
    }
  },
  {
    code: 'U01-LSP4-S4-042',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'LS Part 4 · Voicemail about Picking Up Grandma',
    instruction: 'You will hear a mother leaving a voicemail message for her family. Choose the correct answer (A, B or C).',
    prompt: 'What is the main purpose of Mum\'s phone message?',
    options: [
      { key: 'A', text: 'to ask someone to meet Grandma at the station' },
      { key: 'B', text: 'to remind her son to eat the dinner in the fridge' },
      { key: 'C', text: 'to complain about her late meeting at the hospital' }
    ],
    answer: 'A',
    audioLines: [
      { speaker: 'Mum', role: 'Mother', text: 'Hi Mark, it\'s Mum. I\'m still stuck in a meeting at the hospital and I won\'t finish until six.', isClue: false, isTrap: true, distractorTarget: 'C' },
      { speaker: 'Mum', role: 'Mother', text: 'Your Grandma is arriving at the central bus station from Manchester at five fifteen this afternoon.', isClue: true, isTrap: false },
      { speaker: 'Mum', role: 'Mother', text: 'I was planning to drive there myself, but now I can\'t. Could you please take the umbrella, walk down to the station, and help her carry her heavy suitcase home?', isClue: true, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Mum', role: 'Mother', text: 'There is some cold chicken in the fridge if you\'re hungry before you leave. Please call me when you get back with her. Thanks love!', isClue: false, isTrap: true, distractorTarget: 'B' }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗聽力獨白語音留言（Voicemail）中辨識「說話者核心目的（Main Purpose / Reason for Calling）」的高階歸納能力。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n媽媽留言的核心訴求在第三段請求："Could you please take the umbrella, walk down to the station, and help her carry her heavy suitcase home?"。她打電話的主因是因為自己被會議耽擱，需要兒子去車站接祖母回家，正解為 (A)。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：順帶提及的次要細節】冰箱裡有冷雞肉（cold chicken in the fridge）只是媽媽順口提醒兒子出門前餓了可以吃，絕非她特地打這通電話的根本目的。',
        'C': '❌ 【選項 (C) 陷阱：背景原因非打電話目的】媽媽在醫院開會到六點（meeting at the hospital）只是解釋她無法親自去接人的客觀背景，並不是為了抱怨工作。'
      }
    },
    extensionStudy: {
      synonyms: [
        'stuck in a meeting = delayed by work / held up in a conference（被會議耽擱卡住）',
        'heavy suitcase = large luggage / heavy travel bag（沉重行李箱）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n客氣請求句型 Could you please...:\n"Could you please take the umbrella and help her...?"\nCould 在此不是過去式，而是比 Can 更委婉禮貌的現在請求用法，後面一律接原形動詞。此句型在留言中高達 90% 代表說話者的真正目的！',
      examVariations: '🔮 【下次考場可能變形】\n常見電話留言情境還包括：醫生診所提醒改期、圖書館通知取書、朋友改約碰面地點等。'
    }
  },
  {
    code: 'U01-LSP4-S4-043',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'LS Part 4 · Meeting the New Next-Door Neighbour',
    instruction: 'You will hear a boy talking to his friend about his new next-door neighbour. Choose the correct answer (A, B or C).',
    prompt: 'What does the boy think about his new neighbour, Mr Clark?',
    options: [
      { key: 'A', text: 'He is quiet and shy.' },
      { key: 'B', text: 'He is very kind and helpful.' },
      { key: 'C', text: 'He needs help from other people.' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Friend', role: 'School Friend', text: 'Hey Toby, did someone move into that empty house next to yours yesterday?', isClue: false, isTrap: false },
      { speaker: 'Toby', role: 'Neighbour Boy', text: 'Yes, an elderly gentleman called Mr Clark. At first, my dad thought he might be quiet and keep to himself because he lives alone.', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Friend', role: 'School Friend', text: 'And is he like that?', isClue: false, isTrap: false },
      { speaker: 'Toby', role: 'Neighbour Boy', text: 'Not at all! As soon as he saw us carrying groceries, he came straight over with a huge smile, helped my mum with two heavy boxes, and even gave my sister some delicious homemade pear jam! He is amazingly friendly.', isClue: true, isTrap: false, distractorTarget: 'B' }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生從人物言行細節中推斷「性格與態度（Attitude & Personality Inference）」的能力，並避開初期偏見的干擾。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n男孩 Toby 描述鄰居 Mr Clark 主動微笑走過來幫媽媽搬兩個重箱子，還送自製梨子果醬給妹妹，並總結："He is amazingly friendly"（他驚人地友善），完全對應選項 (B) 的 "very kind and helpful"。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：爸爸最初的猜測被推翻】爸爸起初以為他一個人住可能很安靜內向（might be quiet），但 Toby 緊接著用 "Not at all!"（完全不是這樣！）果斷推翻了這個猜測。',
        'C': '❌ 【選項 (C) 陷阱：方向顛倒】是新鄰居主動幫 Toby 的媽媽搬箱子（helped my mum with boxes），而非鄰居自己需要別人幫助。'
      }
    },
    extensionStudy: {
      synonyms: [
        'kind and helpful = generous and supportive（親切熱心的）',
        'keep to oneself = stay quiet and private（深居簡出、不愛與人交往）',
        'groceries = food and household goods bought at a shop（購買的食材雜貨）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n"Not at all!" 的強烈否定語氣：\n當外籍考官或聽力音檔中出現 "Not at all!" 時，代表前方提出的所有推測全部作廢！緊接著出現的描述才是人物真正的性格特質。',
      examVariations: '🔮 【下次考場可能變形】\n人物性格形容詞對比常考：strict vs patient, nervous vs confident, lazy vs hard-working。'
    }
  },

  // ==========================================
  // LSP5: Part 5 聽力資訊配對 (5 題: 044~048)
  // Dialogue: Sunday Family Picnic Jobs (Mia & Leo)
  // ==========================================
  {
    code: 'U01-LSP5-S3-044',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'LS Part 5 · Sunday Family Picnic Jobs',
    instruction: 'For each question, choose the correct answer. You will hear twins Mia and Leo planning what five family members will bring to Sunday\'s picnic.',
    prompt: 'Which item will Grandad bring to the family picnic?',
    options: [
      { key: 'A', text: 'sandwich boxes' },
      { key: 'B', text: 'fruit juice' },
      { key: 'C', text: 'picnic blanket' },
      { key: 'D', text: 'folding chairs' },
      { key: 'E', text: 'football' },
      { key: 'F', text: 'camera' },
      { key: 'G', text: 'board games' },
      { key: 'H', text: 'sun hats' }
    ],
    answer: 'D',
    audioLines: [
      { speaker: 'Mia', role: 'Twin Sister', text: 'Leo, the weather forecast for our big family picnic in the country park is brilliant! Let\'s check what everyone is bringing so we don\'t forget anything.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Good idea, Mia. Mum has already put the picnic blanket in the car boot. What about Grandad? Is he bringing his chess set?', isClue: false, isTrap: true, distractorTarget: 'G' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'No, board games are for later! Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed.', isClue: true, isTrap: false, distractorTarget: 'D' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sensible Grandad. And what about Aunt Clara? Did she make her famous chicken sandwiches as usual?', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Actually, Uncle Tom offered to make all the food today. Aunt Clara bought fresh oranges and sweet apples at the market, so she is bringing big bottles of cold fruit juice for us.', isClue: false, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Fantastic, that will keep us cool in the heat! I brought sun hats for both of us too. Did Cousin Ben say he would bring a digital camera to take pictures of birds?', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Ben doesn\'t own a good camera, Leo! But you know how energetic he is. He pumped up his new leather football so we can all have a match on the field after lunch.', isClue: false, isTrap: false, distractorTarget: 'E' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Awesome! And Uncle Tom is definitely bringing the food, right?', isClue: false, isTrap: false },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes. Nobody will stay hungry!', isClue: false, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Brilliant. And lastly, what is our sister Nina bringing? I thought she wanted to take photos with Dad\'s camera.', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play while relaxing under the big trees.', isClue: false, isTrap: false, distractorTarget: 'G' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sounds like we\'re 100% ready for an amazing family Sunday!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗 KET 聽力 Part 5 經典長對話 8 選 5 配對題，辨別「提議攜帶 chess set 干擾 vs 實際攜帶 folding chairs」的轉折語意。',
      correctReason: '✅ 【為什麼選 (D) folding chairs 是對的？】\nMia 清楚說明祖父因為坐在潮濕草地上會膝蓋痛，所以從花園工具房帶來摺疊椅："Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed."，正解為 (D)。',
      distractorAnalysis: {
        'G': '❌ 【選項 (G) board games 陷阱】Leo 猜測 Grandad 是否帶西洋棋（chess set），但 Mia 說不是，桌遊是晚點其他人的事。',
        'C': '❌ 【選項 (C) picnic blanket 陷阱】野餐墊是媽媽已經放進後車廂的物品（Mum put in the car boot），不是 Grandad 帶的。',
        'H': '❌ 【選項 (H) sun hats 陷阱】遮陽帽是 Leo 為他和 Mia 準備的防曬裝備，與 Grandad 無關。'
      }
    },
    extensionStudy: {
      synonyms: [
        'folding chairs = portable camping chairs（摺疊椅、便攜椅）',
        'garden shed = outdoor storage hut（花園工具房、庫房）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n以現在進行式表預定計畫（Present Continuous for Fixed Future Arrangements）：\n"He is bringing those folding chairs." 在英式英語中，已經安排好或承諾要做的事，常直接用 be + V-ing 表未來，比 will 更具確定感。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 中常考祖父母長輩帶來的物品：rug（小毛毯）、cushion（坐墊）、thermos flask（保溫瓶）等。'
    }
  },
  {
    code: 'U01-LSP5-S3-045',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'LS Part 5 · Sunday Family Picnic Jobs',
    instruction: 'For each question, choose the correct answer. You will hear twins Mia and Leo planning what five family members will bring to Sunday\'s picnic.',
    prompt: 'Which item will Aunt Clara bring to the family picnic?',
    options: [
      { key: 'A', text: 'sandwich boxes' },
      { key: 'B', text: 'fruit juice' },
      { key: 'C', text: 'picnic blanket' },
      { key: 'D', text: 'folding chairs' },
      { key: 'E', text: 'football' },
      { key: 'F', text: 'camera' },
      { key: 'G', text: 'board games' },
      { key: 'H', text: 'sun hats' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Mia', role: 'Twin Sister', text: 'Leo, the weather forecast for our big family picnic in the country park is brilliant! Let\'s check what everyone is bringing so we don\'t forget anything.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Good idea, Mia. Mum has already put the picnic blanket in the car boot. What about Grandad? Is he bringing his chess set?', isClue: false, isTrap: true, distractorTarget: 'G' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'No, board games are for later! Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed.', isClue: false, isTrap: false, distractorTarget: 'D' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sensible Grandad. And what about Aunt Clara? Did she make her famous chicken sandwiches as usual?', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Actually, Uncle Tom offered to make all the food today. Aunt Clara bought fresh oranges and sweet apples at the market, so she is bringing big bottles of cold fruit juice for us.', isClue: true, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Fantastic, that will keep us cool in the heat! I brought sun hats for both of us too. Did Cousin Ben say he would bring a digital camera to take pictures of birds?', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Ben doesn\'t own a good camera, Leo! But you know how energetic he is. He pumped up his new leather football so we can all have a match on the field after lunch.', isClue: false, isTrap: false, distractorTarget: 'E' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Awesome! And Uncle Tom is definitely bringing the food, right?', isClue: false, isTrap: false },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes. Nobody will stay hungry!', isClue: false, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Brilliant. And lastly, what is our sister Nina bringing? I thought she wanted to take photos with Dad\'s camera.', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play while relaxing under the big trees.', isClue: false, isTrap: false, distractorTarget: 'G' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sounds like we\'re 100% ready for an amazing family Sunday!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生抓取轉折副詞 Actually 並區分「過去慣常準備三明治干擾 vs 本次改帶自製新鮮果汁」的真相。',
      correctReason: '✅ 【為什麼選 (B) fruit juice 是對的？】\nMia 用 Actually 澄清 Uncle Tom 接手了食物製作，接著交代 Clara 阿姨："Aunt Clara bought fresh oranges and sweet apples... so she is bringing big bottles of cold fruit juice for us."，故正確選項為 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) sandwich boxes 陷阱】Leo 以為 Clara 阿姨會像平時一樣做三明治，但 Mia 特別說明這次已改由 Tom 叔叔全權負責製作食物。',
        'C': '❌ 【選項 (C) picnic blanket 陷阱】野餐墊早已由媽媽收納進後車廂，非 Clara 阿姨準備。',
        'H': '❌ 【選項 (H) sun hats 陷阱】帽子是雙胞胎自己攜帶的防曬用品，並非阿姨帶的物品。'
      }
    },
    extensionStudy: {
      synonyms: [
        'fruit juice = fresh fruit drink / squash（新鮮果汁）',
        'keep us cool = prevent us from feeling too hot（讓我們保持涼爽消暑）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nActually 的反駁語氣：\n"Actually, Uncle Tom offered to make all the food today."\nActually 在聽力對話中常作為修正前人錯誤認知或推翻假設的信號詞，後面接的一定是本次的真實事實！',
      examVariations: '🔮 【下次考場可能變形】\n飲食類聽力題常在 "mineral water", "lemonade", "hot tea" 與 "fruit juice" 之間設干擾項。'
    }
  },
  {
    code: 'U01-LSP5-S4-046',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'LS Part 5 · Sunday Family Picnic Jobs',
    instruction: 'For each question, choose the correct answer. You will hear twins Mia and Leo planning what five family members will bring to Sunday\'s picnic.',
    prompt: 'Which item will Cousin Ben bring to the family picnic?',
    options: [
      { key: 'A', text: 'sandwich boxes' },
      { key: 'B', text: 'fruit juice' },
      { key: 'C', text: 'picnic blanket' },
      { key: 'D', text: 'folding chairs' },
      { key: 'E', text: 'football' },
      { key: 'F', text: 'camera' },
      { key: 'G', text: 'board games' },
      { key: 'H', text: 'sun hats' }
    ],
    answer: 'E',
    audioLines: [
      { speaker: 'Mia', role: 'Twin Sister', text: 'Leo, the weather forecast for our big family picnic in the country park is brilliant! Let\'s check what everyone is bringing so we don\'t forget anything.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Good idea, Mia. Mum has already put the picnic blanket in the car boot. What about Grandad? Is he bringing his chess set?', isClue: false, isTrap: true, distractorTarget: 'G' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'No, board games are for later! Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed.', isClue: false, isTrap: false, distractorTarget: 'D' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sensible Grandad. And what about Aunt Clara? Did she make her famous chicken sandwiches as usual?', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Actually, Uncle Tom offered to make all the food today. Aunt Clara bought fresh oranges and sweet apples at the market, so she is bringing big bottles of cold fruit juice for us.', isClue: false, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Fantastic, that will keep us cool in the heat! I brought sun hats for both of us too. Did Cousin Ben say he would bring a digital camera to take pictures of birds?', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Ben doesn\'t own a good camera, Leo! But you know how energetic he is. He pumped up his new leather football so we can all have a match on the field after lunch.', isClue: true, isTrap: false, distractorTarget: 'E' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Awesome! And Uncle Tom is definitely bringing the food, right?', isClue: false, isTrap: false },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes. Nobody will stay hungry!', isClue: false, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Brilliant. And lastly, what is our sister Nina bringing? I thought she wanted to take photos with Dad\'s camera.', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play while relaxing under the big trees.', isClue: false, isTrap: false, distractorTarget: 'G' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sounds like we\'re 100% ready for an amazing family Sunday!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生排除相機（camera）的否定干擾，並依據人物性格（energetic）準確匹配戶外球類活動物品（football）。',
      correctReason: '✅ 【為什麼選 (E) football 是對的？】\n雖然 Leo 先詢問了相機，但 Mia 立即否決："Ben doesn\'t own a good camera... He pumped up his new leather football so we can all have a match on the field after lunch."，確定 Ben 帶的是足球 (E)。',
      distractorAnalysis: {
        'F': '❌ 【選項 (F) camera 陷阱】Leo 詢問 Ben 是否會帶相機拍鳥，但 Mia 回應 Ben 根本沒有好的相機（doesn\'t own a good camera）。',
        'G': '❌ 【選項 (G) board games 陷阱】桌遊是最後由妹妹 Nina 挑選攜帶的室內遊戲，非活潑好動的 Ben 的選擇。',
        'D': '❌ 【選項 (D) folding chairs 陷阱】摺疊椅是由膝蓋不便的祖父 Grandad 從花園庫房帶來的。'
      }
    },
    extensionStudy: {
      synonyms: [
        'have a match = play a game against each other（進行一場比賽）',
        'pump up = inflate with air（給球打氣充氣）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nso (that) 表目的與結果：\n"He pumped up his new football so we can all have a match."\nso 連接詞引導目的與後續動作，在對話中常直接點出帶該物品的真正意圖與用途。',
      examVariations: '🔮 【下次考場可能變形】\n戶外球類運動常考搭配：tennis racket（網球拍）、badminton shuttlecock（羽毛球）、volleyball（排球）。'
    }
  },
  {
    code: 'U01-LSP5-S4-047',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'LS Part 5 · Sunday Family Picnic Jobs',
    instruction: 'For each question, choose the correct answer. You will hear twins Mia and Leo planning what five family members will bring to Sunday\'s picnic.',
    prompt: 'Which item will Uncle Tom bring to the family picnic?',
    options: [
      { key: 'A', text: 'sandwich boxes' },
      { key: 'B', text: 'fruit juice' },
      { key: 'C', text: 'picnic blanket' },
      { key: 'D', text: 'folding chairs' },
      { key: 'E', text: 'football' },
      { key: 'F', text: 'camera' },
      { key: 'G', text: 'board games' },
      { key: 'H', text: 'sun hats' }
    ],
    answer: 'A',
    audioLines: [
      { speaker: 'Mia', role: 'Twin Sister', text: 'Leo, the weather forecast for our big family picnic in the country park is brilliant! Let\'s check what everyone is bringing so we don\'t forget anything.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Good idea, Mia. Mum has already put the picnic blanket in the car boot. What about Grandad? Is he bringing his chess set?', isClue: false, isTrap: true, distractorTarget: 'G' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'No, board games are for later! Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed.', isClue: false, isTrap: false, distractorTarget: 'D' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sensible Grandad. And what about Aunt Clara? Did she make her famous chicken sandwiches as usual?', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Actually, Uncle Tom offered to make all the food today. Aunt Clara bought fresh oranges and sweet apples at the market, so she is bringing big bottles of cold fruit juice for us.', isClue: false, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Fantastic, that will keep us cool in the heat! I brought sun hats for both of us too. Did Cousin Ben say he would bring a digital camera to take pictures of birds?', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Ben doesn\'t own a good camera, Leo! But you know how energetic he is. He pumped up his new leather football so we can all have a match on the field after lunch.', isClue: false, isTrap: false, distractorTarget: 'E' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Awesome! And Uncle Tom is definitely bringing the food, right?', isClue: true, isTrap: false },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes. Nobody will stay hungry!', isClue: true, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Brilliant. And lastly, what is our sister Nina bringing? I thought she wanted to take photos with Dad\'s camera.', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play while relaxing under the big trees.', isClue: false, isTrap: false, distractorTarget: 'G' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sounds like we\'re 100% ready for an amazing family Sunday!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生在多位親屬分工對話中，精準確認負責食物主食（sandwich boxes）的特定人物（Uncle Tom）。',
      correctReason: '✅ 【為什麼選 (A) sandwich boxes 是對的？】\nMia 清楚回應 Leo 的確認："Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes."（Tom 叔叔打包了三個裝滿起司、鮪魚和番茄的大三明治盒），因此 Tom 叔叔帶的是 (A)。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) fruit juice 陷阱】果汁是 Clara 阿姨買水果自製帶來的冷飲，不是 Tom 叔叔負責的項目。',
        'E': '❌ 【選項 (E) football 陷阱】足球是表哥 Ben 帶去草地上踢球比賽的運動用品。',
        'F': '❌ 【選項 (F) camera 陷阱】相機因電池沒電無人攜帶，Tom 叔叔只負責野餐的主食。'
      }
    },
    extensionStudy: {
      synonyms: [
        'pack sandwich boxes = prepare lunch containers（打包三明治餐盒）',
        'stay hungry = feel hungry / starve（挨餓）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nfull of + 名詞（充滿…、裝滿…）：\n"boxes full of cheese, tuna and fresh tomatoes."\n片語 full of 用於修飾容器裝滿的食材內容，是劍橋閱讀與聽力的極高頻描寫句型。',
      examVariations: '🔮 【下次考場可能變形】\n餐點容器常見名詞考點：boxes（盒子）、bottles（瓶子）、bags（袋子）、tins（罐頭）。'
    }
  },
  {
    code: 'U01-LSP5-S5-048',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 5,
    questionType: 'choice',
    passageTitle: 'LS Part 5 · Sunday Family Picnic Jobs',
    instruction: 'For each question, choose the correct answer. You will hear twins Mia and Leo planning what five family members will bring to Sunday\'s picnic.',
    prompt: 'Which item will Sister Nina bring to the family picnic?',
    options: [
      { key: 'A', text: 'sandwich boxes' },
      { key: 'B', text: 'fruit juice' },
      { key: 'C', text: 'picnic blanket' },
      { key: 'D', text: 'folding chairs' },
      { key: 'E', text: 'football' },
      { key: 'F', text: 'camera' },
      { key: 'G', text: 'board games' },
      { key: 'H', text: 'sun hats' }
    ],
    answer: 'G',
    audioLines: [
      { speaker: 'Mia', role: 'Twin Sister', text: 'Leo, the weather forecast for our big family picnic in the country park is brilliant! Let\'s check what everyone is bringing so we don\'t forget anything.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Good idea, Mia. Mum has already put the picnic blanket in the car boot. What about Grandad? Is he bringing his chess set?', isClue: false, isTrap: true, distractorTarget: 'G' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'No, board games are for later! Grandad said his knees hurt when sitting on the damp grass, so he is bringing those folding chairs from his garden shed.', isClue: false, isTrap: false, distractorTarget: 'D' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sensible Grandad. And what about Aunt Clara? Did she make her famous chicken sandwiches as usual?', isClue: false, isTrap: true, distractorTarget: 'A' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Actually, Uncle Tom offered to make all the food today. Aunt Clara bought fresh oranges and sweet apples at the market, so she is bringing big bottles of cold fruit juice for us.', isClue: false, isTrap: false, distractorTarget: 'B' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Fantastic, that will keep us cool in the heat! I brought sun hats for both of us too. Did Cousin Ben say he would bring a digital camera to take pictures of birds?', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Ben doesn\'t own a good camera, Leo! But you know how energetic he is. He pumped up his new leather football so we can all have a match on the field after lunch.', isClue: false, isTrap: false, distractorTarget: 'E' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Awesome! And Uncle Tom is definitely bringing the food, right?', isClue: false, isTrap: false },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Yes, Uncle Tom has packed three large sandwich boxes full of cheese, tuna and fresh tomatoes. Nobody will stay hungry!', isClue: false, isTrap: false, distractorTarget: 'A' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Brilliant. And lastly, what is our sister Nina bringing? I thought she wanted to take photos with Dad\'s camera.', isClue: false, isTrap: true, distractorTarget: 'F' },
      { speaker: 'Mia', role: 'Twin Sister', text: 'Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play while relaxing under the big trees.', isClue: true, isTrap: false, distractorTarget: 'G' },
      { speaker: 'Leo', role: 'Twin Brother', text: 'Sounds like we\'re 100% ready for an amazing family Sunday!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗聽力音檔尾段高難度「設備故障（battery completely flat）推翻原計畫」的語意轉換，鎖定最終替代活動物品（board games）。',
      correctReason: '✅ 【為什麼選 (G) board games 是對的？】\n雖然 Leo 以為 Nina 想帶相機，但 Mia 解釋相機沒電了："Dad\'s camera battery was completely flat! So Nina went to her room and picked out several fun board games to play..."，因此最終攜帶的物品是桌遊 (G)。',
      distractorAnalysis: {
        'F': '❌ 【選項 (F) camera 陷阱】Leo 原本以為 Nina 想用爸爸的相機拍照，但 Mia 說明相機完全沒電了（battery was completely flat），因此推翻！',
        'A': '❌ 【選項 (A) sandwich boxes 陷阱】三明治盒是由 Tom 叔叔早上準備好的野餐主食。',
        'E': '❌ 【選項 (E) football 陷阱】足球是表哥 Ben 帶去踢球的器材，Nina 帶的是在大樹下玩的桌遊。'
      }
    },
    extensionStudy: {
      synonyms: [
        'battery was flat = out of power / completely drained（電池沒電）',
        'picked out = selected / chose（挑選出來）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nflat 的多重語意：\n• 名詞：apartment（公寓，如 live in a flat）\n• 形容詞：水平平坦的（flat ground）\n• 形容詞（電池）：沒電的（The battery is flat.）\n在 KET 聽力中，"The battery was flat" 是推翻電子產品（camera, tablet, mobile）的殺手級陷阱片語！',
      examVariations: '🔮 【下次考場可能變形】\n常見替代情境：手機沒電改看雜誌、吉他斷弦改唱歌、腳踏車爆胎改跑步。'
    }
  },

  // ==========================================
  // SPP2: Part 2 口說五圖互動討論 (1 題: 049)
  // Interactive Discussion: 5 Weekend Family Places
  // ==========================================
  {
    code: 'U01-SPP2-S3-049',
    unitId: 'u1',
    unitLabel: 'Unit 1 人物日常',
    section: 'speaking',
    ketPart: 'SPP2',
    ketPartName: 'SP Part 2 · 口說五圖互動討論',
    difficulty: 3,
    questionType: 'speaking',
    image: 'assets/images/u1/u1_fav_places.jpg',
    passageTitle: 'Speaking Part 2 - Weekend Family Places',
    instruction: 'Now, in this part of the test you are going to talk together. Here are some pictures that show different places to spend time with family at weekends. Do you like these different places? Say why or why not.',
    prompt: 'Look at the 5 places to spend time with family at weekends (cinema, park, beach, grandparents\' house, sports centre). Talk together with your partner. Do you like these different places? Say why or why not.',
    options: null,
    answer: ['Speaking Task: Evaluated by CEFR A2 Interactive Communication Rubric (Band 13 / Band 15)'],
    modelAnswers: {
      checklist: [
        '涵蓋圖片中至少 3~4 個具體家庭休閒地點（cinema, park, beach, grandparents\' house, sports centre）。',
        '主動詢問搭檔意見（Do you like...? / What do you think about...? / Do you agree?）。',
        '清晰陳述喜愛或不喜愛的原因（because, however, although, but）。',
        '自然比較不同地點的優缺點（e.g. going to the park is cheaper and healthier than the cinema）。'
      ],
      band13: 'Candidate A: Do you like going to the cinema with your family at weekends?\nCandidate B: Yes, I like the cinema because we can watch funny films and eat popcorn, but the tickets are expensive. What about you?\nCandidate A: I agree. I prefer going to the park because it is free and we can ride bicycles or play football in the fresh air. Do you like visiting your grandparents\' house?\nCandidate B: Yes, definitely! My grandmother always cooks delicious food and my grandfather tells great stories.\n(84 words — 達到 A2 Key 標準 13 盾)',
      band15: 'Candidate A: Do you enjoy spending time at the beach with your family when the weather is warm?\nCandidate B: Yes, absolutely! I love swimming in the sea and building sandcastles with my younger sister. However, if it is windy or crowded, it can become quite annoying. What do you think about going to the sports centre together?\nCandidate A: In my opinion, the sports centre is fantastic because my whole family can play badminton and stay healthy. But honestly, visiting our grandparents\' house is my favourite because my grandmother bakes wonderful cakes and we have lively chats around the dinner table. Do you agree?\nCandidate B: I completely agree with you. Family meals at grandparents\' house are always the warmest moments of the weekend!\n(116 words — 榮獲 KET 滿分 15 盾 Excellence 範本)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】劍橋 A2 Key (KET) Speaking Part 2 核心測驗考生與同儕搭檔（Partner）的「雙向互動協作能力（Interactive Communication）」。考生必須主動提問、聆聽搭檔回覆、使用 because 展開論述並進行不同休閒地點的比較。',
      correctReason: '✅ 【滿分 15 盾評分規準解析】\n1. Interactive Communication (5/5)：高度自然的對話互動，包含提問（What do you think about...?）、贊同（I completely agree with you）、轉折（However, if it is windy...）。\n2. Grammar & Vocabulary (5/5)：精準運用休閒與地點詞彙（badminton, sandcastles, lively chats, crowded），時態完全正確。\n3. Pronunciation & Fluency (5/5)：語句延伸流暢，展現出遠超 Flyers 程度的論述深度。',
      commonTraps: [
        { wrong: '自說自話，完全不與搭檔互動提問', whyWrong: '⚠️ 考場致命傷！Part 2 是雙人討論題型。若只顧著一口氣講完自己的喜好，完全沒問搭檔 "What about you?" 或 "Do you agree?"，互動通訊分數（Interactive Communication）會被直接砍至 1~2 分！' },
        { wrong: '只回答極簡短的 Yes/No（如 Yes, I like cinema. / No, beach is bad.）', whyWrong: '過於簡短單薄的回答會讓考官無法評定文法與字彙水準（Grammar and Vocabulary），口說總盾數將直接掉到 10~11 盾！必須永遠加上 because 說明原因。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'lively chats = cheerful conversations / fun discussions（熱絡開心的聊天）',
        'stay healthy = keep fit / maintain good physical condition（保持健康與體態）',
        'completely agree = share the exact same view（完全贊同對方的看法）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n口說 Part 2 必備黃金互動句型三部曲：\n1. 提問搭檔：What do you think about [地點/活動]? / Do you enjoy [V-ing]?\n2. 表達己見＋原因：In my opinion, ... is better because ... / I find ... really relaxing.\n3. 拋回話語權：Do you agree with me? / What is your view?\n熟練此三部曲公式，口說互動分數保底 5 分滿分！',
      examVariations: '🔮 【下次考場可能變形】\nSpeaking Part 2 常見考題圖片組合：5 種度假交通工具、5 種學校社團活動、5 種慶生方式等。應對邏輯完全一致。'
    }
  }
];

if (typeof window !== 'undefined') {
  window.KET_EXAM_BANK_U1 = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
