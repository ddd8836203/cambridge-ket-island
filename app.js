/**
 * 🏝️ 動森 KET 13盾衝刺島 (Animal Crossing KET Preparation System)
 * 主應用程式核心腳本 (app.js)
 * 包含：
 * 1. Web Audio API 零外部音效檔案合成引擎 (SoundFX)
 * 2. 滿幀硬體加速粒子與動態特效引擎 (VisualFX)
 * 3. 三層英式語音合成與 iPad Chrome/Edge 手勢解鎖器 (TTSEngine)
 * 4. 4 帳號獨立沙盒狀態管理器 (AccountManager: rex, hugo, test1, test2)
 * 5. 15 盾牌島嶼戰情室、單字翻翻卡與快問快答闖關、傅達館長抓蟲特訓館、課本跨頁原圖瀏覽器
 * 6. Phase 4 & Phase 5 預留掛載點 (view-rw, view-listening, view-speaking, view-errorbook, view-print)
 */

// =============================================================================
// 一、Web Audio API 零檔案合成音效引擎 (SoundFX)
// =============================================================================
const SoundFX = (() => {
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // 播放清脆木琴/鐘琴上行大三和弦琶音 (C5 -> E5 -> G5 -> C6)
  function playCorrect() {
    if (!AppState.sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const startTime = ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime + idx * 0.08);

      gain.gain.setValueAtTime(0.001, startTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.28, startTime + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + idx * 0.08 + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime + idx * 0.08);
      osc.stop(startTime + idx * 0.08 + 0.25);
    });
  }

  // 播放溫和呆萌 Q 彈三角波滑音 (G3 -> F#3，溫和不刺耳)
  function playWrong() {
    if (!AppState.sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(196.00, startTime); // G3
    osc.frequency.exponentialRampToValueAtTime(146.83, startTime + 0.28); // D3

    gain.gain.setValueAtTime(0.24, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.32);
  }

  // 播放五連音歡樂過關號角旋律 (G4 -> C5 -> E5 -> G5 -> C6 + Chord)
  function playFanfare() {
    if (!AppState.sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const melody = [
      { f: 392.00, d: 0.10 }, // G4
      { f: 523.25, d: 0.10 }, // C5
      { f: 659.25, d: 0.10 }, // E5
      { f: 783.99, d: 0.16 }, // G5
      { f: 1046.50, d: 0.35 } // C6
    ];

    let t = ctx.currentTime;
    melody.forEach((note) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);

      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + note.d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + note.d + 0.05);

      t += note.d * 0.85;
    });
  }

  // 播放 800Hz 極短木頭敲擊「啵」聲 (0.04s)
  function playClick() {
    if (!AppState.sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, startTime);
    osc.frequency.exponentialRampToValueAtTime(300, startTime + 0.04);

    gain.gain.setValueAtTime(0.2, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + 0.05);
  }

  // 模擬動森動物夥伴說話 (Animalese Bebebese 快速嘟噥短音)
  function playBebebese() {
    if (!AppState.sfxEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    const startTime = ctx.currentTime;
    const count = 5;
    for (let i = 0; i < count; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const freq = 450 + Math.random() * 400; // 450Hz ~ 850Hz 隨機跳動

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime + i * 0.045);

      gain.gain.setValueAtTime(0.12, startTime + i * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + i * 0.045 + 0.038);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime + i * 0.045);
      osc.stop(startTime + i * 0.045 + 0.042);
    }
  }

  return {
    getAudioContext,
    playCorrect,
    playWrong,
    playFanfare,
    playClick,
    playBebebese
  };
})();

// =============================================================================
// 二、視覺特效引擎 (VisualFX: 粒子噴發與 Q 彈搖晃)
// =============================================================================
const VisualFX = (() => {
  const fxLayer = document.getElementById('ac-fx-layer') || document.body;

  // 答對時噴發 14 顆動森葉子與金幣粒子，並飄出提示文字
  function burstParticles(x, y, customText = '+100 哩數!') {
    const emojis = ['🍃', '⭐', '💰', '💛', '🌸', '✨', '🍃', '🎉'];
    const originX = (x !== undefined && x > 0) ? x : window.innerWidth / 2;
    const originY = (y !== undefined && y > 0) ? y : window.innerHeight / 2;

    // 噴發粒子
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('div');
      p.className = 'fx-particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const dx = (Math.random() - 0.5) * 240;
      const rot = (Math.random() - 0.5) * 80;
      p.style.left = `${originX}px`;
      p.style.top = `${originY}px`;
      p.style.setProperty('--dx', `${dx}px`);
      p.style.setProperty('--rot', `${rot}deg`);

      fxLayer.appendChild(p);
      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 950);
    }

    // 飄出金色文字
    if (customText) {
      const textEl = document.createElement('div');
      textEl.className = 'fx-text';
      textEl.textContent = customText;
      textEl.style.left = `${originX - 40}px`;
      textEl.style.top = `${originY - 20}px`;
      textEl.style.setProperty('--dx', '0px');
      textEl.style.setProperty('--rot', '0deg');

      fxLayer.appendChild(textEl);
      setTimeout(() => {
        if (textEl.parentNode) textEl.parentNode.removeChild(textEl);
      }, 1100);
    }
  }

  // 錯誤震盪回饋動畫
  function shakeElement(el) {
    if (!el) return;
    el.classList.remove('ac-shake-anim');
    void el.offsetWidth; // 強制重繪
    el.classList.add('ac-shake-anim');
    setTimeout(() => {
      el.classList.remove('ac-shake-anim');
    }, 480);
  }

  // 正確 Q 彈放大動畫
  function popElement(el) {
    if (!el) return;
    el.classList.remove('ac-pop-anim');
    void el.offsetWidth;
    el.classList.add('ac-pop-anim');
    setTimeout(() => {
      el.classList.remove('ac-pop-anim');
    }, 400);
  }

  return {
    burstParticles,
    spawnParticles: burstParticles, // 相容別名
    shakeElement,
    popElement
  };
})();

// =============================================================================
// 三、三層英式 TTS 語音引擎與手勢解鎖 (TTSEngine)
// =============================================================================
const TTSEngine = (() => {
  let isUnlocked = false;

  // 首次使用者點擊時解鎖 WebKit AudioContext 與 SpeechSynthesis
  function unlockOnFirstGesture() {
    if (isUnlocked) return;
    isUnlocked = true;

    // 解鎖 Web Audio
    SoundFX.getAudioContext();

    // 解鎖 Web Speech
    if ('speechSynthesis' in window) {
      try {
        const silent = new SpeechSynthesisUtterance('');
        silent.volume = 0;
        window.speechSynthesis.speak(silent);
      } catch (e) {}
    }
    window.removeEventListener('click', unlockOnFirstGesture);
    window.removeEventListener('touchstart', unlockOnFirstGesture);
  }

  window.addEventListener('click', unlockOnFirstGesture, { once: true });
  window.addEventListener('touchstart', unlockOnFirstGesture, { once: true });

  // 尋找最佳英式 (en-GB) 語音（支援男女雙角色切換）
  function getBestVoice(gender) {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const enGbVoices = voices.filter(v => v.lang.startsWith('en-GB') || v.lang === 'en_GB');
    const pool = enGbVoices.length > 0 ? enGbVoices : voices.filter(v => v.lang.startsWith('en'));

    if (gender === 'male') {
      const m = pool.find(v => /Ryan|Daniel|Arthur|George|Oliver|Thomas|Male/i.test(v.name) && (v.name.includes('Natural') || v.name.includes('Online')))
        || pool.find(v => /Ryan|Daniel|Arthur|George|Oliver|Thomas|Male/i.test(v.name));
      if (m) return m;
    } else if (gender === 'female') {
      const f = pool.find(v => /Sonia|Libby|Maisie|Martha|Kate|Serena|Female/i.test(v.name) && (v.name.includes('Natural') || v.name.includes('Online')))
        || pool.find(v => /Sonia|Libby|Maisie|Martha|Kate|Serena|Female/i.test(v.name));
      if (f) return f;
    }

    // 第一優先：微軟神經自然英音或 Google UK
    const preferred = pool.find(v => v.name.includes('Natural') || v.name.includes('Online') || v.name.includes('Google UK'));
    if (preferred) return preferred;

    return pool[0] || null;
  }

  // 發音保護與朗讀
  function speak(text, { rate = 1.0, pitch = 1.0, gender = null, onEnd = null } = {}) {
    if (!('speechSynthesis' in window)) {
      console.warn('此瀏覽器不支援 Web Speech API');
      return;
    }

    window.speechSynthesis.cancel(); // 中斷前一次發音

    // 僅針對單獨唸出字母 'a' 時轉念 'A.'，避免整句對話把冠詞 a 誤念成大字母 A
    const trimmed = String(text || '').trim();
    const processedText = trimmed.toLowerCase() === 'a' ? 'A.' : trimmed;

    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.lang = 'en-GB';
    utterance.rate = rate;
    utterance.pitch = pitch;

    const voice = getBestVoice(gender);
    if (voice) {
      utterance.voice = voice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  return {
    speak,
    unlockOnFirstGesture
  };
})();

// =============================================================================
// 全教材 35 幅高解析正向跨頁與裁切插圖資源清冊 (Retina 2x / 300 DPI Asset Manifest)
// =============================================================================
const ASSET_MANIFEST = {
  spreads: [
    'assets/pages/map_of_units_p4_p5.jpg',
    'assets/pages/u1_p6_p7.jpg',
    'assets/pages/u1_p8_p9.jpg',
    'assets/pages/u1_p10_p11.jpg',
    'assets/pages/u2_p12_p13.jpg',
    'assets/pages/u2_p14_p15.jpg',
    'assets/pages/u2_p16_p17.jpg',
    'assets/pages/u3_p18_p19.jpg',
    'assets/pages/u3_p20_p21.jpg',
    'assets/pages/u3_p22_p23.jpg',
    'assets/pages/rev_u1_u2_p78_p79.jpg',
    'assets/pages/rev_u3_u4_p80_p81.jpg'
  ],
  figures: [
    'assets/images/u1/u1_family_intro.jpg',
    'assets/images/u1/u1_sofia_family_tree.jpg',
    'assets/images/u1/u1_reading_part2_boys.jpg',
    'assets/images/u1/u1_fav_places.jpg',
    'assets/images/u1/u1_writing_part7_bookshop.jpg',
    'assets/images/u1/u1_writing_part7_exam.jpg',
    'assets/images/u1/u1_clocks.jpg',
    'assets/images/u1/u1_kyle_photo_album.jpg',
    'assets/images/u1/u1_simon_island.jpg',
    'assets/images/u1/u1_speaking_people_af.jpg',
    'assets/images/u2/u2_hobbies_clubs.jpg',
    'assets/images/u2/u2_invitations_cartoon.jpg',
    'assets/images/u2/u2_hasan_bedroom.jpg',
    'assets/images/u3/u3_breakfast_places_ae.jpg',
    'assets/images/u3/u3_wendy_grandma_omelette.jpg',
    'assets/images/u3/u3_world_dishes_abc.jpg',
    'assets/images/u3/u3_cafe_menu.jpg',
    'assets/images/u3/u3_cooking_school_notice.jpg',
    'assets/images/u3/u3_speaking_food_3pics.jpg',
    'assets/images/u3/u3_speaking_exam_5meals.jpg',
    'assets/images/u3/u3_canteen_matching.jpg',
    'assets/images/u3/u3_writing_boy_baking.jpg',
    'assets/images/u3/u3_writing_part7_picnic_rain.jpg'
  ]
};

// =============================================================================
// Phase 6：☁️ Firebase Realtime Database 跨設備雙向雲端同步模組
// =============================================================================
const DEFAULT_FIREBASE_DB_URL = 'https://math-review-6-default-rtdb.asia-southeast1.firebasedatabase.app';

function updateSyncStatus(status, text) {
  const iconEl = document.getElementById('cloud-sync-status-icon');
  const textEl = document.getElementById('cloud-sync-status-text');
  if (!iconEl || !textEl) return;

  if (status === 'syncing') {
    iconEl.textContent = '🔄';
    textEl.textContent = text || '同步中...';
  } else if (status === 'synced') {
    iconEl.textContent = '🟢';
    textEl.textContent = text || '雲端已同步';
  } else if (status === 'offline') {
    iconEl.textContent = '⚪';
    textEl.textContent = text || '本機離線';
  } else if (status === 'error') {
    iconEl.textContent = '⚠️';
    textEl.textContent = text || '同步異常';
  }
}

// 正式上線重置版本戳記：確保 Rex 與 Hugo 帳號於所有設備首次開啟新版本時自動洗白舊測試紀錄（不影響 test1 / test2）
const LAUNCH_RESET_EPOCH = '20261114_official_v1';

// 防回滾智能合併演算法 (Anti-Rollback Merge)
function mergeAccountData(local, remote) {
  if (!remote || typeof remote !== 'object') return local;
  if (!local || typeof local !== 'object') return remote;

  // 若為正式學生帳號 (rex / hugo)，且雲端資料尚未帶上最新上線重置戳記，忽略舊雲端髒資料並以本機全新狀態覆寫
  const accId = local.accountId || remote.accountId;
  if ((accId === 'rex' || accId === 'hugo') && remote.resetEpoch !== LAUNCH_RESET_EPOCH) {
    return { ...local, resetEpoch: LAUNCH_RESET_EPOCH, lastSync: Date.now() };
  }

  const merged = { ...local };

  // 1. 哩數取最大值
  merged.nookMiles = Math.max(local.nookMiles || 0, remote.nookMiles || 0);

  // 2. 熟記單字取聯集
  merged.masteredVocab = [...new Set([...(local.masteredVocab || []), ...(remote.masteredVocab || [])])];

  // 3. 抓蟲題庫取聯集
  merged.clearedMistakes = [...new Set([...(local.clearedMistakes || []), ...(remote.clearedMistakes || [])])];

  // 4. 盾牌進度取三科最高值
  merged.shieldProgress = {
    readingWriting: Math.max((local.shieldProgress && local.shieldProgress.readingWriting) || 0, (remote.shieldProgress && remote.shieldProgress.readingWriting) || 0),
    listening: Math.max((local.shieldProgress && local.shieldProgress.listening) || 0, (remote.shieldProgress && remote.shieldProgress.listening) || 0),
    speaking: Math.max((local.shieldProgress && local.shieldProgress.speaking) || 0, (remote.shieldProgress && remote.shieldProgress.speaking) || 0)
  };

  // 5. 5 色錯題本取最新狀態或智能合併
  merged.netErrors = { ...(local.netErrors || {}) };
  if (remote.netErrors) {
    Object.keys(remote.netErrors).forEach(key => {
      const remItem = remote.netErrors[key];
      const locItem = merged.netErrors[key];
      if (!locItem) {
        merged.netErrors[key] = remItem;
      } else {
        const remTime = remItem.timestamp || remItem.lastUpdated || 0;
        const locTime = locItem.timestamp || locItem.lastUpdated || 0;
        if (remTime > locTime) {
          merged.netErrors[key] = remItem;
        }
      }
    });
  }

  // 6. 總複習分數取最高
  merged.revScore = Math.max(local.revScore || 0, remote.revScore || 0);

  // 7. 題庫做題紀錄雙向雲端合併 (questionStats: { [code]: { ok, err, net, lastAt } })
  merged.questionStats = { ...(local.questionStats || {}) };
  if (remote.questionStats) {
    Object.keys(remote.questionStats).forEach(code => {
      const loc = merged.questionStats[code] || { ok: 0, err: 0, net: 0, lastAt: 0 };
      const rem = remote.questionStats[code] || { ok: 0, err: 0, net: 0, lastAt: 0 };
      const ok = Math.max(loc.ok || 0, rem.ok || 0);
      const err = Math.max(loc.err || 0, rem.err || 0);
      const lastAt = Math.max(loc.lastAt || 0, rem.lastAt || 0);
      merged.questionStats[code] = {
        ok,
        err,
        net: err - ok,
        lastAt
      };
    });
  }

  merged.lastSync = Date.now();

  return merged;
}

// 從 Firebase 雲端拉取最新進度 (syncFromCloud)
window.syncFromCloud = async function(accountId, notify = false) {
  const accId = accountId || AppState.currentAccount || 'rex';
  updateSyncStatus('syncing', '正在拉取雲端資料...');

  const endpoint = `${DEFAULT_FIREBASE_DB_URL}/ket_prep_v1_users/${accId}.json`;

  try {
    const res = await fetch(endpoint, { method: 'GET' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const remoteData = await res.json();

    const localData = AccountManager.loadAccount(accId);
    const mergedData = mergeAccountData(localData, remoteData);

    try {
      localStorage.setItem(`ket_prep_v1_${accId}`, JSON.stringify(mergedData));
    } catch (e) {
      console.warn('LocalStorage 存檔失敗:', e);
    }

    if (accId === AppState.currentAccount) {
      AppState.accountData = mergedData;
      updateHeaderDisplay();
      renderCurrentView();
    }

    updateSyncStatus('synced', '雲端已同步');

    if (notify) {
      SoundFX.playCorrect();
      VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '☁️ 雲端雙向同步完成！');
    }
  } catch (err) {
    console.warn('雲端同步跳過 (離線或網絡受限):', err.message);
    updateSyncStatus('offline', '本機離線模式');
    if (notify) {
      alert('目前為本機離線模式，所有進度已妥善保存在本機瀏覽器中。');
    }
  }
};

// 將最新本機進度防抖推送至 Firebase 雲端 (pushToCloud)
let cloudPushDebounceTimer = null;
window.pushToCloud = function(accountId) {
  const accId = accountId || AppState.currentAccount || 'rex';
  if (cloudPushDebounceTimer) clearTimeout(cloudPushDebounceTimer);

  cloudPushDebounceTimer = setTimeout(async () => {
    updateSyncStatus('syncing', '正在上傳進度...');
    const localData = AccountManager.loadAccount(accId);
    const endpoint = `${DEFAULT_FIREBASE_DB_URL}/ket_prep_v1_users/${accId}.json`;

    try {
      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(localData)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      updateSyncStatus('synced', '雲端已同步');
    } catch (err) {
      console.warn('推送雲端跳過 (離線或網絡受限):', err.message);
      updateSyncStatus('offline', '本機離線');
    }
  }, 600);
};

// =============================================================================
// Phase 6：📱 多設備視圖切換器 (電腦全寬 + 雙 iPad + iPhone 15 Pro)
// =============================================================================
window.switchDeviceLayout = function(layoutClass) {
  const btnDesktop = document.getElementById('btn-layout-desktop');
  const btn102 = document.getElementById('btn-layout-102');
  const btn129 = document.getElementById('btn-layout-129');
  const btn15pro = document.getElementById('btn-layout-15pro');

  document.body.classList.remove('layout-desktop', 'layout-ipad-102', 'layout-ipad-129', 'layout-iphone-15pro');
  document.body.classList.add(layoutClass);
  AppState.currentLayout = layoutClass;

  if (btnDesktop) btnDesktop.classList.toggle('active', layoutClass === 'layout-desktop');
  if (btn102) btn102.classList.toggle('active', layoutClass === 'layout-ipad-102');
  if (btn129) btn129.classList.toggle('active', layoutClass === 'layout-ipad-129');
  if (btn15pro) btn15pro.classList.toggle('active', layoutClass === 'layout-iphone-15pro');

  const footerMode = document.getElementById('footer-mode-name');
  if (footerMode) {
    if (layoutClass === 'layout-iphone-15pro') {
      footerMode.textContent = '模式：iPhone 15 Pro 直向 (393×852 @3x)';
    } else if (layoutClass === 'layout-ipad-129') {
      footerMode.textContent = '模式：iPad Pro 12.9" (1366×1024)';
    } else if (layoutClass === 'layout-ipad-102') {
      footerMode.textContent = '模式：iPad 10.2" (1080×810)';
    } else {
      footerMode.textContent = '模式：電腦寬螢幕 (自適應)';
    }
  }
};

window.toggleMobileDrawer = function(drawerId) {
  const el = document.getElementById(drawerId || 'mobile-reading-article');
  if (!el) return;
  const isHidden = el.style.display === 'none';
  el.style.display = isHidden ? 'block' : 'none';
  const btn = document.getElementById('btn-mobile-drawer-toggle');
  if (btn) {
    btn.textContent = isHidden ? '📌 收合文章與圖片 (手機單手做題模式 ▲)' : '📌 展開閱讀文章與圖片 (手機單手對照模式 ▼)';
  }
};

// =============================================================================
// 四、4 帳號獨立沙盒狀態管理 (AccountManager)
// =============================================================================
const AccountManager = (() => {
  const STORAGE_PREFIX = 'ket_prep_v1_';

  function getStorageKey(accountId) {
    return `${STORAGE_PREFIX}${accountId}`;
  }

  function createInitialAccountData(accountId) {
    const isStudentAccount = accountId === 'rex' || accountId === 'hugo';

    return {
      accountId,
      resetEpoch: isStudentAccount ? LAUNCH_RESET_EPOCH : 'test_sandbox',
      nookMiles: isStudentAccount ? 0 : 100,
      masteredVocab: [], // 已熟記單字清單 (例如 ["u1_unusual", "u1_surname"])
      reviewVocab: [],   // 待複習單字清單
      clearedMistakes: [], // 已抓出蟲的題目清單 (例如 ["u1_cm_hg_1"])
      netErrors: {},     // 5色錯題熱力表記錄 { [itemId]: { id, count, itemType, unitId, title, wrongAnswer, correctAnswer, rule, lastUpdated } }
      questionStats: {}, // KET 全真題庫做題紀錄 { [code]: { ok: 0, err: 0, net: 0, lastAt: 0 } }
      revScore: 0,
      shieldProgress: {
        readingWriting: isStudentAccount ? 0 : 3.6,
        listening: isStudentAccount ? 0 : 3.4,
        speaking: isStudentAccount ? 0 : 3.5
      }
    };
  }

  function loadAccount(accountId) {
    const isStudentAccount = accountId === 'rex' || accountId === 'hugo';
    const resetFlagKey = `${STORAGE_PREFIX}launch_reset_${accountId}`;

    try {
      // 若為 Rex / Hugo 且本機尚未執行過正式上線歸零，強制清除舊本機快取並重建全新空白狀態
      if (isStudentAccount && localStorage.getItem(resetFlagKey) !== LAUNCH_RESET_EPOCH) {
        const fresh = createInitialAccountData(accountId);
        localStorage.setItem(resetFlagKey, LAUNCH_RESET_EPOCH);
        localStorage.setItem(getStorageKey(accountId), JSON.stringify(fresh));
        pushToCloud(accountId);
        return fresh;
      }

      const raw = localStorage.getItem(getStorageKey(accountId));
      if (raw) {
        const data = JSON.parse(raw);
        if (isStudentAccount && data.resetEpoch !== LAUNCH_RESET_EPOCH) {
          const fresh = createInitialAccountData(accountId);
          localStorage.setItem(resetFlagKey, LAUNCH_RESET_EPOCH);
          localStorage.setItem(getStorageKey(accountId), JSON.stringify(fresh));
          pushToCloud(accountId);
          return fresh;
        }
        data.questionStats = data.questionStats || {};
        return data;
      }
    } catch (e) {
      console.error('讀取帳號存檔失敗：', e);
    }
    const initial = createInitialAccountData(accountId);
    if (isStudentAccount) {
      try { localStorage.setItem(resetFlagKey, LAUNCH_RESET_EPOCH); } catch (e) {}
    }
    saveAccount(accountId, initial);
    return initial;
  }

  function saveAccount(accountId, data) {
    try {
      localStorage.setItem(getStorageKey(accountId), JSON.stringify(data));
      // Phase 6: 自動推送至 Firebase 雲端 (防抖 600ms)
      pushToCloud(accountId);
    } catch (e) {
      console.error('寫入帳號存檔失敗：', e);
    }
  }

  function resetAccount(accountId) {
    const fresh = createInitialAccountData(accountId);
    saveAccount(accountId, fresh);
    return fresh;
  }

  return {
    loadAccount,
    saveAccount,
    resetAccount
  };
})();

// =============================================================================
// 五、全局應用程式狀態 (AppState)
// =============================================================================
const AppState = {
  currentAccount: 'rex',
  currentUnit: 'all', // 'all', 'u1', 'u2', 'u3'
  currentTab: 'dashboard',
  currentLayout: 'layout-ipad-102',
  fontScale: 1.0,
  sfxEnabled: true,

  // 單字學習艙狀態
  vocabMode: 'flashcards', // 'flashcards' 或 'quiz'
  vocabFilter: 'all',      // 'all', 'review', 'unmastered'
  quizQuestionIndex: 0,
  quizQuestions: [],
  quizAnswered: false,

  // 抓蟲特訓狀態
  mistakesFilter: 'all',
  mistakeResults: {}, // 紀錄本輪抓蟲結果

  // 跨頁原圖狀態
  spreadUnit: 'u1',
  spreadIndex: 0,
  spreadZoom: 1.0,

  // Phase 4：閱寫考場狀態
  rwMode: 'readingPart2', // 'readingPart2', 'readingPart3', 'readingPart4', 'readingWritingPart5', 'writingPart7', 'grammarVocabDrills'
  rwWritingUnit: 'u1',    // 'u1', 'u3'
  rwWritingTrack: 'blocks', // 'blocks', 'rubric'
  assembledBlocks: { p1: '', p2: '', p3: '' },
  rwAnswers: {}, // 紀錄閱寫題目答案與解析展開狀態

  // Phase 4：聽力劇場狀態
  listeningMode: 'listeningPart3', // 'listeningPart3', 'listeningPart4', 'listeningPart2'
  listeningSpeed: 1.0,            // 1.0 或 0.85
  listeningIsPlaying: false,
  listeningCurrentIndex: -1,
  showDistractorXray: false,
  listeningAnswers: {},

  // Phase 4：口說對練狀態
  speakingMode: 'speakingPart1', // 'speakingPart1', 'speakingPart2'
  speakingRevealed: {},

  // Phase A：KET 全真題庫方格考場狀態
  arenaUnitFilter: 'all',    // 'all', 'u1', 'u2', 'u3', 'rev', 'onlyErrors'
  arenaPartFilter: 'all',    // 'all' 或 14 個 part: 'RWP1'..'RWP7', 'LSP1'..'LSP5', 'SPP1'..'SPP2'
  arenaDiffFilter: 'all',    // 'all', '1-2', '3', '4-5'
  arenaExamMode: 'instant',  // 'instant' (⚡ 單題即時批改) 或 'mock' (⏱️ 純淨模擬考)
  arenaCurrentIndex: 0,
  arenaDrawerOpen: false,
  arenaUserAnswers: {},      // { [code]: answer }
  arenaSubmitted: {},        // { [code]: boolean }
  arenaRevealed: {},         // { [code]: boolean } - 紙筆自評已點「看答案」
  arenaSelfGraded: {},       // { [code]: 'ok' | 'bad' } - 當輪自評紀錄
  arenaExtensionOpen: {},    // { [code]: boolean }

  // 當前帳號資料
  accountData: null
};

// =============================================================================
// 六、核心業務邏輯與介面渲染 (View Renderers)
// =============================================================================

// 初始化帳號與介面
function initApp() {
  // 載入 Rex 預設帳號
  AppState.accountData = AccountManager.loadAccount(AppState.currentAccount);

  // 綁定頂部常駐控制器事件
  setupTopbarEvents();

  // 綁定主分頁切換事件
  setupNavTabEvents();

  // 設備佈局初始化（手機 <=767 進 15 Pro，寬桌機 >=1380 進電腦寬螢幕）
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 767) {
      switchDeviceLayout('layout-iphone-15pro');
    } else if (window.innerWidth >= 1380) {
      switchDeviceLayout('layout-desktop');
    } else if (window.innerWidth >= 1120) {
      switchDeviceLayout('layout-ipad-129');
    } else {
      switchDeviceLayout('layout-ipad-102');
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 767 && AppState.currentLayout !== 'layout-iphone-15pro') {
        switchDeviceLayout('layout-iphone-15pro');
      }
    });
  }

  // 渲染當前分頁與狀態列
  updateHeaderDisplay();
  renderCurrentView();

  // 啟動時自動拉取 Firebase 雲端最新進度
  syncFromCloud(AppState.currentAccount);

  // KET 全真考場鍵盤左右鍵切換上一題/下一題（輸入框聚焦時略過）
  if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
    document.addEventListener('keydown', (e) => {
      if (AppState.currentTab !== 'arena') return;
      const activeTag = (document.activeElement && document.activeElement.tagName) ? document.activeElement.tagName.toUpperCase() : '';
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;
      const total = getArenaFilteredQuestions().length;
      if (total <= 1) return;
      if (e.key === 'ArrowLeft' && AppState.arenaCurrentIndex > 0) {
        jumpArenaQuestion(AppState.arenaCurrentIndex - 1, true);
      } else if (e.key === 'ArrowRight' && AppState.arenaCurrentIndex < total - 1) {
        jumpArenaQuestion(AppState.arenaCurrentIndex + 1, true);
      }
    });
  }
}

// 更新頂部哩數與帳號標籤
function updateHeaderDisplay() {
  const milesEl = document.getElementById('topbar-miles-display');
  if (milesEl) {
    milesEl.textContent = AppState.accountData.nookMiles;
  }

  // 錯題本未清除紅點數量
  const netErrorKeys = Object.keys(AppState.accountData.netErrors).filter(
    k => AppState.accountData.netErrors[k].count > 0
  );
  const errorBadge = document.getElementById('tab-error-count');
  if (errorBadge) {
    errorBadge.textContent = netErrorKeys.length;
    errorBadge.style.display = netErrorKeys.length > 0 ? 'inline-block' : 'none';
  }

  // 底部狀態更新
  const footerAcc = document.getElementById('footer-account-name');
  if (footerAcc) {
    const accConfig = (window.KET_DATA && window.KET_DATA.meta && window.KET_DATA.meta.accounts)
      ? window.KET_DATA.meta.accounts.find(a => a.id === AppState.currentAccount)
      : null;
    footerAcc.textContent = `目前考生：${accConfig ? accConfig.name : AppState.currentAccount} (${accConfig ? accConfig.grade : ''})`;
  }

  const footerMode = document.getElementById('footer-mode-name');
  if (footerMode) {
    if (AppState.currentLayout === 'layout-iphone-15pro') {
      footerMode.textContent = '模式：iPhone 15 Pro 直向 (393×852 @3x)';
    } else if (AppState.currentLayout === 'layout-ipad-129') {
      footerMode.textContent = '模式：iPad Pro 12.9" (1366×1024)';
    } else if (AppState.currentLayout === 'layout-ipad-102') {
      footerMode.textContent = '模式：iPad 10.2" (1080×810)';
    } else {
      footerMode.textContent = '模式：電腦寬螢幕 (自適應)';
    }
  }
}

// 綁定頂部控制列事件
function setupTopbarEvents() {
  // 1. 單元切換膠囊
  const unitCapsules = document.querySelectorAll('.unit-capsule');
  unitCapsules.forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.playClick();
      unitCapsules.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      AppState.currentUnit = btn.dataset.unit;
      renderCurrentView();
    });
  });

  // 2. 帳號切換膠囊
  const accBtns = document.querySelectorAll('.acc-btn');
  accBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.playClick();
      SoundFX.playBebebese();
      accBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      AppState.currentAccount = btn.dataset.account;
      AppState.accountData = AccountManager.loadAccount(AppState.currentAccount);
      updateHeaderDisplay();
      renderCurrentView();
      syncFromCloud(AppState.currentAccount);
    });
  });

  // 3. 電腦全寬 / 雙 iPad / iPhone 15 Pro 模式切換
  const btnDesktop = document.getElementById('btn-layout-desktop');
  const btn102 = document.getElementById('btn-layout-102');
  const btn129 = document.getElementById('btn-layout-129');
  const btn15pro = document.getElementById('btn-layout-15pro');

  if (btnDesktop) {
    btnDesktop.addEventListener('click', () => {
      SoundFX.playClick();
      switchDeviceLayout('layout-desktop');
    });
  }

  if (btn102) {
    btn102.addEventListener('click', () => {
      SoundFX.playClick();
      switchDeviceLayout('layout-ipad-102');
    });
  }

  if (btn129) {
    btn129.addEventListener('click', () => {
      SoundFX.playClick();
      switchDeviceLayout('layout-ipad-129');
    });
  }

  if (btn15pro) {
    btn15pro.addEventListener('click', () => {
      SoundFX.playClick();
      switchDeviceLayout('layout-iphone-15pro');
    });
  }

  // 4. 字級 5 段縮放
  const fontScales = [0.90, 1.0, 1.15, 1.25, 1.40];
  let fontScaleIndex = 1; // 預設 100%
  const btnFontDown = document.getElementById('btn-font-down');
  const btnFontUp = document.getElementById('btn-font-up');
  const fontScaleLabel = document.getElementById('font-scale-label');

  btnFontDown.addEventListener('click', () => {
    SoundFX.playClick();
    if (fontScaleIndex > 0) {
      fontScaleIndex--;
      applyFontScale();
    }
  });

  btnFontUp.addEventListener('click', () => {
    SoundFX.playClick();
    if (fontScaleIndex < fontScales.length - 1) {
      fontScaleIndex++;
      applyFontScale();
    }
  });

  function applyFontScale() {
    AppState.fontScale = fontScales[fontScaleIndex];
    document.documentElement.style.setProperty('--font-scale', AppState.fontScale);
    fontScaleLabel.textContent = `${Math.round(AppState.fontScale * 100)}%`;
  }

  // 5. 音效切換開關
  const btnSfxToggle = document.getElementById('btn-sfx-toggle');
  btnSfxToggle.addEventListener('click', () => {
    AppState.sfxEnabled = !AppState.sfxEnabled;
    SoundFX.playClick();
    btnSfxToggle.textContent = AppState.sfxEnabled ? '🔊 音效開' : '🔇 靜音';
    btnSfxToggle.classList.toggle('active', AppState.sfxEnabled);
  });

  // 6. 重置當前沙盒數據
  const btnReset = document.getElementById('btn-reset-test-account');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm(`確定要將【${AppState.currentAccount}】的測試記錄重設為初始狀態嗎？`)) {
        SoundFX.playClick();
        AppState.accountData = AccountManager.resetAccount(AppState.currentAccount);
        updateHeaderDisplay();
        renderCurrentView();
        VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '數據已重置!');
      }
    });
  }
}

// 綁定主分頁標籤切換（含電腦滑鼠滾輪橫移與左右箭頭按鈕）
function setupNavTabEvents() {
  const navTabsEl = document.getElementById('ac-nav-tabs');
  const btnLeft = document.getElementById('btn-nav-scroll-left');
  const btnRight = document.getElementById('btn-nav-scroll-right');

  if (navTabsEl) {
    // 電腦滑鼠滾輪直接轉為橫向捲動
    navTabsEl.addEventListener('wheel', (e) => {
      if (navTabsEl.scrollWidth > navTabsEl.clientWidth && e.deltaY !== 0) {
        e.preventDefault();
        navTabsEl.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  }

  if (btnLeft && navTabsEl) {
    btnLeft.addEventListener('click', () => {
      SoundFX.playClick();
      navTabsEl.scrollBy({ left: -180, behavior: 'smooth' });
    });
  }

  if (btnRight && navTabsEl) {
    btnRight.addEventListener('click', () => {
      SoundFX.playClick();
      navTabsEl.scrollBy({ left: 180, behavior: 'smooth' });
    });
  }

  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      SoundFX.playClick();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (typeof tab.scrollIntoView === 'function') {
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      AppState.currentTab = tab.dataset.tab;
      renderCurrentView();
    });
  });
}

