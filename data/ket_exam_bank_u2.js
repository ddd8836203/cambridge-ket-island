/**
 * 🏝️ 動森 KET 13盾衝刺島 — Unit 2 100% 獨立自足・純淨真考題庫 (ket_exam_bank_u2.js)
 * 完整涵蓋 Unit 2 (In my free time) 核心考點，全面覆蓋 KET 官方 14 大 Part (共 49 題)：
 *   - RWP1 (4 題, 001~004): 嗜好社團/電影改期/西洋棋社/攝影比賽告示三選一
 *   - RWP2 (5 題, 033~037): 少年週末嗜好三選一文本配對 (Maya/Liam/Chloe，同義改寫)
 *   - RWP3 (5 題, 005~009): 少年街頭畫家 Kris 專訪長文理解
 *   - RWP4 (6 題, 010~015): Trying a New Hobby: Skateboard & Photography 克漏字三選一
 *   - RWP5 (6 題, 016~021): Hasan 筆友 Email 開放式文法填空 (options: null)
 *   - RWP6 (1 題, 031): 攝影社週末邀請短訊寫作真考題 (25+字, 附 13/15 盾範本)
 *   - RWP7 (1 題, 038): 戶外水彩寫生連環看圖寫故事 (35+字, 附 13/15 盾範本)
 *   - LSP1 (2 題, 039~040): 臥室層架新買物品 / 週六活動實際開始時間圖片短對話三選一
 *   - LSP2 (5 題, 041~045): Summer Youth Adventure Camp 營隊資訊聽力表格填空 (options: null)
 *   - LSP3 (3 題, 046~048): 加入學校攝影社長對話理解三選一 (時間/費用/比賽獎品)
 *   - LSP4 (4 題, 022~025): 4 段獨立短對話聽力主旨理解 (附完整 audioLines 與 distractorXray)
 *   - LSP5 (5 題, 026~030): 週末免費社團 5-match-8 聽力資訊配對題 (附 10+ 輪對話腳本與推翻陷阱)
 *   - SPP1 (1 題, 032): 考官週末興趣與社團問答 (附 13/15 盾回答與追問應對)
 *   - SPP2 (1 題, 049): 5 種休閒愛好口說互動討論卡 (攝影/露營/西洋棋/演戲/帆船，附 13/15 盾互動範本)
 */

const U2_PASSAGE_RWP2 = `<div class="ket-multi-passage">
  <div class="ket-person-box">
    <h4>A. Maya — Wildlife Photography</h4>
    <p>I'm really keen on nature and wildlife photography. Almost every weekend, whatever the season, I get up early on Saturday morning and cycle to the local nature reserve or the wetlands. My uncle bought me an expensive digital camera with a special zoom lens for my birthday last year, which was fantastic because camera equipment usually costs a fortune! Even if it rains, I put on my waterproof jacket and sit in a wooden bird hide taking close-up pictures of ducks and swans. Last month, I entered an outdoor photography competition in our county and won first prize — a voucher for photo printing! I hope to become a professional nature photographer one day.</p>
  </div>
  <div class="ket-person-box">
    <h4>B. Liam — Forest Camping & Sailing</h4>
    <p>I spend almost all my free time outdoors in the fresh air. During the warmer months from May to September, my brother and I go forest camping or sailing on the lake once a month. Camping gear can be really expensive, but our dad gave us his old two-person tent and sleeping bags, so we didn't have to spend any money at all. However, sailing depends completely on the weather. If it's too stormy or windy, we definitely don't go out on the water. When bad weather ruins our outdoor plans, we stay in the sailing club cabin and play board games like chess instead. I took part in a junior sailing race last autumn, but my boat finished fourth, so I didn't get a medal or trophy, but I still had a great time.</p>
  </div>
  <div class="ket-person-box">
    <h4>C. Chloe — Drama Club & Chess</h4>
    <p>I prefer creative indoor activities. Every Saturday afternoon, I go to our local youth theatre for drama club. We practise acting, singing, and designing stage costumes for our school musicals. Drama is great because you don't need any expensive equipment or special clothes — just a lot of imagination and energy! On Sundays, I usually meet my best friend to play chess in the town library. In fact, two years ago I won a gold cup in the regional junior chess championship, which made my school very proud. The best thing about my hobbies is that they never depend on the weather; even if it pours with rain or snows outside, we have a warm, lively place to perform and play.</p>
  </div>
</div>`;

