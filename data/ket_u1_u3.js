/**
 * Cambridge English: A2 Key (KET) Preparation System
 * Unit 1 ~ Unit 3 + Revision 1 ~ 3 Complete Structured Database
 * Generated automatically by Phase 2 Pipeline
 */
const KET_DATA = {
  "meta": {
    "bookTitle": "Compact Key for Schools (2nd Edition)",
    "targetShields": 13,
    "targetScaleScore": 135,
    "minPassAccuracy": 0.82,
    "totalUnits": 3,
    "accounts": [
      {
        "id": "rex",
        "name": "Rex",
        "grade": "6年級",
        "role": "student",
        "avatar": "🦁",
        "notes": "主力考生1號：獨立錯題本與 15 盾牌雷達"
      },
      {
        "id": "hugo",
        "name": "Hugo",
        "grade": "5年級",
        "role": "student",
        "avatar": "🐯",
        "notes": "主力考生2號：強化單字字根與詞性提示輔助"
      },
      {
        "id": "test1",
        "name": "家長測試 1",
        "grade": "家長/老師",
        "role": "tester",
        "avatar": "🧪",
        "notes": "功能驗證沙盒，不污染考生數據"
      },
      {
        "id": "test2",
        "name": "訪客測試 2",
        "grade": "訪客備用",
        "role": "tester",
        "avatar": "🛠️",
        "notes": "快速演練與展示"
      }
    ],
    "devices": [
      {
        "id": "ipad_102",
        "name": "iPad 10.2\"",
        "viewportWidth": 1080,
        "viewportHeight": 810,
        "safeHeight": 680,
        "cssClass": "layout-ipad-102"
      },
      {
        "id": "ipad_pro_129",
        "name": "iPad Pro 12.9\"",
        "viewportWidth": 1366,
        "viewportHeight": 1024,
        "safeHeight": 900,
        "cssClass": "layout-ipad-129"
      }
    ]
  },
  "units": [
    {
      "id": "u1",
      "number": 1,
      "title": "My family, my friends & me",
      "topic": "People & Daily life",
      "grammarFocus": [
        "have got",
        "Present simple",
        "Question words"
      ],
      "spreadPages": [
        "assets/pages/u1_p6_p7.jpg",
        "assets/pages/u1_p8_p9.jpg",
        "assets/pages/u1_p10_p11.jpg"
      ],
      "revisionPage": "assets/pages/rev_u1_u2_p78_p79.jpg",
      "images": {
        "familyIntro": "assets/images/u1/u1_family_intro.jpg",
        "sofiaFamilyTree": "assets/images/u1/u1_sofia_family_tree.jpg",
        "readingPart2Boys": "assets/images/u1/u1_reading_part2_boys.jpg",
        "favPlaces": "assets/images/u1/u1_fav_places.jpg",
        "writingPart7Bookshop": "assets/images/u1/u1_writing_part7_bookshop.jpg",
        "writingPart7Exam": "assets/images/u1/u1_writing_part7_exam.jpg",
        "clocks": "assets/images/u1/u1_clocks.jpg",
        "kylePhotoAlbum": "assets/images/u1/u1_kyle_photo_album.jpg",
        "simonIsland": "assets/images/u1/u1_simon_island.jpg",
        "speakingPeopleAF": "assets/images/u1/u1_speaking_people_af.jpg"
      },
      "vocabulary": [
        {
          "word": "unusual",
          "pos": "adj.",
          "zh": "特別的、不尋常的",
          "collocation": "have an unusual family / name / surname",
          "example": "Have you got an unusual family?",
          "tip": "KET 高頻形容詞。注意反義詞為 usual 或 ordinary。"
        },
        {
          "word": "surname",
          "pos": "n.",
          "zh": "姓氏",
          "collocation": "an unusual surname / change one's surname",
          "example": "He hasn't got an unusual surname, it's Roberts.",
          "tip": "同義詞為 last name 或 family name。KET 聽力 Part 1/2 常考姓氏字母拼讀。"
        },
        {
          "word": "nickname",
          "pos": "n.",
          "zh": "綽號、外號",
          "collocation": "have a nickname / give sb a nickname",
          "example": "I've got a nickname. It's Skater Blue because I've got a blue skateboard!",
          "tip": "定義：this isn't your real name, but the name your friends or family call you。"
        },
        {
          "word": "twin",
          "pos": "n.",
          "zh": "雙胞胎（之一）",
          "collocation": "twin brother / twin sister / identical twins",
          "example": "I've got a twin brother and we've got two sisters. They're also twins!",
          "tip": "注意可數名詞單複數：twin 指一人，雙胞胎兩人合稱 twins。"
        },
        {
          "word": "cousin",
          "pos": "n.",
          "zh": "堂（表）兄弟姊妹",
          "collocation": "visit cousins / stay with a cousin",
          "example": "I have cousins in Germany and Australia, so I don't see them very often.",
          "tip": "英文 cousin 不分性別與長幼，皆用同一個單字。"
        },
        {
          "word": "daughter",
          "pos": "n.",
          "zh": "女兒",
          "collocation": "have a daughter / the eldest daughter",
          "example": "Mateo and Paula have got two daughters, Sofia and Ariana.",
          "tip": "反義詞為 son。注意拼字中的 -ugh- 不發音。"
        },
        {
          "word": "son",
          "pos": "n.",
          "zh": "兒子",
          "collocation": "have a son / the youngest son",
          "example": "They haven't got any sons, only daughters.",
          "tip": "反義詞為 daughter。發音與 sun 相同（同音異義詞 homophone）。"
        },
        {
          "word": "parents",
          "pos": "n. pl.",
          "zh": "父母雙親",
          "collocation": "live with parents / both parents",
          "example": "Bastian lives with his parents and his brother in the USA.",
          "tip": "雙親合稱加 -s（parents）；單數 parent 意指父親或母親其中一人。"
        },
        {
          "word": "crowded",
          "pos": "adj.",
          "zh": "擁擠的、熱鬧的",
          "collocation": "a crowded house / a crowded room / crowded streets",
          "example": "Our house is crowded, so I'm never alone or bored.",
          "tip": "由動詞 crowd（聚集）衍生而來，用以形容人滿為患的地方。"
        },
        {
          "word": "alone",
          "pos": "adj./adv.",
          "zh": "獨自一人的",
          "collocation": "be alone / feel alone / live alone",
          "example": "There are seven of us, so I am never alone.",
          "tip": "alone 表客觀「獨自一人」；lonely 表主觀心境「孤獨寂寞」。"
        },
        {
          "word": "look after",
          "pos": "phr v.",
          "zh": "照料、照顧",
          "collocation": "look after children / look after pets / look after grandparents",
          "example": "My grandparents often look after us when my parents are working.",
          "tip": "KET 高頻片語，同義詞為 take care of。聽力與閱讀常考兩者同義代換。"
        },
        {
          "word": "tidy up",
          "pos": "phr v.",
          "zh": "整理、收拾",
          "collocation": "tidy up the house / tidy up the bedroom",
          "example": "Mum and Dad go out to work, so sometimes I tidy up the house.",
          "tip": "動詞片語可分開：tidy the room up 或 tidy up the room。"
        },
        {
          "word": "wake up",
          "pos": "phr v.",
          "zh": "醒來、叫醒",
          "collocation": "wake up early / wake sb up at 7 o'clock",
          "example": "Simon's mum wakes him up at 6.15 every weekday.",
          "tip": "wake up 指意識清醒；get up 指離開床鋪起身。"
        },
        {
          "word": "leave home",
          "pos": "phr.",
          "zh": "出門、離家",
          "collocation": "leave home for school / leave home at 7 a.m.",
          "example": "He leaves home at seven o'clock to walk to the ferry terminal.",
          "tip": "leave 後面接出發地點（home/school），不加介系詞 to。"
        },
        {
          "word": "get home",
          "pos": "phr.",
          "zh": "到家",
          "collocation": "get home from work / get home late",
          "example": "My mother gets home from work at six o'clock in the evening.",
          "tip": "home 為地方副詞，前方不可加介系詞 to（嚴禁寫成 get to home）。"
        },
        {
          "word": "walk to school",
          "pos": "phr.",
          "zh": "步行上學",
          "collocation": "walk to school with friends / walk along the street to school",
          "example": "Mariana doesn't walk to school because it's too far from her house.",
          "tip": "同義代換為 go to school on foot。"
        },
        {
          "word": "curly",
          "pos": "adj.",
          "zh": "捲曲的（指頭髮）",
          "collocation": "short curly hair / have curly hair",
          "example": "Jason's got short, curly hair and blue eyes.",
          "tip": "反義詞為 straight（筆直的）。"
        },
        {
          "word": "straight",
          "pos": "adj.",
          "zh": "筆直的（指頭髮）",
          "collocation": "long straight hair / straight blond hair",
          "example": "Jenny's quite short. She's got long, dark, straight hair and green eyes.",
          "tip": "注意拼字 -aigh-。形容頭髮時反義詞為 curly 或 wavy。"
        },
        {
          "word": "island",
          "pos": "n.",
          "zh": "島嶼",
          "collocation": "live on an island / travel to an island",
          "example": "Simon lives on an island and travels by boat to the mainland every day.",
          "tip": "注意首字母 s 不發音（讀為 /ˈaɪ.lənd/）。介系詞固定搭配 on an island。"
        },
        {
          "word": "hurry up",
          "pos": "phr v.",
          "zh": "趕快、快點",
          "collocation": "hurry up or you'll miss the bus",
          "example": "His dad shouted, 'Hurry up! You are going to miss the bus!'",
          "tip": "寫作 Part 7 常用的對話呼喊動詞，能生動呈現趕時間情境。"
        }
      ],
      "commonMistakes": [
        {
          "id": "u1_cm_hg_1",
          "wrong": "Her eyes are green and she gots long, black hair.",
          "correct": "Her eyes are green and she has got long, black hair.",
          "errorSpan": "she gots",
          "correction": "she has got / she's got",
          "rule": "第三人稱單數主詞（she/he/it）搭配 has got，動詞 got 本身絕不可加 -s 寫成 gots。"
        },
        {
          "id": "u1_cm_hg_2",
          "wrong": "Please help her if she got any problems.",
          "correct": "Please help her if she has got any problems.",
          "errorSpan": "she got",
          "correction": "she has got / she's got",
          "rule": "現在式表示「擁有」時，got 前方不可省略助動詞 has/have。"
        },
        {
          "id": "u1_cm_hg_3",
          "wrong": "I'm got some friends. My best friend is Juan Manuel.",
          "correct": "I've got some friends. My best friend is Juan Manuel.",
          "errorSpan": "I'm got",
          "correction": "I've got / I have got",
          "rule": "have got 的縮寫是 've got（I've got），不可誤混為 be 動詞的縮寫 'm got（I'm got）。"
        },
        {
          "id": "u1_cm_hg_4",
          "wrong": "We had to move because my father gets a new job here.",
          "correct": "We had to move because my father has got a new job here.",
          "errorSpan": "gets",
          "correction": "has got / 's got",
          "rule": "在英式英語中，表示目前獲得或擁有新工作、物品時，習慣使用 has got 表達狀態。"
        },
        {
          "id": "u1_cm_ps_1",
          "wrong": "The class starts at 2 p.m. and finishs at 3 p.m.",
          "correct": "The class starts at 2 p.m. and finishes at 3 p.m.",
          "errorSpan": "finishs",
          "correction": "finishes",
          "rule": "動詞字尾為 -s, -sh, -ch, -x 時，第三人稱單數現在式必須加 -es（finish -> finishes），不可直接加 -s。"
        },
        {
          "id": "u1_cm_ps_2",
          "wrong": "The room don't have any furniture.",
          "correct": "The room doesn't have any furniture.",
          "errorSpan": "don't have",
          "correction": "doesn't have",
          "rule": "主詞 the room 為第三人稱單數（it），現在簡單式否定句助動詞應使用 doesn't，而非 don't。"
        },
        {
          "id": "u1_cm_ps_3",
          "wrong": "My mother want me to be at home at 9 p.m.",
          "correct": "My mother wants me to be at home at 9 p.m.",
          "errorSpan": "want",
          "correction": "wants",
          "rule": "主詞 my mother 為第三人稱單數（she），一般動詞現在式肯定句字尾必須加上 -s（wants）。"
        },
        {
          "id": "u1_cm_ps_4",
          "wrong": "My sister do this sport and she's very good.",
          "correct": "My sister does this sport and she's very good.",
          "errorSpan": "do",
          "correction": "does",
          "rule": "主詞 my sister 為第三人稱單數（she），動詞 do 需變形為 does。"
        },
        {
          "id": "u1_cm_ps_5",
          "wrong": "What you think about this class?",
          "correct": "What do you think about this class?",
          "errorSpan": "What you think",
          "correction": "What do you think",
          "rule": "現在簡單式特殊疑問句結構為「疑問詞 + 助動詞 do/does + 主詞 + 原形動詞」，不可遺漏助動詞 do。"
        },
        {
          "id": "u1_cm_ps_6",
          "wrong": "It doesnt matter that you can't find the information.",
          "correct": "It doesn't matter that you can't find the information.",
          "errorSpan": "doesnt",
          "correction": "doesn't",
          "rule": "否定助動詞縮寫必須正確標記撇號 apostrophe（doesn't），KET 寫作中遺漏標點符號會扣語言分。"
        }
      ],
      "exercises": {
        "readingPart2": {
          "title": "Reading Part 2 - Three Teenagers Talking About Their Families",
          "examTip": "In Part 2, read the three texts carefully. Don't just match words in the text with the questions. A text can include words from the question and be the wrong answer.",
          "image": "assets/images/u1/u1_reading_part2_boys.jpg",
          "texts": {
            "leo": {
              "name": "Leo",
              "code": "A",
              "content": "There are a lot of us in my family, and I love it. Our house is crowded, so I'm never alone or bored. I've got a brother and three sisters. My brother and I have one bedroom, and my sisters have another. Mum and Dad work a lot, and my grandparents live near us, so they often look after us when my parents are working. My grandfather is from France, and he sometimes helps me with my French homework."
            },
            "bastian": {
              "name": "Bastian",
              "code": "B",
              "content": "I live with my mum, dad and brother. My brother and I have our own bedrooms. He's only a year older than me, so we do lots of things together, which is fun. We've got an aunt and uncle who live in the same street as us, together with their daughter - our cousin - and our grandparents. Dad works in an office, and Mum is a teacher. She was born in Italy, but she came to live here in the USA a long time ago."
            },
            "callum": {
              "name": "Callum",
              "code": "C",
              "content": "My family is big, but we don't all live in the same place. I have cousins in Germany and Australia, so I don't see them very often. My parents, my sister and I share a house with my grandma, but my sister and I have our own bedrooms. Mum and Dad go out to work, and they don't have much free time, so sometimes I tidy up the house. Mum likes it when I do that."
            }
          },
          "questions": [
            {
              "id": "r_p2_q1",
              "number": 1,
              "question": "Which person has got family members in different countries?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "I have cousins in Germany and Australia, so I don't see them very often.",
              "explanation": "Callum 明確提到他的堂表兄弟姊妹住在德國 (Germany) 和澳洲 (Australia)，分佈在不同國家。",
              "trapAnalysis": "陷阱選項：Leo 提到祖父來自法國 (My grandfather is from France)，但他現在住在附近 (live near us)；Bastian 提到媽媽出生於義大利 (born in Italy)，但很久以前就搬來美國 (USA) 同住了。只有 Callum 的親戚目前人在國外。"
            },
            {
              "id": "r_p2_q2",
              "number": 2,
              "question": "Which person shares a bedroom with another member of his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "A",
              "locationQuote": "My brother and I have one bedroom, and my sisters have another.",
              "explanation": "Leo 和他的哥哥/弟弟共用一間臥室 (have one bedroom)，三個姊妹共用另一間。",
              "trapAnalysis": "干擾項：Bastian 說 'My brother and I have our own bedrooms'（各自有獨立房間）；Callum 說 'my sister and I have our own bedrooms'。兩人皆為 own bedrooms，並未 share。"
            },
            {
              "id": "r_p2_q3",
              "number": 3,
              "question": "Which person has got a cousin who lives near him?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "B",
              "locationQuote": "We've got an aunt and uncle who live in the same street as us, together with their daughter - our cousin - and our grandparents.",
              "explanation": "Bastian 提到姑叔一家人以及他們的表妹 (their daughter - our cousin) 住在他家同一條街上 (in the same street as us)，近在咫尺。",
              "trapAnalysis": "干擾項：Callum 雖然有表親，但住在德國與澳洲 (don't see them very often)；Leo 只有祖父母住在附近，未提及表親。"
            },
            {
              "id": "r_p2_q4",
              "number": 4,
              "question": "Which person helps someone in his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "Mum and Dad go out to work, and they don't have much free time, so sometimes I tidy up the house. Mum likes it when I do that.",
              "explanation": "Callum 在父母忙於工作時，主動幫忙打掃整理家裡 (tidy up the house)，為家人分擔家務。",
              "trapAnalysis": "極高頻陷阱：Leo 說 'he [grandfather] sometimes helps me with my French homework'，這是祖父幫助 Leo，而不是 Leo 幫助家人！題目主詞為 'Which person helps someone'（主動幫人）。"
            },
            {
              "id": "r_p2_q5",
              "number": 5,
              "question": "Which person lives with a grandparent?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "My parents, my sister and I share a house with my grandma...",
              "explanation": "Callum 全家與祖母同住在一棟房子裡 (share a house with my grandma)。",
              "trapAnalysis": "干擾項：Leo 說 'my grandparents live near us'（祖父母住附近，非同住）；Bastian 說祖父母住在同一條街上 ('together with... our grandparents')，亦非同住一屋。"
            },
            {
              "id": "r_p2_q6",
              "number": 6,
              "question": "Which person enjoys spending time with one member of his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "B",
              "locationQuote": "He's only a year older than me, so we do lots of things together, which is fun.",
              "explanation": "Bastian 提到哥哥只大他一歲，兩人經常一起做很多事，非常有趣開心 (which is fun)。",
              "trapAnalysis": "干擾項：Leo 雖然說喜歡熱鬧的家庭 (There are a lot of us in my family, and I love it)，但並未針對特定一位家人指出享受相處時光；Bastian 精確指涉其哥哥 (brother)。"
            },
            {
              "id": "r_p2_q7",
              "number": 7,
              "question": "Which person thinks it is good to have a big family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "A",
              "locationQuote": "There are a lot of us in my family, and I love it. Our house is crowded, so I'm never alone or bored.",
              "explanation": "Leo 表示家裡有很多人且他非常熱愛 (I love it)，因為家裡熱鬧，他永遠不會感到無聊或孤單。",
              "trapAnalysis": "干擾項：Callum 雖然也說 'My family is big'，但下一句接的是 'but we don't all live in the same place'，並未表達熱愛大家庭的讚賞心態；只有 Leo 明確肯定大家庭的好處。"
            }
          ]
        },
        "writingPart7": {
          "part": 7,
          "title": "Writing Part 7 - 3-Picture Story (Late for the School Bus)",
          "picturePrompt": "assets/images/u1/u1_writing_part7_exam.jpg",
          "storyTitle": "Rushing for the School Bus",
          "blocks": [
            {
              "scene": "Picture 1: Boy relaxing in his bedroom",
              "options": [
                "One morning, Jack was sitting on his bed in his bedroom.",
                "He was wearing his uniform and listening to music on his phone.",
                "He felt relaxed and didn't check what time it was."
              ],
              "keyVocab": [
                "bedroom",
                "on his bed",
                "relaxing",
                "uniform"
              ],
              "hint": "說明時間背景、人物在臥室放鬆、未注意時間。"
            },
            {
              "scene": "Picture 2: Father pointing at the wall clock in the kitchen",
              "options": [
                "Suddenly, his father rushed into the kitchen and pointed at the wall clock.",
                "It was already half past eight! His sister was quickly finishing her breakfast.",
                "His father shouted angrily, 'Look at the time! You're going to miss the bus!'"
              ],
              "keyVocab": [
                "kitchen",
                "pointed at the clock",
                "half past eight",
                "eating breakfast"
              ],
              "hint": "說明圖二轉折：爸爸指著時鐘提醒快遲到，妹妹正在吃早餐。"
            },
            {
              "scene": "Picture 3: Running down the street to catch the red school bus",
              "options": [
                "Jack and his sister quickly picked up their school bags and ran out of the house.",
                "The big red school bus was already leaving the stop down the street.",
                "His sister waved her arm and ran as fast as she could to catch it."
              ],
              "keyVocab": [
                "ran out of the house",
                "along the street",
                "red school bus",
                "waved her hand",
                "catch the bus"
              ],
              "hint": "說明結果：抓起書包衝出家門，朝著即將開走的紅色校車奔跑招手。"
            }
          ],
          "rubricChecklist": {
            "content": {
              "maxScore": 5,
              "name": "Content (內容完整性)",
              "requirements": [
                "Mention Picture 1: 男孩在臥室床上放鬆/聽音樂，沒有意識到時間流逝。",
                "Mention Picture 2: 爸爸在廚房憤怒或著急地指著時鐘，妹妹正在吃早餐/麥片。",
                "Mention Picture 3: 衝出門跑向街道，向即將開走的紅色公車招手趕車。"
              ]
            },
            "organisation": {
              "maxScore": 5,
              "name": "Organisation (組織與連貫性)",
              "requirements": [
                "故事符合三張圖的時間邏輯順序（起因 -> 發展 -> 結果）。",
                "正確使用時間連接詞與副詞：One morning, Suddenly, Then, At that moment, Finally。",
                "字數必須達到 35 字以上（建議 45~60 字，既無贅字又能拿滿分）。"
              ]
            },
            "language": {
              "maxScore": 5,
              "name": "Language (語言與文法精準度)",
              "requirements": [
                "全文時態保持一致（強烈建議使用過去式 Past Simple / Past Continuous）。",
                "精準使用地方介系詞：in his bedroom, at the clock, out of the house, along the street。",
                "拼字與標點零失誤（breakfast, clock, caught, uniform）。"
              ]
            }
          },
          "sampleAnswer": {
            "merit13": {
              "level": "保底 13 盾標準範文 (Grade B Merit)",
              "wordCount": 43,
              "text": "One morning, Jack sat on his bed and listened to music. Then his father pointed at the clock in the kitchen and said they were late. Jack and his sister ran out of the house. His sister waved to catch the red bus.",
              "breakdown": "結構精簡，完整囊括三幅圖要素，時態統一使用過去式 (sat, listened, pointed, ran, waved)，無文法錯誤，字數 43 字順利突破 35 字門檻。"
            },
            "distinction15": {
              "level": "滿分 15 盾卓越範文 (Grade A Distinction)",
              "wordCount": 61,
              "text": "One morning, Jack was sitting on his bed in his bedroom, relaxing with music. Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly ate her breakfast. They rushed out of the house, and his sister ran along the street, waving her hand to catch the departing red school bus.",
              "breakdown": "使用過去進行式 (was sitting) 營造背景氛圍；轉折副詞 (Suddenly) 帶出緊張感；搭配多元高頻詞彙 (relaxing, rushed, along the street, waving her hand, departing)；介系詞運用精準無比。"
            }
          },
          "sampleAnswers": {
            "guaranteed13Shields": {
              "level": "保底 13 盾標準範文 (Grade B Merit)",
              "wordCount": 43,
              "text": "One morning, Jack sat on his bed and listened to music. Then his father pointed at the clock in the kitchen and said they were late. Jack and his sister ran out of the house. His sister waved to catch the red bus.",
              "breakdown": "結構精簡，完整囊括三幅圖要素，時態統一使用過去式 (sat, listened, pointed, ran, waved)，無文法錯誤，字數 43 字順利突破 35 字門檻。"
            },
            "fullMarks15Shields": {
              "level": "滿分 15 盾卓越範文 (Grade A Distinction)",
              "wordCount": 61,
              "text": "One morning, Jack was sitting on his bed in his bedroom, relaxing with music. Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly ate her breakfast. They rushed out of the house, and his sister ran along the street, waving her hand to catch the departing red school bus.",
              "breakdown": "使用過去進行式 (was sitting) 營造背景氛圍；轉折副詞 (Suddenly) 帶出緊張感；搭配多元高頻詞彙 (relaxing, rushed, along the street, waving her hand, departing)；介系詞運用精準無比。"
            }
          },
          "practiceTask": {
            "title": "Practice 3-Picture Story (Boy in Bookshop)",
            "image": "assets/images/u1/u1_writing_part7_bookshop.jpg",
            "description": "Picture 1: A boy bought a book in a shop. Picture 2: He walked away and left his wallet on the counter. Picture 3: The shop assistant ran after him and gave the wallet back.",
            "sampleStory": "A boy bought a book in a shop. He paid the money and walked out, but he forgot his wallet on the desk. The friendly shop assistant picked it up, ran outside and gave the wallet back to the boy."
          }
        },
        "listeningPart3": {
          "part": 3,
          "title": "Listening Part 3 - Simon's Journey to School",
          "examTip": "Sometimes the answer is a time. Say the times in the answers quietly to yourself before you listen.",
          "image": "assets/images/u1/u1_simon_island.jpg",
          "audioTrack": "Track 04",
          "questions": [
            {
              "id": "l_p3_exam_1",
              "number": 1,
              "question": "Amanda's tired because she",
              "options": [
                {
                  "label": "A",
                  "text": "watches TV in bed."
                },
                {
                  "label": "B",
                  "text": "goes to sleep very late."
                },
                {
                  "label": "C",
                  "text": "wakes up early."
                }
              ],
              "answer": "B",
              "locationQuote": "Amanda: 'No, I don't have to get up early, but I never go to sleep until after midnight!'",
              "explanation": "Amanda 澄清她不用早起，但她總是很晚才睡覺 (never go to sleep until after midnight -> goes to sleep very late)。",
              "trapAnalysis": "陷阱 A：Amanda 說在客廳看電視，不是在床上看 (watches TV in bed)；陷阱 C：早起的是 Simon (6.15)，Amanda 不需要早起。"
            },
            {
              "id": "l_p3_exam_2",
              "number": 2,
              "question": "What time does the boat to Simon's school leave?",
              "options": [
                {
                  "label": "A",
                  "text": "6.15"
                },
                {
                  "label": "B",
                  "text": "7.00"
                },
                {
                  "label": "C",
                  "text": "7.30"
                }
              ],
              "answer": "C",
              "locationQuote": "Simon: 'The ferry leaves the island at half past seven, so I have to be at the harbour before then.'",
              "explanation": "開往學校的船班在 7 點 30 分 (half past seven = 7.30) 出發。",
              "trapAnalysis": "數字陷阱：6.15 是起床時間 (wake up)，7.00 是離家時間 (leave home)，三個時間都在對話中出現，需精確辨析動作主詞與動詞。"
            },
            {
              "id": "l_p3_exam_3",
              "number": 3,
              "question": "How old is Simon?",
              "options": [
                {
                  "label": "A",
                  "text": "11"
                },
                {
                  "label": "B",
                  "text": "12"
                },
                {
                  "label": "C",
                  "text": "14"
                }
              ],
              "answer": "B",
              "locationQuote": "Simon: 'I'm twelve now, so this is my first year going across to the secondary school on the mainland.'",
              "explanation": "Simon 親口說他現在 12 歲 (I'm twelve now)。",
              "trapAnalysis": "數字陷阱：11 歲是小學畢業年齡 (Children leave the island primary school at eleven)；14 歲是他哥哥的年齡 (My older brother is fourteen)。"
            },
            {
              "id": "l_p3_exam_4",
              "number": 4,
              "question": "Simon eats his dinner",
              "options": [
                {
                  "label": "A",
                  "text": "at his aunt's house."
                },
                {
                  "label": "B",
                  "text": "at home."
                },
                {
                  "label": "C",
                  "text": "at school."
                }
              ],
              "answer": "A",
              "locationQuote": "Simon: 'After school clubs finish, I go to my Aunt Tanya's house on the mainland and have dinner there before taking the evening boat back.'",
              "explanation": "Simon 放學後會到住在本島的姑姑 Tanya 家吃晚餐 (at his aunt's house)。",
              "trapAnalysis": "干擾項：他在學校吃的是午餐 (have lunch at school)；他在家吃的是早餐，回到家時已經很晚了。"
            },
            {
              "id": "l_p3_exam_5",
              "number": 5,
              "question": "Amanda thinks Simon's day is",
              "options": [
                {
                  "label": "A",
                  "text": "exciting."
                },
                {
                  "label": "B",
                  "text": "fun."
                },
                {
                  "label": "C",
                  "text": "unusual."
                }
              ],
              "answer": "C",
              "locationQuote": "Amanda: 'Taking a boat across the sea every morning and evening? Your daily routine sounds really unusual!'",
              "explanation": "Amanda 認為每天搭船上學的生活非常不尋常、特別 (really unusual)。",
              "trapAnalysis": "詞彙陷阱：Simon 提到搭船有時很刺激 (exciting) 或好玩 (fun)，但題目問的是 Amanda 的看法 ('Amanda thinks Simon's day is...')，Amanda 使用的評價詞為 unusual。"
            }
          ],
          "tapescript": [
            {
              "speaker": "Amanda",
              "text": "Hi Simon, you look wide awake! I'm completely exhausted today.",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Why Amanda? Do you have to get up really early in the morning like me?",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 1,
              "trapType": "Opposite / Not applicable",
              "explanation": "Simon 提問 Amanda 是否早起，容易誤導考生選擇 C。"
            },
            {
              "speaker": "Amanda",
              "text": "No, not at all! I wake up at eight o'clock. But I watched a film on television in the living room, and then I went to sleep very late, past midnight!",
              "isKey": true,
              "targetQuestion": 1,
              "explanation": "正解句：Amanda 明確指出自己很晚才睡 (went to sleep very late, past midnight)。排除 A（在客廳看電視非床上）與 C（起床時間是 8 點不早）。"
            },
            {
              "speaker": "Simon",
              "text": "Wow, I could never do that. My mum knocks on my bedroom door and wakes me up at quarter past six.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 6.15，但這是 mum wakes me up 的時間，不是開船時間。"
            },
            {
              "speaker": "Amanda",
              "text": "Quarter past six? That's so early! Why do you need to be up then?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Well, I have breakfast and get dressed, and then I leave home at seven o'clock.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 7.00，但這是 leave home（離家出門）的時間。"
            },
            {
              "speaker": "Amanda",
              "text": "And how do you get across the sea to the mainland?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "I walk down to the port. The boat to school leaves the island at half past seven sharp, so I can't be late.",
              "isKey": true,
              "targetQuestion": 2,
              "explanation": "正解句：船在 7 點半 (half past seven = 7.30) 出航。"
            },
            {
              "speaker": "Amanda",
              "text": "Do all children on your island take the boat to school?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Only when we are older. The island primary school is for kids up to eleven. But I'm twelve now, so this year I have to go to the big school across the water.",
              "isKey": true,
              "targetQuestion": 3,
              "explanation": "正解句：Simon 親自說明 'I'm twelve now'。"
            },
            {
              "speaker": "Amanda",
              "text": "Does your older brother go with you?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Yes, he's fourteen, so he's been doing this for two years.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 3,
              "trapType": "Wrong person's age",
              "explanation": "出現數字 14，但這是哥哥的年齡，並非 Simon 本人。"
            },
            {
              "speaker": "Amanda",
              "text": "And what happens after school? Do you take the boat straight back home?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "We have football practice until five o'clock. Then I go to my Aunt Tanya's house on the mainland. I eat my dinner with her, and then catch the seven o'clock evening ferry home.",
              "isKey": true,
              "targetQuestion": 4,
              "explanation": "正解句：Simon 在本島姑姑 Tanya 家吃晚餐 (eat dinner with her at Aunt Tanya's house)。"
            },
            {
              "speaker": "Amanda",
              "text": "That's convenient! Some people might find taking boats every day exciting or fun, but I think your school day is really unusual!",
              "isKey": true,
              "targetQuestion": 5,
              "explanation": "正解句：Amanda 表達自己的真實看法為 'really unusual'。排除 A (exciting) 與 B (fun)。"
            },
            {
              "speaker": "Simon",
              "text": "Haha, I suppose it is unusual, but for islanders it's just normal life!",
              "isKey": false,
              "isDistractor": false
            }
          ],
          "distractorXray": [
            {
              "speaker": "Simon",
              "text": "Why Amanda? Do you have to get up really early in the morning like me?",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 1,
              "trapType": "Opposite / Not applicable",
              "explanation": "Simon 提問 Amanda 是否早起，容易誤導考生選擇 C。"
            },
            {
              "speaker": "Amanda",
              "text": "No, not at all! I wake up at eight o'clock. But I watched a film on television in the living room, and then I went to sleep very late, past midnight!",
              "isKey": true,
              "targetQuestion": 1,
              "explanation": "正解句：Amanda 明確指出自己很晚才睡 (went to sleep very late, past midnight)。排除 A（在客廳看電視非床上）與 C（起床時間是 8 點不早）。"
            },
            {
              "speaker": "Simon",
              "text": "Wow, I could never do that. My mum knocks on my bedroom door and wakes me up at quarter past six.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 6.15，但這是 mum wakes me up 的時間，不是開船時間。"
            },
            {
              "speaker": "Simon",
              "text": "Well, I have breakfast and get dressed, and then I leave home at seven o'clock.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 7.00，但這是 leave home（離家出門）的時間。"
            },
            {
              "speaker": "Simon",
              "text": "I walk down to the port. The boat to school leaves the island at half past seven sharp, so I can't be late.",
              "isKey": true,
              "targetQuestion": 2,
              "explanation": "正解句：船在 7 點半 (half past seven = 7.30) 出航。"
            },
            {
              "speaker": "Simon",
              "text": "Only when we are older. The island primary school is for kids up to eleven. But I'm twelve now, so this year I have to go to the big school across the water.",
              "isKey": true,
              "targetQuestion": 3,
              "explanation": "正解句：Simon 親自說明 'I'm twelve now'。"
            },
            {
              "speaker": "Simon",
              "text": "Yes, he's fourteen, so he's been doing this for two years.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 3,
              "trapType": "Wrong person's age",
              "explanation": "出現數字 14，但這是哥哥的年齡，並非 Simon 本人。"
            },
            {
              "speaker": "Simon",
              "text": "We have football practice until five o'clock. Then I go to my Aunt Tanya's house on the mainland. I eat my dinner with her, and then catch the seven o'clock evening ferry home.",
              "isKey": true,
              "targetQuestion": 4,
              "explanation": "正解句：Simon 在本島姑姑 Tanya 家吃晚餐 (eat dinner with her at Aunt Tanya's house)。"
            },
            {
              "speaker": "Amanda",
              "text": "That's convenient! Some people might find taking boats every day exciting or fun, but I think your school day is really unusual!",
              "isKey": true,
              "targetQuestion": 5,
              "explanation": "正解句：Amanda 表達自己的真實看法為 'really unusual'。排除 A (exciting) 與 B (fun)。"
            }
          ],
          "prepTask": {
            "track": "Track 03",
            "description": "Listen to the first part of the conversation and choose the correct times.",
            "questions": [
              {
                "id": "l_p3_prep_1",
                "question": "What time does Simon wake up?",
                "options": [
                  {
                    "label": "a",
                    "text": "6.15"
                  },
                  {
                    "label": "b",
                    "text": "7.00"
                  }
                ],
                "answer": "a",
                "explanation": "Simon 說媽媽在 6 點 15 分叫醒他 (My mum wakes me up at quarter past six)。7 點是他離家出門的時間。"
              },
              {
                "id": "l_p3_prep_2",
                "question": "What time does Simon leave home?",
                "options": [
                  {
                    "label": "a",
                    "text": "7.00"
                  },
                  {
                    "label": "b",
                    "text": "7.30"
                  }
                ],
                "answer": "a",
                "explanation": "Simon 在 7 點整離開家 (I leave home at seven o'clock)；7 點 30 分是開往本島渡輪的出航時間。"
              }
            ]
          },
          "questionWordsDrill": [
            {
              "id": "qw_1",
              "question": "____ is Tanya?",
              "answer": "Who",
              "subQuestions": [
                {
                  "text": "Who is Tanya?",
                  "options": [
                    "Simon's sister",
                    "Simon's aunt"
                  ],
                  "correct": "Simon's aunt"
                }
              ]
            },
            {
              "id": "qw_2",
              "question": "____ does Simon live?",
              "answer": "Where",
              "subQuestions": [
                {
                  "text": "Where does Simon live?",
                  "options": [
                    "on an island",
                    "near his school"
                  ],
                  "correct": "on an island"
                }
              ]
            },
            {
              "id": "qw_3",
              "question": "____ does Simon's mum wake him up?",
              "answer": "What time",
              "subQuestions": [
                {
                  "text": "What time does Simon's mum wake him up?",
                  "options": [
                    "6.15",
                    "7.15"
                  ],
                  "correct": "6.15"
                }
              ]
            },
            {
              "id": "qw_4",
              "question": "____ does Simon go to school each day?",
              "answer": "How",
              "subQuestions": [
                {
                  "text": "How does Simon go to school each day?",
                  "options": [
                    "by bus",
                    "by boat"
                  ],
                  "correct": "by boat"
                }
              ]
            },
            {
              "id": "qw_5",
              "question": "____ do children on the island change school?",
              "answer": "When",
              "subQuestions": [
                {
                  "text": "When do children on the island change school?",
                  "options": [
                    "at six years old",
                    "at 12 years old"
                  ],
                  "correct": "at 12 years old"
                }
              ]
            },
            {
              "id": "qw_6",
              "question": "____ does Simon do at 7 a.m.?",
              "answer": "What",
              "subQuestions": [
                {
                  "text": "What does Simon do at 7 a.m.?",
                  "options": [
                    "leave home",
                    "get on a boat"
                  ],
                  "correct": "leave home"
                }
              ]
            }
          ]
        },
        "speakingPart1": {
          "part": 1,
          "title": "Speaking Part 1 - Describing People & Personal Questions",
          "examTip": "Try to say at least three sentences for each 'Tell me something about...' question. Extend your answers using because, so, and, and but.",
          "image": "assets/images/u1/u1_speaking_people_af.jpg",
          "questions": [
            {
              "id": "sp_et_1",
              "prompt": "Tell me something about your school day.",
              "suggestedAnswer": "I wake up at seven o'clock and walk to school with my friends. My school starts at eight o'clock and finishes at four in the afternoon. In the evening, I do my homework and play computer games.",
              "connectors": "I wake up at seven, AND I walk to school. My favourite subject is science BECAUSE we do fun experiments.",
              "tips": "至少回答三句話：起床時間 + 上學方式 + 放學後的活動。"
            },
            {
              "id": "sp_et_2",
              "prompt": "Tell me something about your favourite teacher.",
              "suggestedAnswer": "My favourite teacher is Mr Davies, who teaches us English. He has got short brown hair and always wears funny glasses. He is very kind and patient, so his classes are always interesting.",
              "connectors": "I like him BECAUSE he tells great stories, SO everyone enjoys his lessons.",
              "tips": "描述名字與教授科目 + 外貌特徵 + 喜歡的理由（個性與教學風格）。"
            },
            {
              "id": "sp_et_3",
              "prompt": "Tell me something about what you do at the weekend.",
              "suggestedAnswer": "On Saturday mornings, I usually play football in the park with my classmates. Then on Sunday, my family often visits my grandparents and we have lunch together. In the evening, I prepare my school bag for Monday.",
              "connectors": "I love weekends BECAUSE I can sleep a bit longer, AND I can play sports outside.",
              "tips": "按照週六與週日的時間順序組織回答，提到運動、家庭與休閒活動。"
            },
            {
              "id": "sp_et_4",
              "prompt": "Tell me something about your best friend.",
              "suggestedAnswer": "My best friend is called Leo and we are in the same class at school. He has got dark curly hair and he is very good at basketball. We often do our homework together after school.",
              "connectors": "He is my best friend BECAUSE he is funny, AND we share the same hobbies.",
              "tips": "說出名字與關係 + 外貌特徵與專長 + 平常一起從事的活動。"
            }
          ],
          "appearanceMatching": {
            "items": [
              {
                "id": "sp_app_1",
                "description": "Jason's my best friend. He's got short, curly hair and blue eyes. He's very tall.",
                "match": "F",
                "features": "男生、金色捲髮、藍眼睛、身材高大、穿綠色襯衫外搭紅色內裡。"
              },
              {
                "id": "sp_app_2",
                "description": "My sister Lee has got brown eyes. Her hair's short and curly. She's really tall.",
                "match": "A",
                "features": "女生、黑色短捲髮、棕色眼睛、高挑身材、穿藍色短袖與深色長褲。"
              },
              {
                "id": "sp_app_3",
                "description": "Trent's in my class. His eyes are blue. He's got straight hair and he's short.",
                "match": "D",
                "features": "小男生、金黃色直立短髮、藍眼睛、個頭嬌小、穿橘色 Polo 衫。"
              },
              {
                "id": "sp_app_4",
                "description": "Jenny's quite short. She's got long, dark, straight hair and green eyes.",
                "match": "C",
                "features": "女生、黑色長直髮、綠色眼睛、穿粉紅色上衣與墨綠色長褲。"
              },
              {
                "id": "sp_app_5",
                "description": "Lucas has got dark curly hair and wears a bright green T-shirt.",
                "match": "B",
                "features": "男生、黑色短捲髮、笑臉、穿亮綠色短袖與紫色短褲。"
              },
              {
                "id": "sp_app_6",
                "description": "Emma has got long straight blonde hair and a warm purple sweater.",
                "match": "E",
                "features": "女生、金色長直髮、金髮碧眼、穿紫色長袖毛衣與白褲。"
              }
            ]
          },
          "teacherDescription": {
            "title": "Describing a Teacher (Mrs Reed - p.11 Ex 6)",
            "gaps": [
              {
                "gap": 1,
                "prompt": "What's her name?",
                "answer": "Her name's",
                "full": "Her name's Mrs Reed."
              },
              {
                "gap": 2,
                "prompt": "What does she look like?",
                "answer": "She's got",
                "full": "She's got short dark hair and blue eyes."
              },
              {
                "gap": 3,
                "prompt": "What does she do every day?",
                "answer": "She travels / drives",
                "full": "She travels to school by car."
              },
              {
                "gap": 4,
                "prompt": "Where does she eat?",
                "answer": "She has",
                "full": "She has lunch at school."
              },
              {
                "gap": 5,
                "prompt": "Your opinion",
                "answer": "she is very kind and patient",
                "full": "I like her because she is very kind and patient."
              }
            ]
          }
        },
        "grammarVocabDrills": {
          "p6_have_got_tf": {
            "title": "p.6 Tim, Mathilde & Emin True/False (Ex 1)",
            "items": [
              {
                "id": "p6_tf_1",
                "statement": "Emin hasn't got any brothers or sisters.",
                "answer": "F",
                "explanation": "錯誤。Emin 有一個雙胞胎兄弟 (twin brother) 與兩個也是雙胞胎的妹妹 (two sisters who are twins)。"
              },
              {
                "id": "p6_tf_2",
                "statement": "Tim's grandfather is called Tim Alex Brown.",
                "answer": "T",
                "explanation": "正確。Tim 說他與爸爸、祖父同名，都叫 Tim Alex Brown。"
              },
              {
                "id": "p6_tf_3",
                "statement": "Mathilde's aunt's birthday is on 3 March.",
                "answer": "T",
                "explanation": "正確。Mathilde 提到她自己、妹妹、媽媽以及阿姨 (her mum's sister = aunt) 生日都是 3 月 3 日。"
              }
            ]
          },
          "p6_have_got_rules": {
            "title": "p.6 have got Grammar Rules (Ex 2)",
            "rules": [
              {
                "question": "What word do we use to make the negative?",
                "answer": "not (haven't / hasn't)",
                "explanation": "否定句在 have/has 後方加上 not，常縮寫為 haven't got 或 hasn't got。"
              },
              {
                "question": "How do we make questions?",
                "answer": "Have / Has + subject + got ...?",
                "explanation": "疑問句將助動詞 Have 或 Has 移至主詞前方，如 Have you got...? / Has she got...?"
              },
              {
                "question": "How do we make short answers?",
                "answer": "Yes, I have. / No, I haven't. / Yes, he has. / No, he hasn't.",
                "explanation": "簡答句中不可重複 got，嚴禁說 'Yes, I have got.'。"
              }
            ]
          },
          "p6_have_got_fill": {
            "title": "p.6 Complete with correct form of have got (Ex 4)",
            "items": [
              {
                "gap": 1,
                "dialoguePart": "Q: (1) ____ you ____ an interesting name?",
                "answer": "Have you got",
                "hint": "主詞為 you，問句型態。"
              },
              {
                "gap": 2,
                "dialoguePart": "(2) ____ your friends ____ unusual names?",
                "answer": "Have your friends got",
                "hint": "主詞 your friends 為複數 they。"
              },
              {
                "gap": 3,
                "dialoguePart": "A: No, I (3) ____ (not)",
                "answer": "haven't",
                "hint": "否定簡答句，不可加 got。"
              },
              {
                "gap": 4,
                "dialoguePart": "but I (4) ____ a nickname.",
                "answer": "have got / 've got",
                "hint": "主詞 I 搭配 have got。"
              },
              {
                "gap": 5,
                "dialoguePart": "A: My best friend (5) ____ a special name.",
                "answer": "has got / 's got",
                "hint": "主詞 my best friend 為單數 he/she。"
              },
              {
                "gap": 6,
                "dialoguePart": "He (6) ____ (not) an unusual surname, it's Roberts.",
                "answer": "hasn't got",
                "hint": "主詞 he，否定句型態。"
              },
              {
                "gap": 7,
                "dialoguePart": "A: We (7) ____ an unusual surname. It's Singh.",
                "answer": "have got / 've got",
                "hint": "主詞 we 搭配 have got。"
              },
              {
                "gap": 8,
                "dialoguePart": "A: My cousins (8) ____ beautiful names.",
                "answer": "have got / 've got",
                "hint": "主詞 my cousins 為複數 they。"
              }
            ]
          },
          "p7_sofia_family_tree": {
            "title": "p.7 Sofia's Family Tree Blog Post (Ex 1)",
            "image": "assets/images/u1/u1_sofia_family_tree.jpg",
            "wordBox": [
              "aunt",
              "brother",
              "children",
              "cousin",
              "daughter",
              "father",
              "grandfather",
              "grandmother",
              "husband",
              "mother",
              "parents",
              "sister",
              "son",
              "uncle",
              "wife"
            ],
            "blogTextWithGaps": "Let me tell you about my family. I've got one (1) sister, Ariana, but I haven't got any brothers. Mateo and Paula are my (2) parents. My mum's sister Victoria is my favourite (3) aunt. Her husband Lucas is my (4) uncle. They've got two (5) daughters. Daniela and Sara are our (6) cousins. My (7) grandfather is called David and his (8) wife is called Lucia. They haven't got any (9) sons, only daughters.",
            "gaps": [
              {
                "gap": 1,
                "answer": "sister",
                "given": true
              },
              {
                "gap": 2,
                "answer": "parents",
                "explanation": "Mateo 與 Paula 是 Sofia 的父母雙親。"
              },
              {
                "gap": 3,
                "answer": "aunt",
                "explanation": "媽媽的姊妹 Victoria 是阿姨 (aunt)。"
              },
              {
                "gap": 4,
                "answer": "uncle",
                "explanation": "阿姨的丈夫 Lucas 是姨丈/叔叔 (uncle)。"
              },
              {
                "gap": 5,
                "answer": "daughters",
                "explanation": "Victoria 與 Lucas 育有 Daniela 和 Sara 兩位女兒 (daughters，需用複數)。"
              },
              {
                "gap": 6,
                "answer": "cousins",
                "explanation": "Daniela 和 Sara 是 Sofia 的堂表姊妹 (cousins)。"
              },
              {
                "gap": 7,
                "answer": "grandfather",
                "explanation": "家族頂端的 David 是祖父/外公 (grandfather)。"
              },
              {
                "gap": 8,
                "answer": "wife",
                "explanation": "Lucia 是 David 的妻子 (wife)。"
              },
              {
                "gap": 9,
                "answer": "sons",
                "explanation": "David 與 Lucia 只有生女兒 (Paula 與 Victoria)，沒有任何兒子 (sons)。"
              }
            ]
          },
          "p8_favorite_places": {
            "title": "p.8 Teenagers' Top Five Favorite Places (Ex 1)",
            "image": "assets/images/u1/u1_fav_places.jpg",
            "items": [
              {
                "number": 1,
                "clue": "my b______",
                "answer": "bedroom",
                "zh": "臥室"
              },
              {
                "number": 2,
                "clue": "my local p___",
                "answer": "park",
                "zh": "公園"
              },
              {
                "number": 3,
                "clue": "the b____",
                "answer": "beach",
                "zh": "海灘"
              },
              {
                "number": 4,
                "clue": "the s_____ where I live",
                "answer": "street",
                "zh": "街道"
              },
              {
                "number": 5,
                "clue": "my s_____",
                "answer": "school",
                "zh": "學校"
              }
            ]
          },
          "p8_prepositions": {
            "title": "p.8 Place Prepositions Practice (Ex 2)",
            "wordBox": [
              "above",
              "along",
              "between",
              "in",
              "on",
              "out of",
              "to"
            ],
            "items": [
              {
                "number": 1,
                "sentence": "The girl and her sister sat ____ their bedroom.",
                "answer": "in",
                "explanation": "在房間內使用介系詞 in。"
              },
              {
                "number": 2,
                "sentence": "The family decided to go ____ the park.",
                "answer": "to",
                "explanation": "前往某目的地使用介系詞 to。"
              },
              {
                "number": 3,
                "sentence": "The girl and her friends played football ____ the beach.",
                "answer": "on",
                "explanation": "在沙灘表面使用介系詞 on。"
              },
              {
                "number": 4,
                "sentence": "The boy ran ____ the street to his friend's house.",
                "answer": "along",
                "explanation": "沿著街道奔跑使用介系詞 along。"
              },
              {
                "number": 5,
                "sentence": "At the end of the day, the children walked ____ the school.",
                "answer": "out of",
                "explanation": "走出校園使用介系詞 out of。"
              }
            ]
          },
          "p9_clocks": {
            "title": "p.9 Telling the Time (Ex 1)",
            "image": "assets/images/u1/u1_clocks.jpg",
            "clocks": [
              {
                "clockNumber": 1,
                "digital": "7:40",
                "analogDescription": "twenty to eight",
                "alternative": "seven forty"
              },
              {
                "clockNumber": 2,
                "digital": "9:30",
                "analogDescription": "half past nine",
                "alternative": "nine thirty"
              },
              {
                "clockNumber": 3,
                "digital": "12:55",
                "analogDescription": "five to one",
                "alternative": "twelve fifty-five"
              },
              {
                "clockNumber": 4,
                "digital": "3:15",
                "analogDescription": "a quarter past three",
                "alternative": "three fifteen"
              },
              {
                "clockNumber": 5,
                "digital": "10:45",
                "analogDescription": "a quarter to eleven",
                "alternative": "ten forty-five"
              },
              {
                "clockNumber": 6,
                "digital": "11:20",
                "analogDescription": "twenty past eleven",
                "alternative": "eleven twenty"
              }
            ]
          },
          "p9_kyle_routine": {
            "title": "p.9 Kyle's Daily Routine Photo Album (Ex 2 & 3)",
            "image": "assets/images/u1/u1_kyle_photo_album.jpg",
            "track": "Track 02",
            "routineItems": [
              {
                "activity": "wake up",
                "matchedLetter": "A",
                "time": "7.30 a.m.",
                "details": "鬧鐘響起，手按鬧鐘。"
              },
              {
                "activity": "walk to school",
                "matchedLetter": "B",
                "time": "8.15 a.m.",
                "details": "走在人行道上前往學校。"
              },
              {
                "activity": "start school",
                "matchedLetter": "C",
                "time": "8.45 a.m.",
                "details": "在教室將課本放入書包開始上課。"
              },
              {
                "activity": "have lunch",
                "matchedLetter": "D",
                "time": "12.30 p.m.",
                "details": "學校餐廳餐盤與營養午餐。"
              },
              {
                "activity": "get home",
                "matchedLetter": "E",
                "time": "4.00 p.m.",
                "details": "拿鑰匙開門回到家。"
              },
              {
                "activity": "do homework",
                "matchedLetter": "F",
                "time": "5.00 p.m.",
                "details": "在筆記型電腦鍵盤上打字做功課。"
              },
              {
                "activity": "watch TV",
                "matchedLetter": "G",
                "time": "7.00 p.m.",
                "details": "放鬆看客廳電視的動物節目。"
              },
              {
                "activity": "go to bed",
                "matchedLetter": "H",
                "time": "10.00 p.m.",
                "details": "蓋被子躺在床上入睡。"
              }
            ]
          },
          "p9_present_simple_rules": {
            "title": "p.9 Present Simple Grammar Rules Matching (Ex 4)",
            "rules": [
              {
                "ruleNumber": 1,
                "rule": "When we use he / she / it, we add -s or -es to the main verb.",
                "matchSentence": "c",
                "exampleSentence": "He wakes up at 7.30 a.m. / She does her homework at 5 p.m."
              },
              {
                "ruleNumber": 2,
                "rule": "We make the negative with don't and doesn't.",
                "matchSentence": "a",
                "exampleSentence": "I don't have lunch at 12 p.m. / She doesn't walk to school."
              },
              {
                "ruleNumber": 3,
                "rule": "We use do and does to make questions and short answers.",
                "matchSentence": "b",
                "exampleSentence": "Do you go to bed at 10 p.m.? Yes, I do. / Does he watch TV at 8 p.m.? No, he doesn't."
              }
            ]
          },
          "p9_personal_sentences": {
            "title": "p.9 True Sentences for You (Ex 6)",
            "items": [
              {
                "number": 1,
                "time": "7.00",
                "prompt": "I / wake up",
                "model": "I don't wake up at 7.00. I wake up at 7.30."
              },
              {
                "number": 2,
                "time": "8.30",
                "prompt": "I / walk to school with my friends",
                "model": "I don't walk to school at 8.30. I walk to school at 7.45."
              },
              {
                "number": 3,
                "time": "9.00",
                "prompt": "school / start",
                "model": "School doesn't start at 9.00. School starts at 8.00."
              },
              {
                "number": 4,
                "time": "12.00",
                "prompt": "I / have lunch",
                "model": "I have lunch at 12.00 in the school cafeteria."
              },
              {
                "number": 5,
                "time": "4.00",
                "prompt": "my friends / do their homework",
                "model": "My friends don't do their homework at 4.00. They play sports."
              },
              {
                "number": 6,
                "time": "6.00",
                "prompt": "my mum / get home",
                "model": "My mum gets home at 6.00 from work."
              },
              {
                "number": 7,
                "time": "7.00",
                "prompt": "we / watch TV",
                "model": "We don't watch TV at 7.00. We have dinner together."
              },
              {
                "number": 8,
                "time": "8.30",
                "prompt": "my best friend / go to bed",
                "model": "My best friend doesn't go to bed at 8.30. He goes to bed at 10.00."
              }
            ]
          }
        },
        "revisionUnit1": {
          "unitId": "u1",
          "totalPoints": 27,
          "totalMarks": 27,
          "pageImage": "assets/pages/rev_u1_u2_p78_p79.jpg",
          "exercises": [
            {
              "title": "Exercise 1: Complete the dialogues with the correct form of have got",
              "marks": 5,
              "items": [
                {
                  "itemNumber": 1,
                  "dialogue": "A: (1) ____ (you) any brothers or sisters?\nB: Yes, I (2) ____ a sister and two brothers.",
                  "answers": [
                    {
                      "gap": 1,
                      "answer": "Have you got"
                    },
                    {
                      "gap": 2,
                      "answer": "have. I've got / have. I have got"
                    }
                  ],
                  "explanation": "問句用 Have you got...，肯定簡答用 Yes, I have，後接完整句 I've got。"
                },
                {
                  "itemNumber": 2,
                  "dialogue": "A: (3) ____ (Manuela) a sandwich for lunch?\nB: No, she (4) ____. She (5) ____ a salad.",
                  "answers": [
                    {
                      "gap": 3,
                      "answer": "Has Manuela got"
                    },
                    {
                      "gap": 4,
                      "answer": "hasn't"
                    },
                    {
                      "gap": 5,
                      "answer": "has got / 's got"
                    }
                  ],
                  "explanation": "Manuela 為第三人稱單數，問句用 Has Manuela got，否定簡答 No, she hasn't，肯定句用 has got。"
                },
                {
                  "itemNumber": 3,
                  "dialogue": "A: (6) ____ (your parents) a car?\nB: No, (7) ____, but my mum (8) ____ a motorbike and my dad (9) ____ a bicycle!",
                  "answers": [
                    {
                      "gap": 6,
                      "answer": "Have your parents got"
                    },
                    {
                      "gap": 7,
                      "answer": "they haven't"
                    },
                    {
                      "gap": 8,
                      "answer": "has got / 's got"
                    },
                    {
                      "gap": 9,
                      "answer": "has got / 's got"
                    }
                  ],
                  "explanation": "your parents 為複數 they，問句用 Have your parents got，簡答 No, they haven't；媽媽與爸爸各自為單數，用 has got。"
                },
                {
                  "itemNumber": 4,
                  "dialogue": "A: It's raining. (10) ____ (you) an umbrella?\nB: No, I (11) ____.",
                  "answers": [
                    {
                      "gap": 10,
                      "answer": "Have you got"
                    },
                    {
                      "gap": 11,
                      "answer": "haven't"
                    }
                  ],
                  "explanation": "問句 Have you got an umbrella? 否定簡答 No, I haven't。"
                },
                {
                  "itemNumber": 5,
                  "dialogue": "A: Daniel can't come swimming today because he (12) ____ any money.\nB: I (13) ____ some money so I can pay for him!",
                  "answers": [
                    {
                      "gap": 12,
                      "answer": "hasn't got"
                    },
                    {
                      "gap": 13,
                      "answer": "have got / 've got"
                    }
                  ],
                  "explanation": "Daniel 沒錢為否定句 hasn't got any money；我有錢為肯定句 I've got some money。"
                }
              ]
            },
            {
              "title": "Exercise 2: Write the correct word to finish the sentences",
              "marks": 8,
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "My mother's mother is my ____.",
                  "answer": "grandmother / grandma",
                  "zh": "外婆/祖母"
                },
                {
                  "itemNumber": 2,
                  "sentence": "My mum and dad are my ____.",
                  "answer": "parents",
                  "zh": "父母雙親"
                },
                {
                  "itemNumber": 3,
                  "sentence": "My sister is my mother's ____.",
                  "answer": "daughter",
                  "zh": "女兒"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My uncle is my aunt's ____.",
                  "answer": "husband",
                  "zh": "丈夫"
                },
                {
                  "itemNumber": 5,
                  "sentence": "My aunt's son is my ____.",
                  "answer": "cousin",
                  "zh": "堂（表）兄弟"
                },
                {
                  "itemNumber": 6,
                  "sentence": "My mother is my father's ____.",
                  "answer": "wife",
                  "zh": "妻子"
                },
                {
                  "itemNumber": 7,
                  "sentence": "My uncle is my mum's ____.",
                  "answer": "brother",
                  "zh": "兄弟（舅舅）"
                },
                {
                  "itemNumber": 8,
                  "sentence": "My mum and my uncle are my grandfather's ____.",
                  "answer": "children",
                  "zh": "子女/孩子們"
                }
              ]
            },
            {
              "title": "Exercise 3: Choose the correct word to complete the sentences",
              "marks": 8,
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "What time do / does you go to bed at the weekend?",
                  "options": [
                    "do",
                    "does"
                  ],
                  "answer": "do",
                  "explanation": "主詞為 you，助動詞使用 do。"
                },
                {
                  "itemNumber": 2,
                  "sentence": "Mariana don't walk / doesn't walk to school because it's too far.",
                  "options": [
                    "don't walk",
                    "doesn't walk"
                  ],
                  "answer": "doesn't walk",
                  "explanation": "主詞 Mariana 為第三人稱單數 (she)，否定句使用 doesn't walk。"
                },
                {
                  "itemNumber": 3,
                  "sentence": "Most students go / goes to the town centre on Saturday afternoons.",
                  "options": [
                    "go",
                    "goes"
                  ],
                  "answer": "go",
                  "explanation": "主詞 Most students 為複數 (they)，動詞使用原形 go。"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My brother play / plays football three times a week.",
                  "options": [
                    "play",
                    "plays"
                  ],
                  "answer": "plays",
                  "explanation": "主詞 My brother 為第三人稱單數 (he)，動詞字尾加 -s 變為 plays。"
                },
                {
                  "itemNumber": 5,
                  "sentence": "Where do / does your best friend live?",
                  "options": [
                    "do",
                    "does"
                  ],
                  "answer": "does",
                  "explanation": "主詞 your best friend 為單數 (he/she)，助動詞使用 does。"
                },
                {
                  "itemNumber": 6,
                  "sentence": "Linda don't do / doesn't do her homework at home - she goes to the library.",
                  "options": [
                    "don't do",
                    "doesn't do"
                  ],
                  "answer": "doesn't do",
                  "explanation": "主詞 Linda 為第三人稱單數 (she)，否定句使用 doesn't do。"
                },
                {
                  "itemNumber": 7,
                  "sentence": "We start / starts school at eight am.",
                  "options": [
                    "start",
                    "starts"
                  ],
                  "answer": "start",
                  "explanation": "主詞 We 為第一人稱複數，動詞使用原形 start。"
                },
                {
                  "itemNumber": 8,
                  "sentence": "Do your friends watch / watches TV in the evening?",
                  "options": [
                    "watch",
                    "watches"
                  ],
                  "answer": "watch",
                  "explanation": "助動詞 Do 後面接原形動詞 watch。"
                }
              ]
            },
            {
              "title": "Exercise 4: Choose the correct adjective to complete the sentences",
              "marks": 6,
              "wordBox": [
                "curly",
                "dark",
                "long",
                "short",
                "straight",
                "tall"
              ],
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "My dad's got black hair and mine is the same - it's very ____.",
                  "answer": "dark",
                  "explanation": "黑色頭髮屬於深色 (dark hair)。"
                },
                {
                  "itemNumber": 2,
                  "sentence": "My brother is very ____ - he's almost 1.9 m.",
                  "answer": "tall",
                  "explanation": "身高將近 1.9 公尺，身材非常高大 (tall)。"
                },
                {
                  "itemNumber": 3,
                  "sentence": "I want to cut my hair because it's too ____.",
                  "answer": "long",
                  "explanation": "想要剪頭髮是因為頭髮太長 (too long)。"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My sister's got very straight hair but mine is different - it's ____.",
                  "answer": "curly",
                  "explanation": "姊妹的頭髮很直，但我的不同，是捲髮 (curly)。"
                },
                {
                  "itemNumber": 5,
                  "sentence": "Alison cut her hair last week. Now it's very ____.",
                  "answer": "short",
                  "explanation": "上週剪了頭髮，現在變得非常短 (very short)。"
                },
                {
                  "itemNumber": 6,
                  "sentence": "His hair is short, blond and ____. It's not curly.",
                  "answer": "straight",
                  "explanation": "不是捲髮 (not curly)，因此是直髮 (straight)。"
                }
              ]
            }
          ]
        },
        "reading": {
          "title": "Reading Part 2 - Three Teenagers Talking About Their Families",
          "examTip": "In Part 2, read the three texts carefully. Don't just match words in the text with the questions. A text can include words from the question and be the wrong answer.",
          "image": "assets/images/u1/u1_reading_part2_boys.jpg",
          "texts": {
            "leo": {
              "name": "Leo",
              "code": "A",
              "content": "There are a lot of us in my family, and I love it. Our house is crowded, so I'm never alone or bored. I've got a brother and three sisters. My brother and I have one bedroom, and my sisters have another. Mum and Dad work a lot, and my grandparents live near us, so they often look after us when my parents are working. My grandfather is from France, and he sometimes helps me with my French homework."
            },
            "bastian": {
              "name": "Bastian",
              "code": "B",
              "content": "I live with my mum, dad and brother. My brother and I have our own bedrooms. He's only a year older than me, so we do lots of things together, which is fun. We've got an aunt and uncle who live in the same street as us, together with their daughter - our cousin - and our grandparents. Dad works in an office, and Mum is a teacher. She was born in Italy, but she came to live here in the USA a long time ago."
            },
            "callum": {
              "name": "Callum",
              "code": "C",
              "content": "My family is big, but we don't all live in the same place. I have cousins in Germany and Australia, so I don't see them very often. My parents, my sister and I share a house with my grandma, but my sister and I have our own bedrooms. Mum and Dad go out to work, and they don't have much free time, so sometimes I tidy up the house. Mum likes it when I do that."
            }
          },
          "questions": [
            {
              "id": "r_p2_q1",
              "number": 1,
              "question": "Which person has got family members in different countries?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "I have cousins in Germany and Australia, so I don't see them very often.",
              "explanation": "Callum 明確提到他的堂表兄弟姊妹住在德國 (Germany) 和澳洲 (Australia)，分佈在不同國家。",
              "trapAnalysis": "陷阱選項：Leo 提到祖父來自法國 (My grandfather is from France)，但他現在住在附近 (live near us)；Bastian 提到媽媽出生於義大利 (born in Italy)，但很久以前就搬來美國 (USA) 同住了。只有 Callum 的親戚目前人在國外。"
            },
            {
              "id": "r_p2_q2",
              "number": 2,
              "question": "Which person shares a bedroom with another member of his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "A",
              "locationQuote": "My brother and I have one bedroom, and my sisters have another.",
              "explanation": "Leo 和他的哥哥/弟弟共用一間臥室 (have one bedroom)，三個姊妹共用另一間。",
              "trapAnalysis": "干擾項：Bastian 說 'My brother and I have our own bedrooms'（各自有獨立房間）；Callum 說 'my sister and I have our own bedrooms'。兩人皆為 own bedrooms，並未 share。"
            },
            {
              "id": "r_p2_q3",
              "number": 3,
              "question": "Which person has got a cousin who lives near him?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "B",
              "locationQuote": "We've got an aunt and uncle who live in the same street as us, together with their daughter - our cousin - and our grandparents.",
              "explanation": "Bastian 提到姑叔一家人以及他們的表妹 (their daughter - our cousin) 住在他家同一條街上 (in the same street as us)，近在咫尺。",
              "trapAnalysis": "干擾項：Callum 雖然有表親，但住在德國與澳洲 (don't see them very often)；Leo 只有祖父母住在附近，未提及表親。"
            },
            {
              "id": "r_p2_q4",
              "number": 4,
              "question": "Which person helps someone in his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "Mum and Dad go out to work, and they don't have much free time, so sometimes I tidy up the house. Mum likes it when I do that.",
              "explanation": "Callum 在父母忙於工作時，主動幫忙打掃整理家裡 (tidy up the house)，為家人分擔家務。",
              "trapAnalysis": "極高頻陷阱：Leo 說 'he [grandfather] sometimes helps me with my French homework'，這是祖父幫助 Leo，而不是 Leo 幫助家人！題目主詞為 'Which person helps someone'（主動幫人）。"
            },
            {
              "id": "r_p2_q5",
              "number": 5,
              "question": "Which person lives with a grandparent?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "C",
              "locationQuote": "My parents, my sister and I share a house with my grandma...",
              "explanation": "Callum 全家與祖母同住在一棟房子裡 (share a house with my grandma)。",
              "trapAnalysis": "干擾項：Leo 說 'my grandparents live near us'（祖父母住附近，非同住）；Bastian 說祖父母住在同一條街上 ('together with... our grandparents')，亦非同住一屋。"
            },
            {
              "id": "r_p2_q6",
              "number": 6,
              "question": "Which person enjoys spending time with one member of his family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "B",
              "locationQuote": "He's only a year older than me, so we do lots of things together, which is fun.",
              "explanation": "Bastian 提到哥哥只大他一歲，兩人經常一起做很多事，非常有趣開心 (which is fun)。",
              "trapAnalysis": "干擾項：Leo 雖然說喜歡熱鬧的家庭 (There are a lot of us in my family, and I love it)，但並未針對特定一位家人指出享受相處時光；Bastian 精確指涉其哥哥 (brother)。"
            },
            {
              "id": "r_p2_q7",
              "number": 7,
              "question": "Which person thinks it is good to have a big family?",
              "options": [
                {
                  "label": "A",
                  "text": "Leo"
                },
                {
                  "label": "B",
                  "text": "Bastian"
                },
                {
                  "label": "C",
                  "text": "Callum"
                }
              ],
              "answer": "A",
              "locationQuote": "There are a lot of us in my family, and I love it. Our house is crowded, so I'm never alone or bored.",
              "explanation": "Leo 表示家裡有很多人且他非常熱愛 (I love it)，因為家裡熱鬧，他永遠不會感到無聊或孤單。",
              "trapAnalysis": "干擾項：Callum 雖然也說 'My family is big'，但下一句接的是 'but we don't all live in the same place'，並未表達熱愛大家庭的讚賞心態；只有 Leo 明確肯定大家庭的好處。"
            }
          ]
        },
        "listening": {
          "part": 3,
          "title": "Listening Part 3 - Simon's Journey to School",
          "examTip": "Sometimes the answer is a time. Say the times in the answers quietly to yourself before you listen.",
          "image": "assets/images/u1/u1_simon_island.jpg",
          "audioTrack": "Track 04",
          "questions": [
            {
              "id": "l_p3_exam_1",
              "number": 1,
              "question": "Amanda's tired because she",
              "options": [
                {
                  "label": "A",
                  "text": "watches TV in bed."
                },
                {
                  "label": "B",
                  "text": "goes to sleep very late."
                },
                {
                  "label": "C",
                  "text": "wakes up early."
                }
              ],
              "answer": "B",
              "locationQuote": "Amanda: 'No, I don't have to get up early, but I never go to sleep until after midnight!'",
              "explanation": "Amanda 澄清她不用早起，但她總是很晚才睡覺 (never go to sleep until after midnight -> goes to sleep very late)。",
              "trapAnalysis": "陷阱 A：Amanda 說在客廳看電視，不是在床上看 (watches TV in bed)；陷阱 C：早起的是 Simon (6.15)，Amanda 不需要早起。"
            },
            {
              "id": "l_p3_exam_2",
              "number": 2,
              "question": "What time does the boat to Simon's school leave?",
              "options": [
                {
                  "label": "A",
                  "text": "6.15"
                },
                {
                  "label": "B",
                  "text": "7.00"
                },
                {
                  "label": "C",
                  "text": "7.30"
                }
              ],
              "answer": "C",
              "locationQuote": "Simon: 'The ferry leaves the island at half past seven, so I have to be at the harbour before then.'",
              "explanation": "開往學校的船班在 7 點 30 分 (half past seven = 7.30) 出發。",
              "trapAnalysis": "數字陷阱：6.15 是起床時間 (wake up)，7.00 是離家時間 (leave home)，三個時間都在對話中出現，需精確辨析動作主詞與動詞。"
            },
            {
              "id": "l_p3_exam_3",
              "number": 3,
              "question": "How old is Simon?",
              "options": [
                {
                  "label": "A",
                  "text": "11"
                },
                {
                  "label": "B",
                  "text": "12"
                },
                {
                  "label": "C",
                  "text": "14"
                }
              ],
              "answer": "B",
              "locationQuote": "Simon: 'I'm twelve now, so this is my first year going across to the secondary school on the mainland.'",
              "explanation": "Simon 親口說他現在 12 歲 (I'm twelve now)。",
              "trapAnalysis": "數字陷阱：11 歲是小學畢業年齡 (Children leave the island primary school at eleven)；14 歲是他哥哥的年齡 (My older brother is fourteen)。"
            },
            {
              "id": "l_p3_exam_4",
              "number": 4,
              "question": "Simon eats his dinner",
              "options": [
                {
                  "label": "A",
                  "text": "at his aunt's house."
                },
                {
                  "label": "B",
                  "text": "at home."
                },
                {
                  "label": "C",
                  "text": "at school."
                }
              ],
              "answer": "A",
              "locationQuote": "Simon: 'After school clubs finish, I go to my Aunt Tanya's house on the mainland and have dinner there before taking the evening boat back.'",
              "explanation": "Simon 放學後會到住在本島的姑姑 Tanya 家吃晚餐 (at his aunt's house)。",
              "trapAnalysis": "干擾項：他在學校吃的是午餐 (have lunch at school)；他在家吃的是早餐，回到家時已經很晚了。"
            },
            {
              "id": "l_p3_exam_5",
              "number": 5,
              "question": "Amanda thinks Simon's day is",
              "options": [
                {
                  "label": "A",
                  "text": "exciting."
                },
                {
                  "label": "B",
                  "text": "fun."
                },
                {
                  "label": "C",
                  "text": "unusual."
                }
              ],
              "answer": "C",
              "locationQuote": "Amanda: 'Taking a boat across the sea every morning and evening? Your daily routine sounds really unusual!'",
              "explanation": "Amanda 認為每天搭船上學的生活非常不尋常、特別 (really unusual)。",
              "trapAnalysis": "詞彙陷阱：Simon 提到搭船有時很刺激 (exciting) 或好玩 (fun)，但題目問的是 Amanda 的看法 ('Amanda thinks Simon's day is...')，Amanda 使用的評價詞為 unusual。"
            }
          ],
          "tapescript": [
            {
              "speaker": "Amanda",
              "text": "Hi Simon, you look wide awake! I'm completely exhausted today.",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Why Amanda? Do you have to get up really early in the morning like me?",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 1,
              "trapType": "Opposite / Not applicable",
              "explanation": "Simon 提問 Amanda 是否早起，容易誤導考生選擇 C。"
            },
            {
              "speaker": "Amanda",
              "text": "No, not at all! I wake up at eight o'clock. But I watched a film on television in the living room, and then I went to sleep very late, past midnight!",
              "isKey": true,
              "targetQuestion": 1,
              "explanation": "正解句：Amanda 明確指出自己很晚才睡 (went to sleep very late, past midnight)。排除 A（在客廳看電視非床上）與 C（起床時間是 8 點不早）。"
            },
            {
              "speaker": "Simon",
              "text": "Wow, I could never do that. My mum knocks on my bedroom door and wakes me up at quarter past six.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 6.15，但這是 mum wakes me up 的時間，不是開船時間。"
            },
            {
              "speaker": "Amanda",
              "text": "Quarter past six? That's so early! Why do you need to be up then?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Well, I have breakfast and get dressed, and then I leave home at seven o'clock.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 7.00，但這是 leave home（離家出門）的時間。"
            },
            {
              "speaker": "Amanda",
              "text": "And how do you get across the sea to the mainland?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "I walk down to the port. The boat to school leaves the island at half past seven sharp, so I can't be late.",
              "isKey": true,
              "targetQuestion": 2,
              "explanation": "正解句：船在 7 點半 (half past seven = 7.30) 出航。"
            },
            {
              "speaker": "Amanda",
              "text": "Do all children on your island take the boat to school?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Only when we are older. The island primary school is for kids up to eleven. But I'm twelve now, so this year I have to go to the big school across the water.",
              "isKey": true,
              "targetQuestion": 3,
              "explanation": "正解句：Simon 親自說明 'I'm twelve now'。"
            },
            {
              "speaker": "Amanda",
              "text": "Does your older brother go with you?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "Yes, he's fourteen, so he's been doing this for two years.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 3,
              "trapType": "Wrong person's age",
              "explanation": "出現數字 14，但這是哥哥的年齡，並非 Simon 本人。"
            },
            {
              "speaker": "Amanda",
              "text": "And what happens after school? Do you take the boat straight back home?",
              "isKey": false,
              "isDistractor": false
            },
            {
              "speaker": "Simon",
              "text": "We have football practice until five o'clock. Then I go to my Aunt Tanya's house on the mainland. I eat my dinner with her, and then catch the seven o'clock evening ferry home.",
              "isKey": true,
              "targetQuestion": 4,
              "explanation": "正解句：Simon 在本島姑姑 Tanya 家吃晚餐 (eat dinner with her at Aunt Tanya's house)。"
            },
            {
              "speaker": "Amanda",
              "text": "That's convenient! Some people might find taking boats every day exciting or fun, but I think your school day is really unusual!",
              "isKey": true,
              "targetQuestion": 5,
              "explanation": "正解句：Amanda 表達自己的真實看法為 'really unusual'。排除 A (exciting) 與 B (fun)。"
            },
            {
              "speaker": "Simon",
              "text": "Haha, I suppose it is unusual, but for islanders it's just normal life!",
              "isKey": false,
              "isDistractor": false
            }
          ],
          "distractorXray": [
            {
              "speaker": "Simon",
              "text": "Why Amanda? Do you have to get up really early in the morning like me?",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 1,
              "trapType": "Opposite / Not applicable",
              "explanation": "Simon 提問 Amanda 是否早起，容易誤導考生選擇 C。"
            },
            {
              "speaker": "Amanda",
              "text": "No, not at all! I wake up at eight o'clock. But I watched a film on television in the living room, and then I went to sleep very late, past midnight!",
              "isKey": true,
              "targetQuestion": 1,
              "explanation": "正解句：Amanda 明確指出自己很晚才睡 (went to sleep very late, past midnight)。排除 A（在客廳看電視非床上）與 C（起床時間是 8 點不早）。"
            },
            {
              "speaker": "Simon",
              "text": "Wow, I could never do that. My mum knocks on my bedroom door and wakes me up at quarter past six.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 6.15，但這是 mum wakes me up 的時間，不是開船時間。"
            },
            {
              "speaker": "Simon",
              "text": "Well, I have breakfast and get dressed, and then I leave home at seven o'clock.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 2,
              "trapType": "Wrong action time",
              "explanation": "出現時間 7.00，但這是 leave home（離家出門）的時間。"
            },
            {
              "speaker": "Simon",
              "text": "I walk down to the port. The boat to school leaves the island at half past seven sharp, so I can't be late.",
              "isKey": true,
              "targetQuestion": 2,
              "explanation": "正解句：船在 7 點半 (half past seven = 7.30) 出航。"
            },
            {
              "speaker": "Simon",
              "text": "Only when we are older. The island primary school is for kids up to eleven. But I'm twelve now, so this year I have to go to the big school across the water.",
              "isKey": true,
              "targetQuestion": 3,
              "explanation": "正解句：Simon 親自說明 'I'm twelve now'。"
            },
            {
              "speaker": "Simon",
              "text": "Yes, he's fourteen, so he's been doing this for two years.",
              "isKey": false,
              "isDistractor": true,
              "targetQuestion": 3,
              "trapType": "Wrong person's age",
              "explanation": "出現數字 14，但這是哥哥的年齡，並非 Simon 本人。"
            },
            {
              "speaker": "Simon",
              "text": "We have football practice until five o'clock. Then I go to my Aunt Tanya's house on the mainland. I eat my dinner with her, and then catch the seven o'clock evening ferry home.",
              "isKey": true,
              "targetQuestion": 4,
              "explanation": "正解句：Simon 在本島姑姑 Tanya 家吃晚餐 (eat dinner with her at Aunt Tanya's house)。"
            },
            {
              "speaker": "Amanda",
              "text": "That's convenient! Some people might find taking boats every day exciting or fun, but I think your school day is really unusual!",
              "isKey": true,
              "targetQuestion": 5,
              "explanation": "正解句：Amanda 表達自己的真實看法為 'really unusual'。排除 A (exciting) 與 B (fun)。"
            }
          ],
          "prepTask": {
            "track": "Track 03",
            "description": "Listen to the first part of the conversation and choose the correct times.",
            "questions": [
              {
                "id": "l_p3_prep_1",
                "question": "What time does Simon wake up?",
                "options": [
                  {
                    "label": "a",
                    "text": "6.15"
                  },
                  {
                    "label": "b",
                    "text": "7.00"
                  }
                ],
                "answer": "a",
                "explanation": "Simon 說媽媽在 6 點 15 分叫醒他 (My mum wakes me up at quarter past six)。7 點是他離家出門的時間。"
              },
              {
                "id": "l_p3_prep_2",
                "question": "What time does Simon leave home?",
                "options": [
                  {
                    "label": "a",
                    "text": "7.00"
                  },
                  {
                    "label": "b",
                    "text": "7.30"
                  }
                ],
                "answer": "a",
                "explanation": "Simon 在 7 點整離開家 (I leave home at seven o'clock)；7 點 30 分是開往本島渡輪的出航時間。"
              }
            ]
          },
          "questionWordsDrill": [
            {
              "id": "qw_1",
              "question": "____ is Tanya?",
              "answer": "Who",
              "subQuestions": [
                {
                  "text": "Who is Tanya?",
                  "options": [
                    "Simon's sister",
                    "Simon's aunt"
                  ],
                  "correct": "Simon's aunt"
                }
              ]
            },
            {
              "id": "qw_2",
              "question": "____ does Simon live?",
              "answer": "Where",
              "subQuestions": [
                {
                  "text": "Where does Simon live?",
                  "options": [
                    "on an island",
                    "near his school"
                  ],
                  "correct": "on an island"
                }
              ]
            },
            {
              "id": "qw_3",
              "question": "____ does Simon's mum wake him up?",
              "answer": "What time",
              "subQuestions": [
                {
                  "text": "What time does Simon's mum wake him up?",
                  "options": [
                    "6.15",
                    "7.15"
                  ],
                  "correct": "6.15"
                }
              ]
            },
            {
              "id": "qw_4",
              "question": "____ does Simon go to school each day?",
              "answer": "How",
              "subQuestions": [
                {
                  "text": "How does Simon go to school each day?",
                  "options": [
                    "by bus",
                    "by boat"
                  ],
                  "correct": "by boat"
                }
              ]
            },
            {
              "id": "qw_5",
              "question": "____ do children on the island change school?",
              "answer": "When",
              "subQuestions": [
                {
                  "text": "When do children on the island change school?",
                  "options": [
                    "at six years old",
                    "at 12 years old"
                  ],
                  "correct": "at 12 years old"
                }
              ]
            },
            {
              "id": "qw_6",
              "question": "____ does Simon do at 7 a.m.?",
              "answer": "What",
              "subQuestions": [
                {
                  "text": "What does Simon do at 7 a.m.?",
                  "options": [
                    "leave home",
                    "get on a boat"
                  ],
                  "correct": "leave home"
                }
              ]
            }
          ]
        },
        "listeningPart2": null,
        "listeningPart4": null,
        "writing": {
          "part": 7,
          "title": "Writing Part 7 - 3-Picture Story (Late for the School Bus)",
          "picturePrompt": "assets/images/u1/u1_writing_part7_exam.jpg",
          "storyTitle": "Rushing for the School Bus",
          "blocks": [
            {
              "scene": "Picture 1: Boy relaxing in his bedroom",
              "options": [
                "One morning, Jack was sitting on his bed in his bedroom.",
                "He was wearing his uniform and listening to music on his phone.",
                "He felt relaxed and didn't check what time it was."
              ],
              "keyVocab": [
                "bedroom",
                "on his bed",
                "relaxing",
                "uniform"
              ],
              "hint": "說明時間背景、人物在臥室放鬆、未注意時間。"
            },
            {
              "scene": "Picture 2: Father pointing at the wall clock in the kitchen",
              "options": [
                "Suddenly, his father rushed into the kitchen and pointed at the wall clock.",
                "It was already half past eight! His sister was quickly finishing her breakfast.",
                "His father shouted angrily, 'Look at the time! You're going to miss the bus!'"
              ],
              "keyVocab": [
                "kitchen",
                "pointed at the clock",
                "half past eight",
                "eating breakfast"
              ],
              "hint": "說明圖二轉折：爸爸指著時鐘提醒快遲到，妹妹正在吃早餐。"
            },
            {
              "scene": "Picture 3: Running down the street to catch the red school bus",
              "options": [
                "Jack and his sister quickly picked up their school bags and ran out of the house.",
                "The big red school bus was already leaving the stop down the street.",
                "His sister waved her arm and ran as fast as she could to catch it."
              ],
              "keyVocab": [
                "ran out of the house",
                "along the street",
                "red school bus",
                "waved her hand",
                "catch the bus"
              ],
              "hint": "說明結果：抓起書包衝出家門，朝著即將開走的紅色校車奔跑招手。"
            }
          ],
          "rubricChecklist": {
            "content": {
              "maxScore": 5,
              "name": "Content (內容完整性)",
              "requirements": [
                "Mention Picture 1: 男孩在臥室床上放鬆/聽音樂，沒有意識到時間流逝。",
                "Mention Picture 2: 爸爸在廚房憤怒或著急地指著時鐘，妹妹正在吃早餐/麥片。",
                "Mention Picture 3: 衝出門跑向街道，向即將開走的紅色公車招手趕車。"
              ]
            },
            "organisation": {
              "maxScore": 5,
              "name": "Organisation (組織與連貫性)",
              "requirements": [
                "故事符合三張圖的時間邏輯順序（起因 -> 發展 -> 結果）。",
                "正確使用時間連接詞與副詞：One morning, Suddenly, Then, At that moment, Finally。",
                "字數必須達到 35 字以上（建議 45~60 字，既無贅字又能拿滿分）。"
              ]
            },
            "language": {
              "maxScore": 5,
              "name": "Language (語言與文法精準度)",
              "requirements": [
                "全文時態保持一致（強烈建議使用過去式 Past Simple / Past Continuous）。",
                "精準使用地方介系詞：in his bedroom, at the clock, out of the house, along the street。",
                "拼字與標點零失誤（breakfast, clock, caught, uniform）。"
              ]
            }
          },
          "sampleAnswer": {
            "merit13": {
              "level": "保底 13 盾標準範文 (Grade B Merit)",
              "wordCount": 43,
              "text": "One morning, Jack sat on his bed and listened to music. Then his father pointed at the clock in the kitchen and said they were late. Jack and his sister ran out of the house. His sister waved to catch the red bus.",
              "breakdown": "結構精簡，完整囊括三幅圖要素，時態統一使用過去式 (sat, listened, pointed, ran, waved)，無文法錯誤，字數 43 字順利突破 35 字門檻。"
            },
            "distinction15": {
              "level": "滿分 15 盾卓越範文 (Grade A Distinction)",
              "wordCount": 61,
              "text": "One morning, Jack was sitting on his bed in his bedroom, relaxing with music. Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly ate her breakfast. They rushed out of the house, and his sister ran along the street, waving her hand to catch the departing red school bus.",
              "breakdown": "使用過去進行式 (was sitting) 營造背景氛圍；轉折副詞 (Suddenly) 帶出緊張感；搭配多元高頻詞彙 (relaxing, rushed, along the street, waving her hand, departing)；介系詞運用精準無比。"
            }
          },
          "sampleAnswers": {
            "guaranteed13Shields": {
              "level": "保底 13 盾標準範文 (Grade B Merit)",
              "wordCount": 43,
              "text": "One morning, Jack sat on his bed and listened to music. Then his father pointed at the clock in the kitchen and said they were late. Jack and his sister ran out of the house. His sister waved to catch the red bus.",
              "breakdown": "結構精簡，完整囊括三幅圖要素，時態統一使用過去式 (sat, listened, pointed, ran, waved)，無文法錯誤，字數 43 字順利突破 35 字門檻。"
            },
            "fullMarks15Shields": {
              "level": "滿分 15 盾卓越範文 (Grade A Distinction)",
              "wordCount": 61,
              "text": "One morning, Jack was sitting on his bed in his bedroom, relaxing with music. Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly ate her breakfast. They rushed out of the house, and his sister ran along the street, waving her hand to catch the departing red school bus.",
              "breakdown": "使用過去進行式 (was sitting) 營造背景氛圍；轉折副詞 (Suddenly) 帶出緊張感；搭配多元高頻詞彙 (relaxing, rushed, along the street, waving her hand, departing)；介系詞運用精準無比。"
            }
          },
          "practiceTask": {
            "title": "Practice 3-Picture Story (Boy in Bookshop)",
            "image": "assets/images/u1/u1_writing_part7_bookshop.jpg",
            "description": "Picture 1: A boy bought a book in a shop. Picture 2: He walked away and left his wallet on the counter. Picture 3: The shop assistant ran after him and gave the wallet back.",
            "sampleStory": "A boy bought a book in a shop. He paid the money and walked out, but he forgot his wallet on the desk. The friendly shop assistant picked it up, ran outside and gave the wallet back to the boy."
          }
        },
        "speaking": {
          "part": 1,
          "title": "Speaking Part 1 - Describing People & Personal Questions",
          "examTip": "Try to say at least three sentences for each 'Tell me something about...' question. Extend your answers using because, so, and, and but.",
          "image": "assets/images/u1/u1_speaking_people_af.jpg",
          "questions": [
            {
              "id": "sp_et_1",
              "prompt": "Tell me something about your school day.",
              "suggestedAnswer": "I wake up at seven o'clock and walk to school with my friends. My school starts at eight o'clock and finishes at four in the afternoon. In the evening, I do my homework and play computer games.",
              "connectors": "I wake up at seven, AND I walk to school. My favourite subject is science BECAUSE we do fun experiments.",
              "tips": "至少回答三句話：起床時間 + 上學方式 + 放學後的活動。"
            },
            {
              "id": "sp_et_2",
              "prompt": "Tell me something about your favourite teacher.",
              "suggestedAnswer": "My favourite teacher is Mr Davies, who teaches us English. He has got short brown hair and always wears funny glasses. He is very kind and patient, so his classes are always interesting.",
              "connectors": "I like him BECAUSE he tells great stories, SO everyone enjoys his lessons.",
              "tips": "描述名字與教授科目 + 外貌特徵 + 喜歡的理由（個性與教學風格）。"
            },
            {
              "id": "sp_et_3",
              "prompt": "Tell me something about what you do at the weekend.",
              "suggestedAnswer": "On Saturday mornings, I usually play football in the park with my classmates. Then on Sunday, my family often visits my grandparents and we have lunch together. In the evening, I prepare my school bag for Monday.",
              "connectors": "I love weekends BECAUSE I can sleep a bit longer, AND I can play sports outside.",
              "tips": "按照週六與週日的時間順序組織回答，提到運動、家庭與休閒活動。"
            },
            {
              "id": "sp_et_4",
              "prompt": "Tell me something about your best friend.",
              "suggestedAnswer": "My best friend is called Leo and we are in the same class at school. He has got dark curly hair and he is very good at basketball. We often do our homework together after school.",
              "connectors": "He is my best friend BECAUSE he is funny, AND we share the same hobbies.",
              "tips": "說出名字與關係 + 外貌特徵與專長 + 平常一起從事的活動。"
            }
          ],
          "appearanceMatching": {
            "items": [
              {
                "id": "sp_app_1",
                "description": "Jason's my best friend. He's got short, curly hair and blue eyes. He's very tall.",
                "match": "F",
                "features": "男生、金色捲髮、藍眼睛、身材高大、穿綠色襯衫外搭紅色內裡。"
              },
              {
                "id": "sp_app_2",
                "description": "My sister Lee has got brown eyes. Her hair's short and curly. She's really tall.",
                "match": "A",
                "features": "女生、黑色短捲髮、棕色眼睛、高挑身材、穿藍色短袖與深色長褲。"
              },
              {
                "id": "sp_app_3",
                "description": "Trent's in my class. His eyes are blue. He's got straight hair and he's short.",
                "match": "D",
                "features": "小男生、金黃色直立短髮、藍眼睛、個頭嬌小、穿橘色 Polo 衫。"
              },
              {
                "id": "sp_app_4",
                "description": "Jenny's quite short. She's got long, dark, straight hair and green eyes.",
                "match": "C",
                "features": "女生、黑色長直髮、綠色眼睛、穿粉紅色上衣與墨綠色長褲。"
              },
              {
                "id": "sp_app_5",
                "description": "Lucas has got dark curly hair and wears a bright green T-shirt.",
                "match": "B",
                "features": "男生、黑色短捲髮、笑臉、穿亮綠色短袖與紫色短褲。"
              },
              {
                "id": "sp_app_6",
                "description": "Emma has got long straight blonde hair and a warm purple sweater.",
                "match": "E",
                "features": "女生、金色長直髮、金髮碧眼、穿紫色長袖毛衣與白褲。"
              }
            ]
          },
          "teacherDescription": {
            "title": "Describing a Teacher (Mrs Reed - p.11 Ex 6)",
            "gaps": [
              {
                "gap": 1,
                "prompt": "What's her name?",
                "answer": "Her name's",
                "full": "Her name's Mrs Reed."
              },
              {
                "gap": 2,
                "prompt": "What does she look like?",
                "answer": "She's got",
                "full": "She's got short dark hair and blue eyes."
              },
              {
                "gap": 3,
                "prompt": "What does she do every day?",
                "answer": "She travels / drives",
                "full": "She travels to school by car."
              },
              {
                "gap": 4,
                "prompt": "Where does she eat?",
                "answer": "She has",
                "full": "She has lunch at school."
              },
              {
                "gap": 5,
                "prompt": "Your opinion",
                "answer": "she is very kind and patient",
                "full": "I like her because she is very kind and patient."
              }
            ]
          }
        },
        "speakingPart2": null,
        "revision": {
          "unitId": "u1",
          "totalPoints": 27,
          "totalMarks": 27,
          "pageImage": "assets/pages/rev_u1_u2_p78_p79.jpg",
          "exercises": [
            {
              "title": "Exercise 1: Complete the dialogues with the correct form of have got",
              "marks": 5,
              "items": [
                {
                  "itemNumber": 1,
                  "dialogue": "A: (1) ____ (you) any brothers or sisters?\nB: Yes, I (2) ____ a sister and two brothers.",
                  "answers": [
                    {
                      "gap": 1,
                      "answer": "Have you got"
                    },
                    {
                      "gap": 2,
                      "answer": "have. I've got / have. I have got"
                    }
                  ],
                  "explanation": "問句用 Have you got...，肯定簡答用 Yes, I have，後接完整句 I've got。"
                },
                {
                  "itemNumber": 2,
                  "dialogue": "A: (3) ____ (Manuela) a sandwich for lunch?\nB: No, she (4) ____. She (5) ____ a salad.",
                  "answers": [
                    {
                      "gap": 3,
                      "answer": "Has Manuela got"
                    },
                    {
                      "gap": 4,
                      "answer": "hasn't"
                    },
                    {
                      "gap": 5,
                      "answer": "has got / 's got"
                    }
                  ],
                  "explanation": "Manuela 為第三人稱單數，問句用 Has Manuela got，否定簡答 No, she hasn't，肯定句用 has got。"
                },
                {
                  "itemNumber": 3,
                  "dialogue": "A: (6) ____ (your parents) a car?\nB: No, (7) ____, but my mum (8) ____ a motorbike and my dad (9) ____ a bicycle!",
                  "answers": [
                    {
                      "gap": 6,
                      "answer": "Have your parents got"
                    },
                    {
                      "gap": 7,
                      "answer": "they haven't"
                    },
                    {
                      "gap": 8,
                      "answer": "has got / 's got"
                    },
                    {
                      "gap": 9,
                      "answer": "has got / 's got"
                    }
                  ],
                  "explanation": "your parents 為複數 they，問句用 Have your parents got，簡答 No, they haven't；媽媽與爸爸各自為單數，用 has got。"
                },
                {
                  "itemNumber": 4,
                  "dialogue": "A: It's raining. (10) ____ (you) an umbrella?\nB: No, I (11) ____.",
                  "answers": [
                    {
                      "gap": 10,
                      "answer": "Have you got"
                    },
                    {
                      "gap": 11,
                      "answer": "haven't"
                    }
                  ],
                  "explanation": "問句 Have you got an umbrella? 否定簡答 No, I haven't。"
                },
                {
                  "itemNumber": 5,
                  "dialogue": "A: Daniel can't come swimming today because he (12) ____ any money.\nB: I (13) ____ some money so I can pay for him!",
                  "answers": [
                    {
                      "gap": 12,
                      "answer": "hasn't got"
                    },
                    {
                      "gap": 13,
                      "answer": "have got / 've got"
                    }
                  ],
                  "explanation": "Daniel 沒錢為否定句 hasn't got any money；我有錢為肯定句 I've got some money。"
                }
              ]
            },
            {
              "title": "Exercise 2: Write the correct word to finish the sentences",
              "marks": 8,
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "My mother's mother is my ____.",
                  "answer": "grandmother / grandma",
                  "zh": "外婆/祖母"
                },
                {
                  "itemNumber": 2,
                  "sentence": "My mum and dad are my ____.",
                  "answer": "parents",
                  "zh": "父母雙親"
                },
                {
                  "itemNumber": 3,
                  "sentence": "My sister is my mother's ____.",
                  "answer": "daughter",
                  "zh": "女兒"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My uncle is my aunt's ____.",
                  "answer": "husband",
                  "zh": "丈夫"
                },
                {
                  "itemNumber": 5,
                  "sentence": "My aunt's son is my ____.",
                  "answer": "cousin",
                  "zh": "堂（表）兄弟"
                },
                {
                  "itemNumber": 6,
                  "sentence": "My mother is my father's ____.",
                  "answer": "wife",
                  "zh": "妻子"
                },
                {
                  "itemNumber": 7,
                  "sentence": "My uncle is my mum's ____.",
                  "answer": "brother",
                  "zh": "兄弟（舅舅）"
                },
                {
                  "itemNumber": 8,
                  "sentence": "My mum and my uncle are my grandfather's ____.",
                  "answer": "children",
                  "zh": "子女/孩子們"
                }
              ]
            },
            {
              "title": "Exercise 3: Choose the correct word to complete the sentences",
              "marks": 8,
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "What time do / does you go to bed at the weekend?",
                  "options": [
                    "do",
                    "does"
                  ],
                  "answer": "do",
                  "explanation": "主詞為 you，助動詞使用 do。"
                },
                {
                  "itemNumber": 2,
                  "sentence": "Mariana don't walk / doesn't walk to school because it's too far.",
                  "options": [
                    "don't walk",
                    "doesn't walk"
                  ],
                  "answer": "doesn't walk",
                  "explanation": "主詞 Mariana 為第三人稱單數 (she)，否定句使用 doesn't walk。"
                },
                {
                  "itemNumber": 3,
                  "sentence": "Most students go / goes to the town centre on Saturday afternoons.",
                  "options": [
                    "go",
                    "goes"
                  ],
                  "answer": "go",
                  "explanation": "主詞 Most students 為複數 (they)，動詞使用原形 go。"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My brother play / plays football three times a week.",
                  "options": [
                    "play",
                    "plays"
                  ],
                  "answer": "plays",
                  "explanation": "主詞 My brother 為第三人稱單數 (he)，動詞字尾加 -s 變為 plays。"
                },
                {
                  "itemNumber": 5,
                  "sentence": "Where do / does your best friend live?",
                  "options": [
                    "do",
                    "does"
                  ],
                  "answer": "does",
                  "explanation": "主詞 your best friend 為單數 (he/she)，助動詞使用 does。"
                },
                {
                  "itemNumber": 6,
                  "sentence": "Linda don't do / doesn't do her homework at home - she goes to the library.",
                  "options": [
                    "don't do",
                    "doesn't do"
                  ],
                  "answer": "doesn't do",
                  "explanation": "主詞 Linda 為第三人稱單數 (she)，否定句使用 doesn't do。"
                },
                {
                  "itemNumber": 7,
                  "sentence": "We start / starts school at eight am.",
                  "options": [
                    "start",
                    "starts"
                  ],
                  "answer": "start",
                  "explanation": "主詞 We 為第一人稱複數，動詞使用原形 start。"
                },
                {
                  "itemNumber": 8,
                  "sentence": "Do your friends watch / watches TV in the evening?",
                  "options": [
                    "watch",
                    "watches"
                  ],
                  "answer": "watch",
                  "explanation": "助動詞 Do 後面接原形動詞 watch。"
                }
              ]
            },
            {
              "title": "Exercise 4: Choose the correct adjective to complete the sentences",
              "marks": 6,
              "wordBox": [
                "curly",
                "dark",
                "long",
                "short",
                "straight",
                "tall"
              ],
              "items": [
                {
                  "itemNumber": 1,
                  "sentence": "My dad's got black hair and mine is the same - it's very ____.",
                  "answer": "dark",
                  "explanation": "黑色頭髮屬於深色 (dark hair)。"
                },
                {
                  "itemNumber": 2,
                  "sentence": "My brother is very ____ - he's almost 1.9 m.",
                  "answer": "tall",
                  "explanation": "身高將近 1.9 公尺，身材非常高大 (tall)。"
                },
                {
                  "itemNumber": 3,
                  "sentence": "I want to cut my hair because it's too ____.",
                  "answer": "long",
                  "explanation": "想要剪頭髮是因為頭髮太長 (too long)。"
                },
                {
                  "itemNumber": 4,
                  "sentence": "My sister's got very straight hair but mine is different - it's ____.",
                  "answer": "curly",
                  "explanation": "姊妹的頭髮很直，但我的不同，是捲髮 (curly)。"
                },
                {
                  "itemNumber": 5,
                  "sentence": "Alison cut her hair last week. Now it's very ____.",
                  "answer": "short",
                  "explanation": "上週剪了頭髮，現在變得非常短 (very short)。"
                },
                {
                  "itemNumber": 6,
                  "sentence": "His hair is short, blond and ____. It's not curly.",
                  "answer": "straight",
                  "explanation": "不是捲髮 (not curly)，因此是直髮 (straight)。"
                }
              ]
            }
          ]
        },
        "revisionUnit2": null,
        "revisionUnit3": null
      }
    },
    {
      "id": "u2",
      "number": 2,
      "title": "In my free time",
      "topic": "Hobbies & Leisure",
      "grammarFocus": [
        "Adverbs of frequency (always, usually, often, sometimes, never, twice a week, etc.)",
        "Do you like ... ? (general habits) vs Would you like ... ? (invitations / offers)",
        "Pronouns (subject, object, possessive adjectives)"
      ],
      "spreadPages": [
        "assets/pages/u2_p12_p13.jpg",
        "assets/pages/u2_p14_p15.jpg",
        "assets/pages/u2_p16_p17.jpg"
      ],
      "revisionPage": "assets/pages/rev_u1_u2_p78_p79.jpg",
      "images": [
        {
          "id": "u2_hobbies_clubs",
          "path": "assets/images/u2/u2_hobbies_clubs.jpg",
          "description": "Unit 2 p.12 School clubs messages (Camera, Camping, Music, Art)"
        },
        {
          "id": "u2_invitations_cartoon",
          "path": "assets/images/u2/u2_invitations_cartoon.jpg",
          "description": "Unit 2 p.14 Sam & Ruby invitations cartoons (Cooking Club)"
        },
        {
          "id": "u2_hasan_bedroom",
          "path": "assets/images/u2/u2_hasan_bedroom.jpg",
          "description": "Unit 2 p.17 Hasan and his bedroom (drums, camera, books)"
        }
      ],
      "vocabulary": [
        {
          "word": "camera club",
          "pos": "n. phr.",
          "zh": "攝影社團",
          "collocation": "join a camera club / in the camera club",
          "example": "I'm in the Camera Club. It's brilliant. We usually take photos in the school.",
          "tip": "社團介系詞用 in（在社團中）或搭配動詞 join（加入）。"
        },
        {
          "word": "camping",
          "pos": "n.",
          "zh": "露營；野營",
          "collocation": "go camping / camping trip / Camping Club",
          "example": "Would you like to go camping with me next week?",
          "tip": "從事露營活動一律搭配動詞 go camping，不可用 play camping。"
        },
        {
          "word": "instrument",
          "pos": "n.",
          "zh": "樂器",
          "collocation": "play an instrument / musical instrument",
          "example": "We listen to songs and we sometimes play an instrument.",
          "tip": "instrument 為母音開頭，單數時務必加上不定冠詞 an。"
        },
        {
          "word": "collect",
          "pos": "v.",
          "zh": "收集；收藏",
          "collocation": "collect things / collect stamps / collect coins",
          "example": "Do you collect things like badges or key rings in your free time?",
          "tip": "名詞形式為 collection（收藏品）與 collector（收藏家）。"
        },
        {
          "word": "brilliant at",
          "pos": "adj. phr.",
          "zh": "極有才華的；非常擅長的",
          "collocation": "be brilliant at + V-ing/N",
          "example": "My brother is brilliant at cooking. He often makes dinner for the family.",
          "tip": "語氣比 good at 更強烈，表示『頂尖、出神入化』，介系詞固定接 at。"
        },
        {
          "word": "terrible at",
          "pos": "adj. phr.",
          "zh": "極差勁的；非常不擅長的",
          "collocation": "be terrible at + V-ing/N",
          "example": "Irene hates going to discos because she is terrible at dancing.",
          "tip": "為 brilliant at / good at 的強烈反義詞，介系詞固定接 at。"
        },
        {
          "word": "good-looking",
          "pos": "adj.",
          "zh": "容貌好看的；英俊漂亮的",
          "collocation": "a really good-looking actor / person",
          "example": "He's really good-looking, isn't he?",
          "tip": "由 good + looking 組成的複合形容詞，常用於形容男女面貌，同義詞為 attractive。"
        },
        {
          "word": "attractive",
          "pos": "adj.",
          "zh": "有吸引力的；動人的",
          "collocation": "an attractive place / attractive person",
          "example": "She is an attractive young woman with a warm smile.",
          "tip": "在 Reading Part 3 經常與 good-looking 互為同義替換詞。"
        },
        {
          "word": "well-known",
          "pos": "adj.",
          "zh": "著名的；眾所皆知的",
          "collocation": "a well-known writer / painter / artist",
          "example": "She's not well-known, and her stories aren't easy to understand, but this one is really interesting.",
          "tip": "在 KET 閱讀中為 famous 的標準同義替換詞，中間有連字號。"
        },
        {
          "word": "invitation",
          "pos": "n.",
          "zh": "邀請；邀約",
          "collocation": "say 'yes' to an invitation / accept an invitation / invitation to sth",
          "example": "Underline one expression in Exercise 2 that we can use to say 'yes' to an invitation.",
          "tip": "動詞為 invite，邀約某人去某處用 invite sb to somewhere。"
        },
        {
          "word": "afraid",
          "pos": "adj.",
          "zh": "害怕的；（口語委婉）恐怕",
          "collocation": "be afraid of / I'm afraid not / I'm afraid I can't / I'm afraid I'm busy",
          "example": "Would you like to come? - I'm afraid not. I have to study.",
          "tip": "KET 口語中常用 I'm afraid not 或 I'm afraid I'm busy 禮貌拒絕邀約。"
        },
        {
          "word": "nature",
          "pos": "n.",
          "zh": "大自然；自然界",
          "collocation": "painter of nature / love nature / in the countryside",
          "example": "I love animals and being in the countryside, so I hope to be a painter of nature.",
          "tip": "不可數名詞，形容詞為 natural。重音在第一音節 /ˈneɪtʃər/。"
        },
        {
          "word": "advice",
          "pos": "n.",
          "zh": "建議；忠告",
          "collocation": "have any advice for sb / give advice / a piece of advice",
          "example": "Do you have any advice for other young painters?",
          "tip": "注意 advice 為【不可數名詞】，絕對不能加 -s 或加 an；動詞拼寫為 advise。"
        },
        {
          "word": "opinion",
          "pos": "n.",
          "zh": "意見；看法",
          "collocation": "other people's opinions / in my opinion / ask sb's opinion",
          "example": "Remember to ask other people what they think of your paintings - even if you don't like what they say.",
          "tip": "名詞可數，片語 in my opinion（依我看）是口說 Part 1 與寫作高分常用詞。"
        },
        {
          "word": "spend time",
          "pos": "v. phr.",
          "zh": "花費時間；度過時光",
          "collocation": "spend time with friends / spend time outdoors / spend time doing sth",
          "example": "Who do you spend time with at the weekend? - I spend time with my friends.",
          "tip": "用法為 spend time + with sb 或 spend time + V-ing，介系詞不可用 at 或 in。"
        },
        {
          "word": "try new food",
          "pos": "v. phr.",
          "zh": "嘗試新料理；品嚐不同食物",
          "collocation": "enjoy trying new food / interested in trying new food",
          "example": "Do you like trying new food? - Oh yes! I love eating food from all over the world.",
          "tip": "try + V-ing 表示嘗試做某種體驗；try + to V 則表示努力嘗試克服困難。"
        },
        {
          "word": "bored",
          "pos": "adj.",
          "zh": "感到無聊的；感到厭煩的",
          "collocation": "bored at the weekend / get bored / feel bored with",
          "example": "I joined the Camping Club as well because I'm often bored at the weekend.",
          "tip": "情緒形容詞 -ed 修飾人（感到無聊），-ing（boring）修飾令人無聊的人或事物。"
        },
        {
          "word": "competition",
          "pos": "n.",
          "zh": "競賽；比賽",
          "collocation": "enter a painting competition / come first in a competition",
          "example": "About a year later, I decided to enter a painting competition. I came first!",
          "tip": "動詞為 compete，得第一名搭配動詞片語 come first in..."
        }
      ],
      "commonMistakes": [
        {
          "id": "u2_cm_adv_1",
          "wrong": "normaly",
          "correct": "normally",
          "errorSpan": "normaly",
          "correction": "normally",
          "rule": "拼寫錯誤：副詞 normally 必須是雙 l（normal + ly = normally）。"
        },
        {
          "id": "u2_cm_adv_2",
          "wrong": "often are",
          "correct": "are often",
          "errorSpan": "often are",
          "correction": "are often",
          "rule": "位置錯誤：頻率副詞遇到 be 動詞時，必須放在 be 動詞【之後】（They are often 60 minutes long）。"
        },
        {
          "id": "u2_cm_adv_3",
          "wrong": "somtimes",
          "correct": "sometimes",
          "errorSpan": "somtimes",
          "correction": "sometimes",
          "rule": "拼寫錯誤：sometimes 中間漏掉了字母 e，正確拼法為 s-o-m-e-t-i-m-e-s。"
        },
        {
          "id": "u2_cm_adv_4",
          "wrong": "don't never",
          "correct": "never (或 don't ever)",
          "errorSpan": "don't never",
          "correction": "never (或 don't ever)",
          "rule": "雙重否定錯誤：英文中 never 本身已具否定含意，不可與助動詞 don't 連用，應改為 I never eat at school 或 I don't ever eat at school。"
        },
        {
          "id": "u2_cm_adv_5",
          "wrong": "ussually",
          "correct": "usually",
          "errorSpan": "ussually",
          "correction": "usually",
          "rule": "拼寫錯誤：usually 是一個 s、兩個 l（u-s-u-a-l-l-y），考生常誤拼成雙 s。"
        },
        {
          "id": "u2_cm_adv_6",
          "wrong": "two times a month",
          "correct": "twice a month",
          "errorSpan": "two times a month",
          "correction": "twice a month",
          "rule": "習慣搭配錯誤：英文中『一個月兩次』慣用 twice a month，而非直譯的 two times a month。"
        },
        {
          "id": "u2_cm_adv_7",
          "wrong": "Always she cooks",
          "correct": "She always cooks",
          "errorSpan": "Always she cooks",
          "correction": "She always cooks",
          "rule": "位置錯誤：單詞頻率副詞 always 習慣放在主詞與一般動詞之間（She always cooks），不置於句首。"
        },
        {
          "id": "u2_cm_pro_1",
          "wrong": "I like my bedroom and the dining room because [they] are big.",
          "correct": "I like my bedroom and the dining room because [they] are big.",
          "errorSpan": "they",
          "correction": "they",
          "rule": "先行詞為 my bedroom and the dining room 兩者，主格代名詞必須用複數 they。"
        },
        {
          "id": "u2_cm_pro_2",
          "wrong": "Because [it] is summer here the weather is very nice.",
          "correct": "Because [it] is summer here the weather is very nice.",
          "errorSpan": "it",
          "correction": "it",
          "rule": "在英文中指稱季節（summer）、天氣、時間或距離時，必須使用無生命虛主詞 it。"
        },
        {
          "id": "u2_cm_pro_3",
          "wrong": "I want a pen friend from England. I want [him] to be a boy.",
          "correct": "I want a pen friend from England. I want [him] to be a boy.",
          "errorSpan": "him",
          "correction": "him",
          "rule": "動詞 want 後接受格代名詞，後文特別限定 to be a boy，因此必須使用陽性單數受格 him。"
        },
        {
          "id": "u2_cm_pro_4",
          "wrong": "She is very friendly. One day I visited [her] and we went to the cinema.",
          "correct": "She is very friendly. One day I visited [her] and we went to the cinema.",
          "errorSpan": "her",
          "correction": "her",
          "rule": "動詞 visited 後方需接女性單數受格代名詞 her。"
        },
        {
          "id": "u2_cm_pro_5",
          "wrong": "I want to have a pen friend in another country. I prefer that he or [she] comes from Holland.",
          "correct": "I want to have a pen friend in another country. I prefer that he or [she] comes from Holland.",
          "errorSpan": "she",
          "correction": "she",
          "rule": "or 連接主詞對等成分，與 he 並列的主格代名詞為 she。"
        },
        {
          "id": "u2_cm_pro_6",
          "wrong": "I have many books that I don't need any more. I'd like to sell [them].",
          "correct": "I have many books that I don't need any more. I'd like to sell [them].",
          "errorSpan": "them",
          "correction": "them",
          "rule": "動詞 sell 後接受格，先行詞是複數名詞 many books，因此受格代名詞為 them。"
        },
        {
          "id": "u2_cm_pro_7",
          "wrong": "I'm selling my computer because I've got no space for [it] in my bedroom.",
          "correct": "I'm selling my computer because I've got no space for [it] in my bedroom.",
          "errorSpan": "it",
          "correction": "it",
          "rule": "介系詞 for 後方接單數中性代名詞 it，指稱前面提到的 my computer。"
        }
      ],
      "exercises": {
        "grammarVocabDrills": {
          "p12_ex1_collocations": {
            "title": "Page 12 Ex 1: Activities with Words from the Box",
            "instruction": "Complete the activities with words from the box.",
            "wordBox": [
              "collect",
              "draw",
              "listen",
              "play",
              "play",
              "sleep",
              "take",
              "watch"
            ],
            "items": [
              {
                "id": 1,
                "verb": "play",
                "phrase": "an instrument",
                "full": "play an instrument",
                "zh": "彈奏樂器"
              },
              {
                "id": 2,
                "verb": "collect",
                "phrase": "things",
                "full": "collect things",
                "zh": "收集物品"
              },
              {
                "id": 3,
                "verb": "play",
                "phrase": "sports",
                "full": "play sports",
                "zh": "做運動"
              },
              {
                "id": 4,
                "verb": "draw",
                "phrase": "pictures",
                "full": "draw pictures",
                "zh": "畫畫"
              },
              {
                "id": 5,
                "verb": "take",
                "phrase": "photos",
                "full": "take photos",
                "zh": "拍照"
              },
              {
                "id": 6,
                "verb": "watch",
                "phrase": "films",
                "full": "watch films",
                "zh": "看電影"
              },
              {
                "id": 7,
                "verb": "listen",
                "phrase": "to songs",
                "full": "listen to songs",
                "zh": "聽歌"
              },
              {
                "id": 8,
                "verb": "sleep",
                "phrase": "in a tent",
                "full": "sleep in a tent",
                "zh": "睡在帳篷裡"
              }
            ]
          },
          "p12_ex2_club_messages": {
            "title": "Page 12 Ex 2: School Clubs Messages",
            "instruction": "Complete the messages with words from Exercise 1.",
            "image": "assets/images/u2/u2_hobbies_clubs.jpg",
            "messages": [
              {
                "club": "Camera Club & Camping Club",
                "text": "We've got some great clubs in my school. I'm in the Camera Club. It's brilliant. We usually take (1) [photos] in the school but we also go to the town centre once a month. We sometimes watch (2) [films], too. I joined the Camping Club as well because I'm often bored at the weekend. About four times a year, we sleep (3) [in a tent]."
              },
              {
                "club": "Music Club & Art Club",
                "text": "I'm in the Music Club. We always meet twice a week. We listen (4) [to songs] and we sometimes play an (5) [instrument]. My friends are in the Art Club and they draw (6) [pictures] every Monday."
              }
            ],
            "answers": [
              {
                "gap": 1,
                "answer": "photos",
                "clue": "take photos"
              },
              {
                "gap": 2,
                "answer": "films",
                "clue": "watch films"
              },
              {
                "gap": 3,
                "answer": "in a tent",
                "clue": "sleep in a tent"
              },
              {
                "gap": 4,
                "answer": "to songs",
                "clue": "listen to songs"
              },
              {
                "gap": 5,
                "answer": "instrument",
                "clue": "play an instrument"
              },
              {
                "gap": 6,
                "answer": "pictures",
                "clue": "draw pictures"
              }
            ]
          },
          "p12_ex3_adverbs_of_frequency_rules": {
            "title": "Page 12 Ex 3: Rules of Adverbs of Frequency",
            "instruction": "Look at the words in bold in the messages in Exercise 2, then complete the rules with the correct words.",
            "referencePage": 92,
            "rules": [
              {
                "id": 1,
                "text": "Adverbs of frequency (e.g. always, often, etc.) go before / after the verb be.",
                "correctChoice": "after",
                "explanation": "遇到 be 動詞時，頻率副詞放在 be 動詞後面（e.g. I am often bored at the weekend）。"
              },
              {
                "id": 2,
                "text": "Adverbs of frequency (e.g. always, often, etc.) go before / after all other verbs.",
                "correctChoice": "before",
                "explanation": "遇到一般動詞時，頻率副詞放在一般動詞前面（e.g. We usually take photos; We sometimes watch films）。"
              },
              {
                "id": 3,
                "text": "Adverbial phrases (e.g. once a month, twice a year, every day, etc.) can go at the beginning and end / end of the sentence.",
                "correctChoice": "beginning and end",
                "explanation": "片語型時間/頻率副詞（once a month, twice a week, every Monday 等）可放在句尾或句首（e.g. About four times a year, we sleep in a tent / We go once a month）。"
              }
            ]
          },
          "p12_ex5_frequency_practice": {
            "title": "Page 12 Ex 5: Complete Sentences with Frequency Expressions",
            "instruction": "Complete the sentences with the words and phrases from the box.",
            "wordBox": [
              "always",
              "every day",
              "sometimes",
              "three times a week"
            ],
            "items": [
              {
                "id": 1,
                "sentence": "When we go on holiday, my mum [sometimes] takes photos of the hotel, but not always.",
                "answer": "sometimes",
                "isExample": true,
                "clue": "but not always（並非總是，表示偶爾）"
              },
              {
                "id": 2,
                "sentence": "My sister goes to a Music Club on Tuesday, Thursday and Friday. She has a piano lesson [three times a week].",
                "answer": "three times a week",
                "isExample": false,
                "clue": "Tuesday, Thursday and Friday 代表每週三次"
              },
              {
                "id": 3,
                "sentence": "We always watch TV after dinner. We watch TV [every day].",
                "answer": "every day",
                "isExample": false,
                "clue": "always after dinner（每天晚餐後總是看電視）相當於 every day"
              },
              {
                "id": 4,
                "sentence": "My best friend wakes up at 7.55 but school starts at eight o'clock so he's [always] late.",
                "answer": "always",
                "isExample": false,
                "clue": "7點55分才起床而學校8點上課，中間只有5分鐘，因此『總是』遲到"
              }
            ]
          },
          "p14_ex1_cartoons": {
            "title": "Page 14 Ex 1: Do you like ... ? / Would you like ... ? Cartoons",
            "instruction": "Look at the pictures. What does Sam say about trying new food? Does he want to join Ruby's club? Why? / Why not?",
            "image": "assets/images/u2/u2_invitations_cartoon.jpg",
            "referencePage": 92,
            "dialogues": [
              {
                "panel": 1,
                "speakerA": "Ruby",
                "utteranceA": "Do you like trying new food?",
                "speakerB": "Sam",
                "utteranceB": "Oh yes! I love eating food from all over the world."
              },
              {
                "panel": 2,
                "speakerA": "Ruby",
                "utteranceA": "Would you like to join our Cooking Club?",
                "speakerB": "Sam",
                "utteranceB": "No thanks! I'm not interested in cooking."
              }
            ],
            "qa": [
              {
                "question": "What does Sam say about trying new food?",
                "answer": "He loves eating food from all over the world."
              },
              {
                "question": "Does he want to join Ruby's club?",
                "answer": "No, he doesn't."
              },
              {
                "question": "Why? / Why not?",
                "answer": "Because he is not interested in cooking (he loves eating food, but he doesn't like cooking it)."
              }
            ]
          },
          "p14_ex2_dialogues": {
            "title": "Page 14 Ex 2: Do you like vs Would you like Dialogues",
            "instruction": "Complete the conversations with Do you like or Would you like and the correct form of the verb in brackets.",
            "grammarTip": "Do you like + V-ing...? 用於詢問平時的廣泛喜好或生活習慣；Would you like + to V...? 用於發出具體邀請或主動提供。",
            "conversations": [
              {
                "id": 1,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "Would you like to join our music group?",
                "speakerB_line": "I'm afraid not. I can't sing very well.",
                "promptVerb": "join",
                "answer": "Would you like to join",
                "isExample": true,
                "explanation": "發出加入音樂社團的邀請，使用 Would you like to join。"
              },
              {
                "id": 2,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "Do you like reading books?",
                "speakerB_line": "Not really. I prefer reading blogs.",
                "promptVerb": "read",
                "answer": "Do you like reading",
                "isExample": false,
                "explanation": "詢問平常一般的閱讀喜好習慣，使用 Do you like reading。"
              },
              {
                "id": 3,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "I'm going to the cinema. Would you like to come?",
                "speakerB_line": "I'd love to.",
                "promptVerb": "come",
                "answer": "Would you like to come",
                "isExample": false,
                "explanation": "發出一起去看電影的特定邀約，使用 Would you like to come。"
              },
              {
                "id": 4,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "I really enjoy sleeping under the stars. Would you like to go camping with me next week?",
                "speakerB_line": "Sure!",
                "promptVerb": "go",
                "answer": "Would you like to go",
                "isExample": false,
                "explanation": "下週具體行程邀約，使用 Would you like to go。"
              },
              {
                "id": 5,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "What do you do in your free time? Do you like playing sports?",
                "speakerB_line": "No, I don't. I like watching them.",
                "promptVerb": "play",
                "answer": "Do you like playing",
                "isExample": false,
                "explanation": "詢問空閒時的常態愛好，使用 Do you like playing。"
              },
              {
                "id": 6,
                "speakerA": "A",
                "speakerB": "B",
                "speakerA_line": "I'm often bored on Sunday afternoon. I never know what to do.",
                "speakerB_line": "Would you like to watch a film at my house this Sunday?",
                "promptVerb": "watch",
                "answer": "Would you like to watch",
                "isExample": false,
                "explanation": "向對方提出這個星期天來家裡看電影的邀請，使用 Would you like to watch。"
              }
            ]
          },
          "p14_ex3_ex4_invitations": {
            "title": "Page 14 Ex 3 & Ex 4: Responding to Invitations (Saying Yes or No)",
            "instruction": "Complete the table with more expressions we use to say 'yes' or 'no' to invitations.",
            "expressionsBox": [
              "Good idea.",
              "I'd like to, but I can't.",
              "I'd love to.",
              "I'm afraid I'm busy.",
              "I'm afraid not.",
              "I'm sorry, I can't.",
              "No, thanks.",
              "That's great - thanks!",
              "Sure!",
              "Yes, please!"
            ],
            "table": {
              "yes": [
                "Yes, please!",
                "Good idea.",
                "I'd love to.",
                "That's great - thanks!",
                "Sure!"
              ],
              "no": [
                "I'd like to, but I can't.",
                "I'm afraid I'm busy.",
                "I'm afraid not.",
                "I'm sorry, I can't.",
                "No, thanks."
              ]
            }
          },
          "p14_ex5_pair_invitations": {
            "title": "Page 14 Ex 5: Practice Inviting Each Other",
            "instruction": "Take turns to invite each other to these events. Use Would you like ... ? and the expressions in Exercise 4.",
            "events": [
              {
                "event": "School disco, Saturday 7.00 p.m.",
                "exampleInvite": "Would you like to go to the school disco on Saturday at 7.00 p.m.?",
                "exampleDecline": "No, thanks. I hate dancing.",
                "exampleAccept": "That's great - thanks! I love music."
              },
              {
                "event": "5 km-run this summer",
                "exampleInvite": "Would you like to do a 5 km-run with me this summer?",
                "exampleDecline": "I'd like to, but I can't. I'm terrible at running.",
                "exampleAccept": "Good idea. I'm really good at sports."
              },
              {
                "event": "Camping trip this weekend",
                "exampleInvite": "Would you like to come on a camping trip with me this weekend?",
                "exampleDecline": "I'm afraid I'm busy this weekend.",
                "exampleAccept": "Sure! I really enjoy sleeping under the stars."
              },
              {
                "event": "Visit to Science Museum tomorrow",
                "exampleInvite": "Would you like to visit the Science Museum tomorrow?",
                "exampleDecline": "I'm sorry, I can't. I've got piano lessons.",
                "exampleAccept": "I'd love to. I'm very interested in science."
              }
            ]
          }
        },
        "readingPart3": {
          "ex1_synonyms": {
            "title": "Page 15 Ex 1: Synonym Matching",
            "instruction": "Match the words (1-6) with the words that mean the same (a-f).",
            "pairs": [
              {
                "id": 1,
                "word": "famous",
                "match": "e",
                "synonym": "well-known",
                "zh": "著名的"
              },
              {
                "id": 2,
                "word": "difficult",
                "match": "d",
                "synonym": "hard",
                "zh": "困難的"
              },
              {
                "id": 3,
                "word": "afraid",
                "match": "b",
                "synonym": "scared",
                "zh": "害怕的"
              },
              {
                "id": 4,
                "word": "attractive",
                "match": "a",
                "synonym": "good-looking",
                "zh": "好看的；有吸引力的"
              },
              {
                "id": 5,
                "word": "correct",
                "match": "f",
                "synonym": "right",
                "zh": "正確的"
              },
              {
                "id": 6,
                "word": "glad",
                "match": "c",
                "synonym": "happy",
                "zh": "高興的；開心的"
              }
            ]
          },
          "ex2_reading_warmup": {
            "title": "Page 15 Ex 2: Reading Warm-up & Question Analysis",
            "instruction": "Read this text and the question below. Answer B is wrong (see underlined text). Underline the parts of the text where you can find answers A and C. Which is the correct answer for the question?",
            "text": "I'm reading a new book by my favourite writer. She's not well-known, and her stories aren't easy to understand, but this one is really interesting. I hope no one tells me how it ends before I finish reading it!",
            "question": "The boy is worried that",
            "options": {
              "A": "the writer's stories will change now she's famous.",
              "B": "this book is too difficult for him to finish.",
              "C": "someone will let him know what happens in the story."
            },
            "answer": "C",
            "optionAnalysis": {
              "A": {
                "textProof": "She's not well-known",
                "isCorrect": false,
                "reason": "文中明確提到作家『not well-known』（不出名），因此 A 選項說『now she's famous』與原文完全相反。"
              },
              "B": {
                "textProof": "aren't easy to understand, but this one is really interesting.",
                "isCorrect": false,
                "reason": "雖然她的故事不易理解，但這本書『really interesting』，男孩很享受閱讀，並非擔心太難而讀不完。"
              },
              "C": {
                "textProof": "I hope no one tells me how it ends before I finish reading it!",
                "isCorrect": true,
                "reason": "男孩希望在讀完前沒有人劇透結局，完全對應 C 選項『someone will let him know what happens in the story』。"
              }
            }
          },
          "exam_task": {
            "id": "u2_reading_part3_exam",
            "title": "Reading Part 3 Exam Task: Kris Davies - Teenage Painter",
            "intro": "Kris Davies started painting when he was 12. He's now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.",
            "interview": [
              {
                "speaker": "Tamara",
                "question": "How did you become interested in painting, Kris?"
              },
              {
                "speaker": "Kris",
                "answer": "It's strange. My mother's a painter - you can see her best paintings on her website - but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since."
              },
              {
                "speaker": "Tamara",
                "question": "How did you get your first brushes?"
              },
              {
                "speaker": "Kris",
                "answer": "About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!"
              },
              {
                "speaker": "Tamara",
                "question": "Where do your ideas come from?"
              },
              {
                "speaker": "Kris",
                "answer": "Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas."
              },
              {
                "speaker": "Tamara",
                "question": "What type of painting are you interested in?"
              },
              {
                "speaker": "Kris",
                "answer": "Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me."
              },
              {
                "speaker": "Tamara",
                "question": "Do you have any advice for other young painters?"
              },
              {
                "speaker": "Kris",
                "answer": "The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings - even if you don't like what they say."
              }
            ],
            "questions": [
              {
                "number": 1,
                "question": "How did Kris first become interested in painting?",
                "options": {
                  "A": "He saw some interesting paintings online.",
                  "B": "A member of his family is a painter.",
                  "C": "He painted something for a friend."
                },
                "answer": "C",
                "quote": "Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.",
                "rationale": "Kris 的姊姊請他為朋友的生日畫一張卡片，朋友非常喜歡，自此他便停不下來。因此是『為朋友畫了東西』激發了他的興趣。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：媽媽的畫確實在網站上（see her best paintings on her website），但他對媽媽畫的類型毫無興趣（never been interested），並非他在線上看到畫作引起興趣。",
                  "B": "干擾陷阱：媽媽確實是畫家（My mother's a painter），但他明確說他從不喜歡媽媽畫的畫，因此不是家人啟發他。"
                }
              },
              {
                "number": 2,
                "question": "How did Kris get his first brushes?",
                "options": {
                  "A": "He won them.",
                  "B": "They were a present.",
                  "C": "They belonged to his mother."
                },
                "answer": "B",
                "quote": "So my uncle bought me some, which were fantastic. I came first in that competition!",
                "rationale": "叔叔買給他一套很棒的畫筆（bought me some），買給他即為『禮物（present）』。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：他在比賽中得了第一名（came first in that competition），但贏得的是比賽，畫筆是叔叔買的禮物，不是獎品。",
                  "C": "干擾陷阱：他原本想用媽媽的畫筆（wanted to use my mum's brushes），但媽媽一直自己在用，所以他並沒有得到媽媽的畫筆。"
                }
              },
              {
                "number": 3,
                "question": "Kris gets his ideas from",
                "options": {
                  "A": "films.",
                  "B": "places he visits.",
                  "C": "books about paintings."
                },
                "answer": "B",
                "quote": "Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see...",
                "rationale": "看見不同地方（places he visits）激發他想到新畫作題材（think of new things to paint）。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：文中出現 film，但在此是【動詞】（用手機錄影用以記憶地點），而非名詞『電影（movies）』。",
                  "C": "干擾陷阱：有人送他精美的畫冊（books of paintings），但他特別說『they don't help me get new ideas』，完全排除 C。"
                }
              },
              {
                "number": 4,
                "question": "Kris wants to paint",
                "options": {
                  "A": "people.",
                  "B": "buildings.",
                  "C": "nature."
                },
                "answer": "C",
                "quote": "But I love animals and being in the countryside, so I hope to be a painter of nature.",
                "rationale": "Kris 熱愛動物與鄉村，因此希望成為大自然的畫家（a painter of nature）。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：他最喜歡的藝術家們畫的是人（all my favourite artists paint people），但這不是他自己想畫的主題。",
                  "B": "干擾陷阱：他曾嘗試畫建築物，但他發現那對他來說太難了（That was too hard for me），並非他想畫的。"
                }
              },
              {
                "number": 5,
                "question": "Kris says that other young painters should",
                "options": {
                  "A": "do lots of painting.",
                  "B": "look at the paintings that the best artists paint.",
                  "C": "not worry about other people's opinions of their paintings."
                },
                "answer": "A",
                "quote": "The best painters never stop painting. That's how they become so good, and it's how you will get better.",
                "rationale": "頂尖畫家從不停筆（never stop painting），這也是進步之道，同義替換為『do lots of painting』（大量練習繪畫）。",
                "distractorAnalysis": {
                  "B": "干擾陷阱：雖然提到了 the best painters，但他並未建議去看他們的畫，而是強調他們『never stop painting』的不斷創作精神。",
                  "C": "干擾陷阱：Kris 反而建議一定要詢問他人意見（remember to ask other people what they think），即使不喜歡批評也要聽，因此與『不理會他人意見』相反。"
                }
              }
            ]
          }
        },
        "readingWritingPart5": {
          "exam_task": {
            "id": "u2_rw_part5_exam",
            "title": "Reading & Writing Part 5: Hasan's Email",
            "instructions": "For each question, write the correct answer. Write one word for each gap.",
            "image": "assets/images/u2/u2_hasan_bedroom.jpg",
            "email": {
              "from": "Hasan",
              "subject": "Pen friend introduction",
              "text": "My name (0) [is] Hasan Sadik but my friends call me Zan. I'm 13 and I live in Adana, Turkey. I (1) [have] got two older sisters. (2) [Their] names are Ayla and Zeynep.\nIn my free time, I love listening (3) [to] music. I also play the drums in the school band. I go to the cinema with my friends once (4) [a] week. After the film, (5) [we] sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza - my favourite.\nPlease write soon and tell me (6) [about] your family, friends and hobbies.\nBest wishes\nHasan"
            },
            "gaps": [
              {
                "gap": 0,
                "answer": "is",
                "acceptedVariants": [
                  "is"
                ],
                "wordType": "Verb (be)",
                "grammarRole": "Third-person singular present of be",
                "isExample": true,
                "clue": "My name ... Hasan"
              },
              {
                "gap": 1,
                "answer": "have",
                "acceptedVariants": [
                  "have",
                  "'ve"
                ],
                "wordType": "Auxiliary verb",
                "grammarRole": "Present tense form in 'have got'",
                "clue": "I ... got two older sisters",
                "explanation": "英式英語表達『擁有』常用 have got，主詞為第一人稱 I，必須填入 have（或縮寫 've）。",
                "commonTrap": "切勿填入 do 或 had；在此搭配過去分詞 got，只能填 have。"
              },
              {
                "gap": 2,
                "answer": "Their",
                "acceptedVariants": [
                  "Their",
                  "their"
                ],
                "wordType": "Possessive adjective",
                "grammarRole": "Plural possessive modifying 'names'",
                "clue": "... names are Ayla and Zeynep",
                "explanation": "修飾複數名詞 names，先行詞為 two older sisters（兩位姊姊），必須用第三人稱複數所有格代名詞 Their。注意句首大寫！",
                "commonTrap": "考生常誤填 They（主格）或 Her（單數女性所有格）。兩位姊姊必須用複數 Their。"
              },
              {
                "gap": 3,
                "answer": "to",
                "acceptedVariants": [
                  "to"
                ],
                "wordType": "Preposition",
                "grammarRole": "Dependent preposition after 'listen'",
                "clue": "listening ... music",
                "explanation": "動詞 listen 為不及物動詞，接受詞音樂（music）時，必須固定搭配介系詞 to（listen to music）。",
                "commonTrap": "中文說『聽音樂』容易受母語干擾而漏掉 to，或誤填 for / of。"
              },
              {
                "gap": 4,
                "answer": "a",
                "acceptedVariants": [
                  "a"
                ],
                "wordType": "Indefinite article",
                "grammarRole": "Article in frequency phrase 'once a week'",
                "clue": "once ... week",
                "explanation": "頻率表達片語『每週一次』固定結構為 once a week，冠詞必須填 a。",
                "commonTrap": "不可填 in / one / the，固定搭配必為 once a week。"
              },
              {
                "gap": 5,
                "answer": "we",
                "acceptedVariants": [
                  "we"
                ],
                "wordType": "Subject pronoun",
                "grammarRole": "Subject of the clause 'sometimes have dinner'",
                "clue": "After the film, ... sometimes have dinner in a pizza restaurant together",
                "explanation": "前面提到『I go to the cinema with my friends』，看完電影後『我和我朋友們（我們）』一起吃披薩，主格代名詞填 we。",
                "commonTrap": "容易誤填 they 或 I；後方有 together 且包含作者自己，故必須用第一人稱複數 we。"
              },
              {
                "gap": 6,
                "answer": "about",
                "acceptedVariants": [
                  "about"
                ],
                "wordType": "Preposition",
                "grammarRole": "Preposition of topic / theme after 'tell me'",
                "clue": "tell me ... your family, friends and hobbies",
                "explanation": "片語 tell sb about sth 表示『告訴某人關於…的事情』，介系詞填 about。",
                "commonTrap": "不可填 of 或 for；tell me about... 是書信結尾常見固定句型。"
              }
            ]
          }
        },
        "listeningPart4": {
          "part": 4,
          "title": "Listening Part 4 Exam Task: Five Short Conversations / Monologues",
          "audioTrack": "Track 07",
          "items": [
            {
              "number": 1,
              "prompt": "You will hear two friends talking about a film they've just seen. What type of film was it?",
              "options": {
                "A": "a comedy",
                "B": "a horror film",
                "C": "an adventure film"
              },
              "answer": "C",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "Well, that was certainly thrilling! I thought it was going to be a comedy when we booked tickets, because that famous funny actor was starring in it.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "提到原本以為是喜劇（comedy），因為有搞笑明星，但這只是進場前的預期，不是這部電影實際的類型。"
                },
                {
                  "speaker": "Boy",
                  "text": "Me too! And right at the beginning, when they were trapped in that dark spooky old castle, I was honestly terrified it was going to be a horror film! I can't stand scary movies.",
                  "isDistractor": true,
                  "distractorTarget": "B",
                  "explanation": "提到一開始在古堡很害怕會變成恐怖片（horror film），但這只是男孩的擔憂，電影並非恐怖片。"
                },
                {
                  "speaker": "Girl",
                  "text": "Yeah, but once they escaped on that speedboat and travelled across the wild jungle looking for the lost golden crown, it was non-stop action! A fantastic adventure film!",
                  "isKey": true,
                  "distractorTarget": "C",
                  "explanation": "明確證實電影是搭快艇、穿越叢林尋找寶藏的精彩冒險片（A fantastic adventure film）。"
                },
                {
                  "speaker": "Boy",
                  "text": "Totally! All those narrow escapes and exciting journeys kept me on the edge of my seat.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "附和冒險旅程的刺激。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：原先預期】女孩提到看見搞笑演員以為是喜劇片（thought it was going to be a comedy），但正片完全不是喜劇。",
                "B": "【陷阱：個人恐懼】男孩提到開頭陰森古堡讓他害怕是恐怖片（terrified it was going to be a horror film），但隨後劇情轉折，並非恐怖片。",
                "C": "【正解：真正類型】女孩明確總結『A fantastic adventure film!』，且全片充斥荒野探險與尋寶動作場面。"
              }
            },
            {
              "number": 2,
              "prompt": "You will hear a boy talking about a camping trip. Who did he go camping with?",
              "options": {
                "A": "his brother",
                "B": "his mother",
                "C": "his uncle"
              },
              "answer": "C",
              "tapescript": [
                {
                  "speaker": "Boy",
                  "text": "Last weekend I had the best time camping out in the pine forest by the river.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "引入露營情境。"
                },
                {
                  "speaker": "Boy",
                  "text": "Usually my older brother comes with me, but he had an important science exam on Monday, so he stayed at home studying all weekend.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "哥哥平時常一起去，但這次要準備週一考試，整週末留在家讀書，沒有去露營。"
                },
                {
                  "speaker": "Boy",
                  "text": "My mother drove us to the store and packed all our warm sleeping bags into the boots, but she can't stand insects and hates sleeping in tents, so she never goes camping.",
                  "isDistractor": true,
                  "distractorTarget": "B",
                  "explanation": "媽媽幫忙買東西打包行李，但媽媽討厭昆蟲且討厭睡帳篷，完全不露營。"
                },
                {
                  "speaker": "Boy",
                  "text": "Fortunately, my uncle had some time off work. He loves wildlife, so he took me in his jeep and we pitched the tent together right beside the water.",
                  "isKey": true,
                  "distractorTarget": "C",
                  "explanation": "叔叔有休假且熱愛大自然，開吉普車帶他去並一起在水邊搭帳篷，正解為叔叔。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：缺席家人】哥哥平時雖然會去，但這次留在家準備考試，未同行。",
                "B": "【陷阱：協助打包】媽媽幫忙整理睡袋，但因討厭帳篷與蟲子根本不露營。",
                "C": "【正解：同行夥伴】叔叔開車載他去，並一起搭帳篷度過週末。"
              }
            },
            {
              "number": 3,
              "prompt": "You will hear a boy, James, talking to his mother about basketball lessons. What does James ask his mother to do?",
              "options": {
                "A": "find out when his basketball lessons start",
                "B": "book some basketball lessons for him",
                "C": "buy him some basketball clothes"
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "James",
                  "text": "Mum, have you got five minutes? You know the new youth basketball coaching sessions starting at the leisure centre?",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "開門見山提出籃球課話題。"
                },
                {
                  "speaker": "Mother",
                  "text": "Yes, James. I checked their website this morning, and the coach is running classes every Thursday at half past five.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "媽媽早上已經上網查好了上課時間（週四五點半），因此 James 不需要媽媽去查時間。"
                },
                {
                  "speaker": "Mother",
                  "text": "And didn't Grandma buy you that smart new basketball vest and shorts for your birthday last week?",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "外婆上週生日已經買給 James 全新的籃球球衣與球褲，不需要買衣服。"
                },
                {
                  "speaker": "James",
                  "text": "Yes, the kit is awesome! But the club website says places are strictly limited and an adult has to register and pay online. Could you log on and book the lessons for me before it fills up?",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "James 明確請求：因為必須家長線上付款報名，請媽媽登入幫他預約課程（Could you log on and book the lessons for me?）。"
                },
                {
                  "speaker": "Mother",
                  "text": "Of course! Let's get my debit card and register right now.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "媽媽同意幫忙報名。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：已完成動作】媽媽早已查好上課時間（checked website this morning），James 無須提出此要求。",
                "B": "【正解：請求核心】James 拜託媽媽登入網站替他報名課程（book the lessons for me）。",
                "C": "【陷阱：已有物品】外婆上週生日剛送了球衣球褲，James 身上裝備齊全，不需買衣服。"
              }
            },
            {
              "number": 4,
              "prompt": "You will hear two friends discussing a practice for their dance group. What do they still need to do?",
              "options": {
                "A": "tell people when the practice will start",
                "B": "find a place to practise",
                "C": "decide on a dance"
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "Hi Lucas! We need to make sure everything is ready for the dance group rehearsal this weekend.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "討論街舞團排練準備事項。"
                },
                {
                  "speaker": "Boy",
                  "text": "Don't worry, we're making good progress. We all agreed on that dynamic hip-hop routine on Tuesday, so choosing the dance style is completely done.",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "週二已經全員一致決定好跳 hip-hop 舞步，因此選舞步已經完成，不需要再決定。"
                },
                {
                  "speaker": "Boy",
                  "text": "And I've already sent a group chat message to all eight dancers telling everyone that we kick off at ten sharp on Saturday morning.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "男孩已經群發訊息通知所有人週六早上十點開始，時間已經通知完畢。"
                },
                {
                  "speaker": "Girl",
                  "text": "That's great, but there's a problem with the venue! The school hall is being painted, and the community centre studio is booked all day.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "學校大廳在油漆，社區中心被訂滿，排練場地出現大問題。"
                },
                {
                  "speaker": "Boy",
                  "text": "Oh no! So we haven't got anywhere to rehearse yet. We definitely need to find a suitable room today.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "男孩確認：目前還沒有排練地點，今天必須盡快找到場地（find a place to practise）。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：已通知完畢】男孩已經傳訊通知所有團員週六早上十點排練，無須再做。",
                "B": "【正解：唯一待辦】學校與社區中心都無法借用，目前毫無排練場地，急需尋找地點。",
                "C": "【陷阱：已選定舞步】週二早已選定 hip-hop 曲目，此事項早已搞定。"
              }
            },
            {
              "number": 5,
              "prompt": "You will hear a girl talking about horse riding. Why does she like horse riding?",
              "options": {
                "A": "She is learning something new.",
                "B": "She can spend time outdoors.",
                "C": "She has made new friends."
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "I've been going to the riding school for nearly two years now.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "說明學騎馬的背景。"
                },
                {
                  "speaker": "Girl",
                  "text": "When I first joined, my parents thought it would be a lovely chance to make lots of new friends. But honestly, most riders there are adults who leave immediately after their lesson, so I haven't really met anyone my age.",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "父母原本以為能交新朋友，但那裡都是下課就走的大人，根本沒交到同齡朋友。"
                },
                {
                  "speaker": "Girl",
                  "text": "And having ridden for so long, I can already trot, canter and jump fences easily, so it's not like I'm picking up fresh skills every week anymore.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "騎了兩年基本技能全學會了，因此並非為了每週學習新事物而喜歡騎馬。"
                },
                {
                  "speaker": "Girl",
                  "text": "For me, the real joy is leaving behind the noisy classrooms and traffic, feeling the breeze on my face, and riding across the wide green meadows under the open sky. Being out in nature is simply unbeatable.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "她真正熱愛的是遠離喧囂、在大藍天與綠草地間感受微風，也就是『置身於戶外大自然（spend time outdoors）』。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：早已學會】學了兩年已能輕鬆跳障礙，並不是因為學習新技能而熱愛。",
                "B": "【正解：核心原因】享受吹風、奔馳在綠草地與開闊天空下，完全呼應 spend time outdoors。",
                "C": "【陷阱：未結交到朋友】馬場大多是成人且課後就離開，她根本沒有在馬場結交到新朋友。"
              }
            }
          ],
          "questions": [
            {
              "id": 1,
              "number": 1,
              "prompt": "You will hear two friends talking about a film they've just seen. What type of film was it?",
              "options": {
                "A": "a comedy",
                "B": "a horror film",
                "C": "an adventure film"
              },
              "answer": "C"
            },
            {
              "id": 2,
              "number": 2,
              "prompt": "You will hear a boy talking about a camping trip. Who did he go camping with?",
              "options": {
                "A": "his brother",
                "B": "his mother",
                "C": "his uncle"
              },
              "answer": "C"
            },
            {
              "id": 3,
              "number": 3,
              "prompt": "You will hear a boy, James, talking to his mother about basketball lessons. What does James ask his mother to do?",
              "options": {
                "A": "find out when his basketball lessons start",
                "B": "book some basketball lessons for him",
                "C": "buy him some basketball clothes"
              },
              "answer": "B"
            },
            {
              "id": 4,
              "number": 4,
              "prompt": "You will hear two friends discussing a practice for their dance group. What do they still need to do?",
              "options": {
                "A": "tell people when the practice will start",
                "B": "find a place to practise",
                "C": "decide on a dance"
              },
              "answer": "B"
            },
            {
              "id": 5,
              "number": 5,
              "prompt": "You will hear a girl talking about horse riding. Why does she like horse riding?",
              "options": {
                "A": "She is learning something new.",
                "B": "She can spend time outdoors.",
                "C": "She has made new friends."
              },
              "answer": "B"
            }
          ],
          "tapescript": [
            {
              "speaker": "Girl",
              "text": "Well, that was certainly thrilling! I thought it was going to be a comedy when we booked tickets, because that famous funny actor was starring in it.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "提到原本以為是喜劇（comedy），因為有搞笑明星，但這只是進場前的預期，不是這部電影實際的類型。"
            },
            {
              "speaker": "Boy",
              "text": "Me too! And right at the beginning, when they were trapped in that dark spooky old castle, I was honestly terrified it was going to be a horror film! I can't stand scary movies.",
              "isDistractor": true,
              "distractorTarget": "B",
              "explanation": "提到一開始在古堡很害怕會變成恐怖片（horror film），但這只是男孩的擔憂，電影並非恐怖片。"
            },
            {
              "speaker": "Girl",
              "text": "Yeah, but once they escaped on that speedboat and travelled across the wild jungle looking for the lost golden crown, it was non-stop action! A fantastic adventure film!",
              "isKey": true,
              "distractorTarget": "C",
              "explanation": "明確證實電影是搭快艇、穿越叢林尋找寶藏的精彩冒險片（A fantastic adventure film）。"
            },
            {
              "speaker": "Boy",
              "text": "Totally! All those narrow escapes and exciting journeys kept me on the edge of my seat.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "附和冒險旅程的刺激。"
            },
            {
              "speaker": "Boy",
              "text": "Last weekend I had the best time camping out in the pine forest by the river.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "引入露營情境。"
            },
            {
              "speaker": "Boy",
              "text": "Usually my older brother comes with me, but he had an important science exam on Monday, so he stayed at home studying all weekend.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "哥哥平時常一起去，但這次要準備週一考試，整週末留在家讀書，沒有去露營。"
            },
            {
              "speaker": "Boy",
              "text": "My mother drove us to the store and packed all our warm sleeping bags into the boots, but she can't stand insects and hates sleeping in tents, so she never goes camping.",
              "isDistractor": true,
              "distractorTarget": "B",
              "explanation": "媽媽幫忙買東西打包行李，但媽媽討厭昆蟲且討厭睡帳篷，完全不露營。"
            },
            {
              "speaker": "Boy",
              "text": "Fortunately, my uncle had some time off work. He loves wildlife, so he took me in his jeep and we pitched the tent together right beside the water.",
              "isKey": true,
              "distractorTarget": "C",
              "explanation": "叔叔有休假且熱愛大自然，開吉普車帶他去並一起在水邊搭帳篷，正解為叔叔。"
            },
            {
              "speaker": "James",
              "text": "Mum, have you got five minutes? You know the new youth basketball coaching sessions starting at the leisure centre?",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "開門見山提出籃球課話題。"
            },
            {
              "speaker": "Mother",
              "text": "Yes, James. I checked their website this morning, and the coach is running classes every Thursday at half past five.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "媽媽早上已經上網查好了上課時間（週四五點半），因此 James 不需要媽媽去查時間。"
            },
            {
              "speaker": "Mother",
              "text": "And didn't Grandma buy you that smart new basketball vest and shorts for your birthday last week?",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "外婆上週生日已經買給 James 全新的籃球球衣與球褲，不需要買衣服。"
            },
            {
              "speaker": "James",
              "text": "Yes, the kit is awesome! But the club website says places are strictly limited and an adult has to register and pay online. Could you log on and book the lessons for me before it fills up?",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "James 明確請求：因為必須家長線上付款報名，請媽媽登入幫他預約課程（Could you log on and book the lessons for me?）。"
            },
            {
              "speaker": "Mother",
              "text": "Of course! Let's get my debit card and register right now.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "媽媽同意幫忙報名。"
            },
            {
              "speaker": "Girl",
              "text": "Hi Lucas! We need to make sure everything is ready for the dance group rehearsal this weekend.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "討論街舞團排練準備事項。"
            },
            {
              "speaker": "Boy",
              "text": "Don't worry, we're making good progress. We all agreed on that dynamic hip-hop routine on Tuesday, so choosing the dance style is completely done.",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "週二已經全員一致決定好跳 hip-hop 舞步，因此選舞步已經完成，不需要再決定。"
            },
            {
              "speaker": "Boy",
              "text": "And I've already sent a group chat message to all eight dancers telling everyone that we kick off at ten sharp on Saturday morning.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "男孩已經群發訊息通知所有人週六早上十點開始，時間已經通知完畢。"
            },
            {
              "speaker": "Girl",
              "text": "That's great, but there's a problem with the venue! The school hall is being painted, and the community centre studio is booked all day.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "學校大廳在油漆，社區中心被訂滿，排練場地出現大問題。"
            },
            {
              "speaker": "Boy",
              "text": "Oh no! So we haven't got anywhere to rehearse yet. We definitely need to find a suitable room today.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "男孩確認：目前還沒有排練地點，今天必須盡快找到場地（find a place to practise）。"
            },
            {
              "speaker": "Girl",
              "text": "I've been going to the riding school for nearly two years now.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "說明學騎馬的背景。"
            },
            {
              "speaker": "Girl",
              "text": "When I first joined, my parents thought it would be a lovely chance to make lots of new friends. But honestly, most riders there are adults who leave immediately after their lesson, so I haven't really met anyone my age.",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "父母原本以為能交新朋友，但那裡都是下課就走的大人，根本沒交到同齡朋友。"
            },
            {
              "speaker": "Girl",
              "text": "And having ridden for so long, I can already trot, canter and jump fences easily, so it's not like I'm picking up fresh skills every week anymore.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "騎了兩年基本技能全學會了，因此並非為了每週學習新事物而喜歡騎馬。"
            },
            {
              "speaker": "Girl",
              "text": "For me, the real joy is leaving behind the noisy classrooms and traffic, feeling the breeze on my face, and riding across the wide green meadows under the open sky. Being out in nature is simply unbeatable.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "她真正熱愛的是遠離喧囂、在大藍天與綠草地間感受微風，也就是『置身於戶外大自然（spend time outdoors）』。"
            }
          ],
          "distractorXray": [
            {
              "A": "【陷阱：原先預期】女孩提到看見搞笑演員以為是喜劇片（thought it was going to be a comedy），但正片完全不是喜劇。",
              "B": "【陷阱：個人恐懼】男孩提到開頭陰森古堡讓他害怕是恐怖片（terrified it was going to be a horror film），但隨後劇情轉折，並非恐怖片。",
              "C": "【正解：真正類型】女孩明確總結『A fantastic adventure film!』，且全片充斥荒野探險與尋寶動作場面。"
            },
            {
              "A": "【陷阱：缺席家人】哥哥平時雖然會去，但這次留在家準備考試，未同行。",
              "B": "【陷阱：協助打包】媽媽幫忙整理睡袋，但因討厭帳篷與蟲子根本不露營。",
              "C": "【正解：同行夥伴】叔叔開車載他去，並一起搭帳篷度過週末。"
            },
            {
              "A": "【陷阱：已完成動作】媽媽早已查好上課時間（checked website this morning），James 無須提出此要求。",
              "B": "【正解：請求核心】James 拜託媽媽登入網站替他報名課程（book the lessons for me）。",
              "C": "【陷阱：已有物品】外婆上週生日剛送了球衣球褲，James 身上裝備齊全，不需買衣服。"
            },
            {
              "A": "【陷阱：已通知完畢】男孩已經傳訊通知所有團員週六早上十點排練，無須再做。",
              "B": "【正解：唯一待辦】學校與社區中心都無法借用，目前毫無排練場地，急需尋找地點。",
              "C": "【陷阱：已選定舞步】週二早已選定 hip-hop 曲目，此事項早已搞定。"
            },
            {
              "A": "【陷阱：早已學會】學了兩年已能輕鬆跳障礙，並不是因為學習新技能而熱愛。",
              "B": "【正解：核心原因】享受吹風、奔馳在綠草地與開闊天空下，完全呼應 spend time outdoors。",
              "C": "【陷阱：未結交到朋友】馬場大多是成人且課後就離開，她根本沒有在馬場結交到新朋友。"
            }
          ],
          "examFormatEx1": {
            "title": "Page 13 Ex 1: Listening Part 4 Format Overview",
            "instruction": "Work in pairs. Look at the exam task and answer the questions.",
            "questions": [
              {
                "id": 1,
                "question": "How many questions are there in Listening Part 4?",
                "answer": "5 questions",
                "explanation": "Listening Part 4 固定有 5 道題目（每題 1 分）。"
              },
              {
                "id": 2,
                "question": "For each question, how many possible answers do you choose from?",
                "answer": "3 possible answers (A, B, C)",
                "explanation": "每題提供 3 個三選一選項（A, B, C）。"
              },
              {
                "id": 3,
                "question": "Read the questions again. How many people do you think you will hear in each one (one person or two)?",
                "breakdown": [
                  {
                    "item": 1,
                    "text": "two friends talking about a film",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 2,
                    "text": "a boy talking about a camping trip",
                    "people": "one person (monologue)"
                  },
                  {
                    "item": 3,
                    "text": "a boy, James, talking to his mother",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 4,
                    "text": "two friends discussing a practice for their dance group",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 5,
                    "text": "a girl talking about horse riding",
                    "people": "one person (monologue)"
                  }
                ]
              }
            ]
          },
          "prepTrack06": {
            "title": "Page 13 Ex 2: Track 06 Introductory Listening",
            "instruction": "Abbey and Jasmine are talking about Abbey's favourite film star. Listen and complete these sentences from their conversation.",
            "audioTrack": "Track 06",
            "tapescript": [
              {
                "speaker": "Jasmine",
                "text": "He's really good-looking, isn't he?"
              },
              {
                "speaker": "Abbey",
                "text": "Yes, he is. He's also a really good actor. That's the reason I prefer him to any other actor."
              },
              {
                "speaker": "Abbey",
                "text": "In the last few years his films haven't been very good."
              }
            ],
            "gaps": [
              {
                "gap": 1,
                "answer": "also",
                "sentence": "He's (1) [also] a really good actor."
              },
              {
                "gap": 2,
                "answer": "reason",
                "sentence": "That's the (2) [reason] I prefer him to any other actor."
              },
              {
                "gap": 3,
                "answer": "haven't",
                "sentence": "In the last few years his films (3) [haven't] been very good."
              }
            ]
          },
          "analysisTrack06": {
            "title": "Page 13 Ex 3 & Ex 4: Distractor Analysis of Track 06",
            "question": "Why does Abbey like her favourite actor?",
            "options": {
              "A": "He makes good films.",
              "B": "He is good-looking.",
              "C": "He is a good actor."
            },
            "answer": "C",
            "analysis": {
              "A": {
                "isCorrect": false,
                "evidence": "Abbey says: 'In the last few years his films haven't been very good.'",
                "trapReason": "直接否定！他近年的電影並不好看，完全排除 A。"
              },
              "B": {
                "isCorrect": false,
                "evidence": "Jasmine says: 'He's really good-looking, isn't he?' and Abbey replies: 'Yes, he is.'",
                "trapReason": "干擾陷阱！雖然 Abbey 同意他長相好看，但這並非她最喜愛他（prefer him to any other actor）的真正核心原因。"
              },
              "C": {
                "isCorrect": true,
                "evidence": "Abbey explicitly says: 'He's also a really good actor. That's the reason I prefer him to any other actor.'",
                "trapReason": "正解核心！Abbey 用『That's the reason...』明確點出她偏愛他的真正原因是因為他是位好演員。"
              }
            }
          }
        },
        "speakingPart1": {
          "part": 1,
          "title": "Speaking Part 1 (Hobbies & Free Time)",
          "questions": [
            {
              "question": "What sports do you play at the weekend?",
              "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
              "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
            },
            {
              "question": "Who do you spend time with at the weekend?",
              "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
              "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
            }
          ],
          "dialogues": [
            {
              "question": "What sports do you play at the weekend?",
              "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
              "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
            },
            {
              "question": "Who do you spend time with at the weekend?",
              "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
              "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
            }
          ],
          "classification": {
            "title": "Page 16 Ex 1: Likes & Dislikes Expressions Classification",
            "instruction": "Complete the table with expressions we use to talk about the free-time activities we like and don't like.",
            "expressions": [
              "be bad at",
              "be brilliant at",
              "be good at",
              "be interested in",
              "be terrible at",
              "don't like",
              "enjoy",
              "hate",
              "like",
              "love",
              "prefer"
            ],
            "table": {
              "positive": [
                "be good at",
                "be brilliant at",
                "be interested in",
                "enjoy",
                "like",
                "love",
                "prefer"
              ],
              "negative": [
                "hate",
                "be bad at",
                "be terrible at",
                "don't like"
              ]
            }
          },
          "examinerDialogueTrack08": {
            "title": "Page 16 Ex 4 & Ex 5: Speaking Part 1 Examiner Questions (Track 08)",
            "instruction": "In the second part of Speaking Part 1, the examiner may ask you about your free time. Complete the examiner's questions in this conversation.",
            "audioTrack": "Track 08",
            "conversation": [
              {
                "speaker": "Examiner",
                "text": "Now, let's talk about weekends. What sports do you play at the weekend?",
                "isExample": true
              },
              {
                "speaker": "Candidate",
                "text": "I'm sorry, I don't understand."
              },
              {
                "speaker": "Examiner",
                "gap": 1,
                "text": "(1) [Do you play] football at the weekend?",
                "answer": "Do you play",
                "explanation": "當考生表示聽不懂廣泛問題時，考官會改用 Yes/No 具體問法協助引導：Do you play football...?"
              },
              {
                "speaker": "Candidate",
                "text": "No. I play volleyball."
              },
              {
                "speaker": "Examiner",
                "gap": 2,
                "text": "Who (2) [do you spend] time with at the weekend?",
                "answer": "do you spend",
                "explanation": "考官詢問週末通常和誰在一起度過時間，使用 Who do you spend time with...?"
              },
              {
                "speaker": "Candidate",
                "text": "I spend time with my friends."
              }
            ]
          },
          "expansion": {
            "title": "Page 16 Ex 6 & Exam Task: Say As Much As You Can",
            "tip": "在 KET 口說測驗中，切忌只回答單字或單句。要達到 13~15 盾牌，必須擴展細節（Say as much as you can），補充『做什麼、去哪裡、感受如何』。",
            "basicAnswer": "I spend time with my friends.",
            "improvedAnswer": "I spend a lot of time with my friends at the weekend. We go shopping or play computer games together, and sometimes we ride our bikes in the park.",
            "modelInterviews": [
              {
                "question": "What sports do you play at the weekend?",
                "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
                "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
              },
              {
                "question": "Who do you spend time with at the weekend?",
                "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
                "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
              }
            ]
          }
        },
        "revisionUnit2": {
          "unitId": "u2",
          "totalPoints": 20,
          "totalMarks": 20,
          "exercises": [
            {
              "title": "Revision Ex 1: Rewrite Sentences with the Word in Brackets",
              "marks": 6,
              "instruction": "Rewrite these sentences with the word in brackets.",
              "items": [
                {
                  "id": 1,
                  "original": "My mum takes photos of us.",
                  "bracketWord": "often",
                  "rewritten": "My mum often takes photos of us.",
                  "rule": "頻率副詞 often 放在一般動詞 takes 之前。"
                },
                {
                  "id": 2,
                  "original": "My best friend draws pictures of animals at art club.",
                  "bracketWord": "usually",
                  "rewritten": "My best friend usually draws pictures of animals at art club.",
                  "rule": "頻率副詞 usually 放在一般動詞 draws 之前。"
                },
                {
                  "id": 3,
                  "original": "I'm late for my music classes.",
                  "bracketWord": "sometimes",
                  "rewritten": "I'm sometimes late for my music classes.",
                  "rule": "頻率副詞 sometimes 遇到 be 動詞（'m / am）必須置於 be 動詞之後。"
                },
                {
                  "id": 4,
                  "original": "I go to the cinema with my cousins.",
                  "bracketWord": "twice a month",
                  "rewritten": "I go to the cinema with my cousins twice a month.",
                  "acceptedAlternative": "Twice a month, I go to the cinema with my cousins.",
                  "rule": "副詞片語 twice a month 通常置於句尾，亦可置於句首加逗號。"
                },
                {
                  "id": 5,
                  "original": "My friends do after-school activities.",
                  "bracketWord": "every day",
                  "rewritten": "My friends do after-school activities every day.",
                  "acceptedAlternative": "Every day, my friends do after-school activities.",
                  "rule": "副詞片語 every day 置於句尾（或句首）。"
                },
                {
                  "id": 6,
                  "original": "We sleep in a tent in winter.",
                  "bracketWord": "never",
                  "rewritten": "We never sleep in a tent in winter.",
                  "rule": "否定頻率副詞 never 放在一般動詞 sleep 之前。"
                }
              ]
            },
            {
              "title": "Revision Ex 2: Complete Gaps with like or would like",
              "marks": 6,
              "instruction": "Complete the gaps with like or would like and the correct form of the verb in brackets.",
              "items": [
                {
                  "id": 1,
                  "speakerA": "Where [would you like to go] (you / go) for your next holiday?",
                  "speakerB": "I [would like to go] (go) to the sea because I [like swimming] (swim).",
                  "gapA": "would you like to go",
                  "gapB1": "would like to go",
                  "gapB1_alt": "'d like to go",
                  "gapB2": "like swimming",
                  "explanation": "詢問特定下個假期的期望用 would you like to go；回答用 would like to go / 'd like to go；後面說明平時一般的喜好用 like swimming。"
                },
                {
                  "id": 2,
                  "speakerA": "What type of music [do you like listening] (you / listen) to in your free time?",
                  "speakerB": "I [like listening] (listen) to rock and rap.",
                  "gapA": "do you like listening",
                  "gapB": "like listening",
                  "explanation": "詢問與陳述平時空閒時間的音樂常態喜好，皆使用 like + V-ing（do you like listening / like listening）。"
                },
                {
                  "id": 3,
                  "speakerA": "[Would you like to come] (you / come) to my birthday party next Saturday evening?",
                  "speakerB": "Yes, thank you! I [like going] (go) to parties. What time does it start?",
                  "gapA": "Would you like to come",
                  "gapB": "like going",
                  "gapB_alt": "would like to go / 'd like to go",
                  "explanation": "邀約下週六生日派對用 Would you like to come；B 表達平時就喜歡參加派對用 like going（或表達這次很想去用 would like to go）。"
                },
                {
                  "id": 4,
                  "speakerA": "Which film [would you like to watch] (you / watch) at the cinema tonight?",
                  "speakerB": "I [would like to watch] (watch) the adventure film.",
                  "gapA": "would you like to watch",
                  "gapB": "would like to watch",
                  "gapB_alt": "'d like to watch",
                  "explanation": "詢問與決定今晚（tonight）特定場合想看的電影，用 would you like to watch 與 would like to watch。"
                },
                {
                  "id": 5,
                  "speakerA": "What [do you like doing] (you / do) in your free time?",
                  "speakerB": "I [like playing] (play) the piano.",
                  "gapA": "do you like doing",
                  "gapB": "like playing",
                  "explanation": "詢問平常空閒生活做什麼用 What do you like doing；回答用 I like playing the piano。"
                },
                {
                  "id": 6,
                  "speakerA": "[Do you like eating] (you / eat) in restaurants or at home?",
                  "speakerB": "I usually eat at home but I [would like to go] (go) to a restaurant sometimes.",
                  "gapA": "Do you like eating",
                  "gapB": "would like to go",
                  "gapB_alt": "'d like to go",
                  "explanation": "A 詢問兩者之間的常態偏好用 Do you like eating；B 回答平時在家吃，但有時希望／想要去餐廳用 would like to go。"
                }
              ]
            },
            {
              "title": "Revision Ex 3: Complete Sentences with a Word or Phrase from the Box",
              "marks": 8,
              "instruction": "Complete the sentences with a word or phrase from the box.",
              "wordBox": [
                "cooking",
                "dancing",
                "going to concerts",
                "messaging friends",
                "playing computer games",
                "reading books",
                "spending time with friends",
                "trying new food"
              ],
              "items": [
                {
                  "id": 1,
                  "sentence": "My brother is brilliant at [cooking]. He often makes dinner for the family.",
                  "answer": "cooking",
                  "clue": "makes dinner for the family（為全家做晚餐）"
                },
                {
                  "id": 2,
                  "sentence": "I enjoy [going to concerts] because I love seeing my favourite bands.",
                  "answer": "going to concerts",
                  "clue": "seeing my favourite bands（看最喜歡的樂團表演）"
                },
                {
                  "id": 3,
                  "sentence": "Irene hates going to discos because she is terrible at [dancing].",
                  "answer": "dancing",
                  "clue": "discos（迪斯可舞廳）"
                },
                {
                  "id": 4,
                  "sentence": "My mum likes calling people on the phone but I prefer [messaging friends].",
                  "answer": "messaging friends",
                  "clue": "calling on the phone vs messaging（打電話對照傳簡訊訊息）"
                },
                {
                  "id": 5,
                  "sentence": "I don't like [reading books] in my free time because I have to read a lot for school.",
                  "answer": "reading books",
                  "clue": "read a lot for school（學校課業讀很多書）"
                },
                {
                  "id": 6,
                  "sentence": "When I go to a restaurant I'm always interested in [trying new food].",
                  "answer": "trying new food",
                  "clue": "go to a restaurant（去餐廳品嚐新料理）"
                },
                {
                  "id": 7,
                  "sentence": "Jenny loves [playing computer games]. She always wins.",
                  "answer": "playing computer games",
                  "clue": "always wins（總是獲勝贏得遊戲）"
                },
                {
                  "id": 8,
                  "sentence": "My sister doesn't like being alone. She prefers [spending time with friends].",
                  "answer": "spending time with friends",
                  "clue": "doesn't like being alone（不喜歡獨處）"
                }
              ]
            }
          ]
        },
        "reading": {
          "ex1_synonyms": {
            "title": "Page 15 Ex 1: Synonym Matching",
            "instruction": "Match the words (1-6) with the words that mean the same (a-f).",
            "pairs": [
              {
                "id": 1,
                "word": "famous",
                "match": "e",
                "synonym": "well-known",
                "zh": "著名的"
              },
              {
                "id": 2,
                "word": "difficult",
                "match": "d",
                "synonym": "hard",
                "zh": "困難的"
              },
              {
                "id": 3,
                "word": "afraid",
                "match": "b",
                "synonym": "scared",
                "zh": "害怕的"
              },
              {
                "id": 4,
                "word": "attractive",
                "match": "a",
                "synonym": "good-looking",
                "zh": "好看的；有吸引力的"
              },
              {
                "id": 5,
                "word": "correct",
                "match": "f",
                "synonym": "right",
                "zh": "正確的"
              },
              {
                "id": 6,
                "word": "glad",
                "match": "c",
                "synonym": "happy",
                "zh": "高興的；開心的"
              }
            ]
          },
          "ex2_reading_warmup": {
            "title": "Page 15 Ex 2: Reading Warm-up & Question Analysis",
            "instruction": "Read this text and the question below. Answer B is wrong (see underlined text). Underline the parts of the text where you can find answers A and C. Which is the correct answer for the question?",
            "text": "I'm reading a new book by my favourite writer. She's not well-known, and her stories aren't easy to understand, but this one is really interesting. I hope no one tells me how it ends before I finish reading it!",
            "question": "The boy is worried that",
            "options": {
              "A": "the writer's stories will change now she's famous.",
              "B": "this book is too difficult for him to finish.",
              "C": "someone will let him know what happens in the story."
            },
            "answer": "C",
            "optionAnalysis": {
              "A": {
                "textProof": "She's not well-known",
                "isCorrect": false,
                "reason": "文中明確提到作家『not well-known』（不出名），因此 A 選項說『now she's famous』與原文完全相反。"
              },
              "B": {
                "textProof": "aren't easy to understand, but this one is really interesting.",
                "isCorrect": false,
                "reason": "雖然她的故事不易理解，但這本書『really interesting』，男孩很享受閱讀，並非擔心太難而讀不完。"
              },
              "C": {
                "textProof": "I hope no one tells me how it ends before I finish reading it!",
                "isCorrect": true,
                "reason": "男孩希望在讀完前沒有人劇透結局，完全對應 C 選項『someone will let him know what happens in the story』。"
              }
            }
          },
          "exam_task": {
            "id": "u2_reading_part3_exam",
            "title": "Reading Part 3 Exam Task: Kris Davies - Teenage Painter",
            "intro": "Kris Davies started painting when he was 12. He's now 15, and has a website of his own paintings. Our journalist Tamara Yafai went to meet him.",
            "interview": [
              {
                "speaker": "Tamara",
                "question": "How did you become interested in painting, Kris?"
              },
              {
                "speaker": "Kris",
                "answer": "It's strange. My mother's a painter - you can see her best paintings on her website - but I've never been interested in the type of paintings she does. Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since."
              },
              {
                "speaker": "Tamara",
                "question": "How did you get your first brushes?"
              },
              {
                "speaker": "Kris",
                "answer": "About a year later, I decided to enter a painting competition. I wanted to use my mum's brushes, but she was using them all the time. So my uncle bought me some, which were fantastic. I came first in that competition!"
              },
              {
                "speaker": "Tamara",
                "question": "Where do your ideas come from?"
              },
              {
                "speaker": "Kris",
                "answer": "Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see, to help me remember them. People have given me beautiful books of paintings, but they don't help me get new ideas."
              },
              {
                "speaker": "Tamara",
                "question": "What type of painting are you interested in?"
              },
              {
                "speaker": "Kris",
                "answer": "Well, all my favourite artists paint people. But I love animals and being in the countryside, so I hope to be a painter of nature. I've tried painting buildings. That was too hard for me."
              },
              {
                "speaker": "Tamara",
                "question": "Do you have any advice for other young painters?"
              },
              {
                "speaker": "Kris",
                "answer": "The best painters never stop painting. That's how they become so good, and it's how you will get better. Also, remember to ask other people what they think of your paintings - even if you don't like what they say."
              }
            ],
            "questions": [
              {
                "number": 1,
                "question": "How did Kris first become interested in painting?",
                "options": {
                  "A": "He saw some interesting paintings online.",
                  "B": "A member of his family is a painter.",
                  "C": "He painted something for a friend."
                },
                "answer": "C",
                "quote": "Then, a few years ago, my sister asked me to paint a card for a friend's birthday. Her friend loved it, and I haven't stopped painting ever since.",
                "rationale": "Kris 的姊姊請他為朋友的生日畫一張卡片，朋友非常喜歡，自此他便停不下來。因此是『為朋友畫了東西』激發了他的興趣。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：媽媽的畫確實在網站上（see her best paintings on her website），但他對媽媽畫的類型毫無興趣（never been interested），並非他在線上看到畫作引起興趣。",
                  "B": "干擾陷阱：媽媽確實是畫家（My mother's a painter），但他明確說他從不喜歡媽媽畫的畫，因此不是家人啟發他。"
                }
              },
              {
                "number": 2,
                "question": "How did Kris get his first brushes?",
                "options": {
                  "A": "He won them.",
                  "B": "They were a present.",
                  "C": "They belonged to his mother."
                },
                "answer": "B",
                "quote": "So my uncle bought me some, which were fantastic. I came first in that competition!",
                "rationale": "叔叔買給他一套很棒的畫筆（bought me some），買給他即為『禮物（present）』。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：他在比賽中得了第一名（came first in that competition），但贏得的是比賽，畫筆是叔叔買的禮物，不是獎品。",
                  "C": "干擾陷阱：他原本想用媽媽的畫筆（wanted to use my mum's brushes），但媽媽一直自己在用，所以他並沒有得到媽媽的畫筆。"
                }
              },
              {
                "number": 3,
                "question": "Kris gets his ideas from",
                "options": {
                  "A": "films.",
                  "B": "places he visits.",
                  "C": "books about paintings."
                },
                "answer": "B",
                "quote": "Seeing different places is really interesting. They help me think of new things to paint. Often I use my phone to film places I see...",
                "rationale": "看見不同地方（places he visits）激發他想到新畫作題材（think of new things to paint）。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：文中出現 film，但在此是【動詞】（用手機錄影用以記憶地點），而非名詞『電影（movies）』。",
                  "C": "干擾陷阱：有人送他精美的畫冊（books of paintings），但他特別說『they don't help me get new ideas』，完全排除 C。"
                }
              },
              {
                "number": 4,
                "question": "Kris wants to paint",
                "options": {
                  "A": "people.",
                  "B": "buildings.",
                  "C": "nature."
                },
                "answer": "C",
                "quote": "But I love animals and being in the countryside, so I hope to be a painter of nature.",
                "rationale": "Kris 熱愛動物與鄉村，因此希望成為大自然的畫家（a painter of nature）。",
                "distractorAnalysis": {
                  "A": "干擾陷阱：他最喜歡的藝術家們畫的是人（all my favourite artists paint people），但這不是他自己想畫的主題。",
                  "B": "干擾陷阱：他曾嘗試畫建築物，但他發現那對他來說太難了（That was too hard for me），並非他想畫的。"
                }
              },
              {
                "number": 5,
                "question": "Kris says that other young painters should",
                "options": {
                  "A": "do lots of painting.",
                  "B": "look at the paintings that the best artists paint.",
                  "C": "not worry about other people's opinions of their paintings."
                },
                "answer": "A",
                "quote": "The best painters never stop painting. That's how they become so good, and it's how you will get better.",
                "rationale": "頂尖畫家從不停筆（never stop painting），這也是進步之道，同義替換為『do lots of painting』（大量練習繪畫）。",
                "distractorAnalysis": {
                  "B": "干擾陷阱：雖然提到了 the best painters，但他並未建議去看他們的畫，而是強調他們『never stop painting』的不斷創作精神。",
                  "C": "干擾陷阱：Kris 反而建議一定要詢問他人意見（remember to ask other people what they think），即使不喜歡批評也要聽，因此與『不理會他人意見』相反。"
                }
              }
            ]
          }
        },
        "listening": {
          "part": 4,
          "title": "Listening Part 4 Exam Task: Five Short Conversations / Monologues",
          "audioTrack": "Track 07",
          "items": [
            {
              "number": 1,
              "prompt": "You will hear two friends talking about a film they've just seen. What type of film was it?",
              "options": {
                "A": "a comedy",
                "B": "a horror film",
                "C": "an adventure film"
              },
              "answer": "C",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "Well, that was certainly thrilling! I thought it was going to be a comedy when we booked tickets, because that famous funny actor was starring in it.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "提到原本以為是喜劇（comedy），因為有搞笑明星，但這只是進場前的預期，不是這部電影實際的類型。"
                },
                {
                  "speaker": "Boy",
                  "text": "Me too! And right at the beginning, when they were trapped in that dark spooky old castle, I was honestly terrified it was going to be a horror film! I can't stand scary movies.",
                  "isDistractor": true,
                  "distractorTarget": "B",
                  "explanation": "提到一開始在古堡很害怕會變成恐怖片（horror film），但這只是男孩的擔憂，電影並非恐怖片。"
                },
                {
                  "speaker": "Girl",
                  "text": "Yeah, but once they escaped on that speedboat and travelled across the wild jungle looking for the lost golden crown, it was non-stop action! A fantastic adventure film!",
                  "isKey": true,
                  "distractorTarget": "C",
                  "explanation": "明確證實電影是搭快艇、穿越叢林尋找寶藏的精彩冒險片（A fantastic adventure film）。"
                },
                {
                  "speaker": "Boy",
                  "text": "Totally! All those narrow escapes and exciting journeys kept me on the edge of my seat.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "附和冒險旅程的刺激。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：原先預期】女孩提到看見搞笑演員以為是喜劇片（thought it was going to be a comedy），但正片完全不是喜劇。",
                "B": "【陷阱：個人恐懼】男孩提到開頭陰森古堡讓他害怕是恐怖片（terrified it was going to be a horror film），但隨後劇情轉折，並非恐怖片。",
                "C": "【正解：真正類型】女孩明確總結『A fantastic adventure film!』，且全片充斥荒野探險與尋寶動作場面。"
              }
            },
            {
              "number": 2,
              "prompt": "You will hear a boy talking about a camping trip. Who did he go camping with?",
              "options": {
                "A": "his brother",
                "B": "his mother",
                "C": "his uncle"
              },
              "answer": "C",
              "tapescript": [
                {
                  "speaker": "Boy",
                  "text": "Last weekend I had the best time camping out in the pine forest by the river.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "引入露營情境。"
                },
                {
                  "speaker": "Boy",
                  "text": "Usually my older brother comes with me, but he had an important science exam on Monday, so he stayed at home studying all weekend.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "哥哥平時常一起去，但這次要準備週一考試，整週末留在家讀書，沒有去露營。"
                },
                {
                  "speaker": "Boy",
                  "text": "My mother drove us to the store and packed all our warm sleeping bags into the boots, but she can't stand insects and hates sleeping in tents, so she never goes camping.",
                  "isDistractor": true,
                  "distractorTarget": "B",
                  "explanation": "媽媽幫忙買東西打包行李，但媽媽討厭昆蟲且討厭睡帳篷，完全不露營。"
                },
                {
                  "speaker": "Boy",
                  "text": "Fortunately, my uncle had some time off work. He loves wildlife, so he took me in his jeep and we pitched the tent together right beside the water.",
                  "isKey": true,
                  "distractorTarget": "C",
                  "explanation": "叔叔有休假且熱愛大自然，開吉普車帶他去並一起在水邊搭帳篷，正解為叔叔。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：缺席家人】哥哥平時雖然會去，但這次留在家準備考試，未同行。",
                "B": "【陷阱：協助打包】媽媽幫忙整理睡袋，但因討厭帳篷與蟲子根本不露營。",
                "C": "【正解：同行夥伴】叔叔開車載他去，並一起搭帳篷度過週末。"
              }
            },
            {
              "number": 3,
              "prompt": "You will hear a boy, James, talking to his mother about basketball lessons. What does James ask his mother to do?",
              "options": {
                "A": "find out when his basketball lessons start",
                "B": "book some basketball lessons for him",
                "C": "buy him some basketball clothes"
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "James",
                  "text": "Mum, have you got five minutes? You know the new youth basketball coaching sessions starting at the leisure centre?",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "開門見山提出籃球課話題。"
                },
                {
                  "speaker": "Mother",
                  "text": "Yes, James. I checked their website this morning, and the coach is running classes every Thursday at half past five.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "媽媽早上已經上網查好了上課時間（週四五點半），因此 James 不需要媽媽去查時間。"
                },
                {
                  "speaker": "Mother",
                  "text": "And didn't Grandma buy you that smart new basketball vest and shorts for your birthday last week?",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "外婆上週生日已經買給 James 全新的籃球球衣與球褲，不需要買衣服。"
                },
                {
                  "speaker": "James",
                  "text": "Yes, the kit is awesome! But the club website says places are strictly limited and an adult has to register and pay online. Could you log on and book the lessons for me before it fills up?",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "James 明確請求：因為必須家長線上付款報名，請媽媽登入幫他預約課程（Could you log on and book the lessons for me?）。"
                },
                {
                  "speaker": "Mother",
                  "text": "Of course! Let's get my debit card and register right now.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "媽媽同意幫忙報名。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：已完成動作】媽媽早已查好上課時間（checked website this morning），James 無須提出此要求。",
                "B": "【正解：請求核心】James 拜託媽媽登入網站替他報名課程（book the lessons for me）。",
                "C": "【陷阱：已有物品】外婆上週生日剛送了球衣球褲，James 身上裝備齊全，不需買衣服。"
              }
            },
            {
              "number": 4,
              "prompt": "You will hear two friends discussing a practice for their dance group. What do they still need to do?",
              "options": {
                "A": "tell people when the practice will start",
                "B": "find a place to practise",
                "C": "decide on a dance"
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "Hi Lucas! We need to make sure everything is ready for the dance group rehearsal this weekend.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "討論街舞團排練準備事項。"
                },
                {
                  "speaker": "Boy",
                  "text": "Don't worry, we're making good progress. We all agreed on that dynamic hip-hop routine on Tuesday, so choosing the dance style is completely done.",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "週二已經全員一致決定好跳 hip-hop 舞步，因此選舞步已經完成，不需要再決定。"
                },
                {
                  "speaker": "Boy",
                  "text": "And I've already sent a group chat message to all eight dancers telling everyone that we kick off at ten sharp on Saturday morning.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "男孩已經群發訊息通知所有人週六早上十點開始，時間已經通知完畢。"
                },
                {
                  "speaker": "Girl",
                  "text": "That's great, but there's a problem with the venue! The school hall is being painted, and the community centre studio is booked all day.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "學校大廳在油漆，社區中心被訂滿，排練場地出現大問題。"
                },
                {
                  "speaker": "Boy",
                  "text": "Oh no! So we haven't got anywhere to rehearse yet. We definitely need to find a suitable room today.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "男孩確認：目前還沒有排練地點，今天必須盡快找到場地（find a place to practise）。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：已通知完畢】男孩已經傳訊通知所有團員週六早上十點排練，無須再做。",
                "B": "【正解：唯一待辦】學校與社區中心都無法借用，目前毫無排練場地，急需尋找地點。",
                "C": "【陷阱：已選定舞步】週二早已選定 hip-hop 曲目，此事項早已搞定。"
              }
            },
            {
              "number": 5,
              "prompt": "You will hear a girl talking about horse riding. Why does she like horse riding?",
              "options": {
                "A": "She is learning something new.",
                "B": "She can spend time outdoors.",
                "C": "She has made new friends."
              },
              "answer": "B",
              "tapescript": [
                {
                  "speaker": "Girl",
                  "text": "I've been going to the riding school for nearly two years now.",
                  "isKey": false,
                  "distractorTarget": null,
                  "explanation": "說明學騎馬的背景。"
                },
                {
                  "speaker": "Girl",
                  "text": "When I first joined, my parents thought it would be a lovely chance to make lots of new friends. But honestly, most riders there are adults who leave immediately after their lesson, so I haven't really met anyone my age.",
                  "isDistractor": true,
                  "distractorTarget": "C",
                  "explanation": "父母原本以為能交新朋友，但那裡都是下課就走的大人，根本沒交到同齡朋友。"
                },
                {
                  "speaker": "Girl",
                  "text": "And having ridden for so long, I can already trot, canter and jump fences easily, so it's not like I'm picking up fresh skills every week anymore.",
                  "isDistractor": true,
                  "distractorTarget": "A",
                  "explanation": "騎了兩年基本技能全學會了，因此並非為了每週學習新事物而喜歡騎馬。"
                },
                {
                  "speaker": "Girl",
                  "text": "For me, the real joy is leaving behind the noisy classrooms and traffic, feeling the breeze on my face, and riding across the wide green meadows under the open sky. Being out in nature is simply unbeatable.",
                  "isKey": true,
                  "distractorTarget": "B",
                  "explanation": "她真正熱愛的是遠離喧囂、在大藍天與綠草地間感受微風，也就是『置身於戶外大自然（spend time outdoors）』。"
                }
              ],
              "distractorXray": {
                "A": "【陷阱：早已學會】學了兩年已能輕鬆跳障礙，並不是因為學習新技能而熱愛。",
                "B": "【正解：核心原因】享受吹風、奔馳在綠草地與開闊天空下，完全呼應 spend time outdoors。",
                "C": "【陷阱：未結交到朋友】馬場大多是成人且課後就離開，她根本沒有在馬場結交到新朋友。"
              }
            }
          ],
          "questions": [
            {
              "id": 1,
              "number": 1,
              "prompt": "You will hear two friends talking about a film they've just seen. What type of film was it?",
              "options": {
                "A": "a comedy",
                "B": "a horror film",
                "C": "an adventure film"
              },
              "answer": "C"
            },
            {
              "id": 2,
              "number": 2,
              "prompt": "You will hear a boy talking about a camping trip. Who did he go camping with?",
              "options": {
                "A": "his brother",
                "B": "his mother",
                "C": "his uncle"
              },
              "answer": "C"
            },
            {
              "id": 3,
              "number": 3,
              "prompt": "You will hear a boy, James, talking to his mother about basketball lessons. What does James ask his mother to do?",
              "options": {
                "A": "find out when his basketball lessons start",
                "B": "book some basketball lessons for him",
                "C": "buy him some basketball clothes"
              },
              "answer": "B"
            },
            {
              "id": 4,
              "number": 4,
              "prompt": "You will hear two friends discussing a practice for their dance group. What do they still need to do?",
              "options": {
                "A": "tell people when the practice will start",
                "B": "find a place to practise",
                "C": "decide on a dance"
              },
              "answer": "B"
            },
            {
              "id": 5,
              "number": 5,
              "prompt": "You will hear a girl talking about horse riding. Why does she like horse riding?",
              "options": {
                "A": "She is learning something new.",
                "B": "She can spend time outdoors.",
                "C": "She has made new friends."
              },
              "answer": "B"
            }
          ],
          "tapescript": [
            {
              "speaker": "Girl",
              "text": "Well, that was certainly thrilling! I thought it was going to be a comedy when we booked tickets, because that famous funny actor was starring in it.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "提到原本以為是喜劇（comedy），因為有搞笑明星，但這只是進場前的預期，不是這部電影實際的類型。"
            },
            {
              "speaker": "Boy",
              "text": "Me too! And right at the beginning, when they were trapped in that dark spooky old castle, I was honestly terrified it was going to be a horror film! I can't stand scary movies.",
              "isDistractor": true,
              "distractorTarget": "B",
              "explanation": "提到一開始在古堡很害怕會變成恐怖片（horror film），但這只是男孩的擔憂，電影並非恐怖片。"
            },
            {
              "speaker": "Girl",
              "text": "Yeah, but once they escaped on that speedboat and travelled across the wild jungle looking for the lost golden crown, it was non-stop action! A fantastic adventure film!",
              "isKey": true,
              "distractorTarget": "C",
              "explanation": "明確證實電影是搭快艇、穿越叢林尋找寶藏的精彩冒險片（A fantastic adventure film）。"
            },
            {
              "speaker": "Boy",
              "text": "Totally! All those narrow escapes and exciting journeys kept me on the edge of my seat.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "附和冒險旅程的刺激。"
            },
            {
              "speaker": "Boy",
              "text": "Last weekend I had the best time camping out in the pine forest by the river.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "引入露營情境。"
            },
            {
              "speaker": "Boy",
              "text": "Usually my older brother comes with me, but he had an important science exam on Monday, so he stayed at home studying all weekend.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "哥哥平時常一起去，但這次要準備週一考試，整週末留在家讀書，沒有去露營。"
            },
            {
              "speaker": "Boy",
              "text": "My mother drove us to the store and packed all our warm sleeping bags into the boots, but she can't stand insects and hates sleeping in tents, so she never goes camping.",
              "isDistractor": true,
              "distractorTarget": "B",
              "explanation": "媽媽幫忙買東西打包行李，但媽媽討厭昆蟲且討厭睡帳篷，完全不露營。"
            },
            {
              "speaker": "Boy",
              "text": "Fortunately, my uncle had some time off work. He loves wildlife, so he took me in his jeep and we pitched the tent together right beside the water.",
              "isKey": true,
              "distractorTarget": "C",
              "explanation": "叔叔有休假且熱愛大自然，開吉普車帶他去並一起在水邊搭帳篷，正解為叔叔。"
            },
            {
              "speaker": "James",
              "text": "Mum, have you got five minutes? You know the new youth basketball coaching sessions starting at the leisure centre?",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "開門見山提出籃球課話題。"
            },
            {
              "speaker": "Mother",
              "text": "Yes, James. I checked their website this morning, and the coach is running classes every Thursday at half past five.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "媽媽早上已經上網查好了上課時間（週四五點半），因此 James 不需要媽媽去查時間。"
            },
            {
              "speaker": "Mother",
              "text": "And didn't Grandma buy you that smart new basketball vest and shorts for your birthday last week?",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "外婆上週生日已經買給 James 全新的籃球球衣與球褲，不需要買衣服。"
            },
            {
              "speaker": "James",
              "text": "Yes, the kit is awesome! But the club website says places are strictly limited and an adult has to register and pay online. Could you log on and book the lessons for me before it fills up?",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "James 明確請求：因為必須家長線上付款報名，請媽媽登入幫他預約課程（Could you log on and book the lessons for me?）。"
            },
            {
              "speaker": "Mother",
              "text": "Of course! Let's get my debit card and register right now.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "媽媽同意幫忙報名。"
            },
            {
              "speaker": "Girl",
              "text": "Hi Lucas! We need to make sure everything is ready for the dance group rehearsal this weekend.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "討論街舞團排練準備事項。"
            },
            {
              "speaker": "Boy",
              "text": "Don't worry, we're making good progress. We all agreed on that dynamic hip-hop routine on Tuesday, so choosing the dance style is completely done.",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "週二已經全員一致決定好跳 hip-hop 舞步，因此選舞步已經完成，不需要再決定。"
            },
            {
              "speaker": "Boy",
              "text": "And I've already sent a group chat message to all eight dancers telling everyone that we kick off at ten sharp on Saturday morning.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "男孩已經群發訊息通知所有人週六早上十點開始，時間已經通知完畢。"
            },
            {
              "speaker": "Girl",
              "text": "That's great, but there's a problem with the venue! The school hall is being painted, and the community centre studio is booked all day.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "學校大廳在油漆，社區中心被訂滿，排練場地出現大問題。"
            },
            {
              "speaker": "Boy",
              "text": "Oh no! So we haven't got anywhere to rehearse yet. We definitely need to find a suitable room today.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "男孩確認：目前還沒有排練地點，今天必須盡快找到場地（find a place to practise）。"
            },
            {
              "speaker": "Girl",
              "text": "I've been going to the riding school for nearly two years now.",
              "isKey": false,
              "distractorTarget": null,
              "explanation": "說明學騎馬的背景。"
            },
            {
              "speaker": "Girl",
              "text": "When I first joined, my parents thought it would be a lovely chance to make lots of new friends. But honestly, most riders there are adults who leave immediately after their lesson, so I haven't really met anyone my age.",
              "isDistractor": true,
              "distractorTarget": "C",
              "explanation": "父母原本以為能交新朋友，但那裡都是下課就走的大人，根本沒交到同齡朋友。"
            },
            {
              "speaker": "Girl",
              "text": "And having ridden for so long, I can already trot, canter and jump fences easily, so it's not like I'm picking up fresh skills every week anymore.",
              "isDistractor": true,
              "distractorTarget": "A",
              "explanation": "騎了兩年基本技能全學會了，因此並非為了每週學習新事物而喜歡騎馬。"
            },
            {
              "speaker": "Girl",
              "text": "For me, the real joy is leaving behind the noisy classrooms and traffic, feeling the breeze on my face, and riding across the wide green meadows under the open sky. Being out in nature is simply unbeatable.",
              "isKey": true,
              "distractorTarget": "B",
              "explanation": "她真正熱愛的是遠離喧囂、在大藍天與綠草地間感受微風，也就是『置身於戶外大自然（spend time outdoors）』。"
            }
          ],
          "distractorXray": [
            {
              "A": "【陷阱：原先預期】女孩提到看見搞笑演員以為是喜劇片（thought it was going to be a comedy），但正片完全不是喜劇。",
              "B": "【陷阱：個人恐懼】男孩提到開頭陰森古堡讓他害怕是恐怖片（terrified it was going to be a horror film），但隨後劇情轉折，並非恐怖片。",
              "C": "【正解：真正類型】女孩明確總結『A fantastic adventure film!』，且全片充斥荒野探險與尋寶動作場面。"
            },
            {
              "A": "【陷阱：缺席家人】哥哥平時雖然會去，但這次留在家準備考試，未同行。",
              "B": "【陷阱：協助打包】媽媽幫忙整理睡袋，但因討厭帳篷與蟲子根本不露營。",
              "C": "【正解：同行夥伴】叔叔開車載他去，並一起搭帳篷度過週末。"
            },
            {
              "A": "【陷阱：已完成動作】媽媽早已查好上課時間（checked website this morning），James 無須提出此要求。",
              "B": "【正解：請求核心】James 拜託媽媽登入網站替他報名課程（book the lessons for me）。",
              "C": "【陷阱：已有物品】外婆上週生日剛送了球衣球褲，James 身上裝備齊全，不需買衣服。"
            },
            {
              "A": "【陷阱：已通知完畢】男孩已經傳訊通知所有團員週六早上十點排練，無須再做。",
              "B": "【正解：唯一待辦】學校與社區中心都無法借用，目前毫無排練場地，急需尋找地點。",
              "C": "【陷阱：已選定舞步】週二早已選定 hip-hop 曲目，此事項早已搞定。"
            },
            {
              "A": "【陷阱：早已學會】學了兩年已能輕鬆跳障礙，並不是因為學習新技能而熱愛。",
              "B": "【正解：核心原因】享受吹風、奔馳在綠草地與開闊天空下，完全呼應 spend time outdoors。",
              "C": "【陷阱：未結交到朋友】馬場大多是成人且課後就離開，她根本沒有在馬場結交到新朋友。"
            }
          ],
          "examFormatEx1": {
            "title": "Page 13 Ex 1: Listening Part 4 Format Overview",
            "instruction": "Work in pairs. Look at the exam task and answer the questions.",
            "questions": [
              {
                "id": 1,
                "question": "How many questions are there in Listening Part 4?",
                "answer": "5 questions",
                "explanation": "Listening Part 4 固定有 5 道題目（每題 1 分）。"
              },
              {
                "id": 2,
                "question": "For each question, how many possible answers do you choose from?",
                "answer": "3 possible answers (A, B, C)",
                "explanation": "每題提供 3 個三選一選項（A, B, C）。"
              },
              {
                "id": 3,
                "question": "Read the questions again. How many people do you think you will hear in each one (one person or two)?",
                "breakdown": [
                  {
                    "item": 1,
                    "text": "two friends talking about a film",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 2,
                    "text": "a boy talking about a camping trip",
                    "people": "one person (monologue)"
                  },
                  {
                    "item": 3,
                    "text": "a boy, James, talking to his mother",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 4,
                    "text": "two friends discussing a practice for their dance group",
                    "people": "two people (dialogue)"
                  },
                  {
                    "item": 5,
                    "text": "a girl talking about horse riding",
                    "people": "one person (monologue)"
                  }
                ]
              }
            ]
          },
          "prepTrack06": {
            "title": "Page 13 Ex 2: Track 06 Introductory Listening",
            "instruction": "Abbey and Jasmine are talking about Abbey's favourite film star. Listen and complete these sentences from their conversation.",
            "audioTrack": "Track 06",
            "tapescript": [
              {
                "speaker": "Jasmine",
                "text": "He's really good-looking, isn't he?"
              },
              {
                "speaker": "Abbey",
                "text": "Yes, he is. He's also a really good actor. That's the reason I prefer him to any other actor."
              },
              {
                "speaker": "Abbey",
                "text": "In the last few years his films haven't been very good."
              }
            ],
            "gaps": [
              {
                "gap": 1,
                "answer": "also",
                "sentence": "He's (1) [also] a really good actor."
              },
              {
                "gap": 2,
                "answer": "reason",
                "sentence": "That's the (2) [reason] I prefer him to any other actor."
              },
              {
                "gap": 3,
                "answer": "haven't",
                "sentence": "In the last few years his films (3) [haven't] been very good."
              }
            ]
          },
          "analysisTrack06": {
            "title": "Page 13 Ex 3 & Ex 4: Distractor Analysis of Track 06",
            "question": "Why does Abbey like her favourite actor?",
            "options": {
              "A": "He makes good films.",
              "B": "He is good-looking.",
              "C": "He is a good actor."
            },
            "answer": "C",
            "analysis": {
              "A": {
                "isCorrect": false,
                "evidence": "Abbey says: 'In the last few years his films haven't been very good.'",
                "trapReason": "直接否定！他近年的電影並不好看，完全排除 A。"
              },
              "B": {
                "isCorrect": false,
                "evidence": "Jasmine says: 'He's really good-looking, isn't he?' and Abbey replies: 'Yes, he is.'",
                "trapReason": "干擾陷阱！雖然 Abbey 同意他長相好看，但這並非她最喜愛他（prefer him to any other actor）的真正核心原因。"
              },
              "C": {
                "isCorrect": true,
                "evidence": "Abbey explicitly says: 'He's also a really good actor. That's the reason I prefer him to any other actor.'",
                "trapReason": "正解核心！Abbey 用『That's the reason...』明確點出她偏愛他的真正原因是因為他是位好演員。"
              }
            }
          }
        },
        "listeningPart2": null,
        "listeningPart3": null,
        "writing": {
          "part": 5,
          "type": "readingWritingPart5",
          "title": "Reading & Writing Part 5 (Open Cloze Email)",
          "examTask": {
            "id": "u2_rw_part5_exam",
            "title": "Reading & Writing Part 5: Hasan's Email",
            "instructions": "For each question, write the correct answer. Write one word for each gap.",
            "image": "assets/images/u2/u2_hasan_bedroom.jpg",
            "email": {
              "from": "Hasan",
              "subject": "Pen friend introduction",
              "text": "My name (0) [is] Hasan Sadik but my friends call me Zan. I'm 13 and I live in Adana, Turkey. I (1) [have] got two older sisters. (2) [Their] names are Ayla and Zeynep.\nIn my free time, I love listening (3) [to] music. I also play the drums in the school band. I go to the cinema with my friends once (4) [a] week. After the film, (5) [we] sometimes have dinner in a pizza restaurant together. I usually have mushroom pizza - my favourite.\nPlease write soon and tell me (6) [about] your family, friends and hobbies.\nBest wishes\nHasan"
            },
            "gaps": [
              {
                "gap": 0,
                "answer": "is",
                "acceptedVariants": [
                  "is"
                ],
                "wordType": "Verb (be)",
                "grammarRole": "Third-person singular present of be",
                "isExample": true,
                "clue": "My name ... Hasan"
              },
              {
                "gap": 1,
                "answer": "have",
                "acceptedVariants": [
                  "have",
                  "'ve"
                ],
                "wordType": "Auxiliary verb",
                "grammarRole": "Present tense form in 'have got'",
                "clue": "I ... got two older sisters",
                "explanation": "英式英語表達『擁有』常用 have got，主詞為第一人稱 I，必須填入 have（或縮寫 've）。",
                "commonTrap": "切勿填入 do 或 had；在此搭配過去分詞 got，只能填 have。"
              },
              {
                "gap": 2,
                "answer": "Their",
                "acceptedVariants": [
                  "Their",
                  "their"
                ],
                "wordType": "Possessive adjective",
                "grammarRole": "Plural possessive modifying 'names'",
                "clue": "... names are Ayla and Zeynep",
                "explanation": "修飾複數名詞 names，先行詞為 two older sisters（兩位姊姊），必須用第三人稱複數所有格代名詞 Their。注意句首大寫！",
                "commonTrap": "考生常誤填 They（主格）或 Her（單數女性所有格）。兩位姊姊必須用複數 Their。"
              },
              {
                "gap": 3,
                "answer": "to",
                "acceptedVariants": [
                  "to"
                ],
                "wordType": "Preposition",
                "grammarRole": "Dependent preposition after 'listen'",
                "clue": "listening ... music",
                "explanation": "動詞 listen 為不及物動詞，接受詞音樂（music）時，必須固定搭配介系詞 to（listen to music）。",
                "commonTrap": "中文說『聽音樂』容易受母語干擾而漏掉 to，或誤填 for / of。"
              },
              {
                "gap": 4,
                "answer": "a",
                "acceptedVariants": [
                  "a"
                ],
                "wordType": "Indefinite article",
                "grammarRole": "Article in frequency phrase 'once a week'",
                "clue": "once ... week",
                "explanation": "頻率表達片語『每週一次』固定結構為 once a week，冠詞必須填 a。",
                "commonTrap": "不可填 in / one / the，固定搭配必為 once a week。"
              },
              {
                "gap": 5,
                "answer": "we",
                "acceptedVariants": [
                  "we"
                ],
                "wordType": "Subject pronoun",
                "grammarRole": "Subject of the clause 'sometimes have dinner'",
                "clue": "After the film, ... sometimes have dinner in a pizza restaurant together",
                "explanation": "前面提到『I go to the cinema with my friends』，看完電影後『我和我朋友們（我們）』一起吃披薩，主格代名詞填 we。",
                "commonTrap": "容易誤填 they 或 I；後方有 together 且包含作者自己，故必須用第一人稱複數 we。"
              },
              {
                "gap": 6,
                "answer": "about",
                "acceptedVariants": [
                  "about"
                ],
                "wordType": "Preposition",
                "grammarRole": "Preposition of topic / theme after 'tell me'",
                "clue": "tell me ... your family, friends and hobbies",
                "explanation": "片語 tell sb about sth 表示『告訴某人關於…的事情』，介系詞填 about。",
                "commonTrap": "不可填 of 或 for；tell me about... 是書信結尾常見固定句型。"
              }
            ]
          }
        },
        "writingPart7": null,
        "speaking": {
          "part": 1,
          "title": "Speaking Part 1 (Hobbies & Free Time)",
          "questions": [
            {
              "question": "What sports do you play at the weekend?",
              "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
              "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
            },
            {
              "question": "Who do you spend time with at the weekend?",
              "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
              "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
            }
          ],
          "dialogues": [
            {
              "question": "What sports do you play at the weekend?",
              "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
              "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
            },
            {
              "question": "Who do you spend time with at the weekend?",
              "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
              "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
            }
          ],
          "classification": {
            "title": "Page 16 Ex 1: Likes & Dislikes Expressions Classification",
            "instruction": "Complete the table with expressions we use to talk about the free-time activities we like and don't like.",
            "expressions": [
              "be bad at",
              "be brilliant at",
              "be good at",
              "be interested in",
              "be terrible at",
              "don't like",
              "enjoy",
              "hate",
              "like",
              "love",
              "prefer"
            ],
            "table": {
              "positive": [
                "be good at",
                "be brilliant at",
                "be interested in",
                "enjoy",
                "like",
                "love",
                "prefer"
              ],
              "negative": [
                "hate",
                "be bad at",
                "be terrible at",
                "don't like"
              ]
            }
          },
          "examinerDialogueTrack08": {
            "title": "Page 16 Ex 4 & Ex 5: Speaking Part 1 Examiner Questions (Track 08)",
            "instruction": "In the second part of Speaking Part 1, the examiner may ask you about your free time. Complete the examiner's questions in this conversation.",
            "audioTrack": "Track 08",
            "conversation": [
              {
                "speaker": "Examiner",
                "text": "Now, let's talk about weekends. What sports do you play at the weekend?",
                "isExample": true
              },
              {
                "speaker": "Candidate",
                "text": "I'm sorry, I don't understand."
              },
              {
                "speaker": "Examiner",
                "gap": 1,
                "text": "(1) [Do you play] football at the weekend?",
                "answer": "Do you play",
                "explanation": "當考生表示聽不懂廣泛問題時，考官會改用 Yes/No 具體問法協助引導：Do you play football...?"
              },
              {
                "speaker": "Candidate",
                "text": "No. I play volleyball."
              },
              {
                "speaker": "Examiner",
                "gap": 2,
                "text": "Who (2) [do you spend] time with at the weekend?",
                "answer": "do you spend",
                "explanation": "考官詢問週末通常和誰在一起度過時間，使用 Who do you spend time with...?"
              },
              {
                "speaker": "Candidate",
                "text": "I spend time with my friends."
              }
            ]
          },
          "expansion": {
            "title": "Page 16 Ex 6 & Exam Task: Say As Much As You Can",
            "tip": "在 KET 口說測驗中，切忌只回答單字或單句。要達到 13~15 盾牌，必須擴展細節（Say as much as you can），補充『做什麼、去哪裡、感受如何』。",
            "basicAnswer": "I spend time with my friends.",
            "improvedAnswer": "I spend a lot of time with my friends at the weekend. We go shopping or play computer games together, and sometimes we ride our bikes in the park.",
            "modelInterviews": [
              {
                "question": "What sports do you play at the weekend?",
                "standardBand": "I play basketball with my brother at the park on Saturday morning. It's really exciting and helps me stay fit.",
                "advancedBand": "Actually, I'm brilliant at badminton, so I usually have a training session on Saturday morning. Then on Sunday, if the weather is fine, my friends and I love playing football in the local park."
              },
              {
                "question": "Who do you spend time with at the weekend?",
                "standardBand": "I spend time with my family and my best friend, Leo. We often watch films together after dinner.",
                "advancedBand": "I usually spend Saturday with my classmates going cycling or eating pizza, and on Sunday I spend quality time with my parents and grandparents at home."
              }
            ]
          }
        },
        "speakingPart2": null,
        "revision": {
          "unitId": "u2",
          "totalPoints": 20,
          "totalMarks": 20,
          "exercises": [
            {
              "title": "Revision Ex 1: Rewrite Sentences with the Word in Brackets",
              "marks": 6,
              "instruction": "Rewrite these sentences with the word in brackets.",
              "items": [
                {
                  "id": 1,
                  "original": "My mum takes photos of us.",
                  "bracketWord": "often",
                  "rewritten": "My mum often takes photos of us.",
                  "rule": "頻率副詞 often 放在一般動詞 takes 之前。"
                },
                {
                  "id": 2,
                  "original": "My best friend draws pictures of animals at art club.",
                  "bracketWord": "usually",
                  "rewritten": "My best friend usually draws pictures of animals at art club.",
                  "rule": "頻率副詞 usually 放在一般動詞 draws 之前。"
                },
                {
                  "id": 3,
                  "original": "I'm late for my music classes.",
                  "bracketWord": "sometimes",
                  "rewritten": "I'm sometimes late for my music classes.",
                  "rule": "頻率副詞 sometimes 遇到 be 動詞（'m / am）必須置於 be 動詞之後。"
                },
                {
                  "id": 4,
                  "original": "I go to the cinema with my cousins.",
                  "bracketWord": "twice a month",
                  "rewritten": "I go to the cinema with my cousins twice a month.",
                  "acceptedAlternative": "Twice a month, I go to the cinema with my cousins.",
                  "rule": "副詞片語 twice a month 通常置於句尾，亦可置於句首加逗號。"
                },
                {
                  "id": 5,
                  "original": "My friends do after-school activities.",
                  "bracketWord": "every day",
                  "rewritten": "My friends do after-school activities every day.",
                  "acceptedAlternative": "Every day, my friends do after-school activities.",
                  "rule": "副詞片語 every day 置於句尾（或句首）。"
                },
                {
                  "id": 6,
                  "original": "We sleep in a tent in winter.",
                  "bracketWord": "never",
                  "rewritten": "We never sleep in a tent in winter.",
                  "rule": "否定頻率副詞 never 放在一般動詞 sleep 之前。"
                }
              ]
            },
            {
              "title": "Revision Ex 2: Complete Gaps with like or would like",
              "marks": 6,
              "instruction": "Complete the gaps with like or would like and the correct form of the verb in brackets.",
              "items": [
                {
                  "id": 1,
                  "speakerA": "Where [would you like to go] (you / go) for your next holiday?",
                  "speakerB": "I [would like to go] (go) to the sea because I [like swimming] (swim).",
                  "gapA": "would you like to go",
                  "gapB1": "would like to go",
                  "gapB1_alt": "'d like to go",
                  "gapB2": "like swimming",
                  "explanation": "詢問特定下個假期的期望用 would you like to go；回答用 would like to go / 'd like to go；後面說明平時一般的喜好用 like swimming。"
                },
                {
                  "id": 2,
                  "speakerA": "What type of music [do you like listening] (you / listen) to in your free time?",
                  "speakerB": "I [like listening] (listen) to rock and rap.",
                  "gapA": "do you like listening",
                  "gapB": "like listening",
                  "explanation": "詢問與陳述平時空閒時間的音樂常態喜好，皆使用 like + V-ing（do you like listening / like listening）。"
                },
                {
                  "id": 3,
                  "speakerA": "[Would you like to come] (you / come) to my birthday party next Saturday evening?",
                  "speakerB": "Yes, thank you! I [like going] (go) to parties. What time does it start?",
                  "gapA": "Would you like to come",
                  "gapB": "like going",
                  "gapB_alt": "would like to go / 'd like to go",
                  "explanation": "邀約下週六生日派對用 Would you like to come；B 表達平時就喜歡參加派對用 like going（或表達這次很想去用 would like to go）。"
                },
                {
                  "id": 4,
                  "speakerA": "Which film [would you like to watch] (you / watch) at the cinema tonight?",
                  "speakerB": "I [would like to watch] (watch) the adventure film.",
                  "gapA": "would you like to watch",
                  "gapB": "would like to watch",
                  "gapB_alt": "'d like to watch",
                  "explanation": "詢問與決定今晚（tonight）特定場合想看的電影，用 would you like to watch 與 would like to watch。"
                },
                {
                  "id": 5,
                  "speakerA": "What [do you like doing] (you / do) in your free time?",
                  "speakerB": "I [like playing] (play) the piano.",
                  "gapA": "do you like doing",
                  "gapB": "like playing",
                  "explanation": "詢問平常空閒生活做什麼用 What do you like doing；回答用 I like playing the piano。"
                },
                {
                  "id": 6,
                  "speakerA": "[Do you like eating] (you / eat) in restaurants or at home?",
                  "speakerB": "I usually eat at home but I [would like to go] (go) to a restaurant sometimes.",
                  "gapA": "Do you like eating",
                  "gapB": "would like to go",
                  "gapB_alt": "'d like to go",
                  "explanation": "A 詢問兩者之間的常態偏好用 Do you like eating；B 回答平時在家吃，但有時希望／想要去餐廳用 would like to go。"
                }
              ]
            },
            {
              "title": "Revision Ex 3: Complete Sentences with a Word or Phrase from the Box",
              "marks": 8,
              "instruction": "Complete the sentences with a word or phrase from the box.",
              "wordBox": [
                "cooking",
                "dancing",
                "going to concerts",
                "messaging friends",
                "playing computer games",
                "reading books",
                "spending time with friends",
                "trying new food"
              ],
              "items": [
                {
                  "id": 1,
                  "sentence": "My brother is brilliant at [cooking]. He often makes dinner for the family.",
                  "answer": "cooking",
                  "clue": "makes dinner for the family（為全家做晚餐）"
                },
                {
                  "id": 2,
                  "sentence": "I enjoy [going to concerts] because I love seeing my favourite bands.",
                  "answer": "going to concerts",
                  "clue": "seeing my favourite bands（看最喜歡的樂團表演）"
                },
                {
                  "id": 3,
                  "sentence": "Irene hates going to discos because she is terrible at [dancing].",
                  "answer": "dancing",
                  "clue": "discos（迪斯可舞廳）"
                },
                {
                  "id": 4,
                  "sentence": "My mum likes calling people on the phone but I prefer [messaging friends].",
                  "answer": "messaging friends",
                  "clue": "calling on the phone vs messaging（打電話對照傳簡訊訊息）"
                },
                {
                  "id": 5,
                  "sentence": "I don't like [reading books] in my free time because I have to read a lot for school.",
                  "answer": "reading books",
                  "clue": "read a lot for school（學校課業讀很多書）"
                },
                {
                  "id": 6,
                  "sentence": "When I go to a restaurant I'm always interested in [trying new food].",
                  "answer": "trying new food",
                  "clue": "go to a restaurant（去餐廳品嚐新料理）"
                },
                {
                  "id": 7,
                  "sentence": "Jenny loves [playing computer games]. She always wins.",
                  "answer": "playing computer games",
                  "clue": "always wins（總是獲勝贏得遊戲）"
                },
                {
                  "id": 8,
                  "sentence": "My sister doesn't like being alone. She prefers [spending time with friends].",
                  "answer": "spending time with friends",
                  "clue": "doesn't like being alone（不喜歡獨處）"
                }
              ]
            }
          ]
        },
        "revisionUnit1": null,
        "revisionUnit3": null
      }
    },
    {
      "id": "u3",
      "number": 3,
      "title": "Eating in, eating out",
      "topic": "House & Food",
      "grammarFocus": [
        "There is / are, a / an, some & any",
        "(don't) have to",
        "Past simple spelling"
      ],
      "spreadPages": [
        "assets/pages/u3_p18_p19.jpg",
        "assets/pages/u3_p20_p21.jpg",
        "assets/pages/u3_p22_p23.jpg"
      ],
      "vocabulary": [
        {
          "word": "cupboard",
          "pos": "n.",
          "zh": "碗櫥；壁櫥",
          "collocation": "kitchen cupboard / in the cupboard",
          "example": "We put all the plates, cups and glasses in this cupboard.",
          "tip": "cup (杯子) + board (板/架子)。注意字母 'p' 不發音，讀作 /ˈkʌb.əd/。"
        },
        {
          "word": "fridge",
          "pos": "n.",
          "zh": "冰箱",
          "collocation": "in the fridge / keep food in the fridge",
          "example": "You have to put milk, cheese and meat in the fridge so they stay fresh.",
          "tip": "口語中 refrigerator 的簡稱，注意中間拼字有 'd' (fridge)。"
        },
        {
          "word": "cooker",
          "pos": "n.",
          "zh": "爐具；炊具（爐子）",
          "collocation": "gas cooker / electric cooker",
          "example": "To make a cake, fry an egg or boil vegetables, you need a cooker.",
          "tip": "⚠️ 劍橋常考陷阱：cook 才是名詞「廚師」或動詞「煮」；cooker 是「廚具/爐子」，絕對不是廚師！"
        },
        {
          "word": "omelette",
          "pos": "n.",
          "zh": "歐姆蛋；西式煎蛋捲",
          "collocation": "mushroom omelette / cheese omelette / make an omelette",
          "example": "Grandma showed Wendy how to make a delicious mushroom omelette in butter.",
          "tip": "來自法語的外來詞，注意以母音開頭，單數前面搭配冠詞 'an omelette'。"
        },
        {
          "word": "boil",
          "pos": "v.",
          "zh": "水煮；沸騰",
          "collocation": "boil water / boil vegetables / boiled egg",
          "example": "When you boil food, you cook it in boiling water.",
          "tip": "常見料理四動詞辨析：boil (水煮)、bake (烘焙麵包/蛋糕)、roast (烤肉/烤馬鈴薯)、fry (油煎)。"
        },
        {
          "word": "roast",
          "pos": "v. / adj.",
          "zh": "（在烤箱中或炭火上）烘烤；烤的",
          "collocation": "roast chicken / roast potatoes / roast meat",
          "example": "On Sundays my parents often roast chicken and potatoes for dinner.",
          "tip": "roast 常用於烤肉類或整顆根莖類蔬菜；bake 則專用於麵粉烘焙類（cakes, bread, biscuits）。"
        },
        {
          "word": "serve",
          "pos": "v.",
          "zh": "端上（飯菜）；供應；招待",
          "collocation": "serve main courses / serve food / waiting to be served",
          "example": "That restaurant doesn't serve main courses, but you can get a snack and a drink there.",
          "tip": "餐廳必備高頻詞。'waiting to be served' 表示顧客在座位上等待服務生前來點餐或送餐。"
        },
        {
          "word": "look after",
          "pos": "phr. v.",
          "zh": "照顧；照料",
          "collocation": "look after a younger sibling / look after a pet",
          "example": "Moussa gets up early and looks after his little brother while their mother makes breakfast.",
          "tip": "⚠️ KET 片語動詞辨析：look after (照顧) vs look for (尋找) vs look at (注視)。"
        },
        {
          "word": "canteen",
          "pos": "n.",
          "zh": "（學校、工廠）餐廳；食堂",
          "collocation": "school canteen / eat in the canteen",
          "example": "I never eat in my school canteen because the food there isn't very good.",
          "tip": "英式英語常用 canteen 指學生或員工餐廳；美式英語多用 cafeteria。"
        },
        {
          "word": "tuck shop",
          "pos": "n.",
          "zh": "（學校的）零食部；小吃販賣部",
          "collocation": "buy lunch from the tuck shop",
          "example": "There isn't a school canteen, so students buy sandwiches from the tuck shop.",
          "tip": "英式與澳洲校園傳統用語，專門販售簡餐、麵包與零食的福利社。"
        },
        {
          "word": "wash up",
          "pos": "phr. v.",
          "zh": "洗碗盤；洗餐具",
          "collocation": "wash up the dishes / do the washing-up",
          "example": "We don't have to wash up because we use paper plates and plastic forks.",
          "tip": "⚠️ 英式英語中 wash up 特指「洗餐具、洗碗盤」；美式英語中常指「洗臉洗手」。"
        },
        {
          "word": "barbecue",
          "pos": "n. / v.",
          "zh": "戶外烤肉；燒烤野餐",
          "collocation": "have a barbecue / barbecue sausages in the garden",
          "example": "We planned to have a barbecue in the garden, but suddenly it started raining.",
          "tip": "日常對話常縮寫為 BBQ。KET Writing Part 7 經典常考主題。"
        },
        {
          "word": "vegetable",
          "pos": "n.",
          "zh": "蔬菜",
          "collocation": "fresh vegetables / grow vegetables",
          "example": "For lunch the family often has vegetables which they have grown themselves.",
          "tip": "發音注意中間字母 'e' 弱化不發音 /ˈvedʒ.tə.bəl/，日常多用複數 vegetables。"
        },
        {
          "word": "delicious",
          "pos": "adj.",
          "zh": "美味的；可口的",
          "collocation": "delicious meal / taste delicious",
          "example": "Grandma's homemade mushroom omelette smells and tastes delicious.",
          "tip": "極限形容詞（strong adjective），前面可搭配 really 或 absolutely 修飾，但通常不加 very。"
        },
        {
          "word": "meat",
          "pos": "n.",
          "zh": "肉類",
          "collocation": "meat and potatoes / eat meat",
          "example": "I don't want any meat for lunch; I prefer a bowl of vegetable soup.",
          "tip": "不可數名詞，不可加 a 或 s；否定句中表達「沒有任何肉」用 'not ... any meat'。"
        },
        {
          "word": "potatoes",
          "pos": "n.",
          "zh": "馬鈴薯；土豆",
          "collocation": "roast potatoes / mashed potatoes / eat meatballs with potatoes",
          "example": "Swedish meatballs are traditionally served with potatoes and jam.",
          "tip": "單數為 potato，複數名詞字尾為 -es (potatoes)。類似規則如 tomato ➔ tomatoes。"
        },
        {
          "word": "tidy",
          "pos": "v. / adj.",
          "zh": "整理；收拾；整潔的",
          "collocation": "tidy one's bedroom / keep the room tidy",
          "example": "Do you have to tidy your room every morning before going to school?",
          "tip": "動詞變化：現在式單數 tidies，過去式 tidied。相反詞為 untidy。"
        },
        {
          "word": "shelf",
          "pos": "n.",
          "zh": "架子；隔板",
          "collocation": "bookshelf / on the top shelf",
          "example": "There is a small wooden shelf above my desk for dictionaries and clocks.",
          "tip": "複數形態為規則不規則變化：f 改成 ves ➔ shelves。同類變化如 knife ➔ knives。"
        },
        {
          "word": "waiter",
          "pos": "n.",
          "zh": "男服務生；侍者",
          "collocation": "ask the waiter for the bill / call the waiter",
          "example": "Shall we ask the waiter to bring us the dessert menu?",
          "tip": "女服務生為 waitress；主廚為 chef；用餐顧客為 customer。"
        },
        {
          "word": "grow",
          "pos": "v.",
          "zh": "種植；生長",
          "collocation": "grow vegetables / grow plants / grow up",
          "example": "They eat fresh tomatoes and lettuce which they have grown in their backyard.",
          "tip": "三態不規則變化：grow - grew - grown。過去分詞修飾已種植完成的蔬果。"
        }
      ],
      "commonMistakes": [
        {
          "id": "u3_cm_1",
          "page": 18,
          "exercise": 4,
          "itemNumber": 1,
          "wrong": "Can you bring with you any lemonade and crisps?",
          "correct": "Can you bring with you some lemonade and crisps?",
          "errorSpan": "any",
          "correction": "some",
          "rule": "雖然疑問句一般用 any，但在表示「提出請求 (Can/Could you...?)」或「委婉提供 (Would you like...?)」並期望得到肯定答覆時，必須使用 some。"
        },
        {
          "id": "u3_cm_2",
          "page": 18,
          "exercise": 4,
          "itemNumber": 2,
          "wrong": "My mum works as a assistant chef.",
          "correct": "My mum works as an assistant chef.",
          "errorSpan": "a assistant",
          "correction": "an assistant",
          "rule": "單數可數名詞或形容詞若以母音音素（vowel sound，如 /ə/）開頭，不定冠詞必須使用 an 而非 a。"
        },
        {
          "id": "u3_cm_3",
          "page": 18,
          "exercise": 4,
          "itemNumber": 3,
          "wrong": "In my room is there a sofa.",
          "correct": "In my room there is a sofa.",
          "errorSpan": "is there",
          "correction": "there is",
          "rule": "本句為肯定陳述句（敘述房間裡有張沙發），語序必須是正常的 there is；只有在疑問句時才倒裝為 is there。"
        },
        {
          "id": "u3_cm_4",
          "page": 18,
          "exercise": 4,
          "itemNumber": 4,
          "wrong": "It's free so you don't need some money.",
          "correct": "It's free so you don't need any money.",
          "errorSpan": "some",
          "correction": "any",
          "rule": "在否定句（don't need）中，修飾不可數名詞 money 或複數名詞時，必須使用 any（一點也不...），不能用 some。"
        },
        {
          "id": "u3_cm_5",
          "page": 18,
          "exercise": 4,
          "itemNumber": 5,
          "wrong": "I bought some jeans and a beautiful trainers.",
          "correct": "I bought some jeans and beautiful trainers.",
          "errorSpan": "a beautiful trainers",
          "correction": "beautiful trainers / a pair of beautiful trainers",
          "rule": "trainers（球鞋/運動鞋）是複數名詞，前面不能直接加單數不定冠詞 a！應直接去冠詞或改用 'a pair of beautiful trainers'。"
        },
        {
          "id": "u3_cm_6",
          "page": 18,
          "exercise": 4,
          "itemNumber": 6,
          "wrong": "It's very small and there are a small bed and a desk.",
          "correct": "It's very small and there is a small bed and a desk.",
          "errorSpan": "there are",
          "correction": "there is",
          "rule": "There be 句型中若列出多個主詞，be 動詞遵循「就近原則 (Proximity Rule)」，緊鄰的第一個名詞 'a small bed' 為單數，因此使用 there is。"
        },
        {
          "id": "u3_cm_7",
          "page": 18,
          "exercise": 4,
          "itemNumber": 7,
          "wrong": "It's an interesting place because there is a lot of different things to see.",
          "correct": "It's an interesting place because there are a lot of different things to see.",
          "errorSpan": "there is",
          "correction": "there are",
          "rule": "後方主詞為複數名詞 'different things'，a lot of 修飾可數複數名詞時，there be 動詞必須採用複數形式 there are。"
        },
        {
          "id": "u3_cm_8",
          "page": 23,
          "exercise": 3,
          "itemNumber": 1,
          "wrong": "After that it stoped raining and it was sunny.",
          "correct": "After that it stopped raining and it was sunny.",
          "errorSpan": "stoped",
          "correction": "stopped",
          "rule": "stop 為單音節短母音動詞，字尾為「單一母音 (o) + 單一子音 (p)」，形成過去式時必須雙寫字尾子音再加 -ed ➔ stopped。"
        },
        {
          "id": "u3_cm_9",
          "page": 23,
          "exercise": 3,
          "itemNumber": 2,
          "wrong": "At the party we danced and singed. It was very nice.",
          "correct": "At the party we danced and sang. It was very nice.",
          "errorSpan": "singed",
          "correction": "sang",
          "rule": "sing 為常見不規則變化動詞（sing - sang - sung），其過去式為 sang，絕不可加 -ed（singed 意思是燒焦）。"
        },
        {
          "id": "u3_cm_10",
          "page": 23,
          "exercise": 3,
          "itemNumber": 3,
          "wrong": "I went to a shopping centre to buy a new skirt and I payed 45 pounds for it.",
          "correct": "I went to a shopping centre to buy a new skirt and I paid 45 pounds for it.",
          "errorSpan": "payed",
          "correction": "paid",
          "rule": "pay 的過去式拼寫為不規則的 paid（y 改為 id），不是 payed（payed 僅在航海繩索術語使用）。"
        },
        {
          "id": "u3_cm_11",
          "page": 23,
          "exercise": 3,
          "itemNumber": 4,
          "wrong": "I swam, went shopping and visitted my aunt.",
          "correct": "I swam, went shopping and visited my aunt.",
          "errorSpan": "visitted",
          "correction": "visited",
          "rule": "visit 的重音在第一音節 (/ˈvɪz.ɪt/)，字尾音節非重讀，過去式直接加 -ed ➔ visited，不可雙寫字母 t。"
        }
      ],
      "exercises": {
        "grammarVocabDrills": [
          {
            "id": "u3_drill_p18_ex1",
            "title": "Where do you have breakfast?",
            "instruction": "Match the texts (1-4) with the pictures (A-E). There is one extra picture.",
            "type": "matching",
            "sourcePage": "assets/pages/u3_p18_p19.jpg",
            "image": "assets/images/u3/u3_breakfast_places_ae.jpg",
            "items": [
              {
                "id": "u3_d1_1",
                "speaker": "Angela, 13",
                "text": "'There's never much time before school to sit down and have a big breakfast. I usually sit and have some biscuits before class on the steps outside school.'",
                "correct": "C",
                "explanation": "Angela 提到在學校外面的階梯 (steps outside school) 吃餅乾，對應圖片 C。"
              },
              {
                "id": "u3_d1_2",
                "speaker": "Noelia, 12",
                "text": "'In my house, we always have breakfast together in the kitchen. My mum usually puts some flowers from our garden on the table.'",
                "correct": "E",
                "explanation": "Noelia 提到全家在廚房 (kitchen) 圍著桌子吃早餐，桌上有花園摘來的花 (flowers)，對應圖片 E。"
              },
              {
                "id": "u3_d1_3",
                "speaker": "Harun, 12",
                "text": "'On the sofa in the living room, of course! If there aren't any cartoons on TV, I usually watch sports.'",
                "correct": "B",
                "explanation": "Harun 說自己在客廳沙發上 (sofa in the living room) 邊看電視體育節目邊吃早餐，對應圖片 B。"
              },
              {
                "id": "u3_d1_4",
                "speaker": "Victor, 14",
                "text": "'Don't tell my mum but I sometimes have breakfast in my bedroom. I love hot chocolate. If there isn't any hot chocolate left, then I have some orange juice.'",
                "correct": "A",
                "explanation": "Victor 提到偷偷在臥室 (bedroom) 喝熱巧克力與吃早餐，對應圖片 A。"
              }
            ],
            "extraOption": {
              "code": "D",
              "description": "Picture D shows a girl standing up in the hallway/kitchen having toast and tea by herself, which is not described by any student."
            }
          },
          {
            "id": "u3_drill_p18_ex2",
            "title": "House Furniture and Rooms Classification",
            "instruction": "Complete the table with these words (some items can go in more than one room).",
            "type": "table_classification",
            "sourcePage": "assets/pages/u3_p18_p19.jpg",
            "wordPool": [
              "bed",
              "bookshelf",
              "chair",
              "cooker",
              "cupboard",
              "fridge",
              "desk",
              "lamp",
              "mirror",
              "shelf",
              "shower",
              "sofa",
              "toilet"
            ],
            "categories": {
              "bedroom": [
                "bed",
                "bookshelf",
                "chair",
                "cupboard",
                "desk",
                "lamp",
                "mirror",
                "shelf"
              ],
              "bathroom": [
                "cupboard",
                "mirror",
                "shelf",
                "shower",
                "toilet"
              ],
              "living room": [
                "bookshelf",
                "chair",
                "desk",
                "lamp",
                "mirror",
                "shelf",
                "sofa"
              ],
              "kitchen": [
                "chair",
                "cooker",
                "cupboard",
                "fridge",
                "shelf"
              ]
            }
          },
          {
            "id": "u3_drill_p18_ex3",
            "title": "Whose house is it?",
            "instruction": "Write Angela, Noelia, Harun or Victor for each sentence.",
            "type": "fill_in_the_blank",
            "sourcePage": "assets/pages/u3_p18_p19.jpg",
            "items": [
              {
                "id": "u3_d3_1",
                "statement": "There's some hot chocolate on the desk in the bedroom.",
                "answer": "Victor",
                "explanation": "Victor 說他會在房間喝熱巧克力 (I love hot chocolate in my bedroom)。"
              },
              {
                "id": "u3_d3_2",
                "statement": "There are some biscuits on the floor next to the stairs.",
                "answer": "Angela",
                "explanation": "Angela 在學校外的階梯吃餅乾 (have some biscuits on the steps outside school)。"
              },
              {
                "id": "u3_d3_3",
                "statement": "There aren't any cartoons on TV this morning so this person's watching sports.",
                "answer": "Harun",
                "explanation": "Harun 說沒卡通看就看體育 (If there aren't any cartoons on TV, I usually watch sports)。"
              },
              {
                "id": "u3_d3_4",
                "statement": "There's a garden with some flowers.",
                "answer": "Noelia",
                "explanation": "Noelia 提到媽媽常把花園裡的花放在餐桌上 (puts some flowers from our garden on the table)。"
              }
            ]
          },
          {
            "id": "u3_drill_p20_ex1_ex2",
            "title": "World Dishes & Food Descriptions",
            "instruction": "Complete the descriptions with words from the box. Then match the descriptions (1-3) with pictures (A-C).",
            "type": "fill_and_match",
            "sourcePage": "assets/pages/u3_p20_p21.jpg",
            "image": "assets/images/u3/u3_world_dishes_abc.jpg",
            "boxWords": [
              "bread",
              "burger",
              "cheese",
              "chicken",
              "egg",
              "fish",
              "jam",
              "juice",
              "meat",
              "milk",
              "omelette",
              "onions",
              "potatoes",
              "rice",
              "salad",
              "soup",
              "vegetables"
            ],
            "dishes": [
              {
                "id": "u3_dish_1",
                "name": "Köttbullar (Swedish meatballs)",
                "country": "Sweden",
                "text": "I love köttbullar. These are Swedish meatballs. In our house we usually eat them with (1) [potatoes] and a little bit of jam. We have a glass of (2) [milk] with it.",
                "blanks": [
                  {
                    "gap": 1,
                    "answer": "potatoes"
                  },
                  {
                    "gap": 2,
                    "answer": "milk"
                  }
                ],
                "matchedPicture": "B",
                "explanation": "圖片 B 顯示經典瑞典肉丸佐馬鈴薯泥、果醬以及一杯牛奶。"
              },
              {
                "id": "u3_dish_2",
                "name": "Kalputi",
                "country": "Goa, India",
                "text": "I'm from Goa in India. We live next to the sea and we eat a lot of (3) [fish] with (4) [rice] and vegetables. My mum cooks kalputi once a week - it's great. She fries fish with onions.",
                "blanks": [
                  {
                    "gap": 3,
                    "answer": "fish"
                  },
                  {
                    "gap": 4,
                    "answer": "rice"
                  }
                ],
                "matchedPicture": "C",
                "explanation": "圖片 C 顯示印度果阿傳統魚咖哩 (kalputi) 搭配米飯與洋蔥蔬菜。"
              },
              {
                "id": "u3_dish_3",
                "name": "Ajiaco",
                "country": "Colombia",
                "text": "I'm from Colombia and my favourite food is ajiaco. It's a kind of (5) [soup] with (6) [chicken], potatoes and corn. I often drink (7) [juice] with it.",
                "blanks": [
                  {
                    "gap": 5,
                    "answer": "soup"
                  },
                  {
                    "gap": 6,
                    "answer": "chicken"
                  },
                  {
                    "gap": 7,
                    "answer": "juice"
                  }
                ],
                "matchedPicture": "A",
                "explanation": "圖片 A 顯示哥倫比亞經典玉米雞肉濃湯 (ajiaco)，旁邊附一杯果汁。"
              }
            ]
          },
          {
            "id": "u3_drill_p20_ex3_ex4",
            "title": "Interview: Josh from Melbourne, Australia",
            "instruction": "Read the interview and answer the questions. Then decide if the sentences are true (T) or false (F).",
            "type": "reading_comprehension",
            "sourcePage": "assets/pages/u3_p20_p21.jpg",
            "readingText": "THIS WEEK WE MEET JOSH. HE'S FROM MELBOURNE, AUSTRALIA.\nWhat's your favourite food?\n'I love fast food like burgers and pizza but I also like salad and vegetables.'\nWhere do you usually have lunch?\n'We all have to stay at school for lunch. There isn't a school canteen (a kind of restaurant) so I buy my lunch from the tuck shop. That's a kind of school café. I have to pay for my lunch before school starts. At lunchtime, two students have to collect our food from the tuck shop and we eat it in the classroom. We don't have to wash up because we use paper plates and plastic forks.'\nWho cooks in your house? Do you have to help?\n'Both my mum and my dad. No, I don't have to help.'",
            "questions": [
              {
                "id": "u3_josh_q1",
                "question": "What is Josh's favourite food?",
                "answer": "Fast food like burgers and pizza (and he also likes salad and vegetables)."
              },
              {
                "id": "u3_josh_q2",
                "question": "Where does he usually have lunch?",
                "answer": "At school in his classroom (buying food from the tuck shop)."
              }
            ],
            "trueFalseItems": [
              {
                "id": "u3_josh_tf1",
                "statement": "Josh can have his lunch at home on a school day.",
                "answer": "F",
                "explanation": "文章說 'We all have to stay at school for lunch.'，因此不能回家吃。"
              },
              {
                "id": "u3_josh_tf2",
                "statement": "Josh pays for his lunch before he eats it.",
                "answer": "T",
                "explanation": "文章說 'I have to pay for my lunch before school starts.'，先付錢才能拿餐。"
              },
              {
                "id": "u3_josh_tf3",
                "statement": "The people in the tuck shop take the food to the classrooms.",
                "answer": "F",
                "explanation": "文章說 'two students have to collect our food from the tuck shop'，是由學生自己去拿。"
              },
              {
                "id": "u3_josh_tf4",
                "statement": "Josh often washes up the plates at school.",
                "answer": "F",
                "explanation": "文章說 'We don't have to wash up because we use paper plates and plastic forks.'，用紙盤塑膠叉不用洗。"
              }
            ]
          },
          {
            "id": "u3_drill_p20_ex5",
            "title": "Phone Conversation: (don't) have to in Costa Rica",
            "instruction": "Josh's friend Susanna lives in Costa Rica in Central America. Complete their phone conversation with the correct form of (don't) have to and the verbs in brackets.",
            "type": "dialogue_completion",
            "sourcePage": "assets/pages/u3_p20_p21.jpg",
            "items": [
              {
                "id": "u3_haveto_1",
                "prompt": "Susanna: Terrible! My school day is very long and then we (1) ................ (do) a lot of homework.",
                "answer": "have to do",
                "explanation": "主詞是 we，肯定必須做功課用 have to do。"
              },
              {
                "id": "u3_haveto_2",
                "prompt": "Josh: Oh, really! (2) ................ (you / wake up) very early?",
                "answer": "Do you have to wake up",
                "explanation": "you 的現在簡單式疑問句以 Do 開頭：Do you have to wake up...?"
              },
              {
                "id": "u3_haveto_3",
                "prompt": "Susanna: Yes, I do. I (3) ................ (get up) at 6.30 a.m. because the school bus leaves at seven o'clock.",
                "answer": "have to get up",
                "explanation": "校車七點開，所以六點半「必須起床」：I have to get up。"
              },
              {
                "id": "u3_haveto_4",
                "prompt": "Josh: (4) ................ (you / tidy) your room before school?",
                "answer": "Do you have to tidy",
                "explanation": "疑問句：Do you have to tidy your room...?"
              },
              {
                "id": "u3_haveto_5",
                "prompt": "Susanna: No, I (5) ................ (tidy) my room...",
                "answer": "don't have to tidy",
                "explanation": "依據答句 No，表示「不需要整理」：don't have to tidy。"
              },
              {
                "id": "u3_haveto_6",
                "prompt": "Susanna: ...but I (6) ................ (make) my bed.",
                "answer": "have to make",
                "explanation": "轉折詞 but 表示整理床鋪是必須的：have to make my bed。"
              },
              {
                "id": "u3_haveto_7",
                "prompt": "Susanna: My brother (7) ................ (make) the breakfast...",
                "answer": "has to make",
                "explanation": "第三人稱單數 My brother，必須用 has to make。"
              },
              {
                "id": "u3_haveto_8",
                "prompt": "Susanna: ...but I often don't have time to eat it at home so I (8) ................ (eat) it on the bus.",
                "answer": "have to eat",
                "explanation": "在家沒時間吃，所以只好「必須」在公車上吃：have to eat。"
              }
            ]
          }
        ],
        "readingPart4": {
          "id": "u3_reading_part4",
          "title": "Reading Part 4: Where I live (Moussa from Mali)",
          "sourcePage": "assets/pages/u3_p18_p19.jpg",
          "vocabularyPreparation": {
            "title": "Exercise 4: Word Choice in Food & Daily Life",
            "instruction": "Choose the correct option, A, B or C to complete these sentences.",
            "items": [
              {
                "id": "u3_r4_prep_1",
                "sentence": "That restaurant doesn't ................ main courses, but you can get a snack and a drink there.",
                "options": [
                  "serve",
                  "eat",
                  "bring"
                ],
                "answer": "A",
                "explanation": "serve main courses 指餐廳「供應主餐」。餐廳本身不能 eat，而 bring 需要指明帶來的方向受詞。"
              },
              {
                "id": "u3_r4_prep_2",
                "sentence": "When I look ................ my little cousin, we often make cakes together.",
                "options": [
                  "for",
                  "after",
                  "at"
                ],
                "answer": "B",
                "explanation": "look after 是片語動詞「照顧/照料表妹」。look for 為尋找，look at 為看著。"
              },
              {
                "id": "u3_r4_prep_3",
                "sentence": "Shall we ask the ................ to bring us the menu?",
                "options": [
                  "chef",
                  "waiter",
                  "customer"
                ],
                "answer": "B",
                "explanation": "waiter (男服務生) 負責外場接待與遞送菜單。chef 是內場廚師，customer 是用餐客人。"
              },
              {
                "id": "u3_r4_prep_4",
                "sentence": "When you ................ food, you cook it in water.",
                "options": [
                  "bake",
                  "roast",
                  "boil"
                ],
                "answer": "C",
                "explanation": "boil 指在水中水煮/沸煮。bake 是烤箱烘焙（麵包蛋糕），roast 是烘烤肉類。"
              }
            ]
          },
          "examTask": {
            "title": "Exam task: Where I live",
            "instruction": "For each question, choose the correct answer.",
            "article": "Moussa is 13 years old and he lives on a small (1) .............. in Mali, West Africa. There are only two rooms in his house; one for his parents and the other for Moussa and his little brother, Sekou.\nMoussa gets up early and looks (2) .............. Sekou while their mother makes breakfast. The family has breakfast together. They usually have bread with milk and (3) .............. a little sugar to it. Moussa walks to school with his friends. It (4) .............. them about ten minutes. When they get to school, they have to clean the classroom. At noon, Moussa goes home for lunch. For lunch the family often has vegetables which they have (5) .............. themselves. When lunch is finished, Moussa (6) .............. to school for afternoon lessons, and then goes home again for dinner in the evening.",
            "questions": [
              {
                "number": 1,
                "options": {
                  "A": "forest",
                  "B": "farm",
                  "C": "village"
                },
                "answer": "B",
                "collocation": "live on a farm",
                "explanation": "關鍵在於前方的介系詞 'on'！英文習慣說 'on a farm'（在農場上）；若要選 village 或 forest，介系詞必須是 'in'（in a village / in a forest）。因此只有 farm 正確。"
              },
              {
                "number": 2,
                "options": {
                  "A": "after",
                  "B": "up",
                  "C": "around"
                },
                "answer": "A",
                "collocation": "look after someone",
                "explanation": "look after 為高頻片語動詞，意為「照顧、照看」年幼的弟弟 Sekou。look up 是查閱字典，look around 是環顧四周。"
              },
              {
                "number": 3,
                "options": {
                  "A": "include",
                  "B": "join",
                  "C": "add"
                },
                "answer": "C",
                "collocation": "add something to something",
                "explanation": "搭配詞固定句型為 'add ... to ...'（把少許糖加進牛奶麵包裡）。include 與 join 後面不接介系詞 to。"
              },
              {
                "number": 4,
                "options": {
                  "A": "takes",
                  "B": "needs",
                  "C": "keeps"
                },
                "answer": "A",
                "collocation": "It takes sb. some time",
                "explanation": "花費時間的固定句型為 'It takes + 人 + 時間'（花了他們大約十分鐘）。need 主詞一般為人，keep 意思是保持。"
              },
              {
                "number": 5,
                "options": {
                  "A": "brought",
                  "B": "grown",
                  "C": "left"
                },
                "answer": "B",
                "collocation": "grow vegetables",
                "explanation": "蔬菜是用「種植」出來的，動詞用 grow，完成式為 have grown themselves。brought 是帶來，left 是留下。"
              },
              {
                "number": 6,
                "options": {
                  "A": "enters",
                  "B": "arrives",
                  "C": "returns"
                },
                "answer": "C",
                "collocation": "return to school",
                "explanation": "Moussa 中午回家吃午餐，結束後「返回」學校上下午的課，且搭配介系詞 'to'，故選 returns。enter 是及物動詞直接加受詞（enter the room，不加 to）；arrive 後面接 at 或 in（arrive at school，不加 to）。"
              }
            ]
          }
        },
        "listeningPart2": {
          "part": 2,
          "title": "Track 10 Exam Task: School Trip to School of Cooking",
          "audioTrack": "Track 10",
          "questions": [
            {
              "id": "u3_l2_q1",
              "label": "Name of school of cooking:",
              "key": "Castle",
              "acceptedAnswers": [
                "Castle",
                "castle"
              ],
              "distractorXray": {
                "isKey": true,
                "explanation": "老師在逐字稿中清晰拼讀 'C-A-S-T-L-E, Castle'，正解為 Castle。"
              }
            },
            {
              "id": "u3_l2_q2",
              "label": "How we'll get there: by",
              "key": "bus",
              "acceptedAnswers": [
                "bus",
                "coach"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "train",
                "explanation": "【干擾項陷阱】：老師提到平時校外教學常搭火車 (train)，但火車站正在維修，所以這次改搭公車 (travel by bus)。因此 train 是干擾項，bus 才是本次正確交通方式！"
              }
            },
            {
              "id": "u3_l2_q3",
              "label": "Time to meet:",
              "unit": "a.m.",
              "key": "8.30",
              "acceptedAnswers": [
                "8.30",
                "8:30",
                "eight thirty",
                "8.30 a.m.",
                "8:30 a.m."
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "9.15, 8.45",
                "explanation": "【干擾項陷阱】：老師提到廚藝課 9.15 開始、公車 8.45 開車，但學生必須集合的時間 (time to meet) 是 8.30！9.15 與 8.45 均為時間干擾項。"
              }
            },
            {
              "id": "u3_l2_q4",
              "label": "What we'll make:",
              "key": "pizza",
              "acceptedAnswers": [
                "pizza",
                "pizzas"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "biscuits",
                "explanation": "【干擾項陷阱】：老師提到去年學生烤的是餅乾 (biscuits - past event)，但今年要製作的是義大利披薩 (pizza - this year's plan)！biscuits 為過去干擾項。"
              }
            },
            {
              "id": "u3_l2_q5",
              "label": "Total price: £",
              "key": "18",
              "acceptedAnswers": [
                "18",
                "18.00",
                "eighteen"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "12, 6",
                "explanation": "【干擾項陷阱】：課程費用為 £12，交通費用為 £6，題目要求填寫「總費用 (Total price)」，即 12 + 6 = 18 英鎊。12 與 6 為細項干擾數字。"
              }
            }
          ],
          "tapescript": [
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Good morning, class! Please listen carefully. I want to give you all the details about our upcoming school trip next month. As you know, the date of the trip is Friday the sixteenth of February."
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "We are going to visit a very famous cooking academy. The name of the school of cooking is the Castle School. That's spelled C-A-S-T-L-E, Castle. It is located just outside the town centre.",
              "isKey": true,
              "keyFor": "Name of school: Castle"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Now, about how we'll get there. We usually take the train for our excursions, but the railway station is closed for repairs that week. Therefore, we are going to travel by bus. A private coach will take us directly there.",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Transport: bus",
              "distractor": "train (closed for repairs)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "The cooking lesson begins at nine fifteen, but we need time to register and board. So, the time to meet is eight thirty (8.30) a.m. in the main school playground. Please do not be late, because the bus leaves promptly at eight forty-five!",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Meeting time: 8.30",
              "distractor": "9.15 (lesson start), 8.45 (bus departure)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "What will we do there? Last year students baked sweet biscuits, but this year the head chef will teach everyone how to prepare an authentic Italian pizza! You will make your own dough and choose your favourite toppings to bake.",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "What we'll make: pizza",
              "distractor": "biscuits (last year's dish)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Finally, the total price for the trip. The cooking lesson costs twelve pounds, and the bus journey is six pounds. That means the total price each student must pay is eighteen pounds (£18). Please bring the money to the school office before next Friday. Thank you!",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Total price: £18",
              "distractor": "£12 (lesson), £6 (bus)"
            }
          ],
          "distractorXray": true,
          "cafeMenuTrack09": {
            "title": "Track 09: Fast Food Café Menu Prices",
            "instruction": "Listen to a conversation in a fast food café and complete the menu with the prices.",
            "image": "assets/images/u3/u3_cafe_menu.jpg",
            "tapescript": [
              {
                "speaker": "Server",
                "role": "female",
                "text": "Good morning! Welcome to Sunny Café. What can I get for you today?"
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Hi! Can I look at the breakfast menu, please? How much is a fried egg?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "A fried egg is one pound seventy-five."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "That's good. And what about a cheese omelette?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "A cheese omelette is three pounds fifty (£3.50). It comes with fresh salad."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Great! Are drinks expensive? How much are hot drinks like tea and coffee?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Well, our special iced tea is two pounds, but all standard hot drinks are ninety-five pence (95p)."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "OK. Could I also have some bread and butter with my egg?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Certainly. Bread and butter is one pound twenty (£1.20) for two slices."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Perfect. And for dessert, my friend wants some cake. How much is a piece of cake?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Our whole fruit pie is four pounds, but a piece of chocolate cake is two pounds forty (£2.40)."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Excellent. I'll have the fried egg, bread and butter, and a hot chocolate, please!"
              }
            ],
            "menuItems": [
              {
                "id": "u3_menu_1",
                "item": "A fried egg",
                "unit": "£",
                "price": "1.75",
                "isExample": true
              },
              {
                "id": "u3_menu_2",
                "item": "A cheese omelette",
                "unit": "£",
                "price": "3.50",
                "isExample": false,
                "explanation": "店員清楚回答 'A cheese omelette is three pounds fifty.'，填寫 3.50。"
              },
              {
                "id": "u3_menu_3",
                "item": "Hot drinks",
                "unit": "p",
                "price": "95",
                "isExample": false,
                "explanation": "店員先提到 iced tea 是 £2 (干擾項)，接著指出 'all standard hot drinks are ninety-five pence'，表格單位為 p，填寫 95。"
              },
              {
                "id": "u3_menu_4",
                "item": "Bread and butter",
                "unit": "£",
                "price": "1.20",
                "isExample": false,
                "explanation": "店員說明 'Bread and butter is one pound twenty'，填寫 1.20。"
              },
              {
                "id": "u3_menu_5",
                "item": "A piece of cake",
                "unit": "£",
                "price": "2.40",
                "isExample": false,
                "explanation": "店員提到整份派是 £4 (干擾項)，但一塊蛋糕是 'two pounds forty'，填寫 2.40。"
              }
            ]
          }
        },
        "speakingPart2": {
          "part": 2,
          "title": "Speaking Part 2: Food Preferences & 5 Meal Situations",
          "questions": [
            "Do you like eating out at restaurants with your friends? Why or why not?",
            "Do you like having dinner together with your family around the table? Why or why not?",
            "Do you like having a barbecue outside in the garden or park? Why or why not?",
            "Do you like eating snacks or dinner on the sofa watching TV? Why or why not?",
            "Do you like having a buffet or formal dinner in a hotel restaurant? Why or why not?"
          ],
          "dialogue": [],
          "reasonMatching": {
            "title": "Exercise 1 & 2 (Track 11): Matching Likes/Dislikes with Reasons",
            "instruction": "Match each reason (a-f) with what people like or don't like (1-6). Then listen to six short conversations to check.",
            "image": "assets/images/u3/u3_speaking_food_3pics.jpg",
            "items": [
              {
                "id": "u3_sp_m1",
                "preference": "1 I like strawberries because",
                "matchedCode": "f",
                "reason": "they're fresh and sweet.",
                "audioDialogue": {
                  "speakerA": "Do you like fruit, especially strawberries?",
                  "speakerB": "Oh yes, I love strawberries because they're fresh and sweet in summer!"
                }
              },
              {
                "id": "u3_sp_m2",
                "preference": "2 I don't like fast food because",
                "matchedCode": "e",
                "reason": "it's not good for your health.",
                "audioDialogue": {
                  "speakerA": "Do you eat a lot of burgers and chips?",
                  "speakerB": "No, I don't like fast food because it's really not good for your health."
                }
              },
              {
                "id": "u3_sp_m3",
                "preference": "3 I never eat in my school canteen because",
                "matchedCode": "a",
                "reason": "the food there isn't very good.",
                "audioDialogue": {
                  "speakerA": "Why do you bring sandwiches from home?",
                  "speakerB": "I never eat in my school canteen because the food there isn't very good."
                }
              },
              {
                "id": "u3_sp_m4",
                "preference": "4 I love breakfast because",
                "matchedCode": "b",
                "reason": "I'm always hungry when I wake up!",
                "audioDialogue": {
                  "speakerA": "What is your favourite meal of the day?",
                  "speakerB": "Definitely breakfast. I love breakfast because I'm always hungry when I wake up!"
                }
              },
              {
                "id": "u3_sp_m5",
                "preference": "5 I like going to restaurants because",
                "matchedCode": "d",
                "reason": "I can try new kinds of food.",
                "audioDialogue": {
                  "speakerA": "Do you enjoy eating out at weekends?",
                  "speakerB": "Yes, I like going to restaurants because I can try new kinds of food from different countries."
                }
              },
              {
                "id": "u3_sp_m6",
                "preference": "6 I enjoy cooking because",
                "matchedCode": "c",
                "reason": "it's fun to learn new things.",
                "audioDialogue": {
                  "speakerA": "Do you help your parents in the kitchen?",
                  "speakerB": "Yes, I really enjoy cooking because it's fun to learn new things and bake cakes."
                }
              }
            ]
          },
          "candidateComparison": {
            "title": "Exercise 3 (Track 12): Candidate Response Comparison",
            "instruction": "Look at the three pictures (cooking at home, buying fast food, eating on a park bench). Listen to two exam candidates talking about them. Which candidate gives the best answer? Why?",
            "candidateA": {
              "name": "Candidate A",
              "script": "Examiner: Do you like cooking at home?\nCandidate A: Yes, I do.\nExaminer: Why?\nCandidate A: It is good. I like cakes.\nExaminer: Do you like fast food?\nCandidate A: Yes, burgers are nice.",
              "critique": "Candidate A 回答過於簡短，僅使用單詞與極短句子，沒有主動使用 because 展開說明理由，口語流暢度與語法豐富度不足（僅得 10-11 盾）。"
            },
            "candidateB": {
              "name": "Candidate B",
              "script": "Examiner: Do you like cooking at home?\nCandidate B: Yes, I love cooking at home with my grandmother because it's really fun to learn new recipes, and homemade food is much healthier than fast food.\nExaminer: What about buying snacks in the park?\nCandidate B: I enjoy having an apple or a sandwich on a park bench when the weather is sunny, because it's very relaxing to sit outside with friends.",
              "critique": "Candidate B 給出最佳表現（滿分 15 盾標準）！使用完整句型，主動運用 because, and, when 延伸理由，展現豐富詞彙（homemade, healthier, relaxing, sunny weather）。"
            },
            "bestCandidate": "Candidate B",
            "why": "Candidate B speaks in full sentences, gives clear and detailed reasons using 'because', compares choices, and shows better vocabulary."
          },
          "examTask": {
            "title": "Speaking Part 2 Exam Task: 5 Types of Meals Discussion",
            "instruction": "Now, in this part of the test you are going to talk together. Here are some pictures that show different types of meals. Do you like these different types of meals? Say why or why not.",
            "image": "assets/images/u3/u3_speaking_exam_5meals.jpg",
            "mealTypes": [
              {
                "id": "u3_meal_1",
                "title": "Eating at a café / restaurant with friends",
                "questions": [
                  "Do you like eating out at restaurants with your friends?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "It is exciting to try international dishes like Italian pasta or tacos.",
                  "It's a great way to celebrate birthdays and chat happily with friends."
                ],
                "reasonsAgainst": [
                  "Eating out in restaurants can be quite expensive.",
                  "Sometimes the service is slow and you have to wait a long time."
                ]
              },
              {
                "id": "u3_meal_2",
                "title": "Eating dinner at home with family",
                "questions": [
                  "Do you like having dinner together with your family around the table?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "My parents cook fresh, healthy and delicious food every day.",
                  "It's important to talk about our school day together as a family."
                ],
                "reasonsAgainst": [
                  "Sometimes we have to eat vegetables like broccoli that I don't really like.",
                  "You have to help wash up all the plates and tidy the table afterwards."
                ]
              },
              {
                "id": "u3_meal_3",
                "title": "Having a barbecue (BBQ) outdoors in the garden",
                "questions": [
                  "Do you like having a barbecue outside in the garden or park?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "Barbecue sausages and grilled burgers taste amazing with smoky flavour.",
                  "It's fun to play outdoor games with cousins while food is cooking on the grill."
                ],
                "reasonsAgainst": [
                  "If it suddenly rains, everyone has to run inside.",
                  "The smoke from the fire can get in your eyes and make clothes smell."
                ]
              },
              {
                "id": "u3_meal_4",
                "title": "Eating snacks / fast food on the sofa in front of the TV",
                "questions": [
                  "Do you like eating snacks or dinner on the sofa watching TV?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "It is very relaxing to watch your favourite film or football match while having pizza.",
                  "You feel comfortable on the soft sofa after a tiring day."
                ],
                "reasonsAgainst": [
                  "It's easy to spill food or drinks and make the sofa dirty.",
                  "Watching TV while eating means you don't talk to your family."
                ]
              },
              {
                "id": "u3_meal_5",
                "title": "Having a meal at an upscale restaurant / buffet",
                "questions": [
                  "Do you like having a buffet or formal dinner in a hotel restaurant?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "At a buffet, you can choose whatever food you want and take as many desserts as you like.",
                  "The dining room is beautiful and comfortable with great music."
                ],
                "reasonsAgainst": [
                  "You have to dress up smartly and follow strict table manners.",
                  "It is often too noisy when there are a lot of customers."
                ]
              }
            ],
            "keyPhrases": [
              "Do you like ...? / What do you think about ...?",
              "I really like ... because ...",
              "I prefer ... to ... because ...",
              "I don't really enjoy ... because it's too ...",
              "In my opinion, having meals with family is better than eating alone in front of TV."
            ]
          }
        },
        "writingPart7": {
          "part": 7,
          "title": "Writing Part 7: 3-Picture Story (Barbecue in the Rain)",
          "picturePrompt": "assets/images/u3/u3_writing_part7_picnic_rain.jpg",
          "blocks": [
            {
              "step": 1,
              "scene": "Picture 1: Starting the barbecue",
              "promptZh": "步驟一：設定時間、人物與花園烤肉場景",
              "scaffoldOptions": [
                "On a sunny Sunday afternoon, Tom and his family decided to have a barbecue in the garden.",
                "His father was happily cooking sausages and burgers on the barbecue grill.",
                "Everyone was sitting together, drinking lemonade and waiting for the delicious food."
              ]
            },
            {
              "step": 2,
              "scene": "Picture 2: Sudden rainstorm and running inside",
              "promptZh": "步驟二：天氣突變下起大雨，眾人奔跑避雨",
              "scaffoldOptions": [
                "Suddenly, the sky turned dark and it started raining heavily.",
                "Everyone shouted and quickly picked up their plates and cups.",
                "They ran as fast as they could into the house to escape the rain."
              ]
            },
            {
              "step": 3,
              "scene": "Picture 3: Kitchen cooking in the oven and happy meal",
              "promptZh": "步驟三：進廚房改用烤箱完成烹飪，溫馨享用",
              "scaffoldOptions": [
                "Inside the warm kitchen, his father put the meat into the oven to finish cooking.",
                "Soon, the food smelled wonderful and they sat at the dining table.",
                "In the end, the family enjoyed their lunch together happily."
              ]
            }
          ],
          "rubricChecklist": {
            "content": {
              "maxMarks": 5,
              "criteria": "完整涵蓋三張圖片所有關鍵情節：1. 花園烤肉 ➔ 2. 突降大雨奔回屋內 ➔ 3. 廚房烤箱完成料理並用餐。無遺漏任何一張圖。"
            },
            "organisation": {
              "maxMarks": 5,
              "criteria": "使用清晰的時間與邏輯連接詞（One day, Suddenly, so, then, inside the kitchen, in the end），故事連貫流暢。"
            },
            "language": {
              "maxMarks": 5,
              "criteria": "時態全程一致（全文使用過去式：had, was cooking, started, ran, went, baked, ate），動詞規則與不規則變化拼字完全正確（stopped, rained, sausages），字數超過 35 字。"
            }
          },
          "sampleAnswer": {
            "pass13": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
            "merit13": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
            "distinction15": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
            "shield13_pass": {
              "title": "13 盾保底穩過範文 (Grade B Merit, 46 words)",
              "text": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
              "analysis": "46 字，完整交待三張圖核心情節。時態全部使用過去簡單式 (had, cooked, started, ran, cooked, ate)，拼字完全正確，邏輯連接詞清晰，能穩穩拿到 13 盾。"
            },
            "shield15_distinction": {
              "title": "15 盾滿分卓越範文 (Grade A Distinction, 64 words)",
              "text": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
              "analysis": "64 字，具備生動修飾語 (warm Sunday afternoon, wonderful barbecue, delicious sausages, dark clouds, began to rain heavily, grabbed, fortunately, enjoyed the meal together)。過去進行式與過去簡單式交互運用，展現劍橋 A2 最高層次語言能力！"
            }
          },
          "examTask": {
            "title": "Writing Part 7 Exam Task: Barbecue in the Rain",
            "instruction": "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            "picturePrompt": "assets/images/u3/u3_writing_part7_picnic_rain.jpg",
            "wordCountTarget": "35+ words (recommended 45-65 words)",
            "threeStepStory": {
              "picture1": "A father and children having an outdoor barbecue in the garden on a sunny afternoon.",
              "picture2": "Dark clouds appear and heavy rain suddenly pours down, forcing everyone to grab food and run inside.",
              "picture3": "They move into the kitchen; dad finishes cooking the meat in the oven, and the family enjoys eating together indoors."
            },
            "blocks": [
              {
                "step": 1,
                "scene": "Picture 1: Starting the barbecue",
                "promptZh": "步驟一：設定時間、人物與花園烤肉場景",
                "scaffoldOptions": [
                  "On a sunny Sunday afternoon, Tom and his family decided to have a barbecue in the garden.",
                  "His father was happily cooking sausages and burgers on the barbecue grill.",
                  "Everyone was sitting together, drinking lemonade and waiting for the delicious food."
                ]
              },
              {
                "step": 2,
                "scene": "Picture 2: Sudden rainstorm and running inside",
                "promptZh": "步驟二：天氣突變下起大雨，眾人奔跑避雨",
                "scaffoldOptions": [
                  "Suddenly, the sky turned dark and it started raining heavily.",
                  "Everyone shouted and quickly picked up their plates and cups.",
                  "They ran as fast as they could into the house to escape the rain."
                ]
              },
              {
                "step": 3,
                "scene": "Picture 3: Kitchen cooking in the oven and happy meal",
                "promptZh": "步驟三：進廚房改用烤箱完成烹飪，溫馨享用",
                "scaffoldOptions": [
                  "Inside the warm kitchen, his father put the meat into the oven to finish cooking.",
                  "Soon, the food smelled wonderful and they sat at the dining table.",
                  "In the end, the family enjoyed their lunch together happily."
                ]
              }
            ],
            "rubricChecklist": {
              "content": {
                "maxMarks": 5,
                "criteria": "完整涵蓋三張圖片所有關鍵情節：1. 花園烤肉 ➔ 2. 突降大雨奔回屋內 ➔ 3. 廚房烤箱完成料理並用餐。無遺漏任何一張圖。"
              },
              "organisation": {
                "maxMarks": 5,
                "criteria": "使用清晰的時間與邏輯連接詞（One day, Suddenly, so, then, inside the kitchen, in the end），故事連貫流暢。"
              },
              "language": {
                "maxMarks": 5,
                "criteria": "時態全程一致（全文使用過去式：had, was cooking, started, ran, went, baked, ate），動詞規則與不規則變化拼字完全正確（stopped, rained, sausages），字數超過 35 字。"
              }
            },
            "sampleAnswers": {
              "shield13_pass": {
                "title": "13 盾保底穩過範文 (Grade B Merit, 46 words)",
                "text": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
                "analysis": "46 字，完整交待三張圖核心情節。時態全部使用過去簡單式 (had, cooked, started, ran, cooked, ate)，拼字完全正確，邏輯連接詞清晰，能穩穩拿到 13 盾。"
              },
              "shield15_distinction": {
                "title": "15 盾滿分卓越範文 (Grade A Distinction, 64 words)",
                "text": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
                "analysis": "64 字，具備生動修飾語 (warm Sunday afternoon, wonderful barbecue, delicious sausages, dark clouds, began to rain heavily, grabbed, fortunately, enjoyed the meal together)。過去進行式與過去簡單式交互運用，展現劍橋 A2 最高層次語言能力！"
              }
            }
          }
        },
        "revisionUnit3": {
          "unitId": "u3",
          "totalPoints": 24,
          "totalMarks": 24,
          "exercises": [
            null,
            null,
            null
          ]
        },
        "reading": {
          "id": "u3_reading_part4",
          "title": "Reading Part 4: Where I live (Moussa from Mali)",
          "sourcePage": "assets/pages/u3_p18_p19.jpg",
          "vocabularyPreparation": {
            "title": "Exercise 4: Word Choice in Food & Daily Life",
            "instruction": "Choose the correct option, A, B or C to complete these sentences.",
            "items": [
              {
                "id": "u3_r4_prep_1",
                "sentence": "That restaurant doesn't ................ main courses, but you can get a snack and a drink there.",
                "options": [
                  "serve",
                  "eat",
                  "bring"
                ],
                "answer": "A",
                "explanation": "serve main courses 指餐廳「供應主餐」。餐廳本身不能 eat，而 bring 需要指明帶來的方向受詞。"
              },
              {
                "id": "u3_r4_prep_2",
                "sentence": "When I look ................ my little cousin, we often make cakes together.",
                "options": [
                  "for",
                  "after",
                  "at"
                ],
                "answer": "B",
                "explanation": "look after 是片語動詞「照顧/照料表妹」。look for 為尋找，look at 為看著。"
              },
              {
                "id": "u3_r4_prep_3",
                "sentence": "Shall we ask the ................ to bring us the menu?",
                "options": [
                  "chef",
                  "waiter",
                  "customer"
                ],
                "answer": "B",
                "explanation": "waiter (男服務生) 負責外場接待與遞送菜單。chef 是內場廚師，customer 是用餐客人。"
              },
              {
                "id": "u3_r4_prep_4",
                "sentence": "When you ................ food, you cook it in water.",
                "options": [
                  "bake",
                  "roast",
                  "boil"
                ],
                "answer": "C",
                "explanation": "boil 指在水中水煮/沸煮。bake 是烤箱烘焙（麵包蛋糕），roast 是烘烤肉類。"
              }
            ]
          },
          "examTask": {
            "title": "Exam task: Where I live",
            "instruction": "For each question, choose the correct answer.",
            "article": "Moussa is 13 years old and he lives on a small (1) .............. in Mali, West Africa. There are only two rooms in his house; one for his parents and the other for Moussa and his little brother, Sekou.\nMoussa gets up early and looks (2) .............. Sekou while their mother makes breakfast. The family has breakfast together. They usually have bread with milk and (3) .............. a little sugar to it. Moussa walks to school with his friends. It (4) .............. them about ten minutes. When they get to school, they have to clean the classroom. At noon, Moussa goes home for lunch. For lunch the family often has vegetables which they have (5) .............. themselves. When lunch is finished, Moussa (6) .............. to school for afternoon lessons, and then goes home again for dinner in the evening.",
            "questions": [
              {
                "number": 1,
                "options": {
                  "A": "forest",
                  "B": "farm",
                  "C": "village"
                },
                "answer": "B",
                "collocation": "live on a farm",
                "explanation": "關鍵在於前方的介系詞 'on'！英文習慣說 'on a farm'（在農場上）；若要選 village 或 forest，介系詞必須是 'in'（in a village / in a forest）。因此只有 farm 正確。"
              },
              {
                "number": 2,
                "options": {
                  "A": "after",
                  "B": "up",
                  "C": "around"
                },
                "answer": "A",
                "collocation": "look after someone",
                "explanation": "look after 為高頻片語動詞，意為「照顧、照看」年幼的弟弟 Sekou。look up 是查閱字典，look around 是環顧四周。"
              },
              {
                "number": 3,
                "options": {
                  "A": "include",
                  "B": "join",
                  "C": "add"
                },
                "answer": "C",
                "collocation": "add something to something",
                "explanation": "搭配詞固定句型為 'add ... to ...'（把少許糖加進牛奶麵包裡）。include 與 join 後面不接介系詞 to。"
              },
              {
                "number": 4,
                "options": {
                  "A": "takes",
                  "B": "needs",
                  "C": "keeps"
                },
                "answer": "A",
                "collocation": "It takes sb. some time",
                "explanation": "花費時間的固定句型為 'It takes + 人 + 時間'（花了他們大約十分鐘）。need 主詞一般為人，keep 意思是保持。"
              },
              {
                "number": 5,
                "options": {
                  "A": "brought",
                  "B": "grown",
                  "C": "left"
                },
                "answer": "B",
                "collocation": "grow vegetables",
                "explanation": "蔬菜是用「種植」出來的，動詞用 grow，完成式為 have grown themselves。brought 是帶來，left 是留下。"
              },
              {
                "number": 6,
                "options": {
                  "A": "enters",
                  "B": "arrives",
                  "C": "returns"
                },
                "answer": "C",
                "collocation": "return to school",
                "explanation": "Moussa 中午回家吃午餐，結束後「返回」學校上下午的課，且搭配介系詞 'to'，故選 returns。enter 是及物動詞直接加受詞（enter the room，不加 to）；arrive 後面接 at 或 in（arrive at school，不加 to）。"
              }
            ]
          }
        },
        "listening": {
          "part": 2,
          "title": "Track 10 Exam Task: School Trip to School of Cooking",
          "audioTrack": "Track 10",
          "questions": [
            {
              "id": "u3_l2_q1",
              "label": "Name of school of cooking:",
              "key": "Castle",
              "acceptedAnswers": [
                "Castle",
                "castle"
              ],
              "distractorXray": {
                "isKey": true,
                "explanation": "老師在逐字稿中清晰拼讀 'C-A-S-T-L-E, Castle'，正解為 Castle。"
              }
            },
            {
              "id": "u3_l2_q2",
              "label": "How we'll get there: by",
              "key": "bus",
              "acceptedAnswers": [
                "bus",
                "coach"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "train",
                "explanation": "【干擾項陷阱】：老師提到平時校外教學常搭火車 (train)，但火車站正在維修，所以這次改搭公車 (travel by bus)。因此 train 是干擾項，bus 才是本次正確交通方式！"
              }
            },
            {
              "id": "u3_l2_q3",
              "label": "Time to meet:",
              "unit": "a.m.",
              "key": "8.30",
              "acceptedAnswers": [
                "8.30",
                "8:30",
                "eight thirty",
                "8.30 a.m.",
                "8:30 a.m."
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "9.15, 8.45",
                "explanation": "【干擾項陷阱】：老師提到廚藝課 9.15 開始、公車 8.45 開車，但學生必須集合的時間 (time to meet) 是 8.30！9.15 與 8.45 均為時間干擾項。"
              }
            },
            {
              "id": "u3_l2_q4",
              "label": "What we'll make:",
              "key": "pizza",
              "acceptedAnswers": [
                "pizza",
                "pizzas"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "biscuits",
                "explanation": "【干擾項陷阱】：老師提到去年學生烤的是餅乾 (biscuits - past event)，但今年要製作的是義大利披薩 (pizza - this year's plan)！biscuits 為過去干擾項。"
              }
            },
            {
              "id": "u3_l2_q5",
              "label": "Total price: £",
              "key": "18",
              "acceptedAnswers": [
                "18",
                "18.00",
                "eighteen"
              ],
              "distractorXray": {
                "isKey": true,
                "distractor": "12, 6",
                "explanation": "【干擾項陷阱】：課程費用為 £12，交通費用為 £6，題目要求填寫「總費用 (Total price)」，即 12 + 6 = 18 英鎊。12 與 6 為細項干擾數字。"
              }
            }
          ],
          "tapescript": [
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Good morning, class! Please listen carefully. I want to give you all the details about our upcoming school trip next month. As you know, the date of the trip is Friday the sixteenth of February."
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "We are going to visit a very famous cooking academy. The name of the school of cooking is the Castle School. That's spelled C-A-S-T-L-E, Castle. It is located just outside the town centre.",
              "isKey": true,
              "keyFor": "Name of school: Castle"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Now, about how we'll get there. We usually take the train for our excursions, but the railway station is closed for repairs that week. Therefore, we are going to travel by bus. A private coach will take us directly there.",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Transport: bus",
              "distractor": "train (closed for repairs)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "The cooking lesson begins at nine fifteen, but we need time to register and board. So, the time to meet is eight thirty (8.30) a.m. in the main school playground. Please do not be late, because the bus leaves promptly at eight forty-five!",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Meeting time: 8.30",
              "distractor": "9.15 (lesson start), 8.45 (bus departure)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "What will we do there? Last year students baked sweet biscuits, but this year the head chef will teach everyone how to prepare an authentic Italian pizza! You will make your own dough and choose your favourite toppings to bake.",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "What we'll make: pizza",
              "distractor": "biscuits (last year's dish)"
            },
            {
              "speaker": "Teacher",
              "role": "female",
              "text": "Finally, the total price for the trip. The cooking lesson costs twelve pounds, and the bus journey is six pounds. That means the total price each student must pay is eighteen pounds (£18). Please bring the money to the school office before next Friday. Thank you!",
              "isKey": true,
              "isDistractor": true,
              "keyFor": "Total price: £18",
              "distractor": "£12 (lesson), £6 (bus)"
            }
          ],
          "distractorXray": true,
          "cafeMenuTrack09": {
            "title": "Track 09: Fast Food Café Menu Prices",
            "instruction": "Listen to a conversation in a fast food café and complete the menu with the prices.",
            "image": "assets/images/u3/u3_cafe_menu.jpg",
            "tapescript": [
              {
                "speaker": "Server",
                "role": "female",
                "text": "Good morning! Welcome to Sunny Café. What can I get for you today?"
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Hi! Can I look at the breakfast menu, please? How much is a fried egg?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "A fried egg is one pound seventy-five."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "That's good. And what about a cheese omelette?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "A cheese omelette is three pounds fifty (£3.50). It comes with fresh salad."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Great! Are drinks expensive? How much are hot drinks like tea and coffee?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Well, our special iced tea is two pounds, but all standard hot drinks are ninety-five pence (95p)."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "OK. Could I also have some bread and butter with my egg?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Certainly. Bread and butter is one pound twenty (£1.20) for two slices."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Perfect. And for dessert, my friend wants some cake. How much is a piece of cake?"
              },
              {
                "speaker": "Server",
                "role": "female",
                "text": "Our whole fruit pie is four pounds, but a piece of chocolate cake is two pounds forty (£2.40)."
              },
              {
                "speaker": "Boy",
                "role": "male",
                "text": "Excellent. I'll have the fried egg, bread and butter, and a hot chocolate, please!"
              }
            ],
            "menuItems": [
              {
                "id": "u3_menu_1",
                "item": "A fried egg",
                "unit": "£",
                "price": "1.75",
                "isExample": true
              },
              {
                "id": "u3_menu_2",
                "item": "A cheese omelette",
                "unit": "£",
                "price": "3.50",
                "isExample": false,
                "explanation": "店員清楚回答 'A cheese omelette is three pounds fifty.'，填寫 3.50。"
              },
              {
                "id": "u3_menu_3",
                "item": "Hot drinks",
                "unit": "p",
                "price": "95",
                "isExample": false,
                "explanation": "店員先提到 iced tea 是 £2 (干擾項)，接著指出 'all standard hot drinks are ninety-five pence'，表格單位為 p，填寫 95。"
              },
              {
                "id": "u3_menu_4",
                "item": "Bread and butter",
                "unit": "£",
                "price": "1.20",
                "isExample": false,
                "explanation": "店員說明 'Bread and butter is one pound twenty'，填寫 1.20。"
              },
              {
                "id": "u3_menu_5",
                "item": "A piece of cake",
                "unit": "£",
                "price": "2.40",
                "isExample": false,
                "explanation": "店員提到整份派是 £4 (干擾項)，但一塊蛋糕是 'two pounds forty'，填寫 2.40。"
              }
            ]
          }
        },
        "listeningPart3": null,
        "listeningPart4": null,
        "writing": {
          "part": 7,
          "title": "Writing Part 7: 3-Picture Story (Barbecue in the Rain)",
          "picturePrompt": "assets/images/u3/u3_writing_part7_picnic_rain.jpg",
          "blocks": [
            {
              "step": 1,
              "scene": "Picture 1: Starting the barbecue",
              "promptZh": "步驟一：設定時間、人物與花園烤肉場景",
              "scaffoldOptions": [
                "On a sunny Sunday afternoon, Tom and his family decided to have a barbecue in the garden.",
                "His father was happily cooking sausages and burgers on the barbecue grill.",
                "Everyone was sitting together, drinking lemonade and waiting for the delicious food."
              ]
            },
            {
              "step": 2,
              "scene": "Picture 2: Sudden rainstorm and running inside",
              "promptZh": "步驟二：天氣突變下起大雨，眾人奔跑避雨",
              "scaffoldOptions": [
                "Suddenly, the sky turned dark and it started raining heavily.",
                "Everyone shouted and quickly picked up their plates and cups.",
                "They ran as fast as they could into the house to escape the rain."
              ]
            },
            {
              "step": 3,
              "scene": "Picture 3: Kitchen cooking in the oven and happy meal",
              "promptZh": "步驟三：進廚房改用烤箱完成烹飪，溫馨享用",
              "scaffoldOptions": [
                "Inside the warm kitchen, his father put the meat into the oven to finish cooking.",
                "Soon, the food smelled wonderful and they sat at the dining table.",
                "In the end, the family enjoyed their lunch together happily."
              ]
            }
          ],
          "rubricChecklist": {
            "content": {
              "maxMarks": 5,
              "criteria": "完整涵蓋三張圖片所有關鍵情節：1. 花園烤肉 ➔ 2. 突降大雨奔回屋內 ➔ 3. 廚房烤箱完成料理並用餐。無遺漏任何一張圖。"
            },
            "organisation": {
              "maxMarks": 5,
              "criteria": "使用清晰的時間與邏輯連接詞（One day, Suddenly, so, then, inside the kitchen, in the end），故事連貫流暢。"
            },
            "language": {
              "maxMarks": 5,
              "criteria": "時態全程一致（全文使用過去式：had, was cooking, started, ran, went, baked, ate），動詞規則與不規則變化拼字完全正確（stopped, rained, sausages），字數超過 35 字。"
            }
          },
          "sampleAnswer": {
            "pass13": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
            "merit13": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
            "distinction15": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
            "shield13_pass": {
              "title": "13 盾保底穩過範文 (Grade B Merit, 46 words)",
              "text": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
              "analysis": "46 字，完整交待三張圖核心情節。時態全部使用過去簡單式 (had, cooked, started, ran, cooked, ate)，拼字完全正確，邏輯連接詞清晰，能穩穩拿到 13 盾。"
            },
            "shield15_distinction": {
              "title": "15 盾滿分卓越範文 (Grade A Distinction, 64 words)",
              "text": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
              "analysis": "64 字，具備生動修飾語 (warm Sunday afternoon, wonderful barbecue, delicious sausages, dark clouds, began to rain heavily, grabbed, fortunately, enjoyed the meal together)。過去進行式與過去簡單式交互運用，展現劍橋 A2 最高層次語言能力！"
            }
          },
          "examTask": {
            "title": "Writing Part 7 Exam Task: Barbecue in the Rain",
            "instruction": "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
            "picturePrompt": "assets/images/u3/u3_writing_part7_picnic_rain.jpg",
            "wordCountTarget": "35+ words (recommended 45-65 words)",
            "threeStepStory": {
              "picture1": "A father and children having an outdoor barbecue in the garden on a sunny afternoon.",
              "picture2": "Dark clouds appear and heavy rain suddenly pours down, forcing everyone to grab food and run inside.",
              "picture3": "They move into the kitchen; dad finishes cooking the meat in the oven, and the family enjoys eating together indoors."
            },
            "blocks": [
              {
                "step": 1,
                "scene": "Picture 1: Starting the barbecue",
                "promptZh": "步驟一：設定時間、人物與花園烤肉場景",
                "scaffoldOptions": [
                  "On a sunny Sunday afternoon, Tom and his family decided to have a barbecue in the garden.",
                  "His father was happily cooking sausages and burgers on the barbecue grill.",
                  "Everyone was sitting together, drinking lemonade and waiting for the delicious food."
                ]
              },
              {
                "step": 2,
                "scene": "Picture 2: Sudden rainstorm and running inside",
                "promptZh": "步驟二：天氣突變下起大雨，眾人奔跑避雨",
                "scaffoldOptions": [
                  "Suddenly, the sky turned dark and it started raining heavily.",
                  "Everyone shouted and quickly picked up their plates and cups.",
                  "They ran as fast as they could into the house to escape the rain."
                ]
              },
              {
                "step": 3,
                "scene": "Picture 3: Kitchen cooking in the oven and happy meal",
                "promptZh": "步驟三：進廚房改用烤箱完成烹飪，溫馨享用",
                "scaffoldOptions": [
                  "Inside the warm kitchen, his father put the meat into the oven to finish cooking.",
                  "Soon, the food smelled wonderful and they sat at the dining table.",
                  "In the end, the family enjoyed their lunch together happily."
                ]
              }
            ],
            "rubricChecklist": {
              "content": {
                "maxMarks": 5,
                "criteria": "完整涵蓋三張圖片所有關鍵情節：1. 花園烤肉 ➔ 2. 突降大雨奔回屋內 ➔ 3. 廚房烤箱完成料理並用餐。無遺漏任何一張圖。"
              },
              "organisation": {
                "maxMarks": 5,
                "criteria": "使用清晰的時間與邏輯連接詞（One day, Suddenly, so, then, inside the kitchen, in the end），故事連貫流暢。"
              },
              "language": {
                "maxMarks": 5,
                "criteria": "時態全程一致（全文使用過去式：had, was cooking, started, ran, went, baked, ate），動詞規則與不規則變化拼字完全正確（stopped, rained, sausages），字數超過 35 字。"
              }
            },
            "sampleAnswers": {
              "shield13_pass": {
                "title": "13 盾保底穩過範文 (Grade B Merit, 46 words)",
                "text": "Last Saturday, Tom and his family had a barbecue in the garden. His father cooked meat on the grill. Suddenly, it started raining heavily, so they ran into the house. In the kitchen, his father cooked the food in the oven and they ate together happily.",
                "analysis": "46 字，完整交待三張圖核心情節。時態全部使用過去簡單式 (had, cooked, started, ran, cooked, ate)，拼字完全正確，邏輯連接詞清晰，能穩穩拿到 13 盾。"
              },
              "shield15_distinction": {
                "title": "15 盾滿分卓越範文 (Grade A Distinction, 64 words)",
                "text": "On a warm Sunday afternoon, Ben and his family were having a wonderful barbecue in the backyard. His father was grilling delicious sausages when suddenly dark clouds arrived and it began to rain heavily. They quickly grabbed their food and ran into the kitchen. Fortunately, his father finished baking the sausages in the oven, and everyone enjoyed the meal together.",
                "analysis": "64 字，具備生動修飾語 (warm Sunday afternoon, wonderful barbecue, delicious sausages, dark clouds, began to rain heavily, grabbed, fortunately, enjoyed the meal together)。過去進行式與過去簡單式交互運用，展現劍橋 A2 最高層次語言能力！"
              }
            }
          }
        },
        "speaking": {
          "part": 2,
          "title": "Speaking Part 2: Food Preferences & 5 Meal Situations",
          "questions": [
            "Do you like eating out at restaurants with your friends? Why or why not?",
            "Do you like having dinner together with your family around the table? Why or why not?",
            "Do you like having a barbecue outside in the garden or park? Why or why not?",
            "Do you like eating snacks or dinner on the sofa watching TV? Why or why not?",
            "Do you like having a buffet or formal dinner in a hotel restaurant? Why or why not?"
          ],
          "dialogue": [],
          "reasonMatching": {
            "title": "Exercise 1 & 2 (Track 11): Matching Likes/Dislikes with Reasons",
            "instruction": "Match each reason (a-f) with what people like or don't like (1-6). Then listen to six short conversations to check.",
            "image": "assets/images/u3/u3_speaking_food_3pics.jpg",
            "items": [
              {
                "id": "u3_sp_m1",
                "preference": "1 I like strawberries because",
                "matchedCode": "f",
                "reason": "they're fresh and sweet.",
                "audioDialogue": {
                  "speakerA": "Do you like fruit, especially strawberries?",
                  "speakerB": "Oh yes, I love strawberries because they're fresh and sweet in summer!"
                }
              },
              {
                "id": "u3_sp_m2",
                "preference": "2 I don't like fast food because",
                "matchedCode": "e",
                "reason": "it's not good for your health.",
                "audioDialogue": {
                  "speakerA": "Do you eat a lot of burgers and chips?",
                  "speakerB": "No, I don't like fast food because it's really not good for your health."
                }
              },
              {
                "id": "u3_sp_m3",
                "preference": "3 I never eat in my school canteen because",
                "matchedCode": "a",
                "reason": "the food there isn't very good.",
                "audioDialogue": {
                  "speakerA": "Why do you bring sandwiches from home?",
                  "speakerB": "I never eat in my school canteen because the food there isn't very good."
                }
              },
              {
                "id": "u3_sp_m4",
                "preference": "4 I love breakfast because",
                "matchedCode": "b",
                "reason": "I'm always hungry when I wake up!",
                "audioDialogue": {
                  "speakerA": "What is your favourite meal of the day?",
                  "speakerB": "Definitely breakfast. I love breakfast because I'm always hungry when I wake up!"
                }
              },
              {
                "id": "u3_sp_m5",
                "preference": "5 I like going to restaurants because",
                "matchedCode": "d",
                "reason": "I can try new kinds of food.",
                "audioDialogue": {
                  "speakerA": "Do you enjoy eating out at weekends?",
                  "speakerB": "Yes, I like going to restaurants because I can try new kinds of food from different countries."
                }
              },
              {
                "id": "u3_sp_m6",
                "preference": "6 I enjoy cooking because",
                "matchedCode": "c",
                "reason": "it's fun to learn new things.",
                "audioDialogue": {
                  "speakerA": "Do you help your parents in the kitchen?",
                  "speakerB": "Yes, I really enjoy cooking because it's fun to learn new things and bake cakes."
                }
              }
            ]
          },
          "candidateComparison": {
            "title": "Exercise 3 (Track 12): Candidate Response Comparison",
            "instruction": "Look at the three pictures (cooking at home, buying fast food, eating on a park bench). Listen to two exam candidates talking about them. Which candidate gives the best answer? Why?",
            "candidateA": {
              "name": "Candidate A",
              "script": "Examiner: Do you like cooking at home?\nCandidate A: Yes, I do.\nExaminer: Why?\nCandidate A: It is good. I like cakes.\nExaminer: Do you like fast food?\nCandidate A: Yes, burgers are nice.",
              "critique": "Candidate A 回答過於簡短，僅使用單詞與極短句子，沒有主動使用 because 展開說明理由，口語流暢度與語法豐富度不足（僅得 10-11 盾）。"
            },
            "candidateB": {
              "name": "Candidate B",
              "script": "Examiner: Do you like cooking at home?\nCandidate B: Yes, I love cooking at home with my grandmother because it's really fun to learn new recipes, and homemade food is much healthier than fast food.\nExaminer: What about buying snacks in the park?\nCandidate B: I enjoy having an apple or a sandwich on a park bench when the weather is sunny, because it's very relaxing to sit outside with friends.",
              "critique": "Candidate B 給出最佳表現（滿分 15 盾標準）！使用完整句型，主動運用 because, and, when 延伸理由，展現豐富詞彙（homemade, healthier, relaxing, sunny weather）。"
            },
            "bestCandidate": "Candidate B",
            "why": "Candidate B speaks in full sentences, gives clear and detailed reasons using 'because', compares choices, and shows better vocabulary."
          },
          "examTask": {
            "title": "Speaking Part 2 Exam Task: 5 Types of Meals Discussion",
            "instruction": "Now, in this part of the test you are going to talk together. Here are some pictures that show different types of meals. Do you like these different types of meals? Say why or why not.",
            "image": "assets/images/u3/u3_speaking_exam_5meals.jpg",
            "mealTypes": [
              {
                "id": "u3_meal_1",
                "title": "Eating at a café / restaurant with friends",
                "questions": [
                  "Do you like eating out at restaurants with your friends?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "It is exciting to try international dishes like Italian pasta or tacos.",
                  "It's a great way to celebrate birthdays and chat happily with friends."
                ],
                "reasonsAgainst": [
                  "Eating out in restaurants can be quite expensive.",
                  "Sometimes the service is slow and you have to wait a long time."
                ]
              },
              {
                "id": "u3_meal_2",
                "title": "Eating dinner at home with family",
                "questions": [
                  "Do you like having dinner together with your family around the table?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "My parents cook fresh, healthy and delicious food every day.",
                  "It's important to talk about our school day together as a family."
                ],
                "reasonsAgainst": [
                  "Sometimes we have to eat vegetables like broccoli that I don't really like.",
                  "You have to help wash up all the plates and tidy the table afterwards."
                ]
              },
              {
                "id": "u3_meal_3",
                "title": "Having a barbecue (BBQ) outdoors in the garden",
                "questions": [
                  "Do you like having a barbecue outside in the garden or park?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "Barbecue sausages and grilled burgers taste amazing with smoky flavour.",
                  "It's fun to play outdoor games with cousins while food is cooking on the grill."
                ],
                "reasonsAgainst": [
                  "If it suddenly rains, everyone has to run inside.",
                  "The smoke from the fire can get in your eyes and make clothes smell."
                ]
              },
              {
                "id": "u3_meal_4",
                "title": "Eating snacks / fast food on the sofa in front of the TV",
                "questions": [
                  "Do you like eating snacks or dinner on the sofa watching TV?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "It is very relaxing to watch your favourite film or football match while having pizza.",
                  "You feel comfortable on the soft sofa after a tiring day."
                ],
                "reasonsAgainst": [
                  "It's easy to spill food or drinks and make the sofa dirty.",
                  "Watching TV while eating means you don't talk to your family."
                ]
              },
              {
                "id": "u3_meal_5",
                "title": "Having a meal at an upscale restaurant / buffet",
                "questions": [
                  "Do you like having a buffet or formal dinner in a hotel restaurant?",
                  "Why or why not?"
                ],
                "reasonsFor": [
                  "At a buffet, you can choose whatever food you want and take as many desserts as you like.",
                  "The dining room is beautiful and comfortable with great music."
                ],
                "reasonsAgainst": [
                  "You have to dress up smartly and follow strict table manners.",
                  "It is often too noisy when there are a lot of customers."
                ]
              }
            ],
            "keyPhrases": [
              "Do you like ...? / What do you think about ...?",
              "I really like ... because ...",
              "I prefer ... to ... because ...",
              "I don't really enjoy ... because it's too ...",
              "In my opinion, having meals with family is better than eating alone in front of TV."
            ]
          }
        },
        "speakingPart1": null,
        "revision": {
          "unitId": "u3",
          "totalPoints": 24,
          "totalMarks": 24,
          "exercises": [
            null,
            null,
            null
          ]
        },
        "revisionUnit1": null,
        "revisionUnit2": null
      }
    }
  ]
};
if (typeof window !== 'undefined') {
  window.KET_DATA = KET_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KET_DATA;
}