// 切換當前可視分頁
function renderCurrentView() {
  const views = document.querySelectorAll('.ac-view');
  views.forEach(v => v.classList.remove('active'));

  const targetView = document.getElementById(`view-${AppState.currentTab}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  switch (AppState.currentTab) {
    case 'dashboard':
      renderDashboard();
      break;
    case 'arena':
      renderArenaPod();
      break;
    case 'vocab':
      renderVocabPod();
      break;
    case 'mistakes':
      renderMistakesPod();
      break;
    case 'spreads':
      renderSpreadViewer();
      break;
    case 'rw':
      renderReadingWritingPod();
      break;
    case 'listening':
      renderListeningPod();
      break;
    case 'speaking':
      renderSpeakingPod();
      break;
    case 'errorbook':
      renderErrorBookView();
      break;
    case 'print':
      renderPrintPod();
      break;
    default:
      renderDashboard();
  }
}

// =============================================================================
// 視圖 1：🏝️ 島嶼戰情室 (15 盾雷達) 渲染模組
// =============================================================================
function renderDashboard() {
  const container = document.getElementById('view-dashboard');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const acc = AppState.accountData;
  const isHugo = AppState.currentAccount === 'hugo';
  const currentAccConfig = data.meta.accounts.find(a => a.id === AppState.currentAccount) || data.meta.accounts[0];

  // 計算盾牌總數 (滿分 15 盾)
  const totalShields = (acc.shieldProgress.readingWriting + acc.shieldProgress.listening + acc.shieldProgress.speaking).toFixed(1);
  const targetShields = data.meta.targetShields; // 13 盾
  const progressPercent = Math.min(100, Math.round((totalShields / 15) * 100));

  // 計算 Cambridge Scale Score 估分 (100 ~ 150)
  const estimatedScore = Math.round(100 + (totalShields / 15) * 50);

  // 產生 15 盾牌小圖示
  function renderShieldIcons(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(count)) {
        html += '<span class="shield-icon" title="已點亮盾牌">🛡️</span>';
      } else if (i === Math.ceil(count) && count % 1 !== 0) {
        html += '<span class="shield-icon" title="衝刺中盾牌">✨</span>';
      } else {
        html += '<span class="shield-icon empty" title="未解鎖盾牌">⚪</span>';
      }
    }
    return html;
  }

  // 取得單元統計數據
  const unitCardsHtml = data.units.map(unit => {
    const vocabCount = unit.vocabulary ? unit.vocabulary.length : 0;
    const mistakesCount = unit.commonMistakes ? unit.commonMistakes.length : 0;

    // 計算已熟記與抓蟲進度
    const masteredInUnit = unit.vocabulary ? unit.vocabulary.filter(v => acc.masteredVocab.includes(`${unit.id}_${v.word}`)).length : 0;
    const clearedInUnit = unit.commonMistakes ? unit.commonMistakes.filter(m => acc.clearedMistakes.includes(m.id)).length : 0;

    return `
      <div class="unit-stage-card ${unit.id}-theme">
        <div class="unit-stage-header">
          <span class="unit-badge-pill">Unit ${unit.number}</span>
          <span class="unit-stage-topic">📚 ${unit.topic}</span>
        </div>
        <h3 class="unit-stage-title">${unit.title}</h3>

        <div class="grammar-focus-tags">
          ${unit.grammarFocus.map(g => `<span class="grammar-tag">${g}</span>`).join('')}
        </div>

        <div class="unit-stats-box">
          <div>🃏 單字熟記：<strong>${masteredInUnit} / ${vocabCount} 詞</strong></div>
          <div>🪲 文法抓蟲：<strong>${clearedInUnit} / ${mistakesCount} 題</strong></div>
        </div>

        <div class="unit-card-actions">
          <button class="ac-btn ac-btn-sm ac-btn-green" onclick="jumpToPod('vocab', '${unit.id}')">🃏 背單字</button>
          <button class="ac-btn ac-btn-sm" onclick="jumpToPod('vocab_quiz', '${unit.id}')">🎯 搭配詞</button>
          <button class="ac-btn ac-btn-sm ac-btn-red" onclick="jumpToPod('mistakes', '${unit.id}')">🪲 抓文法蟲</button>
          <button class="ac-btn ac-btn-sm ac-btn-wood" onclick="jumpToPod('spreads', '${unit.id}')">🗺️ 翻課本</button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- 考生身分與目標總進度 -->
    <div class="dash-header-banner">
      <div class="dash-student-info">
        <div class="dash-avatar-large">${currentAccConfig.avatar}</div>
        <div class="dash-title-group">
          <h2>${currentAccConfig.name} 的島嶼衝刺戰情室</h2>
          ${isHugo ? `
            <div class="dash-hugo-badge">
              <span>🌱 五年級字根與詞性提示強化模式已開啟（考點秘笈自動展開）</span>
            </div>
          ` : `
            <div class="dash-hugo-badge" style="background:#E0F7FA; color:#0077B6; border-color:#0077B6;">
              <span>🦁 六年級高階模考衝刺模式（目標 15 盾滿盾 Pass with Distinction）</span>
            </div>
          `}
        </div>
      </div>

      <div class="dash-target-countdown">
        <div class="target-badge">
          🎯 目標線：${targetShields} 盾 / 135 分 (Merit) ➔ 目前：<strong>${totalShields} 盾 / ${estimatedScore} 分</strong>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <span class="progress-text">距離 13 盾卓越認證還差 ${(Math.max(0, targetShields - totalShields)).toFixed(1)} 盾</span>
      </div>
    </div>

    <!-- 🎯 進入 KET 全真題庫考場（100% 無提示真考 + 紅綠小字追蹤方格盤） -->
    <div class="dash-arena-banner" onclick="jumpToPod('arena', 'all')" style="background: linear-gradient(135deg, #FFFDF0, #FEF3C7); border: 2.5px solid var(--ac-yellow-border); border-radius: var(--radius-md); padding: 14px 18px; margin-bottom: 16px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 12px; box-shadow: 0 3px 0 var(--ac-yellow-border); transition: transform 0.15s ease;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 2rem;">🎯</span>
        <div>
          <div style="font-weight: 900; font-size: 1.05rem; color: #B45309;">🎯 進入 KET 全真題庫考場（100% 無提示真考 + 紅綠小字追蹤方格盤）</div>
          <div style="font-size: 0.82rem; color: #92400E; margin-top: 2px;">零干擾全真考場 · 14 大 Part 官方考科覆蓋 · 紅綠答題熱度方格盤 · 四維度詳解與延伸學習重點</div>
        </div>
      </div>
      <button class="ac-btn ac-btn-green" style="flex-shrink: 0; pointer-events: none;">立即開考 ➔</button>
    </div>

    <!-- 15 盾牌戰情雷達矩陣 -->
    <div class="radar-shield-matrix">
      <div class="shield-card">
        <div class="shield-card-header">
          <span class="shield-subject-title">📖 Reading & Writing</span>
          <span class="shield-score-val">${acc.shieldProgress.readingWriting.toFixed(1)} / 5.0 盾</span>
        </div>
        <div class="shield-icons-row">
          ${renderShieldIcons(acc.shieldProgress.readingWriting)}
        </div>
      </div>

      <div class="shield-card">
        <div class="shield-card-header">
          <span class="shield-subject-title">🎧 Listening</span>
          <span class="shield-score-val">${acc.shieldProgress.listening.toFixed(1)} / 5.0 盾</span>
        </div>
        <div class="shield-icons-row">
          ${renderShieldIcons(acc.shieldProgress.listening)}
        </div>
      </div>

      <div class="shield-card">
        <div class="shield-card-header">
          <span class="shield-subject-title">🎙️ Speaking</span>
          <span class="shield-score-val">${acc.shieldProgress.speaking.toFixed(1)} / 5.0 盾</span>
        </div>
        <div class="shield-icons-row">
          ${renderShieldIcons(acc.shieldProgress.speaking)}
        </div>
      </div>
    </div>

    <!-- Unit 1 ~ Unit 3 島嶼關卡進度卡片 -->
    <div class="dash-units-grid">
      ${unitCardsHtml}
    </div>
  `;
}

// 快速跳轉至指定學習艙
window.jumpToPod = function(tabName, unitId) {
  SoundFX.playClick();
  if (tabName === 'vocab_quiz') {
    AppState.currentTab = 'vocab';
    AppState.vocabMode = 'quiz';
  } else if (tabName === 'revision') {
    AppState.currentTab = 'rw';
    AppState.rwMode = 'revision';
  } else {
    AppState.currentTab = tabName;
  }
  AppState.currentUnit = unitId;

  // 同步更新頂部膠囊按鈕
  const unitCapsules = document.querySelectorAll('.unit-capsule');
  unitCapsules.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.unit === unitId);
  });

  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === AppState.currentTab);
  });

  renderCurrentView();
};

// =============================================================================
// 視圖 2：🃏 單字與搭配詞艙 (Vocabulary & Collocations Pod)
// =============================================================================
function renderVocabPod() {
  const container = document.getElementById('view-vocab');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const isHugo = AppState.currentAccount === 'hugo';

  // 收集所選單元的單字
  let words = [];
  data.units.forEach(unit => {
    if (AppState.currentUnit === 'all' || AppState.currentUnit === unit.id) {
      if (unit.vocabulary) {
        unit.vocabulary.forEach(v => {
          words.push({ ...v, unitId: unit.id, unitTitle: unit.title });
        });
      }
    }
  });

  // 狀態篩選：全部 / 待複習 / 未熟記
  if (AppState.vocabFilter === 'review') {
    words = words.filter(w => AppState.accountData.reviewVocab.includes(`${w.unitId}_${w.word}`));
  } else if (AppState.vocabFilter === 'unmastered') {
    words = words.filter(w => !AppState.accountData.masteredVocab.includes(`${w.unitId}_${w.word}`));
  }

  // 頂部控制工具列
  const toolbarHtml = `
    <div class="pod-controls-bar">
      <div class="filter-group">
        <span class="filter-label">模式：</span>
        <button class="ac-btn ac-btn-sm ${AppState.vocabMode === 'flashcards' ? 'ac-btn-green' : ''}" id="btn-vocab-mode-cards">
          🃏 翻翻卡模式 (${words.length})
        </button>
        <button class="ac-btn ac-btn-sm ${AppState.vocabMode === 'quiz' ? 'ac-btn-blue' : ''}" id="btn-vocab-mode-quiz">
          🎯 搭配詞闖關測驗
        </button>
      </div>

      <div class="filter-group">
        <span class="filter-label">進度篩選：</span>
        <button class="ac-btn-icon ${AppState.vocabFilter === 'all' ? 'active' : ''}" onclick="setVocabFilter('all')">全部</button>
        <button class="ac-btn-icon ${AppState.vocabFilter === 'review' ? 'active' : ''}" onclick="setVocabFilter('review')">📌 待複習</button>
        <button class="ac-btn-icon ${AppState.vocabFilter === 'unmastered' ? 'active' : ''}" onclick="setVocabFilter('unmastered')">未熟記</button>
      </div>
    </div>
  `;

  if (AppState.vocabMode === 'flashcards') {
    // 渲染單字翻翻卡清單
    const cardsHtml = words.map(item => {
      const itemKey = `${item.unitId}_${item.word}`;
      const isMastered = AppState.accountData.masteredVocab.includes(itemKey);
      const isReview = AppState.accountData.reviewVocab.includes(itemKey);

      return `
        <div class="vocab-card ${isHugo ? 'hugo-highlight' : ''}" id="vcard-${itemKey}">
          <div class="vocab-card-header">
            <div>
              <span class="vocab-word-title">${item.word}</span>
              <span class="vocab-pos-badge">${item.pos}</span>
            </div>
            <span class="ac-badge" style="font-size:0.7rem; color:var(--ac-wood-light);">U${item.unitId.replace('u','')}</span>
          </div>

          <div class="vocab-zh-meaning">${item.zh}</div>

          <div class="vocab-audio-btns">
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(item.word)}', 1.0)">🔊 英式 1.0x</button>
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(item.word)}', 0.85)">🐢 慢速 0.85x</button>
          </div>

          <div class="vocab-collocation-box">
            <span class="vocab-collocation-label">🔗 搭配詞:</span>
            <span>${item.collocation}</span>
          </div>

          <div class="vocab-example-box" onclick="playVocabAudio('${escapeJsStr(item.example)}', 1.0)" title="點擊朗讀例句">
            💬 "${item.example}"
          </div>

          <div class="vocab-tip-box">
            <span>🦉 <strong>傅達考點秘笈：</strong>${item.tip}</span>
          </div>

          <div class="vocab-actions">
            <button class="ac-btn ac-btn-sm ${isMastered ? 'ac-btn-green' : ''}" onclick="toggleMasteredVocab('${itemKey}', event)">
              ${isMastered ? '✅ 已熟記 (+50哩)' : 'Mark 已熟記'}
            </button>
            <button class="ac-btn ac-btn-sm ${isReview ? 'ac-btn-red' : ''}" onclick="toggleReviewVocab('${itemKey}')">
              ${isReview ? '📌 已列複習' : '📌 待複習'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      ${toolbarHtml}
      <div class="vocab-cards-grid">
        ${cardsHtml.length > 0 ? cardsHtml : '<p style="text-align:center; padding:30px; font-weight:bold;">目前篩選條件下沒有單字喔！</p>'}
      </div>
    `;
  } else {
    // 渲染互動快問快答闖關模式
    renderVocabQuiz(container, toolbarHtml, words);
  }

  // 綁定模式切換按鈕事件
  const btnCards = document.getElementById('btn-vocab-mode-cards');
  const btnQuiz = document.getElementById('btn-vocab-mode-quiz');
  if (btnCards) {
    btnCards.addEventListener('click', () => {
      SoundFX.playClick();
      AppState.vocabMode = 'flashcards';
      renderVocabPod();
    });
  }
  if (btnQuiz) {
    btnQuiz.addEventListener('click', () => {
      SoundFX.playClick();
      AppState.vocabMode = 'quiz';
      AppState.quizQuestionIndex = 0;
      AppState.quizAnswered = false;
      renderVocabPod();
    });
  }
}

// 變更單字進度篩選
window.setVocabFilter = function(filter) {
  SoundFX.playClick();
  AppState.vocabFilter = filter;
  renderVocabPod();
};

// 朗讀單字與例句
window.playVocabAudio = function(text, rate) {
  SoundFX.playClick();
  TTSEngine.speak(text, { rate });
};

// 標記為已熟記 (+50 哩數與樹葉噴發)
window.toggleMasteredVocab = function(itemKey, event) {
  SoundFX.playClick();
  const acc = AppState.accountData;
  const idx = acc.masteredVocab.indexOf(itemKey);

  if (idx === -1) {
    acc.masteredVocab.push(itemKey);
    acc.nookMiles += 50;
    SoundFX.playCorrect();
    VisualFX.burstParticles(event.clientX, event.clientY, '+50 哩數!');
  } else {
    acc.masteredVocab.splice(idx, 1);
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderVocabPod();
};

// 標記加入待複習清單
window.toggleReviewVocab = function(itemKey) {
  SoundFX.playClick();
  const acc = AppState.accountData;
  const idx = acc.reviewVocab.indexOf(itemKey);

  if (idx === -1) {
    acc.reviewVocab.push(itemKey);
  } else {
    acc.reviewVocab.splice(idx, 1);
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderVocabPod();
};

// 渲染搭配詞快問快答闖關 (Interactive Collocation & Vocab Quiz)
function renderVocabQuiz(container, toolbarHtml, words) {
  if (words.length < 4) {
    container.innerHTML = `
      ${toolbarHtml}
      <div class="quiz-pod-container" style="text-align:center;">
        <h3>題目數量不足</h3>
        <p>請切換至「全部單元」或包含更多單字以進行四選一測驗！</p>
      </div>
    `;
    return;
  }

  // 確保題目索引不越界
  const qIdx = AppState.quizQuestionIndex % words.length;
  const targetWord = words[qIdx];

  // 產生 4 個選項（1 正確 + 3 干擾項）
  const distractorCandidates = words.filter(w => w.word !== targetWord.word);
  shuffleArray(distractorCandidates);
  const options = [targetWord, ...distractorCandidates.slice(0, 3)];
  shuffleArray(options);

  // 題型切換：看搭配詞/例句挖空選單字
  const blankExample = targetWord.example.replace(new RegExp(targetWord.word, 'gi'), '_______');

  container.innerHTML = `
    ${toolbarHtml}
    <div class="quiz-pod-container" id="quiz-card-box">
      <div class="quiz-header">
        <span class="ac-tag" style="font-size:0.8rem;">🎯 搭配詞快問快答 第 ${qIdx + 1} / ${words.length} 題</span>
        <span class="ac-tag" style="background:var(--ac-yellow); font-size:0.8rem;">單元：${targetWord.unitTitle}</span>
      </div>

      <div class="quiz-question-box">
        <h3 style="font-size:1.15rem; margin-bottom:8px;">請依句意或搭配詞選出正確單字：</h3>
        <p style="font-size:1.1rem; line-height:1.5; color:var(--ac-wood);">💬 "${blankExample}"</p>
        <div style="margin-top:8px; font-size:0.85rem; color:var(--ac-wood-light);">
          🔗 提示搭配詞：<strong>${targetWord.collocation}</strong>
        </div>
      </div>

      <div class="quiz-options-grid" id="quiz-options-grid">
        ${options.map((opt, optIndex) => `
          <button class="quiz-opt-btn" onclick="checkVocabQuizAnswer('${escapeJsStr(opt.word)}', '${escapeJsStr(targetWord.word)}', '${targetWord.unitId}', this)">
            <span style="font-weight:900; margin-right:8px;">${['A', 'B', 'C', 'D'][optIndex]}.</span>
            <span>${opt.word}</span> <small style="color:var(--ac-gray-600);">(${opt.zh})</small>
          </button>
        `).join('')}
      </div>

      <div id="quiz-feedback-box" style="display:none; margin-top:14px;"></div>
    </div>
  `;
}

// 驗證快問快答答案
window.checkVocabQuizAnswer = function(selectedWord, correctWord, unitId, btnElement) {
  if (AppState.quizAnswered) return;
  AppState.quizAnswered = true;

  const cardBox = document.getElementById('quiz-card-box');
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const acc = AppState.accountData;
  const errorKey = `vocab_${unitId}_${correctWord}`;

  if (selectedWord === correctWord) {
    // 答對
    btnElement.classList.add('correct');
    SoundFX.playCorrect();
    VisualFX.popElement(btnElement);
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+100 哩數!');

    acc.nookMiles += 100;
    // 若原先在錯題本中有累積次數，自動 netErrors - 1
    if (acc.netErrors[errorKey] && acc.netErrors[errorKey].count > 0) {
      acc.netErrors[errorKey].count -= 1;
    }

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `
      <div class="ac-npc-bubble" style="background:#E8F5E9; border-color:var(--ac-green-dark);">
        <div class="ac-npc-tag" style="background:var(--ac-green); color:#FFF;">🦉 傅達館長讚嘆</div>
        <p style="font-weight:900; color:var(--ac-green-dark); margin-bottom:6px;">太棒了！完全正確！</p>
        <p style="font-size:0.85rem;">單字 <strong>${correctWord}</strong> 已經成功掌握！動森哩數 +100 哩！</p>
        <button class="ac-btn ac-btn-sm ac-btn-green" style="margin-top:10px;" onclick="nextVocabQuizQuestion()">下一題 ➔</button>
      </div>
    `;
  } else {
    // 答錯
    btnElement.classList.add('wrong');
    SoundFX.playWrong();
    VisualFX.shakeElement(cardBox);

    // 累積寫入 netErrors
    if (!acc.netErrors[errorKey]) {
      acc.netErrors[errorKey] = {
        id: errorKey,
        count: 1,
        itemType: 'vocab',
        unitId: unitId,
        title: `單字：${correctWord}`,
        wrongAnswer: selectedWord,
        correctAnswer: correctWord,
        rule: `搭配詞應為 ${correctWord}`,
        lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[errorKey].count += 1;
    }

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `
      <div class="ac-npc-bubble" style="background:#FCE4EC; border-color:var(--ac-red-dark);">
        <div class="ac-npc-tag" style="background:var(--ac-red); color:#FFF;">🦉 傅達館長提醒</div>
        <p style="font-weight:900; color:var(--ac-red-dark); margin-bottom:6px;">哎呀！選錯囉，正確答案是：<strong>${correctWord}</strong></p>
        <p style="font-size:0.85rem;">該單字已記錄在您的【📕 5色錯題熱力本】中，請多複習！</p>
        <button class="ac-btn ac-btn-sm" style="margin-top:10px;" onclick="nextVocabQuizQuestion()">繼續挑戰下一題 ➔</button>
      </div>
    `;
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
};

window.nextVocabQuizQuestion = function() {
  SoundFX.playClick();
  AppState.quizQuestionIndex++;
  AppState.quizAnswered = false;
  renderVocabPod();
};

// =============================================================================
// 視圖 3：🪲 傅達館長抓蟲特訓館 (Exam Candidates' Common Mistakes)
// =============================================================================
function renderMistakesPod() {
  const container = document.getElementById('view-mistakes');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const acc = AppState.accountData;

  // 收集所選單元的常犯錯題
  let mistakes = [];
  data.units.forEach(unit => {
    if (AppState.currentUnit === 'all' || AppState.currentUnit === unit.id) {
      if (unit.commonMistakes) {
        unit.commonMistakes.forEach(m => {
          mistakes.push({ ...m, unitId: unit.id, unitTitle: unit.title });
        });
      }
    }
  });

  const cardsHtml = mistakes.map((item, index) => {
    const isCleared = acc.clearedMistakes.includes(item.id) || AppState.mistakeResults[item.id] === 'cleared';

    // 產生改法選項：包含正確改法與干擾項
    const options = [
      { text: item.correction, isCorrect: true },
      { text: item.errorSpan || item.wrong, isCorrect: false },
      { text: `no ${item.errorSpan || 'change'}`, isCorrect: false }
    ];
    shuffleArray(options);

    return `
      <div class="mistake-bug-card" id="mcard-${item.id}">
        <div class="mistake-card-top">
          <span class="mistake-badge-unit">🪲 文法蟲 第 ${index + 1} 題 (Unit ${item.unitId.replace('u','')})</span>
          <span class="ac-badge" style="font-size:0.75rem; color:var(--ac-wood-light);">${isCleared ? '🦋 已捕獲' : '🕸️ 潛伏中'}</span>
        </div>

        <div class="mistake-wrong-box">
          <span class="mistake-wrong-label">考生常見寫法 (有蟲)：</span>
          <span>"${item.wrong}"</span>
        </div>

        ${!isCleared ? `
          <div style="font-size:0.85rem; font-weight:800; margin-bottom:8px;">請揮動捕蟲網，選出正確修正改法：</div>
          <div class="mistake-interactive-choices">
            ${options.map(opt => `
              <button class="mistake-choice-btn" onclick="catchMistakeBug('${item.id}', ${opt.isCorrect}, this)">
                ${opt.text}
              </button>
            `).join('')}
          </div>
          <button class="ac-btn ac-btn-sm" onclick="revealMistakeRule('${item.id}')">🔍 直接看館長解剖</button>
        ` : ''}

        <div class="mistake-result-box" id="mresult-${item.id}" style="${isCleared ? 'display:block;' : 'display:none;'}">
          <div class="mistake-correct-sentence">
            ✅ 正確綠句：<strong>"${item.correct}"</strong>
            <button class="ac-btn-icon" style="margin-left:8px;" onclick="TTSEngine.speak('${escapeJsStr(item.correct)}')">🔊 朗讀</button>
          </div>
          <div class="mistake-rule-text">
            🦉 <strong>傅達館長文法鐵律：</strong>${item.rule}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="pod-controls-bar">
      <div>
        <h3 style="font-size:1.05rem; font-weight:900;">🪲 劍橋官方考生常犯錯資料庫 (共 ${mistakes.length} 題)</h3>
        <span style="font-size:0.78rem; color:var(--ac-wood-light);">找出隱藏在句子中的文法蟲與拼寫蟲，點亮動森捕蟲圖鑑！</span>
      </div>
      <div>
        <span class="nook-miles-badge">已捕獲：${mistakes.filter(m => acc.clearedMistakes.includes(m.id)).length} / ${mistakes.length} 隻</span>
      </div>
    </div>

    <div class="mistakes-container">
      ${cardsHtml}
    </div>
  `;
}

// 捕蟲互動判定
window.catchMistakeBug = function(mistakeId, isCorrect, btnElement) {
  const card = document.getElementById(`mcard-${mistakeId}`);
  const resultBox = document.getElementById(`mresult-${mistakeId}`);
  const acc = AppState.accountData;

  if (isCorrect) {
    SoundFX.playCorrect();
    VisualFX.popElement(card);
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🦋 抓到文法蟲! +100哩');

    if (!acc.clearedMistakes.includes(mistakeId)) {
      acc.clearedMistakes.push(mistakeId);
      acc.nookMiles += 100;
    }
    AppState.mistakeResults[mistakeId] = 'cleared';

    // 若原先在 netErrors 錯題本中，自動 count - 1
    if (acc.netErrors[mistakeId] && acc.netErrors[mistakeId].count > 0) {
      acc.netErrors[mistakeId].count -= 1;
    }

    if (resultBox) resultBox.style.display = 'block';
    AccountManager.saveAccount(AppState.currentAccount, acc);
    updateHeaderDisplay();
    setTimeout(() => renderMistakesPod(), 700);
  } else {
    SoundFX.playWrong();
    VisualFX.shakeElement(card);

    // 寫入錯題本
    if (!acc.netErrors[mistakeId]) {
      acc.netErrors[mistakeId] = {
        id: mistakeId,
        count: 1,
        itemType: 'mistake',
        unitId: AppState.currentUnit,
        title: `文法抓蟲：${mistakeId}`,
        wrongAnswer: btnElement.textContent.trim(),
        correctAnswer: '見解法',
        rule: '請參閱館長鐵律',
        lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[mistakeId].count += 1;
    }

    AccountManager.saveAccount(AppState.currentAccount, acc);
    updateHeaderDisplay();
  }
};

window.revealMistakeRule = function(mistakeId) {
  SoundFX.playClick();
  const resultBox = document.getElementById(`mresult-${mistakeId}`);
  if (resultBox) {
    resultBox.style.display = 'block';
  }
};

// =============================================================================
// 視圖 4：🗺️ 課本跨頁原圖瀏覽器 (Spread Pages & Image Gallery)
// =============================================================================
function renderSpreadViewer() {
  const container = document.getElementById('view-spreads');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;

  // 12 幅完整課本跨頁清單：自 data.units 動態取得 spreadPages 與 Revision 跨頁
  let spreadPagesList = [
    { id: 'map', title: '全書目錄與架構圖 (p.4~p.5)', path: 'assets/pages/map_of_units_p4_p5.jpg' }
  ];

  data.units.forEach(u => {
    if (u.spreadPages && Array.isArray(u.spreadPages)) {
      u.spreadPages.forEach((imgPath, i) => {
        spreadPagesList.push({
          id: `${u.id}_${i}`,
          title: `Unit ${u.number} 課本跨頁 ${i + 1} (${u.title})`,
          path: imgPath
        });
      });
    }
  });

  spreadPagesList.push(
    { id: 'rev_1', title: 'Revision Unit 1~2 總複習 (p.78~p.79)', path: 'assets/pages/rev_u1_u2_p78_p79.jpg' },
    { id: 'rev_2', title: 'Revision Unit 3~4 總複習 (p.80~p.81)', path: 'assets/pages/rev_u3_u4_p80_p81.jpg' }
  );

  const allSpreads = spreadPagesList;

  const currentSpread = allSpreads[AppState.spreadIndex] || allSpreads[0];

  // 取得當前單元的題目切圖
  let currentImages = [];
  data.units.forEach(u => {
    if (u.images) {
      Object.keys(u.images).forEach(key => {
        currentImages.push({ title: `${u.id.toUpperCase()} - ${key}`, path: u.images[key] });
      });
    }
  });

  container.innerHTML = `
    <div class="spread-viewer-container">
      <div class="spread-toolbar">
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="ac-btn-icon" onclick="prevSpreadPage()">◀ 上一頁</button>
          <select id="select-spread-page" onchange="onSpreadSelectChange(this.value)" style="padding:4px 8px; font-weight:800; border-radius:12px; border:2px solid var(--ac-wood-border);">
            ${allSpreads.map((sp, idx) => `
              <option value="${idx}" ${idx === AppState.spreadIndex ? 'selected' : ''}>${sp.title}</option>
            `).join('')}
          </select>
          <button class="ac-btn-icon" onclick="nextSpreadPage()">下一頁 ▶</button>
        </div>

        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-weight:800; font-size:0.8rem;">縮放：</span>
          <button class="ac-btn-icon ${AppState.spreadZoom === 1.0 ? 'active' : ''}" onclick="setSpreadZoom(1.0)">100%</button>
          <button class="ac-btn-icon ${AppState.spreadZoom === 1.5 ? 'active' : ''}" onclick="setSpreadZoom(1.5)">150%</button>
          <button class="ac-btn-icon ${AppState.spreadZoom === 2.0 ? 'active' : ''}" onclick="setSpreadZoom(2.0)">200%</button>
        </div>
      </div>

      <div class="spread-viewport" id="spread-viewport">
        <img src="${currentSpread.path}" alt="${currentSpread.title}" class="spread-image" style="transform: scale(${AppState.spreadZoom});">
      </div>

      <div class="spread-gallery-box">
        <div style="font-size:0.82rem; font-weight:900; margin-bottom:6px;">🖼️ 課本高清切圖藝廊 (點擊快速檢視)：</div>
        <div class="gallery-grid">
          ${currentImages.map(img => `
            <img src="${img.path}" alt="${img.title}" title="${img.title}" class="gallery-thumb" onclick="previewImageModal('${img.path}', '${img.title}')">
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

window.prevSpreadPage = function() {
  SoundFX.playClick();
  if (AppState.spreadIndex > 0) {
    AppState.spreadIndex--;
    renderSpreadViewer();
  }
};

window.nextSpreadPage = function() {
  SoundFX.playClick();
  if (AppState.spreadIndex < 11) {
    AppState.spreadIndex++;
    renderSpreadViewer();
  }
};

window.onSpreadSelectChange = function(val) {
  SoundFX.playClick();
  AppState.spreadIndex = parseInt(val, 10);
  renderSpreadViewer();
};

window.setSpreadZoom = function(zoom) {
  SoundFX.playClick();
  AppState.spreadZoom = zoom;
  renderSpreadViewer();
};

window.previewImageModal = function(imgPath, title) {
  SoundFX.playClick();
  alert(`🖼️ 檢視高清題目圖：${title}\n路徑：${imgPath}`);
};

// =============================================================================
// 視圖 5：📕 5色錯題熱力本 (Error Book) 渲染模組 (Phase 5 完整實作)
// =============================================================================
function getHeatLevel(count) {
  if (count <= 1) return { level: 1, cls: 'heat-1', icon: '🌱', label: 'Level 1 淺黃微瑕' };
  if (count === 2) return { level: 2, cls: 'heat-2', icon: '🌼', label: 'Level 2 暖橘提醒' };
  if (count === 3) return { level: 3, cls: 'heat-3', icon: '🍊', label: 'Level 3 深橘警戒' };
  if (count === 4) return { level: 4, cls: 'heat-4', icon: '🌶️', label: 'Level 4 珊瑚紅危急' };
  return { level: 5, cls: 'heat-5', icon: '🔥', label: 'Level 5 紫紅魔王題' };
}

function renderErrorBookView() {
  const container = document.getElementById('view-errorbook');
  if (!container) return;

  const netErrors = AppState.accountData.netErrors || {};
  let errorKeys = Object.keys(netErrors).filter(k => netErrors[k].count > 0);

  // 篩選與排序狀態初始化
  if (!AppState.errorFilterHeat) AppState.errorFilterHeat = 'all';
  if (!AppState.errorFilterUnit) AppState.errorFilterUnit = 'all';
  if (!AppState.errorFilterType) AppState.errorFilterType = 'all';
  if (!AppState.errorSortBy) AppState.errorSortBy = 'net';

  // 依條件篩選
  if (AppState.errorFilterHeat !== 'all') {
    const targetLvl = parseInt(AppState.errorFilterHeat, 10);
    errorKeys = errorKeys.filter(k => getHeatLevel(netErrors[k].count).level === targetLvl);
  }
  if (AppState.errorFilterUnit !== 'all') {
    errorKeys = errorKeys.filter(k => (netErrors[k].unit || '').toLowerCase() === AppState.errorFilterUnit.toLowerCase());
  }
  if (AppState.errorFilterType !== 'all') {
    const fType = AppState.errorFilterType.toLowerCase();
    if (fType === 'ket_exam') {
      errorKeys = errorKeys.filter(k => (netErrors[k].itemType || '') === 'ket_exam');
    } else {
      errorKeys = errorKeys.filter(k => (netErrors[k].type || '').toLowerCase() === fType);
    }
  }

  // 依條件排序
  errorKeys.sort((a, b) => {
    if (AppState.errorSortBy === 'time') {
      return (netErrors[b].timestamp || 0) - (netErrors[a].timestamp || 0);
    }
    return netErrors[b].count - netErrors[a].count;
  });

  const totalErrorCount = Object.keys(netErrors).filter(k => netErrors[k].count > 0).length;

  container.innerHTML = `
    <div class="pod-controls-bar" style="margin-bottom:12px;">
      <div>
        <h3 style="font-size:1.1rem; font-weight:900;">📕 5色錯題熱力本 — ${AppState.currentAccount} 待消滅錯題庫</h3>
        <span style="font-size:0.8rem; color:var(--ac-wood-light);">
          依淨錯次數分 5 色熱度階梯，重練消錯答對次數 -1 並獎勵 +80 哩數；歸零時徹底消除！
        </span>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <span class="nook-miles-badge" style="background:var(--ac-red-light); color:var(--ac-red-dark); border-color:var(--ac-red-border);">
          待消滅錯題：${totalErrorCount} 題
        </span>
        <button class="ac-btn ac-btn-sm ac-btn-green" onclick="startErrorQuiz()">
          🎯 啟動消錯特訓
        </button>
        <button class="ac-btn ac-btn-sm ac-btn-orange" onclick="loadMockErrors()">
          🧪 載入模擬錯題範例
        </button>
      </div>
    </div>

    <!-- 篩選與排序控制列 -->
    <div class="card-ac" style="padding:10px 14px; margin-bottom:14px; display:flex; flex-wrap:wrap; gap:10px; align-items:center; justify-content:space-between; font-size:0.85rem;">
      <div style="display:flex; flex-wrap:wrap; gap:8px; align-items:center;">
        <span style="font-weight:bold; color:var(--ac-wood);">🔥 熱度階梯：</span>
        <select class="ac-input-clean" style="padding:4px 8px;" onchange="changeErrorFilter('heat', this.value)">
          <option value="all" ${AppState.errorFilterHeat === 'all' ? 'selected' : ''}>全部熱度</option>
          <option value="1" ${AppState.errorFilterHeat === '1' ? 'selected' : ''}>🌱 Level 1 淺黃微瑕 (1次)</option>
          <option value="2" ${AppState.errorFilterHeat === '2' ? 'selected' : ''}>🌼 Level 2 暖橘提醒 (2次)</option>
          <option value="3" ${AppState.errorFilterHeat === '3' ? 'selected' : ''}>🍊 Level 3 深橘警戒 (3次)</option>
          <option value="4" ${AppState.errorFilterHeat === '4' ? 'selected' : ''}>🌶️ Level 4 珊瑚紅危急 (4次)</option>
          <option value="5" ${AppState.errorFilterHeat === '5' ? 'selected' : ''}>🔥 Level 5 紫紅魔王題 (5次+)</option>
        </select>

        <span style="font-weight:bold; color:var(--ac-wood); margin-left:8px;">📚 單元：</span>
        <select class="ac-input-clean" style="padding:4px 8px;" onchange="changeErrorFilter('unit', this.value)">
          <option value="all" ${AppState.errorFilterUnit === 'all' ? 'selected' : ''}>全部單元</option>
          <option value="u1" ${AppState.errorFilterUnit === 'u1' ? 'selected' : ''}>Unit 1 家庭朋友</option>
          <option value="u2" ${AppState.errorFilterUnit === 'u2' ? 'selected' : ''}>Unit 2 休閒愛好</option>
          <option value="u3" ${AppState.errorFilterUnit === 'u3' ? 'selected' : ''}>Unit 3 美食料理</option>
          <option value="rev" ${AppState.errorFilterUnit === 'rev' ? 'selected' : ''}>總複習 Revision</option>
        </select>

        <span style="font-weight:bold; color:var(--ac-wood); margin-left:8px;">🏷️ 題型：</span>
        <select class="ac-input-clean" style="padding:4px 8px;" onchange="changeErrorFilter('type', this.value)">
          <option value="all" ${AppState.errorFilterType === 'all' ? 'selected' : ''}>全部題型</option>
          <option value="ket_exam" ${AppState.errorFilterType === 'ket_exam' ? 'selected' : ''}>🎯 KET 全真考題</option>
          <option value="vocab" ${AppState.errorFilterType === 'vocab' ? 'selected' : ''}>🃏 單字搭配詞</option>
          <option value="mistake" ${AppState.errorFilterType === 'mistake' ? 'selected' : ''}>🪲 常犯錯抓蟲</option>
          <option value="reading" ${AppState.errorFilterType === 'reading' ? 'selected' : ''}>📖 閱讀與寫作</option>
          <option value="listening" ${AppState.errorFilterType === 'listening' ? 'selected' : ''}>🎧 雙角色聽力</option>
        </select>
      </div>

      <div style="display:flex; gap:8px; align-items:center;">
        <span style="font-weight:bold; color:var(--ac-wood);">🔄 排序：</span>
        <select class="ac-input-clean" style="padding:4px 8px;" onchange="changeErrorFilter('sort', this.value)">
          <option value="net" ${AppState.errorSortBy === 'net' ? 'selected' : ''}>淨錯次數 (多➔少)</option>
          <option value="time" ${AppState.errorSortBy === 'time' ? 'selected' : ''}>最新發生時間</option>
        </select>
      </div>
    </div>

    <!-- 測驗彈窗容器 (有測驗時展示) -->
    <div id="error-quiz-modal-container"></div>

    <!-- 錯題清單 -->
    ${errorKeys.length === 0 ? `
      <div class="placeholder-view-box" style="padding:30px;">
        <div class="placeholder-icon">🏝️</div>
        <h3>目前篩選條件下沒有任何累積錯題！</h3>
        <p style="color:var(--ac-wood-light); margin-top:8px;">
          在單字搭配詞闖關、抓蟲特訓或閱寫考場中答錯的題目，會自動沉澱到此熱力本中。<br>
          您也可以點擊上方「🧪 載入模擬錯題範例」一鍵體驗 5 色階梯與消錯重練流程！
        </p>
        <div style="margin-top:16px; display:flex; gap:10px; justify-content:center;">
          <button class="ac-btn ac-btn-green" onclick="loadMockErrors()">🧪 一鍵載入 5 色模擬錯題</button>
          <button class="ac-btn ac-btn-blue" onclick="jumpToPod('vocab_quiz', 'all')">立刻挑戰單字快問快答 ➔</button>
        </div>
      </div>
    ` : `
      <div class="errorbook-list" style="display:flex; flex-direction:column; gap:12px;">
        ${errorKeys.map(key => {
          const item = netErrors[key];
          const heat = getHeatLevel(item.count);
          const unitTag = item.unit ? item.unit.toUpperCase() : 'U1';
          const typeTag = item.itemType === 'ket_exam'
            ? '🎯 KET 全真考題'
            : (item.type === 'vocab' ? '單字搭配詞' : (item.type === 'mistake' ? '常犯錯改錯' : (item.type === 'reading' ? '閱讀理解' : '聽力理解')));
          return `
            <div class="card-ac error-item-card ${heat.cls}" style="padding:14px 18px; border-width:3px; transition:all 0.2s ease;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                  <span class="heat-badge ${heat.cls}">
                    ${heat.icon} ${heat.label}
                  </span>
                  <span class="ac-badge" style="background:var(--ac-blue-light); color:var(--ac-blue-dark); font-weight:800; font-size:0.75rem;">
                    ${unitTag}
                  </span>
                  <span class="ac-badge" style="background:var(--ac-cream); color:var(--ac-wood); font-weight:800; font-size:0.75rem;">
                    ${typeTag}
                  </span>
                  <h4 style="font-size:1rem; font-weight:900; margin:0; color:var(--ac-wood);">${item.title || key}</h4>
                </div>
                <span class="error-count-pill" style="font-weight:900; font-size:0.85rem; padding:3px 10px; border-radius:12px; background:rgba(0,0,0,0.06);">
                  淨錯次數：${item.count} 次
                </span>
              </div>

              ${item.prompt ? `
                <div style="background:rgba(255,255,255,0.7); padding:8px 12px; border-radius:6px; margin-bottom:8px; font-weight:600; font-size:0.92rem; color:var(--ac-wood);">
                  題目：${item.prompt}
                </div>
              ` : ''}

              <div style="font-size:0.86rem; line-height:1.5; margin-bottom:8px;">
                <div style="color:var(--ac-red-dark); font-weight:bold;">❌ 曾選錯答案：${item.wrongAnswer || '未填寫 / 選錯'}</div>
                <div style="color:var(--ac-green-dark); font-weight:bold;">✅ 正確答案：${item.correctAnswer || item.answer || ''}</div>
                <div style="color:var(--ac-wood); margin-top:4px;">💡 文法考點：${item.rule || item.explanation || '依據劍橋官方核心語法規則。'}</div>
              </div>

              <div style="display:flex; justify-content:flex-end; gap:8px; align-items:center; margin-top:8px;">
                <button class="ac-btn ac-btn-sm ac-btn-cream" onclick="playVocabAudio('${escapeJsStr(item.correctAnswer || item.rule || '')}', 1.0)">
                  🔊 朗讀詳解
                </button>
                <button class="ac-btn ac-btn-sm ac-btn-green" onclick="startErrorQuiz('${key}')">
                  ⚡ 立即重練消錯
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

window.changeErrorFilter = function(filterType, val) {
  SoundFX.playClick();
  if (filterType === 'heat') AppState.errorFilterHeat = val;
  if (filterType === 'unit') AppState.errorFilterUnit = val;
  if (filterType === 'type') AppState.errorFilterType = val;
  if (filterType === 'sort') AppState.errorSortBy = val;
  renderErrorBookView();
};

window.loadMockErrors = function() {
  SoundFX.playClick();
  const acc = AppState.accountData;
  if (!acc.netErrors) acc.netErrors = {};

  const mockItems = [
    {
      id: 'mock_u1_have_got',
      unit: 'u1',
      type: 'vocab',
      title: 'Unit 1 have got / has got 搭配詞',
      prompt: 'She ____ got two sisters and a pet rabbit.',
      options: ['has', 'have', 'is'],
      correctAnswer: 'has',
      wrongAnswer: 'have',
      count: 1,
      rule: '第三人稱單數主詞 (She/He/It) 必須搭配 has got。',
      timestamp: Date.now() - 3600000
    },
    {
      id: 'mock_u1_look_forward',
      unit: 'u1',
      type: 'mistake',
      title: 'Unit 1 常犯錯：look forward to + V-ing',
      prompt: 'I look forward to ____ (hear) from you soon.',
      options: ['hearing', 'hear', 'heard'],
      correctAnswer: 'hearing',
      wrongAnswer: 'see',
      count: 2,
      rule: 'look forward to 中的 to 是介系詞，後面必須接動名詞 (V-ing)。',
      timestamp: Date.now() - 7200000
    },
    {
      id: 'mock_u2_adverb_position',
      unit: 'u2',
      type: 'mistake',
      title: 'Unit 2 頻率副詞位置改錯',
      prompt: 'He plays always tennis on Saturday mornings. (改錯)',
      options: ['He always plays tennis on Saturday mornings.', 'He plays tennis always on Saturday mornings.', 'Always he plays tennis on Saturday mornings.'],
      correctAnswer: 'He always plays tennis on Saturday mornings.',
      wrongAnswer: 'He plays tennis always on Saturday mornings.',
      count: 3,
      rule: '頻率副詞 (always, usually, often) 必須放在一般動詞 (plays) 之前。',
      timestamp: Date.now() - 10800000
    },
    {
      id: 'mock_u2_rw5_open_cloze',
      unit: 'u2',
      type: 'reading',
      title: 'Unit 2 Part 5 開放式填空介系詞',
      prompt: 'Thank you ____ inviting me to your house last weekend.',
      options: ['for', 'to', 'with'],
      correctAnswer: 'for',
      wrongAnswer: 'to',
      count: 4,
      rule: '感謝某事固定句型為 Thank you for + V-ing / 名詞。',
      timestamp: Date.now() - 14400000
    },
    {
      id: 'mock_u3_past_spelling',
      unit: 'u3',
      type: 'vocab',
      title: 'Unit 3 過去式動詞雙寫規則 (魔王題)',
      prompt: 'Yesterday the rain ____ (stop) at 5 o\'clock.',
      options: ['stopped', 'stoped', 'stoping'],
      correctAnswer: 'stopped',
      wrongAnswer: 'stoped',
      count: 5,
      rule: '單音節短母音+單子音結尾之動詞，字尾須雙寫子音再加 -ed (stop -> stopped)。',
      timestamp: Date.now() - 18000000
    }
  ];

  mockItems.forEach(item => {
    acc.netErrors[item.id] = item;
  });

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '✨ 已載入 5 色階梯模擬錯題！');
  renderErrorBookView();
};

window.startErrorQuiz = function(targetKey) {
  SoundFX.playClick();
  const netErrors = AppState.accountData.netErrors || {};
  let keys = Object.keys(netErrors).filter(k => netErrors[k].count > 0);

  if (keys.length === 0) {
    alert('目前沒有累積錯題！可點擊「🧪 載入模擬錯題範例」進行測試。');
    return;
  }

  let currentKey = targetKey && netErrors[targetKey] ? targetKey : keys[0];
  const item = netErrors[currentKey];

  // KET 全真題庫錯題直接導回「全真模擬考場」原題卡片完整重練（含完整文章/圖片/音檔/四維詳解）
  if (item && item.itemType === 'ket_exam' && typeof window.jumpToArenaByCode === 'function') {
    window.jumpToArenaByCode(currentKey);
    return;
  }

  const heat = getHeatLevel(item.count);

  const modalContainer = document.getElementById('error-quiz-modal-container');
  if (!modalContainer) return;

  const options = item.options && item.options.length ? item.options : [item.correctAnswer, item.wrongAnswer || 'none of above', 'other'];
  const shuffledOptions = shuffleArray([...options]);

  modalContainer.innerHTML = `
    <div class="error-quiz-modal ${heat.cls}" id="active-error-modal">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:2px solid var(--ac-wood-border); padding-bottom:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="heat-badge ${heat.cls}">${heat.icon} ${heat.label}</span>
          <h4 style="margin:0; font-size:1.05rem; font-weight:900; color:var(--ac-wood);">🎯 錯題消錯特訓：${item.title}</h4>
        </div>
        <button class="ac-btn-icon" onclick="closeErrorQuizModal()">✕ 關閉</button>
      </div>

      <div style="font-size:0.95rem; font-weight:bold; margin-bottom:14px; line-height:1.5;">
        ${item.prompt || '請選出正確答案以消除此錯題：'}
      </div>

      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;" id="quiz-option-list">
        ${shuffledOptions.map((opt, i) => `
          <button class="ac-btn ac-btn-cream quiz-choice-btn" style="text-align:left; padding:10px 14px; font-size:0.95rem;" onclick="submitErrorQuiz('${currentKey}', '${escapeJsStr(opt)}')">
            ${String.fromCharCode(65 + i)}. ${opt}
          </button>
        `).join('')}
      </div>

      <div id="quiz-feedback-box" style="display:none; padding:10px 14px; border-radius:8px; margin-top:10px;"></div>
    </div>
  `;
  modalContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

window.closeErrorQuizModal = function() {
  SoundFX.playClick();
  const c = document.getElementById('error-quiz-modal-container');
  if (c) c.innerHTML = '';
  renderErrorBookView();
};

window.submitErrorQuiz = function(errorKey, selectedAns) {
  const acc = AppState.accountData;
  const item = acc.netErrors[errorKey];
  if (!item) return;

  const fb = document.getElementById('quiz-feedback-box');
  const modal = document.getElementById('active-error-modal');
  const isCorrect = (selectedAns || '').trim().toLowerCase() === (item.correctAnswer || '').trim().toLowerCase();

  if (isCorrect) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🎉 答對了！淨錯 -1');
    rewardMiles(80);
    item.count = Math.max(0, item.count - 1);
    const cleared = item.count === 0;
    if (cleared) {
      delete acc.netErrors[errorKey];
    }
    AccountManager.saveAccount(AppState.currentAccount, acc);
    updateHeaderDisplay();

    if (fb) {
      fb.style.display = 'block';
      fb.style.background = 'var(--ac-green-light)';
      fb.style.color = 'var(--ac-green-dark)';
      fb.style.border = '2px solid var(--ac-green-border)';
      fb.innerHTML = `
        <div style="font-weight:900; font-size:1rem; margin-bottom:4px;">
          ${cleared ? '🎉 太棒了！此錯題已完全歸零消滅！' : `👏 答對了！淨錯次數降為 ${item.count} 次！`}
        </div>
        <div style="font-size:0.85rem; line-height:1.4;">
          💡 規則解析：${item.rule || '掌握正確文法，繼續加油！'}<br>
          🎁 獲得哩數獎勵：<strong>+80 哩數</strong>
        </div>
        <div style="margin-top:10px; display:flex; gap:8px;">
          <button class="ac-btn ac-btn-sm ac-btn-green" onclick="closeErrorQuizModal()">完成特訓</button>
          <button class="ac-btn ac-btn-sm ac-btn-blue" onclick="startErrorQuiz()">繼續特訓下一題 ➔</button>
        </div>
      `;
    }
  } else {
    SoundFX.playWrong();
    if (modal) {
      modal.classList.add('ac-shake');
      setTimeout(() => modal.classList.remove('ac-shake'), 500);
    }
    item.count = item.count + 1;
    AccountManager.saveAccount(AppState.currentAccount, acc);
    updateHeaderDisplay();

    if (fb) {
      fb.style.display = 'block';
      fb.style.background = 'var(--ac-red-light)';
      fb.style.color = 'var(--ac-red-dark)';
      fb.style.border = '2px solid var(--ac-red-border)';
      fb.innerHTML = `
        <div style="font-weight:900; font-size:1rem; margin-bottom:4px;">
          ❌ 哎呀答錯了！淨錯升為 ${item.count} 次 (${getHeatLevel(item.count).label})
        </div>
        <div style="font-size:0.85rem; line-height:1.4;">
          ✅ 正確答案為：<strong>${item.correctAnswer}</strong><br>
          💡 關鍵考點：${item.rule || '請複習此處文法規則！'}
        </div>
        <div style="margin-top:10px;">
          <button class="ac-btn ac-btn-sm ac-btn-cream" onclick="closeErrorQuizModal()">先記下來，稍後重練</button>
        </div>
      `;
    }
  }
};

window.practiceErrorItem = function(errorKey) {
  startErrorQuiz(errorKey);
};

window.resolveSingleError = function(errorKey) {
  startErrorQuiz(errorKey);
};

// =============================================================================
// 視圖 6~9：Phase 4 & 5 預留掛載點 (Placeholders)
// =============================================================================
// =============================================================================
// 視圖 6：📖 閱讀與寫作考場 (Reading & Writing 50:50 雙欄考場)
// =============================================================================
function renderReadingWritingPod() {
  const container = document.getElementById('view-rw');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const rwMode = AppState.rwMode || 'readingPart2';

  // 頂部子題型導航列
  const toolbarHtml = `
    <div class="rw-toolbar">
      <div class="rw-nav-pills">
        <button class="rw-nav-btn ${rwMode === 'readingPart2' ? 'active' : ''}" onclick="switchRwMode('readingPart2')">
          📖 Part 2 三人對話 (U1)
        </button>
        <button class="rw-nav-btn ${rwMode === 'readingPart3' ? 'active' : ''}" onclick="switchRwMode('readingPart3')">
          📖 Part 3 Kris 專訪 (U2)
        </button>
        <button class="rw-nav-btn ${rwMode === 'readingPart4' ? 'active' : ''}" onclick="switchRwMode('readingPart4')">
          📖 Part 4 Moussa 克漏字 (U3)
        </button>
        <button class="rw-nav-btn ${rwMode === 'readingWritingPart5' ? 'active' : ''}" onclick="switchRwMode('readingWritingPart5')">
          ✍️ Part 5 開放式填空 (U2)
        </button>
        <button class="rw-nav-btn ${rwMode === 'writingPart7' ? 'active' : ''}" onclick="switchRwMode('writingPart7')">
          📝 Part 7 三格圖故事雙軌 (U1/U3)
        </button>
        <button class="rw-nav-btn ${rwMode === 'grammarVocabDrills' ? 'active' : ''}" onclick="switchRwMode('grammarVocabDrills')">
          📚 課本文法與詞彙特訓
        </button>
        <button class="rw-nav-btn ${rwMode === 'revision' ? 'active' : ''}" onclick="switchRwMode('revision')">
          🏆 Revision 總複習闖關 (p.78~80, 71分)
        </button>
      </div>
    </div>
  `;

  let contentHtml = '';

  // 1. Reading Part 2 (Unit 1: Three Teenagers Talking About Their Families)
  if (rwMode === 'readingPart2') {
    const u1 = data.units[0];
    const rp2 = u1.exercises.readingPart2;

    const leftPaneHtml = `
      <div class="pane-left">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${rp2.title}</h3>
        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">🦉 傅達解題密技</span>
          <p style="font-size:0.8rem; line-height:1.4;">${rp2.examTip}</p>
        </div>
        <img src="${rp2.image}" alt="Three Teenagers" class="rw-article-image">

        <div class="rw-article-card" id="article-text-a">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:var(--ac-blue-dark); font-size:1.05rem;">A. ${rp2.texts.leo.name}</strong>
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(rp2.texts.leo.content)}', 1.0)">🔊 朗讀</button>
          </div>
          <p>${rp2.texts.leo.content}</p>
        </div>

        <div class="rw-article-card" id="article-text-b">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:var(--ac-green-dark); font-size:1.05rem;">B. ${rp2.texts.bastian.name}</strong>
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(rp2.texts.bastian.content)}', 1.0)">🔊 朗讀</button>
          </div>
          <p>${rp2.texts.bastian.content}</p>
        </div>

        <div class="rw-article-card" id="article-text-c">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <strong style="color:var(--ac-yellow-dark); font-size:1.05rem;">C. ${rp2.texts.callum.name}</strong>
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(rp2.texts.callum.content)}', 1.0)">🔊 朗讀</button>
          </div>
          <p>${rp2.texts.callum.content}</p>
        </div>
      </div>
    `;

    const rightPaneHtml = `
      <div class="pane-right">
        <h4 style="font-size:1.05rem; font-weight:900; margin-bottom:12px;">請依據左側短文回答 7 道配對題：</h4>
        ${rp2.questions.map((q, idx) => {
          const ansKey = `rp2_q_${q.number}`;
          const currentAns = AppState.rwAnswers[ansKey];
          const isAnswered = currentAns !== undefined;
          const isCorrect = isAnswered && currentAns.selected === q.answer;

          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="rw-question-header">
                <strong>Question ${q.number}</strong>
                ${isAnswered ? (isCorrect ? '<span style="color:var(--ac-green-dark); font-weight:900;">✅ 正確 (+50哩)</span>' : '<span style="color:var(--ac-red-dark); font-weight:900;">❌ 錯誤</span>') : ''}
              </div>
              <p style="font-weight:800; font-size:0.92rem; margin-bottom:10px;">${q.question}</p>

              <div class="rw-choices-grid">
                ${q.options.map(opt => {
                  let btnClass = 'rw-choice-btn';
                  if (isAnswered) {
                    if (opt.label === q.answer) btnClass += ' correct';
                    else if (opt.label === currentAns.selected) btnClass += ' wrong';
                  }
                  return `
                    <button class="${btnClass}" onclick="checkReadingPart2Answer(${q.number}, '${opt.label}', '${q.answer}', '${escapeJsStr(q.question)}')">
                      <strong>${opt.label}.</strong> ${opt.text}
                    </button>
                  `;
                }).join('')}
              </div>

              ${isAnswered ? `
                <div class="rw-explanation-box">
                  <div style="font-weight:900; color:var(--ac-green-dark); margin-bottom:4px;">📍 原文定位句：</div>
                  <blockquote style="font-style:italic; margin-bottom:6px;">"${q.locationQuote}"</blockquote>
                  <div>💡 <strong>解析：</strong>${q.explanation}</div>
                  ${q.trapAnalysis ? `<div style="margin-top:4px; color:#A01A40;">⚠️ <strong>陷阱透視：</strong>${q.trapAnalysis}</div>` : ''}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    contentHtml = `
      <div class="split-pane-container">
        ${leftPaneHtml}
        ${rightPaneHtml}
      </div>
    `;
  }

  // 2. Reading Part 3 (Unit 2: Young Artist Kris Davies Interview)
  else if (rwMode === 'readingPart3') {
    const u2 = data.units[1];
    const rp3 = u2.exercises.readingPart3;
    const task = rp3.exam_task;

    const leftPaneHtml = `
      <div class="pane-left">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${task.title}</h3>
        <img src="assets/images/u2/u2_hasan_bedroom.jpg" alt="Kris Davies" class="rw-article-image">
        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">🧑‍🎨 人物專訪</span>
          <p style="font-size:0.82rem;">${task.intro}</p>
        </div>

        ${Object.keys(task.interview).map(k => `
          <div class="rw-article-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <strong style="color:var(--ac-blue-dark);">${task.interview[k].title || k.toUpperCase()}</strong>
              <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(task.interview[k].text)}', 1.0)">🔊 朗讀</button>
            </div>
            <p>${task.interview[k].text}</p>
          </div>
        `).join('')}
      </div>
    `;

    const rightPaneHtml = `
      <div class="pane-right">
        <!-- 同義詞暖身小卡 -->
        <div class="word-bank-container">
          <strong style="color:#B25E00; font-size:0.85rem;">🎯 專訪核心同義詞暖身 (Ex 1 Synonyms)：</strong>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; font-size:0.78rem;">
            ${(rp3.ex1_synonyms && rp3.ex1_synonyms.pairs) ? rp3.ex1_synonyms.pairs.map(p => `
              <div style="background:#FFF; padding:4px 8px; border-radius:6px; border:1px solid var(--ac-yellow-border);">
                <strong>${p.word}</strong> = ${p.synonym} (${p.zh})
              </div>
            `).join('') : ''}
          </div>
        </div>

        <h4 style="font-size:1.05rem; font-weight:900; margin:12px 0;">5 道三選一閱讀理解題目：</h4>
        ${task.questions.map((q, idx) => {
          const ansKey = `rp3_q_${q.number}`;
          const currentAns = AppState.rwAnswers[ansKey];
          const isAnswered = currentAns !== undefined;
          const isCorrect = isAnswered && currentAns.selected === q.answer;

          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="rw-question-header">
                <strong>Question ${q.number}</strong>
                ${isAnswered ? (isCorrect ? '<span style="color:var(--ac-green-dark); font-weight:900;">✅ 正確 (+50哩)</span>' : '<span style="color:var(--ac-red-dark); font-weight:900;">❌ 錯誤</span>') : ''}
              </div>
              <p style="font-weight:800; font-size:0.92rem; margin-bottom:10px;">${q.question}</p>

              <div class="rw-choices-grid">
                ${Object.keys(q.options).map(key => {
                  let btnClass = 'rw-choice-btn';
                  if (isAnswered) {
                    if (key === q.answer) btnClass += ' correct';
                    else if (key === currentAns.selected) btnClass += ' wrong';
                  }
                  return `
                    <button class="${btnClass}" onclick="checkReadingPart3Answer(${q.number}, '${key}', '${q.answer}', '${escapeJsStr(q.question)}')">
                      <strong>${key}.</strong> ${q.options[key]}
                    </button>
                  `;
                }).join('')}
              </div>

              ${isAnswered ? `
                <div class="rw-explanation-box">
                  <div style="font-weight:900; color:var(--ac-green-dark); margin-bottom:4px;">📍 定位線索：</div>
                  <blockquote style="font-style:italic; margin-bottom:6px;">"${q.quote}"</blockquote>
                  <div>💡 <strong>正解理由：</strong>${q.rationale}</div>
                  ${q.distractorAnalysis ? `
                    <div style="margin-top:6px; color:#A01A40;">
                      <strong>⚠️ 干擾陷阱透視：</strong><br>
                      ${Object.keys(q.distractorAnalysis).map(dk => `• ${dk}: ${q.distractorAnalysis[dk]}<br>`).join('')}
                    </div>
                  ` : ''}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    contentHtml = `
      <div class="split-pane-container">
        ${leftPaneHtml}
        ${rightPaneHtml}
      </div>
    `;
  }

  // 3. Reading Part 4 (Unit 3: Moussa's Village Life in Mali)
  else if (rwMode === 'readingPart4') {
    const u3 = data.units[2];
    const rp4 = u3.exercises.readingPart4;
    const task = rp4.examTask;

    // 將空格 (1) ~ (6) 高亮化，已答對者顯示填入單字
    let formattedArticle = task.article;
    task.questions.forEach(q => {
      const ansKey = `rp4_q_${q.number}`;
      const isFilled = AppState.rwAnswers[ansKey] && AppState.rwAnswers[ansKey].selected === q.answer;
      const wordText = isFilled ? `(${q.number}) ${q.options[q.answer]}` : `(${q.number}) [____]`;
      const spanClass = isFilled ? 'rw-gap-blank filled' : 'rw-gap-blank';
      formattedArticle = formattedArticle.replace(new RegExp(`\\(${q.number}\\)\\s*\\[?\\w*\\.?\\]?`, 'g'), `<span class="${spanClass}">${wordText}</span>`);
    });

    const leftPaneHtml = `
      <div class="pane-left">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${task.title}</h3>
        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">🌾 西非鄉村生活</span>
          <p style="font-size:0.82rem;">${task.instruction}</p>
        </div>

        <div class="rw-article-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--ac-green-dark);">Moussa's Story (Mali, West Africa)</strong>
            <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(task.article)}', 1.0)">🔊 朗讀全文</button>
          </div>
          <div style="line-height:1.8;">${formattedArticle}</div>
        </div>
      </div>
    `;

    const rightPaneHtml = `
      <div class="pane-right">
        <!-- 暖身詞彙辨析 -->
        <div class="word-bank-container">
          <strong style="color:#B25E00; font-size:0.85rem;">🍳 料理動詞與名詞暖身辨析 (Vocab Preparation)：</strong>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; font-size:0.76rem;">
            ${rp4.vocabularyPreparation ? rp4.vocabularyPreparation.map(vp => `
              <div style="background:#FFF; padding:4px 8px; border-radius:6px; border:1px solid var(--ac-yellow-border);">
                <strong>${vp.item}</strong> ➔ ${vp.answer}
              </div>
            `).join('') : ''}
          </div>
        </div>

        <h4 style="font-size:1.05rem; font-weight:900; margin:12px 0;">6 道三選一克漏字測驗：</h4>
        ${task.questions.map(q => {
          const ansKey = `rp4_q_${q.number}`;
          const currentAns = AppState.rwAnswers[ansKey];
          const isAnswered = currentAns !== undefined;
          const isCorrect = isAnswered && currentAns.selected === q.answer;

          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="rw-question-header">
                <strong>Gap (${q.number})</strong>
                ${isAnswered ? (isCorrect ? '<span style="color:var(--ac-green-dark); font-weight:900;">✅ 正確 (+50哩)</span>' : '<span style="color:var(--ac-red-dark); font-weight:900;">❌ 錯誤</span>') : ''}
              </div>

              <div class="rw-choices-grid">
                ${Object.keys(q.options).map(key => {
                  let btnClass = 'rw-choice-btn';
                  if (isAnswered) {
                    if (key === q.answer) btnClass += ' correct';
                    else if (key === currentAns.selected) btnClass += ' wrong';
                  }
                  return `
                    <button class="${btnClass}" onclick="checkReadingPart4Answer(${q.number}, '${key}', '${q.answer}', '${q.options[q.answer]}')">
                      <strong>${key}.</strong> ${q.options[key]}
                    </button>
                  `;
                }).join('')}
              </div>

              ${isAnswered ? `
                <div class="rw-explanation-box">
                  <div style="font-weight:900; color:var(--ac-green-dark); margin-bottom:4px;">🔗 黃金搭配詞：${q.collocation}</div>
                  <div>💡 <strong>文法考點：</strong>${q.explanation}</div>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;

    contentHtml = `
      <div class="split-pane-container">
        ${leftPaneHtml}
        ${rightPaneHtml}
      </div>
    `;
  }

  // 4. Reading & Writing Part 5 Open Cloze (Unit 2: Hasan's Email)
  else if (rwMode === 'readingWritingPart5') {
    const u2 = data.units[1];
    const rw5 = u2.exercises.readingWritingPart5.exam_task;

    const wordBank = ['have', 'Their', 'to', 'a', 'we', 'about', 'do', 'for', 'with', 'would', 'is', 'they'];

    const leftPaneHtml = `
      <div class="pane-left">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${rw5.title}</h3>
        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">✉️ 書信開放填空</span>
          <p style="font-size:0.82rem;">${rw5.instructions}</p>
        </div>

        <div class="rw-article-card" style="white-space:pre-line; line-height:1.7;">
          <strong>From: ${rw5.email.from}</strong>
          <strong>Subject: ${rw5.email.subject}</strong>
          <hr style="margin:8px 0; border:none; border-top:1px dashed var(--ac-wood-border);">
          ${rw5.email.text}
        </div>
      </div>
    `;

    const rightPaneHtml = `
      <div class="pane-right">
        <!-- 💡 iPad 輔助字庫膠囊列 (作答前隱藏劇透，點擊批改後才解鎖顯示) -->
        ${AppState.rwAnswers['rw5_submitted'] ? `
          <div class="word-bank-container">
            <strong style="color:#B25E00; font-size:0.85rem;">💡 iPad 輔助字庫膠囊列 (批改後答案字庫核對)：</strong>
            <div class="word-bank-pills">
              ${wordBank.map(w => `
                <button class="word-pill" onclick="insertWordIntoActiveGap('${w}')">${w}</button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <h4 style="font-size:1.05rem; font-weight:900; margin-bottom:10px;">請填寫 6 個開放空格 (Gap 1 ~ 6)：</h4>
        ${rw5.gaps.filter(g => !g.isExample).map(g => {
          const ansKey = `rw5_gap_${g.gap}`;
          const currentVal = AppState.rwAnswers[ansKey] || '';

          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="cloze-input-row">
                <span style="font-weight:900; width:65px;">Gap (${g.gap}):</span>
                <input type="text" id="input-${ansKey}" class="cloze-input-box" value="${currentVal}" placeholder="輸入單字..." onfocus="AppState.activeGapInputId = 'input-${ansKey}'">
                <button type="button" class="btn-see-answer" onclick="revealLegacyGapAnswer('rw5', '${ansKey}', '${escapeJsStr(g.acceptedVariants.join(' / '))}', '${escapeJsStr(g.explanation || '')}', '${escapeJsStr(g.commonTrap || '')}', 'u2', 'Part 5 開放填空 Gap (${g.gap})')">👀 看答案</button>
                ${AppState.rwAnswers['rw5_submitted'] ? `<small style="color:var(--ac-wood-light);">提示線索: "${g.clue}"</small>` : ''}
              </div>

              <div id="result-${ansKey}" style="display:none;" class="rw-explanation-box">
                <div>✅ 正確答案：<strong>${g.acceptedVariants.join(' / ')}</strong> (${g.wordType})</div>
                <div>💡 <strong>文法定位：</strong>${g.explanation}</div>
                <div style="color:#A01A40; margin-top:2px;">⚠️ <strong>常見陷阱：</strong>${g.commonTrap}</div>
                <div id="selfgrade-${ansKey}" class="selfgrade-actions" style="margin-top:8px;">
                  <button type="button" class="btn-self-ok" onclick="selfGradeLegacyGap('rw5', '${ansKey}', true, '${escapeJsStr(g.acceptedVariants.join(' / '))}', '${escapeJsStr(g.explanation || '')}', 'u2', 'Part 5 開放填空 Gap (${g.gap})')">⭕ 我答對</button>
                  <button type="button" class="btn-self-bad" onclick="selfGradeLegacyGap('rw5', '${ansKey}', false, '${escapeJsStr(g.acceptedVariants.join(' / '))}', '${escapeJsStr(g.explanation || '')}', 'u2', 'Part 5 開放填空 Gap (${g.gap})')">❌ 我答錯</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}

        <button class="ac-btn ac-btn-green" style="width:100%; margin-top:10px;" onclick="checkRwPart5Answers()">
          ✅ 批改開放填空並看解析 (+100哩)
        </button>
      </div>
    `;

    contentHtml = `
      <div class="split-pane-container">
        ${leftPaneHtml}
        ${rightPaneHtml}
      </div>
    `;
  }

  // 5. Writing Part 7 3-Picture Story Dual-Track Trainer (Unit 1 & Unit 3)
  else if (rwMode === 'writingPart7') {
    const selectedUnitId = AppState.rwWritingUnit || 'u1';
    const targetUnit = selectedUnitId === 'u1' ? data.units[0] : data.units[2];
    const wp7 = targetUnit.exercises.writingPart7;
    const writingTrack = AppState.rwWritingTrack || 'blocks';

    const leftPaneHtml = `
      <div class="pane-left">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:1.15rem; font-weight:900;">${wp7.title}</h3>
          <div style="display:flex; gap:4px;">
            <button class="ac-btn-icon ${selectedUnitId === 'u1' ? 'active' : ''}" onclick="switchWritingUnit('u1')">Unit 1 上學趕車</button>
            <button class="ac-btn-icon ${selectedUnitId === 'u3' ? 'active' : ''}" onclick="switchWritingUnit('u3')">Unit 3 花園烤肉</button>
          </div>
        </div>

        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">🎨 寫作考題要求</span>
          <p style="font-size:0.82rem;">Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.</p>
        </div>

        ${selectedUnitId === 'u1' ? `
          <img src="assets/images/u1/u1_writing_part7_exam.jpg" alt="Unit 1 3-Picture Exam" class="rw-article-image">
          <img src="assets/images/u1/u1_writing_part7_bookshop.jpg" alt="Unit 1 Bookshop Story" class="rw-article-image">
        ` : `
          <img src="assets/images/u3/u3_writing_part7_picnic_rain.jpg" alt="Unit 3 BBQ Rain Story" class="rw-article-image">
          <img src="assets/images/u3/u3_writing_boy_baking.jpg" alt="Unit 3 Boy Baking" class="rw-article-image">
        `}
      </div>
    `;

    const rightPaneHtml = `
      <div class="pane-right">
        <!-- 雙軌切換按鈕 -->
        <div class="writing-track-tabs">
          <button class="ac-btn ac-btn-sm ${writingTrack === 'blocks' ? 'ac-btn-blue' : ''}" onclick="switchWritingTrack('blocks')">
            🧱 軌跡 A：iPad 句型積木組裝器
          </button>
          <button class="ac-btn ac-btn-sm ${writingTrack === 'rubric' ? 'ac-btn-green' : ''}" onclick="switchWritingTrack('rubric')">
            📋 軌跡 B：3大評分檢核 + 13/15盾範文
          </button>
        </div>

        ${writingTrack === 'blocks' ? `
          <!-- 軌跡 A：句型積木組裝器 -->
          <div class="writing-block-step">
            <strong>1. Picture 1 (背景起因)：</strong>
            <div class="block-chip-selector">
              <button class="block-chip" onclick="selectStoryBlock('p1', 'One morning, Jack was sitting on his bed in his bedroom, listening to music.')">
                One morning, Jack was sitting on his bed listening to music.
              </button>
              <button class="block-chip" onclick="selectStoryBlock('p1', 'Last Saturday, Tom and his family were having a wonderful barbecue in the garden.')">
                Last Saturday, Tom and his family were having a barbecue in the garden.
              </button>
            </div>
          </div>

          <div class="writing-block-step">
            <strong>2. Picture 2 (發展轉折 + 連接詞)：</strong>
            <div class="block-chip-selector">
              <button class="block-chip" onclick="selectStoryBlock('p2', 'Suddenly, his dad pointed at the clock because it was already 8.30! His sister quickly finished her breakfast.')">
                Suddenly, his dad pointed at the clock because it was late!
              </button>
              <button class="block-chip" onclick="selectStoryBlock('p2', 'Suddenly, it started raining heavily, so they quickly grabbed their food and ran into the house.')">
                Suddenly, it began to rain heavily, so they ran into the kitchen.
              </button>
            </div>
          </div>

          <div class="writing-block-step">
            <strong>3. Picture 3 (結果收尾)：</strong>
            <div class="block-chip-selector">
              <button class="block-chip" onclick="selectStoryBlock('p3', 'Finally, they rushed out of the house and his sister ran along the street, waving to catch the bus.')">
                Finally, they rushed out and his sister waved her hand to catch the bus.
              </button>
              <button class="block-chip" onclick="selectStoryBlock('p3', 'In the kitchen, his father cooked the food in the oven and everyone enjoyed the meal together.')">
                In the kitchen, his father finished baking sausages in the oven and ate together.
              </button>
            </div>
          </div>

          <div style="margin-top:12px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <strong style="font-size:0.92rem;">📝 合成完整故事草稿：</strong>
              <span id="story-word-counter" class="word-count-badge need-more">字數：0 字 (未達 35 字)</span>
            </div>
            <textarea id="assembled-story-text" class="story-output-box" placeholder="點擊上方積木或直接在此手寫故事..." oninput="updateStoryWordCount(this.value)"></textarea>
            <div style="display:flex; gap:8px; margin-top:8px;">
              <button class="ac-btn ac-btn-sm ac-btn-green" onclick="playVocabAudio(document.getElementById('assembled-story-text').value, 1.0)">🔊 朗讀故事</button>
              <button class="ac-btn ac-btn-sm" onclick="VisualFX.burstParticles(window.innerWidth/2, window.innerHeight/2, '🎉 故事組裝完成! +100哩'); SoundFX.playFanfare();">🎉 提交寫作任務 (+100哩)</button>
            </div>
          </div>
        ` : `
          <!-- 軌跡 B：3大評分檢核表 + 13盾 vs 15盾範文 -->
          <div class="rubric-checklist-card">
            <h4 style="font-weight:900; color:var(--ac-green-dark); margin-bottom:8px;">📋 劍橋官方 Writing Part 7 評分標準自評表 (rubricChecklist)：</h4>
            <div style="font-size:0.82rem; line-height:1.6;">
              ${(() => {
                const rubricChecklist = wp7.rubricChecklist || {};
                return Object.keys(rubricChecklist).map(catKey => {
                  const cat = rubricChecklist[catKey];
                  const catName = cat.name || catKey.toUpperCase();
                  const catScore = cat.maxScore || cat.maxMarks || 5;
                  const items = cat.requirements ? cat.requirements : [cat.criteria || '符合要求'];
                  return `
                    <div style="margin-bottom:6px;">
                      <strong>${catName} (${catScore}分)：</strong>
                      ${items.map(req => `<label style="display:block; margin-left:8px;"><input type="checkbox"> ${req}</label>`).join('')}
                    </div>
                  `;
                }).join('');
              })()}
            </div>
          </div>

          <div class="sample-answers-grid">
            <!-- 13 盾保底範文 -->
            <div class="sample-answer-card merit">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="color:var(--ac-blue-dark);">🛡️ 13 盾保底範文 (Merit)</strong>
                <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(selectedUnitId === 'u1' ? wp7.sampleAnswers.guaranteed13Shields.text : (wp7.sampleAnswers.pass13 || wp7.sampleAnswers.merit13))}', 1.0)">🔊 朗讀</button>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; margin-bottom:8px;">
                "${selectedUnitId === 'u1' ? wp7.sampleAnswers.guaranteed13Shields.text : (wp7.sampleAnswers.pass13 || wp7.sampleAnswers.merit13)}"
              </p>
              <small style="color:var(--ac-wood-light);">
                ${selectedUnitId === 'u1' ? wp7.sampleAnswers.guaranteed13Shields.breakdown : '43~46字，結構精簡，時態統一使用過去式，穩穩拿 13 盾。'}
              </small>
            </div>

            <!-- 15 盾滿分範文 -->
            <div class="sample-answer-card distinction">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong style="color:var(--ac-green-dark);">🛡️ 15 盾滿分卓越範文 (Distinction)</strong>
                <button class="ac-btn-icon" onclick="playVocabAudio('${escapeJsStr(selectedUnitId === 'u1' ? wp7.sampleAnswers.fullMarks15Shields.text : wp7.sampleAnswers.distinction15)}', 1.0)">🔊 朗讀</button>
              </div>
              <p style="font-size:0.85rem; line-height:1.5; margin-bottom:8px;">
                "${selectedUnitId === 'u1' ? wp7.sampleAnswers.fullMarks15Shields.text : wp7.sampleAnswers.distinction15}"
              </p>
              <small style="color:var(--ac-wood-light);">
                ${selectedUnitId === 'u1' ? wp7.sampleAnswers.fullMarks15Shields.breakdown : '61~64字，生動修飾語、過去進行式與轉折連接詞交互運用，展現 Distinction 最高水平！'}
              </small>
            </div>
          </div>
        `}
      </div>
    `;

    contentHtml = `
      <div class="split-pane-container">
        ${leftPaneHtml}
        ${rightPaneHtml}
      </div>
    `;
  }

  // 6. 課本文法與詞彙特訓 (Grammar & Vocab Drills)
  else if (rwMode === 'grammarVocabDrills') {
    contentHtml = `
      <div class="pane-right" style="width:100%; height:100%; overflow-y:auto;">
        <h3 style="font-size:1.2rem; font-weight:900; margin-bottom:12px;">📚 Unit 1 ~ Unit 3 課本文法與詞彙交互特訓</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:14px;">
          <!-- Drill 1: have got -->
          <div class="ac-card">
            <h4 style="font-weight:900; margin-bottom:6px;">Unit 1: have got 句型規則</h4>
            <p style="font-size:0.85rem; line-height:1.5;">
              • I / You / We / They ➔ <strong>have got ('ve got)</strong><br>
              • He / She / It ➔ <strong>has got ('s got)</strong><br>
              • 否定句：haven't got / hasn't got<br>
              • 疑問句：Have you got...? / Has she got...?
            </p>
            <button class="ac-btn ac-btn-sm ac-btn-green" style="margin-top:8px;" onclick="SoundFX.playCorrect(); VisualFX.burstParticles(window.innerWidth/2, window.innerHeight/2, '熟練 +50哩!');">精熟核對</button>
          </div>

          <!-- Drill 2: Sofia Family Tree -->
          <div class="ac-card">
            <h4 style="font-weight:900; margin-bottom:6px;">Unit 1: Sofia 家族樹與稱謂</h4>
            <img src="assets/images/u1/u1_sofia_family_tree.jpg" alt="Family Tree" style="max-width:100%; height:120px; object-fit:contain; border-radius:6px; margin:4px 0;">
            <p style="font-size:0.82rem;">Parents, son, daughter, cousin, twins, husband, wife 配對練習。</p>
          </div>

          <!-- Drill 3: Frequency Adverbs -->
          <div class="ac-card">
            <h4 style="font-weight:900; margin-bottom:6px;">Unit 2: 頻率副詞位置鐵律</h4>
            <p style="font-size:0.85rem; line-height:1.5;">
              • 一般動詞<strong>前</strong>：I <em>always</em> walk to school.<br>
              • be 動詞<strong>後</strong>：He is <em>never</em> late.<br>
              • 頻率刻度：always (100%) ➔ usually ➔ often ➔ sometimes ➔ never (0%)
            </p>
            <button class="ac-btn ac-btn-sm ac-btn-blue" style="margin-top:8px;" onclick="SoundFX.playCorrect();">掌握規則</button>
          </div>

          <!-- Drill 4: Some vs Any -->
          <div class="ac-card">
            <h4 style="font-weight:900; margin-bottom:6px;">Unit 3: some / any 與 there is/are</h4>
            <p style="font-size:0.85rem; line-height:1.5;">
              • 肯定句用 some：There are <em>some</em> apples.<br>
              • 否定/疑問句用 any：Are there <em>any</em> biscuits?<br>
              • 委婉請求用 some：Can I have <em>some</em> water, please?
            </p>
            <button class="ac-btn ac-btn-sm ac-btn-yellow" style="margin-top:8px;" onclick="SoundFX.playCorrect();">掌握規則</button>
          </div>
        </div>
      </div>
    `;
  } else if (rwMode === 'revision') {
    contentHtml = renderRevisionContentHtml(data);
  }

  container.innerHTML = `
    ${toolbarHtml}
    ${contentHtml}
  `;
}

// 閱寫考場全域操作事件
window.switchRwMode = function(mode) {
  SoundFX.playClick();
  AppState.rwMode = mode;
  renderReadingWritingPod();
};

window.checkReadingPart2Answer = function(qNum, selected, correct, qText) {
  SoundFX.playClick();
  const ansKey = `rp2_q_${qNum}`;
  AppState.rwAnswers[ansKey] = { selected, correct };

  const acc = AppState.accountData;
  if (selected === correct) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+50 哩數!');
    acc.nookMiles += 50;
    acc.shieldProgress.readingWriting = Math.min(5.0, acc.shieldProgress.readingWriting + 0.05);
  } else {
    SoundFX.playWrong();
    if (!acc.netErrors[ansKey]) {
      acc.netErrors[ansKey] = {
        id: ansKey, count: 1, itemType: 'reading_part2', unitId: 'u1',
        title: `Reading Part 2 第 ${qNum} 題: ${qText}`,
        wrongAnswer: selected, correctAnswer: correct,
        rule: '請參閱原文定位句與干擾項透視', lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[ansKey].count += 1;
    }
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderReadingWritingPod();
};

window.checkReadingPart3Answer = function(qNum, selected, correct, qText) {
  SoundFX.playClick();
  const ansKey = `rp3_q_${qNum}`;
  AppState.rwAnswers[ansKey] = { selected, correct };

  const acc = AppState.accountData;
  if (selected === correct) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+50 哩數!');
    acc.nookMiles += 50;
    acc.shieldProgress.readingWriting = Math.min(5.0, acc.shieldProgress.readingWriting + 0.05);
  } else {
    SoundFX.playWrong();
    if (!acc.netErrors[ansKey]) {
      acc.netErrors[ansKey] = {
        id: ansKey, count: 1, itemType: 'reading_part3', unitId: 'u2',
        title: `Reading Part 3 第 ${qNum} 題: ${qText}`,
        wrongAnswer: selected, correctAnswer: correct,
        rule: '請參閱專訪定位句與干擾項透視', lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[ansKey].count += 1;
    }
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderReadingWritingPod();
};

window.checkReadingPart4Answer = function(qNum, selected, correct, word) {
  SoundFX.playClick();
  const ansKey = `rp4_q_${qNum}`;
  AppState.rwAnswers[ansKey] = { selected, correct };

  const acc = AppState.accountData;
  if (selected === correct) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+50 哩數!');
    acc.nookMiles += 50;
    acc.shieldProgress.readingWriting = Math.min(5.0, acc.shieldProgress.readingWriting + 0.05);
  } else {
    SoundFX.playWrong();
    if (!acc.netErrors[ansKey]) {
      acc.netErrors[ansKey] = {
        id: ansKey, count: 1, itemType: 'reading_part4', unitId: 'u3',
        title: `Reading Part 4 第 ${qNum} 題克漏字`,
        wrongAnswer: selected, correctAnswer: correct,
        rule: '請掌握介系詞與動詞搭配詞', lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[ansKey].count += 1;
    }
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderReadingWritingPod();
};

window.insertWordIntoActiveGap = function(word) {
  SoundFX.playClick();
  const targetId = AppState.activeGapInputId;
  if (targetId) {
    const inputEl = document.getElementById(targetId);
    if (inputEl) {
      inputEl.value = word;
      const gapKey = targetId.replace('input-', '');
      AppState.rwAnswers[gapKey] = word;
      return;
    }
  }
  // 若未 focus，依序填入第一個空白框
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`input-rw5_gap_${i}`);
    if (el && !el.value) {
      el.value = word;
      AppState.rwAnswers[`rw5_gap_${i}`] = word;
      break;
    }
  }
};

window.checkRwPart5Answers = function() {
  SoundFX.playClick();
  const u2 = window.KET_DATA.units[1];
  const rw5 = u2.exercises.readingWritingPart5.exam_task;
  const acc = AppState.accountData;
  let allCorrect = true;

  rw5.gaps.filter(g => !g.isExample).forEach(g => {
    const inputEl = document.getElementById(`input-rw5_gap_${g.gap}`);
    const resEl = document.getElementById(`result-rw5_gap_${g.gap}`);
    if (inputEl && resEl) {
      const userVal = inputEl.value.trim().toLowerCase();
      const isOk = g.acceptedVariants.map(v => v.toLowerCase()).includes(userVal);
      resEl.style.display = 'block';

      if (isOk) {
        inputEl.style.borderColor = 'var(--ac-green-dark)';
        inputEl.style.backgroundColor = '#E8F5E9';
      } else {
        inputEl.style.borderColor = 'var(--ac-red-dark)';
        inputEl.style.backgroundColor = '#FCE4EC';
        allCorrect = false;

        const ansKey = `rw5_gap_${g.gap}`;
        if (!acc.netErrors[ansKey]) {
          acc.netErrors[ansKey] = {
            id: ansKey, count: 1, itemType: 'rw_part5', unitId: 'u2',
            title: `Part 5 開放填空 Gap (${g.gap})`,
            wrongAnswer: userVal || '未填寫', correctAnswer: g.acceptedVariants.join(' / '),
            rule: g.explanation, lastUpdated: new Date().toISOString()
          };
        } else {
          acc.netErrors[ansKey].count += 1;
        }
      }
    }
  });

  if (allCorrect) {
    SoundFX.playFanfare();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🎉 開放填空全對! +100哩');
    acc.nookMiles += 100;
    acc.shieldProgress.readingWriting = Math.min(5.0, acc.shieldProgress.readingWriting + 0.15);
  } else {
    SoundFX.playWrong();
  }

  AppState.rwAnswers['rw5_submitted'] = true;
  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderReadingWritingPod();
};

window.switchWritingUnit = function(unitId) {
  SoundFX.playClick();
  AppState.rwWritingUnit = unitId;
  AppState.assembledBlocks = { p1: '', p2: '', p3: '' };
  renderReadingWritingPod();
};

window.switchWritingTrack = function(track) {
  SoundFX.playClick();
  AppState.rwWritingTrack = track;
  renderReadingWritingPod();
};

window.selectStoryBlock = function(step, text) {
  SoundFX.playClick();
  AppState.assembledBlocks[step] = text;
  const fullStory = [
    AppState.assembledBlocks.p1,
    AppState.assembledBlocks.p2,
    AppState.assembledBlocks.p3
  ].filter(Boolean).join(' ');

  const storyBox = document.getElementById('assembled-story-text');
  if (storyBox) {
    storyBox.value = fullStory;
    updateStoryWordCount(fullStory);
  }
};

window.updateStoryWordCount = function(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const count = words.length;
  const counterEl = document.getElementById('story-word-counter');
  if (counterEl) {
    if (count >= 35) {
      counterEl.className = 'word-count-badge pass';
      counterEl.textContent = `字數：${count} 字 (達標 35+ 字! 🟢)`;
    } else {
      counterEl.className = 'word-count-badge need-more';
      counterEl.textContent = `字數：${count} 字 (還差 ${35 - count} 字達標)`;
    }
  }
};

// =============================================================================
// Phase 5：🏆 Revision (Unit 1~3, p.78~80 共 71 分) 總複習計分闖關模組
// =============================================================================
const FALLBACK_REVISION_U3 = {
  unitId: 'u3',
  title: 'Unit 3 Revision (Coursebook Page 80)',
  totalMarks: 24,
  totalPoints: 24,
  pageImage: 'assets/pages/rev_u3_u4_p80_p81.jpg',
  exercises: [
    {
      number: 1,
      title: 'Exercise 1: Read the sentences and write the word (Furniture & House)',
      instruction: 'Read the sentences and write the word.',
      maxScore: 8,
      items: [
        { id: 'u3_rev_1_1', prompt: '1 We put all the plates, cups and glasses in this.', answer: 'cupboard', explanation: '放盤子、杯子與玻璃杯的廚房櫥櫃是 cupboard。' },
        { id: 'u3_rev_1_2', prompt: '2 I look at this when I brush my hair.', answer: 'mirror', explanation: '梳頭髮時看著鏡子：mirror。' },
        { id: 'u3_rev_1_3', prompt: '3 If it\'s too dark, turn this on.', answer: 'lamp', explanation: '太暗時打開燈具：lamp。' },
        { id: 'u3_rev_1_4', prompt: '4 All my family sit on this and watch TV.', answer: 'sofa', explanation: '全家人坐著看電視的長沙發：sofa。' },
        { id: 'u3_rev_1_5', prompt: '5 This is in the kitchen. We cook food on it.', answer: 'cooker', explanation: '廚房用來煮食物的爐具：cooker。' },
        { id: 'u3_rev_1_6', prompt: '6 I sleep in this at night.', answer: 'bed', explanation: '晚上睡覺的床：bed。' },
        { id: 'u3_rev_1_7', prompt: '7 We sit around this to have dinner.', answer: 'table', explanation: '全家人圍著吃晚餐的餐桌：table。' },
        { id: 'u3_rev_1_8', prompt: '8 In summer, we open this to let fresh air into the room.', answer: 'window', explanation: '打開窗戶讓新鮮空氣進來：window。' }
      ]
    },
    {
      number: 2,
      title: 'Exercise 2: Choose the correct word to complete the sentences (There is/are, some/any, a/an)',
      instruction: 'Choose the correct word to complete the sentences.',
      maxScore: 8,
      items: [
        { id: 'u3_rev_2_1', sentence: 'There (is / are) a big armchair in the living room.', options: ['is', 'are'], answer: 'is', explanation: '主詞為單數 a big armchair，be動詞用 is。' },
        { id: 'u3_rev_2_2', sentence: 'Are there (some / any) tomatoes in the fridge?', options: ['some', 'any'], answer: 'any', explanation: '疑問句詢問有無複數名詞，使用 any。' },
        { id: 'u3_rev_2_3', sentence: 'There isn\'t (a / an) oven in my new flat.', options: ['a', 'an'], answer: 'an', explanation: 'oven 為母音開頭單數可數名詞，否定句用 an。' },
        { id: 'u3_rev_2_4', sentence: 'We\'ve got (some / any) fresh strawberries for dessert.', options: ['some', 'any'], answer: 'some', explanation: '肯定句表示有一些草莓，使用 some。' },
        { id: 'u3_rev_2_5', sentence: 'Is there (some / any) cheese left on the plate?', options: ['some', 'any'], answer: 'any', explanation: '疑問句詢問不可數名詞 cheese，使用 any。' },
        { id: 'u3_rev_2_6', sentence: 'There (is / are) five chairs around the dining table.', options: ['is', 'are'], answer: 'are', explanation: '主詞為複數 five chairs，be動詞用 are。' },
        { id: 'u3_rev_2_7', sentence: 'Can I have (a / some) glass of orange juice, please?', options: ['a', 'some'], answer: 'a', explanation: '可數單數名詞 glass 前使用不定冠詞 a。' },
        { id: 'u3_rev_2_8', sentence: 'There are (some / any) beautiful flowers on the balcony.', options: ['some', 'any'], answer: 'some', explanation: '肯定句表示有一些花朵，使用 some。' }
      ]
    },
    {
      number: 3,
      title: 'Exercise 3: Complete the sentences with the correct form of have to',
      instruction: 'Complete the sentences with the correct form of have to.',
      maxScore: 8,
      items: [
        { id: 'u3_rev_3_1', prompt: '1 My brother ____ (do) his homework before dinner.', options: ['has to do', 'have to do', 'doesn\'t have to do'], answer: 'has to do', explanation: '第三人稱單數主詞 My brother 搭配 has to do。' },
        { id: 'u3_rev_3_2', prompt: '2 We ____ (not get up) early on Sundays.', options: ['don\'t have to get up', 'doesn\'t have to get up', 'have to get up'], answer: 'don\'t have to get up', explanation: '複數主詞 We 的否定形式為 don\'t have to get up。' },
        { id: 'u3_rev_3_3', prompt: '3 Do you ____ (wear) a uniform at your school?', options: ['have to wear', 'has to wear', 'having to wear'], answer: 'have to wear', explanation: '助動詞 Do 開頭問句，後面使用原形 have to wear。' },
        { id: 'u3_rev_3_4', prompt: '4 She ____ (not walk) to school; her dad drives her.', options: ['doesn\'t have to walk', 'don\'t have to walk', 'has to walk'], answer: 'doesn\'t have to walk', explanation: '第三人稱單數否定用 doesn\'t have to walk。' },
        { id: 'u3_rev_3_5', prompt: '5 Doctors ____ (work) at night sometimes.', options: ['have to work', 'has to work', 'having to work'], answer: 'have to work', explanation: '複數主詞 Doctors 搭配 have to work。' },
        { id: 'u3_rev_3_6', prompt: '6 Does Tim ____ (help) with the cooking?', options: ['have to help', 'has to help', 'helping to'], answer: 'have to help', explanation: '助動詞 Does 之後動詞回復原形 have to help。' },
        { id: 'u3_rev_3_7', prompt: '7 You ____ (be) quiet in the library.', options: ['have to be', 'has to be', 'don\'t have to be'], answer: 'have to be', explanation: '在圖書館必須保持安靜：You have to be quiet。' },
        { id: 'u3_rev_3_8', prompt: '8 I ____ (not clean) my bedroom every day, only on Saturdays.', options: ['don\'t have to clean', 'doesn\'t have to clean', 'have to clean'], answer: 'don\'t have to clean', explanation: '第一人稱單數否定用 don\'t have to clean。' }
      ]
    }
  ]
};

function renderRevisionContentHtml(data) {
  if (!AppState.revTab) AppState.revTab = 'all';
  if (!AppState.revAnswers) AppState.revAnswers = {};
  if (!AppState.revScores) AppState.revScores = {};

  const totalPossible = 71;
  const currentEarned = Object.values(AppState.revScores).reduce((acc, v) => acc + (v || 0), 0);
  const scorePct = Math.round((currentEarned / totalPossible) * 100);
  const is13Shields = scorePct >= 82 || currentEarned >= 59;

  // 左欄：計分看版與課本原圖預覽
  const leftPaneHtml = `
    <div class="pane-left">
      <div class="revision-score-banner" style="flex-direction:column; align-items:flex-start; gap:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <div>
            <h3 style="font-size:1.15rem; font-weight:900; margin:0; color:var(--ac-wood);">🏆 跨單元總複習計分闖關 (p.78~80)</h3>
            <span style="font-size:0.8rem; color:var(--ac-wood-light);">涵蓋 Unit 1 (27分) + Unit 2 (20分) + Unit 3 (24分) = 滿分 71 分</span>
          </div>
          ${is13Shields ? `
            <div class="badge-13shield">
              🛡️ 13 盾達標！(Merit 卓越)
            </div>
          ` : `
            <span class="nook-miles-badge" style="background:var(--ac-yellow-light); color:var(--ac-yellow-dark); border-color:var(--ac-yellow-border);">
              目標 13 盾 (82% / 59分)
            </span>
          `}
        </div>

        <div style="width:100%;">
          <div style="display:flex; justify-content:space-between; font-size:0.88rem; font-weight:bold; margin-bottom:4px;">
            <span>考生【${AppState.currentAccount}】目前得分：<strong style="color:var(--ac-green-dark); font-size:1.1rem;">${currentEarned}</strong> / 71 分</span>
            <span>達成率：<strong>${scorePct}%</strong></span>
          </div>
          <div style="background:#E2E8F0; border-radius:10px; height:16px; overflow:hidden; position:relative;">
            <div style="width:${Math.min(100, scorePct)}%; background:${is13Shields ? 'var(--ac-green)' : 'var(--ac-orange)'}; height:100%; transition:width 0.4s ease;"></div>
            <!-- 82% 達標刻度線 -->
            <div style="position:absolute; left:82%; top:0; bottom:0; width:3px; background:#DC3545;" title="82% 13盾門檻 (59分)"></div>
          </div>
          <div style="display:flex; justify-content:flex-end; font-size:0.75rem; color:#DC3545; font-weight:bold; margin-top:2px;">
            ▲ 82% (13盾 Merit 門檻, 59分)
          </div>
        </div>
      </div>

      <!-- 單元篩選鈕 -->
      <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:14px;">
        <button class="ac-btn ac-btn-sm ${AppState.revTab === 'all' ? 'ac-btn-green' : 'ac-btn-cream'}" onclick="switchRevTab('all')">
          📑 全部大題 (71分)
        </button>
        <button class="ac-btn ac-btn-sm ${AppState.revTab === 'u1' ? 'ac-btn-green' : 'ac-btn-cream'}" onclick="switchRevTab('u1')">
          Unit 1 (p.78, 27分)
        </button>
        <button class="ac-btn ac-btn-sm ${AppState.revTab === 'u2' ? 'ac-btn-green' : 'ac-btn-cream'}" onclick="switchRevTab('u2')">
          Unit 2 (p.79, 20分)
        </button>
        <button class="ac-btn ac-btn-sm ${AppState.revTab === 'u3' ? 'ac-btn-green' : 'ac-btn-cream'}" onclick="switchRevTab('u3')">
          Unit 3 (p.80, 24分)
        </button>
      </div>

      <!-- 課本原圖預覽卡片 -->
      <div class="card-ac" style="padding:14px; text-align:center;">
        <h4 style="font-size:0.95rem; font-weight:900; margin-bottom:8px; color:var(--ac-wood);">
          📖 課本總複習跨頁原圖 (Coursebook Spread)
        </h4>
        <img src="${AppState.revTab === 'u3' ? 'assets/pages/rev_u3_u4_p80_p81.jpg' : 'assets/pages/rev_u1_u2_p78_p79.jpg'}"
             alt="Revision Spread"
             style="max-width:100%; height:auto; border-radius:8px; border:2px solid var(--ac-wood-border); box-shadow:var(--shadow-card); margin-bottom:8px;">
        <div style="display:flex; gap:8px; justify-content:center;">
          <button class="ac-btn ac-btn-sm ac-btn-wood" onclick="jumpToPod('spreads', '${AppState.revTab === 'u3' ? 'u3' : 'u1'}')">
            🔍 開啟高清跨頁檢視器
          </button>
          <button class="ac-btn ac-btn-sm ac-btn-orange" onclick="resetRevisionScores()">
            🔄 重置作答進度
          </button>
        </div>
      </div>
    </div>
  `;

  // 右欄：題目清單
  let exercisesListHtml = '';

  // 1. Unit 1 Revision (27分)
  if (AppState.revTab === 'all' || AppState.revTab === 'u1') {
    exercisesListHtml += `
      <div class="card-ac" style="margin-bottom:16px; border-left:6px solid var(--ac-blue);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h3 style="font-size:1.1rem; font-weight:900; color:var(--ac-blue-dark); margin:0;">
            📘 Unit 1 Revision (課本 p.78, 共 27 分)
          </h3>
          <span class="ac-badge" style="background:var(--ac-blue-light); color:var(--ac-blue-dark); font-weight:bold;">
            4 個大題
          </span>
        </div>

        <!-- Ex 1: have got (8分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 1: Complete the dialogues with have got (8 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. A: (1) <input type="text" class="ac-input-clean" id="rev_u1_ex1_1" placeholder="填寫答案..." style="width:120px;"> (you) any brothers?<br>
            &nbsp;&nbsp;&nbsp;B: Yes, I (2) <input type="text" class="ac-input-clean" id="rev_u1_ex1_2" placeholder="填寫答案..." style="width:140px;"> a sister and two brothers.<br>
            2. A: (3) <input type="text" class="ac-input-clean" id="rev_u1_ex1_3" placeholder="填寫答案..." style="width:120px;"> (she) dark hair?<br>
            &nbsp;&nbsp;&nbsp;B: No, she (4) <input type="text" class="ac-input-clean" id="rev_u1_ex1_4" placeholder="填寫答案..." style="width:140px;"> blonde hair.<br>
            3. A: (5) <input type="text" class="ac-input-clean" id="rev_u1_ex1_5" placeholder="填寫答案..." style="width:120px;"> (they) a pet?<br>
            &nbsp;&nbsp;&nbsp;B: Yes, they (6) <input type="text" class="ac-input-clean" id="rev_u1_ex1_6" placeholder="填寫答案..." style="width:140px;"> a cute cat.<br>
            4. A: (7) <input type="text" class="ac-input-clean" id="rev_u1_ex1_7" placeholder="填寫答案..." style="width:120px;"> (you) a big bedroom?<br>
            &nbsp;&nbsp;&nbsp;B: No, I (8) <input type="text" class="ac-input-clean" id="rev_u1_ex1_8" placeholder="填寫答案..." style="width:110px;">. It's quite small.
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU1Ex1()">✅ 批改 Ex 1 (8分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u1_ex1', 'u1', 8)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u1_ex1" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 2: Family Vocab (5分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 2: Write the correct family word (5 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. My mother's mother is my <input type="text" class="ac-input-clean" id="rev_u1_ex2_1" placeholder="填寫單字..." style="width:130px;">.<br>
            2. My father's brother is my <input type="text" class="ac-input-clean" id="rev_u1_ex2_2" placeholder="填寫單字..." style="width:110px;">.<br>
            3. My aunt's children are my <input type="text" class="ac-input-clean" id="rev_u1_ex2_3" placeholder="填寫單字..." style="width:110px;">.<br>
            4. My sister is my father's <input type="text" class="ac-input-clean" id="rev_u1_ex2_4" placeholder="填寫單字..." style="width:110px;">.<br>
            5. My mother and father are my <input type="text" class="ac-input-clean" id="rev_u1_ex2_5" placeholder="填寫單字..." style="width:110px;">.
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU1Ex2()">✅ 批改 Ex 2 (5分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u1_ex2', 'u1', 5)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u1_ex2" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 3: do / does (8分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 3: Choose do / does (8 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. What time <select class="ac-input-clean" id="rev_u1_ex3_1"><option value="">--請選擇--</option><option value="do">do</option><option value="does">does</option></select> you go to bed at the weekend?<br>
            2. <select class="ac-input-clean" id="rev_u1_ex3_2"><option value="">--請選擇--</option><option value="Do">Do</option><option value="Does">Does</option></select> your friend live near you?<br>
            3. Where <select class="ac-input-clean" id="rev_u1_ex3_3"><option value="">--請選擇--</option><option value="do">do</option><option value="does">does</option></select> your cousins live?<br>
            4. <select class="ac-input-clean" id="rev_u1_ex3_4"><option value="">--請選擇--</option><option value="Do">Do</option><option value="Does">Does</option></select> you play tennis after school?<br>
            5. What <select class="ac-input-clean" id="rev_u1_ex3_5"><option value="">--請選擇--</option><option value="do">do</option><option value="does">does</option></select> your parents do on Sundays?<br>
            6. <select class="ac-input-clean" id="rev_u1_ex3_6"><option value="">--請選擇--</option><option value="Do">Do</option><option value="Does">Does</option></select> your sister like reading books?<br>
            7. How often <select class="ac-input-clean" id="rev_u1_ex3_7"><option value="">--請選擇--</option><option value="do">do</option><option value="does">does</option></select> you visit your grandparents?<br>
            8. <select class="ac-input-clean" id="rev_u1_ex3_8"><option value="">--請選擇--</option><option value="Do">Do</option><option value="Does">Does</option></select> he watch television in the evening?
          </div>
          <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU1Ex3()">✅ 批改 Ex 3 (8分)</button>
          <div id="fb-rev_u1_ex3" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 4: Appearance Adjectives (6分) -->
        <div class="rw-question-card">
          <div class="rw-question-header">
            <strong>Exercise 4: Choose the correct adjective (6 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. My dad's got black hair and mine is the same - it's very <input type="text" class="ac-input-clean" id="rev_u1_ex4_1" placeholder="填寫形容詞..." style="width:110px;">.<br>
            2. She isn't tall or short, she is of <input type="text" class="ac-input-clean" id="rev_u1_ex4_2" placeholder="填寫形容詞..." style="width:130px;"> height.<br>
            3. He has got very bright <input type="text" class="ac-input-clean" id="rev_u1_ex4_3" placeholder="填寫顏色..." style="width:110px;"> eyes.<br>
            4. My brother's hair isn't straight, it's very <input type="text" class="ac-input-clean" id="rev_u1_ex4_4" placeholder="填寫形容詞..." style="width:110px;">.<br>
            5. He is quite <input type="text" class="ac-input-clean" id="rev_u1_ex4_5" placeholder="填寫形容詞..." style="width:110px;"> because he runs every day.<br>
            6. Grandad has got a long white <input type="text" class="ac-input-clean" id="rev_u1_ex4_6" placeholder="填寫名詞..." style="width:110px;"> on his face.
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU1Ex4()">✅ 批改 Ex 4 (6分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u1_ex4', 'u1', 6)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u1_ex4" style="display:none; margin-top:8px;"></div>
        </div>
      </div>
    `;
  }

  // 2. Unit 2 Revision (20分)
  if (AppState.revTab === 'all' || AppState.revTab === 'u2') {
    exercisesListHtml += `
      <div class="card-ac" style="margin-bottom:16px; border-left:6px solid var(--ac-green);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h3 style="font-size:1.1rem; font-weight:900; color:var(--ac-green-dark); margin:0;">
            📗 Unit 2 Revision (課本 p.79, 共 20 分)
          </h3>
          <span class="ac-badge" style="background:var(--ac-green-light); color:var(--ac-green-dark); font-weight:bold;">
            3 個大題
          </span>
        </div>

        <!-- Ex 1: Adverbs Rewrite (5分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 1: Rewrite sentences with the adverb in brackets (5 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. My mum takes photos of us. (often)<br>
            ➔ <input type="text" class="ac-input-clean" id="rev_u2_ex1_1" placeholder="請重寫完整句子..." style="width:80%;"><br>
            2. I play tennis on Wednesdays. (usually)<br>
            ➔ <input type="text" class="ac-input-clean" id="rev_u2_ex1_2" placeholder="請重寫完整句子..." style="width:80%;"><br>
            3. They are late for school. (never)<br>
            ➔ <input type="text" class="ac-input-clean" id="rev_u2_ex1_3" placeholder="請重寫完整句子..." style="width:80%;"><br>
            4. We go to the cinema on Fridays. (sometimes)<br>
            ➔ <input type="text" class="ac-input-clean" id="rev_u2_ex1_4" placeholder="請重寫完整句子..." style="width:80%;"><br>
            5. He listens to music in the evening. (always)<br>
            ➔ <input type="text" class="ac-input-clean" id="rev_u2_ex1_5" placeholder="請重寫完整句子..." style="width:80%;">
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU2Ex1()">✅ 批改 Ex 1 (5分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u2_ex1', 'u2', 5)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u2_ex1" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 2: like vs would like (7分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 2: Complete with like or would like (7 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. Where <input type="text" class="ac-input-clean" id="rev_u2_ex2_1" placeholder="填寫動詞片語..." style="width:160px;"> (you / go) for your next holiday?<br>
            &nbsp;&nbsp;&nbsp;I <input type="text" class="ac-input-clean" id="rev_u2_ex2_2" placeholder="填寫動詞片語..." style="width:140px;"> to the sea because I <input type="text" class="ac-input-clean" id="rev_u2_ex2_3" placeholder="填寫動詞..." style="width:130px;"> (swim).<br>
            2. <input type="text" class="ac-input-clean" id="rev_u2_ex2_4" placeholder="填寫疑問句型..." style="width:170px;"> (you / come) to my party tomorrow?<br>
            &nbsp;&nbsp;&nbsp;Yes, I <input type="text" class="ac-input-clean" id="rev_u2_ex2_5" placeholder="填寫簡答..." style="width:120px;">! I <input type="text" class="ac-input-clean" id="rev_u2_ex2_6" placeholder="填寫片語..." style="width:110px;"> (go) to parties.<br>
            3. Do you <input type="text" class="ac-input-clean" id="rev_u2_ex2_7" placeholder="填寫片語..." style="width:120px;"> (play) video games on weekends?
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU2Ex2()">✅ 批改 Ex 2 (7分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u2_ex2', 'u2', 7)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u2_ex2" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 3: Vocab in Box (8分) -->
        <div class="rw-question-card">
          <div class="rw-question-header">
            <strong>Exercise 3: Complete with words from the box (8 分)</strong>
          </div>
          <div class="card-ac" style="background:#FFF9E6; padding:8px; margin-bottom:8px; font-size:0.85rem; font-weight:bold;">
            [ cooking, photography, camping, sailing, painting, chess, acting, drawing ]
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. My brother is brilliant at <input type="text" class="ac-input-clean" id="rev_u2_ex3_1" placeholder="選填字庫單字..." style="width:110px;">. He makes dinner for the family.<br>
            2. She enjoys <input type="text" class="ac-input-clean" id="rev_u2_ex3_2" placeholder="選填字庫單字..." style="width:110px;"> in a tent in the forest.<br>
            3. In our drama club, we practice <input type="text" class="ac-input-clean" id="rev_u2_ex3_3" placeholder="選填字庫單字..." style="width:110px;"> on stage.<br>
            4. He takes great photos with his new camera; he loves <input type="text" class="ac-input-clean" id="rev_u2_ex3_4" placeholder="選填字庫單字..." style="width:120px;">.<br>
            5. It is windy today, perfect for <input type="text" class="ac-input-clean" id="rev_u2_ex3_5" placeholder="選填字庫單字..." style="width:110px;"> a boat on the lake.<br>
            6. You need a board and 32 pieces to play <input type="text" class="ac-input-clean" id="rev_u2_ex3_6" placeholder="選填字庫單字..." style="width:110px;">.<br>
            7. She uses watercolours for <input type="text" class="ac-input-clean" id="rev_u2_ex3_7" placeholder="選填字庫單字..." style="width:110px;"> pictures.<br>
            8. I like <input type="text" class="ac-input-clean" id="rev_u2_ex3_8" placeholder="選填字庫單字..." style="width:110px;"> cartoons with a pencil in my notebook.
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU2Ex3()">✅ 批改 Ex 3 (8分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u2_ex3', 'u2', 8)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u2_ex3" style="display:none; margin-top:8px;"></div>
        </div>
      </div>
    `;
  }

  // 3. Unit 3 Revision (24分)
  if (AppState.revTab === 'all' || AppState.revTab === 'u3') {
    exercisesListHtml += `
      <div class="card-ac" style="margin-bottom:16px; border-left:6px solid var(--ac-orange);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h3 style="font-size:1.1rem; font-weight:900; color:var(--ac-orange-dark); margin:0;">
            📙 Unit 3 Revision (課本 p.80, 共 24 分)
          </h3>
          <span class="ac-badge" style="background:var(--ac-orange-light); color:var(--ac-orange-dark); font-weight:bold;">
            3 個大題
          </span>
        </div>

        <!-- Ex 1: Furniture & House Words (8分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 1: Read the sentences and write the word (8 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. We put all the plates, cups and glasses in this: <input type="text" class="ac-input-clean" id="rev_u3_ex1_1" placeholder="填寫家具單字..." style="width:110px;"><br>
            2. I look at this when I brush my hair: <input type="text" class="ac-input-clean" id="rev_u3_ex1_2" placeholder="填寫物品單字..." style="width:110px;"><br>
            3. If it's too dark, turn this on: <input type="text" class="ac-input-clean" id="rev_u3_ex1_3" placeholder="填寫物品單字..." style="width:110px;"><br>
            4. All my family sit on this and watch TV: <input type="text" class="ac-input-clean" id="rev_u3_ex1_4" placeholder="填寫家具單字..." style="width:110px;"><br>
            5. This is in the kitchen. We cook food on it: <input type="text" class="ac-input-clean" id="rev_u3_ex1_5" placeholder="填寫電器單字..." style="width:110px;"><br>
            6. I sleep in this at night: <input type="text" class="ac-input-clean" id="rev_u3_ex1_6" placeholder="填寫家具單字..." style="width:110px;"><br>
            7. We sit around this to have dinner: <input type="text" class="ac-input-clean" id="rev_u3_ex1_7" placeholder="填寫家具單字..." style="width:110px;"><br>
            8. In summer, we open this to let fresh air into the room: <input type="text" class="ac-input-clean" id="rev_u3_ex1_8" placeholder="填寫名詞..." style="width:110px;">
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU3Ex1()">✅ 批改 Ex 1 (8分)</button>
            <button type="button" class="btn-see-answer" onclick="revealRevisionExAnswers('u3_ex1', 'u3', 8)">👀 看本大題答案 (紙筆自評)</button>
          </div>
          <div id="fb-rev_u3_ex1" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 2: There is/are, some/any (8分) -->
        <div class="rw-question-card" style="margin-bottom:12px;">
          <div class="rw-question-header">
            <strong>Exercise 2: Choose the correct word (There is/are, some/any, a/an) (8 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. There <select class="ac-input-clean" id="rev_u3_ex2_1"><option value="">--請選擇--</option><option value="is">is</option><option value="are">are</option></select> a big armchair in the living room.<br>
            2. Are there <select class="ac-input-clean" id="rev_u3_ex2_2"><option value="">--請選擇--</option><option value="some">some</option><option value="any">any</option></select> tomatoes in the fridge?<br>
            3. There isn't <select class="ac-input-clean" id="rev_u3_ex2_3"><option value="">--請選擇--</option><option value="a">a</option><option value="an">an</option></select> oven in my new flat.<br>
            4. We've got <select class="ac-input-clean" id="rev_u3_ex2_4"><option value="">--請選擇--</option><option value="some">some</option><option value="any">any</option></select> fresh strawberries for dessert.<br>
            5. Is there <select class="ac-input-clean" id="rev_u3_ex2_5"><option value="">--請選擇--</option><option value="some">some</option><option value="any">any</option></select> cheese left on the plate?<br>
            6. There <select class="ac-input-clean" id="rev_u3_ex2_6"><option value="">--請選擇--</option><option value="is">is</option><option value="are">are</option></select> five chairs around the dining table.<br>
            7. Can I have <select class="ac-input-clean" id="rev_u3_ex2_7"><option value="">--請選擇--</option><option value="a">a</option><option value="some">some</option></select> glass of orange juice, please?<br>
            8. There are <select class="ac-input-clean" id="rev_u3_ex2_8"><option value="">--請選擇--</option><option value="some">some</option><option value="any">any</option></select> beautiful flowers on the balcony.
          </div>
          <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU3Ex2()">✅ 批改 Ex 2 (8分)</button>
          <div id="fb-rev_u3_ex2" style="display:none; margin-top:8px;"></div>
        </div>

        <!-- Ex 3: have to (8分) -->
        <div class="rw-question-card">
          <div class="rw-question-header">
            <strong>Exercise 3: Complete with the correct form of have to (8 分)</strong>
          </div>
          <div style="font-size:0.88rem; line-height:1.6; margin:8px 0;">
            1. My brother <select class="ac-input-clean" id="rev_u3_ex3_1"><option value="">--請選擇--</option><option value="has to do">has to do</option><option value="have to do">have to do</option></select> his homework before dinner.<br>
            2. We <select class="ac-input-clean" id="rev_u3_ex3_2"><option value="">--請選擇--</option><option value="don't have to get up">don't have to get up</option><option value="doesn't have to get up">doesn't have to get up</option></select> early on Sundays.<br>
            3. Do you <select class="ac-input-clean" id="rev_u3_ex3_3"><option value="">--請選擇--</option><option value="have to wear">have to wear</option><option value="has to wear">has to wear</option></select> a uniform at your school?<br>
            4. She <select class="ac-input-clean" id="rev_u3_ex3_4"><option value="">--請選擇--</option><option value="doesn't have to walk">doesn't have to walk</option><option value="don't have to walk">don't have to walk</option></select> to school; her dad drives her.<br>
            5. Doctors <select class="ac-input-clean" id="rev_u3_ex3_5"><option value="">--請選擇--</option><option value="have to work">have to work</option><option value="has to work">has to work</option></select> at night sometimes.<br>
            6. Does Tim <select class="ac-input-clean" id="rev_u3_ex3_6"><option value="">--請選擇--</option><option value="have to help">have to help</option><option value="has to help">has to help</option></select> with the cooking?<br>
            7. You <select class="ac-input-clean" id="rev_u3_ex3_7"><option value="">--請選擇--</option><option value="have to be">have to be</option><option value="has to be">has to be</option></select> quiet in the library.<br>
            8. I <select class="ac-input-clean" id="rev_u3_ex3_8"><option value="">--請選擇--</option><option value="don't have to clean">don't have to clean</option><option value="doesn't have to clean">doesn't have to clean</option></select> my bedroom every day.
          </div>
          <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkRevU3Ex3()">✅ 批改 Ex 3 (8分)</button>
          <div id="fb-rev_u3_ex3" style="display:none; margin-top:8px;"></div>
        </div>
      </div>
    `;
  }

  const rightPaneHtml = `
    <div class="pane-right">
      ${exercisesListHtml}
    </div>
  `;

  return `
    <div class="split-pane-container">
      ${leftPaneHtml}
      ${rightPaneHtml}
    </div>
  `;
}

window.switchRevTab = function(tab) {
  SoundFX.playClick();
  AppState.revTab = tab;
  renderReadingWritingPod();
};

window.resetRevisionScores = function() {
  SoundFX.playClick();
  AppState.revScores = {};
  AppState.revAnswers = {};
  renderReadingWritingPod();
};

function updateRevisionScoreAndFanfare(exKey, earnedPoints) {
  AppState.revScores[exKey] = earnedPoints;
  const currentEarned = Object.values(AppState.revScores).reduce((acc, v) => acc + (v || 0), 0);
  const scorePct = Math.round((currentEarned / 71) * 100);

  if (scorePct >= 82 || currentEarned >= 59) {
    SoundFX.playFanfare();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🛡️ 13 盾達標！恭喜獲得 Merit 卓越勳章！');
  } else if (earnedPoints > 0) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, `✨ 本大題獲得 ${earnedPoints} 分！`);
  } else {
    SoundFX.playWrong();
  }
  renderReadingWritingPod();
}

window.addRevError = function(id, unit, prompt, wrongAns, correctAns, rule) {
  SoundFX.playClick();
  const acc = AppState.accountData;
  if (!acc.netErrors) acc.netErrors = {};
  if (!acc.netErrors[id]) {
    acc.netErrors[id] = { id, unit, type: 'reading', title: `Revision ${unit.toUpperCase()} 錯題`, prompt, wrongAnswer: wrongAns, correctAnswer: correctAns, rule, count: 1, timestamp: Date.now() };
  } else {
    acc.netErrors[id].count += 1;
  }
  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '📥 已收入 5 色錯題本！');
};

// 共用：舊版閱寫 Part 5 / 聽力 Part 2「👀 看答案 ➔ ⭕ 我答對 / ❌ 我答錯」紙筆自評機制
window.revealLegacyGapAnswer = function(section, ansKey, answerStr, ruleStr, trapStr, unitId, titleLabel) {
  SoundFX.playClick();
  const resEl = document.getElementById(`result-${ansKey}`);
  if (!resEl) return;
  if (section === 'ls2') {
    resEl.innerHTML = `
      <div>✅ 標準答案：<strong>${answerStr}</strong> ${ruleStr ? `(${ruleStr})` : ''}</div>
      <div id="selfgrade-${ansKey}" class="selfgrade-actions" style="margin-top:8px;">
        <button type="button" class="btn-self-ok" onclick="selfGradeLegacyGap('ls2', '${ansKey}', true, '${escapeJsStr(answerStr)}', '${escapeJsStr(ruleStr || '聽力表格填空')}', '${unitId || 'u3'}', '${escapeJsStr(titleLabel || ruleStr || ansKey)}')">⭕ 我答對</button>
        <button type="button" class="btn-self-bad" onclick="selfGradeLegacyGap('ls2', '${ansKey}', false, '${escapeJsStr(answerStr)}', '${escapeJsStr(ruleStr || '聽力表格填空')}', '${unitId || 'u3'}', '${escapeJsStr(titleLabel || ruleStr || ansKey)}')">❌ 我答錯</button>
      </div>
    `;
  }
  resEl.style.display = 'block';
};

window.selfGradeLegacyGap = function(section, ansKey, isCorrect, answerStr, ruleStr, unitId, titleLabel) {
  const acc = AppState.accountData;
  const inputEl = document.getElementById(`input-${ansKey}`);
  const gradeEl = document.getElementById(`selfgrade-${ansKey}`);
  if (isCorrect) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '⭕ 紙筆自評答對！+50 哩');
    if (inputEl) {
      inputEl.style.borderColor = 'var(--ac-green-dark)';
      inputEl.style.backgroundColor = '#E8F5E9';
    }
    if (acc.netErrors && acc.netErrors[ansKey] && acc.netErrors[ansKey].count > 0) {
      acc.netErrors[ansKey].count = Math.max(0, acc.netErrors[ansKey].count - 1);
    }
    acc.nookMiles += 50;
    if (section === 'ls2') {
      acc.shieldProgress.listening = Math.min(5.0, acc.shieldProgress.listening + 0.08);
    } else {
      acc.shieldProgress.readingWriting = Math.min(5.0, acc.shieldProgress.readingWriting + 0.05);
    }
    if (gradeEl) gradeEl.innerHTML = '<span style="color:#15803D; font-weight:900;">✅ 已紀錄：紙筆自評答對！</span>';
  } else {
    SoundFX.playWrong();
    if (inputEl) {
      inputEl.style.borderColor = 'var(--ac-red-dark)';
      inputEl.style.backgroundColor = '#FCE4EC';
    }
    if (!acc.netErrors) acc.netErrors = {};
    acc.netErrors[ansKey] = {
      id: ansKey,
      count: (acc.netErrors[ansKey] ? (acc.netErrors[ansKey].count || 0) : 0) + 1,
      itemType: section === 'ls2' ? 'listening' : 'rw_part5',
      unit: unitId || 'u2',
      type: section === 'ls2' ? 'listening' : 'reading',
      title: titleLabel || ansKey,
      wrongAnswer: (inputEl && inputEl.value.trim()) ? inputEl.value.trim() : '紙筆自評：答錯',
      correctAnswer: answerStr,
      rule: ruleStr || '請加強文法與聽力關鍵資訊定位',
      timestamp: Date.now(),
      lastUpdated: new Date().toISOString()
    };
    if (gradeEl) gradeEl.innerHTML = '<span style="color:#BE123C; font-weight:900;">❌ 已紀錄錯題並存入 5 色錯題本！</span>';
  }
  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
};