const questions = [
  // =========================================================================
  // 1. RWP1: 短訊/告示三選一 (4 題: 001 ~ 004)
  // =========================================================================
  {
    code: 'U02-RWP1-S2-001',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 2,
    questionType: 'choice',
    passageTitle: 'Film Club Time Change SMS',
    noticeType: 'sms',
    passageHtml: '<div class="ket-sms-box"><div class="ket-sms-head">💬 SMS — From: Leo (Cinema Club)</div><p>Hi guys! The school hall is being painted on Friday, so our cinema club movie <em>Space Explorer</em> is moving to Saturday afternoon at 2.30 in Room 4B. Tickets are usually £4, but club members get in for half price this week!</p></div>',
    instruction: 'Read the text message. Choose the correct answer (A, B or C).',
    prompt: 'What is Leo telling the cinema club members?',
    options: [
      { key: 'A', text: 'The movie will be shown on a different day and place.' },
      { key: 'B', text: 'Tickets are completely free for all students this weekend.' },
      { key: 'C', text: 'Members must paint Room 4B before watching the film.' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試 KET 告示中極高頻的「活動改期與改換地點（Time & Location Change）」同義理解。Flyers 學生常看見 Friday 就選 Friday，KET 則測驗你是否能捕捉 "moving to Saturday afternoon in Room 4B" 的語意轉換。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n簡訊開頭說原訂週五因為禮堂油漆，電影 "is moving to Saturday afternoon at 2.30 in Room 4B"，這代表「放映日期改變（Friday ➔ Saturday）」且「放映地點改變（school hall ➔ Room 4B）」，完美對應選項 (A) "shown on a different day and place"。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：價格折扣誤導】文中說 "members get in for half price"（會員半價，即 £2），並非完全免費（completely free），且一般學生若非會員依然是原價 £4！',
        'C': '❌ 【選項 (C) 陷阱：被動語態與主詞混淆】文中是說 "The school hall is being painted"（學校大廳正在被油漆工人粉刷），而不是要求社員自己去漆 4B 教室！'
      }
    },
    extensionStudy: {
      synonyms: [
        'move to = change to / reschedule to（移至、改期至）',
        'half price = 50% discount / pay half（半價優惠）',
        'different day and place = another date and venue（不同日期與場地）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n1. 現在進行式表被動：is being painted（正在被漆）。\n2. 現在進行式表未來確定行程：is moving to Saturday（將在星期六舉行），在英語生活告示中極常見。',
      examVariations: '🔮 【下次考場可能變形】\n考題可能反過來問金額："How much do club members pay this week?" 正解即為 £2（£4 的 half price）。'
    }
  },
  {
    code: 'U02-RWP1-S3-002',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Chess Club Notice Board',
    noticeType: 'notice',
    passageHtml: '<div class="ket-notice-box"><div class="ket-notice-head">📌 SCHOOL CHESS CLUB</div><p><strong>Every Tuesday 4.00 p.m. – 5.30 p.m.</strong><br>Beginners are welcome and can borrow club chess sets. Players joining the weekend tournament must bring their own boards and clocks. Please sign the list by Monday noon.</p></div>',
    instruction: 'Read the school notice. Choose the correct answer (A, B or C).',
    prompt: 'According to the notice, who needs to bring their own equipment?',
    options: [
      { key: 'A', text: 'Anyone who is attending the chess club for the first time.' },
      { key: 'B', text: 'Members who want to take part in the weekend competition.' },
      { key: 'C', text: 'All students who want to borrow club chess clocks.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「條件限制與受眾區隔（Target Audience & Conditions）」。初學者 vs 比賽組各自有不同規定，測驗考生能否精準配對 tournament 與 competition 的同義代換。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n告示第二句明確規定："Players joining the weekend tournament must bring their own boards and clocks."\n• tournament = competition（競賽、錦標賽）\n• bring their own = 自備裝備。因此要參加週末比賽的選手必須自己帶棋盤與棋鐘，正解為 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：對象顛倒】第一句寫 "Beginners are welcome and can borrow club chess sets"，初次參加的新手是可以直接向社團借（borrow）棋具的，不需要自己帶。',
        'C': '❌ 【選項 (C) 陷阱：借用對象捏造】社團可借的是初學者棋組（chess sets），且要用棋鐘的是自備裝備的參賽選手，社團並未提供所有人借用棋鐘。'
      }
    },
    extensionStudy: {
      synonyms: [
        'tournament = competition / contest（錦標賽、比賽）',
        'bring your own = carry your personal equipment（自備裝備）',
        'borrow = use without buying（借入；不可與 lend「借出」混淆！）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n情態助動詞的義務強弱：\n• must bring：強制規定（必須自備）。\n• can borrow：允許與可能（可以借用）。剛過 Flyers 的學生容易忽略 must 與 can 的語義落差。',
      examVariations: '🔮 【下次考場可能變形】\n常考報名截止時間陷阱："When must players sign the list?" 正解為 Monday noon（星期一中午前），若選 Tuesday 4.00 p.m. 就掉入練習時間的干擾陷阱！'
    }
  },
  {
    code: 'U02-RWP1-S3-003',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Camping Club Weekend Notice',
    noticeType: 'notice',
    passageHtml: '<div class="ket-notice-box"><div class="ket-notice-head">⛺ CAMPING CLUB — LAKE GREEN TRIP</div><p>Pack your waterproof jackets and boots! The club provides large four-person tents and cooking pots, but each camper is responsible for their own warm sleeping bag. If it rains heavily on Saturday morning, we will meet at the youth centre instead.</p></div>',
    instruction: 'Read the camping notice. Choose the correct answer (A, B or C).',
    prompt: 'What must students take on the camping trip?',
    options: [
      { key: 'A', text: 'Tents for four people and pots for making meals.' },
      { key: 'B', text: 'Their own sleeping bags and clothes for wet weather.' },
      { key: 'C', text: 'An umbrella in case they meet at the youth centre.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生區分「社團提供（club provides）」與「個人自備（camper is responsible for）」的細節理解，並測驗 waterproof jacket ➔ clothes for wet weather 的詞彙轉化能力。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n告示指出：\n1. "Pack your waterproof jackets and boots!"（防水外套與靴子＝clothes for wet weather）\n2. "each camper is responsible for their own warm sleeping bag"（睡袋自備）。兩者完全對應選項 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：社團提供項目】帳篷與野炊鍋具是 "The club provides"（社團統一提供），學生自己不需要帶！',
        'C': '❌ 【選項 (C) 陷阱：無中生有】文中提到如果大雨改在青年中心集合，但從未提及要攜帶雨傘（umbrella）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'waterproof jackets = clothes for wet weather（防水雨衣、防濕衣物）',
        'provide = supply / give free of charge（提供）',
        'be responsible for = have to bring / take care of（負責自備）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n條件句的第一型（First Conditional）：\n"If it rains heavily on Saturday morning, we will meet at the youth centre instead."\n注意 if 子句使用現在簡單式 rains，主要子句使用 will + 原形動詞 meet。',
      examVariations: '🔮 【下次考場可能變形】\n常在聽力 Part 4 出現改期或地點備案的對話，媽媽會問："What will happen if the weather is terrible?" 正解為室內集合（meet indoors / at the youth centre）。'
    }
  },
  {
    code: 'U02-RWP1-S4-004',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP1',
    ketPartName: 'RW Part 1 · 短訊/告示三選一',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Youth Photography Poster',
    noticeType: 'poster',
    passageHtml: '<div class="ket-poster-box"><div class="ket-poster-head">📸 ANNUAL YOUTH PHOTOGRAPHY CONTEST</div><p>Are you aged 11–16? Send us your best photos of wild animals or countryside landscapes taken with any smartphone or digital camera. <strong>Photos of people or pets will NOT be accepted.</strong> Entries close Friday 20th October. First prize is a professional camera!</p></div>',
    instruction: 'Read the competition poster. Choose the correct answer (A, B or C).',
    prompt: 'Which photograph could win a prize in this competition?',
    options: [
      { key: 'A', text: 'A digital picture of a mountain bird flying over a lake.' },
      { key: 'B', text: 'A portrait photo of your friend painting outdoors.' },
      { key: 'C', text: 'A smartphone photo of your cute puppy playing in the park.' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「負面否定限制條款（Negative Restrictions / NOT accepted）」。KET Part 1 常見嚴格限制（如禁止拍人物或寵物），題目換成具體情境三選一，測驗考生的歸納推論能力。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n海報要求主題是 "wild animals or countryside landscapes"（野生動物或鄉村風景），而湖上飛行的山鳥（mountain bird flying over a lake）屬於野生動物與自然景觀，且使用數位相機拍攝符合規則，因此 (A) 符合資格。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：觸犯人物禁令】海報粗體標記 "Photos of people ... will NOT be accepted"，朋友是人（people），絕對不予收件！',
        'C': '❌ 【選項 (C) 陷阱：觸犯寵物禁令】小狗（puppy）是家寵（pet），海報明確註記 "or pets will NOT be accepted"，因此寵物照片會被直接淘汰！'
      }
    },
    extensionStudy: {
      synonyms: [
        'wild animals = wildlife（野生動物；不包含 domestic pets 寵物！）',
        'contest = competition（競賽、比賽）',
        'will not be accepted = not allowed / rejected（不予收件、禁止）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n被動語態否定式：\n"will NOT be accepted"（將不被接受）。\n過去分詞 taken 修飾先行詞：\n"photos of wild animals ... taken with any smartphone"（用智慧手機拍攝的照片），這是過去分詞作後位修飾的高頻文法。',
      examVariations: '🔮 【下次考場可能變形】\n題目可能直接問資格限制："Who can enter the contest?" 選項為 14-year-old school students（符合 aged 11–16）。'
    }
  },

  // =========================================================================
  // 2. RWP3: 長文閱讀理解 (5 題: 005 ~ 009)
  // 全長文閱讀素材：Kris Davies - Teenage Painter
  // =========================================================================
  {
    code: 'U02-RWP3-S3-005',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Kris Davies - Teenage Painter',
    noticeType: 'article',
    passageHtml: `<div class="ket-reading-passage">
      <div class="ket-article-head">🎨 Kris Davies — Teenage Painter</div>
      <p class="ket-article-intro"><em>Kris Davies started painting when he was 12. He is now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.</em></p>
      <div class="ket-interview-qa">
        <p><strong>Tamara:</strong> How did you become interested in painting, Kris?</p>
        <p><strong>Kris:</strong> It's strange. My mother's a painter — you can see her best paintings on her website — but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.</p>
        <p><strong>Tamara:</strong> How did you get your first brushes?</p>
        <p><strong>Kris:</strong> About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!</p>
        <p><strong>Tamara:</strong> Where do your ideas come from?</p>
        <p><strong>Kris:</strong> Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas.</p>
        <p><strong>Tamara:</strong> What type of painting are you interested in?</p>
        <p><strong>Kris:</strong> Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me.</p>
        <p><strong>Tamara:</strong> Do you have any advice for other young painters?</p>
        <p><strong>Kris:</strong> The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings — even if you don't like what they say.</p>
      </div>
    </div>`,
    instruction: 'Read the interview with Kris Davies. For each question, choose the correct answer (A, B or C).',
    prompt: 'How did Kris first become interested in painting?',
    options: [
      { key: 'A', text: 'He saw some interesting paintings online.' },
      { key: 'B', text: 'A member of his family is a painter.' },
      { key: 'C', text: 'He painted something for a friend.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗考生能否在長篇專訪中找到「引發興趣的起點事件」，並排除家庭成員職業的干擾陷阱。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\nKris 親口回答："my sister asked me to paint a card for a friend\'s birthday. Her friend loved it, and I haven\'t stopped painting ever since."\n姊姊請他為朋友生日畫卡片，朋友極度喜愛，從此他停不下來，完全對應 (C) "He painted something for a friend"。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：移花接木】雖然文章提到母親有網站展示畫作（her website），但 Kris 明確說自己對媽媽畫的畫風毫無興趣（never been interested in the type of paintings she does），不是上網看畫引起興趣。',
        'B': '❌ 【選項 (B) 陷阱：因果關聯錯誤】雖然媽媽確實是畫家（My mother\'s a painter），但 Kris 強調這不是他畫畫的原因。'
      }
    },
    extensionStudy: {
      synonyms: [
        'paint a card for a friend = paint something for a friend（為朋友畫畫）',
        'ever since = continuously from that time（自從那時起就一直…）',
        'become interested in = take up an interest in（對…產生興趣）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n現在完成式表持續狀態：\n"I haven\'t stopped painting ever since."\nhave + 過去分詞 stopped，搭配 ever since 表示從當時一直持續到現在。',
      examVariations: '🔮 【下次考場可能變形】\n題目可能問卡片的目的："Why did Kris make the card?" 正解為 for a birthday celebration。'
    }
  },
  {
    code: 'U02-RWP3-S3-006',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Kris Davies - Teenage Painter',
    noticeType: 'article',
    passageHtml: `<div class="ket-reading-passage">
      <div class="ket-article-head">🎨 Kris Davies — Teenage Painter</div>
      <p class="ket-article-intro"><em>Kris Davies started painting when he was 12. He is now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.</em></p>
      <div class="ket-interview-qa">
        <p><strong>Tamara:</strong> How did you become interested in painting, Kris?</p>
        <p><strong>Kris:</strong> It's strange. My mother's a painter — you can see her best paintings on her website — but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.</p>
        <p><strong>Tamara:</strong> How did you get your first brushes?</p>
        <p><strong>Kris:</strong> About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!</p>
        <p><strong>Tamara:</strong> Where do your ideas come from?</p>
        <p><strong>Kris:</strong> Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas.</p>
        <p><strong>Tamara:</strong> What type of painting are you interested in?</p>
        <p><strong>Kris:</strong> Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me.</p>
        <p><strong>Tamara:</strong> Do you have any advice for other young painters?</p>
        <p><strong>Kris:</strong> The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings — even if you don't like what they say.</p>
      </div>
    </div>`,
    instruction: 'Read the interview with Kris Davies. For each question, choose the correct answer (A, B or C).',
    prompt: 'How did Kris get his first brushes?',
    options: [
      { key: 'A', text: 'He won them in a competition.' },
      { key: 'B', text: 'They were a present from his uncle.' },
      { key: 'C', text: 'They belonged to his mother.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗同義代換 "bought me some = a present" 以及能否避開 "competition" 與 "mum" 的干擾。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nKris 說："So my uncle bought me some, which were fantastic." 叔叔掏錢買給他，就等於是叔叔送的禮物（a present from his uncle），正解為 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：鄰近事實混淆】Kris 確實贏得了比賽（I came first in that competition!），但畫筆是在參賽前叔叔買給他的工具，而不是比賽贏得的獎品。',
        'C': '❌ 【選項 (C) 陷阱：未實現的願望】Kris 原本想借媽媽的畫筆（wanted to use my mum\'s brushes），但媽媽自己一直在用，所以 Kris 根本沒有拿到媽媽的畫筆。'
      }
    },
    extensionStudy: {
      synonyms: [
        'bought me some = gave me a present / gifted me（買給我＝送禮物）',
        'come first = win first prize / win the competition（贏得第一名）',
        'fantastic = wonderful / brilliant（極好的）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n雙賓動詞用法：\nbuy sb sth = buy sth for sb（My uncle bought me some = My uncle bought some for me）。\n注意代名詞 some 在此指代 brushes。',
      examVariations: '🔮 【下次考場可能變形】\n考題問媽媽為什麼沒借筆給 Kris："Why couldn\'t Kris use his mum\'s brushes?" 正解為 She needed them herself。'
    }
  },
  {
    code: 'U02-RWP3-S4-007',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Kris Davies - Teenage Painter',
    noticeType: 'article',
    passageHtml: `<div class="ket-reading-passage">
      <div class="ket-article-head">🎨 Kris Davies — Teenage Painter</div>
      <p class="ket-article-intro"><em>Kris Davies started painting when he was 12. He is now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.</em></p>
      <div class="ket-interview-qa">
        <p><strong>Tamara:</strong> How did you become interested in painting, Kris?</p>
        <p><strong>Kris:</strong> It's strange. My mother's a painter — you can see her best paintings on her website — but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.</p>
        <p><strong>Tamara:</strong> How did you get your first brushes?</p>
        <p><strong>Kris:</strong> About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!</p>
        <p><strong>Tamara:</strong> Where do your ideas come from?</p>
        <p><strong>Kris:</strong> Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas.</p>
        <p><strong>Tamara:</strong> What type of painting are you interested in?</p>
        <p><strong>Kris:</strong> Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me.</p>
        <p><strong>Tamara:</strong> Do you have any advice for other young painters?</p>
        <p><strong>Kris:</strong> The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings — even if you don't like what they say.</p>
      </div>
    </div>`,
    instruction: 'Read the interview with Kris Davies. For each question, choose the correct answer (A, B or C).',
    prompt: 'Where does Kris get his painting ideas from?',
    options: [
      { key: 'A', text: 'Watching films on his mobile phone.' },
      { key: 'B', text: 'Different places that he visits.' },
      { key: 'C', text: 'Books about paintings given to him.' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測試詞性陷阱（film 作動詞 vs 名詞電影）以及「正面靈感來源 vs 無效靈感來源」的邏輯判斷。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nKris 明確回答："Seeing different places is really interesting. They help me think of new things to paint." 看見不同的地方激發他想到新畫作，對應 (B) "Different places that he visits"。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：一字多義詞性陷阱】Kris 說 "use my phone to film places" 中的 film 是【動詞】（拍攝、錄影以幫助記憶），絕非名詞「看電影（watching films）」！剛過 Flyers 的學生常把 film 誤認為名詞。',
        'C': '❌ 【選項 (C) 陷阱：反向事實】Kris 最後一句特別聲明："People have given me beautiful books of paintings, but they don\'t help me get new ideas."（畫冊根本無法幫他得到新靈感）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'film places (verb) = record / video places（錄影紀錄地點）',
        'seeing different places = places that he visits（造訪不同地方）',
        'get new ideas = think of new things to paint（獲得新靈感）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n動名詞作主詞：\n"Seeing different places is really interesting."\n動名詞 Seeing 作主詞，視為單數，動詞使用 is。',
      examVariations: '🔮 【下次考場可能變形】\n問手機在 Kris 繪畫中的功用："Why does Kris use his phone?" 正解為 To record memories of places he visits。'
    }
  },
  {
    code: 'U02-RWP3-S4-008',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Kris Davies - Teenage Painter',
    noticeType: 'article',
    passageHtml: `<div class="ket-reading-passage">
      <div class="ket-article-head">🎨 Kris Davies — Teenage Painter</div>
      <p class="ket-article-intro"><em>Kris Davies started painting when he was 12. He is now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.</em></p>
      <div class="ket-interview-qa">
        <p><strong>Tamara:</strong> How did you become interested in painting, Kris?</p>
        <p><strong>Kris:</strong> It's strange. My mother's a painter — you can see her best paintings on her website — but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.</p>
        <p><strong>Tamara:</strong> How did you get your first brushes?</p>
        <p><strong>Kris:</strong> About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!</p>
        <p><strong>Tamara:</strong> Where do your ideas come from?</p>
        <p><strong>Kris:</strong> Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas.</p>
        <p><strong>Tamara:</strong> What type of painting are you interested in?</p>
        <p><strong>Kris:</strong> Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me.</p>
        <p><strong>Tamara:</strong> Do you have any advice for other young painters?</p>
        <p><strong>Kris:</strong> The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings — even if you don't like what they say.</p>
      </div>
    </div>`,
    instruction: 'Read the interview with Kris Davies. For each question, choose the correct answer (A, B or C).',
    prompt: 'What kind of painter does Kris hope to become?',
    options: [
      { key: 'A', text: 'A painter who draws portraits of famous people.' },
      { key: 'B', text: 'A painter who paints modern city buildings.' },
      { key: 'C', text: 'A painter who focuses on nature and animals.' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗「崇拜他人 vs 自己熱愛」的轉折詞（But）辨析，考驗學生抓取關鍵詞 nature 的能力。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\nKris 表示："all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature." 轉折詞 But 帶出他的真心願望：熱愛動物與鄉村，立志成為大自然畫家，正解為 (C)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：偶像喜好干擾】畫人像（paint people）是他「最喜愛的藝術家們」畫的主題，不是他自己的志向！',
        'B': '❌ 【選項 (B) 陷阱：太難而放棄的事物】Kris 提到 "I\'ve tried painting buildings. That was too hard for me." 他曾試過畫建築但覺得太難了，所以並不是他的志向。'
      }
    },
    extensionStudy: {
      synonyms: [
        'painter of nature = artist focusing on wildlife and countryside（自然風光與動物畫家）',
        'favourite artists = painters he admires（崇拜的藝術家）',
        'too hard = too difficult（太困難）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhope to + 原形動詞：\n"I hope to be a painter of nature."\n表達對未來的期望固定用 hope to V，不可接 V-ing。',
      examVariations: '🔮 【下次考場可能變形】\n問 Kris 為什麼不畫建築物："Why doesn\'t Kris paint buildings?" 正解為 Because he finds it too difficult。'
    }
  },
  {
    code: 'U02-RWP3-S5-009',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP3',
    ketPartName: 'RW Part 3 · 三選一長文理解',
    difficulty: 5,
    questionType: 'choice',
    passageTitle: 'Kris Davies - Teenage Painter',
    noticeType: 'article',
    passageHtml: `<div class="ket-reading-passage">
      <div class="ket-article-head">🎨 Kris Davies — Teenage Painter</div>
      <p class="ket-article-intro"><em>Kris Davies started painting when he was 12. He is now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.</em></p>
      <div class="ket-interview-qa">
        <p><strong>Tamara:</strong> How did you become interested in painting, Kris?</p>
        <p><strong>Kris:</strong> It's strange. My mother's a painter — you can see her best paintings on her website — but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.</p>
        <p><strong>Tamara:</strong> How did you get your first brushes?</p>
        <p><strong>Kris:</strong> About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!</p>
        <p><strong>Tamara:</strong> Where do your ideas come from?</p>
        <p><strong>Kris:</strong> Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas.</p>
        <p><strong>Tamara:</strong> What type of painting are you interested in?</p>
        <p><strong>Kris:</strong> Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me.</p>
        <p><strong>Tamara:</strong> Do you have any advice for other young painters?</p>
        <p><strong>Kris:</strong> The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings — even if you don't like what they say.</p>
      </div>
    </div>`,
    instruction: 'Read the interview with Kris Davies. For each question, choose the correct answer (A, B or C).',
    prompt: 'What advice does Kris give to other young painters?',
    options: [
      { key: 'A', text: 'Practise painting as frequently as possible.' },
      { key: 'B', text: 'Study how the most famous artists produce their work.' },
      { key: 'C', text: 'Ignore what other people say about their artwork.' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「高級同義替換 (never stop painting ➔ practise as frequently as possible)」以及辨析「傾聽他人看法」之態度。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\nKris 的建議開門見山："The best painters never stop painting. That\'s how they become so good, and it\'s how you will get better."\n• never stop painting（永不停畫）＝ practise as frequently as possible（盡可能頻繁練習），正解為 (A)。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：片面抓字】雖然提到了 "The best painters"，但 Kris 的重點是學習他們「持之以恆不停畫」的習慣，而非去研究他們的畫作。',
        'C': '❌ 【選項 (C) 陷阱：語意徹底相反】Kris 建議 "remember to ask other people what they think ... even if you don\'t like what they say"（要主動問別人意見，即使不好聽也要聽），這與 ignore（忽視、不理會）完全背道而馳！'
      }
    },
    extensionStudy: {
      synonyms: [
        'never stop painting = practise frequently / keep painting（持之以恆練習）',
        'what they think of = opinions on / views on（對…的看法）',
        'even if = whether or not（即使）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nremember to V vs remember V-ing：\n• remember to ask other people：記得去做某事（提醒未來動作）。\n• remember asking：記得曾經做過某事（回憶過去）。在此 Kris 是給予建議，故使用 remember to ask。',
      examVariations: '🔮 【下次考場可能變形】\n改寫為是非題或換成口說 Part 1 建議句型："In my opinion, we should listen to other people\'s advice to improve our skills."'
    }
  },

  // =========================================================================
  // 3. RWP4: 詞彙克漏字 (6 題: 010 ~ 015)
  // 短文：Trying a New Hobby: Skateboard & Photography
  // =========================================================================
  {
    code: 'U02-RWP4-S2-010',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 2,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10 ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11 ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12 ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13 ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14 ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 10 ]:',
    options: [
      { key: 'A', text: 'join' },
      { key: 'B', text: 'meet' },
      { key: 'C', text: 'enter' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試社團搭配動詞（Collocation with "club"）。Flyers 考生常分不清 join a club、meet friends 與 enter a competition 的用法差異。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n表示「成為社團會員、加入社團」的標準動詞固定搭配為 **join the club**。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：受詞不符】meet 搭配人（meet my friends / meet the coach），不能說 meet the skateboard club 來表示加入社團。',
        'C': '❌ 【選項 (C) 陷阱：名詞搭配錯誤】enter 搭配比賽或房間（enter a competition / enter the hall），不能直接接 club 表示加入。'
      }
    },
    extensionStudy: {
      synonyms: [
        'join a club = become a member of a club（加入社團）',
        'enter a competition = take part in a contest（參加比賽）',
        'meet friends = spend time with friends（與朋友見面）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ndecide to + 原形動詞：\n"decided to join"（決定加入）。decide 後面固定接 to-V，不可接 V-ing。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 開放式填空常考 join 後面的介系詞：join ___ the club（答案是不用填介系詞，因為 join 是及物動詞！）。'
    }
  },
  {
    code: 'U02-RWP4-S3-011',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10: join ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11 ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12 ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13 ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14 ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 11 ]:',
    options: [
      { key: 'A', text: 'test' },
      { key: 'B', text: 'practise' },
      { key: 'C', text: 'study' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗運動與技巧的動詞搭配。「練習技巧（practise tricks/skills）」是 KET Unit 2 核心高頻詞。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n教練教我們如何安全地「練習」新特技動作。practise new tricks/skills 表示反覆演練達到熟練，語意與搭配最完美。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：語意不通】test 表示「測驗、檢驗」，教練教導學生重點在於演練與練習（practise），而非考驗或測試特技。',
        'C': '❌ 【選項 (C) 陷阱：混淆學科與體育特技】study 通常用於學科知識、書本閱讀（study maths/history），滑板特技動作屬於肢體技能，英文習慣用 practise。'
      }
    },
    extensionStudy: {
      synonyms: [
        'practise tricks = repeat skills to improve（反覆演練特技動作）',
        'teach sb how to do sth = show sb the method（教導某人如何做某事）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n英美拼字差異：\n• 英式英文 (UK)：practise 是動詞（teach us how to practise），practice 是名詞（football practice）。\n• 美式英文 (US)：動名詞皆作 practice。劍橋英檢以英式拼法為準。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 中常考 how to 後接原形動詞（how to practise / how to play）。'
    }
  },
  {
    code: 'U02-RWP4-S3-012',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10: join ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11: practise ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12 ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13 ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14 ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 12 ]:',
    options: [
      { key: 'A', text: 'collect' },
      { key: 'B', text: 'borrow' },
      { key: 'C', text: 'take' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試動詞 collect（收集、採購積累）在裝備語境下的語意理解。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n後文提到 "just a good helmet and a phone camera"（只要安全帽和手機相機即可），代表入門不需要「收集/張羅積累（collect）」昂貴的裝備。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：語意邏輯衝突】borrow 表示「借用」，如果說不需要借昂貴裝備，邏輯就不通（剛開始通常是可以借的，作者要表達的是不需蒐集/購買很多器材）。',
        'C': '❌ 【選項 (C) 陷阱：搭配不自然】take equipment 通常用於「隨身攜帶裝備（take equipment with you）」，不搭配 "lots of expensive equipment to get started" 來表達入門積累器材。'
      }
    },
    extensionStudy: {
      synonyms: [
        'collect equipment = gather / acquire equipment（蒐集、添購器材裝備）',
        'get started = begin doing a new activity（入門、著手開始）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ndon\'t need to + 原形動詞：\n"You don\'t need to collect..."（你不需要…）。否定句中 need 當一般動詞，前方加 don\'t，後接 to V。',
      examVariations: '🔮 【下次考場可能變形】\n名詞 equipment 為【不可數名詞】，考試中若出現 pieces of equipment 或 expensive equipment 前不可加 a/an。'
    }
  },
  {
    code: 'U02-RWP4-S3-013',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10: join ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11: practise ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12: collect ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13 ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14 ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 13 ]:',
    options: [
      { key: 'A', text: 'outdoors' },
      { key: 'B', text: 'outdoor' },
      { key: 'C', text: 'outside of' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試詞性辨析：副詞 outdoors vs 形容詞 outdoor vs 介系詞 outside of。Flyers 考生常把形容詞 outdoor 放進修飾動詞的位置。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n空格修飾前面的一般動詞 skate（skate outdoors in the local park），修飾動詞必須使用【副詞】**outdoors**（在戶外）。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：詞性錯誤】outdoor 是【形容詞】（如 outdoor sports / outdoor activities），必須放在名詞前面，不可放在動詞後面當副詞用！',
        'C': '❌ 【選項 (C) 陷阱：介系詞片語冗贅】outside of 後面要接具體受詞（如 outside of the house），但後面已經有 in the local park，句法重複錯誤。'
      }
    },
    extensionStudy: {
      synonyms: [
        'skate outdoors = skate in the open air（在戶外溜滑板）',
        'when the weather is sunny = on fine days（天氣晴朗時）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n副詞 vs 形容詞：\n• indoor (adj.) ➔ indoors (adv.)\n• outdoor (adj.) ➔ outdoors (adv.)\n例：We love outdoor sports, so we often play outdoors.',
      examVariations: '🔮 【下次考場可能變形】\n聽力 Part 4 常問某人喜歡這項活動的原因，正解選項即為 "She can spend time outdoors"（她可以待在戶外）。'
    }
  },
  {
    code: 'U02-RWP4-S4-014',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10: join ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11: practise ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12: collect ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13: outdoors ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14 ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 14 ]:',
    options: [
      { key: 'A', text: 'match' },
      { key: 'B', text: 'competition' },
      { key: 'C', text: 'game' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測試動詞 enter 與名詞的固定搭配（enter a competition）。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n動詞 **enter** 最標準搭配的名詞是 **competition** 或 contest（報名參賽）。滑板社團全體去參加地區「錦標賽/競賽」，使用 competition 最精確。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：運動類型不符】match 通常指雙方對抗賽（如 football match, tennis match），滑板多名選手各自評分展現特技的賽事不用 match。',
        'C': '❌ 【選項 (C) 陷阱：搭配不自然】game 通常指棋類或球類單場比賽（chess game / computer game），不會說 enter a regional game。'
      }
    },
    extensionStudy: {
      synonyms: [
        'enter a competition = take part in a contest（參加競賽）',
        'regional = in the local area（地區性的）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n現在進行式表示已安排好的未來計畫：\n"our club is entering a big regional competition"\n雖然事件在 next month，但已安排妥當，可用現在進行式 is entering 表未來。',
      examVariations: '🔮 【下次考場可能變形】\n填空常考 come first in the competition（在比賽中獲得第一名）。'
    }
  },
  {
    code: 'U02-RWP4-S4-015',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP4',
    ketPartName: 'RW Part 4 · 詞彙克漏字',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'Trying a New Hobby',
    noticeType: 'cloze',
    passageHtml: `<div class="ket-cloze-box">
      <div class="ket-cloze-head">📖 Trying a New Hobby: Skateboard & Photography</div>
      <p>Last year, I was often bored at the weekend, so I decided to <strong>[ 10: join ]</strong> the school skateboard club. Every Wednesday afternoon, our coach teaches us how to <strong>[ 11: practise ]</strong> exciting new tricks safely. I also love taking photos of my teammates in action. You don't need to <strong>[ 12: collect ]</strong> lots of expensive equipment to get started — just a good helmet and a phone camera! We usually skate <strong>[ 13: outdoors ]</strong> in the local park when the weather is sunny. Next month, our club is entering a big regional <strong>[ 14: competition ]</strong>, and anyone can come to watch for <strong>[ 15 ]</strong>.</p>
    </div>`,
    instruction: 'Read the text and choose the best word (A, B or C) for each gap.',
    prompt: 'Choose the correct word for gap [ 15 ]:',
    options: [
      { key: 'A', text: 'free' },
      { key: 'B', text: 'empty' },
      { key: 'C', text: 'open' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試固定介系詞片語 **for free**（免費入場/觀賞）。KET Part 1 與 Part 4 極常出現此片語。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n**for free** 是英文中表示「免費（without paying any money）」的標準固定片語，意指任何人都可以免費前來觀賞比賽。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：字面中翻英干擾】empty 表示「空的、裡面沒東西」，for empty 完全不是英文片語。',
        'C': '❌ 【選項 (C) 陷阱：片語混淆】英文有 open to the public（對大眾開放），但絕對沒有 "watch for open" 這種結構。'
      }
    },
    extensionStudy: {
      synonyms: [
        'for free = free of charge / without paying（免費）',
        'free time = spare time / leisure time（空閒時間，free 作形容詞）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nfree 的多重用法：\n1. It\'s free.（形容詞：免費的）\n2. for free（片語：免費地）\n3. in my free time（形容詞：空閒的）。剛過 Flyers 的學生常把 for free 誤寫成 for nothing。',
      examVariations: '🔮 【下次考場可能變形】\nPart 1 告示常寫 "Admission: £0" 或 "Entry: Free"，問題問多少錢，正解為 You do not need to pay。'
    }
  },

  // =========================================================================
  // 4. RWP5: 開放式文法填空 (6 題: 016 ~ 021)
  // Email: Hasan to Freddy (options: null)
  // =========================================================================
  {
    code: 'U02-RWP5-S3-016',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16 ]</strong> got two older sisters. <strong>[ 17 ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18 ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19 ]</strong> week. After the film, <strong>[ 20 ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 16 ]: I [ ______ ] got two older sisters.',
    options: null,
    answer: ['have', "'ve"],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗英式英語高頻結構 **have got**（擁有）。Flyers 學生在開放式填空常常因母語直譯或時態搞混而失分。',
      correctReason: '✅ 【為什麼填 have 是對的？】\n後方有過去分詞 **got**，表達「我有兩位姊姊」，在英國英語固定搭配 **have got**。主詞是第一人稱 I，現在式助動詞必須填 **have**（或縮寫 **\'ve**）。',
      commonTraps: [
        { wrong: '填 am', whyWrong: '受中文「我是有兩個姊姊」影響誤填 be 動詞 am，但英文中 am got 語法嚴重錯誤！' },
        { wrong: '填 do', whyWrong: '肯定句中表達擁有不可填助動詞 do，搭配 got 只能是 have got。' },
        { wrong: '填 had', whyWrong: '全文描述現在生活背景（I\'m 13 and live...），不可填過去式 had。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'I have got = I have（我擁有；have got 為英式生活口語最愛）',
        'older sisters = elder sisters（姊姊）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nhave got 疑問與否定：\n• 否定：I haven\'t got（不能用 don\'t have got）。\n• 疑問：Have you got...?（不能用 Do you have got...?）。',
      examVariations: '🔮 【下次考場可能變形】\n若主詞換成第三人稱單數（He / She），答案必須填 **has** 或 **\'s**！'
    }
  },
  {
    code: 'U02-RWP5-S3-017',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16: have ]</strong> got two older sisters. <strong>[ 17 ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18 ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19 ]</strong> week. After the film, <strong>[ 20 ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 17 ]: [ ______ ] names are Ayla and Zeynep.',
    options: null,
    answer: ['Their', 'their'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗複數所有格代名詞 **Their**。前一句先行詞為複數名詞 "two older sisters"，修飾名詞 names 必須用所有格代名詞。',
      correctReason: '✅ 【為什麼填 Their 是對的？】\n先行詞是兩位姊姊（two older sisters），修飾複數名詞 names（名字），必須填第三人稱複數所有格代名詞 **Their**（句首大寫，小寫亦算對）。',
      commonTraps: [
        { wrong: '填 Her', whyWrong: '只看到後面是女性名字就填單數 Her，忽略了前面是「兩位」姊姊，必須用複數 Their！' },
        { wrong: '填 They', whyWrong: 'They 是主格代名詞（後面接動詞），此處修飾名詞 names，必須用所有格 Their。' },
        { wrong: '填 There', whyWrong: '同音字拼寫大陷阱！There 是副詞「那裡」，所有格是 T-h-e-i-r。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'Their names are... = They are called...（她們的名字叫做…）',
        'two older sisters = two elder sisters（兩位年長姊姊）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n人稱代名詞格位轉換：\n• 主格：They are my sisters.\n• 受格：I love them.\n• 所有格：Their names are Ayla and Zeynep.',
      examVariations: '🔮 【下次考場可能變形】\n若先行詞只有一位 brother，空格答案則為 **His**；若只有一位 sister，答案為 **Her**。'
    }
  },
  {
    code: 'U02-RWP5-S3-018',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16: have ]</strong> got two older sisters. <strong>[ 17: Their ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18 ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19 ]</strong> week. After the film, <strong>[ 20 ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 18 ]: In my free time, I love listening [ ______ ] music.',
    options: null,
    answer: ['to'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗不及物動詞 listen 的固定介系詞搭配 **listen to**。這是 Flyers 升 KET 最常漏填的母語干擾點。',
      correctReason: '✅ 【為什麼填 to 是對的？】\n動詞 **listen** 為不及物動詞，後面接受詞音樂（music）時，固定必須搭配介系詞 **to**（listen to music / listen to the radio）。',
      commonTraps: [
        { wrong: '填 of 或 for', whyWrong: '中文思考「聽…的音樂」，誤填 of 或 for，英文固定搭配只有 listen to。' },
        { wrong: '空白不填（以為 listen 是及物動詞）', whyWrong: '中文說「聽音樂」，但英文不能說 listen music，必須有介系詞 to！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'listen to music = enjoy songs / stream music（聽音樂）',
        'love listening to = be keen on listening to（熱愛聆聽）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nlisten to vs hear：\n• listen to：專注、有意識地去聽（I\'m listening to music）。\n• hear：感官被動聽見（Can you hear that noise?）。',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 常考類似介系詞搭配：look ___ (at), wait ___ (for), belong ___ (to)。'
    }
  },
  {
    code: 'U02-RWP5-S3-019',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 3,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16: have ]</strong> got two older sisters. <strong>[ 17: Their ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18: to ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19 ]</strong> week. After the film, <strong>[ 20 ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 19 ]: I go to the cinema with my friends once [ ______ ] week.',
    options: null,
    answer: ['a', 'every'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗頻率副詞片語中的不定冠詞 **once a week**。',
      correctReason: '✅ 【為什麼填 a 是對的？】\n表示「每週一次」標準片語結構為 **once a week**。冠詞 a 在此具有「每一（per）」的含意。填 every（once every week）亦為正確文法。',
      commonTraps: [
        { wrong: '填 the', whyWrong: '受「特定某一週」干擾誤填 the，但常態頻率固定用 once a week，不用 once the week。' },
        { wrong: '填 in 或 on', whyWrong: '中文思考「在一個星期裡」，誤填介系詞 in 或 on，但英文頻率表達不加介系詞！' },
        { wrong: '填 one', whyWrong: 'week 前面表達頻率單位用冠詞 a，不能用基數詞 one。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'once a week = weekly / one time every week（每週一次）',
        'twice a month = two times each month（每月兩次）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n頻率倍數表達法：\n• 一次：once a day / week\n• 兩次：twice a month / year（切勿寫 two times）\n• 三次以上：three times a week',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 也常考挖空前面：I go to the gym [twice] a week。'
    }
  },
  {
    code: 'U02-RWP5-S4-020',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 4,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16: have ]</strong> got two older sisters. <strong>[ 17: Their ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18: to ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19: a ]</strong> week. After the film, <strong>[ 20 ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 20 ]: After the film, [ ______ ] sometimes have dinner in a pizza restaurant together.',
    options: null,
    answer: ['we'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗代名詞主格判斷（包含作者自己的複數集合）。上下文提到 "I go to the cinema with my friends"，測驗學生能否推導出主詞是 "we"。',
      correctReason: '✅ 【為什麼填 we 是對的？】\n前一句寫「我和朋友們去看電影（I ... with my friends）」，後句又有「一起（together）」，主詞包含作者自己與朋友們，因此必須使用第一人稱複數主格代名詞 **we**。',
      commonTraps: [
        { wrong: '填 they', whyWrong: '只看到 friends 就填 they，忽略了作者本人也在其中（後文我點了我最愛的蘑菇披薩），必須用 we！' },
        { wrong: '填 I', whyWrong: '句尾有副詞 together（一起），若填單數 I 就與 together 自相矛盾。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'have dinner = eat the evening meal（吃晚餐）',
        'together = with each other（一起）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n主格 vs 受格：\n此處位於動詞 have 之前擔任子句主詞，必須用主格 we，絕對不能填受格 us。',
      examVariations: '🔮 【下次考場可能變形】\n若前句是 "My friends love football"，後句 "After school, [they] play in the park" 答案則是 they。'
    }
  },
  {
    code: 'U02-RWP5-S4-021',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP5',
    ketPartName: 'RW Part 5 · 開放式文法填空',
    difficulty: 4,
    questionType: 'gap',
    passageTitle: 'Hasan\'s Pen Friend Email',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Hasan Sadik<br><strong>To:</strong> Freddy Parker<br><strong>Subject:</strong> Pen friend introduction & hobbies</div>
      <p>Hi Freddy,</p>
      <p>My name is Hasan Sadik. I'm 13 and I live in Adana, Turkey. I <strong>[ 16: have ]</strong> got two older sisters. <strong>[ 17: Their ]</strong> names are Ayla and Zeynep.</p>
      <p>In my free time, I love listening <strong>[ 18: to ]</strong> music. I also play the drums in the school band. I go to the cinema with my friends once <strong>[ 19: a ]</strong> week. After the film, <strong>[ 20: we ]</strong> sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza — my favourite!</p>
      <p>Please write soon and tell me <strong>[ 21 ]</strong> your family, friends and hobbies.</p>
      <p>Best wishes,<br>Hasan</p>
    </div>`,
    instruction: 'For each question, write ONE word for each gap.',
    prompt: 'Complete gap [ 21 ]: Please write soon and tell me [ ______ ] your family, friends and hobbies.',
    options: null,
    answer: ['about'],
    explanation: {
      examPurpose: '🎯 【出題目的】測驗書信結尾固定邀請句型 **tell me about...**（告訴我關於…的事情）。',
      correctReason: '✅ 【為什麼填 about 是對的？】\n動詞片語 **tell sb about sth** 表示「向某人講述關於…的事」。在筆友信件結尾，請對方介紹自身家庭與興趣時，固定搭配介系詞 **about**。',
      commonTraps: [
        { wrong: '填 of', whyWrong: '受到 of 表示「…的」中文干擾，但英文中 tell sb of 屬於極古老罕用語，現代書信生活英文固定用 tell me about。' },
        { wrong: '填 for', whyWrong: 'tell me for 語意不通，for 表示目的或為某人，不能引導主題內容。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'tell me about = let me know about / describe（告訴我關於…）',
        'write soon = reply quickly（儘快回信）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ntell vs say vs speak vs talk：\n• tell sb about sth（後接受詞受格 me）。\n• talk about sth with sb（talk 後不可直接接 me）。\n• say sth to sb。\n在 Part 5 中只要看到 tell me 後面接話題名詞，高達 90% 都是填 about！',
      examVariations: '🔮 【下次考場可能變形】\n有時會挖空前面：Please write soon and [let] me know about your family。'
    }
  },

  // =========================================================================
  // 5. LSP4: 聽力短對話主旨理解 (4 題: 022 ~ 025)
  // 附完整雙角色 audioLines (speaker, role, text, isClue, isTrap) 與 distractorXray
  // =========================================================================
  {
    code: 'U02-LSP4-S3-022',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 3,
    questionType: 'choice',
    instruction: 'You will hear two friends talking about a film they have just seen. Choose the correct answer (A, B or C).',
    prompt: 'What type of film was it?',
    audioLines: [
      {
        speaker: 'Girl',
        role: 'Friend A',
        text: 'Well, that was certainly thrilling! I thought it was going to be a comedy when we booked tickets, because that famous funny actor was starring in it.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'A'
      },
      {
        speaker: 'Boy',
        role: 'Friend B',
        text: 'Me too! And right at the beginning, when they were trapped in that dark spooky old castle, I was honestly terrified it was going to be a horror film! I can\'t stand scary movies.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'B'
      },
      {
        speaker: 'Girl',
        role: 'Friend A',
        text: 'Yeah, but once they escaped on that speedboat and travelled across the wild jungle looking for the lost golden crown, it was non-stop action! A fantastic adventure film!',
        isClue: true,
        isTrap: false,
        distractorTarget: 'C'
      },
      {
        speaker: 'Boy',
        role: 'Friend B',
        text: 'Totally! All those narrow escapes and exciting journeys kept me on the edge of my seat.',
        isClue: true,
        isTrap: false,
        distractorTarget: 'C'
      }
    ],
    options: [
      { key: 'A', text: 'a comedy' },
      { key: 'B', text: 'a horror film' },
      { key: 'C', text: 'an adventure film' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】KET 聽力 Part 4 經典「預期干擾 vs 恐懼干擾 vs 最終真相」題型。每種選項在音檔中都會出現單字，考驗學生抓取轉折詞 "Yeah, but..." 後的真實結論。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n女孩在第三輪對話用 "Yeah, but..." 否定了先前的猜測，明確描述劇情是搭快艇、穿過叢林找尋黃金皇冠，並總結："A fantastic adventure film!"，男孩也完全贊同，因此正解為 (C)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：訂票時的原先預期】女孩提到因為有搞笑明星，訂票時「原本以為會是喜劇（thought it was going to be a comedy）」，但正片並不是喜劇。',
        'B': '❌ 【選項 (B) 陷阱：開頭氛圍引發的擔憂】男孩說剛開場在古堡時「很害怕會是恐怖片（terrified it was going to be a horror film）」，這只是他的個人恐懼，隨後劇情展開就不是恐怖片。'
      }
    },
    extensionStudy: {
      synonyms: [
        'adventure film = exciting movie with journeys and action（冒險動作片）',
        'thrilling = very exciting（令人熱血沸騰的）',
        'I can\'t stand = I hate / cannot bear（我無法忍受）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n過去進行式表過去的打算：\n"I thought it was going to be a comedy."\nwas going to 表示「過去原本打算/原本預期」，往往暗示後來事實並非如此！',
      examVariations: '🔮 【下次考場可能變形】\n考題問兩位朋友的心情："How did the boy feel at the cinema?" 正解為 Excited by the action。'
    }
  },
  {
    code: 'U02-LSP4-S3-023',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 3,
    questionType: 'choice',
    instruction: 'You will hear a boy talking about a camping trip. Choose the correct answer (A, B or C).',
    prompt: 'Who did the boy go camping with?',
    audioLines: [
      {
        speaker: 'Boy',
        role: 'Speaker (Monologue)',
        text: 'Last weekend I had the best time camping out in the pine forest by the river.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Boy',
        role: 'Speaker (Monologue)',
        text: 'Usually my older brother comes with me, but he had an important science exam on Monday, so he stayed at home studying all weekend.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'A'
      },
      {
        speaker: 'Boy',
        role: 'Speaker (Monologue)',
        text: 'My mother drove us to the store and packed all our warm sleeping bags into the boot, but she can\'t stand insects and hates sleeping in tents, so she never goes camping.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'B'
      },
      {
        speaker: 'Boy',
        role: 'Speaker (Monologue)',
        text: 'Fortunately, my uncle had some time off work. He loves wildlife, so he took me in his jeep and we pitched the tent together right beside the water.',
        isClue: true,
        isTrap: false,
        distractorTarget: 'C'
      }
    ],
    options: [
      { key: 'A', text: 'his brother' },
      { key: 'B', text: 'his mother' },
      { key: 'C', text: 'his uncle' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】獨白題中的「常態夥伴 vs 缺席者 vs 真正同行者」三層篩選。音檔會依序提及哥哥、媽媽、叔叔，測驗學生能否掌握 "stayed at home"、"never goes" 與 "we pitched the tent together" 的事實關鍵。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\n男孩說叔叔剛好休假又熱愛大自然："he took me in his jeep and we pitched the tent together right beside the water"（他開吉普車帶我去，我們一起在水邊搭帳篷），證實真正陪他去露營的人是叔叔（his uncle）。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：常態習慣被打破】男孩提到哥哥平時通常會去（Usually my older brother comes），但這次因為週一有自然科大考，整週末留在家唸書，並未同行。',
        'B': '❌ 【選項 (B) 陷阱：僅協助開車採買】媽媽開車載他們去商店買裝備並幫忙打包，但媽媽討厭蟲子且討厭睡帳篷，從不露營（never goes camping）。'
      }
    },
    extensionStudy: {
      synonyms: [
        'pitch a tent = put up / set up a tent（搭帳篷，KET 高頻片語）',
        'have some time off work = have holidays / be free from work（休假）',
        'can\'t stand = hate intensely（極度厭惡）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n頻率副詞 Usually vs 過去特定事件：\n音檔開頭用 "Usually comes..." 描述常態，隨後用 "but ... stayed at home" 推翻本次行程。剛過 Flyers 的學生往往一聽到 brother 就急著作答。',
      examVariations: '🔮 【下次考場可能變形】\n題目改問媽媽對露營的看法："What does the boy say about his mother?" 正解為 She dislikes sleeping in tents。'
    }
  },
  {
    code: 'U02-LSP4-S4-024',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 4,
    questionType: 'choice',
    instruction: 'You will hear a boy, James, talking to his mother about basketball lessons. Choose the correct answer (A, B or C).',
    prompt: 'What does James ask his mother to do?',
    audioLines: [
      {
        speaker: 'James',
        role: 'Boy',
        text: 'Mum, have you got five minutes? You know the new youth basketball coaching sessions starting at the leisure centre?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Mother',
        role: 'Mum',
        text: 'Yes, James. I checked their website this morning, and the coach is running classes every Thursday at half past five.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'A'
      },
      {
        speaker: 'Mother',
        role: 'Mum',
        text: 'And didn\'t Grandma buy you that smart new basketball vest and shorts for your birthday last week?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'C'
      },
      {
        speaker: 'James',
        role: 'Boy',
        text: 'Yes, the kit is awesome! But the club website says places are strictly limited and an adult has to register and pay online. Could you log on and book the lessons for me before it fills up?',
        isClue: true,
        isTrap: false,
        distractorTarget: 'B'
      },
      {
        speaker: 'Mother',
        role: 'Mum',
        text: 'Of course! Let\'s get my debit card and register right now.',
        isClue: true,
        isTrap: false,
        distractorTarget: 'B'
      }
    ],
    options: [
      { key: 'A', text: 'find out when his basketball lessons start' },
      { key: 'B', text: 'book some basketball lessons for him' },
      { key: 'C', text: 'buy him some basketball clothes' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】辨別對話中的「真正請求句（Could you...?）」與「已完成事項 / 已擁有物品」之差別。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nJames 在第四句發出核心請求："Could you log on and book the lessons for me before it fills up?"（你能上網幫我預約報名課程嗎？），因為只有大人才能線上刷卡付款，媽媽也一口答應，正解為 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：媽媽早已主動查好】媽媽在對話開頭就說今早已經上網查過了，知道是每週四下午五點半上課，James 並不需要媽媽去查時間。',
        'C': '❌ 【選項 (C) 陷阱：外婆剛買的新禮物】外婆上週生日才剛買了全新的球衣和球褲（vest and shorts = basketball clothes），裝備早已齊全，不需要再買衣服。'
      }
    },
    extensionStudy: {
      synonyms: [
        'book lessons = register / sign up for classes（報名、預約課程）',
        'vest and shorts = basketball clothes / kit（球衣球褲、運動套裝）',
        'places are strictly limited = only a few spaces available（名額嚴格受限）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n請求句型標誌詞：\n• Could you + 原形動詞...? / Would you mind + V-ing...?\n聽力中一聽到 Could you... 緊接的動詞短語往往就是「請求核心」。',
      examVariations: '🔮 【下次考場可能變形】\n考題問媽媽何時去查了時間："When did Mum check the website?" 正解為 This morning。'
    }
  },
  {
    code: 'U02-LSP4-S4-025',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP4',
    ketPartName: 'LS Part 4 · 聽力短對話主旨',
    difficulty: 4,
    questionType: 'choice',
    instruction: 'You will hear two friends discussing a practice for their dance group. Choose the correct answer (A, B or C).',
    prompt: 'What do they still need to do?',
    audioLines: [
      {
        speaker: 'Girl',
        role: 'Dancer A',
        text: 'Hi Lucas! We need to make sure everything is ready for the dance group rehearsal this weekend.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Boy',
        role: 'Dancer B (Lucas)',
        text: 'Don\'t worry, we\'re making good progress. We all agreed on that dynamic hip-hop routine on Tuesday, so choosing the dance style is completely done.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'C'
      },
      {
        speaker: 'Boy',
        role: 'Dancer B (Lucas)',
        text: 'And I\'ve already sent a group chat message to all eight dancers telling everyone that we kick off at ten sharp on Saturday morning.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'A'
      },
      {
        speaker: 'Girl',
        role: 'Dancer A',
        text: 'That\'s great, but there\'s a problem with the venue! The school hall is being painted, and the community centre studio is booked all day.',
        isClue: true,
        isTrap: false,
        distractorTarget: 'B'
      },
      {
        speaker: 'Boy',
        role: 'Dancer B (Lucas)',
        text: 'Oh no! So we haven\'t got anywhere to rehearse yet. We definitely need to find a suitable room today.',
        isClue: true,
        isTrap: false,
        distractorTarget: 'B'
      }
    ],
    options: [
      { key: 'A', text: 'tell people when the practice will start' },
      { key: 'B', text: 'find a place to practise' },
      { key: 'C', text: 'decide on a dance' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測試辨析「已完成任務（completely done / already sent）」與「尚未解決之問題（still need to do）」。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\n女孩說學校大廳油漆、社區中心被借滿，男孩驚呼："we haven\'t got anywhere to rehearse yet. We definitely need to find a suitable room today."（我們還沒有地方排練，今天一定要找到適合的房間），證實唯一待辦事項是找排練場地（find a place to practise），正解為 (B)。',
      distractorAnalysis: {
        'A': '❌ 【選項 (A) 陷阱：已發訊息通知】男孩說 "I\'ve already sent a group chat message ... we kick off at ten sharp on Saturday"，時間早已群發通知所有團員，無須再做。',
        'C': '❌ 【選項 (C) 陷阱：週二已決定】男孩明確說週二全員就已經決定跳 hip-hop 了（choosing the dance style is completely done），這項工作已經徹底完成。'
      }
    },
    extensionStudy: {
      synonyms: [
        'rehearse = practise dance or music（排練、演練）',
        'venue = place / location（場地、地點）',
        'kick off = begin / start（開始；生活俚語）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n完成式副詞 already vs yet：\n• already：表示已完成（I\'ve already sent... / completely done）。\n• yet：用於否定句與疑問句表示尚未（haven\'t got anywhere yet）。捕捉 yet 是解開「still need to do」題目的黃金鑰匙！',
      examVariations: '🔮 【下次考場可能變形】\n問排練時間何時開始："What time does the practice begin?" 正解為 At 10.00 a.m. on Saturday。'
    }
  },

  // =========================================================================
  // 6. LSP5: 聽力資訊配對題 (5 題: 026 ~ 030)
  // 情境：Amy 和爸爸討論五個朋友（Tom, Sarah, Leo, Maya, Ben）這週末各自選了哪種免費社團活動
  // 8 個選項 (A–H): Acting, Chess, Cooking, Drawing, Cycling, Photography, Sailing, Tennis
  // 5 道題共用完整 10+ 句對話腳本，每一題都有先討論舊活動再被 but / actually / instead 推翻的真 KET 陷阱！
  // =========================================================================
  {
    code: 'U02-LSP5-S3-026',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 3,
    questionType: 'choice',
    instruction: 'For each question, choose the correct answer. You will hear Amy talking to her dad about the free clubs her five friends chose for this weekend.',
    prompt: 'Which club did Tom choose?',
    audioLines: [
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Hi Amy, did your school friends pick their free weekend activities yet?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes Dad! Tom originally wanted to play Chess because he bought a new board, but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'B'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'That will keep him fit! What about Sarah? She is always making beautiful pictures with pencils.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'D'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'She signed up for Drawing at first, but the class was completely full! So she switched to Cooking and is baking lemon pies this Saturday.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'D'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Yummy! And Leo is great at sports. Did he pick Tennis as usual?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'H'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Actually no, he injured his arm last week, so no racket sports for him. He borrowed his uncle\'s digital camera and chose Photography instead.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'H'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Clever boy. And Maya? Her brother was trying to persuade her to go Sailing on the lake, wasn\'t he?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'G'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes, but Maya can\'t swim and is terrified of deep water! She loves the stage, so she chose Acting at the local drama studio.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'G'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Brilliant! And what about Ben? Did he go with Tom on his bike?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'E'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'He planned to go Cycling with Tom, but his bike has a flat tyre. He didn\'t want to stay home doing nothing, so he signed up for Chess to play indoors.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'E'
      }
    ],
    options: [
      { key: 'A', text: 'Acting' },
      { key: 'B', text: 'Chess' },
      { key: 'C', text: 'Cooking' },
      { key: 'D', text: 'Drawing' },
      { key: 'E', text: 'Cycling' },
      { key: 'F', text: 'Photography' },
      { key: 'G', text: 'Sailing' },
      { key: 'H', text: 'Tennis' }
    ],
    answer: 'E',
    explanation: {
      examPurpose: '🎯 【出題目的】測試 KET 聽力 Part 5 標準「先提出舊活動再用 instead / decided to 推翻」的 8 選 5 配對題。',
      correctReason: '✅ 【為什麼選 (E) 是對的？】\nAmy 說 Tom 起初想下西洋棋，"but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead"（但表兄弟都在單車社，所以他決定改加入他們的自行車騎行），最終選擇是 Cycling (E)。',
      distractorAnalysis: {
        'B': '❌ 【選項 (B) 陷阱：最初想法被推翻】Tom 確實買了新棋盤並想下棋（wanted to play Chess），但被轉折詞 but 和 instead 推翻，最終沒有選 Chess！',
        'A': '❌ 【選項 (A) 陷阱：其他朋友的活動】Acting 是 Maya 參加的戲劇社，與 Tom 無關。'
      }
    },
    extensionStudy: {
      synonyms: [
        'bike ride = cycling（騎自行車）',
        'instead = as an alternative choice（代替、取而代之）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ninstead 的位置：\n"joined them on their bike ride instead."\ninstead 作副詞常置於句尾，表示「改為做這件事」。聽到 instead 前方提到的事物通通是干擾陷阱！',
      examVariations: '🔮 【下次考場可能變形】\nPart 5 中最常考 8 個活動與 5 個人物配對，未被選中的 3 個選項就是全場最大的迷魂陣。'
    }
  },
  {
    code: 'U02-LSP5-S3-027',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 3,
    questionType: 'choice',
    instruction: 'For each question, choose the correct answer. You will hear Amy talking to her dad about the free clubs her five friends chose for this weekend.',
    prompt: 'Which club did Sarah choose?',
    audioLines: [
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Hi Amy, did your school friends pick their free weekend activities yet?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes Dad! Tom originally wanted to play Chess because he bought a new board, but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'That will keep him fit! What about Sarah? She is always making beautiful pictures with pencils.',
        isClue: false,
        isTrap: true,
        distractorTarget: 'D'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'She signed up for Drawing at first, but the class was completely full! So she switched to Cooking and is baking lemon pies this Saturday.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'D'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Yummy! And Leo is great at sports. Did he pick Tennis as usual?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Actually no, he injured his arm last week, so no racket sports for him. He borrowed his uncle\'s digital camera and chose Photography instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Clever boy. And Maya? Her brother was trying to persuade her to go Sailing on the lake, wasn\'t he?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes, but Maya can\'t swim and is terrified of deep water! She loves the stage, so she chose Acting at the local drama studio.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Brilliant! And what about Ben? Did he go with Tom on his bike?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'He planned to go Cycling with Tom, but his bike has a flat tyre. He didn\'t want to stay home doing nothing, so he signed up for Chess to play indoors.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      }
    ],
    options: [
      { key: 'A', text: 'Acting' },
      { key: 'B', text: 'Chess' },
      { key: 'C', text: 'Cooking' },
      { key: 'D', text: 'Drawing' },
      { key: 'E', text: 'Cycling' },
      { key: 'F', text: 'Photography' },
      { key: 'G', text: 'Sailing' },
      { key: 'H', text: 'Tennis' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「因名額已滿（class was completely full）而更換社團（switched to）」的轉折判斷。',
      correctReason: '✅ 【為什麼選 (C) 是對的？】\nAmy 說明 Sarah 本想報名素描繪畫，但滿額了："So she switched to Cooking and is baking lemon pies this Saturday"（所以她改選烹飪社，這週六要烤檸檬派），烘烤檸檬派即為 Cooking，正解為 (C)。',
      distractorAnalysis: {
        'D': '❌ 【選項 (D) 陷阱：報名失敗的初選】Sarah 平常確實喜歡畫畫且起初報名了 Drawing，但因為班級全滿而沒能成功加入。',
        'B': '❌ 【選項 (B) 陷阱：其他朋友的選擇】Chess 是 Ben 後來選的項目，並非 Sarah 的社團。'
      }
    },
    extensionStudy: {
      synonyms: [
        'baking lemon pies = cooking（烘焙烹飪）',
        'switched to = changed to / opted for instead（改換至…）',
        'completely full = no spaces left / fully booked（全滿）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nat first 的陷阱信號：\n"She signed up for Drawing at first, but..."\nat first（起初）在英檢聽力中幾乎 100% 伴隨著後續的 but 轉折，暗示原本的動作被放棄。',
      examVariations: '🔮 【下次考場可能變形】\n常考原因題："Why didn\'t Sarah do drawing?" 正解為 The class had no available places。'
    }
  },
  {
    code: 'U02-LSP5-S4-028',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 4,
    questionType: 'choice',
    instruction: 'For each question, choose the correct answer. You will hear Amy talking to her dad about the free clubs her five friends chose for this weekend.',
    prompt: 'Which club did Leo choose?',
    audioLines: [
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Hi Amy, did your school friends pick their free weekend activities yet?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes Dad! Tom originally wanted to play Chess because he bought a new board, but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'That will keep him fit! What about Sarah? She is always making beautiful pictures with pencils.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'She signed up for Drawing at first, but the class was completely full! So she switched to Cooking and is baking lemon pies this Saturday.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Yummy! And Leo is great at sports. Did he pick Tennis as usual?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'H'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Actually no, he injured his arm last week, so no racket sports for him. He borrowed his uncle\'s digital camera and chose Photography instead.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'H'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Clever boy. And Maya? Her brother was trying to persuade her to go Sailing on the lake, wasn\'t he?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes, but Maya can\'t swim and is terrified of deep water! She loves the stage, so she chose Acting at the local drama studio.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Brilliant! And what about Ben? Did he go with Tom on his bike?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'He planned to go Cycling with Tom, but his bike has a flat tyre. He didn\'t want to stay home doing nothing, so he signed up for Chess to play indoors.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      }
    ],
    options: [
      { key: 'A', text: 'Acting' },
      { key: 'B', text: 'Chess' },
      { key: 'C', text: 'Cooking' },
      { key: 'D', text: 'Drawing' },
      { key: 'E', text: 'Cycling' },
      { key: 'F', text: 'Photography' },
      { key: 'G', text: 'Sailing' },
      { key: 'H', text: 'Tennis' }
    ],
    answer: 'F',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「運動受傷（injured arm）導致無法進行常態活動」的轉折識別能力。',
      correctReason: '✅ 【為什麼選 (F) 是對的？】\n爸爸猜測 Leo 會如常選網球，Amy 回答："Actually no, he injured his arm last week ... He borrowed his uncle\'s digital camera and chose Photography instead."（事實上沒有，他手受傷不能打球拍運動，他借了叔叔的數位相機改選攝影），正解為 (F)。',
      distractorAnalysis: {
        'H': '❌ 【選項 (H) 陷阱：爸爸的直覺猜測】爸爸提問 "Did he pick Tennis as usual?"，但 Amy 立刻用 "Actually no" 斷然否定！',
        'G': '❌ 【選項 (G) 陷阱：下一題對話干擾】Sailing 是接下來討論 Maya 時提到的項目，並非 Leo 的選擇。'
      }
    },
    extensionStudy: {
      synonyms: [
        'borrowed digital camera = photography（借相機＝攝影活動）',
        'racket sports = tennis / badminton / squash（球拍運動）',
        'as usual = like he normally does（像往常一樣）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n反駁常用語 Actually no：\n當對話中一方提出猜測，另一方開頭說 "Actually no..." 時，表示接下來的訊息才是真正的答案，前面的猜測全數作廢。',
      examVariations: '🔮 【下次考場可能變形】\n考題問 Leo 為什麼沒選運動："Why didn\'t Leo play tennis?" 正解為 He had hurt his arm。'
    }
  },
  {
    code: 'U02-LSP5-S4-029',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 4,
    questionType: 'choice',
    instruction: 'For each question, choose the correct answer. You will hear Amy talking to her dad about the free clubs her five friends chose for this weekend.',
    prompt: 'Which club did Maya choose?',
    audioLines: [
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Hi Amy, did your school friends pick their free weekend activities yet?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes Dad! Tom originally wanted to play Chess because he bought a new board, but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'That will keep him fit! What about Sarah? She is always making beautiful pictures with pencils.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'She signed up for Drawing at first, but the class was completely full! So she switched to Cooking and is baking lemon pies this Saturday.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Yummy! And Leo is great at sports. Did he pick Tennis as usual?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Actually no, he injured his arm last week, so no racket sports for him. He borrowed his uncle\'s digital camera and chose Photography instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Clever boy. And Maya? Her brother was trying to persuade her to go Sailing on the lake, wasn\'t he?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'G'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes, but Maya can\'t swim and is terrified of deep water! She loves the stage, so she chose Acting at the local drama studio.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'G'
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Brilliant! And what about Ben? Did he go with Tom on his bike?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'He planned to go Cycling with Tom, but his bike has a flat tyre. He didn\'t want to stay home doing nothing, so he signed up for Chess to play indoors.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      }
    ],
    options: [
      { key: 'A', text: 'Acting' },
      { key: 'B', text: 'Chess' },
      { key: 'C', text: 'Cooking' },
      { key: 'D', text: 'Drawing' },
      { key: 'E', text: 'Cycling' },
      { key: 'F', text: 'Photography' },
      { key: 'G', text: 'Sailing' },
      { key: 'H', text: 'Tennis' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「他人遊說 vs 恐懼拒絕（can\'t swim / terrified of water）➔ 最終真愛」之轉折理解。',
      correctReason: '✅ 【為什麼選 (A) 是對的？】\n爸爸提到哥哥說服她去帆船社（Sailing），但 Amy 解釋 Maya 不會游泳且怕水："She loves the stage, so she chose Acting at the local drama studio"（她熱愛舞台，所以在當地戲劇工作室選了表演），正解為 (A)。',
      distractorAnalysis: {
        'G': '❌ 【選項 (G) 陷阱：家人的推薦】哥哥極力推薦她去湖上玩帆船（go Sailing），但 Maya 不會游泳且怕深水，斷然拒絕了帆船。',
        'D': '❌ 【選項 (D) 陷阱：其他藝術類干擾】Drawing 是 Sarah 原本想報名的項目，不是 Maya 的選擇。'
      }
    },
    extensionStudy: {
      synonyms: [
        'acting = drama / performing on stage（表演、戲劇）',
        'terrified of deep water = very scared of water（極度怕水）',
        'persuade = encourage sb to agree（說服、勸告）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n情緒形容詞片語：\nbe terrified of + 名詞/V-ing（Maya is terrified of deep water）。\n在英檢中，表示害怕的同義詞有 afraid of / scared of / terrified of。',
      examVariations: '🔮 【下次考場可能變形】\n閱讀題中可能問："Why did Maya refuse to go sailing?" 正解為 Because she cannot swim。'
    }
  },
  {
    code: 'U02-LSP5-S5-030',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP5',
    ketPartName: 'LS Part 5 · 聽力資訊配對',
    difficulty: 5,
    questionType: 'choice',
    instruction: 'For each question, choose the correct answer. You will hear Amy talking to her dad about the free clubs her five friends chose for this weekend.',
    prompt: 'Which club did Ben choose?',
    audioLines: [
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Hi Amy, did your school friends pick their free weekend activities yet?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes Dad! Tom originally wanted to play Chess because he bought a new board, but all his cousins are in the Cycling club, so he decided to join them on their bike ride instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'That will keep him fit! What about Sarah? She is always making beautiful pictures with pencils.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'She signed up for Drawing at first, but the class was completely full! So she switched to Cooking and is baking lemon pies this Saturday.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Yummy! And Leo is great at sports. Did he pick Tennis as usual?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Actually no, he injured his arm last week, so no racket sports for him. He borrowed his uncle\'s digital camera and chose Photography instead.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Clever boy. And Maya? Her brother was trying to persuade her to go Sailing on the lake, wasn\'t he?',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'Yes, but Maya can\'t swim and is terrified of deep water! She loves the stage, so she chose Acting at the local drama studio.',
        isClue: false,
        isTrap: false,
        distractorTarget: null
      },
      {
        speaker: 'Dad',
        role: 'Father',
        text: 'Brilliant! And what about Ben? Did he go with Tom on his bike?',
        isClue: false,
        isTrap: true,
        distractorTarget: 'E'
      },
      {
        speaker: 'Amy',
        role: 'Daughter',
        text: 'He planned to go Cycling with Tom, but his bike has a flat tyre. He didn\'t want to stay home doing nothing, so he signed up for Chess to play indoors.',
        isClue: true,
        isTrap: true,
        distractorTarget: 'E'
      }
    ],
    options: [
      { key: 'A', text: 'Acting' },
      { key: 'B', text: 'Chess' },
      { key: 'C', text: 'Cooking' },
      { key: 'D', text: 'Drawing' },
      { key: 'E', text: 'Cycling' },
      { key: 'F', text: 'Photography' },
      { key: 'G', text: 'Sailing' },
      { key: 'H', text: 'Tennis' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測試「器材損壞（flat tyre）導致原定計畫被迫取消，轉移到室內活動」的最終判定。',
      correctReason: '✅ 【為什麼選 (B) 是對的？】\nAmy 說 Ben 本來想跟 Tom 一起去騎單車（Cycling），但自行車爆胎（flat tyre），他不想待在家發呆，"so he signed up for Chess to play indoors"（所以報名了西洋棋在室內玩），正解為 (B)。',
      distractorAnalysis: {
        'E': '❌ 【選項 (E) 陷阱：原先計畫與同伴牽連】爸爸問他是不是跟 Tom 一起騎單車，Ben 確實曾有此計畫（He planned to go Cycling），但因自行車爆胎而無法成行。',
        'F': '❌ 【選項 (F) 陷阱：其他朋友的選擇】Photography 是手受傷的 Leo 所選的活動，並非 Ben 的選擇。'
      }
    },
    extensionStudy: {
      synonyms: [
        'flat tyre = puncture / wheel with no air（爆胎、輪胎漏氣）',
        'signed up for = registered for / joined（報名參加）',
        'play indoors = play inside a room（在室內玩）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nplanned to + 原形動詞：\n"He planned to go Cycling ... but"\n過去式 planned to 代表「原本計畫但未實現」，看到 but 就要立刻準備迎接真正的最終答案。',
      examVariations: '🔮 【下次考場可能變形】\n整篇對話為 KET 官方真題經典結構：全篇 8 個選項在對話中通通會被提到（包含 Tom 想下棋被推翻、Sarah 想畫畫被推翻、Leo 被猜網球被推翻、Maya 被提帆船被推翻、Ben 想騎車被推翻），唯有全神貫注聽出轉折詞後真正落實的項目才能拿滿分！'
    }
  },

  // =========================================================================
  // 7. RWP6: 短訊/Email 寫作真考題 (1 題: 031)
  // 情境：邀請朋友 Charlie 星期六一起參加攝影社 (Photography Club)
  // 包含 3 個 bullet points，送出後附 modelAnswers (band13, band15), commonTraps, extensionStudy
  // =========================================================================
  {
    code: 'U02-RWP6-S3-031',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'writing',
    ketPart: 'RWP6',
    ketPartName: 'WR Part 6 · 短訊寫作 (25+字)',
    difficulty: 3,
    questionType: 'writing',
    instruction: 'Read the email from your English friend Charlie. Write an email to Charlie and answer the questions. Write 25 words or more.',
    passageTitle: 'Email from Charlie',
    noticeType: 'email',
    passageHtml: `<div class="ket-email-box">
      <div class="ket-email-meta"><strong>From:</strong> Charlie<br><strong>Subject:</strong> Weekend clubs!</div>
      <p>Hi!</p>
      <p>I heard that you joined a new club at school recently. What club is it? Where and what time does it meet? Can I come with you this Saturday?</p>
      <p>Write back soon!<br>Charlie</p>
    </div>`,
    prompt: 'Write an email to Charlie. In your email:\n• invite Charlie to your new club (Photography Club)\n• tell Charlie where and what time the club meets this Saturday\n• ask Charlie if he can bring a smartphone or camera\nWrite 25 words or more.',
    options: null,
    answer: ['Writing Task: Evaluated by CEFR A2 Rubric (Band 13 / Band 15)'],
    modelAnswers: {
      checklist: [
        'Point 1 (Invite to club): 有沒有明確提及 Photography Club 並發出邀請？',
        'Point 2 (Where & What time): 有沒有給出具體地點（如 Room 3B / art room）與時間（如 Saturday at 10.00 a.m.）？',
        'Point 3 (Bring phone/camera): 有沒有詢問對方能否自備手機或相機？',
        'Word Count (字數規範): 內文是否達到 25 字以上（建議 35–45 字最佳）？'
      ],
      band13: 'Hi Charlie,\nI joined the school Photography Club! Would you like to come with me this Saturday? We meet in the art room at 10 a.m. Can you bring your smartphone to take photos? See you then!\n(40 words — 達到 A2 Key 標準 13 盾)',
      band15: 'Hi Charlie,\nThanks for your email! I have just joined the brilliant Photography Club, and I\'d love to invite you to come along this Saturday. We usually meet in Room 4B at half past ten in the morning. Could you bring a digital camera or your phone? Let me know soon!\n(52 words — 榮獲 KET 滿分 15 盾 Excellence 範本)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Writing Part 6 嚴格檢驗三大維度：內容完整度（Content: 3 個 points 缺一不可）、篇章結構（Organisation: 招呼語、連接詞 and/so/because、結尾署名）以及語言精準度（Language: 時態、拼寫與 invitation 句型）。剛過 Flyers 的學生最容易因漏掉 1 個 point 而直接降級。',
      correctReason: '✅ 【高分關鍵解析】\n滿分範本完全擊中 3 個評分指標：\n1. 邀請加入攝影社："I\'d love to invite you to come along to the Photography Club"\n2. 人事時地物完整交代："in Room 4B at half past ten"\n3. 提問自備設備："Could you bring a digital camera or your phone?" 句子長短適中且文法完全零失誤。',
      commonTraps: [
        { wrong: '字數低於 25 字（例如只寫 18 個字）', whyWrong: '⚠️ 考場致命傷！Part 6 規定 Write 25 words or more。低於 25 字即使文法再好也會被直接扣除 Content 分數！' },
        { wrong: '漏掉其中一個提示點（如只講了地點忘了寫幾點）', whyWrong: '⚠️ 漏掉 1 個 point 會讓 Content 滿分 5 分直接跌落至 3 分以下，無法取得 13 盾！' },
        { wrong: '邀請句型寫成 "Do you want go...?"', whyWrong: '邀請請使用高分標準句型：Would you like to come...? 或 Can you come...? 勿遺漏不定詞 to。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'Would you like to come along? = Why don\'t you join me?（你要不要一起來？）',
        'at half past ten = at 10:30（十點半）',
        'take photos = take pictures / capture shots（拍照）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n寫作標點與開頭結尾格式：\n• 開頭招呼：Hi Charlie,（記得打逗號，下一行空一行或縮排）\n• 結尾祝福：See you soon, / Best wishes, 加上自己的名字。',
      examVariations: '🔮 【下次考場可能變形】\n情境可能改為邀請朋友去 Camping Club 或 Cooking Club，基本問句結構與時間地點公式完全通用！'
    }
  },

  // =========================================================================
  // 8. SPP1: 口說考官問答真考題 (1 題: 032)
  // 口說 Part 1 第二階段問題："Tell me something about the hobbies or clubs you do at weekends."
  // 附 13/15 盾答題範本、考官追問 (Back-up prompts) 與解析
  // =========================================================================
  {
    code: 'U02-SPP1-S3-032',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'speaking',
    ketPart: 'SPP1',
    ketPartName: 'SP Part 1 · 口說考官問答',
    difficulty: 3,
    questionType: 'speaking',
    instruction: 'In Speaking Part 1 Phase 2, the examiner will ask you an extended question about your free time. Listen and speak clearly in full sentences.',
    prompt: 'Examiner: "Now, tell me something about the hobbies or clubs you do at weekends."',
    options: null,
    answer: ['Speaking Task: Evaluated by CEFR A2 Speaking Rubric (Band 13 / Band 15)'],
    modelAnswers: {
      band13: 'At weekends, I usually play basketball with my classmates in the park on Saturday morning. I really enjoy it because it is exciting and helps me stay fit. On Sunday, I sometimes go to the cinema with my family or watch funny videos on my computer.\n(47 words — 達到 A2 Key 13 盾標準)',
      band15: 'Well, I have quite a few hobbies at weekends! On Saturday morning, I\'m in the school photography club, so I often go to the countryside to take photos of birds and nature with my friends. Then on Sunday afternoon, if the weather is bad, I prefer playing chess with my father at home or baking pizzas. It\'s really relaxing after a busy school week.\n(66 words — 展現豐富連接詞、頻率副詞與條件句之 15 盾頂尖水準)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Speaking Part 1 Phase 2 是長問答題（Tell me something about...）。考官期待考生能主動說出 3–4 句連貫完整的句子，展現擴展話題（extending answers）的能力，而不是只回答 "I play basketball." 三個字就陷入尷尬沈默！',
      correctReason: '✅ 【口說高分祕訣】\n15 盾範本成功運用了黃金三步法：\n1. 直接回答活動（What: photography club, take photos）\n2. 補充時間與同行者（When & Who: Saturday morning with friends）\n3. 說明感受或備案條件句（Why & Condition: if the weather is bad, I prefer... It\'s relaxing）。',
      commonTraps: [
        { wrong: '只回答單字或短語（例如只說："Basketball and computer games."）', whyWrong: '⚠️ 考官給分標準明確要求「能產出句子級別的表達」。只回答單字會被判定為 A1 程度！' },
        { wrong: '聽不懂時直接愣住或說中文', whyWrong: '⚠️ 若聽不懂考官的題目，請立刻使用求助禮貌句型："Sorry, could you repeat that please?" 考官會改用具體問題（如 "Do you play sports at the weekend?"）來引導你，絕不扣分！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'stay fit = keep healthy / in good shape（保持體能健康）',
        'relaxing = peaceful and enjoyable（令人放鬆的）',
        'quite a few hobbies = lots of interests（相當多種愛好）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n頻率副詞在口說中的位置：\n• I usually play...（放在一般動詞前）\n• I am often bored...（放在 be 動詞後）\n連接詞的使用（and / but / because / so / if）是考官判定 13 盾與 15 盾的最關鍵分水嶺！',
      examVariations: '🔮 【下次考場可能變形】\n考官的引導備用問題 (Back-up prompts)：\n• "Do you play sports at the weekend?"\n• "What do you do on Sunday afternoon?"\n• "Who do you spend time with at the weekend?"'
    }
  }
,
  // =========================================================================
  // 9. RWP2: 三選一文本配對 (5 題: 033 ~ 037)
  // 三位青少年週末愛好訪談：Maya (野生動物攝影), Liam (森林露營與帆船), Chloe (戲劇社與西洋棋)
  // 測驗同義改寫 (often / once a month / equipment costs / winning a prize / bad weather plans)
  // =========================================================================
  {
    code: 'U02-RWP2-S2-033',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 2,
    questionType: 'choice',
    passageTitle: 'RW Part 2 · Teenagers Talking About Weekend Hobbies',
    passageHtml: U2_PASSAGE_RWP2,
    instruction: 'Read the three texts about Maya, Liam and Chloe. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person does their outdoor hobby very often, almost every weekend throughout the year?',
    options: [
      { key: 'A', text: 'Maya' },
      { key: 'B', text: 'Liam' },
      { key: 'C', text: 'Chloe' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗頻率副詞與時間表達同義替換（often = almost every weekend / frequently）。KET Part 2 考生需跨三篇短文精準比對誰從事戶外嗜好的頻率「最頻繁且貫穿全年」。',
      correctReason: '✅ 【為什麼選 Maya (A) 是對的？】\nMaya 在短文一開頭明確敘述："Almost every weekend, whatever the season, I get up early on Saturday morning and cycle to the local nature reserve..."（不論什麼季節，幾乎每個週末都起大早騎單車去自然保護區），完全吻合 very often, almost every weekend throughout the year。',
      distractorAnalysis: {
        'B': '❌ 【Liam 陷阱：頻率較低且僅限暖和月份】Liam 提到自己與哥哥去露營或帆船的頻率是「每個月一次」(once a month)，而且只在五月到九月的暖和月份（During the warmer months from May to September），並非幾乎每個週末。',
        'C': '❌ 【Chloe 陷阱：室內活動非戶外】Chloe 雖然每週六與週日都有活動，但她熱愛的是「室內創意活動」(creative indoor activities：戲劇社與西洋棋)，而非 outdoor hobby。'
      }
    },
    extensionStudy: {
      synonyms: [
        'very often = frequently / regularly / almost every weekend（非常頻繁、規律地）',
        'whatever the season = all year round / in all seasons（不論季節、一年四季）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n頻率副詞階梯與同義替換：\n• always (100%) > almost every weekend (~90%) > usually / often (~70%) > once a month (~25%) > never (0%)。\nKET 考題極少原詞重現，必定用 "almost every weekend" 替換題幹中的 "very often"。',
      examVariations: '🔮 【下次考場可能變形】\n題幹可能改為否定詢問："Which person does NOT go outdoors every week?"，答案就會轉向 Liam (once a month) 或 Chloe (indoor activities)。'
    }
  },
  {
    code: 'U02-RWP2-S3-034',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'RW Part 2 · Teenagers Talking About Weekend Hobbies',
    passageHtml: U2_PASSAGE_RWP2,
    instruction: 'Read the three texts about Maya, Liam and Chloe. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person only goes on outdoor camping or sailing trips once a month?',
    options: [
      { key: 'A', text: 'Maya' },
      { key: 'B', text: 'Liam' },
      { key: 'C', text: 'Chloe' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗特定頻率片語（once a month = twelve times a year / monthly）之細節定位能力。考生必須從三位青少年的休閒行程中，找出具體陳述「每月出遊一次」的人物。',
      correctReason: '✅ 【為什麼選 Liam (B) 是對的？】\nLiam 在文中明確指出："During the warmer months from May to September, my brother and I go forest camping or sailing on the lake once a month."，字面與語意均完全鎖定 once a month。',
      distractorAnalysis: {
        'A': '❌ 【Maya 陷阱：頻率為每週而非每月】Maya 是「幾乎每個週末」(Almost every weekend) 都騎單車出門攝影，頻率遠高於每個月一次。',
        'C': '❌ 【Chloe 陷阱：室內活動且為每週進行】Chloe 的戲劇社是「每週六下午」(Every Saturday afternoon)，西洋棋則是「每週日」(On Sundays)，都不是一個月一次的戶外行程。'
      }
    },
    extensionStudy: {
      synonyms: [
        'once a month = on a monthly basis / twelve times a year（每月一次）',
        'go camping = stay in a tent outdoors（露營）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n次數表達法：\n• once a week / once a month（一次）\n• twice a week / twice a month（兩次）\n• three times a week / three times a month（三次以上用 times）。\n注意 once 與 twice 為專用副詞，不可寫成 one time 或 two times。',
      examVariations: '🔮 【下次考場可能變形】\n考題可能改為以月份區間提問："Who only takes part in their hobby during spring and summer?"（May to September 對應春末與夏季）。'
    }
  },
  {
    code: 'U02-RWP2-S3-035',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'RW Part 2 · Teenagers Talking About Weekend Hobbies',
    passageHtml: U2_PASSAGE_RWP2,
    instruction: 'Read the three texts about Maya, Liam and Chloe. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person explains that their hobby does not need any expensive equipment to do?',
    options: [
      { key: 'A', text: 'Maya' },
      { key: 'B', text: 'Liam' },
      { key: 'C', text: 'Chloe' }
    ],
    answer: 'C',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗關於花費與裝備（equipment costs / expensive gear）的否定表達與語義反轉。三篇短文皆提及 expensive equipment / gear，考生必須辨析誰說自己的嗜好「本身根本不需要買昂貴設備」。',
      correctReason: '✅ 【為什麼選 Chloe (C) 是對的？】\nChloe 在段落中清晰說明："Drama is great because you don\'t need any expensive equipment or special clothes — just a lot of imagination and energy!"，明確指出該活動本質上不需要昂貴裝備。',
      distractorAnalysis: {
        'A': '❌ 【Maya 陷阱：設備極昂貴，由叔叔贈送】Maya 明確說 "camera equipment usually costs a fortune!"（相機設備通常貴得要命），昂貴的數位相機是叔叔買給她的生日禮物，並非不需要昂貴設備。',
        'B': '❌ 【Liam 陷阱：裝備昂貴但借用父親舊物】Liam 承認 "Camping gear can be really expensive"（露營裝備非常昂貴），只是因為爸爸把舊帳篷睡袋送給他們所以省下費用，但該活動本身確實需要裝備。'
      }
    },
    extensionStudy: {
      synonyms: [
        'does not need expensive equipment = requires no costly gear / free from expensive kit（不需要昂貴裝備）',
        'costs a fortune = extremely expensive / very pricey（價格不菲、要花一大筆錢）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nequipment 為不可數名詞（Uncountable Noun）：\n• 只能說 expensive equipment，絕對不能加 -s（不能寫 equipments），也不能加冠詞 an（不能寫 an equipment）。若要表示一件裝備，需用 a piece of equipment。',
      examVariations: '🔮 【下次考場可能變形】\n反向題型："Which person was given second-hand equipment by a family member?"，答案即為 Liam（dad gave his old tent and sleeping bags）。'
    }
  },
  {
    code: 'U02-RWP2-S3-036',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'RW Part 2 · Teenagers Talking About Weekend Hobbies',
    passageHtml: U2_PASSAGE_RWP2,
    instruction: 'Read the three texts about Maya, Liam and Chloe. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person recently won first prize in an outdoor hobby competition?',
    options: [
      { key: 'A', text: 'Maya' },
      { key: 'B', text: 'Liam' },
      { key: 'C', text: 'Chloe' }
    ],
    answer: 'A',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗獲獎與競賽（winning a prize / competition）之時間點與名次辨析。三位青少年皆提及競賽或獎項，考驗考生是否能區分「最近 (recently / last month)」、「第一名 (first prize)」與「戶外競賽 (outdoor competition)」。',
      correctReason: '✅ 【為什麼選 Maya (A) 是對的？】\nMaya 明確提到："Last month, I entered an outdoor photography competition in our county and won first prize — a voucher for photo printing!"，同時符合 recently (last month), won first prize, 以及 outdoor competition。',
      distractorAnalysis: {
        'B': '❌ 【Liam 陷阱：未獲獎項】Liam 去年秋天參加青少年帆船賽，但只拿到第四名（finished fourth），明確表示 "so I didn\'t get a medal or trophy"。',
        'C': '❌ 【Chloe 陷阱：室內活動且時間為兩年前】Chloe 雖然贏得金盃（won a gold cup），但那是「兩年前」(two years ago) 的西洋棋比賽，既非 outdoor 也非 recently。'
      }
    },
    extensionStudy: {
      synonyms: [
        'won first prize = came first / took first place / was the winner（榮獲第一名、奪冠）',
        'recently = last month / not long ago（最近、不久前）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n獲獎與競賽動詞搭配：\n• win a prize / win a competition / win a medal（贏得獎項、比賽、獎牌）\n• enter a competition / take part in a race（報名參賽）\n• finish fourth / come second（名次以序數詞表達）。',
      examVariations: '🔮 【下次考場可能變形】\n題幹可能改問獲得的獎勵品為何："What did Maya win as a reward?"，答案為 a voucher for photo printing（相片沖洗兌換券）。'
    }
  },
  {
    code: 'U02-RWP2-S4-037',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'reading',
    ketPart: 'RWP2',
    ketPartName: 'RW Part 2 · 三選一文本配對',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'RW Part 2 · Teenagers Talking About Weekend Hobbies',
    passageHtml: U2_PASSAGE_RWP2,
    instruction: 'Read the three texts about Maya, Liam and Chloe. For each question, choose the correct person (A, B or C).',
    prompt: 'Which person has alternative plans to play board games when bad weather stops their outdoor hobby?',
    options: [
      { key: 'A', text: 'Maya' },
      { key: 'B', text: 'Liam' },
      { key: 'C', text: 'Chloe' }
    ],
    answer: 'B',
    explanation: {
      examPurpose: '🎯 【出題目的】測驗面對惡劣天氣的因應備案（bad weather plans / alternative activity）。考生必須在三位談及雨天或壞天氣的短文中，精確找出「因壞天氣取消戶外活動，轉而在室內玩桌遊棋類」的人。',
      correctReason: '✅ 【為什麼選 Liam (B) 是對的？】\nLiam 在文末敘述："When bad weather ruins our outdoor plans, we stay in the sailing club cabin and play board games like chess instead."，完美吻合 alternative plans to play board games when bad weather stops outdoor hobby。',
      distractorAnalysis: {
        'A': '❌ 【Maya 陷阱：壞天氣依然在戶外拍攝】Maya 說下雨天她會穿上防水外套（put on my waterproof jacket），坐在木製賞鳥小屋裡繼續拍照，並未改玩桌遊。',
        'C': '❌ 【Chloe 陷阱：本身就是室內活動無須因天氣更動】Chloe 雖然會下西洋棋 (chess)，但那是她原本的例行活動，且她強調活動 "never depend on the weather"，並非因為戶外活動受阻才臨時改玩的替代計畫。'
      }
    },
    extensionStudy: {
      synonyms: [
        'alternative plans = backup plan / do something instead（替代方案、改做其他事）',
        'bad weather ruins outdoor plans = stormy conditions stop outdoor activities（壞天氣破壞戶外計畫）',
        'board games = tabletop games like chess / Scrabble（圖版桌遊、棋類遊戲）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\ninstead vs instead of 的差別：\n• instead（副詞，常放句尾或句首）：We stay in the cabin and play board games instead.\n• instead of（介系詞，後面接名詞或 V-ing）：We played board games instead of sailing on the lake.',
      examVariations: '🔮 【下次考場可能變形】\n換向提問："Which person does not stop their hobby even when it rains heavily?"，答案為 Maya（穿防水外套繼續拍水鳥）。'
    }
  },

  // =========================================================================
  // 10. RWP7: 看圖寫故事 (1 題: 038)
  // 戶外水彩繪畫社突發意外故事 (35+字, 附 13/15 盾範本)
  // =========================================================================
  {
    code: 'U02-RWP7-S4-038',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'writing',
    ketPart: 'RWP7',
    ketPartName: 'WR Part 7 · 看圖寫故事 (35+字)',
    difficulty: 4,
    questionType: 'writing',
    image: 'assets/images/u2/u2_hobbies_clubs.jpg',
    passageTitle: 'WR Part 7 · Outdoor Painting Club Surprise',
    instruction: 'Look at the pictures of the hobby club. Write the story shown in the pictures. Write 35 words or more.',
    prompt: 'Look at the hobby club picture scenes. Write a story about what happened to the outdoor painting club when unexpected weather arrived. Write 35 words or more.',
    options: null,
    answer: ['Writing Task: Evaluated by CEFR A2 Rubric (Band 13 / Band 15)'],
    modelAnswers: {
      checklist: [
        'Scene 1 (Beginning): 描述幾位學生在公園草地上開心地進行水彩寫生（painting outdoors in the sun）。',
        'Scene 2 (Problem): 突然颳起大風下起驟雨，水彩顏料翻倒或畫紙被吹飛（unexpected wind/rain, spilled watercolours）。',
        'Scene 3 (Solution & Ending): 大家互相合作幫忙收拾畫具衝進涼亭，雖然全身淋濕但笑著欣賞完成的畫作（teamwork solution, shelter in gazebo/cabin）。',
        'Word Count & Grammar: 字數達 35 字以上（建議 45–60 字），全文統一使用過去式 (Past Simple / Past Continuous)。'
      ],
      band13: 'Last Saturday, three teenagers were painting pictures in the sunny park. Suddenly, it started to rain heavily and strong wind blew their papers away. They worked together to pick up their paintbrushes and ran quickly to a wooden shelter. They were wet, but they were very happy.\n(48 words — 達到 A2 Key 13 盾標準)',
      band15: 'Last weekend, three friends from the art club were painting watercolours together on the green grass. Suddenly, dark clouds arrived and heavy rain began to fall. The strong wind blew away their drawings, and blue paint spilled onto Liam\'s trainers! Luckily, they helped each other collect their brushes and rushed into a nearby wooden gazebo. Although their clothes were wet, they laughed happily together.\n(68 words — 展現過去進行式、生動動詞與流暢連接詞之 15 盾頂尖範本)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Writing Part 7 看圖寫故事測驗考生三項關鍵能力：時態一致性（過去簡單式與過去進行式交替）、事件因果轉折（unexpected rain, teamwork solution）以及情境細節描寫（35 字以上）。小五小六剛通過 Flyers 的考生常因時態跳回現在式或字數不足而被扣分。',
      correctReason: '✅ 【高分關鍵解析】\n15 盾範本完美示範滿分寫作四要素：\n1. 清楚交代背景：Last weekend, three friends... were painting watercolours\n2. 轉折衝突生動：Suddenly, dark clouds arrived... strong wind blew away...\n3. 團隊合作解決：helped each other collect... rushed into a nearby gazebo\n4. 收尾感受總結：laughed happily together，字數 68 字且文法時態毫無差錯。',
      commonTraps: [
        { wrong: '時態在過去式與現在式之間跳躍（例如：Suddenly it rains and they run...）', whyWrong: '⚠️ 故事敘述必須統一使用過去式（started, blew, ran, helped）。時態混亂會直接在 Language 指標遭到扣分！' },
        { wrong: '字數未滿 35 字（例如只寫 28 個字就結尾）', whyWrong: '⚠️ Part 7 官方指令嚴格規定 "Write 35 words or more"。字數未達標將被嚴格懲罰，無法取得 13/15 盾！' },
        { wrong: '通篇只用 and 連接，缺乏多樣副詞與連接詞', whyWrong: '高分需要適度使用 Suddenly, Luckily, Although, because 等連接詞，展現 A2 Key 級別的 Organisation 能力。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'spill over = knock over liquid / overturn（打翻液體、潑濺）',
        'shelter = gazebo / cabin / covered area（涼亭、遮雨處）',
        'rush into = run quickly inside / hurry into（衝進去）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n連環故事寫作的黃金句型：「過去進行式（背景鋪陳）＋ 過去簡單式（突發插曲）」：\n• While they were painting outdoors, suddenly it began to pour with rain.\n善用 while, when, suddenly 串聯，是從 Flyers A1 晉升至 KET A2 Distinction 的關鍵分水嶺。',
      examVariations: '🔮 【下次考場可能變形】\n考場常見看圖故事變形：野餐被狗狗偷吃三明治、登山遇迷霧看地圖、單車爆胎合力換胎。掌握「起（好時光）- 承（突發意外）- 轉（合力解決）- 合（快樂結尾）」四步架構即可通行所有 Part 7 題目！'
    }
  },

  // =========================================================================
  // 11. LSP1: 聽力圖片/細節三選一 (2 題: 039 ~ 040)
  // 039: Owen 臥室層架新買物品 (吉他架 vs 三腳架 vs 西洋棋盤)
  // 040: 週六藝術戲劇社實際開始時間 (9.30 vs 10.15 vs 10.45)
  // =========================================================================
  {
    code: 'U02-LSP1-S2-039',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP1',
    ketPartName: 'LS Part 1 · 聽力圖片三選一',
    difficulty: 2,
    questionType: 'choice',
    image: 'assets/images/u2/u2_hasan_bedroom.jpg',
    audioTrack: 'Track 05',
    instruction: 'Listen to the conversation. Look at the bedroom shelf in the picture. Choose the correct answer (A, B or C).',
    prompt: 'Which new item did Owen finally buy for his bedroom shelf?',
    options: [
      { key: 'A', text: 'A wooden guitar stand' },
      { key: 'B', text: 'A sturdy camera tripod' },
      { key: 'C', text: 'A wooden chess board' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Grace', role: 'Girl', text: 'Hi Owen! I saw you carrying a shopping bag from the hobby store. Did you finally buy that wooden chess board you wanted for your bedroom shelf?', isClue: false, isTrap: true },
      { speaker: 'Owen', role: 'Boy', text: 'Well, I was going to get the chess board, but my grandad told me he is giving me his antique one next week!', isClue: false, isTrap: true },
      { speaker: 'Grace', role: 'Girl', text: 'That\'s great! So did you choose the guitar stand for your acoustic guitar instead?', isClue: false, isTrap: true },
      { speaker: 'Owen', role: 'Boy', text: 'I looked at the guitar stand, but it was much too expensive. In the end, I found a really sturdy camera tripod on sale for my photography hobby, so I bought that!', isClue: true, isTrap: false },
      { speaker: 'Grace', role: 'Girl', text: 'Brilliant! Now you can take steady pictures for the school photo exhibition.', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 1 核心陷阱題型：三者兼提（Mention all three）。對話中必然依序提及棋盤 (chess board)、吉他架 (guitar stand) 與相機三腳架 (camera tripod)，考生必須聽出「前兩項因故取消/放棄」，鎖定最終掏錢購買的物品。',
      correctReason: '✅ 【為什麼選 (B) A sturdy camera tripod 是對的？】\nOwen 在對話後半段明確說明："In the end, I found a really sturdy camera tripod on sale for my photography hobby, so I bought that!"（最後我買了特價的相機三腳架），因此正確答案為 B。',
      distractorAnalysis: {
        'A': '❌ 【A 選項吉他架陷阱】Owen 看了吉他架，但因為「價格太貴」(much too expensive) 而放棄購買。',
        'C': '❌ 【C 選項西洋棋盤陷阱】Owen 原本想買西洋棋盤，但外公下週要送他骨董棋盤，所以他當天並沒有買。'
      }
    },
    extensionStudy: {
      synonyms: [
        'in the end = finally / eventually（最後、最終）',
        'tripod = three-legged camera support（三腳架）',
        'on sale = discounted / cheaper than usual（特價中）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n過去意圖 vs 最終決定：\n• I was going to buy...（我原本打算買…，表示後來計畫改變，通常引出陷阱）\n• In the end, I bought...（最後我買了…，引出真正答案）。',
      examVariations: '🔮 【下次考場可能變形】\n物品可能換成畫筆套組 (paintbrush set)、露營睡袋 (sleeping bag) 或滑板 (skateboard)，聽力辨析重點始終在於抓取轉折詞 but, however, instead 與最終動詞 bought/chose。'
    }
  },
  {
    code: 'U02-LSP1-S3-040',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP1',
    ketPartName: 'LS Part 1 · 聽力圖片三選一',
    difficulty: 3,
    questionType: 'choice',
    image: 'assets/images/u2/u2_invitations_cartoon.jpg',
    audioTrack: 'Track 06',
    instruction: 'Listen to the conversation. Look at the invitation notes in the picture. Choose the correct time (A, B or C).',
    prompt: 'What time will the Saturday Art & Drama club actually start?',
    options: [
      { key: 'A', text: '9.30 (half past nine)' },
      { key: 'B', text: '10.15 (quarter past ten)' },
      { key: 'C', text: '10.45 (quarter to eleven)' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Sophie', role: 'Girl', text: 'Hi Noah, are you going to the Saturday Art & Drama club tomorrow morning? The invitation poster says it begins at half past nine.', isClue: false, isTrap: true },
      { speaker: 'Noah', role: 'Boy', text: 'Yes, but don\'t go at 9.30! Mr Davis sent an email saying the sports hall floor is being cleaned early in the morning.', isClue: false, isTrap: true },
      { speaker: 'Sophie', role: 'Girl', text: 'Oh! Does that mean club members have to wait until quarter to eleven like last month?', isClue: false, isTrap: true },
      { speaker: 'Noah', role: 'Boy', text: 'No, that was when the heating was broken. Tomorrow the doors open at ten, and our activities will actually start at quarter past ten sharp.', isClue: true, isTrap: false },
      { speaker: 'Sophie', role: 'Girl', text: 'Great, so I\'ll meet you outside the art room at 10.15 then!', isClue: true, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET 聽力 Part 1 必考之時間推移與干擾辨析（Time shift & Distractors）。對話依序拋出三個時間：9.30（海報原定時間被推翻）、10.45（上個月故障事件被澄清否決）、10.15（明日實際開始時間），測驗考生捕捉最新有效資訊的能力。',
      correctReason: '✅ 【為什麼選 (B) 10.15 是對的？】\nNoah 明確更正說明："Tomorrow the doors open at ten, and our activities will actually start at quarter past ten sharp."，Sophie 接著覆誦確認："I\'ll meet you outside the art room at 10.15 then!"。quarter past ten 即為 10.15。',
      distractorAnalysis: {
        'A': '❌ 【A 選項 9.30 陷阱：舊海報時間】9.30 是海報上寫的原本時間，但因為體育館地板一早要清潔，活動時間已經延後。',
        'C': '❌ 【C 選項 10.45 陷阱：上個月事件】10.45 是上個月暖氣故障時的開始時間，Noah 特別說 "No, that was when the heating was broken" 予以否決。'
      }
    },
    extensionStudy: {
      synonyms: [
        'quarter past ten = 10.15（十點十五分、十點過一刻）',
        'quarter to eleven = 10.45（十點四十五分、差一刻十一點）',
        'sharp = exactly on time（準時、分毫不差）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n鐘點表達英美用法對比：\n• quarter past ten = ten fifteen（10:15）\n• quarter to eleven = ten forty-five（10:45）\n• half past nine = nine thirty（9:30）\n英檢常在同一個音檔中交替使用 past/to 與數字讀法，必須極度熟悉一刻 (quarter) 與半小時 (half)。',
      examVariations: '🔮 【下次考場可能變形】\n考題可能問「大門幾點開」(doors open at 10.00) 或「清潔工作幾點結束」，審題時務必確認題幹的主角動作是「actually start」。'
    }
  },

  // =========================================================================
  // 12. LSP2: 聽力表格填空 (5 題: 041 ~ 045)
  // Summer Youth Adventure Camp 營隊資訊廣播表格填空 (options: null)
  // 041: 社團日 (thursday)
  // 042: 學生月費 (14 / £14)
  // 043: 第一天集合地點 (library)
  // 044: 自備裝備 (trainers)
  // 045: 總教練姓氏拼寫 (foster)
  // =========================================================================
  {
    code: 'U02-LSP2-S2-041',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 2,
    questionType: 'gap',
    options: null,
    passageTitle: 'LS Part 2 · Summer Youth Adventure Camp',
    instruction: 'You will hear a camp coordinator talking about a youth adventure camp. Complete each question with one word, a number, or a date/time.',
    prompt: 'You will hear a camp coordinator talking about a youth adventure camp.\nComplete the information about the club:\n\n🏕️ Summer Youth Adventure Camp\n• Day of weekly club meetings: [ ______ ]',
    answer: ['thursday', 'Thursday'],
    audioLines: [
      { speaker: 'Max', role: 'Student Rep', text: 'Good morning everyone! Mrs Jenkins from the Summer Youth Adventure Camp is here to give us details about the new outdoor skills club. Mrs Jenkins, when will the sessions be held each week?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Hello! We used to run our adventure sessions on Tuesdays, but this term the school field is busy, so our regular club meetings will take place every Thursday after school from four to five-thirty.', isClue: true, isTrap: true },
      { speaker: 'Max', role: 'Student Rep', text: 'That\'s good to know. How much does it cost for students to join for the full month?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Well, the adult community rate is twenty pounds, but for secondary school students like you, the monthly fee is only fourteen pounds.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Fourteen pounds is very reasonable! Where should we meet on the first day? Outside the sports hall?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Don\'t gather at the sports hall because the badminton tournament is on. Please wait quietly inside the school library near the entrance.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Understood — meet in the library. What special equipment should students bring along?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'We provide all the tents, compasses and climbing ropes. You only need to wear comfortable sports clothes and bring a clean pair of trainers for running activities. And if you have any medical forms, hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term.', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 2 測驗表格資訊抓取與星期拼寫。音檔中常出現「過去時間干擾（used to... on Tuesdays）」，考生必須精準鎖定當前實際舉行的星期名稱。',
      correctReason: '✅ 【為什麼答案是 Thursday 是對的？】\nMrs Jenkins 明確宣布："so our regular club meetings will take place every Thursday after school"，正確答案為 Thursday。',
      commonTraps: [
        { wrong: 'Tuesday / tuesday', whyWrong: '⚠️ 星期二陷阱！廣播中提到 "We used to run our sessions on Tuesdays"（過去曾經在週二），但本學期已改為 Thursday。' },
        { wrong: '拼錯星期四（如 Thrusday 或 Thuesday）', whyWrong: '⚠️ 星期四的正確拼字為 T-H-U-R-S-D-A-Y。KET 填空題拼字錯誤視同零分，首字母大寫與否均可但字母順序不能錯！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'take place = be held / happen（舉行、發生）',
        'regular meetings = weekly sessions（例行聚會、每週社團課）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nused to + 原形動詞表示「過去曾經…（但現在不再如此）」：\n• We used to run sessions on Tuesdays.（過去在週二，現在不是）\n這是聽力測驗中最高頻的干擾信號句型！',
      examVariations: '🔮 【下次考場可能變形】\n考題可能詢問社團具體時段："What time does the club finish?"，答案為 5.30 (half past five)。'
    }
  },
  {
    code: 'U02-LSP2-S3-042',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 3,
    questionType: 'gap',
    options: null,
    passageTitle: 'LS Part 2 · Summer Youth Adventure Camp',
    instruction: 'You will hear a camp coordinator talking about a youth adventure camp. Complete each question with one word, a number, or a date/time.',
    prompt: 'You will hear a camp coordinator talking about a youth adventure camp.\nComplete the information about the club:\n\n🏕️ Summer Youth Adventure Camp\n• Student monthly fee: £ [ ______ ]',
    answer: ['14', '£14', 'fourteen', 'Fourteen'],
    audioLines: [
      { speaker: 'Max', role: 'Student Rep', text: 'Good morning everyone! Mrs Jenkins from the Summer Youth Adventure Camp is here to give us details about the new outdoor skills club. Mrs Jenkins, when will the sessions be held each week?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Hello! We used to run our adventure sessions on Tuesdays, but this term the school field is busy, so our regular club meetings will take place every Thursday after school from four to five-thirty.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'That\'s good to know. How much does it cost for students to join for the full month?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Well, the adult community rate is twenty pounds, but for secondary school students like you, the monthly fee is only fourteen pounds.', isClue: true, isTrap: true },
      { speaker: 'Max', role: 'Student Rep', text: 'Fourteen pounds is very reasonable! Where should we meet on the first day? Outside the sports hall?', isClue: true, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Don\'t gather at the sports hall because the badminton tournament is on. Please wait quietly inside the school library near the entrance.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Understood — meet in the library. What special equipment should students bring along?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'We provide all the tents, compasses and climbing ropes. You only need to wear comfortable sports clothes and bring a clean pair of trainers for running activities. And if you have any medical forms, hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term.', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 2 必考價格數字辨識。音檔必然拋出兩個金額（成人價 20 鎊 vs 學生價 14 鎊），測驗考生能否正確對應身份並寫出金額。',
      correctReason: '✅ 【為什麼答案是 14 是對的？】\nMrs Jenkins 說明："but for secondary school students like you, the monthly fee is only fourteen pounds."，Max 也接著覆誦："Fourteen pounds is very reasonable!"，確認填 14。',
      commonTraps: [
        { wrong: '寫成 20 或 £20', whyWrong: '⚠️ 成人費用陷阱！廣播中 20 鎊是一般社區成人的費用（adult community rate），學生優惠價明確為 14 鎊。' },
        { wrong: '重複寫了英鎊符號或拼錯數字（如 fourty / 40）', whyWrong: '⚠️ 題目已有英鎊符號 £，請只填數字 14（或 fourteen）。切勿將 14 (fourteen) 與 40 (forty) 聽混。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'monthly fee = monthly cost / price per month（每月費用）',
        'reasonable = affordable / good value for money（合理划算）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n-teen vs -ty 的聽力重音辨別：\n• fourTEEN（十四，重音在後綴 -teen，長音 /tiːn/）\n• FORty（四十，重音在第一音節，結尾短促 /ti/）。',
      examVariations: '🔮 【下次考場可能變形】\n若題目前面沒有印刷 £ 符號，考生必須自行在答案寫出 £14 或 14 pounds。'
    }
  },
  {
    code: 'U02-LSP2-S3-043',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 3,
    questionType: 'gap',
    options: null,
    passageTitle: 'LS Part 2 · Summer Youth Adventure Camp',
    instruction: 'You will hear a camp coordinator talking about a youth adventure camp. Complete each question with one word, a number, or a date/time.',
    prompt: 'You will hear a camp coordinator talking about a youth adventure camp.\nComplete the information about the club:\n\n🏕️ Summer Youth Adventure Camp\n• Meeting place on first day: inside the school [ ______ ]',
    answer: ['library', 'Library'],
    audioLines: [
      { speaker: 'Max', role: 'Student Rep', text: 'Good morning everyone! Mrs Jenkins from the Summer Youth Adventure Camp is here to give us details about the new outdoor skills club. Mrs Jenkins, when will the sessions be held each week?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Hello! We used to run our adventure sessions on Tuesdays, but this term the school field is busy, so our regular club meetings will take place every Thursday after school from four to five-thirty.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'That\'s good to know. How much does it cost for students to join for the full month?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Well, the adult community rate is twenty pounds, but for secondary school students like you, the monthly fee is only fourteen pounds.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Fourteen pounds is very reasonable! Where should we meet on the first day? Outside the sports hall?', isClue: false, isTrap: true },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Don\'t gather at the sports hall because the badminton tournament is on. Please wait quietly inside the school library near the entrance.', isClue: true, isTrap: true },
      { speaker: 'Max', role: 'Student Rep', text: 'Understood — meet in the library. What special equipment should students bring along?', isClue: true, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'We provide all the tents, compasses and climbing ropes. You only need to wear comfortable sports clothes and bring a clean pair of trainers for running activities. And if you have any medical forms, hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term.', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 2 測驗校園地點單字拼寫與否定排除。對話中學生提議體育館 (sports hall)，但主講人立刻否決並指定圖書館 (library)。',
      correctReason: '✅ 【為什麼答案是 library 是對的？】\nMrs Jenkins 清楚指示："Don\'t gather at the sports hall... Please wait quietly inside the school library near the entrance."，題幹已印刷 the school，空格填入 library。',
      commonTraps: [
        { wrong: 'sports hall', whyWrong: '⚠️ 體育館陷阱！Mrs Jenkins 特別提醒 "Don\'t gather at the sports hall because the badminton tournament is on"，排除了體育館。' },
        { wrong: 'school field', whyWrong: '⚠️ 操場陷阱！操場是提到週二有其他活動佔用，第一天集合地點是 school library。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'gather = meet up / assemble（集合、聚集）',
        'near the entrance = by the front door（在入口處附近）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n祈使否定句的排除功能：\n"Don\'t gather at..." 直接宣判該地點為干擾項。聽力時一聽到 Don\'t / Never / Rather than，後面緊跟的名詞立刻劃叉排除！',
      examVariations: '🔮 【下次考場可能變形】\n地點可能變形為 reception desk（總服務台）、science lab（實驗室）或 cafeteria（學生餐廳）。'
    }
  },
  {
    code: 'U02-LSP2-S4-044',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 4,
    questionType: 'gap',
    options: null,
    passageTitle: 'LS Part 2 · Summer Youth Adventure Camp',
    instruction: 'You will hear a camp coordinator talking about a youth adventure camp. Complete each question with one word, a number, or a date/time.',
    prompt: 'You will hear a camp coordinator talking about a youth adventure camp.\nComplete the information about the club:\n\n🏕️ Summer Youth Adventure Camp\n• Equipment students must bring: a clean pair of [ ______ ]',
    answer: ['trainers', 'Trainers'],
    audioLines: [
      { speaker: 'Max', role: 'Student Rep', text: 'Good morning everyone! Mrs Jenkins from the Summer Youth Adventure Camp is here to give us details about the new outdoor skills club. Mrs Jenkins, when will the sessions be held each week?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Hello! We used to run our adventure sessions on Tuesdays, but this term the school field is busy, so our regular club meetings will take place every Thursday after school from four to five-thirty.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'That\'s good to know. How much does it cost for students to join for the full month?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Well, the adult community rate is twenty pounds, but for secondary school students like you, the monthly fee is only fourteen pounds.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Fourteen pounds is very reasonable! Where should we meet on the first day? Outside the sports hall?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Don\'t gather at the sports hall because the badminton tournament is on. Please wait quietly inside the school library near the entrance.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Understood — meet in the library. What special equipment should students bring along?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'We provide all the tents, compasses and climbing ropes. You only need to wear comfortable sports clothes and bring a clean pair of trainers for running activities. And if you have any medical forms, hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term.', isClue: true, isTrap: true }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 2 測驗主辦單位提供物品 (we provide) vs 學員自備物品 (students bring) 之語意分辨。考生必須填入運動鞋 (trainers) 並正確拼寫。',
      correctReason: '✅ 【為什麼答案是 trainers 是對的？】\nMrs Jenkins 說明帳篷、指南針與攀爬繩由營隊提供，學生只需："bring a clean pair of trainers for running activities"，空格在 a clean pair of 之後，正確填寫 trainers。',
      commonTraps: [
        { wrong: 'tents / climbing ropes / compasses', whyWrong: '⚠️ 提供器材陷阱！Mrs Jenkins 明確說營隊會提供所有帳篷與繩索器材（We provide all the tents...），學生不需要自己帶。' },
        { wrong: '單數 trainer', whyWrong: '⚠️ 鞋子以雙呈現，配搭 a pair of trainers，請填入標準複數形 trainers。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'trainers = sneakers / sports shoes / running shoes（運動鞋、球鞋）',
        'we provide = we supply / we give you（我們提供）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n英式英語 vs 美式英語必考詞彙：\n• 英式：trainers（運動鞋）\n• 美式：sneakers / tennis shoes。\n劍橋英檢以英式拼寫 trainers 為最核心高頻考點。',
      examVariations: '🔮 【下次考場可能變形】\n需自備物品有時會考 waterproof jacket（防水外套）或 water bottle（水壺）。'
    }
  },
  {
    code: 'U02-LSP2-S5-045',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP2',
    ketPartName: 'LS Part 2 · 聽力表格填空',
    difficulty: 5,
    questionType: 'gap',
    options: null,
    passageTitle: 'LS Part 2 · Summer Youth Adventure Camp',
    instruction: 'You will hear a camp coordinator talking about a youth adventure camp. Complete each question with one word, a number, or a date/time.',
    prompt: 'You will hear a camp coordinator talking about a youth adventure camp.\nComplete the information about the club:\n\n🏕️ Summer Youth Adventure Camp\n• Head coach\'s surname: Coach [ ______ ]',
    answer: ['foster', 'Foster'],
    audioLines: [
      { speaker: 'Max', role: 'Student Rep', text: 'Good morning everyone! Mrs Jenkins from the Summer Youth Adventure Camp is here to give us details about the new outdoor skills club. Mrs Jenkins, when will the sessions be held each week?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Hello! We used to run our adventure sessions on Tuesdays, but this term the school field is busy, so our regular club meetings will take place every Thursday after school from four to five-thirty.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'That\'s good to know. How much does it cost for students to join for the full month?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Well, the adult community rate is twenty pounds, but for secondary school students like you, the monthly fee is only fourteen pounds.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Fourteen pounds is very reasonable! Where should we meet on the first day? Outside the sports hall?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'Don\'t gather at the sports hall because the badminton tournament is on. Please wait quietly inside the school library near the entrance.', isClue: false, isTrap: false },
      { speaker: 'Max', role: 'Student Rep', text: 'Understood — meet in the library. What special equipment should students bring along?', isClue: false, isTrap: false },
      { speaker: 'Mrs Jenkins', role: 'Camp Coordinator', text: 'We provide all the tents, compasses and climbing ropes. You only need to wear comfortable sports clothes and bring a clean pair of trainers for running activities. And if you have any medical forms, hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term.', isClue: true, isTrap: true }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 2 壓軸題必考英文字母逐字朗讀拼寫（Spelling out surnames）。考生必須精準聽寫每一個字母，並辨識干擾人物（已退休的 Coach Parker）。',
      correctReason: '✅ 【為什麼答案是 Foster 是對的？】\nMrs Jenkins 說："hand them to our head coach, Coach Foster — that\'s spelled F-O-S-T-E-R. Not Coach Parker, who retired last term."，依照拼讀寫出 Foster。',
      commonTraps: [
        { wrong: 'Parker / parker', whyWrong: '⚠️ 退休教練陷阱！Parker 是上一任已經退休的教練（who retired last term），現任總教練是 Foster。' },
        { wrong: '字母拼寫順序錯誤（如 Forster / Fostar）', whyWrong: '⚠️ 音檔中清楚逐字拼出 F-O-S-T-E-R，必須完全正確拼出 Foster。' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'head coach = chief instructor / lead trainer（總教練、首席教練）',
        'retired = stopped working due to age（退休）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n字母拼讀中容易聽混的字母發音組：\n• A /eɪ/ vs E /iː/ vs I /aɪ/\n• G /dʒiː/ vs J /dʒeɪ/\n• O /əʊ/ vs R /ɑː/。\n考前務必熟練英式字母發音節奏。',
      examVariations: '🔮 【下次考場可能變形】\n可能改考路名拼寫（e.g. Green Street spelled G-R-E-E-N）或城市地名（e.g. Brocton spelled B-R-O-C-T-O-N）。'
    }
  },

  // =========================================================================
  // 13. LSP3: 聽力長對話理解 (3 題: 046 ~ 048)
  // Holly 與 Leo 討論加入學校攝影社長對話 (>= 7 輪對話腳本)
  // 046: 攝影社每週活動日 (Wednesday afternoons)
  // 047: 社團費用 (It is completely free)
  // 048: 攝影比賽優勝獎品 (A pair of tickets to a wildlife park)
  // =========================================================================
  {
    code: 'U02-LSP3-S3-046',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'LS Part 3 · Joining the School Photography Club',
    instruction: 'Listen to Holly and Leo talking about joining the school photography club. For each question, choose the correct answer (A, B or C).',
    prompt: 'What day does the Photography Club meet every week?',
    options: [
      { key: 'A', text: 'Wednesday afternoons' },
      { key: 'B', text: 'Friday afternoons' },
      { key: 'C', text: 'Saturday mornings' }
    ],
    answer: 'A',
    audioLines: [
      { speaker: 'Holly', role: 'Girl', text: 'Hi Leo! I\'m thinking of joining an after-school activity this term. Would you like to join the school Photography Club with me?', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'I\'d love to! I really like taking pictures of birds and flowers with my smartphone. But when do they meet? I have swimming training on Friday afternoons and guitar lessons on Saturday mornings.', isClue: false, isTrap: true },
      { speaker: 'Holly', role: 'Girl', text: 'Don\'t worry! They used to meet on Friday afternoons, but this term meetings are every Wednesday from 3.45 to 5.00 in Room 12.', isClue: true, isTrap: true },
      { speaker: 'Leo', role: 'Boy', text: 'Wednesday is perfect for me! Do we have to pay a membership fee? The Drama Club asked for twelve pounds, and Art Club charges five pounds for printing paper.', isClue: true, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'No, joining the Photography Club is completely free because the school parent association bought all the cameras and printers!', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'That\'s fantastic! Do we need to bring our own cameras?', isClue: false, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'You can use your smartphone, or borrow one of the school digital cameras. Also, our club teacher said there is a wildlife photo competition next week! The winning student will receive two tickets to the regional wildlife park!', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'Wow, tickets to the wildlife park! I thought the prize would just be a camera backpack. Let\'s go to Room 12 right now to sign our names!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 3 長對話測驗行程時間衝突與真實例行日辨析。對話中提及週五（以前的聚會日與游泳訓練）、週六（吉他課）與週三（本學期聚會日），測驗考生抓取最新行程的能力。',
      correctReason: '✅ 【為什麼選 (A) Wednesday afternoons 是對的？】\nHolly 明確說明："They used to meet on Friday afternoons, but this term meetings are every Wednesday from 3.45 to 5.00 in Room 12."，Leo 也隨即表示週三對他很完美，確認為週三下午。',
      distractorAnalysis: {
        'B': '❌ 【B 選項 Friday afternoons 陷阱】週五下午是「過去的社團聚會日」(used to meet)，且是 Leo 固定游泳訓練的時間，並非現在的聚會時間。',
        'C': '❌ 【C 選項 Saturday mornings 陷阱】週六早上是 Leo 固定上吉他課的時間（guitar lessons），並非攝影社聚會時間。'
      }
    },
    extensionStudy: {
      synonyms: [
        'this term = this semester / currently（這學期、目前）',
        'perfect for me = suits my schedule well（很適合我的時間）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\nwould like to + V vs like + V-ing 的語意對比：\n• Would you like to join...?（表達客氣邀請或未來意願）\n• I really like taking pictures...（表達長期的常態性喜好）。',
      examVariations: '🔮 【下次考場可能變形】\n考題可能詢問社團聚會地點："Where will the club members meet?"，答案為 Room 12。'
    }
  },
  {
    code: 'U02-LSP3-S3-047',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 3,
    questionType: 'choice',
    passageTitle: 'LS Part 3 · Joining the School Photography Club',
    instruction: 'Listen to Holly and Leo talking about joining the school photography club. For each question, choose the correct answer (A, B or C).',
    prompt: 'How much does a student need to pay to join the Photography Club for the term?',
    options: [
      { key: 'A', text: '£5 for printing paper' },
      { key: 'B', text: '£12 for club membership' },
      { key: 'C', text: 'It is completely free' }
    ],
    answer: 'C',
    audioLines: [
      { speaker: 'Holly', role: 'Girl', text: 'Hi Leo! I\'m thinking of joining an after-school activity this term. Would you like to join the school Photography Club with me?', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'I\'d love to! I really like taking pictures of birds and flowers with my smartphone. But when do they meet? I have swimming training on Friday afternoons and guitar lessons on Saturday mornings.', isClue: false, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'Don\'t worry! They used to meet on Friday afternoons, but this term meetings are every Wednesday from 3.45 to 5.00 in Room 12.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'Wednesday is perfect for me! Do we have to pay a membership fee? The Drama Club asked for twelve pounds, and Art Club charges five pounds for printing paper.', isClue: false, isTrap: true },
      { speaker: 'Holly', role: 'Girl', text: 'No, joining the Photography Club is completely free because the school parent association bought all the cameras and printers!', isClue: true, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'That\'s fantastic! Do we need to bring our own cameras?', isClue: true, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'You can use your smartphone, or borrow one of the school digital cameras. Also, our club teacher said there is a wildlife photo competition next week! The winning student will receive two tickets to the regional wildlife park!', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'Wow, tickets to the wildlife park! I thought the prize would just be a camera backpack. Let\'s go to Room 12 right now to sign our names!', isClue: false, isTrap: false }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 3 長對話測驗多重數字干擾（Multiple amounts comparison）。對話中連提 12 鎊（戲劇社）與 5 鎊（美術社），最後揭曉攝影社因家長會贊助而「完全免費」，測驗考生不被數字牽著鼻子走的能力。',
      correctReason: '✅ 【為什麼選 (C) It is completely free 是對的？】\nHolly 明確回答："No, joining the Photography Club is completely free because the school parent association bought all the cameras and printers!"，完全免費，因此選 C。',
      distractorAnalysis: {
        'A': '❌ 【A 選項 £5 陷阱】5 鎊是美術社 (Art Club) 收取相片紙的費用，並非攝影社費用。',
        'B': '❌ 【B 選項 £12 陷阱】12 鎊是戲劇社 (Drama Club) 收取的社員會費，並非攝影社費用。'
      }
    },
    extensionStudy: {
      synonyms: [
        'completely free = at no cost / free of charge（完全免費、不收任何費用）',
        'parent association = PTA / parents\' organisation（家長會）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n費用詢問句型：\n• Do we have to pay a membership fee?\n• How much does it cost to join...?\n• It is free of charge = You don\'t need to pay anything.',
      examVariations: '🔮 【下次考場可能變形】\n選項可能換成同義片語："Members pay nothing" 或 "There is no charge"。'
    }
  },
  {
    code: 'U02-LSP3-S4-048',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'listening',
    ketPart: 'LSP3',
    ketPartName: 'LS Part 3 · 聽力長對話理解',
    difficulty: 4,
    questionType: 'choice',
    passageTitle: 'LS Part 3 · Joining the School Photography Club',
    instruction: 'Listen to Holly and Leo talking about joining the school photography club. For each question, choose the correct answer (A, B or C).',
    prompt: 'What prize can the winner of this month\'s photography competition receive?',
    options: [
      { key: 'A', text: 'A waterproof backpack' },
      { key: 'B', text: 'A pair of tickets to a wildlife park' },
      { key: 'C', text: 'A new digital camera' }
    ],
    answer: 'B',
    audioLines: [
      { speaker: 'Holly', role: 'Girl', text: 'Hi Leo! I\'m thinking of joining an after-school activity this term. Would you like to join the school Photography Club with me?', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'I\'d love to! I really like taking pictures of birds and flowers with my smartphone. But when do they meet? I have swimming training on Friday afternoons and guitar lessons on Saturday mornings.', isClue: false, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'Don\'t worry! They used to meet on Friday afternoons, but this term meetings are every Wednesday from 3.45 to 5.00 in Room 12.', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'Wednesday is perfect for me! Do we have to pay a membership fee? The Drama Club asked for twelve pounds, and Art Club charges five pounds for printing paper.', isClue: false, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'No, joining the Photography Club is completely free because the school parent association bought all the cameras and printers!', isClue: false, isTrap: false },
      { speaker: 'Leo', role: 'Boy', text: 'That\'s fantastic! Do we need to bring our own cameras?', isClue: false, isTrap: false },
      { speaker: 'Holly', role: 'Girl', text: 'You can use your smartphone, or borrow one of the school digital cameras. Also, our club teacher said there is a wildlife photo competition next week! The winning student will receive two tickets to the regional wildlife park!', isClue: true, isTrap: true },
      { speaker: 'Leo', role: 'Boy', text: 'Wow, tickets to the wildlife park! I thought the prize would just be a camera backpack. Let\'s go to Room 12 right now to sign our names!', isClue: true, isTrap: true }
    ],
    explanation: {
      examPurpose: '🎯 【出題目的】KET Listening Part 3 長對話末尾測驗競賽獎品（Competition prize）。對話中穿插學校器材（digital cameras）與個人猜測（backpack），測驗考生能否鎖定老師正式公布的真實獎勵。',
      correctReason: '✅ 【為什麼選 (B) A pair of tickets to a wildlife park 是對的？】\nHolly 引述指導老師的話："The winning student will receive two tickets to the regional wildlife park!"，two tickets 即為 a pair of tickets（兩張門票），完全對應選項 B。',
      distractorAnalysis: {
        'A': '❌ 【A 選項相機背包陷阱】Leo 說 "I thought the prize would just be a camera backpack"（我原本以為獎品只會是一個相機背包），這只是他個人的先驗猜想，並非真實獎品。',
        'C': '❌ 【C 選項數位相機陷阱】Holly 提到社員可以借用學校的數位相機（borrow one of the school digital cameras），但這是日常社團設備，不是比賽獎品。'
      }
    },
    extensionStudy: {
      synonyms: [
        'two tickets = a pair of tickets（兩張票券）',
        'wildlife park = nature safari park / animal sanctuary（野生動物園、自然保護區）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n量詞 pair 的靈活運用：\n• a pair of tickets（一對/兩張票）\n• a pair of trainers（一雙運動鞋）\n• a pair of glasses（一副眼鏡）。',
      examVariations: '🔮 【下次考場可能變形】\n若競賽主題變換，獎品可能為 a gift voucher for books（書店禮券）或 a silver trophy（銀質獎盃）。'
    }
  },

  // =========================================================================
  // 14. SPP2: 口說五圖互動討論 (1 題: 049)
  // 5 種休閒愛好討論卡 (攝影, 露營, 西洋棋, 演戲, 帆船)
  // 附 13/15 盾雙人對話範本、考官追問應對與評分指引
  // =========================================================================
  {
    code: 'U02-SPP2-S3-049',
    unitId: 'u2',
    unitLabel: 'Unit 2 休閒時光',
    section: 'speaking',
    ketPart: 'SPP2',
    ketPartName: 'SP Part 2 · 口說五圖互動討論',
    difficulty: 3,
    questionType: 'speaking',
    image: 'assets/images/u2/u2_hobbies_clubs.jpg',
    passageTitle: 'SP Part 2 · Interactive Discussion on 5 Free-Time Hobbies',
    instruction: 'In Speaking Part 2, you and your partner look at five pictures showing different hobbies (photography, camping, chess, acting, sailing). Discuss whether you like these hobbies, explain why or why not, and answer the examiner\'s follow-up question.',
    prompt: 'Examiner: "Now, in this part of the test you are going to talk together. Here are some pictures that show different hobbies and free-time activities. Do you like these different hobbies? Say why or why not. I\'ll say that again. Do you like these different hobbies? Say why or why not. All right? Now, talk together."',
    options: null,
    answer: ['Speaking Task: Evaluated by CEFR A2 Speaking Rubric (Interactive Communication & Discourse Management)'],
    modelAnswers: {
      checklist: [
        'Interactive Discussion (雙向互動): 考生是否能主動提出想法，並詢問搭檔意見（如 "What do you think about...?" / "Do you agree?"）？',
        'Coverage of Hobbies (五項愛好覆蓋): 是否針對五種愛好（photography, camping, chess, acting, sailing）表達喜好並給出具體理由（Why / Why not）？',
        'Examiner Follow-up (考官個人追問): 考官提問 "Which of these hobbies do you like best?" 時，是否能給予完整 2–3 句論述？',
        'Language & Connectors (語言豐富度): 是否自然運用 I think / In my opinion / because / although / but 展現 A2 銜接技巧？'
      ],
      band13: 'Candidate A: "Do you like photography?"\nCandidate B: "Yes, I like taking pictures on my phone because it is fun. Do you like camping?"\nCandidate A: "No, I don\'t like camping because sleeping in a tent is cold. What about chess?"\nCandidate B: "I like chess, but it is difficult. Acting is better because you can act with friends. Do you like sailing?"\nCandidate A: "Yes, sailing is exciting on sunny days."\n(達到 KET 13 盾標準，句型簡短但有完成互動)',
      band15: 'Candidate A: "Shall we start with photography? I find taking photos really creative because you can capture beautiful sunsets and birds. Do you agree?"\nCandidate B: "Definitely! I love taking photos too, especially when I travel. But what do you think about forest camping?"\nCandidate A: "To be honest, I\'m not very keen on camping because it can be uncomfortable and cold when it rains. I much prefer indoor hobbies like drama and acting. What about you?"\nCandidate B: "I love drama! Acting in plays builds confidence. However, I also enjoy quiet games like chess because they make you think strategically. Sailing looks fantastic, but it requires expensive lessons and equipment."\nCandidate A: "That\'s true! So which hobby do you like best?"\nCandidate B: "I definitely think photography is the most enjoyable because anyone can do it anywhere!"\n(展現靈活互動、多元論證與精準連接詞之 15 盾頂尖水準)'
    },
    explanation: {
      examPurpose: '🎯 【出題目的】KET Speaking Part 2 是雙人合作討論（Collaborative Task）。考官重點評估兩大項目：互動溝通 (Interactive Communication) 與話題展開 (Discourse Management)。很多學生誤以為只要自己一直講，忽略了「輪流發言 (turn-taking)」與「主動徵詢搭檔看法 (Do you agree? / What about you?)」。',
      correctReason: '✅ 【15 盾頂尖範本亮點解析】\n1. 主動發球與接球：使用 "Shall we start with...?", "Do you agree?", "What do you think about...?" 等句型引導對話。\n2. 理由具體多元：不只說 "It is good"，而是提出 capture beautiful sunsets, builds confidence, requires expensive equipment 等深層理由。\n3. 對比與總結：在考官收尾時順利評選出最推薦的愛好 (most enjoyable)，完全符合 CEFR A2 官方評分規準。',
      commonTraps: [
        { wrong: '自顧自獨白長篇大論，不理會搭檔或打斷對方', whyWrong: '⚠️ 致命傷！Part 2 評分標準核心為 "Interact with partner"。一人獨霸發言會被重扣 Interactive Communication 分數！' },
        { wrong: '只用單字或極短回答（如 "Yes, I like.", "No, boring."）', whyWrong: '⚠️ 每個喜好都必須附帶至少一個具體理由（because / but / so）。單字回答會被降為 A1 初級！' }
      ]
    },
    extensionStudy: {
      synonyms: [
        'I am keen on = I am fond of / I really enjoy（我熱中於、我很喜歡）',
        'capture sunsets = take pictures of the sky（捕捉日落美景）',
        'builds confidence = makes you feel confident（建立自信心）'
      ],
      grammarCompare: '⚖️ 【Flyers 升 KET 必考盲點】\n表達喜好與徵詢意見的常用片語結構：\n• I prefer [Noun / V-ing] to [Noun / V-ing]（比起…我更喜歡…）\n• What\'s your opinion on...? / How do you feel about...?（你覺得…怎麼樣？）\n• To be honest, I\'m not really into...（老實說，我不太喜歡…）。',
      examVariations: '🔮 【下次考場可能變形】\n討論主題可能變為：5 種假期活動 (beach, theme park, museum, zoo, water park) 或 5 種運動 (swimming, cycling, tennis, skateboarding, basketball)。基本句型公式完全通用！'
    }
  }

];

if (typeof window !== 'undefined') {
  window.KET_EXAM_BANK_U2 = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