const REV_ANSWER_SHEET = {
  u1_ex1: { title: 'Unit 1 Ex 1 (have got)', items: ['(1) Have you got', "(2) have. I've got", '(3) Has she got', "(4) hasn't. She's got", '(5) Have they got', "(6) have. They've got", '(7) Have you got', "(8) haven't"] },
  u1_ex2: { title: 'Unit 1 Ex 2 (Family Words)', items: ['1. grandmother', '2. uncle', '3. cousins', '4. daughter / sister', '5. parents'] },
  u1_ex4: { title: 'Unit 1 Ex 4 (Appearance Adjectives)', items: ['1. dark', '2. medium', '3. blue', '4. curly', '5. slim', '6. beard'] },
  u2_ex1: { title: 'Unit 2 Ex 1 (Frequency Adverbs)', items: ['1. My mum often takes photos of us.', '2. I usually play tennis on Wednesdays.', '3. They are never late for school.', '4. We sometimes go to the cinema on Fridays.', '5. He always listens to music in the evening.'] },
  u2_ex2: { title: 'Unit 2 Ex 2 (like vs would like)', items: ['1a. would you like to go', '1b. would like to go', '1c. like swimming', '2a. Would you like to come', '2b. would love to', '2c. like going', '3. like playing'] },
  u2_ex3: { title: 'Unit 2 Ex 3 (Free time vocab)', items: ['1. cooking', '2. camping', '3. acting', '4. photography', '5. sailing', '6. chess', '7. painting', '8. drawing'] },
  u3_ex1: { title: 'Unit 3 Ex 1 (Furniture & House)', items: ['1. cupboard', '2. mirror', '3. lamp', '4. sofa', '5. cooker', '6. bed', '7. table', '8. window'] }
};

window.revealRevisionExAnswers = function(exKey, unitId, maxPts) {
  SoundFX.playClick();
  const box = document.getElementById(`fb-rev_${exKey}`);
  const sheet = REV_ANSWER_SHEET[exKey];
  if (!box || !sheet) return;
  box.style.display = 'block';
  box.innerHTML = `
    <div class="ket-selfgrade-banner" style="margin:6px 0;">
      <strong>✅ ${sheet.title} 參考答案（紙筆對答案用）：</strong>
      <div style="margin:6px 0; font-size:0.86rem; line-height:1.6;">
        ${sheet.items.map(it => `<span style="display:inline-block; background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:2px 8px; margin:2px 4px 2px 0;">${it}</span>`).join('')}
      </div>
      <div class="selfgrade-actions">
        <button type="button" class="btn-self-ok" onclick="selfGradeRevisionEx('${exKey}', '${unitId}', ${maxPts}, true)">⭕ 本大題我全對 (滿分 +${maxPts} 分)</button>
        <button type="button" class="btn-self-bad" onclick="selfGradeRevisionEx('${exKey}', '${unitId}', ${maxPts}, false)">❌ 我有答錯 (記入錯題本待複習)</button>
      </div>
    </div>
  `;
};

window.selfGradeRevisionEx = function(exKey, unitId, maxPts, isCorrect) {
  const sheet = REV_ANSWER_SHEET[exKey];
  if (isCorrect) {
    updateRevisionScoreAndFanfare(exKey, maxPts);
  } else {
    SoundFX.playWrong();
    addRevError(`rev_${exKey}`, unitId, sheet ? sheet.title : exKey, '紙筆自評：待訂正', sheet ? sheet.items.join(' / ') : '', '總複習文法與拼字重點');
  }
};

// --- Unit 1 Revision 批改 ---
window.checkRevU1Ex1 = function() {
  const ans = [
    { id: '1', key: 'rev_u1_ex1_1', val: (document.getElementById('rev_u1_ex1_1')?.value || '').trim().toLowerCase(), target: 'have you got' },
    { id: '2', key: 'rev_u1_ex1_2', val: (document.getElementById('rev_u1_ex1_2')?.value || '').trim().toLowerCase(), target: "have. i've got" },
    { id: '3', key: 'rev_u1_ex1_3', val: (document.getElementById('rev_u1_ex1_3')?.value || '').trim().toLowerCase(), target: 'has she got' },
    { id: '4', key: 'rev_u1_ex1_4', val: (document.getElementById('rev_u1_ex1_4')?.value || '').trim().toLowerCase(), target: "hasn't. she's got" },
    { id: '5', key: 'rev_u1_ex1_5', val: (document.getElementById('rev_u1_ex1_5')?.value || '').trim().toLowerCase(), target: 'have they got' },
    { id: '6', key: 'rev_u1_ex1_6', val: (document.getElementById('rev_u1_ex1_6')?.value || '').trim().toLowerCase(), target: "have. they've got" },
    { id: '7', key: 'rev_u1_ex1_7', val: (document.getElementById('rev_u1_ex1_7')?.value || '').trim().toLowerCase(), target: 'have you got' },
    { id: '8', key: 'rev_u1_ex1_8', val: (document.getElementById('rev_u1_ex1_8')?.value || '').trim().toLowerCase(), target: "haven't" }
  ];
  let pts = 0;
  ans.forEach(a => {
    if (a.val && (a.target.includes(a.val) || a.val.includes(a.target) || a.val.replace(/['’]/g, '') === a.target.replace(/['’]/g, ''))) {
      pts++;
    }
  });
  updateRevisionScoreAndFanfare('u1_ex1', pts);
};

window.checkRevU1Ex2 = function() {
  const ans = [
    { id: '1', val: (document.getElementById('rev_u1_ex2_1')?.value || '').trim().toLowerCase(), targets: ['grandmother', 'grandma'] },
    { id: '2', val: (document.getElementById('rev_u1_ex2_2')?.value || '').trim().toLowerCase(), targets: ['uncle'] },
    { id: '3', val: (document.getElementById('rev_u1_ex2_3')?.value || '').trim().toLowerCase(), targets: ['cousins', 'cousin'] },
    { id: '4', val: (document.getElementById('rev_u1_ex2_4')?.value || '').trim().toLowerCase(), targets: ['daughter', 'sister'] },
    { id: '5', val: (document.getElementById('rev_u1_ex2_5')?.value || '').trim().toLowerCase(), targets: ['parents'] }
  ];
  let pts = 0;
  ans.forEach(a => {
    if (a.targets.some(t => a.val === t)) pts++;
  });
  updateRevisionScoreAndFanfare('u1_ex2', pts);
};

window.checkRevU1Ex3 = function() {
  const correct = ['do', 'Does', 'do', 'Do', 'do', 'Does', 'do', 'Does'];
  let pts = 0;
  for (let i = 1; i <= 8; i++) {
    const val = document.getElementById(`rev_u1_ex3_${i}`)?.value || '';
    if (val.toLowerCase() === correct[i-1].toLowerCase()) pts++;
  }
  updateRevisionScoreAndFanfare('u1_ex3', pts);
};

window.checkRevU1Ex4 = function() {
  const ans = [
    { val: (document.getElementById('rev_u1_ex4_1')?.value || '').trim().toLowerCase(), target: 'dark' },
    { val: (document.getElementById('rev_u1_ex4_2')?.value || '').trim().toLowerCase(), target: 'medium' },
    { val: (document.getElementById('rev_u1_ex4_3')?.value || '').trim().toLowerCase(), target: 'blue' },
    { val: (document.getElementById('rev_u1_ex4_4')?.value || '').trim().toLowerCase(), target: 'curly' },
    { val: (document.getElementById('rev_u1_ex4_5')?.value || '').trim().toLowerCase(), target: 'slim' },
    { val: (document.getElementById('rev_u1_ex4_6')?.value || '').trim().toLowerCase(), target: 'beard' }
  ];
  let pts = 0;
  ans.forEach(a => {
    if (a.val && a.val.includes(a.target)) pts++;
  });
  updateRevisionScoreAndFanfare('u1_ex4', pts);
};

// --- Unit 2 Revision 批改 ---
window.checkRevU2Ex1 = function() {
  const ans = [
    { val: (document.getElementById('rev_u2_ex1_1')?.value || '').trim().toLowerCase(), kw: ['often', 'takes'] },
    { val: (document.getElementById('rev_u2_ex1_2')?.value || '').trim().toLowerCase(), kw: ['usually', 'play'] },
    { val: (document.getElementById('rev_u2_ex1_3')?.value || '').trim().toLowerCase(), kw: ['are', 'never'] },
    { val: (document.getElementById('rev_u2_ex1_4')?.value || '').trim().toLowerCase(), kw: ['sometimes', 'go'] },
    { val: (document.getElementById('rev_u2_ex1_5')?.value || '').trim().toLowerCase(), kw: ['always', 'listens'] }
  ];
  let pts = 0;
  ans.forEach(a => {
    if (a.kw.every(w => a.val.includes(w))) pts++;
  });
  updateRevisionScoreAndFanfare('u2_ex1', pts);
};

window.checkRevU2Ex2 = function() {
  const ans = [
    { val: (document.getElementById('rev_u2_ex2_1')?.value || '').trim().toLowerCase(), target: 'would you like to go' },
    { val: (document.getElementById('rev_u2_ex2_2')?.value || '').trim().toLowerCase(), target: 'would like to go' },
    { val: (document.getElementById('rev_u2_ex2_3')?.value || '').trim().toLowerCase(), target: 'like swimming' },
    { val: (document.getElementById('rev_u2_ex2_4')?.value || '').trim().toLowerCase(), target: 'would you like to come' },
    { val: (document.getElementById('rev_u2_ex2_5')?.value || '').trim().toLowerCase(), target: 'would love to' },
    { val: (document.getElementById('rev_u2_ex2_6')?.value || '').trim().toLowerCase(), target: 'like going' },
    { val: (document.getElementById('rev_u2_ex2_7')?.value || '').trim().toLowerCase(), target: 'like playing' }
  ];
  let pts = 0;
  ans.forEach(a => {
    if (a.val && (a.val.includes(a.target) || a.target.includes(a.val))) pts++;
  });
  updateRevisionScoreAndFanfare('u2_ex2', pts);
};

window.checkRevU2Ex3 = function() {
  const correct = ['cooking', 'camping', 'acting', 'photography', 'sailing', 'chess', 'painting', 'drawing'];
  let pts = 0;
  for (let i = 1; i <= 8; i++) {
    const val = (document.getElementById(`rev_u2_ex3_${i}`)?.value || '').trim().toLowerCase();
    if (val === correct[i-1]) pts++;
  }
  updateRevisionScoreAndFanfare('u2_ex3', pts);
};

// --- Unit 3 Revision 批改 ---
window.checkRevU3Ex1 = function() {
  const correct = ['cupboard', 'mirror', 'lamp', 'sofa', 'cooker', 'bed', 'table', 'window'];
  let pts = 0;
  for (let i = 1; i <= 8; i++) {
    const val = (document.getElementById(`rev_u3_ex1_${i}`)?.value || '').trim().toLowerCase();
    if (val === correct[i-1]) pts++;
  }
  updateRevisionScoreAndFanfare('u3_ex1', pts);
};

window.checkRevU3Ex2 = function() {
  const correct = ['is', 'any', 'an', 'some', 'any', 'are', 'a', 'some'];
  let pts = 0;
  for (let i = 1; i <= 8; i++) {
    const val = document.getElementById(`rev_u3_ex2_${i}`)?.value || '';
    if (val === correct[i-1]) pts++;
  }
  updateRevisionScoreAndFanfare('u3_ex2', pts);
};

window.checkRevU3Ex3 = function() {
  const correct = ['has to do', "don't have to get up", 'have to wear', "doesn't have to walk", 'have to work', 'have to help', 'have to be', "don't have to clean"];
  let pts = 0;
  for (let i = 1; i <= 8; i++) {
    const val = document.getElementById(`rev_u3_ex3_${i}`)?.value || '';
    if (val === correct[i-1]) pts++;
  }
  updateRevisionScoreAndFanfare('u3_ex3', pts);
};


// =============================================================================
// 視圖 7：🎧 雙角色英式語音聽力劇場 (Listening Theater)
// =============================================================================
function renderListeningPod() {
  const container = document.getElementById('view-listening');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const listeningMode = AppState.listeningMode || 'listeningPart3';

  // 取得目標單元聽力資料
  let currentTask = null;
  let trackLabel = '';
  if (listeningMode === 'listeningPart3') {
    currentTask = data.units[0].exercises.listeningPart3;
    trackLabel = 'Track 04: Simon talking to Amanda about his journey to school';
  } else if (listeningMode === 'listeningPart4') {
    currentTask = data.units[1].exercises.listeningPart4;
    trackLabel = 'Track 07: Five Independent Short Dialogues & Monologues';
  } else {
    currentTask = data.units[2].exercises.listeningPart2;
    trackLabel = 'Track 10: School of Cooking Field Trip Note Completion';
  }

  const speed = AppState.listeningSpeed || 1.0;

  // 播放器工具列
  const playerToolbarHtml = `
    <div class="listening-player-bar">
      <div class="rw-nav-pills">
        <button class="rw-nav-btn ${listeningMode === 'listeningPart3' ? 'active' : ''}" onclick="switchListeningMode('listeningPart3')">
          🎧 Unit 1 Part 3 海島上學
        </button>
        <button class="rw-nav-btn ${listeningMode === 'listeningPart4' ? 'active' : ''}" onclick="switchListeningMode('listeningPart4')">
          🎧 Unit 2 Part 4 五段短對話
        </button>
        <button class="rw-nav-btn ${listeningMode === 'listeningPart2' ? 'active' : ''}" onclick="switchListeningMode('listeningPart2')">
          🎧 Unit 3 Part 2 廚藝學校填表
        </button>
      </div>

      <div class="player-controls">
        <button class="ac-btn ac-btn-sm ac-btn-green" onclick="toggleListeningPlayback()">
          ${AppState.listeningIsPlaying ? '⏸️ 停止播放' : '▶️ 播放全段對話'}
        </button>
        <button class="ac-btn-icon ${speed === 1.0 ? 'active' : ''}" onclick="setListeningSpeed(1.0)">1.0x 原速</button>
        <button class="ac-btn-icon ${speed === 0.85 ? 'active' : ''}" onclick="setListeningSpeed(0.85)">0.85x 慢速</button>
        <button class="ac-btn ac-btn-sm" onclick="toggleDistractorXray()">
          ${AppState.showDistractorXray ? '🚦 隱藏陷阱透視' : '🚦 展開考後紅綠燈陷阱解剖'}
        </button>
      </div>
    </div>
  `;

  // 左欄：Tapescript 逐字稿氣泡
  const tapescriptList = currentTask.tapescript || [];
  const leftPaneHtml = `
    <div class="pane-left">
      <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:6px;">${currentTask.title}</h3>
      <div style="font-size:0.78rem; color:var(--ac-wood-light); margin-bottom:10px;">📻 ${trackLabel}</div>

      <div class="tapescript-box" id="tapescript-box">
        ${tapescriptList.map((line, idx) => {
          const isPlaying = idx === AppState.listeningCurrentIndex;
          const speakerName = line.speaker || 'Narrator';
          const isMale = speakerName.includes('Simon') || speakerName.includes('Boy') || speakerName.includes('Father') || speakerName.includes('Kris');
          const avatar = isMale ? '👨' : (speakerName.includes('Teacher') ? '👩‍🏫' : '👩');

          return `
            <div class="dialogue-bubble ${isPlaying ? 'speaking-now' : ''}" id="bubble-line-${idx}">
              <div class="speaker-avatar-tag">${avatar}</div>
              <div style="flex:1;">
                <div style="margin-bottom:2px;">
                  <span class="speaker-name-badge">${speakerName}</span>
                </div>
                <div style="font-size:0.9rem; line-height:1.45;">${line.text}</div>
              </div>
              <button class="ac-btn-icon" onclick="playSingleDialogueLine('${escapeJsStr(line.text)}', '${isMale ? 'male' : 'female'}', ${idx})">🔊</button>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // 右欄：測驗題目與紅綠燈干擾項 X-Ray
  const rightPaneHtml = `
    <div class="pane-right">
      <h4 style="font-size:1.05rem; font-weight:900; margin-bottom:10px;">🎧 聽力測驗題 (點擊選項作答)：</h4>

      <!-- 題目清單 -->
      ${(currentTask.questions || []).map((q, idx) => {
        const qNum = idx + 1;
        const ansKey = `${listeningMode}_q_${qNum}`;
        const currentAns = AppState.listeningAnswers[ansKey];
        const isAnswered = currentAns !== undefined;

        // 若為選擇題
        if (q.options) {
          const isCorrect = isAnswered && currentAns === q.answer;
          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="rw-question-header">
                <strong>Question ${qNum}</strong>
                ${isAnswered ? (isCorrect ? '<span style="color:var(--ac-green-dark); font-weight:900;">✅ 正確 (+50哩)</span>' : '<span style="color:var(--ac-red-dark); font-weight:900;">❌ 錯誤</span>') : ''}
              </div>
              <p style="font-weight:800; font-size:0.9rem; margin-bottom:8px;">${q.question || q.label}</p>

              <div class="rw-choices-grid">
                ${(Array.isArray(q.options) ? q.options : Object.keys(q.options).map(k => ({ label: k, text: q.options[k] }))).map(opt => {
                  let btnClass = 'rw-choice-btn';
                  if (isAnswered) {
                    if (opt.label === q.answer) btnClass += ' correct';
                    else if (opt.label === currentAns) btnClass += ' wrong';
                  }
                  return `
                    <button class="${btnClass}" onclick="checkListeningAnswer('${ansKey}', '${opt.label}', '${q.answer}', '${escapeJsStr(q.question || q.label)}')">
                      <strong>${opt.label}.</strong> ${opt.text}
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        } else {
          // 若為填表題 (Unit 3 Part 2)
          const ansDisplay = [q.key].concat(q.acceptedAnswers || []).filter(Boolean).join(' / ');
          return `
            <div class="rw-question-card" id="card-${ansKey}">
              <div class="cloze-input-row">
                <span style="font-weight:900; width:120px;">${q.label}</span>
                <input type="text" id="input-${ansKey}" class="cloze-input-box" value="${currentAns || ''}" placeholder="聽寫答案..." onchange="AppState.listeningAnswers['${ansKey}'] = this.value">
                <button class="ac-btn ac-btn-sm ac-btn-green" onclick="checkListeningGapAnswer('${ansKey}', '${escapeJsStr(q.key)}', '${(q.acceptedAnswers || []).join(',')}')">核對</button>
                <button type="button" class="btn-see-answer" onclick="revealLegacyGapAnswer('ls2', '${ansKey}', '${escapeJsStr(ansDisplay)}', '${escapeJsStr(q.label || '聽力表格填空')}', '', 'u3', 'Listening Part 2: ${escapeJsStr(q.label || '')}')">👀 看答案</button>
              </div>
              <div id="result-${ansKey}" style="display:none; margin-top:8px;" class="rw-explanation-box"></div>
            </div>
          `;
        }
      }).join('')}

      <!-- 🚦 考後紅綠燈干擾項陷阱解剖 (Distractor X-Ray) -->
      ${AppState.showDistractorXray ? `
        <div class="distractor-xray-box">
          <h4 style="font-weight:900; color:var(--ac-green-dark); margin-bottom:8px;">🚦 劍橋官方干擾項紅綠燈解剖卡 (distractorXray)：</h4>
          ${(() => {
            const distractorXray = currentTask.distractorXray || [];
            if (Array.isArray(distractorXray) && distractorXray.length > 0) {
              return distractorXray.map(item => `
                <div class="${item.isKey ? 'xray-clue-green' : 'xray-trap-red'}">
                  <span style="font-weight:900;">${item.isKey ? '🟢 正解關鍵線索：' : '🔴 故意設計陷阱：'}</span>
                  <p class="${item.isDistractor ? 'trap-strike' : ''}" style="margin:2px 0;">"${item.text || item.distractor || ''}"</p>
                  ${item.explanation ? `<small style="color:#721C24;">說明：${item.explanation}</small>` : ''}
                </div>
              `).join('');
            }
            return tapescriptList.filter(l => l.isKey || l.isDistractor).map(l => `
              <div class="${l.isKey ? 'xray-clue-green' : 'xray-trap-red'}">
                <span style="font-weight:900;">${l.isKey ? '🟢 正解關鍵線索句：' : '🔴 故意設計干擾陷阱句：'}</span>
                <p class="${l.isDistractor ? 'trap-strike' : ''}" style="margin:2px 0;">"${l.text}"</p>
                ${l.distractor ? `<small style="color:#721C24;">陷阱誘餌：${l.distractor}</small>` : ''}
                ${l.keyFor ? `<small style="color:#155724; display:block;">對應考點：${l.keyFor}</small>` : ''}
              </div>
            `).join('');
          })()}
        </div>
      ` : ''}
    </div>
  `;

  container.innerHTML = `
    ${playerToolbarHtml}
    <div class="split-pane-container">
      ${leftPaneHtml}
      ${rightPaneHtml}
    </div>
  `;
}

window.switchListeningMode = function(mode) {
  SoundFX.playClick();
  AppState.listeningMode = mode;
  AppState.listeningIsPlaying = false;
  AppState.listeningCurrentIndex = -1;
  window.speechSynthesis.cancel();
  renderListeningPod();
};

window.setListeningSpeed = function(speed) {
  SoundFX.playClick();
  AppState.listeningSpeed = speed;
  renderListeningPod();
};

window.toggleDistractorXray = function() {
  SoundFX.playClick();
  AppState.showDistractorXray = !AppState.showDistractorXray;
  renderListeningPod();
};

window.playSingleDialogueLine = function(text, gender, index) {
  SoundFX.playClick();
  window.speechSynthesis.cancel();
  AppState.listeningCurrentIndex = index;

  const pitch = gender === 'male' ? 0.92 : 1.08;
  TTSEngine.speak(text, {
    rate: AppState.listeningSpeed || 1.0,
    pitch: pitch,
    onEnd: () => {
      AppState.listeningCurrentIndex = -1;
      const b = document.getElementById(`bubble-line-${index}`);
      if (b) b.classList.remove('speaking-now');
    }
  });

  const activeBubble = document.getElementById(`bubble-line-${index}`);
  if (activeBubble) {
    document.querySelectorAll('.dialogue-bubble').forEach(el => el.classList.remove('speaking-now'));
    activeBubble.classList.add('speaking-now');
  }
};

window.toggleListeningPlayback = function() {
  if (AppState.listeningIsPlaying) {
    AppState.listeningIsPlaying = false;
    AppState.listeningCurrentIndex = -1;
    window.speechSynthesis.cancel();
    renderListeningPod();
    return;
  }

  AppState.listeningIsPlaying = true;
  AppState.listeningCurrentIndex = 0;
  playDialogueQueueStep();
};

function playDialogueQueueStep() {
  if (!AppState.listeningIsPlaying) return;

  const data = window.KET_DATA;
  const mode = AppState.listeningMode || 'listeningPart3';
  let task = null;
  if (mode === 'listeningPart3') task = data.units[0].exercises.listeningPart3;
  else if (mode === 'listeningPart4') task = data.units[1].exercises.listeningPart4;
  else task = data.units[2].exercises.listeningPart2;

  const lines = task.tapescript || [];
  if (AppState.listeningCurrentIndex >= lines.length) {
    AppState.listeningIsPlaying = false;
    AppState.listeningCurrentIndex = -1;
    renderListeningPod();
    return;
  }

  const currentLine = lines[AppState.listeningCurrentIndex];
  const isMale = (currentLine.speaker || '').includes('Simon') || (currentLine.speaker || '').includes('Boy');
  const pitch = isMale ? 0.92 : 1.08;

  // 高亮當前對話氣泡
  document.querySelectorAll('.dialogue-bubble').forEach(b => b.classList.remove('speaking-now'));
  const currentBubble = document.getElementById(`bubble-line-${AppState.listeningCurrentIndex}`);
  if (currentBubble) {
    currentBubble.classList.add('speaking-now');
    currentBubble.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  TTSEngine.speak(currentLine.text, {
    rate: AppState.listeningSpeed || 1.0,
    pitch: pitch,
    onEnd: () => {
      if (AppState.listeningIsPlaying) {
        AppState.listeningCurrentIndex++;
        setTimeout(playDialogueQueueStep, 450);
      }
    }
  });
}

window.checkListeningAnswer = function(ansKey, selected, correct, qText) {
  SoundFX.playClick();
  AppState.listeningAnswers[ansKey] = selected;
  const acc = AppState.accountData;

  if (selected === correct) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+50 哩數!');
    acc.nookMiles += 50;
    acc.shieldProgress.listening = Math.min(5.0, acc.shieldProgress.listening + 0.08);
  } else {
    SoundFX.playWrong();
    if (!acc.netErrors[ansKey]) {
      acc.netErrors[ansKey] = {
        id: ansKey, count: 1, itemType: 'listening', unitId: AppState.currentUnit,
        title: `聽力測驗: ${qText}`, wrongAnswer: selected, correctAnswer: correct,
        rule: '請參閱聽力逐字稿與紅綠燈干擾項', lastUpdated: new Date().toISOString()
      };
    } else {
      acc.netErrors[ansKey].count += 1;
    }
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderListeningPod();
};

window.checkListeningGapAnswer = function(ansKey, keyWord, acceptedStr) {
  SoundFX.playClick();
  const inputEl = document.getElementById(`input-${ansKey}`);
  if (!inputEl) return;
  const userVal = inputEl.value.trim().toLowerCase();
  const acceptedList = acceptedStr.split(',').map(s => s.trim().toLowerCase());
  const acc = AppState.accountData;

  if (acceptedList.includes(userVal) || userVal === keyWord.toLowerCase()) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '+50 哩數!');
    inputEl.style.borderColor = 'var(--ac-green-dark)';
    inputEl.style.backgroundColor = '#E8F5E9';
    acc.nookMiles += 50;
    acc.shieldProgress.listening = Math.min(5.0, acc.shieldProgress.listening + 0.08);
  } else {
    SoundFX.playWrong();
    inputEl.style.borderColor = 'var(--ac-red-dark)';
    inputEl.style.backgroundColor = '#FCE4EC';
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
};

// =============================================================================
// 視圖 8：🎙️ 口說模擬對練室 (Speaking Simulator)
// =============================================================================
function renderSpeakingPod() {
  const container = document.getElementById('view-speaking');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  const spMode = AppState.speakingMode || 'speakingPart1';

  const toolbarHtml = `
    <div class="rw-toolbar">
      <div class="rw-nav-pills">
        <button class="rw-nav-btn ${spMode === 'speakingPart1' ? 'active' : ''}" onclick="switchSpeakingMode('speakingPart1')">
          🎙️ Speaking Part 1 考官個人問答 (U1/U2)
        </button>
        <button class="rw-nav-btn ${spMode === 'speakingPart2' ? 'active' : ''}" onclick="switchSpeakingMode('speakingPart2')">
          🎙️ Speaking Part 2 五種用餐情境圖片討論 (U3)
        </button>
      </div>
    </div>
  `;

  let contentHtml = '';

  if (spMode === 'speakingPart1') {
    const u1 = data.units[0];
    const sp1 = u1.exercises.speakingPart1;

    contentHtml = `
      <div class="speaking-exam-card">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${sp1.title}</h3>
        <div class="ac-npc-bubble" style="margin-bottom:12px;">
          <span class="ac-npc-tag">🦉 口說考官小叮嚀</span>
          <p style="font-size:0.82rem;">${sp1.examTip}</p>
        </div>

        <!-- 互動外貌配對暖身 (Appearance Matching) -->
        <div class="word-bank-container">
          <strong style="color:#B25E00; font-size:0.85rem;">👥 外貌特徵配對暖身 (Appearance Matching)：</strong>
          <div style="display:flex; gap:12px; align-items:center; margin-top:8px;">
            <img src="${sp1.image}" alt="People A~F" style="max-height:120px; border-radius:8px; border:2px solid var(--ac-wood-border);">
            <div style="font-size:0.8rem; line-height:1.6;">
              ${sp1.appearanceMatching ? Object.keys(sp1.appearanceMatching).map(k => `
                <div><strong>${k}.</strong> ${sp1.appearanceMatching[k]}</div>
              `).join('') : ''}
            </div>
          </div>
        </div>

        <h4 style="font-size:1.05rem; font-weight:900; margin:14px 0 10px;">👨‍💼 考官個人背景問答演練 (點擊聽提問並練習回答)：</h4>
        ${sp1.questions.map((item, idx) => {
          const qId = `sp1_q_${idx}`;
          const isRevealed = AppState.speakingRevealed[qId];

          return `
            <div class="rw-question-card">
              <div class="examiner-prompt-box">
                <div>
                  <strong style="color:#0077B6;">考官問題 ${idx + 1}：</strong>
                  <div style="font-size:1rem; font-weight:800; margin-top:2px;">"${item.question}"</div>
                </div>
                <button class="ac-btn ac-btn-sm ac-btn-blue" onclick="playVocabAudio('${escapeJsStr(item.question)}', 1.0)">🔊 考官發問</button>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:0.78rem; color:var(--ac-wood-light);">請嘗試開口回答至少 2~3 完整句子...</span>
                <button class="ac-btn-icon" onclick="toggleSpeakingReveal('${qId}')">
                  ${isRevealed ? '收合範例' : '💡 翻開 15 盾滿分範本與擴充句型'}
                </button>
              </div>

              ${isRevealed ? `
                <div class="model-response-box">
                  <div style="font-weight:900; color:var(--ac-green-dark); margin-bottom:4px;">🌟 15 盾考生滿分回答範例：</div>
                  <blockquote style="font-style:italic; margin-bottom:6px;">"${item.modelAnswer || item.sampleAnswer}"</blockquote>
                  <small style="color:var(--ac-wood-light);">💡 <strong>加分策略：</strong>${item.tip || '不要只回答單字或 Yes/No，補充理由或細節可直接奪得 5 盾！'}</small>
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    // Unit 3 Speaking Part 2
    const u3 = data.units[2];
    const sp2 = u3.exercises.speakingPart2;

    contentHtml = `
      <div class="speaking-exam-card">
        <h3 style="font-size:1.15rem; font-weight:900; margin-bottom:8px;">${sp2.title}</h3>
        <img src="assets/images/u3/u3_speaking_exam_5meals.jpg" alt="5 Meals" class="rw-article-image">

        <!-- 理由配對互動 (Reason Matching) -->
        <div class="word-bank-container">
          <strong style="color:#B25E00; font-size:0.85rem;">🍽️ 用餐喜好理由配對 (Reason Matching)：</strong>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; font-size:0.78rem;">
            ${sp2.reasonMatching ? Object.keys(sp2.reasonMatching).map(k => `
              <div style="background:#FFF; padding:4px 8px; border-radius:6px; border:1px solid var(--ac-yellow-border);">
                <strong>${k}:</strong> ${sp2.reasonMatching[k]}
              </div>
            `).join('') : ''}
          </div>
        </div>

        <!-- 考生優劣表現對照 (Candidate Comparison) -->
        <div class="ac-card" style="margin-top:12px;">
          <h4 style="font-weight:900; color:var(--ac-green-dark); margin-bottom:8px;">👥 考生表現優劣分析對照 (Candidate Comparison)：</h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.82rem;">
            <div style="background:#FCE4EC; border:2px solid var(--ac-red-border); border-radius:8px; padding:10px;">
              <strong style="color:var(--ac-red-dark);">❌ 弱項表現 (只得 10 盾)：</strong>
              <p style="margin-top:4px;">回答太短（'I like pizza. Yes.'），沒有詢問夥伴意見，缺乏互動。</p>
            </div>
            <div style="background:#E8F5E9; border:2px solid var(--ac-green-dark); border-radius:8px; padding:10px;">
              <strong style="color:var(--ac-green-dark);">✅ 15 盾卓越表現 (Distinction)：</strong>
              <p style="margin-top:4px;">陳述理由並主動互動：'I think having a picnic is great because you can enjoy fresh air. What do you think?'</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    ${toolbarHtml}
    ${contentHtml}
  `;
}

window.switchSpeakingMode = function(mode) {
  SoundFX.playClick();
  AppState.speakingMode = mode;
  renderSpeakingPod();
};

window.toggleSpeakingReveal = function(qId) {
  SoundFX.playClick();
  AppState.speakingRevealed[qId] = !AppState.speakingRevealed[qId];
  renderSpeakingPod();
};

// 相容包裝函式
function renderRwPlaceholder() {
  renderReadingWritingPod();
}

function renderListeningPlaceholder() {
  renderListeningPod();
}

function renderSpeakingPlaceholder() {
  renderSpeakingPod();
}

// =============================================================================
// 視圖 9：🖨️ Cambridge A2 Key (KET) 官方全真 A4 考卷列印引擎 (@media print, Phase G)
// =============================================================================
const PRINT_PART_ORDER = ['RWP1', 'RWP2', 'RWP3', 'RWP4', 'RWP5', 'RWP6', 'RWP7', 'LSP1', 'LSP2', 'LSP3', 'LSP4', 'LSP5', 'SPP1', 'SPP2'];

const PRINT_SECTION_BARS = {
  reading_writing: { barTitle: 'PAPER 1 · READING AND WRITING', barSub: 'Part 1–7 劍橋讀寫全真測驗', parts: ['RWP1', 'RWP2', 'RWP3', 'RWP4', 'RWP5', 'RWP6', 'RWP7'] },
  listening: { barTitle: 'PAPER 2 · LISTENING', barSub: 'Part 1–5 聽力理解測驗（錄音播放兩遍）', parts: ['LSP1', 'LSP2', 'LSP3', 'LSP4', 'LSP5'] },
  speaking: { barTitle: 'PAPER 3 · SPEAKING', barSub: 'Part 1–2 考官問答與五圖互動口說', parts: ['SPP1', 'SPP2'] }
};

const PRINT_PART_META = {
  RWP1: { name: 'Part 1 · 簡短告示、標誌與訊息三選一', inst: 'For each question, choose the correct answer (A, B or C).' },
  RWP2: { name: 'Part 2 · 三篇短文人物與地點配對閱讀', inst: 'Read the three texts carefully. For each question, choose A, B or C.' },
  RWP3: { name: 'Part 3 · 長篇文章細節與主旨三選一', inst: 'Read the article and answer the questions below (A, B or C).' },
  RWP4: { name: 'Part 4 · 詞彙語意克漏字三選一', inst: 'Choose the correct word (A, B or C) for each space in the text.' },
  RWP5: { name: 'Part 5 · 開放式文法填空（每格限填一字）', inst: 'Write ONE word for each gap. Spelling must be exact.' },
  RWP6: { name: 'Part 6 · 引導式短文與電子郵件寫作 (25+ Words)', inst: 'Read the email/note carefully and cover all 3 bullet points. Write 25 words or more.' },
  RWP7: { name: 'Part 7 · 三格連環看圖寫故事 (35+ Words)', inst: 'Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.' },
  LSP1: { name: 'Part 1 · 短對話情境與圖片三選一', inst: 'Listen twice to each short conversation and choose A, B or C.' },
  LSP2: { name: 'Part 2 · 聽力筆記與表格資訊填空', inst: 'Listen twice and write one word, a number, a date or a time in each gap.' },
  LSP3: { name: 'Part 3 · 長對話細節與態度三選一', inst: 'Listen twice to the longer conversation and choose A, B or C.' },
  LSP4: { name: 'Part 4 · 短對話與獨白主旨三選一', inst: 'Listen twice to each short extract and choose A, B or C.' },
  LSP5: { name: 'Part 5 · 長對話人物/項目資訊配對', inst: 'Listen twice and choose the correct answer for each item.' },
  SPP1: { name: 'Part 1 · 考官一對一個人生活問答卡', inst: 'Answer the examiner clearly in full sentences with extra details.' },
  SPP2: { name: 'Part 2 · 雙考生五圖討論與延伸對答卡', inst: 'Discuss all five options, give reasons (because/so), and compare preferences.' }
};

function normalizePrintHtml(html) {
  return String(html || '').replace(/\s+/g, ' ').trim();
}

function getPrintPaperCover(title, subTitle, badgeText, candidate, dateStr, extraCols) {
  return `
    <div class="ket-paper-cover">
      <div class="ket-paper-cover-top">
        <div>
          <div style="font-size:0.78rem; font-weight:900; letter-spacing:1.2px; color:#333333;">CAMBRIDGE ASSESSMENT ENGLISH | A2 KEY FOR SCHOOLS</div>
          <h2 class="ket-paper-exam-title">${title}</h2>
          <h3 class="ket-paper-exam-sub">${subTitle}</h3>
        </div>
        <div class="ket-paper-badge-box">${badgeText}</div>
      </div>
      <div class="ket-paper-meta-grid">
        <div>Candidate: <u>${candidate}</u></div>
        <div>Date: <u>${dateStr}</u></div>
        <div>Target: <strong>13 Shields (Merit 82%+)</strong></div>
        ${extraCols || '<div>Score: <strong>[ &nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp; ]</strong></div>'}
      </div>
    </div>
  `;
}

function groupPrintQuestionsByPart(questions) {
  const groups = [];
  const groupMap = {};

  questions.forEach(q => {
    const part = q.ketPart || 'RWP1';
    const rawTitle = (q.passageTitle || '').trim();
    // 唯有當題目具備共同非空 passageTitle 時才在同一 Part 內合併呈現共享文本，避免不同短告示誤合併
    const groupKey = rawTitle ? `${q.unitId || ''}::${part}::${rawTitle}` : `__single::${q.code}`;
    if (!groupMap[groupKey]) {
      const grp = {
        key: groupKey,
        part,
        passageTitle: rawTitle,
        passageHtml: q.passageHtml || '',
        sharedImage: null,
        items: []
      };
      groupMap[groupKey] = grp;
      groups.push(grp);
    }
    if (!groupMap[groupKey].passageHtml && q.passageHtml) {
      groupMap[groupKey].passageHtml = q.passageHtml;
    }
    groupMap[groupKey].items.push(q);
  });

  // 檢查同組多題是否完全共用同一張圖（如 RWP2 人物圖、RWP3/LSP2 共享圖），若相同則群組頁首只印一次
  groups.forEach(grp => {
    if (grp.items.length > 1) {
      const imgs = grp.items.map(x => x.image || '').filter(Boolean);
      if (imgs.length > 0 && imgs.every(src => src === imgs[0]) && imgs.length === grp.items.length) {
        grp.sharedImage = imgs[0];
      }
    }
  });

  return groups;
}

function renderPrintTeacherKeyBox(q) {
  const exp = q.explanation || {};
  let ansLabel = q.answer || '';
  if (q.questionType === 'choice' && Array.isArray(q.options)) {
    const optObj = q.options.find(o => o.key === q.answer);
    if (optObj) ansLabel = `(${optObj.key}) ${optObj.text}`;
  } else if (q.questionType === 'gap' && Array.isArray(q.acceptedAnswers) && q.acceptedAnswers.length > 1) {
    ansLabel = q.acceptedAnswers.join(' / ');
  } else if (q.questionType === 'writing' || q.questionType === 'speaking') {
    ansLabel = ansLabel || '依劍橋 Rubric / 13~15 盾標準示範對照批改';
  }

  let trapsHtml = '';
  if (exp.distractorAnalysis && typeof exp.distractorAnalysis === 'object') {
    trapsHtml = Object.keys(exp.distractorAnalysis).map(k => `<li>${exp.distractorAnalysis[k]}</li>`).join('');
  } else if (Array.isArray(exp.commonTraps)) {
    trapsHtml = exp.commonTraps.map(t => `<li><strong>${t.wrong}：</strong>${t.whyWrong}</li>`).join('');
  }

  let modelHtml = '';
  if (q.modelAnswers) {
    const m = q.modelAnswers;
    modelHtml = `
      <div style="margin-top:6px; border-top:1px dashed #2D6A4F; padding-top:6px;">
        ${Array.isArray(m.checklist) && m.checklist.length > 0 ? `<div><strong>📋 得分要點：</strong>${m.checklist.join(' ／ ')}</div>` : ''}
        ${m.band13 ? `<div style="margin-top:3px;"><strong>🛡️ 13 盾 Merit 範文：</strong><em>"${m.band13}"</em></div>` : ''}
        ${m.band15 ? `<div style="margin-top:3px;"><strong>👑 15 盾 Distinction 範文：</strong><em>"${m.band15}"</em></div>` : ''}
      </div>
    `;
  }

  let tapescriptHtml = '';
  if (Array.isArray(q.audioLines) && q.audioLines.length > 0) {
    tapescriptHtml = `
      <div class="ket-paper-tapescript">
        <strong>📜 聽力完整逐字稿 (Tapescript — 教師卷專用)：</strong>
        ${q.audioLines.map(line => {
          const sp = (typeof line === 'object' && line.speaker) ? `<strong>${line.speaker}:</strong> ` : '';
          const txt = (typeof line === 'object' && line.text) ? line.text : String(line);
          const tag = (typeof line === 'object' && line.isClue) ? ' <span style="font-weight:900;">[★關鍵線索]</span>'
            : ((typeof line === 'object' && line.isTrap) ? ' <span style="text-decoration:underline;">[⚠干擾陷阱]</span>' : '');
          return `<div>${sp}${txt}${tag}</div>`;
        }).join('')}
      </div>
    `;
  }

  return `
    <div class="ket-paper-answer-box">
      <div><strong>✅ 標準答案：</strong><u>${ansLabel}</u></div>
      ${exp.examPurpose ? `<div><strong>🎯 出題目的：</strong>${exp.examPurpose}</div>` : ''}
      ${exp.correctReason ? `<div><strong>✅ 正解證據：</strong>${exp.correctReason}</div>` : ''}
      ${trapsHtml ? `<div><strong>❌ 選項陷阱拆解：</strong><ul>${trapsHtml}</ul></div>` : ''}
      ${modelHtml}
      ${tapescriptHtml}
    </div>
  `;
}

function renderPrintWritingLinedArea(ketPart) {
  const isPart7 = ketPart === 'RWP7';
  const totalLines = isPart7 ? 9 : 6;
  const thresholdIdx = isPart7 ? 5 : 4;
  const thresholdLabel = isPart7 ? '🚩 35+ 字 KET 滿分安全警戒線 (35-Word Safe Threshold)' : '🚩 25+ 字 KET 基本及格門檻 (25-Word Safe Threshold)';

  let linesHtml = '';
  for (let i = 0; i < totalLines; i++) {
    if (i === thresholdIdx) {
      linesHtml += `<div class="print-line-row print-line-dashed"><span class="print-milestone-marker">${thresholdLabel}</span></div>`;
    } else {
      linesHtml += `<div class="print-line-row"></div>`;
    }
  }

  return `
    <div class="ket-paper-writing-box">
      <strong style="font-size:0.86rem;">Your Answer (Write clearly in English on the lines below):</strong>
      ${linesHtml}
      <table class="ket-paper-rubric">
        <thead>
          <tr>
            <th>劍橋寫作評分向度</th>
            <th>閱卷檢查基準 (Cambridge Assessment Criteria)</th>
            <th style="width:72px; text-align:center;">得分 (0~5)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Content (內容)</strong></td>
            <td>${isPart7 ? '完整涵蓋三格圖片情節與角色動作，無遺漏關鍵事件。' : '完整回應題目指定之全部三個要點 (3 Bullet Points)。'}</td>
            <td style="text-align:center; font-weight:bold;">[ &nbsp; / 5 ]</td>
          </tr>
          <tr>
            <td><strong>Organisation (組織)</strong></td>
            <td>敘事具時間/邏輯順序，善用連接詞 (and, but, because, so, then)。</td>
            <td style="text-align:center; font-weight:bold;">[ &nbsp; / 5 ]</td>
          </tr>
          <tr>
            <td><strong>Language (語言)</strong></td>
            <td>時態正確（如過去式/未來規劃）、單字拼字與基礎標點準確。</td>
            <td style="text-align:center; font-weight:bold;">[ &nbsp; / 5 ]</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderPrintQuestionRow(q, qNum, showAnswers, skipPassageHtml, skipImage) {
  const isListening = q.section === 'listening' || (q.ketPart && q.ketPart.startsWith('LS'));
  const stars = '★'.repeat(q.difficulty || 3) + '☆'.repeat(5 - (q.difficulty || 3));

  let interactionHtml = '';
  if (q.questionType === 'choice' && Array.isArray(q.options)) {
    interactionHtml = `
      <div class="ket-paper-mcq-grid">
        ${q.options.map(opt => `
          <div class="ket-paper-opt-row">
            <span class="ket-paper-opt-box">${opt.key}</span>
            <span>${opt.text}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (q.questionType === 'gap') {
    interactionHtml = `
      <div class="ket-paper-gap-line">
        ✍️ Write your answer (1 word / number / time): ______________________________________
      </div>
    `;
  } else if (q.questionType === 'writing') {
    interactionHtml = renderPrintWritingLinedArea(q.ketPart);
  } else if (q.questionType === 'speaking') {
    interactionHtml = `
      <div class="ket-paper-speaking-box">
        <strong>🎙️ 考生口說關鍵字筆記欄 (Keywords & Complete Sentence Plan):</strong>
        <div class="print-line-row"></div>
        <div class="print-line-row"></div>
      </div>
    `;
  }

  return `
    <div class="ket-paper-q-row">
      <div class="ket-paper-q-head">
        <div class="ket-paper-q-num">Question ${qNum} <span style="font-size:0.78rem; color:#555555; font-weight:normal;">(${stars})</span></div>
        <span class="ket-paper-code-tag">${q.code}</span>
      </div>
      ${(isListening && !showAnswers) ? `
        <div class="ket-paper-listening-meta">🎧 Audio Track [${q.code}] — 考場雙遍播音（空白學生卷已自動隱藏逐字稿與線索）</div>
      ` : ''}
      ${(!skipPassageHtml && q.passageHtml) ? `<div class="ket-paper-passage" style="margin-bottom:8px;">${q.passageHtml}</div>` : ''}
      ${(!skipImage && q.image) ? `<img class="ket-paper-q-img" src="${q.image}" alt="${q.code}">` : ''}
      ${q.instruction ? `<div style="font-size:0.84rem; color:#333333; margin-bottom:4px; font-style:italic;">${q.instruction}</div>` : ''}
      <div style="font-size:0.93rem; font-weight:700; color:#111111;">${q.prompt || ''}</div>
      ${interactionHtml}
      ${showAnswers ? renderPrintTeacherKeyBox(q) : ''}
    </div>
  `;
}

function renderPrintKetBookletBody(questions, showAnswers, startNum) {
  let qCounter = startNum || 1;
  const groups = groupPrintQuestionsByPart(questions);
  const groupsByPart = {};
  groups.forEach(g => {
    if (!groupsByPart[g.part]) groupsByPart[g.part] = [];
    groupsByPart[g.part].push(g);
  });

  const sections = ['reading_writing', 'listening', 'speaking'];
  let html = '';

  sections.forEach(secKey => {
    const secMeta = PRINT_SECTION_BARS[secKey];
    const secParts = secMeta.parts.filter(p => groupsByPart[p] && groupsByPart[p].length > 0);
    if (secParts.length === 0) return;

    const secQCount = secParts.reduce((sum, p) => sum + groupsByPart[p].reduce((s2, g) => s2 + g.items.length, 0), 0);
    html += `
      <div class="ket-paper-section-bar">
        <span>${secMeta.barTitle} — ${secMeta.barSub}</span>
        <span style="font-size:0.84rem;">${secQCount} Questions</span>
      </div>
    `;

    secParts.forEach(partCode => {
      const partMeta = PRINT_PART_META[partCode] || { name: partCode, inst: '' };
      const partGroups = groupsByPart[partCode];
      const partCount = partGroups.reduce((s, g) => s + g.items.length, 0);

      html += `
        <div class="ket-paper-part-head">
          <div class="ket-paper-part-title">
            <span>${partMeta.name}</span>
            <span>[${partCount} Marks]</span>
          </div>
          <p class="ket-paper-part-inst">${partMeta.inst}</p>
        </div>
      `;

      partGroups.forEach(grp => {
        const hasSharedPassage = grp.items.length > 1 && Boolean(grp.passageHtml || grp.sharedImage);
        const normShared = normalizePrintHtml(grp.passageHtml);

        html += `<div class="ket-paper-group">`;
        if (hasSharedPassage) {
          html += `
            <div class="ket-paper-passage">
              ${grp.passageTitle ? `<div class="ket-paper-passage-title">📖 Shared Passage: ${grp.passageTitle} (Questions ${qCounter}–${qCounter + grp.items.length - 1})</div>` : ''}
              ${grp.passageHtml || ''}
              ${grp.sharedImage ? `<img src="${grp.sharedImage}" alt="${grp.passageTitle || grp.part}">` : ''}
            </div>
          `;
        }

        grp.items.forEach(q => {
          const skipPass = hasSharedPassage && Boolean(grp.passageHtml) && normalizePrintHtml(q.passageHtml) === normShared;
          const skipImg = hasSharedPassage && Boolean(grp.sharedImage) && q.image === grp.sharedImage;
          html += renderPrintQuestionRow(q, qCounter++, showAnswers, skipPass, skipImg);
        });

        html += `</div>`;
      });
    });
  });

  return html;
}

function renderPrintPod() {
  const container = document.getElementById('view-print');
  if (!container || !window.KET_DATA) return;

  const data = window.KET_DATA;
  if (!AppState.printSheetMode) AppState.printSheetMode = 'u1';
  if (AppState.printShowAnswers === undefined) AppState.printShowAnswers = false;

  const rawMode = AppState.printSheetMode;
  const mode = rawMode === 'rev' ? 'revision' : rawMode;
  const showAnswers = AppState.printShowAnswers;
  const candidateName = AppState.currentAccount === 'rex' ? 'Rex (6年級)' : (AppState.currentAccount === 'hugo' ? 'Hugo (5年級)' : (AppState.currentAccount === 'test1' ? '家長測試1' : '訪客考生'));

  container.innerHTML = `
    <div class="print-preview-container">
      <!-- 頂部操作控制列 (列印時由 .no-print 自動隱藏) -->
      <div class="card-ac no-print" style="margin-bottom:16px; padding:12px 18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:10px;">
          <div>
            <h3 style="margin:0; font-size:1.15rem; font-weight:900; color:var(--ac-wood);">🖨️ Cambridge KET 官方全真 A4 考卷列印引擎 (@media print)</h3>
            <span style="font-size:0.8rem; color:var(--ac-wood-light);">100% 獨立自足命題（自動合併共享短文、25/35字寫作格線、個人化 KET 錯題考卷、教師卷含四維詳解與聽力稿）</span>
          </div>
          <div>
            <button class="ac-btn ac-btn-green" style="font-size:1.05rem; padding:10px 22px; font-weight:900; box-shadow:0 4px 0 var(--ac-green-border);" onclick="triggerPrint()">
              🖨️ 一鍵列印 A4 紙本考卷 (window.print)
            </button>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; border-top:2px solid var(--ac-wood-border); padding-top:10px;">
          <!-- 考卷樣式切換 -->
          <div class="rw-nav-pills" style="margin:0;">
            <button class="rw-nav-btn ${mode === 'u1' ? 'active' : ''}" onclick="setPrintMode('u1')">📄 Unit 1 全真卷</button>
            <button class="rw-nav-btn ${mode === 'u2' ? 'active' : ''}" onclick="setPrintMode('u2')">📄 Unit 2 全真卷</button>
            <button class="rw-nav-btn ${mode === 'u3' ? 'active' : ''}" onclick="setPrintMode('u3')">📄 Unit 3 全真卷</button>
            <button class="rw-nav-btn ${mode === 'revision' ? 'active' : ''}" onclick="setPrintMode('revision')">🏆 Revision 總複習全真卷</button>
            <button class="rw-nav-btn ${mode === 'rw_full' ? 'active' : ''}" onclick="setPrintMode('rw_full')">📖 Paper 1 讀寫專項</button>
            <button class="rw-nav-btn ${mode === 'ls_full' ? 'active' : ''}" onclick="setPrintMode('ls_full')">🎧 Paper 2 聽力專項</button>
            <button class="rw-nav-btn ${mode === 'sp_cards' ? 'active' : ''}" onclick="setPrintMode('sp_cards')">🎙️ Paper 3 口說題卡</button>
            <button class="rw-nav-btn ${mode === 'writing' ? 'active' : ''}" onclick="setPrintMode('writing')">📝 Part 6/7 寫作橫線本</button>
            <button class="rw-nav-btn ${mode === 'vocab_core' ? 'active' : ''}" onclick="setPrintMode('vocab_core')">🔤 字彙與錯句語境卷</button>
            <button class="rw-nav-btn ${mode === 'errorbook' ? 'active' : ''}" onclick="setPrintMode('errorbook')">📕 個人化 KET 錯題考卷</button>
          </div>

          <!-- 解答模式切換 -->
          <div>
            <button class="ac-btn ac-btn-sm ${showAnswers ? 'ac-btn-orange' : 'ac-btn-cream'}" onclick="togglePrintAnswers()">
              ${showAnswers ? '🔑 目前：教師詳解答案卷 (含四維詳解、範文與聽力稿)' : '📝 目前：學生空白測驗卷 (乾淨作答零劇透)'}
            </button>
          </div>
        </div>
      </div>

      <!-- A4 考卷主渲染區塊 -->
      <div id="print-sheet-area">
        ${renderPrintSheetContent(mode, showAnswers, candidateName, data)}
      </div>
    </div>
  `;
}

function renderPrintSheetContent(mode, showAnswers, candidate, data) {
  const effectiveMode = mode === 'rev' ? 'revision' : mode;
  const dateStr = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
  const bankQs = (window.KET_EXAM_BANK && Array.isArray(window.KET_EXAM_BANK.questions))
    ? window.KET_EXAM_BANK.questions
    : [];
  const sortedBank = bankQs.slice().sort((a, b) => {
    const unitRank = { u1: 1, u2: 2, u3: 3, rev: 4 };
    const ua = unitRank[a.unitId] || 9;
    const ub = unitRank[b.unitId] || 9;
    if (effectiveMode === 'rw_full' || effectiveMode === 'ls_full' || effectiveMode === 'sp_cards' || effectiveMode === 'writing') {
      const pa = PRINT_PART_ORDER.indexOf(a.ketPart);
      const pb = PRINT_PART_ORDER.indexOf(b.ketPart);
      if (pa !== pb) return pa - pb;
    }
    if (ua !== ub) return ua - ub;
    return PRINT_PART_ORDER.indexOf(a.ketPart) - PRINT_PART_ORDER.indexOf(b.ketPart);
  });

  // 1. Unit 1 / Unit 2 / Unit 3 全真 14-Part 考卷
  if (effectiveMode === 'u1' || effectiveMode === 'u2' || effectiveMode === 'u3') {
    const uIdx = effectiveMode === 'u1' ? 0 : (effectiveMode === 'u2' ? 1 : 2);
    const unit = (data && data.units && data.units[uIdx]) || { number: uIdx + 1, title: effectiveMode.toUpperCase(), topic: '' };
    const unitQs = sortedBank.filter(q => q.unitId === effectiveMode);
    const cover = getPrintPaperCover(
      `UNIT ${unit.number} FULL MOCK EXAM PAPER`,
      `Unit ${unit.number}: ${unit.title} — ${unit.topic} (Part 1–14 Full Coverage)`,
      `${unitQs.length} Questions`,
      candidate,
      dateStr,
      `<div>Score: <strong>[ &nbsp;&nbsp;&nbsp;&nbsp; / ${unitQs.length} ]</strong></div>`
    );
    if (unitQs.length === 0) {
      return cover + `<div style="padding:24px; text-align:center;">目前尚未載入 KET 全真題庫。</div>`;
    }
    return cover + renderPrintKetBookletBody(unitQs, showAnswers, 1);
  }

  // 2. 分科專項全真卷 (Reading & Writing / Listening / Speaking / Part 6&7 Writing)
  if (effectiveMode === 'rw_full' || effectiveMode === 'ls_full' || effectiveMode === 'sp_cards' || effectiveMode === 'writing') {
    const modeConfig = {
      rw_full: {
        title: 'PAPER 1: READING & WRITING — SPECIALIST BOOKLET',
        sub: 'Part 1–7 Comprehensive Reading & Writing Practice (100% Self-Contained)',
        filterFn: q => q.section === 'reading' || q.section === 'writing' || (q.ketPart && q.ketPart.startsWith('RW'))
      },
      ls_full: {
        title: 'PAPER 2: LISTENING — SPECIALIST PRACTICE BOOKLET',
        sub: 'Part 1–5 Cambridge Listening Diagnostic (Audio Played Twice per Track)',
        filterFn: q => q.section === 'listening' || (q.ketPart && q.ketPart.startsWith('LS'))
      },
      sp_cards: {
        title: 'PAPER 3: SPEAKING — EXAMINER & CANDIDATE TASK CARDS',
        sub: 'Part 1 Personal Questions & Part 2 Collaborative 5-Prompt Cards',
        filterFn: q => q.section === 'speaking' || (q.ketPart && q.ketPart.startsWith('SP'))
      },
      writing: {
        title: 'PAPER 1 WRITING — PART 6 & PART 7 OFFICIAL LINED BOOKLET',
        sub: 'Guided Message (25+ Words) & Three-Picture Story Writing (35+ Words) + Cambridge Rubric',
        filterFn: q => q.ketPart === 'RWP6' || q.ketPart === 'RWP7'
      }
    }[effectiveMode];

    const filteredQs = sortedBank.filter(modeConfig.filterFn);
    const cover = getPrintPaperCover(
      modeConfig.title,
      modeConfig.sub,
      `${filteredQs.length} Tasks`,
      candidate,
      dateStr,
      `<div>Status: <strong>${showAnswers ? 'Teacher Key Mode' : 'Student Exam Sheet'}</strong></div>`
    );
    return cover + renderPrintKetBookletBody(filteredQs, showAnswers, 1);
  }

  // 3. Revision 總複習全真卷（融合 KET 官方 Revision 試題 + 100% 獨立完整句子版 Units 1-3 文法複習）
  if (effectiveMode === 'revision') {
    const revBankQs = sortedBank.filter(q => q.unitId === 'rev');
    const cover = getPrintPaperCover(
      'UNITS 1–3 COMPREHENSIVE REVISION EXAM',
      'Part A: Official KET Comprehensive Questions + Part B: Self-Contained Grammar & Context Review',
      `Part A: ${revBankQs.length} KET Qs + Part B: 45 Checks`,
      candidate,
      dateStr
    );

    const revBankBody = revBankQs.length > 0 ? renderPrintKetBookletBody(revBankQs, showAnswers, 1) : '';
    const selfContainedGrammarHtml = `
      <div class="ket-paper-section-bar">
        <span>PART B · UNITS 1–3 SELF-CONTAINED GRAMMAR & VOCABULARY CONTEXT DRILL</span>
        <span style="font-size:0.84rem;">獨立完整句子診斷（無須課本即可作答）</span>
      </div>

      <div class="ket-paper-q-row">
        <div class="ket-paper-part-title"><span>Section B1 · Unit 1 Have got / Do & Does / Family in Context</span><span>[15 Marks]</span></div>
        <div style="font-size:0.88rem; line-height:1.7;">
          1. A: ________________ (you / have got) any brothers? &nbsp; B: Yes, I ________________ (have got) one younger sister.<br>
          2. A: ________________ (she / have got) dark curly hair? &nbsp; B: No, she ________________ (not / have got) dark hair; she has got blonde hair.<br>
          3. My mum's mother visits us every Sunday. She is my <strong>g</strong>________________.<br>
          4. My father's brother lives in London. He is my favourite <strong>u</strong>________________.<br>
          5. What time ________________ (do / does) your best friend usually go to bed on school nights?<br>
          6. How often ________________ (do / does) your cousins play badminton with you at the sports centre?
        </div>
        ${showAnswers ? `
          <div class="ket-paper-answer-box">
            <strong>✅ 教師解答：</strong> 1. Have you got / have got ('ve got) &nbsp; 2. Has she got / hasn't got &nbsp; 3. grandmother &nbsp; 4. uncle &nbsp; 5. does &nbsp; 6. do
          </div>
        ` : ''}
      </div>

      <div class="ket-paper-q-row">
        <div class="ket-paper-part-title"><span>Section B2 · Unit 2 Adverbs of Frequency, Like vs Would Like & Hobbies in Context</span><span>[15 Marks]</span></div>
        <div style="font-size:0.86rem; font-style:italic; margin-bottom:4px;">Word Bank for Q4–Q6: [ acting / camping / cooking / photography / sailing ]</div>
        <div style="font-size:0.88rem; line-height:1.7;">
          1. Rewrite using <strong>usually</strong>: <em>"I play tennis on Wednesdays."</em> ➔ _____________________________________________<br>
          2. Rewrite using <strong>never</strong>: <em>"They are late for morning assembly."</em> ➔ _____________________________________________<br>
          3. A: Where ________________ (you / would like / go) this weekend? B: I love ________________ (swim), so ________________ (go) to the beach sounds great!<br>
          4. Making warm noodles and soup for your family in the kitchen is called ________________.<br>
          5. Sleeping outdoors in a tent under the stars in the forest is called ________________.<br>
          6. Performing on a stage in front of an audience at the drama club is called ________________.
        </div>
        ${showAnswers ? `
          <div class="ket-paper-answer-box">
            <strong>✅ 教師解答：</strong> 1. I usually play tennis on Wednesdays. &nbsp; 2. They are never late for morning assembly. &nbsp; 3. would you like to go / swimming / going &nbsp; 4. cooking &nbsp; 5. camping &nbsp; 6. acting
          </div>
        ` : ''}
      </div>

      <div class="ket-paper-q-row">
        <div class="ket-paper-part-title"><span>Section B3 · Unit 3 Home, Food Quantifiers & Have to in Full Sentences</span><span>[15 Marks]</span></div>
        <div style="font-size:0.88rem; line-height:1.7;">
          1. My bedroom is quite dark in the evening, so I turn on the desk <strong>l</strong>________________.<br>
          2. We keep all the clean plates and bowls inside a tall kitchen <strong>c</strong>________________.<br>
          3. Are there ________________ (some / any) fresh tomatoes in the fridge for our omelette?<br>
          4. Can I have ________________ (a / an / some) glass of cold apple juice after cooking?<br>
          5. My older brother ________________ (has to / have to) finish his science project before dinner.<br>
          6. We ________________ (don't have to / doesn't have to) wear school uniforms during the Saturday cooking workshop.
        </div>
        ${showAnswers ? `
          <div class="ket-paper-answer-box">
            <strong>✅ 教師解答：</strong> 1. lamp &nbsp; 2. cupboard &nbsp; 3. any &nbsp; 4. a &nbsp; 5. has to &nbsp; 6. don't have to
          </div>
        ` : ''}
      </div>
    `;

    return cover + revBankBody + selfContainedGrammarHtml;
  }

  // 4. 字彙與易錯診斷語境單 (從例句挖空，徹底杜絕無上下文單詞中翻英或半截片段)
  if (effectiveMode === 'vocab_core') {
    const cover = getPrintPaperCover(
      'CORE VOCABULARY & ERROR CORRECTION IN CONTEXT',
      'Units 1–3 Sentence Cloze (Zero Isolated Fragments) + High-Frequency Grammar Fix',
      '3 Units Contextual Drill',
      candidate,
      dateStr
    );

    const unitsHtml = (data.units || []).map(u => {
      const vocabs = (u.vocabulary || []).filter(v => v.example && new RegExp(`\\b${v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i').test(v.example)).slice(0, 6);
      const mistakes = (u.commonMistakes || []).slice(0, 4);
      const clozeRows = vocabs.map((v, idx) => {
        const escapedWord = v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const masked = v.example.replace(new RegExp(`\\b${escapedWord}\\b`, 'gi'), '<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>');
        return `
          <div style="margin-bottom:6px;">
            ${idx + 1}. ${masked} <span style="color:#555555;">(${v.pos} · 提示：${v.zh})</span>
            ${showAnswers ? `<br><span style="color:#2D6A4F; font-weight:bold;">✅ Answer: ${v.word}</span> <small>(搭配：${v.collocation || ''})</small>` : ''}
          </div>
        `;
      }).join('');

      const mistakeRows = mistakes.map((m, idx) => `
        <div style="margin-bottom:6px;">
          ${idx + 1}. Find and fix the mistake: <em>"${m.wrong}"</em><br>
          &nbsp;&nbsp;&nbsp;Corrected sentence: ${showAnswers
            ? `<strong style="color:#2D6A4F;">"${m.correct}"</strong> <small>(考點：${m.rule})</small>`
            : '______________________________________________________________'}
        </div>
      `).join('');

      return `
        <div class="ket-paper-section-bar">
          <span>UNIT ${u.number} · ${u.title} (${u.topic})</span>
          <span style="font-size:0.84rem;">例句情境填空 & 常見錯句訂正</span>
        </div>
        <div class="ket-paper-q-row">
          <div class="ket-paper-part-title"><span>Part 1 · Contextual Vocabulary Cloze</span><span>[${vocabs.length} Marks]</span></div>
          <div style="font-size:0.9rem; line-height:1.6;">${clozeRows}</div>
        </div>
        <div class="ket-paper-q-row">
          <div class="ket-paper-part-title"><span>Part 2 · Error Correction Sentences</span><span>[${mistakes.length} Marks]</span></div>
          <div style="font-size:0.9rem; line-height:1.6;">${mistakeRows}</div>
        </div>
      `;
    }).join('');

    return cover + unitsHtml;
  }

  // 5. 個人化 KET 錯題精準訂正考卷（支援從 KET_EXAM_BANK 還原完整文章、圖表、選項與教師四維詳解）
  if (effectiveMode === 'errorbook') {
    const netErrors = (AppState.accountData && AppState.accountData.netErrors) || {};
    const errKeys = Object.keys(netErrors)
      .filter(k => netErrors[k] && netErrors[k].count > 0)
      .sort((a, b) => (netErrors[b].count || 0) - (netErrors[a].count || 0));

    const cover = getPrintPaperCover(
      'PERSONALIZED KET ERROR REMEDIATION WORKSHEET',
      '5-Color Heatmap Targeted Re-Practice Paper (Full Context & Passages Included)',
      `待訂正題數：${errKeys.length} 題`,
      candidate,
      dateStr,
      `<div>Target: <strong>Zero Errors (淨錯歸零)</strong></div>`
    );

    if (errKeys.length === 0) {
      return cover + `
        <div style="padding:36px; text-align:center; font-size:1.05rem; border:1px dashed #666;">
          🎉 太棒了！考生【${candidate}】目前沒有待訂正錯題！<br>
          <small style="color:#555555;">（若要測試錯題卷，可於錯題本分頁載入模擬錯題，或在 KET 全真題庫挑戰後產生錯題記錄）</small>
        </div>
      `;
    }

    const bodyHtml = errKeys.map((k, idx) => {
      const errItem = netErrors[k];
      const heat = getHeatLevel(errItem.count);
      const bankQ = sortedBank.find(q => q.code === k);

      if (bankQ) {
        const wrongBadge = `
          <div style="display:flex; justify-content:space-between; align-items:center; background:#F8F9FA; border:1px solid #888; padding:4px 10px; font-size:0.8rem; font-weight:bold; margin-bottom:6px;">
            <span>🔥 錯題熱度：[${heat.label}] ｜ 上次錯答：${errItem.wrongAnswer || '未標記 / 自評未達標'}</span>
            <span>累積淨錯：${errItem.count} 次</span>
          </div>
        `;
        return `<div class="ket-paper-group">${wrongBadge}${renderPrintQuestionRow(bankQ, idx + 1, showAnswers, false, false)}</div>`;
      }

      // 非題庫型舊格式錯題亦以完整獨立框格印出
      return `
        <div class="ket-paper-q-row">
          <div class="ket-paper-q-head">
            <div class="ket-paper-q-num">#${idx + 1}. [${heat.label}] ${errItem.title || k}</div>
            <span class="ket-paper-code-tag">淨錯 ${errItem.count} 次</span>
          </div>
          ${errItem.prompt ? `<div style="margin-bottom:6px; background:#F8F9FA; padding:6px 10px; font-size:0.9rem;">題目：${errItem.prompt}</div>` : ''}
          <div style="font-size:0.86rem; color:#444444; margin-bottom:4px;">❌ 上次錯誤作答：${errItem.wrongAnswer || '未填寫 / 選錯'}</div>
          <div class="ket-paper-gap-line">✍️ 正確訂正手寫欄：______________________________________________________</div>
          ${showAnswers ? `
            <div class="ket-paper-answer-box">
              <div><strong>✅ 正確答案：</strong><u>${errItem.correctAnswer || errItem.answer || ''}</u></div>
              <div><strong>💡 考點說明：</strong>${errItem.rule || errItem.explanation || ''}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return cover + bodyHtml;
  }

  return '';
}

window.setPrintMode = function(mode) {
  SoundFX.playClick();
  AppState.printSheetMode = mode === 'rev' ? 'revision' : mode;
  renderPrintPod();
};

window.togglePrintAnswers = function() {
  SoundFX.playClick();
  AppState.printShowAnswers = !AppState.printShowAnswers;
  renderPrintPod();
};

window.triggerPrint = function() {
  SoundFX.playClick();
  window.print();
};

function renderPrintPlaceholder() {
  renderPrintPod();
}

// =============================================================================
// Phase A：🎯 KET 全真題庫方格考場 (view-arena) 核心模組
// =============================================================================

function matchesArenaUnitFilter(q, unitFilter, acc) {
  if (unitFilter === 'onlyErrors') {
    const stat = acc.questionStats ? acc.questionStats[q.code] : null;
    const isNetError = stat && stat.net > 0;
    const isInBook = acc.netErrors && acc.netErrors[q.code] && acc.netErrors[q.code].count > 0;
    return Boolean(isNetError || isInBook);
  }
  if (unitFilter !== 'all') {
    return q.unitId === unitFilter;
  }
  return true;
}

function matchesArenaDiffFilter(q, diffFilter) {
  if (diffFilter === '1-2') return q.difficulty <= 2;
  if (diffFilter === '3') return q.difficulty === 3;
  if (diffFilter === '4-5') return q.difficulty >= 4;
  return true;
}

// 取得當前篩選後的題庫題目清單
function getArenaFilteredQuestions() {
  const bank = window.KET_EXAM_BANK;
  if (!bank || !Array.isArray(bank.questions)) return [];

  const acc = AppState.accountData;
  return bank.questions.filter(q =>
    matchesArenaUnitFilter(q, AppState.arenaUnitFilter, acc) &&
    (AppState.arenaPartFilter === 'all' || q.ketPart === AppState.arenaPartFilter) &&
    matchesArenaDiffFilter(q, AppState.arenaDiffFilter)
  );
}

// 計算 6 階淨錯熱度 class (netErr = err - ok)
function getArenaHeatClass(errCnt, okCnt) {
  if (errCnt === 0 && okCnt === 0) return 'heat-tie';
  const netErr = errCnt - okCnt;
  if (netErr >= 3) return 'heat-bad-heavy';
  if (netErr === 2) return 'heat-bad-mid';
  if (netErr === 1) return 'heat-bad-light';
  if (netErr === 0) return 'heat-tie';
  if (netErr === -1) return 'heat-ok-light';
  return 'heat-ok-heavy'; // netErr <= -2
}

// 主渲染函式：KET 全真題庫方格考場
function renderArenaPod() {
  const container = document.getElementById('view-arena');
  if (!container) return;

  const bank = window.KET_EXAM_BANK || { ketParts: [], questions: [] };
  const allQs = bank.questions || [];
  const filteredQs = getArenaFilteredQuestions();
  const acc = AppState.accountData;

  // 防呆索引越界
  if (AppState.arenaCurrentIndex >= filteredQs.length) {
    AppState.arenaCurrentIndex = Math.max(0, filteredQs.length - 1);
  }
  const curIdx = AppState.arenaCurrentIndex;
  const totalCount = filteredQs.length;
  const currentQ = filteredQs[curIdx];

  // 14 個官方 KET Part 清單 (RWP1~RWP7, LSP1~LSP5, SPP1~SPP2)
  const defaultParts = [
    { id: 'RWP1', name: 'RW Part 1 短訊/告示' },
    { id: 'RWP2', name: 'RW Part 2 短文配對' },
    { id: 'RWP3', name: 'RW Part 3 長文理解' },
    { id: 'RWP4', name: 'RW Part 4 詞彙克漏字' },
    { id: 'RWP5', name: 'RW Part 5 開放填空' },
    { id: 'RWP6', name: 'WR Part 6 短訊寫作' },
    { id: 'RWP7', name: 'WR Part 7 看圖寫故事' },
    { id: 'LSP1', name: 'LS Part 1 圖片三選一' },
    { id: 'LSP2', name: 'LS Part 2 表格填空' },
    { id: 'LSP3', name: 'LS Part 3 長對話理解' },
    { id: 'LSP4', name: 'LS Part 4 短對話主旨' },
    { id: 'LSP5', name: 'LS Part 5 資訊配對' },
    { id: 'SPP1', name: 'SP Part 1 考官問答' },
    { id: 'SPP2', name: 'SP Part 2 五圖互動' }
  ];
  const ketParts = (bank.ketParts && bank.ketParts.length === 14) ? bank.ketParts : defaultParts;

  // 依「當前選中單元」即時交叉計算每個 Part 與難度星等的真實題數（徹底修正顯示數字卻無題目的錯覺）
  const unitFilteredQs = allQs.filter(q => matchesArenaUnitFilter(q, AppState.arenaUnitFilter, acc));
  const partCounts = {};
  unitFilteredQs.forEach(q => {
    partCounts[q.ketPart] = (partCounts[q.ketPart] || 0) + 1;
  });

  const unitAndPartQs = unitFilteredQs.filter(q =>
    AppState.arenaPartFilter === 'all' || q.ketPart === AppState.arenaPartFilter
  );
  const diffCounts = {
    all: unitAndPartQs.length,
    '1-2': unitAndPartQs.filter(q => matchesArenaDiffFilter(q, '1-2')).length,
    '3': unitAndPartQs.filter(q => matchesArenaDiffFilter(q, '3')).length,
    '4-5': unitAndPartQs.filter(q => matchesArenaDiffFilter(q, '4-5')).length
  };

  // 計算未消錯題總數
  let errorCount = 0;
  if (acc.questionStats) {
    Object.keys(acc.questionStats).forEach(c => {
      if (acc.questionStats[c].net > 0) errorCount++;
    });
  }

  // 1. 雙層篩選膠囊列 HTML
  const filterHtml = `
    <div class="arena-filter-wrap">
      <!-- 第一層：範圍單元 + 測驗模式 -->
      <div class="arena-filter-row">
        <span class="arena-row-label">📚 測驗單元：</span>
        <div class="arena-pill-group">
          <button class="arena-pill ${AppState.arenaUnitFilter === 'all' ? 'active' : ''}" onclick="setArenaUnitFilter('all')">
            全部單元 <span class="pill-count">${allQs.length}</span>
          </button>
          <button class="arena-pill ${AppState.arenaUnitFilter === 'u1' ? 'active' : ''}" onclick="setArenaUnitFilter('u1')">
            Unit 1 人物日常 <span class="pill-count">${allQs.filter(q => q.unitId === 'u1').length}</span>
          </button>
          <button class="arena-pill ${AppState.arenaUnitFilter === 'u2' ? 'active' : ''}" onclick="setArenaUnitFilter('u2')">
            Unit 2 休閒時光 <span class="pill-count">${allQs.filter(q => q.unitId === 'u2').length}</span>
          </button>
          <button class="arena-pill ${AppState.arenaUnitFilter === 'u3' ? 'active' : ''}" onclick="setArenaUnitFilter('u3')">
            Unit 3 美食饗宴 <span class="pill-count">${allQs.filter(q => q.unitId === 'u3').length}</span>
          </button>
          <button class="arena-pill ${AppState.arenaUnitFilter === 'rev' ? 'active' : ''}" onclick="setArenaUnitFilter('rev')">
            Revision 總複習 <span class="pill-count">${allQs.filter(q => q.unitId === 'rev').length}</span>
          </button>
          <button class="arena-pill ${AppState.arenaUnitFilter === 'onlyErrors' ? 'active' : ''}" style="${errorCount > 0 ? 'border-color:#F43F5E;' : ''}" onclick="setArenaUnitFilter('onlyErrors')">
            🔥 只練未消錯題 <span class="pill-count">${errorCount}</span>
          </button>
        </div>
      </div>

      <!-- 第二層：KET 官方 14 大 Part 分類膠囊 (即時連動上方單元數量) -->
      <div class="arena-filter-row">
        <span class="arena-row-label">🎯 官方考科：</span>
        <div class="arena-pill-group">
          <button class="arena-pill ${AppState.arenaPartFilter === 'all' ? 'active' : ''}" onclick="setArenaPartFilter('all')">
            全部 Part <span class="pill-count">${unitFilteredQs.length}</span>
          </button>
          ${ketParts.map(p => {
            const cnt = partCounts[p.id] || 0;
            return `
              <button class="arena-pill ${AppState.arenaPartFilter === p.id ? 'active' : ''} ${cnt === 0 ? 'is-empty' : ''}" onclick="setArenaPartFilter('${p.id}')">
                ${p.fullName || p.name || p.id} <span class="pill-count">${cnt}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 第三層：難度星等、做題模式切換與一鍵全部恢復未答 -->
      <div class="arena-filter-row" style="justify-content:space-between;">
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="arena-row-label">⭐ 難度星等：</span>
          <div class="arena-pill-group">
            <button class="arena-pill ${AppState.arenaDiffFilter === 'all' ? 'active' : ''}" onclick="setArenaDiffFilter('all')">全部 <span class="pill-count">${diffCounts.all}</span></button>
            <button class="arena-pill ${AppState.arenaDiffFilter === '1-2' ? 'active' : ''} ${diffCounts['1-2'] === 0 ? 'is-empty' : ''}" onclick="setArenaDiffFilter('1-2')">★ 基礎 (1-2星) <span class="pill-count">${diffCounts['1-2']}</span></button>
            <button class="arena-pill ${AppState.arenaDiffFilter === '3' ? 'active' : ''} ${diffCounts['3'] === 0 ? 'is-empty' : ''}" onclick="setArenaDiffFilter('3')">★★ 標準 (3星) <span class="pill-count">${diffCounts['3']}</span></button>
            <button class="arena-pill ${AppState.arenaDiffFilter === '4-5' ? 'active' : ''} ${diffCounts['4-5'] === 0 ? 'is-empty' : ''}" onclick="setArenaDiffFilter('4-5')">★★★ 挑戰 (4-5星) <span class="pill-count">${diffCounts['4-5']}</span></button>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
          <button class="arena-pill ${AppState.arenaExamMode === 'instant' ? 'mode-active' : ''}" onclick="setArenaExamMode('instant')" title="每答一題立即批改並解鎖詳解">
            ⚡ 單題即時批改
          </button>
          <button class="arena-pill ${AppState.arenaExamMode === 'mock' ? 'mode-active' : ''}" onclick="setArenaExamMode('mock')" title="純淨全真模擬，作答完全不給提示，交卷才對答案">
            ⏱️ 純淨模擬考 (交卷對答案)
          </button>
          <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="resetAllArenaProgress()" title="全部題目恢復成未答題狀態，綠字/紅字統計與 5 色錯題本 100% 保留">
            🔄 全部恢復未答題
          </button>
        </div>
      </div>
    </div>
  `;

  // 若查無符合條件的題目
  if (totalCount === 0 || !currentQ) {
    container.innerHTML = `
      ${filterHtml}
      <div class="ket-exam-card" style="text-align:center; padding:40px 20px;">
        <div style="font-size:2.8rem; margin-bottom:12px;">🏝️</div>
        <h3 style="font-size:1.2rem; font-weight:900; color:var(--ac-wood); margin-bottom:8px;">目前篩選條件下尚無題目</h3>
        <p style="font-size:0.9rem; color:var(--ac-wood-light); margin-bottom:16px;">請嘗試切換上方單元、Part 或難度星等膠囊查看更多題目！</p>
        <button class="ac-btn ac-btn-green" onclick="setArenaUnitFilter('all'); setArenaPartFilter('all'); setArenaDiffFilter('all');">重置為全部題目</button>
      </div>
    `;
    return;
  }

  // 2. 題號速跳抽屜盤按鈕清單 (Natural-webapp同款 48x44px 網格)
  const drawerBtnsHtml = filteredQs.map((q, i) => {
    const isCur = i === curIdx ? 'current' : '';
    const isSessionDone = AppState.arenaSubmitted[q.code] === true || AppState.arenaRevealed[q.code] === true || (AppState.arenaExamMode === 'mock' && Boolean(AppState.arenaUserAnswers[q.code]));
    const stats = (acc.questionStats && acc.questionStats[q.code]) || { ok: 0, err: 0, net: 0 };
    const okCnt = stats.ok || 0;
    const errCnt = stats.err || 0;
    const heatCls = getArenaHeatClass(errCnt, okCnt);

    return `
      <button type="button" class="drawer-q-btn ${heatCls} ${isCur} ${isSessionDone ? 'session-done' : ''}" onclick="jumpArenaQuestion(${i})" title="第 ${i + 1} 題 [${q.code}]：答對 ${okCnt} 次 · 答錯 ${errCnt} 次 (淨錯 ${stats.net || 0})${isSessionDone ? ' · 本輪已作答' : ''}">
        ${okCnt > 0 ? `<span class="q-badge-ok">${okCnt}</span>` : ''}
        ${errCnt > 0 ? `<span class="q-badge-bad">${errCnt}</span>` : ''}
        <span class="q-num-center">${i + 1}</span>
      </button>
    `;
  }).join('');

  // 3. 測驗頂部導覽列 (進度條 + 展開題號盤 + 快速切換)
  const progressPct = Math.round(((curIdx + 1) / totalCount) * 100);
  const headHtml = `
    <div class="quiz-head">
      <div class="quiz-nav-left">
        <button type="button" class="ac-btn-icon" onclick="jumpToPod('dashboard', 'all')">← 返回戰情室</button>
        <span style="font-weight:900; font-size:0.9rem; color:var(--ac-wood);">🎯 KET 全真考場</span>
      </div>
      <div class="progress" title="進度 ${progressPct}%"><i style="width: ${progressPct}%"></i></div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button type="button" class="ac-btn-icon" ${curIdx === 0 ? 'disabled' : ''} onclick="jumpArenaQuestion(${curIdx - 1})">← 上一題</button>
        <button type="button" class="count-badge-btn" onclick="toggleArenaDrawer()" title="展開/收合題號速跳盤">
          🔢 第 ${curIdx + 1} / ${totalCount} 題 ${AppState.arenaDrawerOpen ? '▲' : '▾'}
        </button>
        ${(curIdx === totalCount - 1 && AppState.arenaExamMode === 'mock') ? `
          <button type="button" class="ac-btn ac-btn-green" onclick="submitArenaMockExam()">🏁 交卷結算</button>
        ` : `
          <button type="button" class="ac-btn-icon" ${curIdx === totalCount - 1 ? 'disabled' : ''} onclick="jumpArenaQuestion(${curIdx + 1})">下一題 →</button>
        `}
      </div>
    </div>

    <!-- 頂部嵌入式折疊題號盤 (Grid Drawer) -->
    <div id="quiz-grid-drawer" class="quiz-grid-drawer" style="display: ${AppState.arenaDrawerOpen ? 'block' : 'none'};">
      <div class="grid-drawer-head">
        <div class="drawer-legend-bar">
          <span class="leg-item"><b class="leg-dot ok"></b> 綠小字=累計答對</span>
          <span class="leg-item"><b class="leg-dot bad"></b> 紅小字=累計答錯</span>
          <span class="leg-item"><b class="leg-dot red-shade"></b> 底色越紅代表淨錯越多</span>
          <span class="leg-item"><b class="leg-dot" style="background:var(--ac-green-dark); width:14px; height:4px; border-radius:2px;"></b> 綠底條=本輪已作答</span>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="resetAllArenaProgress()">🔄 全部恢復未答</button>
          <button type="button" class="btn-close-drawer" onclick="toggleArenaDrawer()">✕</button>
        </div>
      </div>
      <div class="drawer-q-grid">
        ${drawerBtnsHtml}
      </div>
    </div>
  `;

  // 4. 純淨 KET 真考題目卡片渲染
  const cardHtml = renderArenaQuestionCard(currentQ, curIdx, totalCount);

  container.innerHTML = `
    ${filterHtml}
    ${headHtml}
    ${cardHtml}
  `;
}

// 渲染單道題目卡片 (含作答前零提示、作答互動、作答後四維度詳解與延伸學習重點)
function renderArenaQuestionCard(q, idx, total) {
  const acc = AppState.accountData;
  const isMock = AppState.arenaExamMode === 'mock';
  const isSubmitted = AppState.arenaSubmitted[q.code] === true;
  const isRevealed = AppState.arenaRevealed[q.code] === true && !isSubmitted;
  const showExplanation = isSubmitted || isRevealed;
  const selfGrade = AppState.arenaSelfGraded[q.code];
  const userAns = AppState.arenaUserAnswers[q.code];
  const inErrorBook = acc.netErrors && acc.netErrors[q.code] && acc.netErrors[q.code].count > 0;
  const isExtOpen = AppState.arenaExtensionOpen[q.code] === true;

  // 1. 頂部標籤列
  const tagsHtml = `
    <div class="q-top-action-bar">
      <div class="q-tags">
        <span class="code-badge">${q.code}</span>
        <span class="tag-part">${q.ketPartName || q.ketPart}</span>
        <span class="tag-unit">${q.unitLabel || q.unitId.toUpperCase()}</span>
        <span class="tag-stars">${'★'.repeat(q.difficulty || 3)}${'☆'.repeat(5 - (q.difficulty || 3))}</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="ac-btn-icon" onclick="toggleArenaBookmark('${q.code}')" style="${inErrorBook ? 'color:var(--ac-red-dark); border-color:var(--ac-red-border);' : ''}">
          ${inErrorBook ? '🔥 已在錯題本' : '＋ 存入錯題本'}
        </button>
      </div>
    </div>
  `;

  // 2. 題目情境與提示指令 (100% 零提示！作答前絕不劇透)
  const contextHtml = `
    ${q.passageHtml ? `<div class="ket-passage-wrap">${q.passageHtml}</div>` : ''}
    ${q.image ? `
      <div style="text-align:center; margin:12px 0;">
        <img src="${q.image}" alt="考卷圖片" style="max-width:100%; max-height:280px; object-fit:contain; border-radius:8px; border:2px solid var(--ac-wood-border);">
      </div>
    ` : ''}
    ${q.instruction ? `<div class="ket-instruction">${q.instruction}</div>` : ''}
    <div class="ket-prompt">${q.prompt}</div>
  `;

  // 3. 聽力考場播放器 (作答前 100% 鎖住隱藏逐字稿)
  const isListening = q.section === 'listening' || (q.ketPart && q.ketPart.startsWith('LS'));
  const audioPlayerHtml = isListening ? `
    <div class="ket-audio-player-bar">
      <span class="audio-label">🎧 考場錄音：</span>
      <button type="button" class="ac-btn ac-btn-sm ac-btn-blue" onclick="playArenaAudio('${q.code}', 'double')">▶️ 播放考場錄音（英式雙遍）</button>
      <button type="button" class="ac-btn ac-btn-sm" onclick="playArenaAudio('${q.code}', 1.0)">🔊 單遍播放</button>
      <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="playArenaAudio('${q.code}', 0.85)">🐢 0.85x 慢速</button>
      <button type="button" class="ac-btn ac-btn-sm ac-btn-red" onclick="stopArenaAudio()">⏹️ 停止</button>
    </div>
  ` : '';

  // 4. 作答交互區
  let interactionHtml = '';

  // A. 選擇題 (choice)
  if (q.questionType === 'choice' && Array.isArray(q.options)) {
    interactionHtml = `
      <div class="ket-choices-list">
        ${q.options.map(opt => {
          let btnCls = 'ket-choice-btn';
          const isSelected = userAns === opt.key;
          if (isSelected) btnCls += ' selected';

          if (isSubmitted) {
            if (opt.key === q.answer) {
              btnCls += ' correct';
            } else if (isSelected && opt.key !== q.answer) {
              btnCls += ' wrong';
            }
          }

          const clickHandler = isSubmitted
            ? ''
            : (isMock
                ? `onclick="selectArenaMockChoice('${q.code}', '${opt.key}')"`
                : `onclick="answerArenaChoice('${q.code}', '${opt.key}')"`);

          return `
            <button type="button" class="${btnCls}" ${clickHandler} ${isSubmitted ? 'disabled' : ''}>
              <span class="ket-opt-key">${opt.key}</span>
              <span>${opt.text}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }
  // B. 開放式填空題 (gap) - RW Part 5 / LS Part 2
  else if (q.questionType === 'gap') {
    const isCorrect = isSubmitted && (
      selfGrade === 'ok' || (
        selfGrade !== 'bad' && (
          Array.isArray(q.answer)
            ? q.answer.map(a => a.toLowerCase().trim()).includes((userAns || '').toLowerCase().trim())
            : (userAns || '').toLowerCase().trim() === String(q.answer).toLowerCase().trim()
        )
      )
    );
    const ansDisplay = Array.isArray(q.answer) ? q.answer.join(' / ') : String(q.answer || '');

    interactionHtml = `
      <div class="ket-gap-row">
        <label style="font-weight:900; color:var(--ac-wood);">✍️ 請填寫答案：</label>
        <input type="text" id="arena-gap-input" class="ket-gap-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}"
          value="${userAns || ''}"
          placeholder="填寫 1 個單字..."
          ${(isSubmitted || isRevealed) ? 'disabled' : ''}
          onkeydown="if(event.key==='Enter') submitArenaGap('${q.code}')">
        ${(!isSubmitted && !isRevealed) ? `
          <button class="ac-btn ac-btn-green" onclick="submitArenaGap('${q.code}')">送出答案</button>
          <button type="button" class="btn-see-answer" onclick="revealArenaAnswer('${q.code}')" title="用紙筆寫在紙上時，直接看答案並自評對錯">👀 看答案 (紙筆自評)</button>
        ` : ''}
      </div>
      ${isRevealed ? `
        <div class="ket-selfgrade-banner">
          <div style="font-weight:900; color:var(--ac-wood);">📋 紙筆核對標準答案：</div>
          <div class="ket-selfgrade-ans">✅ ${ansDisplay}</div>
          <div style="font-size:0.86rem; color:var(--ac-wood);">對照完後，請點選你的紙筆作答結果（將同步紀錄進紅綠方格與錯題本）：</div>
          <div class="selfgrade-actions">
            <button type="button" class="btn-self-ok" onclick="selfGradeArenaQuestion('${q.code}', true)">⭕ 我答對 (+1 綠字)</button>
            <button type="button" class="btn-self-bad" onclick="selfGradeArenaQuestion('${q.code}', false)">❌ 我答錯 (+1 紅字 / 入錯題本)</button>
          </div>
        </div>
      ` : ''}
    `;
  }
  // C. 寫作題 (writing) - WR Part 6 / 7
  else if (q.questionType === 'writing') {
    const minWords = (q.ketPart === 'RWP7') ? 35 : 25;
    const curText = userAns || '';
    const curWords = curText.trim() ? curText.trim().split(/\s+/).length : 0;

    interactionHtml = `
      <div class="ket-writing-wrap">
        <textarea id="arena-writing-input" class="ket-writing-textarea" placeholder="在此依考題撰寫完整英文短文 (達標字數後點擊送出，或於紙本手寫完點擊「看答案」自評)..."
          oninput="onArenaWritingInput(this, ${minWords})" ${(isSubmitted || isRevealed) ? 'disabled' : ''}>${curText}</textarea>
        <div class="ket-writing-meta" style="flex-wrap:wrap; gap:8px;">
          <span id="arena-word-count-badge" class="ket-word-count-badge ${curWords >= minWords ? 'passed' : ''}">
            目前字數：${curWords} 字 (官方標準：${minWords}+ 字)
          </span>
          ${(!isSubmitted && !isRevealed) ? `
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <button class="ac-btn ac-btn-green" onclick="submitArenaWriting('${q.code}')">完成寫作並對照檢核與範文</button>
              <button type="button" class="btn-see-answer" onclick="revealArenaAnswer('${q.code}')">👀 看答案 (紙筆自評)</button>
            </div>
          ` : ''}
        </div>
        ${(isRevealed || isSubmitted) && !selfGrade ? `
          <div class="ket-selfgrade-banner">
            <div style="font-weight:900; color:var(--ac-wood);">📝 請比對下方 13/15 盾範文與三大檢查點進行自評：</div>
            <div class="selfgrade-actions">
              <button type="button" class="btn-self-ok" onclick="selfGradeArenaQuestion('${q.code}', true)">⭕ 我答對 / 達標 (+1 綠字)</button>
              <button type="button" class="btn-self-bad" onclick="selfGradeArenaQuestion('${q.code}', false)">❌ 我答錯 / 需加強 (+1 紅字)</button>
            </div>
          </div>
        ` : (selfGrade ? `
          <div style="margin-top:8px; font-weight:900; color:${selfGrade === 'ok' ? '#15803D' : '#BE123C'};">
            ${selfGrade === 'ok' ? '✅ 本輪自評結果：答對達標（已記入綠字統計）' : '❌ 本輪自評結果：尚須加強（已記入紅字統計與錯題本）'}
          </div>
        ` : '')}
      </div>
    `;
  }
  // D. 口說題 (speaking) - SP Part 1 / 2
  else if (q.questionType === 'speaking') {
    interactionHtml = `
      <div style="margin:14px 0;">
        <div style="font-size:0.88rem; color:var(--ac-wood); margin-bottom:8px;">
          請先自己大聲開口練習回答，完成後點擊下方按鈕看 15 盾滿分範例並自評：
        </div>
        ${(!isSubmitted && !isRevealed) ? `
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <button class="ac-btn ac-btn-green" onclick="submitArenaSpeaking('${q.code}')">查看高分回答策略與詳解</button>
            <button type="button" class="btn-see-answer" onclick="revealArenaAnswer('${q.code}')">👀 看答案 (自評流暢度)</button>
          </div>
        ` : ''}
        ${(isRevealed || isSubmitted) && !selfGrade ? `
          <div class="ket-selfgrade-banner">
            <div style="font-weight:900; color:var(--ac-wood);">🎙️ 口說回答完畢，對照下方 13/15 盾範例後請自評：</div>
            <div class="selfgrade-actions">
              <button type="button" class="btn-self-ok" onclick="selfGradeArenaQuestion('${q.code}', true)">⭕ 我答對 / 表達流暢 (+1 綠字)</button>
              <button type="button" class="btn-self-bad" onclick="selfGradeArenaQuestion('${q.code}', false)">❌ 我答錯 / 卡詞需加強 (+1 紅字)</button>
            </div>
          </div>
        ` : (selfGrade ? `
          <div style="margin-top:8px; font-weight:900; color:${selfGrade === 'ok' ? '#15803D' : '#BE123C'};">
            ${selfGrade === 'ok' ? '✅ 本輪口說自評：流暢達標（已記入綠字統計）' : '❌ 本輪口說自評：卡詞需加強（已記入錯題本）'}
          </div>
        ` : '')}
      </div>
    `;
  }

  // 5. 交卷 / 點「看答案」後解鎖四維度詳解 + 延伸學習重點
  let explanationHtml = '';
  if (showExplanation && q.explanation) {
    // 陷阱拆解 (遍歷 distractorAnalysis 或 commonTraps)
    let trapsListHtml = '';
    if (q.explanation.distractorAnalysis && typeof q.explanation.distractorAnalysis === 'object') {
      trapsListHtml = Object.keys(q.explanation.distractorAnalysis).map(optKey => {
        return `<div style="margin-bottom:4px;">${q.explanation.distractorAnalysis[optKey]}</div>`;
      }).join('');
    } else if (Array.isArray(q.explanation.commonTraps)) {
      trapsListHtml = q.explanation.commonTraps.map(t => {
        return `<div style="margin-bottom:4px;">• <strong>${t.wrong}：</strong>${t.whyWrong}</div>`;
      }).join('');
    } else if (q.explanation.traps) {
      trapsListHtml = `<div>${q.explanation.traps}</div>`;
    }

    // 聽力逐字稿對照 (若為聽力題且已批改)
    let tapescriptHtml = '';
    if (isListening && Array.isArray(q.audioLines) && q.audioLines.length > 0) {
      tapescriptHtml = `
        <div class="exp-audio-tapescript">
          <strong style="color:var(--ac-blue-dark);">📜 聽力逐字稿與關鍵定位句：</strong>
          <div style="margin-top:6px; line-height:1.6;">
            ${q.audioLines.map(line => {
              const speaker = (typeof line === 'object' && line.speaker) ? `<strong>${line.speaker}:</strong> ` : '';
              const text = (typeof line === 'object' && line.text) ? line.text : String(line);
              const isClue = typeof line === 'object' && line.isClue;
              const isTrap = typeof line === 'object' && line.isTrap;
              const cls = isClue ? 'background:#E7F6E1; padding:2px 6px; border-radius:6px; border-left:3px solid #2D6A4F; margin:2px 0;'
                : (isTrap ? 'background:#FCE4EC; padding:2px 6px; border-radius:6px; border-left:3px solid #C9184A; text-decoration:line-through; margin:2px 0;' : 'margin:2px 0;');
              return `<div style="${cls}">${speaker}${text}</div>`;
            }).join('')}
          </div>
          ${q.distractorXray && (q.distractorXray.correctClue || q.distractorXray.distractorTrap) ? `
            <div style="margin-top:8px; padding-top:8px; border-top:1px dashed var(--ac-blue-border); font-size:0.86rem;">
              ${q.distractorXray.correctClue ? `<div style="color:#166534;">🟢 得分關鍵句：${q.distractorXray.correctClue}</div>` : ''}
              ${q.distractorXray.distractorTrap ? `<div style="color:#9F1239; margin-top:2px;">🔴 干擾陷阱句：<s>${q.distractorXray.distractorTrap}</s></div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    // 寫作/口說 13 盾 vs 15 盾高分範文對照 (作答批改後解鎖)
    let modelAnswersHtml = '';
    if (q.modelAnswers) {
      const m = q.modelAnswers;
      modelAnswersHtml = `
        <div style="background:#FFFDF7; border:2px solid var(--ac-green-border); border-radius:12px; padding:10px 14px; margin-bottom:10px;">
          <strong style="color:var(--ac-green-dark);">🏆 劍橋 13 盾 vs 15 盾滿分範文對照：</strong>
          ${Array.isArray(m.checklist) && m.checklist.length > 0 ? `
            <div style="margin:6px 0; font-size:0.86rem; background:#F0FDF4; padding:6px 10px; border-radius:8px;">
              <strong>📋 三大得分檢查點：</strong>
              ${m.checklist.map(c => `<div>☑️ ${c}</div>`).join('')}
            </div>
          ` : ''}
          ${m.band13 ? `
            <div style="margin-top:6px; padding:8px; background:#FFF9E6; border-left:4px solid #F4A261; border-radius:6px;">
              <strong>🛡️ 13 盾 Merit 穩定達標範文：</strong>
              <p style="margin:4px 0;">${m.band13}</p>
              <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="TTSEngine.speak('${escapeJsStr(m.band13)}')">🔊 朗讀 13 盾範文</button>
            </div>
          ` : ''}
          ${m.band15 ? `
            <div style="margin-top:6px; padding:8px; background:#E7F6E1; border-left:4px solid #2D6A4F; border-radius:6px;">
              <strong>👑 15 盾 Distinction 滿分範文：</strong>
              <p style="margin:4px 0;">${m.band15}</p>
              <button type="button" class="ac-btn ac-btn-sm ac-btn-green" onclick="TTSEngine.speak('${escapeJsStr(m.band15)}')">🔊 朗讀 15 盾範文</button>
            </div>
          ` : ''}
        </div>
      `;
    }

    // 延伸學習重點摺疊內容
    const ext = q.extensionStudy;
    let extensionBoxHtml = '';
    if (ext && isExtOpen) {
      extensionBoxHtml = `
        <div class="ket-extension-box">
          ${ext.synonyms && Array.isArray(ext.synonyms) ? `
            <div class="ext-section">
              <div class="ext-title">🔄 劍橋高頻同義詞家族：</div>
              <ul>
                ${ext.synonyms.map(syn => `<li>${syn}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${ext.grammarCompare ? `
            <div class="ext-section">
              <div class="ext-title">⚖️ Flyers 升 KET 必考盲點比較：</div>
              <div style="white-space:pre-line; color:var(--ac-wood);">${ext.grammarCompare}</div>
            </div>
          ` : ''}

          ${ext.examVariations ? `
            <div class="ext-section">
              <div class="ext-title">🔮 下次考場可能會這樣變形考你：</div>
              <div style="white-space:pre-line; color:var(--ac-wood);">${ext.examVariations}</div>
            </div>
          ` : ''}
        </div>
      `;
    }

    explanationHtml = `
      <div class="ket-explanation-panel">
        <h4 style="font-size:1.05rem; font-weight:900; color:var(--ac-green-dark); margin-bottom:12px;">
          🎯 劍橋官方四維度核心考點詳解：
        </h4>

        ${q.explanation.examPurpose ? `
          <div class="exp-block-purpose">
            <strong>🎯 這題考官想考什麼？（出題目的）</strong>
            <p style="margin-top:4px;">${q.explanation.examPurpose}</p>
          </div>
        ` : ''}

        ${q.explanation.correctReason ? `
          <div class="exp-block-correct">
            <strong>✅ 正解證據與解題邏輯</strong>
            <p style="margin-top:4px;">${q.explanation.correctReason}</p>
          </div>
        ` : ''}

        ${trapsListHtml ? `
          <div class="exp-block-traps">
            <strong>❌ 其他選項為什麼錯？陷阱拆解</strong>
            <div style="margin-top:4px;">${trapsListHtml}</div>
          </div>
        ` : ''}

        ${modelAnswersHtml}
        ${tapescriptHtml}

        <!-- 💡 延伸學習重點可折疊卡片按鈕 + 重練按鈕 -->
        <div style="margin-top:12px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
          ${ext ? `
            <button type="button" class="btn-extension-toggle" onclick="toggleArenaExtension('${q.code}')">
              💡 延伸學習重點 ${isExtOpen ? '▲' : '▾'}
            </button>
          ` : '<span></span>'}
          <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="retryArenaQuestion('${q.code}')" title="清除本次作答畫面重新挑戰（歷史紅綠計數會保留累積）">
            🔄 再重練一次本題
          </button>
        </div>
        ${extensionBoxHtml}
      </div>
    `;
  }

  const bottomNavHtml = `
    <div class="arena-bottom-nav">
      <div class="arena-bottom-nav-group">
        <button type="button" class="ac-btn-icon" ${idx === 0 ? 'disabled' : ''} onclick="jumpArenaQuestion(${idx - 1}, true)">← 上一題</button>
        <button type="button" class="count-badge-btn" onclick="toggleArenaDrawer()" title="展開/收合題號速跳盤">
          🔢 第 ${idx + 1} / ${total} 題
        </button>
      </div>
      <div class="arena-bottom-nav-group">
        <button type="button" class="ac-btn ac-btn-sm ac-btn-cream" onclick="retryArenaQuestion('${q.code}')">🔄 重練本題</button>
        ${(idx === total - 1 && isMock) ? `
          <button type="button" class="ac-btn ac-btn-green" onclick="submitArenaMockExam()">🏁 交卷結算</button>
        ` : `
          <button type="button" class="ac-btn ac-btn-sm ac-btn-green" ${idx === total - 1 ? 'disabled' : ''} onclick="jumpArenaQuestion(${idx + 1}, true)">下一題 →</button>
        `}
      </div>
    </div>
  `;

  return `
    <article class="ket-exam-card">
      ${tagsHtml}
      ${contextHtml}
      ${audioPlayerHtml}
      ${interactionHtml}
      ${explanationHtml}
      ${bottomNavHtml}
    </article>
  `;
}

// -----------------------------------------------------------------------------
// KET 全真題庫考場操作與互動控制器 (Global Window Actions)
// -----------------------------------------------------------------------------

// 切換單元篩選
window.setArenaUnitFilter = function(unit) {
  SoundFX.playClick();
  AppState.arenaUnitFilter = unit;
  AppState.arenaCurrentIndex = 0;
  renderArenaPod();
};

// 切換 Part 官方考科篩選
window.setArenaPartFilter = function(part) {
  SoundFX.playClick();
  AppState.arenaPartFilter = part;
  AppState.arenaCurrentIndex = 0;
  renderArenaPod();
};

// 切換難度星等篩選
window.setArenaDiffFilter = function(diff) {
  SoundFX.playClick();
  AppState.arenaDiffFilter = diff;
  AppState.arenaCurrentIndex = 0;
  renderArenaPod();
};

// 切換做題模式 (instant: 即時判分 / mock: 純淨模考)
window.setArenaExamMode = function(mode) {
  SoundFX.playClick();
  AppState.arenaExamMode = mode;
  renderArenaPod();
};

// 展開 / 收合題號速跳盤
window.toggleArenaDrawer = function() {
  SoundFX.playClick();
  AppState.arenaDrawerOpen = !AppState.arenaDrawerOpen;
  const drawerEl = document.getElementById('quiz-grid-drawer');
  if (drawerEl) {
    drawerEl.style.display = AppState.arenaDrawerOpen ? 'block' : 'none';
  }
};

// 快速跳至指定題號（scrollToCard=true 時平滑捲回考題頂部）
window.jumpArenaQuestion = function(idx, scrollToCard = false) {
  SoundFX.playClick();
  stopArenaAudio();
  AppState.arenaCurrentIndex = idx;
  renderArenaPod();
  if (scrollToCard) {
    const head = document.querySelector('#view-arena .quiz-head');
    if (head && typeof head.scrollIntoView === 'function') {
      head.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

// 更新題目答題統計數據 (ok / err / net)
function recordArenaQuestionResult(code, isCorrect, wrongAnswer, correctAnswer, explanation) {
  const acc = AppState.accountData;
  if (!acc.questionStats) acc.questionStats = {};
  if (!acc.questionStats[code]) {
    acc.questionStats[code] = { ok: 0, err: 0, net: 0, lastAt: 0 };
  }

  const bank = window.KET_EXAM_BANK;
  const q = bank && Array.isArray(bank.questions) ? bank.questions.find(item => item.code === code) : null;

  const stat = acc.questionStats[code];
  if (isCorrect) {
    stat.ok += 1;
    // 消減錯題本中的紅點
    if (acc.netErrors && acc.netErrors[code] && acc.netErrors[code].count > 0) {
      acc.netErrors[code].count = Math.max(0, acc.netErrors[code].count - 1);
      acc.netErrors[code].timestamp = Date.now();
    }
  } else {
    stat.err += 1;
    // 記入 5 色錯題本（對齊單元、科別與時間戳，支援從錯題本篩選並一鍵跳回原題）
    if (!acc.netErrors) acc.netErrors = {};
    const prev = acc.netErrors[code];
    acc.netErrors[code] = {
      id: code,
      count: (prev ? (prev.count || 0) : 0) + 1,
      itemType: 'ket_exam',
      unit: q ? (q.unitId || 'u1') : (prev ? prev.unit : 'u1'),
      type: q ? (q.section === 'listening' ? 'listening' : 'reading') : (prev ? prev.type : 'reading'),
      title: q ? `${q.ketPartName || q.ketPart} [${code}]` : `KET 題庫 [${code}]`,
      prompt: q ? (q.prompt || '') : (prev ? prev.prompt : ''),
      wrongAnswer: wrongAnswer || '選錯',
      correctAnswer: correctAnswer || '',
      rule: explanation || '請詳閱四維度解題邏輯',
      timestamp: Date.now(),
      lastUpdated: new Date().toISOString()
    };
  }

  stat.net = stat.err - stat.ok;
  stat.lastAt = Date.now();

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
}

// 選擇題即時批改 (instant 模式)
window.answerArenaChoice = function(code, selectedKey) {
  const bank = window.KET_EXAM_BANK;
  if (!bank || !Array.isArray(bank.questions)) return;
  const q = bank.questions.find(item => item.code === code);
  if (!q) return;

  AppState.arenaUserAnswers[code] = selectedKey;
  AppState.arenaSubmitted[code] = true;

  const isCorrect = selectedKey === q.answer;
  const acc = AppState.accountData;

  if (isCorrect) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🎉 答對了！+50 哩');
    acc.nookMiles += 50;
  } else {
    SoundFX.playWrong();
  }

  recordArenaQuestionResult(
    code,
    isCorrect,
    selectedKey,
    q.answer,
    q.explanation ? q.explanation.correctReason : ''
  );

  renderArenaPod();
};

// 選擇題暫存選項 (mock 模擬考模式)
window.selectArenaMockChoice = function(code, selectedKey) {
  SoundFX.playClick();
  AppState.arenaUserAnswers[code] = selectedKey;
  renderArenaPod();
};

// 開放式填空送出
window.submitArenaGap = function(code) {
  const inputEl = document.getElementById('arena-gap-input');
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) {
    alert('請先輸入答案單字！');
    return;
  }

  const bank = window.KET_EXAM_BANK;
  const q = bank.questions.find(item => item.code === code);
  if (!q) return;

  AppState.arenaUserAnswers[code] = val;

  // 若為 instant 模式立即判分
  if (AppState.arenaExamMode === 'instant') {
    AppState.arenaSubmitted[code] = true;
    const accepted = Array.isArray(q.answer)
      ? q.answer.map(a => a.toLowerCase().trim())
      : [String(q.answer).toLowerCase().trim()];
    const isCorrect = accepted.includes(val.toLowerCase());

    const acc = AppState.accountData;
    if (isCorrect) {
      SoundFX.playCorrect();
      VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🎉 填空全對！+50 哩');
      acc.nookMiles += 50;
    } else {
      SoundFX.playWrong();
    }

    recordArenaQuestionResult(
      code,
      isCorrect,
      val,
      Array.isArray(q.answer) ? q.answer.join(' / ') : q.answer,
      q.explanation ? q.explanation.correctReason : ''
    );
  } else {
    SoundFX.playClick();
  }

  renderArenaPod();
};

// 寫作題即時字數統計
window.onArenaWritingInput = function(textarea, minWords) {
  const text = textarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const badge = document.getElementById('arena-word-count-badge');
  if (badge) {
    badge.textContent = `目前字數：${words} 字 (官方標準：${minWords}+ 字)`;
    badge.classList.toggle('passed', words >= minWords);
  }
};

// 寫作題完成對照
window.submitArenaWriting = function(code) {
  const textarea = document.getElementById('arena-writing-input');
  if (textarea) {
    AppState.arenaUserAnswers[code] = textarea.value;
  }
  AppState.arenaSubmitted[code] = true;
  SoundFX.playFanfare();
  VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '✍️ 寫作完成！解鎖範文與檢核清單');
  AppState.accountData.nookMiles += 80;
  AccountManager.saveAccount(AppState.currentAccount, AppState.accountData);
  updateHeaderDisplay();
  renderArenaPod();
};

// 口說題對照詳解
window.submitArenaSpeaking = function(code) {
  AppState.arenaSubmitted[code] = true;
  SoundFX.playCorrect();
  AppState.accountData.nookMiles += 60;
  AccountManager.saveAccount(AppState.currentAccount, AppState.accountData);
  updateHeaderDisplay();
  renderArenaPod();
};

// 紙筆作答：「👀 看答案」解鎖標準解答、四維詳解與「我答對 / 我答錯」自評按鈕（尚未計分）
window.revealArenaAnswer = function(code) {
  SoundFX.playClick();
  const gapInput = document.getElementById('arena-gap-input');
  const writingInput = document.getElementById('arena-writing-input');
  if (gapInput && gapInput.value) AppState.arenaUserAnswers[code] = gapInput.value;
  if (writingInput && writingInput.value) AppState.arenaUserAnswers[code] = writingInput.value;

  AppState.arenaRevealed[code] = true;
  renderArenaPod();
};

// 紙筆 / 口說 / 寫作自評紀錄：「⭕ 我答對」或「❌ 我答錯」（即時更新方格綠紅計數與錯題本）
window.selfGradeArenaQuestion = function(code, isCorrect) {
  const bank = window.KET_EXAM_BANK;
  const q = bank && Array.isArray(bank.questions) ? bank.questions.find(item => item.code === code) : null;
  if (!q) return;

  AppState.arenaSubmitted[code] = true;
  delete AppState.arenaRevealed[code];
  AppState.arenaSelfGraded[code] = isCorrect ? 'ok' : 'bad';

  const typedAns = (AppState.arenaUserAnswers[code] || '').trim();
  if (!typedAns) {
    AppState.arenaUserAnswers[code] = isCorrect ? '紙筆自評：答對' : '紙筆自評：答錯';
  }

  const acc = AppState.accountData;
  if (isCorrect) {
    SoundFX.playCorrect();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '⭕ 自評答對！綠字 +1 (+50哩)');
    acc.nookMiles += 50;
  } else {
    SoundFX.playWrong();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '📝 已記錄紅字並收入錯題本');
  }

  recordArenaQuestionResult(
    code,
    isCorrect,
    typedAns || (isCorrect ? '紙筆自評：答對' : '紙筆自評：答錯'),
    Array.isArray(q.answer) ? q.answer.join(' / ') : (q.answer || '參照範文檢核'),
    q.explanation ? q.explanation.correctReason : ''
  );

  renderArenaPod();
};

// 全部題目恢復未答題狀態（只清本輪畫面暫存，100% 保留紅綠次數統計與 5 色錯題本）
window.resetAllArenaProgress = function() {
  SoundFX.playClick();
  stopArenaAudio();
  AppState.arenaSubmitted = {};
  AppState.arenaUserAnswers = {};
  AppState.arenaRevealed = {};
  AppState.arenaSelfGraded = {};
  AppState.arenaExtensionOpen = {};
  AppState.arenaCurrentIndex = 0;
  VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🔄 全部恢復未答題狀態！（錯題與紅綠紀錄已保留）');
  renderArenaPod();
};

// 模擬考模式交卷結算
window.submitArenaMockExam = function() {
  const bank = window.KET_EXAM_BANK;
  if (!bank || !Array.isArray(bank.questions)) return;
  const questions = getArenaFilteredQuestions();

  if (!confirm(`確定要交卷結算目前篩選的 ${questions.length} 道試題嗎？`)) return;

  let correctCount = 0;
  const acc = AppState.accountData;

  questions.forEach(q => {
    AppState.arenaSubmitted[q.code] = true;
    delete AppState.arenaRevealed[q.code];
    const userVal = (AppState.arenaUserAnswers[q.code] || '').trim();

    let isCorrect = false;
    if (q.questionType === 'choice') {
      isCorrect = userVal === q.answer;
    } else if (q.questionType === 'gap') {
      const accepted = Array.isArray(q.answer)
        ? q.answer.map(a => a.toLowerCase().trim())
        : [String(q.answer).toLowerCase().trim()];
      isCorrect = accepted.includes(userVal.toLowerCase());
    } else {
      isCorrect = true;
      AppState.arenaSelfGraded[q.code] = 'ok';
    }

    if (isCorrect) correctCount++;
    recordArenaQuestionResult(
      q.code,
      isCorrect,
      userVal || '未作答',
      Array.isArray(q.answer) ? q.answer.join(' / ') : q.answer,
      q.explanation ? q.explanation.correctReason : ''
    );
  });

  const pct = Math.round((correctCount / questions.length) * 100);
  SoundFX.playFanfare();
  VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, `🏁 模擬考交卷！得分率 ${pct}%`);
  acc.nookMiles += correctCount * 50;
  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();

  alert(`🏁 模擬考結算完成！\n總題數：${questions.length} 題\n答對題數：${correctCount} 題\n得分率：${pct}%\n\n所有題目的四維度詳解與延伸學習重點已全部解鎖！`);
  renderArenaPod();
};

// 切換 [💡 延伸學習重點] 展開/收合
window.toggleArenaExtension = function(code) {
  SoundFX.playClick();
  AppState.arenaExtensionOpen[code] = !AppState.arenaExtensionOpen[code];
  renderArenaPod();
};

// 清除畫面作答重練本題（歷史紅綠次數累計保留）
window.retryArenaQuestion = function(code) {
  SoundFX.playClick();
  delete AppState.arenaSubmitted[code];
  delete AppState.arenaUserAnswers[code];
  delete AppState.arenaRevealed[code];
  delete AppState.arenaSelfGraded[code];
  renderArenaPod();
};

// 由錯題本或外部錨點直接跳轉至 KET 全真模考場指定題號
window.jumpToArenaByCode = function(code) {
  SoundFX.playClick();
  stopArenaAudio();
  AppState.arenaUnitFilter = 'all';
  AppState.arenaPartFilter = 'all';
  AppState.arenaDiffFilter = 'all';
  AppState.arenaExamMode = 'instant';

  const bank = window.KET_EXAM_BANK;
  const list = bank && Array.isArray(bank.questions) ? bank.questions : [];
  const targetIdx = list.findIndex(item => item.code === code);
  AppState.arenaCurrentIndex = targetIdx >= 0 ? targetIdx : 0;

  // 清空當次暫存作答以便重新作答消錯
  delete AppState.arenaSubmitted[code];
  delete AppState.arenaUserAnswers[code];
  delete AppState.arenaRevealed[code];
  delete AppState.arenaSelfGraded[code];

  AppState.currentTab = 'arena';
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === 'arena');
  });
  renderCurrentView();
};

// 存入 / 移出錯題本切換
window.toggleArenaBookmark = function(code) {
  SoundFX.playClick();
  const acc = AppState.accountData;
  if (!acc.netErrors) acc.netErrors = {};

  const bank = window.KET_EXAM_BANK;
  const q = bank && bank.questions ? bank.questions.find(item => item.code === code) : null;

  if (acc.netErrors[code] && acc.netErrors[code].count > 0) {
    acc.netErrors[code].count = 0;
    acc.netErrors[code].timestamp = Date.now();
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '已從錯題本移出！');
  } else {
    acc.netErrors[code] = {
      id: code,
      count: 1,
      itemType: 'ket_exam',
      unit: q ? (q.unitId || 'u1') : 'u1',
      type: q ? (q.section === 'listening' ? 'listening' : 'reading') : 'reading',
      title: q ? `${q.ketPartName || q.ketPart} [${code}]` : `KET 題目 [${code}]`,
      prompt: q ? (q.prompt || '') : '',
      wrongAnswer: '手動標記',
      correctAnswer: q ? (Array.isArray(q.answer) ? q.answer.join(' / ') : q.answer) : '',
      rule: q && q.explanation ? q.explanation.correctReason : '手動收藏複習',
      timestamp: Date.now(),
      lastUpdated: new Date().toISOString()
    };
    VisualFX.burstParticles(window.innerWidth / 2, window.innerHeight / 2, '🔥 已存入 5 色錯題本！');
  }

  AccountManager.saveAccount(AppState.currentAccount, acc);
  updateHeaderDisplay();
  renderArenaPod();
};

// 停止雙角色考場錄音播放
let arenaAudioAbort = false;
window.stopArenaAudio = function() {
  arenaAudioAbort = true;
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
};

// 播放雙角色英式考場音訊（不唸出說話者名稱，自動男女音高區分，支援雙遍/單遍/0.85x慢速）
window.playArenaAudio = function(code, mode) {
  SoundFX.playClick();
  const bank = window.KET_EXAM_BANK;
  if (!bank || !Array.isArray(bank.questions)) return;
  const q = bank.questions.find(item => item.code === code);
  if (!q) return;

  arenaAudioAbort = false;
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();

  const rate = mode === 0.85 ? 0.85 : 1.0;
  const rawLines = (Array.isArray(q.audioLines) && q.audioLines.length > 0)
    ? q.audioLines
    : [{ speaker: 'Examiner', role: 'female', text: q.prompt || 'Listening test prompt' }];

  // 解析每句的說話者性別/音調與純淨台詞
  const parsedLines = rawLines.map(line => {
    if (typeof line === 'object' && line.text) {
      const spLower = (line.speaker || '').toLowerCase();
      const isMale = line.role === 'male' || /boy|man|simon|tom|leo|dad|uncle|freddy|hasan|mr|interviewer/i.test(spLower);
      return { text: line.text, gender: isMale ? 'male' : 'female', pitch: isMale ? 0.90 : 1.08 };
    }
    const str = String(line);
    const m = str.match(/^([^:：]+)[:：]\s*(.+)$/);
    if (m) {
      const sp = m[1].trim();
      const isMale = /boy|man|simon|tom|leo|dad|uncle|freddy|hasan|mr/i.test(sp);
      return { text: m[2].trim(), gender: isMale ? 'male' : 'female', pitch: isMale ? 0.90 : 1.08 };
    }
    return { text: str, gender: 'female', pitch: 1.05 };
  });

  function playPass(passNum, onComplete) {
    let idx = 0;
    function nextLine() {
      if (arenaAudioAbort) return;
      if (idx >= parsedLines.length) {
        if (onComplete) onComplete();
        return;
      }
      const item = parsedLines[idx++];
      TTSEngine.speak(item.text, {
        rate,
        pitch: item.pitch,
        gender: item.gender,
        onEnd: () => {
          setTimeout(nextLine, 260);
        }
      });
    }
    nextLine();
  }

  if (mode === 'double') {
    playPass(1, () => {
      if (!arenaAudioAbort) {
        setTimeout(() => playPass(2, null), 1200);
      }
    });
  } else {
    playPass(1, null);
  }
};

// =============================================================================
// 輔助函式 (Helper Utilities)
// =============================================================================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeJsStr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// 啟動應用
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
