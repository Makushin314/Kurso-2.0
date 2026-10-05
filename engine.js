/* =========================================================
   engine.js — движок KURSO v11.4
   Фичи:
     • встроенная ходилка VULPETO ABELETO — LA SILENTO (iframe)
     • мета-память между сессиями (sessions, lastPlayed, lastWords)
     • deadSilence() перед скримерами
     • MEMORO без /6
     • фиксы: кнопка «Уроки», дублирование настроек, прерываемый wait
     • классы .smile / .clubname / .haunt-char
     • сюжетные флаги, ачивки, пасхалки, консоль, титры
   ========================================================= */
(() => {

const A = window.Audio3;
function initAudio(){
  try { if(A && A.init) A.init(); } catch(e){}
}
function safeClick(){ try { if(A && A.click) A.click(); } catch(e){} }

/* ---------- DOM ---------- */
const $ = id => document.getElementById(id);
const out = $('out');
const interact = $('interact');
const screenEl = $('screen');
const wrapEl = $('screenWrap');
const hudEl = $('hud');
const hudAct = $('hud-act');
const hudMem = $('hud-mem');
const hudAch = $('hud-ach');
const hudMiss = $('hud-miss');
const hudPaused = $('hud-paused');
const hudTime = $('hud-time');
const hudDict = $('hud-dict');
const flashEl = $('flash');
const gate = $('gate');
const gateMenu = $('gateMenu');
const gateCanvas = $('gateCanvas');
const fxEl = $('fx');
const jumpscareEl = $('jumpscare');
const achieveEl = $('achieve');
const pauseMenu = $('pauseMenu');
const pauseList = $('pauseList');
const subMenu = $('subMenu');
const subTitle = $('subTitle');
const subSub = $('subSub');
const subList = $('subList');
const subClose = $('subClose');
const creditsEl = $('credits');
const credScroll = $('credScroll');
const credSkip = $('credSkip');
const consoleEl = $('console');
const consoleInput = $('consoleInput');
const consoleLog = $('consoleLog');
const consoleCmds = $('consoleCmds');
const walkOverlay = $('walkOverlay');
const walkFrame = $('walkFrame');

const sleep = ms => new Promise(r => setTimeout(r, ms));
const scroll = () => { out.scrollTop = out.scrollHeight; };
const rnd = a => a[Math.floor(Math.random()*a.length)];
const clamp = (v,a,b) => Math.max(a, Math.min(b,v));

let skipRequested = false;
document.addEventListener('click', () => { skipRequested = true; });

/* ---------- ФЛАГИ ---------- */
let jumpTarget = null;
let endedFlag = false;
let isPlaying = false;
let abortPlay = false;

/* ---------- НАСТРОЙКИ ---------- */
const settings = {
  brightness: 1.0, contrast: 1.0, volume: 0.6,
  textSpeed: 18, scanlines: true, particles: true
};
try { Object.assign(settings, JSON.parse(localStorage.getItem('kurso_settings') || '{}')); } catch(e){}

function applySettings(){
  const b = settings.brightness, c = settings.contrast;
  if(Math.abs(b-1) < 0.01 && Math.abs(c-1) < 0.01){
    wrapEl.style.filter = '';
  } else {
    wrapEl.style.filter = `brightness(${b}) contrast(${c})`;
  }
  document.body.classList.toggle('no-scanlines', !settings.scanlines);
}
function saveSettings(){
  try { localStorage.setItem('kurso_settings', JSON.stringify(settings)); } catch(e){}
}

/* ---------- СОСТОЯНИЕ ---------- */
const state = {
  act: 1, scene: 0,
  dread: 0, memory: 0, silenceStreak: 0, misses: 0,
  chaosMode: false, chaosEnding: false,
  learnedWords: new Set(),
  achievements: {}, endingsSeen: {}, easterEggs: {}, storyFlags: {},
  paused: false, consoleOpen: false, subMenuOpen: false,
  answeredByCodeword: false, stopAllEvents: false,
  jumpscareCount: 0, lastScareTime: 0,
  wildActive: false, xSystemUses: 0,
  dictionary: {}, reviewQueue: [], reviewCounter: 0,
  lessonsCompleted: {},
  exerciseStats: { right: 0, wrong: 0, streak: 0, bestStreak: 0 },
  unlockedActs: { 1: true },
  endingsCount: 0,
  startTime: Date.now(),
  pauseIndex: 0,
  subIndex: 0,
  subKind: null,

  /* ---- МЕТА ---- */
  sessions: 0,
  firstPlayed: 0,
  lastPlayed: 0,
  lastWords: [],
  walkDone: false,
  walkEnding: null,
  walkMazeDeaths: 0,
  hauntedChars: 0
};

/* ---------- СОХРАНЕНИЕ ---------- */
function save(){
  try {
    localStorage.setItem('kurso_v1', JSON.stringify({
      act: state.act, scene: state.scene,
      learned: [...state.learnedWords],
      dictionary: state.dictionary,
      reviewQueue: state.reviewQueue,
      lessonsCompleted: state.lessonsCompleted,
      exerciseStats: state.exerciseStats,
      achievements: state.achievements,
      endingsSeen: state.endingsSeen,
      easterEggs: state.easterEggs,
      storyFlags: state.storyFlags,
      memory: state.memory,
      unlockedActs: state.unlockedActs,
      endingsCount: state.endingsCount,
      misses: state.misses,
      sessions: state.sessions,
      firstPlayed: state.firstPlayed,
      lastPlayed: state.lastPlayed,
      lastWords: state.lastWords,
      walkDone: state.walkDone,
      walkEnding: state.walkEnding,
      walkMazeDeaths: state.walkMazeDeaths
    }));
  } catch(e){}
}
function load(){
  try {
    const d = JSON.parse(localStorage.getItem('kurso_v1')||'{}');
    if(d.act) state.act = d.act;
    if(d.scene !== undefined) state.scene = d.scene;
    if(d.learned) state.learnedWords = new Set(d.learned);
    if(d.dictionary) state.dictionary = d.dictionary;
    if(d.reviewQueue) state.reviewQueue = d.reviewQueue;
    if(d.lessonsCompleted) state.lessonsCompleted = d.lessonsCompleted;
    if(d.exerciseStats) state.exerciseStats = Object.assign({ right:0, wrong:0, streak:0, bestStreak:0 }, d.exerciseStats);
    if(d.achievements) state.achievements = d.achievements;
    if(d.endingsSeen) state.endingsSeen = d.endingsSeen;
    if(d.easterEggs) state.easterEggs = d.easterEggs;
    if(d.storyFlags) state.storyFlags = d.storyFlags;
    if(d.memory) state.memory = Math.min(6, d.memory);
    if(d.unlockedActs) state.unlockedActs = d.unlockedActs;
    else state.unlockedActs = { 1: true };
    if(d.endingsCount) state.endingsCount = d.endingsCount;
    if(d.misses) state.misses = d.misses;
    if(d.sessions) state.sessions = d.sessions;
    if(d.firstPlayed) state.firstPlayed = d.firstPlayed;
    if(d.lastPlayed) state.lastPlayed = d.lastPlayed;
    if(d.lastWords) state.lastWords = d.lastWords;
    if(d.walkDone) state.walkDone = d.walkDone;
    if(d.walkEnding) state.walkEnding = d.walkEnding;
    if(d.walkMazeDeaths) state.walkMazeDeaths = d.walkMazeDeaths;
    updateHudWords();
  } catch(e){ state.unlockedActs = { 1: true }; }
}

function resetProgress(){
  try { localStorage.removeItem('kurso_v1'); } catch(e){}
  state.act = 1; state.scene = 0;
  state.memory = 0; state.misses = 0;
  state.dread = 0; state.silenceStreak = 0;
  state.learnedWords = new Set();
  state.achievements = {};
  state.endingsSeen = {};
  state.easterEggs = {};
  state.storyFlags = {};
  state.dictionary = {};
  state.reviewQueue = [];
  state.lessonsCompleted = {};
  state.exerciseStats = { right: 0, wrong: 0, streak: 0, bestStreak: 0 };
  state.unlockedActs = { 1: true };
  state.endingsCount = 0;
  state.walkDone = false;
  state.walkEnding = null;
  state.walkMazeDeaths = 0;
  updateHudWords();
  updateHudAch();
  hudMem.textContent = 'MEMORO: 0';
  hudMiss.textContent = 'MALSUKCESOJ: 0';
}

/* ---------- АЧИВКИ ---------- */
const ACHIEVEMENTS = {
  first_word:    { name:'Unua vorto',        ru:'Первое слово',        desc:'Выучили первое слово' },
  words_5:       { name:'Kvin vortoj',       ru:'Пять слов',           desc:'Выучили пять слов' },
  words_10:      { name:'Dek vortoj',        ru:'Десять слов',         desc:'Выучили десять слов' },
  words_25:      { name:'Dudek kvin',        ru:'Двадцать пять слов',  desc:'Выучили 25 слов' },
  words_40:      { name:'Kvardek vortoj',    ru:'Сорок слов',          desc:'Выучили 40 слов' },
  silence_1:     { name:'Silentema',         ru:'Молчаливый',          desc:'Ответили молчанием' },
  silence_3:     { name:'Muta',              ru:'Немой',               desc:'Ответили молчанием 3 раза' },
  x_master:      { name:'Sx-majstro',        ru:'Мастер x-системы',    desc:'Использовали x-систему' },
  anna_known:    { name:'Amiko de Anna',     ru:'Друг Анны',           desc:'Узнали историю Анны' },
  helped_anna:   { name:'Savanto',           ru:'Спаситель',           desc:'Пообещали помочь Анне' },
  darina_maxim:  { name:'Ĉiam kune',         ru:'Всегда вместе',       desc:'Узнали о Дарине и Максиме' },
  darina_smile:  { name:'La rideto',         ru:'Улыбка',              desc:'Увидели улыбку Дарины' },
  all_memory:    { name:'Kompleta memoro',   ru:'Полная память',       desc:'Собрали все 6 фрагментов' },
  easter_anna:   { name:'Eĥo de Anna',       ru:'Эхо Анны',            desc:'Нашли пасхалку «anna»' },
  easter_vivu:   { name:'Vivu!',             ru:'Vivu!',               desc:'Крикнули «Vivu!»' },
  wild_words:    { name:'Frenezaj vortoj',   ru:'Безумные слова',      desc:'Видели безумие слов' },
  all_endings:   { name:'Ĉiuj finoj',        ru:'Все финалы',          desc:'Увидели все 5 концовок' },
  heart_of_anna: { name:'Koro de Anna',      ru:'Сердце Анны',         desc:'Нашли тайну сердца Анны' },
  coffee_secret: { name:'Kafo de l\'amikoj', ru:'Кофе друзей',         desc:'Узнали секрет кофе' },
  luz_secret:    { name:'Lumo en la Mallumo',ru:'Свет во тьме',        desc:'Нашли свет' },
  chaos_mode:    { name:'Kaoso',             ru:'Хаос',                desc:'Разозлили систему' },
  club_name:     { name:'Vulpeto Abeleto',   ru:'Имя клуба',           desc:'Узнали, откуда имя клуба' },
  act1_done:     { name:'Unua Akto',         ru:'Первый акт',          desc:'Прошли Акт I' },
  act2_done:     { name:'Dua Akto',          ru:'Второй акт',          desc:'Прошли Акт II' },
  act3_done:     { name:'Tria Akto',         ru:'Третий акт',          desc:'Прошли Акт III' },
  first_course:  { name:'Unua Kurso',        ru:'Первый курс',         desc:'Прошли базовый курс эсперанто' },
  perfect:       { name:'Perfekte',          ru:'Идеально',            desc:'10 правильных ответов подряд' },

  /* ---- ХОДИЛКА ---- */
  walk_done:     { name:'En la Klubo',       ru:'Внутри клуба',        desc:'Прошли ходилку по клубу' },
  walk_maze:     { name:'Labirinto',         ru:'Лабиринт',            desc:'Прошли лабиринт, не пойманный' },
  walk_true_end: { name:'La Plena Memoro',   ru:'Полная память',       desc:'Истинная концовка ходилки' },
  walk_word_30:  { name:'Vortokolektanto',   ru:'Собиратель слов',     desc:'Собрали 30 слов в ходилке' },

  /* ---- МЕТА ---- */
  meta_return:   { name:'Reveninto',         ru:'Вернувшийся',         desc:'Вернулись в клуб трижды' },
  meta_night:    { name:'Nokta vizito',      ru:'Ночной визит',        desc:'Играли между 00:00 и 05:00' }
};

function unlockAch(key){
  if(!ACHIEVEMENTS[key] || state.achievements[key]) return;
  state.achievements[key] = true;
  save();
  const info = ACHIEVEMENTS[key];
  const el = document.createElement('div');
  el.className = 'ach';
  el.innerHTML = `<span class="ach-name">${info.name} · ${info.ru}</span><span class="ach-desc">${info.desc}</span>`;
  achieveEl.appendChild(el);
  if(A && A.chime) A.chime();
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='opacity .6s'; }, 3200);
  setTimeout(()=>el.remove(), 4000);
  updateHudAch();
}
function updateHudAch(){
  const n = Object.keys(state.achievements).length;
  const total = Object.keys(ACHIEVEMENTS).length;
  hudAch.textContent = `🏆 ${n}/${total}`;
}
function checkWordAch(){
  const n = state.learnedWords.size;
  if(n>=1) unlockAch('first_word');
  if(n>=5) unlockAch('words_5');
  if(n>=10) unlockAch('words_10');
  if(n>=25) unlockAch('words_25');
  if(n>=40) unlockAch('words_40');
}
function rememberMemory(label){
  if(state.memory >= 6) return;
  state.memory++;
  hudMem.textContent = `MEMORO: ${state.memory}`;
  hudMem.classList.add('flash');
  setTimeout(()=>hudMem.classList.remove('flash'), 900);
  addLine('   › fragmento de memoro: ' + label, 'memory');
  if(state.memory >= 6) unlockAch('all_memory');
}

/* ---------- СЛОВА ---------- */
function learnWord(w, translation){
  if(!w) return;
  const first = !state.learnedWords.has(w);
  state.learnedWords.add(w);
  if(translation && !state.dictionary[w]) state.dictionary[w] = translation;
  if(first && translation) state.reviewQueue.push({ w, t: translation, level: 0 });
  checkWordAch();
  save();
  updateHudWords();
}
function updateHudWords(){
  if(hudDict) hudDict.textContent = `SLOVNIK: ${state.learnedWords.size}`;
}

/* ---------- УТИЛИТЫ ---------- */
function addLine(text='', cls=''){
  const d = document.createElement('div');
  d.className = 'line ' + cls;
  d.textContent = text;
  out.appendChild(d); scroll();
  return d;
}
function norm(s){
  return String(s).toLowerCase().replace(/[.,!?;:'"«»„“()\[\]]/g,'').replace(/\s+/g,' ').trim();
}
const X_MAP = { c:'ĉ', g:'ĝ', h:'ĥ', j:'ĵ', s:'ŝ', u:'ŭ' };
function fromXSystem(input){
  return String(input).replace(/([cghjsuCGHJSU])x/g, (m,ch) => {
    const hat = X_MAP[ch.toLowerCase()];
    return ch === ch.toUpperCase() ? hat.toUpperCase() : hat;
  });
}

/* Поставить «неправильный» символ в строке через 3–9 секунд */
function hauntLine(el){
  if(!el || !el.textContent) return;
  const text = el.textContent;
  if(text.length < 6) return;
  const chars = 'ŝĉĝĵŭĥŜĈĜĴŬĤ';
  const idx = Math.floor(Math.random() * text.length);
  const ch = chars[Math.floor(Math.random() * chars.length)];
  const delay = 3000 + Math.random() * 6000;
  setTimeout(() => {
    if(!el.isConnected) return;
    const cur = el.textContent;
    if(cur !== text) return;
    el.textContent = cur.slice(0, idx) + ch + cur.slice(idx + 1);
    el.classList.add('haunt-char');
    state.hauntedChars++;
    setTimeout(() => el.classList.remove('haunt-char'), 800);
  }, delay);
}

/* ---------- PAUSE ---------- */
async function waitPause(){
  while(state.paused){
    if(abortPlay) return;
    await sleep(120);
  }
}
function setPaused(v){
  state.paused = v;
  if(hudPaused) hudPaused.style.display = v ? '' : 'none';
  screenEl.classList.toggle('paused', v);
}

/* ---------- ЭФФЕКТЫ ---------- */
let fxTimer = null;
function setFx(color, duration=3000){
  if(fxTimer) clearTimeout(fxTimer);
  fxEl.className = color;
  fxEl.classList.add('on');
  if(duration>0) fxTimer = setTimeout(()=>fxEl.classList.remove('on'), duration);
}
function clearFx(){
  if(fxTimer) clearTimeout(fxTimer);
  fxEl.className = ''; fxEl.classList.remove('on');
}
async function shake(){
  wrapEl.classList.remove('shaking'); void wrapEl.offsetWidth;
  wrapEl.classList.add('shaking');
  await sleep(360); wrapEl.classList.remove('shaking');
}
async function hardShake(dur=900){
  wrapEl.classList.add('hard-shaking');
  await sleep(dur); wrapEl.classList.remove('hard-shaking');
}
function blink(){
  wrapEl.classList.remove('blinking'); void wrapEl.offsetWidth;
  wrapEl.classList.add('blinking');
  setTimeout(()=>wrapEl.classList.remove('blinking'),260);
}
function glitch(){
  wrapEl.classList.remove('glitching'); void wrapEl.offsetWidth;
  wrapEl.classList.add('glitching');
  setTimeout(()=>wrapEl.classList.remove('glitching'),1100);
}
function flash(strength=0.22, color=''){
  flashEl.className = color;
  flashEl.style.transition = 'none';
  flashEl.style.opacity = strength;
  requestAnimationFrame(()=>{
    flashEl.style.transition = 'opacity .5s ease-out';
    flashEl.style.opacity = 0;
  });
}
async function fastFlip(){
  wrapEl.style.transition = 'transform .12s ease-out';
  wrapEl.style.transform = 'rotateX(180deg)';
  await sleep(180);
  wrapEl.style.transform = 'rotateX(0deg)';
  await sleep(150);
}
async function fastRotate(){
  wrapEl.style.transition = 'transform .15s ease-out';
  wrapEl.style.transform = 'rotate(180deg)';
  await sleep(200);
  wrapEl.style.transform = 'rotate(360deg)';
  await sleep(180);
  wrapEl.style.transform = 'rotate(0deg)';
}
async function fastWobble(){
  wrapEl.style.transition = 'transform .1s';
  for(let i=0;i<4;i++){
    wrapEl.style.transform = `rotate(${(Math.random()-.5)*20}deg) scale(${.9+Math.random()*.2})`;
    await sleep(90);
  }
  wrapEl.style.transition = 'transform .15s';
  wrapEl.style.transform = '';
}
const WILD = ['wild-move','wild-spin','wild-fly','wild-jiggle','wild-scatter','wild-melt','wild-drop','wild-zoom'];
function letWordsGoWild(duration=2200){
  if(state.wildActive) return;
  state.wildActive = true;
  unlockAch('wild_words');
  const lines = Array.from(out.querySelectorAll('.line'));
  if(!lines.length){ state.wildActive=false; return; }
  lines.forEach(l => {
    const cls = rnd(WILD);
    l.style.setProperty('--dx', (Math.random()*160-80).toFixed(0)+'px');
    l.style.setProperty('--dy', (Math.random()*160-80).toFixed(0)+'px');
    l.style.setProperty('--dx2', (Math.random()*160-80).toFixed(0)+'px');
    l.style.setProperty('--dy2', (Math.random()*160-80).toFixed(0)+'px');
    l.style.setProperty('--dr', (Math.random()*40-20).toFixed(0)+'deg');
    l.style.setProperty('--dr2', (Math.random()*40-20).toFixed(0)+'deg');
    setTimeout(()=>l.classList.add(cls), Math.random()*400);
  });
  glitch();
  setTimeout(()=>{
    lines.forEach(l => WILD.forEach(c => l.classList.remove(c)));
    state.wildActive = false;
  }, duration);
}

/* =========================================================
   ВСТРОЕННАЯ ХОДИЛКА
   VULPETO ABELETO — LA SILENTO
   ========================================================= */
function launchWalk(){
  return new Promise(resolve => {
    if(!walkOverlay || !walkFrame){
      console.warn('walk overlay not found');
      resolve(null); return;
    }
    if(state.walkDone && !confirm('Ты уже был в клубе. Зайти снова?')){
      resolve(null); return;
    }

    setPaused(true);
    walkOverlay.classList.add('on');

    let settled = false;
    const finish = (payload) => {
      if(settled) return;
      settled = true;
      window.removeEventListener('message', onMsg);
      walkOverlay.classList.remove('on');
      try { walkFrame.src = 'about:blank'; } catch(e){}
      setPaused(false);
      resolve(payload || {});
    };

    const onMsg = (e) => {
      if(!e.data || e.data.type !== 'kurso-walk-done') return;
      finish(e.data);
    };
    window.addEventListener('message', onMsg);

    walkFrame.onload = () => {
      try {
        walkFrame.contentWindow.postMessage({
          type: 'kurso-walk-init',
          learned: [...state.learnedWords],
          flags: state.storyFlags,
          act: state.act
        }, '*');
      } catch(err){ /* ignore */ }
    };

    /* Аварийный выход — если игрок нажал ESC */
    const escGuard = (ev) => {
      if(ev.key === 'Escape'){
        document.removeEventListener('keydown', escGuard);
        finish({ type: 'kurso-walk-done', ending: 'abort', newWords: [], memory: null });
      }
    };
    document.addEventListener('keydown', escGuard);
    setTimeout(() => document.removeEventListener('keydown', escGuard), 60000);

    walkFrame.src = 'walk/index.html';
  });
}

/* =========================================================
   СКРИМЕРЫ
   ========================================================= */
const SCARE_TYPES = ['eye','face','word','crawl','mirror','organic'];
function pickLayer(type){
  switch(type){
    case 'eye':    return { cls:'glyph jitter', text:'◉' };
    case 'face':   return { cls:'face jitter',  text:rnd(['◉◉','☠','𖤐','⛧']) };
    case 'word':   return { cls:'word jitter',  text:rnd(['LERNANTO','RESTU','ĈIAM','NI VIDAS','RESPONDU','MALLUMO','VULPETO','ABELETO']) };
    case 'crawl':  return { cls:'crawl',        text:rnd(['LERNANTO NENIU FORIRAS','DEK TRIA','RESTU KUN NI','VULPETO ABELETO']) };
    case 'mirror': return { cls:'mirror jitter',text:rnd(['ANNA','LERNANTO','RESTU','DARINA']) };
    case 'organic':return { cls:'organic jitter',text:rnd(['◉','☠','✖']) };
  }
}
async function jumpscare(kind='auto', opts={}){
  if(state.stopAllEvents && !opts.force) return;
  if(opts.fromRandom && Date.now() - state.lastScareTime < 14000) return;
  state.lastScareTime = Date.now();
  if(kind === 'auto') kind = rnd(SCARE_TYPES);
  const intensity = opts.intensity || 'normal';

  /* Глубокая тишина перед ударом — усиливает эффект */
  if(A && A.deadSilence && intensity !== 'light'){
    A.deadSilence(intensity === 'hard' ? 260 : 180);
  }

  let tr = 'none';
  const r = Math.random();
  if(opts.transform) tr = opts.transform;
  else if(r < 0.9) tr = 'none';
  else if(r < 0.94) tr = 'fastFlip';
  else if(r < 0.97) tr = 'fastRotate';
  else tr = 'fastWobble';

  flash(0.9,'black'); await sleep(30);
  flash(1.0,'white');
  if(A && A.randomScare) A.randomScare();

  const l1 = document.createElement('div');
  const d1 = pickLayer(kind);
  l1.className = 'js-layer ' + d1.cls;
  l1.textContent = d1.text;
  jumpscareEl.innerHTML = '';
  jumpscareEl.appendChild(l1);
  jumpscareEl.classList.add('on');

  let trP = Promise.resolve();
  if(tr === 'fastFlip') trP = fastFlip();
  else if(tr === 'fastRotate') trP = fastRotate();
  else if(tr === 'fastWobble') trP = fastWobble();

  await sleep(280);
  if(intensity !== 'light'){
    const k2 = rnd(SCARE_TYPES);
    const d2 = pickLayer(k2);
    const l2 = document.createElement('div');
    l2.className = 'js-layer ' + d2.cls;
    l2.style.mixBlendMode = rnd(['difference','screen','overlay']);
    l2.textContent = d2.text;
    jumpscareEl.appendChild(l2);
    if(A && A.randomScare) A.randomScare();
  }
  await sleep(220);
  l1.textContent = pickLayer(rnd(SCARE_TYPES)).text;
  jumpscareEl.querySelectorAll('.js-layer').forEach(l => {
    l.style.color = rnd(['#ff2020','#ffffff','#000000']);
  });
  if(A && A.randomScare) A.randomScare();
  await sleep(240);
  if(intensity === 'hard'){ if(A && A.randomScare) A.randomScare(); await sleep(180); }
  jumpscareEl.classList.remove('on');
  setTimeout(()=>jumpscareEl.innerHTML='',100);
  await sleep(200);
  await trP;
  state.dread = clamp(state.dread, 0.3, 0.9);
  state.jumpscareCount++;
}

/* ---------- MISS ---------- */
const CURSES = [
  ['KION VI FARAS?!','ЧТО ТЫ ДЕЛАЕШЬ?!'],
  ['STULTULO!','ТУПИЦА!'],
  ['RESPONDU, IDIOTO!','ОТВЕЧАЙ, ИДИОТ!'],
  ['ĈU VI ESTAS MUTA?!','ТЫ ЧТО, НЕМОЙ?!'],
  ['DEK-TRIA STULTULO!','ТРИНАДЦАТЫЙ ТУПИЦА!'],
  ['FIULO!','ПОДЛЕЦ!'],
  ['VI ESTAS NENIO!','ТЫ — НИЧТО!']
];
function registerMiss(){
  if(state.answeredByCodeword){ state.answeredByCodeword = false; return; }
  if(state.stopAllEvents) return;
  if(state.act === 1) return;
  state.misses++;
  hudMiss.textContent = `MALSUKCESOJ: ${state.misses}`;
  if(state.misses >= 4){ hudMiss.classList.add('hot'); hudEl.classList.add('angry'); }
  if(A && A.setHeartRate) A.setHeartRate(70 + state.misses * 12);
  if(state.misses <= 2) return;
  if(state.misses === 3){
    addLine(''); addLine('Vi eraras tro ofte.','bad');
    addLine('Ты ошибаешься слишком часто.','ru-muted');
    return;
  }
  if(state.misses === 4){ addLine(''); cursePlayer(); return; }
  if(state.misses >= 5 && !state.chaosMode && !state.chaosEnding){ startChaos(); return; }
}
async function cursePlayer(){
  if(state.act === 1) return;
  const c = rnd(CURSES);
  if(A && A.lowBoom) A.lowBoom();
  await shake(); flash(0.15);
  await type(c[0], 'rage', 60);
  await type(c[1], 'rage', 50);
}

/* ---------- ХАОС ---------- */
let chaosInts = [], chaosTO = null;
async function startChaos(){
  state.chaosMode = true;
  unlockAch('chaos_mode');
  hudEl.classList.add('angry');
  screenEl.classList.add('chaos-screen');
  wrapEl.classList.add('chaos');
  addLine('');
  await type('SISTEMA KOLERAS.','rage',70);
  await type('СИСТЕМА В ЯРОСТИ.','rage',60);
  if(A && A.setTrack) A.setTrack('chaos',1);
  flash(0.5,'red');
  jumpscare('organic',{intensity:'hard',force:true});
  await sleep(1400);
  chaosInts.push(setInterval(()=>{
    if(document.hidden || !state.chaosMode || state.stopAllEvents) return;
    if(Math.random()<0.35) blink();
    if(Math.random()<0.2) glitch();
    if(Math.random()<0.25 && A && A.lowBoom) A.lowBoom();
  },3200));
  chaosInts.push(setInterval(()=>{
    if(document.hidden || !state.chaosMode || state.stopAllEvents) return;
    if(out.querySelectorAll('.line').length > 2 && Math.random()<0.35) letWordsGoWild(1800);
  },5500));
  chaosInts.push(setInterval(()=>{
    if(document.hidden || !state.chaosMode || state.stopAllEvents) return;
    if(Math.random()<0.35) jumpscare(rnd(SCARE_TYPES),{intensity:'hard',fromRandom:true});
  },8000));
  chaosTO = setTimeout(endChaos, 10000);
}
async function endChaos(){
  if(!state.chaosMode) return;
  state.chaosMode = false; state.chaosEnding = true;
  chaosInts.forEach(clearInterval); chaosInts = [];
  if(chaosTO){ clearTimeout(chaosTO); chaosTO = null; }
  hudEl.classList.remove('angry');
  screenEl.classList.remove('chaos-screen');
  wrapEl.classList.remove('chaos');
  hudMiss.classList.remove('hot');
  clearFx();
  if(A && A.setTrack) A.setTrack('calm', 3);
  if(A && A.setHeartRate) A.setHeartRate(70);
  addLine('');
  await sleep(900);
  await type('...', 'whisper', 200);
  await sleep(1200);
  await type('Ладно. Не все люди умные.', 'ru');
  await sleep(1800);
  addLine('Hmph.', 'sys');
  await sleep(1400);
  state.misses = 3;
  hudMiss.textContent = `MALSUKCESOJ: ${state.misses}`;
}
function stopChaos(){
  state.chaosMode = false;
  hudEl.classList.remove('angry');
  screenEl.classList.remove('chaos-screen');
  wrapEl.classList.remove('chaos');
  chaosInts.forEach(clearInterval); chaosInts = [];
  if(chaosTO){ clearTimeout(chaosTO); chaosTO = null; }
  if(A && A.setHeartRate) A.setHeartRate(70);
}

/* ---------- ПЕЧАТЬ ---------- */
async function type(text, cls='', speed){
  speed = speed || settings.textSpeed;
  await waitPause();
  if(abortPlay) return;
  skipRequested = false;
  const el = addLine('', cls);
  for(let i=0;i<text.length;i++){
    if(abortPlay) return;
    if(skipRequested){ el.textContent = text; scroll(); skipRequested=false; break; }
    el.textContent += text[i];
    if(text[i].trim() && Math.random()<0.55 && A && A.blip) A.blip();
    if(i%4===0) scroll();
    await sleep(speed*(0.55+Math.random()*0.9));
  }
  scroll();
  if(Math.random() < 0.12) hauntLine(el);
  await sleep(140);
  return el;
}
async function say(eo, ru, speed=22){
  await waitPause();
  if(abortPlay) return;
  const d = document.createElement('div');
  d.className = 'line';
  const eoEl = document.createElement('span');
  eoEl.className = 'eo';
  d.appendChild(eoEl); out.appendChild(d); scroll();
  skipRequested = false;
  for(let i=0;i<eo.length;i++){
    if(abortPlay) return;
    if(skipRequested){ eoEl.textContent = eo; break; }
    eoEl.textContent += eo[i];
    if(eo[i].trim() && Math.random()<0.5 && A && A.blip) A.blip();
    if(i%4===0) scroll();
    await sleep(speed*(0.55+Math.random()*0.9));
  }
  eoEl.textContent = eo; scroll();
  await sleep(320);
  if(ru){
    const sep = document.createElement('span');
    sep.className = 'pair-sep'; sep.textContent = '—';
    d.appendChild(sep);
    const ruEl = document.createElement('span');
    ruEl.className = 'ru';
    d.appendChild(ruEl);
    for(let i=0;i<ru.length;i++){
      if(abortPlay) return;
      ruEl.textContent += ru[i];
      if(i%3===0) scroll();
      await sleep(11*(0.6+Math.random()*0.6));
    }
    ruEl.textContent = ru; scroll();
  }
  await sleep(160);
  return d;
}
async function saySweet(text, speed=50){
  await waitPause();
  if(abortPlay) return;
  const el = addLine('', 'sweet');
  skipRequested = false;
  for(let i=0;i<text.length;i++){
    if(abortPlay) return;
    if(skipRequested){ el.textContent = text; break; }
    el.textContent += text[i];
    if(text[i].trim() && Math.random()<0.4 && A && A.blip) A.blip();
    if(i%4===0) scroll();
    await sleep(speed*(0.6+Math.random()*0.8));
  }
  el.textContent = text; await sleep(160);
  return el;
}
async function ask(question){
  await waitPause();
  if(abortPlay) return;
  addLine('');
  await type(question, 'ask', 22);
  await sleep(200);
}

/* ---------- ВЫБОР / ВВОД ---------- */
function choose(opts){
  return new Promise(resolve => {
    startIdle();
    interact.innerHTML = '';
    opts.forEach((opt,i) => {
      const b = document.createElement('button');
      b.className = 'btn ' + (opt.cls || '');
      b.textContent = opt.label;
      b.addEventListener('click', () => {
        stopIdle();
        interact.innerHTML = '';
        addLine('> ' + opt.label, 'ru-muted');
        safeClick();
        if(opt.silent){
          state.silenceStreak++;
          if(state.silenceStreak === 1) unlockAch('silence_1');
          if(state.silenceStreak === 3) unlockAch('silence_3');
          registerMiss();
        }
        resolve(i);
      });
      interact.appendChild(b);
    });
  });
}
function askText(prompt='> '){
  return new Promise(resolve => {
    state.answeredByCodeword = false;
    startIdle();
    interact.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'inputline';
    const p = document.createElement('span');
    p.className = 'prompt'; p.textContent = prompt;
    const inp = document.createElement('input');
    inp.type = 'text'; inp.autocomplete = 'off';
    inp.autocapitalize = 'off'; inp.spellcheck = false;
    wrap.append(p, inp);
    interact.appendChild(wrap);
    setTimeout(()=>inp.focus(), 60);
    const done = async () => {
      stopIdle();
      const raw = inp.value;
      const conv = fromXSystem(raw);
      if(conv !== raw && raw.trim()){
        state.xSystemUses++;
        if(state.xSystemUses === 1) unlockAch('x_master');
      }
      interact.innerHTML = '';
      const display = (conv !== raw && raw.trim()) ? raw + '  →  ' + conv : raw;
      addLine(prompt + display, 'ru-muted');
      safeClick();

      /* Запомним последние слова игрока */
      if(raw.trim()){
        state.lastWords.push({ w: raw.trim(), t: Date.now() });
        if(state.lastWords.length > 5) state.lastWords.shift();
        save();
      }

      const n = conv.toLowerCase().trim();
      let fired = false;
      if(n.includes('anna') && !state.easterEggs.anna){
        state.easterEggs.anna = true; save(); unlockAch('easter_anna');
        fired = true; setPaused(true);
        await easterAnna(); setPaused(false);
      } else if(n.includes('vivu') && !state.easterEggs.vivu){
        state.easterEggs.vivu = true; save(); unlockAch('easter_vivu');
        fired = true; setPaused(true);
        await easterVivu(); setPaused(false);
      } else if(n.includes('mallumo') || n.includes('тьма')){
        fired = true; setPaused(true);
        await easterMallumo(); setPaused(false);
      } else if(n.includes('vulpeto') || n.includes('abeleto')){
        fired = true; setPaused(true);
        await easterClub(); setPaused(false);
      } else if(n.includes('wild') || n.includes('frenez')){
        fired = true; letWordsGoWild(2400);
      } else if(['koro','kafo','lumo'].includes(n)){
        fired = true; setPaused(true);
        await sleep(200);
        if(n === 'koro') await storyKoro();
        else if(n === 'kafo') await storyKafo();
        else await storyLumo();
        setPaused(false);
      }
      if(fired){
        state.answeredByCodeword = true;
        addLine('‹ кодовое слово принято ›', 'code');
      }
      resolve(conv);
    };
    inp.addEventListener('input', () => resetIdle());
    inp.addEventListener('keydown', e => {
      if(e.key === 'Enter'){ e.preventDefault(); done(); }
      else resetIdle();
    });
    inp.addEventListener('click', () => resetIdle());
  });
}

/* ---------- ПАСХАЛКИ ---------- */
async function easterAnna(){
  if(A && A.setTrack) A.setTrack('storySweet', 1.5);
  await sleep(200);
  await type('...','whisper',200);
  await sleep(700);
  await type('Vi konas mian nomon.','memory');
  await type('Ты знаешь моё имя.','ru-muted');
  await sleep(900);
  await type('Neniu konas ĝin.','memory');
  await type('Никто его не знает.','ru-muted');
  await sleep(900);
  await type('...dankon.','whisper',60);
  await type('...спасибо.','ru-muted');
  await sleep(1500);
  if(A && A.setTrack) A.setTrack('calm', 2);
}
async function easterVivu(){
  if(A){ if(A.chime) A.chime(); if(A.bell) A.bell(); if(A.setTrack) A.setTrack('storyWarm', 1.5); }
  await sleep(200);
  await type('Vivu!','easter',80);
  await sleep(700);
  await type('Эхо разносится по пустым классам.','ru-muted');
  await sleep(800);
  await type('...vivu!...','whisper',60);
  await sleep(1200);
  await type('Голоса детей. Они были здесь.','ru-muted');
  await sleep(1400);
  if(A && A.setTrack) A.setTrack('calm', 2);
}
async function easterMallumo(){
  if(A && A.setTrack) A.setTrack('chaos', 0.6);
  setFx('void', 2500);
  await jumpscare(rnd(['organic','face']), { intensity:'hard', force:true });
  await type('MALLUMO.','rage',70);
  await type('ТЬМА.','rage',60);
  await sleep(1200);
  clearFx();
}
async function easterClub(){
  unlockAch('club_name');
  if(A && A.setTrack) A.setTrack('choir', 1.5);
  addLine('');
  await type('‹ VULPETO ABELETO ›','clubname');
  await type('VULPETO — лисёнок. ABELETO — пчёлка.','ru');
  await sleep(500);
  await type('Два зверя. Один — хитрый и одинокий.','ru-muted');
  await type('Другая — тёплая и трудолюбивая.','ru-muted');
  await sleep(600);
  await type('«Мы не выбирали имена. Они выбрали нас.»','memory');
  await sleep(900);
  await type('— Максим, 2010','sys');
  await sleep(1200);
  if(A && A.setTrack) A.setTrack('calm', 2);
}
async function storyKoro(){
  if(state.storyFlags.koro){ await saySweet('Koro — сердце. Ты уже знаешь это.'); return; }
  state.storyFlags.koro = true; save(); unlockAch('heart_of_anna');
  if(A && A.setTrack) A.setTrack('storySweet', 1.2);
  addLine('');
  await saySweet('♪ Ты произносишь: KORO.');
  await sleep(700); await saySweet('Сердце.');
  await sleep(900);
  await type('«Анна рисовала сердца на полях тетрадей.»','memory');
  await sleep(1000);
  await type('«Сто двадцать шесть. По одному на каждый урок.»','memory');
  await sleep(1100);
  await type('«Когда её мама умерла — Анна нарисовала ещё одно.»','memory');
  await sleep(1000);
  await type('«Оно было чёрное. С трещиной. Сто двадцать седьмое. Последнее.»','memory');
  await sleep(1400);
  await type('* ачивка: Koro de Anna *','easter');
  await sleep(1000);
  await type('‹ диалог продолжается ›','code');
}
async function storyKafo(){
  if(state.storyFlags.kafo){ await saySweet('Kafo — кофе. Вы уже это слышали.'); return; }
  state.storyFlags.kafo = true; save(); unlockAch('coffee_secret');
  if(A && A.setTrack) A.setTrack('storyWarm', 1.2);
  addLine('');
  await saySweet('♪ Ты произносишь: KAFO.');
  await sleep(700); await saySweet('Кофе.');
  await sleep(900);
  await type('«Они пили кофе каждое утро. Одну чашку на двоих.»','memory');
  await sleep(1000);
  await type('«Когда Максим уехал — Дарина сварила две чашки.»','memory');
  await sleep(1100);
  await type('«Одну поставила напротив пустого стула. Три года.»','memory');
  await sleep(1300);
  await type('* ачивка: Kafo de l\'amikoj *','easter');
  await sleep(1000);
  await type('‹ диалог продолжается ›','code');
}
async function storyLumo(){
  if(state.storyFlags.lumo){ await saySweet('Lumo — свет. Ты снова нашёл его.'); return; }
  state.storyFlags.lumo = true; save(); unlockAch('luz_secret');
  if(A && A.setTrack) A.setTrack('storySweet', 1.2);
  addLine('');
  await saySweet('♪ Ты произносишь: LUMO.');
  await sleep(700); await saySweet('Свет.');
  await sleep(900);
  await type('«Анна оставила одно сердце не чёрным.»','memory');
  await sleep(1000);
  await type('«Дарина нашла его через год. Оно светилось.»','memory');
  await sleep(1100);
  await type('«Они спрятали его. Где-то в клубе. Возможно — оно всё ещё там.»','memory');
  await sleep(1400);
  await type('* ачивка: Lumo en la Mallumo *','easter');
  await sleep(1000);
  await type('‹ диалог продолжается ›','code');
}

/* ---------- МЕТА-ХОРРОР ---------- */
function metaGreeting(){
  const now = new Date();
  const hour = now.getHours();
  if(state.sessions > 0 && state.firstPlayed){
    const daysSinceLast = Math.floor((Date.now() - state.lastPlayed) / 86400000);
    if(daysSinceLast > 7 && state.sessions > 1){
      return `Тебя не было ${daysSinceLast} дней. Я считал.`;
    }
  }
  if(hour >= 0 && hour < 5){
    unlockAch('meta_night');
    return 'Ты снова не спишь. Как и я.';
  }
  if(state.sessions >= 3){
    unlockAch('meta_return');
    return `Мы встречались ${state.sessions} раз. Это уже привычка.`;
  }
  if(state.sessions >= 1) return 'С возвращением.';
  return null;
}
function metaTitle(){
  if(state.sessions > 5){
    document.title = 'ĈU VI ANKORAŬ ESTAS TIE?';
  } else {
    document.title = 'KURSO — La Tri Aktoj';
  }
}
document.addEventListener('visibilitychange', () => {
  if(document.hidden && state.sessions > 0){
    document.title = '...ne foriru...';
  } else {
    metaTitle();
  }
});

/* =========================================================
   КОНСОЛЬ
   ========================================================= */
const CONSOLE_COMMANDS = [
  ['/go','Продолжить диалог'],
  ['/stop','Остановить все события'],
  ['/down','Сбросить агрессию'],
  ['/pause','Пауза'],
  ['/help','Список команд'],
  ['/ach','Достижения'],
  ['/words','Изученные слова'],
  ['/miss','Промахи'],
  ['/track X','Сменить трек'],
  ['/tracks','Список треков'],
  ['/scare','Скример'],
  ['/silence','Глубокая тишина (3с)'],
  ['/wild','Безумие слов'],
  ['/anna','Секрет Анны'],
  ['/koro','Секрет сердца'],
  ['/walk','Открыть ходилку'],
  ['/act N','Перейти к акту'],
  ['/unlock','Открыть все акты'],
  ['/credits','Титры'],
  ['/meta','Сбросить мета-память'],
  ['/reset','Сбросить прогресс'],
  ['/clear','Очистить лог'],
  ['/exit','Закрыть консоль']
];
function renderConsole(){
  consoleCmds.innerHTML = '';
  CONSOLE_COMMANDS.forEach(([n,d])=>{
    const r = document.createElement('div');
    r.className = 'c-cmd-row';
    r.innerHTML = `<span class="c-cmd-name">${n}</span><span class="c-cmd-desc">${d}</span>`;
    consoleCmds.appendChild(r);
  });
}
function clog(text, cls='log-info'){
  const d = document.createElement('div');
  d.className = 'log-line ' + cls;
  d.textContent = text;
  consoleLog.appendChild(d);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}
function toggleConsole(){
  state.consoleOpen = !state.consoleOpen;
  consoleEl.classList.toggle('on', state.consoleOpen);
  if(state.consoleOpen){
    renderConsole();
    setTimeout(()=>consoleInput.focus(),50);
    clog('Консоль открыта. Введи /help.', 'log-info');
  }
}
async function processCmd(raw){
  const s = raw.trim(); if(!s) return;
  clog('› ' + s, 'log-ok');
  const parts = s.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(' ');
  switch(cmd){
    case '/go': setPaused(false); state.stopAllEvents=false; clog('▸ Диалог продолжен.','log-ok'); break;
    case '/stop':
      state.stopAllEvents=true; setPaused(false); stopChaos();
      jumpscareEl.classList.remove('on'); jumpscareEl.innerHTML=''; clearFx();
      clog('▸ Все события остановлены.','log-ok'); break;
    case '/down':
      state.misses=0; state.chaosMode=false; state.chaosEnding=false;
      hudMiss.textContent='MALSUKCESOJ: 0'; hudMiss.classList.remove('hot');
      hudEl.classList.remove('angry'); screenEl.classList.remove('chaos-screen');
      wrapEl.classList.remove('chaos');
      if(A && A.setHeartRate) A.setHeartRate(70);
      clog('▸ Агрессия сброшена.','log-ok'); break;
    case '/pause': setPaused(true); clog('▸ Пауза. /go чтобы продолжить.','log-ok'); break;
    case '/help':
      CONSOLE_COMMANDS.forEach(([n,d])=>clog(`  ${n.padEnd(12)} — ${d}`,'log-info'));
      break;
    case '/ach':
      consoleEl.classList.remove('on'); state.consoleOpen=false;
      showAchievementsScreen();
      break;
    case '/words':{
      const w = [...state.learnedWords];
      clog(`Слов: ${w.length}`, 'log-info');
      if(w.length) clog('  ' + w.join(', '), 'log-info');
      break;
    }
    case '/miss': clog(`Промахи: ${state.misses}`, state.misses>=4?'log-err':'log-info'); break;
    case '/track':
      if(A && A.setTrack && A.setTrack(arg, 1.5)) clog(`▸ Трек: ${arg}`, 'log-ok');
      else clog('Неизвестный трек.','log-err');
      break;
    case '/tracks':{
      const list = A && A.listTracks ? A.listTracks() : [];
      clog(`Треков: ${list.length}`, 'log-info');
      clog('  ' + list.join(', '), 'log-info');
      break;
    }
    case '/scare': jumpscare(rnd(SCARE_TYPES),{intensity:'hard',force:true}); clog('▸ Скример!','log-err'); break;
    case '/silence':
      if(A && A.deadSilence){ A.deadSilence(3000); clog('▸ Глубокая тишина 3с.','log-easter'); }
      else clog('Недоступно.','log-err');
      break;
    case '/wild': letWordsGoWild(2600); clog('▸ Безумие слов.','log-ok'); break;
    case '/anna':
      clog('› «Я знаю, что ты здесь.»','log-anna');
      await sleep(500);
      clog('› «Спасибо, что не забыл.»','log-anna');
      break;
    case '/koro':
      if(state.storyFlags.koro) clog('Уже открыто.','log-info');
      else { state.storyFlags.koro=true; save(); unlockAch('heart_of_anna'); clog('▸ Секрет открыт.','log-easter'); }
      break;
    case '/walk':
      consoleEl.classList.remove('on'); state.consoleOpen=false;
      clog('▸ Запуск ходилки...','log-easter');
      launchWalk().then(res => {
        if(res && res.ending) clog(`▸ Ходилка завершена: ${res.ending}`,'log-ok');
      });
      break;
    case '/act':
      if(parseInt(arg)>0 && window.STORY['act'+arg]){
        state.act = parseInt(arg); state.scene = 0;
        state.unlockedActs[state.act] = true;
        save();
        consoleEl.classList.remove('on'); state.consoleOpen=false;
        await restartPlay(0);
      } else clog('Неизвестный акт.','log-err');
      break;
    case '/unlock':
      state.unlockedActs = { 1:true, 2:true, 3:true };
      save(); clog('▸ Все акты открыты.','log-easter');
      break;
    case '/credits':
      consoleEl.classList.remove('on'); state.consoleOpen=false;
      showCredits();
      break;
    case '/meta':
      state.sessions = 0;
      state.firstPlayed = 0;
      state.lastPlayed = 0;
      state.lastWords = [];
      save();
      clog('▸ Мета-память сброшена.','log-easter');
      break;
    case '/reset':
      resetProgress(); clog('▸ Прогресс сброшен.','log-err');
      break;
    case '/clear': consoleLog.innerHTML=''; clog('Очищено.','log-info'); break;
    case '/exit': toggleConsole(); break;
    default: clog(`Неизвестная команда: ${cmd}`,'log-err');
  }
}

/* =========================================================
   ОСТАНОВКА И ПЕРЕЗАПУСК
   ========================================================= */
async function stopPlay(){
  abortPlay = true;
  state.paused = false;
  let waited = 0;
  while(isPlaying && waited < 3000){
    await sleep(50);
    waited += 50;
  }
  isPlaying = false;
}
async function restartPlay(sceneIdx){
  await stopPlay();
  out.innerHTML = '';
  interact.innerHTML = '';
  if(typeof sceneIdx === 'number') state.scene = sceneIdx;
  gate.classList.add('hide');
  setTimeout(() => playAct(), 100);
}

/* =========================================================
   ИНТЕРПРЕТАТОР СЦЕН
   ========================================================= */
async function playAct(){
  if(isPlaying) return;
  const actKey = 'act' + state.act;
  const act = window.STORY && window.STORY[actKey];
  if(!act){
    addLine('Акт ' + state.act + ' не загружен. Проверь, что story/act' + state.act + '.js на месте.', 'bad');
    return;
  }
  isPlaying = true;
  abortPlay = false;
  try {
    hudAct.textContent = `AKTO ${['I','II','III','IV','V'][state.act-1] || state.act}`;
    if(state.scene < 0 || state.scene >= act.scenes.length) state.scene = 0;

    /* Приветствие от мета-памяти — только один раз */
    if(state.act === 1 && state.scene === 0 && state.sessions > 0){
      const greeting = metaGreeting();
      if(greeting){
        addLine('');
        await type(greeting, 'memory');
        await sleep(1400);
      }
    }

    while(state.scene < act.scenes.length){
      if(abortPlay) return;
      jumpTarget = null;
      endedFlag = false;
      save();

      const scene = act.scenes[state.scene];
      if(!scene) break;
      await playScene(scene);
      if(abortPlay) return;
      if(endedFlag) break;

      if(jumpTarget !== null){
        const target = jumpTarget;
        jumpTarget = null;
        const newIdx = act.scenes.findIndex(sc => sc.id === target);
        if(newIdx >= 0){ state.scene = newIdx; continue; }
        else break;
      }
      state.scene++;
    }

    if(abortPlay) return;

    unlockAch('act'+state.act+'_done');
    state.unlockedActs[state.act] = true;
    if(state.act < 3) state.unlockedActs[state.act + 1] = true;
    save();

    addLine('');
    await type('── Fino de Akto ' + ['Unua','Dua','Tria','Kvara'][state.act-1] + ' ──', 'sys');
    await sleep(1500);

    if(abortPlay) return;

    if(state.act === 3 && endedFlag){
      state.endingsCount = Object.keys(state.endingsSeen).length;
      save();
      await sleep(800);
      addLine('');
      await type('...', 'whisper', 200);
      await sleep(1500);
      if(abortPlay) return;
      showCredits();
      return;
    }

    state.scene = 0;
    if(state.act < 3){
      state.act++;
      save();
      addLine('');
      await type('Premu por daŭrigi al la sekva akto...', 'ru-muted');
      const b = document.createElement('button');
      b.className = 'btn gold';
      b.textContent = '▶ Продолжить';
      b.addEventListener('click', async ()=>{
        safeClick();
        interact.innerHTML='';
        out.innerHTML='';
        isPlaying = false;
        await playAct();
      });
      interact.innerHTML = ''; interact.appendChild(b);
    } else {
      interact.innerHTML = '';
      const b = document.createElement('button');
      b.className = 'btn gold';
      b.textContent = '▶ В главное меню';
      b.addEventListener('click', ()=>{
        safeClick();
        interact.innerHTML='';
        showMainMenu();
      });
      interact.appendChild(b);
    }
  } finally {
    isPlaying = false;
  }
}

async function playScene(scene){
  if(!scene || !scene.steps) return;
  for(const step of scene.steps){
    if(jumpTarget !== null || endedFlag || abortPlay) return;
    await playStep(step);
  }
}

async function playStep(s){
  if(jumpTarget !== null || endedFlag || abortPlay) return;

  switch(s.t){
    case 'line':       await type(s.text, s.cls || ''); break;
    case 'say':        await say(s.eo, s.ru, s.speed || 22); break;
    case 'saySweet':   await saySweet(s.text, s.speed || 50); break;
    case 'smile':      await type(s.text, 'smile'); break;
    case 'clubname':   await type(s.text, 'clubname'); break;
    case 'track':      if(A && A.setTrack) A.setTrack(s.name, s.fade || 1.5); break;
    case 'fx':         setFx(s.name, s.dur || 3000); break;
    case 'clearFx':    clearFx(); break;
    case 'wait': {
      const totalMs = s.ms || 500;
      const t0 = Date.now();
      while(Date.now() - t0 < totalMs){
        if(abortPlay) return;
        await sleep(Math.min(60, totalMs - (Date.now() - t0)));
      }
      break;
    }
    case 'shake':      await shake(); break;
    case 'hardShake':  await hardShake(s.ms || 900); break;
    case 'glitch':     glitch(); break;
    case 'blink':      blink(); break;
    case 'flash':      flash(s.strength || 0.3, s.color || ''); break;
    case 'scare':      await jumpscare(s.kind || 'auto', s.opts || {}); break;
    case 'jumpscare':  await jumpscare('auto', { intensity: 'hard' }); break;
    case 'silence':    if(A && A.deadSilence) A.deadSilence(s.ms || 3000); break;
    case 'memory':     rememberMemory(s.label); break;
    case 'word':       learnWord(s.word, s.translation); break;
    case 'count':{
      const hc = document.getElementById('hud-count');
      if(hc){ hc.textContent = 'LERNANTOJ: ' + s.n;
        if(s.n > 12) hc.classList.add('danger'); }
      break;
    }
    case 'lesson':     await lessonHeader(s.title, s.subtitle); break;
    case 'rule':       await showRule(s.text, s.ru); break;
    case 'examples':   await showExamples(s.items); break;
    case 'exercise':   await runExercise(s); break;
    case 'review':     await maybeReview(); break;
    case 'lessonDone':
      state.lessonsCompleted[s.id] = true;
      save();
      if(s.id === 'lesson7' || s.id === 'lesson18') unlockAch('first_course');
      break;
    case 'branch':
      jumpTarget = state.storyFlags[s.flag] ? s.then : s.else;
      break;
    case 'setFlag':
      state.storyFlags[s.flag] = true;
      save();
      break;
    case 'ask':{
      await ask(s.q);
      if(s.hint) await type(s.hint, 'ru-muted');
      const v = await askText('> ');
      const n = norm(v);
      if(s.answers && s.answers.length){
        const ok = s.answers.some(a => n === norm(a) || n.includes(norm(a)));
        if(ok){
          if(A && A.chime) A.chime();
          state.exerciseStats.right++;
          state.exerciseStats.streak++;
          state.exerciseStats.bestStreak = Math.max(state.exerciseStats.bestStreak, state.exerciseStats.streak);
          if(state.exerciseStats.streak >= 10) unlockAch('perfect');
          if(s.onCorrect) await type(s.onCorrect, 'ru-muted');
          if(s.word) learnWord(s.word, s.translation);
        } else if(!state.answeredByCodeword){
          if(A && A.metal) A.metal();
          state.exerciseStats.wrong++;
          state.exerciseStats.streak = 0;
          if(s.onWrong) await type(s.onWrong, 'bad');
          if(s.answer) await say(s.answer, s.answerRu || '', 40);
          if(s.word) learnWord(s.word, s.translation);
          registerMiss();
        }
        state.answeredByCodeword = false;
      }
      break;
    }
    case 'choose':{
      const idx = await choose(s.opts);
      if(s.goto && s.goto[idx]) jumpTarget = s.goto[idx];
      break;
    }
    case 'walk':{
  const res = await launchWalk();
  if(res && Array.isArray(res.newWords)){
    res.newWords.forEach(([w, tr]) => learnWord(w, tr));
  }
  if(res && res.memory) rememberMemory(res.memory);
  if(res && res.ending && res.ending !== 'abort'){   // ← добавить проверку
    state.storyFlags['walk_ending_' + res.ending] = true;
    state.walkEnding = res.ending;
    state.walkDone = true;
    if(res.mazeDeaths) state.walkMazeDeaths = (state.walkMazeDeaths || 0) + res.mazeDeaths;
    unlockAch('walk_done');
    if(res.ending === 'plena_memoro'){
      unlockAch('walk_true_end');
      unlockAch('walk_maze');
    }
    if(res.wordsCount >= 30) unlockAch('walk_word_30');
    save();
  }
  break;
}
    case 'end':
      await type('── Fino · ' + (s.ending || 'lernanto') + ' ──', 'sys');
      state.endingsSeen[s.ending || 'lernanto'] = true;
      save();
      if(Object.keys(state.endingsSeen).length >= 5) unlockAch('all_endings');
      endedFlag = true;
      break;
  }
}

/* ---------- УРОКИ ---------- */
async function lessonHeader(title, subtitle){
  addLine('');
  await type('── ' + title + ' ──', 'sys');
  if(subtitle) await type(subtitle, 'sys');
  await sleep(500);
}
async function showRule(rule, ru){
  await type('ПРАВИЛО: ' + rule, 'ru');
  if(ru) await type(ru, 'ru-muted');
  await sleep(400);
}
async function showExamples(items){
  addLine('');
  for(const ex of items){
    await say(ex.eo, ex.ru, 35);
    await sleep(200);
  }
  await sleep(400);
}
async function runExercise(ex){
  if(ex.kind === 'choose'){
    await ask(ex.q);
    if(ex.hint) await type(ex.hint, 'ru-muted');
    const opts = ex.opts.map(o => ({ label: o.label }));
    const idx = await choose(opts);
    const correct = ex.opts[idx].correct;
    if(correct){
      if(A && A.chime) A.chime();
      state.exerciseStats.right++;
      state.exerciseStats.streak++;
      state.exerciseStats.bestStreak = Math.max(state.exerciseStats.bestStreak, state.exerciseStats.streak);
      if(state.exerciseStats.streak >= 10) unlockAch('perfect');
      if(ex.onCorrect) await type(ex.onCorrect, 'ru-muted');
      if(ex.word) learnWord(ex.word, ex.translation);
    } else {
      if(A && A.metal) A.metal();
      state.exerciseStats.wrong++;
      state.exerciseStats.streak = 0;
      if(ex.onWrong) await type(ex.onWrong, 'bad');
      const rightLabel = ex.opts.find(o => o.correct).label;
      await type('Правильный ответ: ' + rightLabel, 'ru-muted');
      if(ex.word) learnWord(ex.word, ex.translation);
      if(state.act > 1) registerMiss();
    }
    await sleep(500);
    return;
  }
  if(ex.kind === 'fill'){
    await ask(ex.q);
    if(ex.hint) await type(ex.hint, 'ru-muted');
    await sleep(200);
    const v = await askText('> ');
    const n = norm(v);
    const ok = ex.answers.some(a => n === norm(a));
    if(ok){
      if(A && A.chime) A.chime();
      state.exerciseStats.right++;
      state.exerciseStats.streak++;
      state.exerciseStats.bestStreak = Math.max(state.exerciseStats.bestStreak, state.exerciseStats.streak);
      if(state.exerciseStats.streak >= 10) unlockAch('perfect');
      if(ex.onCorrect) await type(ex.onCorrect, 'ru-muted');
      if(ex.word) learnWord(ex.word, ex.translation);
    } else if(!state.answeredByCodeword){
      if(A && A.metal) A.metal();
      state.exerciseStats.wrong++;
      state.exerciseStats.streak = 0;
      if(ex.onWrong) await type(ex.onWrong, 'bad');
      if(ex.answer) await type('Правильный ответ: ' + ex.answer, 'ru-muted');
      if(ex.word) learnWord(ex.word, ex.translation);
      if(state.act > 1) registerMiss();
    }
    state.answeredByCodeword = false;
    await sleep(500);
    return;
  }
  await ask(ex.q);
  if(ex.hint) await type(ex.hint, 'ru-muted');
  await sleep(200);
  const v = await askText('> ');
  const n = norm(v);
  const ok = ex.answers.some(a => n === norm(a) || n.includes(norm(a)));
  if(ok){
    if(A && A.chime) A.chime();
    state.exerciseStats.right++;
    state.exerciseStats.streak++;
    state.exerciseStats.bestStreak = Math.max(state.exerciseStats.bestStreak, state.exerciseStats.streak);
    if(state.exerciseStats.streak >= 10) unlockAch('perfect');
    if(ex.onCorrect) await type(ex.onCorrect, 'ru-muted');
    if(ex.word) learnWord(ex.word, ex.translation);
  } else if(!state.answeredByCodeword){
    if(A && A.metal) A.metal();
    state.exerciseStats.wrong++;
    state.exerciseStats.streak = 0;
    if(ex.onWrong) await type(ex.onWrong, 'bad');
    if(ex.answer) await say(ex.answer, ex.answerRu || '', 40);
    if(ex.word) learnWord(ex.word, ex.translation);
    if(state.act > 1) registerMiss();
  }
  state.answeredByCodeword = false;
  await sleep(500);
}
async function maybeReview(){
  state.reviewCounter++;
  if(state.reviewCounter < 4) return;
  state.reviewCounter = 0;
  if(state.reviewQueue.length === 0) return;
  state.reviewQueue.sort((a,b) => a.level - b.level);
  const item = state.reviewQueue[0];
  addLine('');
  await type('── RIPETO · Повторение ──', 'sys');
  await sleep(400);
  await type('Вспомни слово из прошлых уроков:', 'ru');
  await sleep(300);
  await ask(`Как будет «${item.t}» по-эсперанто?`);
  await type('Подсказка: это слово из истории.', 'ru-muted');
  const v = await askText('> ');
  if(norm(v) === norm(item.w)){
    if(A && A.chime) A.chime();
    item.level++;
    await type('Ĝuste!', 'eo');
    await type('Верно.', 'ru-muted');
    if(item.level >= 3) state.reviewQueue = state.reviewQueue.filter(x => x !== item);
  } else {
    if(state.act > 1 && A && A.metal) A.metal();
    await type(`Правильный ответ: ${item.w}`, 'ru-muted');
    item.level = Math.max(0, item.level - 1);
    if(state.act > 1) registerMiss();
  }
  await sleep(700);
}

/* ---------- IDLE ---------- */
let idleTimer = null, idleStage = 0;
function scheduleIdle(){
  if(idleTimer) clearTimeout(idleTimer);
  const delay = [15000,13000,14000,11000][Math.min(idleStage,3)];
  idleTimer = setTimeout(async () => {
    idleStage++;
    try { await scold(idleStage); } catch(e){}
    if(idleTimer !== null) scheduleIdle();
  }, delay);
}
function startIdle(){ idleStage=0; scheduleIdle(); }
function resetIdle(){ idleStage=0; scheduleIdle(); }
function stopIdle(){
  if(idleTimer) clearTimeout(idleTimer);
  idleTimer = null; idleStage = 0;
}
async function scold(stage){
  if(state.paused || state.stopAllEvents) return;
  if(state.act === 1){
    if(A && A.whisper) A.whisper();
    await type('...', 'whisper', 200);
    await sleep(300);
    await type('Ĉu vi ankoraŭ estas tie?', 'whisper', 60);
    await type('Ты всё ещё здесь?', 'ru-muted');
    return;
  }
  if(stage === 1){
    if(A && A.whisper) A.whisper();
    await type('...','whisper',200);
    await sleep(300);
    await type('Ĉu vi dormas?','whisper',60);
    await type('Ты спишь?','ru-muted');
    return;
  }
  if(stage === 2){
    if(A && A.metal) A.metal(); await shake();
    await type('Vi silentas tro longe.','bad');
    await type('Ты молчишь слишком долго.','ru-muted');
    registerMiss();
    return;
  }
  if(A && A.growl) A.growl(); await shake(); flash(0.2);
  await type('RESPONDU!','rage',70);
  registerMiss();
}

/* =========================================================
   МЕНЮ ПАУЗЫ
   ========================================================= */
function openPauseMenu(){
  setPaused(true);
  state.pauseIndex = 0;
  state.subMenuOpen = false;
  subMenu.classList.remove('on');
  renderPauseMenu();
  pauseMenu.classList.add('on');
}
function closePauseMenu(){
  pauseMenu.classList.remove('on');
  subMenu.classList.remove('on');
  state.subMenuOpen = false;
  setPaused(false);
}
function renderPauseMenu(){
  const items = [
    { icon:'▶', label:'Продолжить', action: closePauseMenu },
    { icon:'📖', label:'Словарь', action: () => openSubMenu('dict') },
    { icon:'❐', label:'Уроки акта', action: () => openSubMenu('lessons') },
    { icon:'🎬', label:'Акты', action: () => openSubMenu('acts') },
    { icon:'⚙', label:'Настройки', action: () => openSubMenu('settings') },
    { icon:'📊', label:'Статистика', action: () => openSubMenu('stats') },
    { icon:'🎞', label:'Титры', action: () => { closePauseMenu(); showCredits(); } },
    { icon:'🏠', label:'Главное меню', action: () => { closePauseMenu(); showMainMenu(); } }
  ];
  pauseList.innerHTML = '';
  items.forEach((it, i) => {
    const b = document.createElement('button');
    b.className = 'pause-btn' + (i === state.pauseIndex ? ' selected' : '');
    b.innerHTML = `<span class="icon">${it.icon}</span><span>${it.label}</span>`;
    b.addEventListener('click', () => {
      safeClick();
      state.pauseIndex = i;
      it.action();
    });
    pauseList.appendChild(b);
  });
}

/* =========================================================
   ПОДМЕНЮ
   ========================================================= */
function openSubMenu(kind){
  state.subMenuOpen = true;
  state.subKind = kind;
  state.subIndex = 0;
  renderSubMenu();
  subMenu.classList.add('on');
}
function closeSubMenu(){
  state.subMenuOpen = false;
  subMenu.classList.remove('on');
}
if(subClose){
  subClose.addEventListener('click', () => { safeClick(); closeSubMenu(); });
}
function renderSubMenu(){
  subList.innerHTML = '';
  switch(state.subKind){
    case 'dict':       renderDictSub(); break;
    case 'lessons':    renderLessonsSub(); break;
    case 'acts':       renderActsSub(); break;
    case 'settings':   renderSettingsSub(); break;
    case 'stats':      renderStatsSub(); break;
    default:
      subTitle.textContent = '';
      subSub.textContent = '';
  }
}
function renderDictSub(){
  subTitle.textContent = '❒ SLOVNIK · СЛОВАРЬ';
  subSub.textContent = 'Слов: ' + state.learnedWords.size;
  const words = Object.keys(state.dictionary).sort();
  if(words.length === 0){
    const d = document.createElement('div');
    d.className = 'sub-row';
    d.style.textAlign = 'center';
    d.style.color = '#5a7a5a';
    d.textContent = 'Ты пока не выучил ни одного слова.';
    subList.appendChild(d);
  } else {
    words.forEach(w => {
      const row = document.createElement('div');
      row.className = 'sub-row';
      row.innerHTML = `<span class="label" style="color:#ffd479">${w}</span>
                       <span class="value" style="color:#a8d8a8">${state.dictionary[w]}</span>`;
      subList.appendChild(row);
    });
  }
}
function renderLessonsSub(){
  subTitle.textContent = '▸ LECIONOJ · УРОКИ';
  const act = window.STORY && window.STORY['act' + (state.act || 1)];
  if(!act || !Array.isArray(act.scenes)){
    subSub.textContent = '';
    const d = document.createElement('div');
    d.className = 'sub-row';
    d.style.color = '#ff8080';
    d.style.textAlign = 'center';
    d.style.lineHeight = '1.6';
    d.innerHTML = 'Акт не загружен.<br>Проверь, что файл <b>story/act' + state.act + '.js</b> подключён в index.html.';
    subList.appendChild(d);
    return;
  }
  const lessons = act.scenes
    .map((sc, idx) => ({ id: sc.id, idx }))
    .filter(o => o.id && /^lesson\d/.test(o.id));
  subSub.textContent = 'Найдено уроков: ' + lessons.length + ' · акт ' + state.act;
  if(lessons.length === 0){
    const d = document.createElement('div');
    d.className = 'sub-row';
    d.style.textAlign = 'center';
    d.style.color = '#5a7a5a';
    d.style.fontSize = '13px';
    d.style.lineHeight = '1.6';
    d.innerHTML = 'В этом акте нет уроков с id «lessonN».<br>' +
                  'Проверь, что файл <b>story/act' + state.act + '.js</b> — свежий (с уроками).';
    subList.appendChild(d);
    return;
  }
  lessons.forEach((o) => {
    const done = !!state.lessonsCompleted[o.id];
    const numMatch = o.id.match(/lesson(\d+)/);
    const num = numMatch ? numMatch[1] : '?';
    const b = document.createElement('button');
    b.className = 'sub-btn';
    b.innerHTML = `<span class="num">${num}.</span>
                   <span class="label">Урок ${num}</span>
                   <span class="mark">${done ? '✔' : ''}</span>`;
    b.addEventListener('click', async () => {
      safeClick();
      pauseMenu.classList.remove('on');
      subMenu.classList.remove('on');
      state.subMenuOpen = false;
      state.paused = false;
      await restartPlay(o.idx);
    });
    subList.appendChild(b);
  });
}
function renderActsSub(){
  subTitle.textContent = '▸ AKTOJ · АКТЫ';
  subSub.textContent = 'Выбери акт · ↑↓ навигация';
  const ACT_NAMES = {
    1: 'Акт I — Antaŭ la Fermo',
    2: 'Акт II — La Disiĝo',
    3: 'Акт III — La Nuna Tempo'
  };
  for(let i = 1; i <= 3; i++){
    if(!window.STORY['act'+i]) continue;
    const unlocked = !!state.unlockedActs[i];
    const done = !!state.achievements['act'+i+'_done'];
    const b = document.createElement('button');
    b.className = 'sub-btn' + (unlocked ? '' : ' locked');
    b.innerHTML = `<span class="num">${['I','II','III'][i-1]}.</span>
                   <span class="label">${ACT_NAMES[i]}${done ? ' · ✔' : ''}</span>`;
    if(unlocked){
      b.addEventListener('click', async () => {
        safeClick();
        pauseMenu.classList.remove('on');
        subMenu.classList.remove('on');
        state.subMenuOpen = false;
        state.paused = false;
        state.act = i; state.scene = 0;
        save();
        await restartPlay(0);
      });
    }
    subList.appendChild(b);
  }
}
const SETTINGS_ITEMS = [
  { key: 'brightness', label: 'Яркость', min: 0.4, max: 1.6, step: 0.05,
    get: () => settings.brightness.toFixed(2),
    set: (v) => { settings.brightness = v; applySettings(); saveSettings(); } },
  { key: 'contrast', label: 'Контрастность', min: 0.5, max: 1.6, step: 0.05,
    get: () => settings.contrast.toFixed(2),
    set: (v) => { settings.contrast = v; applySettings(); saveSettings(); } },
  { key: 'volume', label: 'Громкость', min: 0.0, max: 1.0, step: 0.05,
    get: () => settings.volume.toFixed(2),
    set: (v) => { settings.volume = v; saveSettings(); } },
  { key: 'textSpeed', label: 'Скорость текста', min: 5, max: 40, step: 1,
    get: () => String(settings.textSpeed),
    set: (v) => { settings.textSpeed = v; saveSettings(); } },
  { key: 'scanlines', label: 'Сканлайны', toggle: true,
    get: () => settings.scanlines ? 'ВКЛ' : 'ВЫКЛ',
    set: () => { settings.scanlines = !settings.scanlines; applySettings(); saveSettings(); } },
  { key: 'particles', label: 'Частицы', toggle: true,
    get: () => settings.particles ? 'ВКЛ' : 'ВЫКЛ',
    set: () => { settings.particles = !settings.particles; saveSettings(); } }
];
function renderSettingsSub(){
  subList.innerHTML = '';
  subTitle.textContent = '⚙ AGRANDIGOJ · НАСТРОЙКИ';
  subSub.textContent = '↑↓ — выбрать · ← → — изменить · E — переключить';
  SETTINGS_ITEMS.forEach((item, i) => {
    const row = document.createElement('div');
    row.className = 'sub-row' + (i === state.subIndex ? ' selected' : '');
    if(item.toggle){
      row.innerHTML = `<span class="label">${item.label}</span>
                       <span class="value">${item.get()}</span>`;
      row.addEventListener('click', () => {
        state.subIndex = i;
        item.set();
        renderSettingsSub();
      });
    } else {
      row.innerHTML = `<span class="label">${item.label}</span>
                       <span class="value">
                         <span class="arrow" data-act="dec" style="cursor:pointer;padding:0 8px">◄</span>
                         ${item.get()}
                         <span class="arrow" data-act="inc" style="cursor:pointer;padding:0 8px">►</span>
                       </span>`;
      row.addEventListener('click', (e) => {
        state.subIndex = i;
        const act = e.target && e.target.dataset && e.target.dataset.act;
        if(act === 'dec'){
          const cur = parseFloat(item.get());
          item.set(+clamp(cur - item.step, item.min, item.max).toFixed(2));
          renderSettingsSub();
        } else if(act === 'inc'){
          const cur = parseFloat(item.get());
          item.set(+clamp(cur + item.step, item.min, item.max).toFixed(2));
          renderSettingsSub();
        } else {
          renderSettingsSub();
        }
      });
    }
    subList.appendChild(row);
  });
  const actions = [
    { label: '🎞 Показать титры', action: () => { closeSubMenu(); closePauseMenu(); showCredits(); } },
    { label: '📊 Статистика', action: () => { state.subKind='stats'; state.subIndex=0; renderSubMenu(); } },
    { label: '🗑 Сбросить весь прогресс', cls:'danger', action: () => {
      if(confirm('Сбросить ВЕСЬ прогресс? Это действие нельзя отменить.')){
        resetProgress();
        if(A && A.metal) A.metal();
        renderSettingsSub();
      }
    } }
  ];
  actions.forEach((a, j) => {
    const i = SETTINGS_ITEMS.length + j;
    const row = document.createElement('div');
    row.className = 'sub-row ' + (a.cls || '') + (i === state.subIndex ? ' selected' : '');
    row.innerHTML = `<span class="label">${a.label}</span>`;
    row.addEventListener('click', () => {
      state.subIndex = i;
      a.action();
    });
    subList.appendChild(row);
  });
}
function renderStatsSub(){
  subTitle.textContent = '📊 REZULTOJ · СТАТИСТИКА';
  subSub.textContent = 'Твоё прохождение';
  const words = state.learnedWords.size;
  const endings = Object.keys(state.endingsSeen).length;
  const ach = Object.keys(state.achievements).length;
  const totalAch = Object.keys(ACHIEVEMENTS).length;
  const exercises = state.exerciseStats.right + state.exerciseStats.wrong;
  const accuracy = exercises > 0 ? Math.round(state.exerciseStats.right/exercises*100) : 0;
  const playtimeMin = Math.round((Date.now() - state.startTime) / 60000);

  const addRow = (label, value, color) => {
    const r = document.createElement('div');
    r.className = 'sub-row';
    r.innerHTML = `<span class="label">${label}</span>
                   <span class="value" ${color?'style="color:'+color+'"':''}>${value}</span>`;
    subList.appendChild(r);
  };
  const addTitle = (text) => {
    const t = document.createElement('div');
    t.className = 'sub-row';
    t.style.color = '#7dff9a';
    t.style.fontSize = '12px';
    t.style.letterSpacing = '3px';
    t.style.textTransform = 'uppercase';
    t.style.borderBottom = '1px solid rgba(125,255,154,.3)';
    t.style.cursor = 'default';
    t.textContent = text;
    subList.appendChild(t);
  };
  addTitle('Общее');
  addRow('Финалов открыто', endings + ' / 5', '#ffd479');
  addRow('Достижений', ach + ' / ' + totalAch, '#ffd479');
  addRow('Слов изучено', words, '#ffd479');
  addRow('Уроков пройдено', Object.keys(state.lessonsCompleted).length);
  addRow('Правильных ответов', state.exerciseStats.right, '#5aff7a');
  addRow('Ошибок', state.exerciseStats.wrong, '#ff8080');
  addRow('Точность', accuracy + '%');
  addRow('Лучшая серия', state.exerciseStats.bestStreak);
  addRow('Промахов', state.misses);
  addRow('Время в игре', playtimeMin + ' мин');

  addTitle('Мета');
  addRow('Сессий', state.sessions);
  addRow('Ходилка', state.walkDone ? ('пройдена · ' + (state.walkEnding || '?')) : 'не пройдена');
  addRow('Смертей в ходилке', state.walkMazeDeaths || 0);

  addTitle('Открытые финалы');
  const endingsMap = {
    'lernanto': 'Lernanto por ĉiam',
    'fugo': 'Fuĝo · Побег',
    'memoro': 'Memoro · Память',
    'instruisto': 'Instruisto · Учитель',
    'chaos': 'Kaoso · Хаос'
  };
  Object.entries(endingsMap).forEach(([key, label]) => {
    const got = !!state.endingsSeen[key];
    const r = document.createElement('div');
    r.className = 'sub-row';
    r.style.color = got ? '#5aff7a' : '#5a7a5a';
    r.style.cursor = 'default';
    r.innerHTML = `<span class="label">${got?'✔':'·'} ${label}</span>`;
    subList.appendChild(r);
  });

  addTitle('Достижения');
  Object.entries(ACHIEVEMENTS).forEach(([key, info]) => {
    const got = !!state.achievements[key];
    const r = document.createElement('div');
    r.className = 'sub-row';
    r.style.color = got ? '#5aff7a' : '#5a7a5a';
    r.style.fontSize = '13px';
    r.style.cursor = 'default';
    r.innerHTML = `<span class="label">${got?'✔':'·'} ${info.name}</span>`;
    subList.appendChild(r);
  });

  addTitle('Пасхалки');
  const eggs = [
    ['anna', 'Eĥo de Anna'],
    ['vivu', 'Vivu!'],
    ['koro', 'Koro de Anna'],
    ['kafo', 'Kafo de l\'amikoj'],
    ['lumo', 'Lumo en la Mallumo'],
    ['club', 'Vulpeto Abeleto']
  ];
  eggs.forEach(([k, label]) => {
    const got = !!state.easterEggs[k] || !!state.storyFlags[k];
    const r = document.createElement('div');
    r.className = 'sub-row';
    r.style.color = got ? '#5aff7a' : '#5a7a5a';
    r.style.fontSize = '13px';
    r.style.cursor = 'default';
    r.innerHTML = `<span class="label">${got?'✔':'·'} ${label}</span>`;
    subList.appendChild(r);
  });
}

/* =========================================================
   ТИТРЫ
   ========================================================= */
function buildCreditsHTML(){
  const endings = Object.keys(state.endingsSeen).length;
  const words = state.learnedWords.size;
  const ach = Object.keys(state.achievements).length;
  const totalAch = Object.keys(ACHIEVEMENTS).length;
  return `
    <div class="cred-title">KURSO</div>
    <div class="cred-text">La Silento de Vulpeto Abeleto</div>

    <div class="cred-section">
      <div class="cred-section-title">Создатель</div>
      <div class="cred-name">Максим Семененко</div>
      <div class="cred-role">идея · код · дизайн · звук · текст</div>
    </div>

    <div class="cred-section">
      <div class="cred-section-title">Сюжет</div>
      <div class="cred-text">
        История Анны, Дарины и Максима.<br>
        Клуб, который не хотел закрываться.<br>
        Тринадцатый ученик, который всё-таки пришёл.
      </div>
    </div>

    <div class="cred-section">
      <div class="cred-section-title">В память о</div>
      <div class="cred-name">Дарине и Максиме</div>
      <div class="cred-role">друзьях · основателях · ĈIAM KUNE</div>
      <div class="cred-eo">«Ni estis amikoj. Nur amikoj. Kaj tio estis bela.»</div>
    </div>

    <div class="cred-section">
      <div class="cred-section-title">Эсперанто</div>
      <div class="cred-text">
        Язык, созданный Людвиком Заменгофом в 1887 году.<br>
        Язык, который должен был объединить людей.<br>
        Язык, который до сих пор жив.
      </div>
      <div class="cred-eo">«La lingvo internacia devas esti la komuna posedaĵo de la tuta homaro.»</div>
    </div>

    <div class="cred-section">
      <div class="cred-section-title">Твоё прохождение</div>
      <div class="cred-text">
        Финалов открыто: <b style="color:#ffd479">${endings} / 5</b><br>
        Слов изучено: <b style="color:#ffd479">${words}</b><br>
        Достижений: <b style="color:#ffd479">${ach} / ${totalAch}</b>
      </div>
    </div>

    <div class="cred-heart">❤ ĈIAM KUNE ❤</div>

    <div class="cred-section">
      <div class="cred-section-title">Благодарности</div>
      <div class="cred-text">
        Всем, кто учит языки.<br>
        Всем, кто не боится тишины.<br>
        Всем, кто помнит друзей.
      </div>
    </div>

    <div class="cred-text" style="margin-top:60px;">
      <em>Bonan lernadon. Kaj bonan vivon.</em>
    </div>
    <div class="cred-text" style="margin-bottom:300px;">
      — Максим Семененко, 2026
    </div>
  `;
}
let creditsSkipped = false;
let creditsTimeout = null;
function showCredits(){
  creditsSkipped = false;
  credScroll.innerHTML = buildCreditsHTML();
  creditsEl.classList.add('on');
  if(A && A.setTrack) A.setTrack('storySweet', 3);
  creditsTimeout = setTimeout(()=>{ finishCredits(); }, 70000);
}
function finishCredits(){
  if(creditsSkipped) return;
  creditsSkipped = true;
  if(creditsTimeout) clearTimeout(creditsTimeout);
  creditsEl.classList.remove('on');
  state.subKind = 'stats';
  state.subIndex = 0;
  state.paused = true;
  openSubMenu('stats');
}
if(credSkip){
  credSkip.addEventListener('click', e => {
    e.stopPropagation();
    safeClick();
    if(creditsTimeout) clearTimeout(creditsTimeout);
    creditsSkipped = true;
    creditsEl.classList.remove('on');
    state.subKind = 'stats';
    state.subIndex = 0;
    state.paused = true;
    openSubMenu('stats');
  });
}

/* =========================================================
   ГЛАВНОЕ МЕНЮ
   ========================================================= */
function showMainMenu(){
  stopPlay();
  state.paused = false;
  pauseMenu.classList.remove('on');
  subMenu.classList.remove('on');
  creditsEl.classList.remove('on');
  state.subMenuOpen = false;
  if(A && A.setTrack) A.setTrack('silence', 0.5);
  gate.classList.remove('hide');
  out.innerHTML = '';
  interact.innerHTML = '';
  hudAct.textContent = 'AKTO I';
  buildGateMenu();
}
function buildGateMenu(){
  gateMenu.innerHTML = '';
  const hasProgress = Object.keys(state.lessonsCompleted).length > 0
                   || state.learnedWords.size > 0
                   || (state.unlockedActs[2] || state.unlockedActs[3]);
  const items = [];
  if(hasProgress){
    items.push({
      icon: '▶', label: 'Продолжить',
      hint: 'акт ' + state.act,
      cls: 'primary',
      action: async () => { await restartPlay(state.scene); }
    });
  }
  items.push({
    icon: '✦', label: hasProgress ? 'Новая игра' : 'Начать игру',
    hint: 'акт I',
    cls: hasProgress ? '' : 'primary',
    action: async () => {
      resetProgress();
      state.act = 1; state.scene = 0; state.startTime = Date.now();
      await restartPlay(0);
    }
  });
  items.push({ icon: '▸', label: 'Акты', hint: 'выбор акта', action: () => openSubMenu('acts') });
  items.push({ icon: '❐', label: 'Уроки', hint: 'акт ' + state.act, action: () => openSubMenu('lessons') });
  items.push({ icon: '⚙', label: 'Настройки', hint: 'яркость · титры · сброс', action: () => openSubMenu('settings') });
  items.push({ icon: '🎞', label: 'Титры', hint: 'о создателе', action: () => { showCredits(); } });
  items.forEach(item => {
    const b = document.createElement('button');
    b.className = 'gate-btn ' + (item.cls || '');
    b.innerHTML = `<span class="icon">${item.icon}</span>
                   <span class="label">${item.label}</span>
                   <span class="hint">${item.hint}</span>`;
    b.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
      initAudio();
      safeClick();
      try { item.action(); } catch(err){ console.error(err); }
    });
    gateMenu.appendChild(b);
  });
}

/* =========================================================
   HUD-СЛОВАРЬ
   ========================================================= */
if(hudDict){
  hudDict.addEventListener('click', e => {
    e.stopPropagation();
    initAudio();
    openPauseMenu();
    openSubMenu('dict');
  });
}

/* =========================================================
   ДОСТИЖЕНИЯ (экран)
   ========================================================= */
async function showAchievementsScreen(){
  stopIdle(); stopChaos();
  out.innerHTML = '';
  if(A && A.setTrack) A.setTrack('melody', 1.5);
  await type('── ATINGOJ · ДОСТИЖЕНИЯ ──','sys');
  await sleep(600);
  let n = 0;
  for(const [k,info] of Object.entries(ACHIEVEMENTS)){
    const got = !!state.achievements[k];
    if(got) n++;
    const line = document.createElement('div');
    line.className = 'line';
    line.innerHTML = `<span class="${got?'eo':'ru-muted'}">${got?'✔':'·'} ${info.name} · ${info.ru}</span> <span class="ru-muted">— ${info.desc}</span>`;
    out.appendChild(line);
  }
  addLine('');
  await type(`Всего: ${n} / ${Object.keys(ACHIEVEMENTS).length}`, 'sys');
  interact.innerHTML = '';
  const b = document.createElement('button');
  b.className = 'btn';
  b.textContent = '← Назад';
  b.addEventListener('click', async ()=>{
    safeClick();
    out.innerHTML='';
    await restartPlay(state.scene);
  });
  interact.appendChild(b);
}

/* =========================================================
   ЧАСЫ
   ========================================================= */
setInterval(()=>{
  const d = new Date();
  const p = n => String(n).padStart(2,'0');
  hudTime.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}, 1000);

/* =========================================================
   РАНДОМ
   ========================================================= */
function startRandom(){
  setInterval(()=>{
    if(document.hidden || state.stopAllEvents) return;
    if(state.paused || state.act === 1) return;
    if(isPlaying && Math.random() < 0.06 + state.dread*0.18) blink();
  }, 2600);
  setInterval(()=>{
    if(document.hidden || state.stopAllEvents) return;
    if(state.paused || state.act === 1 || !isPlaying) return;
    const chance = state.chaosMode ? 0.15 : 0.012 + state.dread*0.05;
    if(Math.random() < chance){
      jumpscare(rnd(['eye','face','organic','mirror','word']), { fromRandom: true });
    }
  }, 8000);
  /* Случайный «чужой» символ в HUD */
  setInterval(()=>{
    if(document.hidden || state.paused || !isPlaying) return;
    if(Math.random() < 0.05){
      const old = hudAct.textContent;
      hudAct.textContent = 'DEK TRIA';
      hudAct.classList.add('bad');
      setTimeout(() => {
        hudAct.textContent = old;
        hudAct.classList.remove('bad');
      }, 220);
    }
  }, 60000);
}

/* =========================================================
   KEYDOWN
   ========================================================= */
document.addEventListener('keydown', e => {
  /* Ходилка сверху — игнорируем всё, кроме ESC */
  if(walkOverlay && walkOverlay.classList.contains('on')){
    return;
  }
  /* Ctrl+P — консоль */
  if((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')){
    e.preventDefault(); e.stopPropagation();
    toggleConsole();
    return;
  }
  /* Консоль открыта */
  if(state.consoleOpen){
    if(e.key === 'Escape'){ e.preventDefault(); toggleConsole(); }
    return;
  }
  /* Титры */
  if(creditsEl.classList.contains('on')){
    if(e.key === 'Escape'){ finishCredits(); }
    return;
  }
  /* Подменю */
  if(state.subMenuOpen){
    if(e.key === 'Escape'){ e.preventDefault(); closeSubMenu(); return; }
    if(e.key === 'ArrowUp'){
      e.preventDefault();
      state.subIndex = Math.max(0, state.subIndex - 1);
      renderSubMenu(); safeClick();
      return;
    }
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      const max = getSubMenuCount() - 1;
      state.subIndex = Math.min(max, state.subIndex + 1);
      renderSubMenu(); safeClick();
      return;
    }
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      e.preventDefault();
      if(state.subKind === 'settings' && state.subIndex < SETTINGS_ITEMS.length){
        const item = SETTINGS_ITEMS[state.subIndex];
        const dir = (e.key === 'ArrowRight') ? 1 : -1;
        if(item.toggle){ item.set(); }
        else {
          const cur = parseFloat(item.get());
          item.set(+clamp(cur + dir * item.step, item.min, item.max).toFixed(2));
        }
        renderSettingsSub();
      }
      safeClick();
      return;
    }
    if(e.key === 'e' || e.key === 'E' || e.key === 'Enter'){
      e.preventDefault();
      const rows = subList.querySelectorAll('.sub-row, .sub-btn');
      const target = rows[state.subIndex];
      if(target) target.click();
      return;
    }
    return;
  }
  /* Меню паузы */
  if(pauseMenu.classList.contains('on')){
    if(e.key === 'Escape'){ e.preventDefault(); closePauseMenu(); return; }
    if(e.key === 'ArrowUp'){
      e.preventDefault();
      state.pauseIndex = Math.max(0, state.pauseIndex - 1);
      renderPauseMenu(); safeClick();
      return;
    }
    if(e.key === 'ArrowDown'){
      e.preventDefault();
      state.pauseIndex = Math.min(7, state.pauseIndex + 1);
      renderPauseMenu(); safeClick();
      return;
    }
    if(e.key === 'e' || e.key === 'E' || e.key === 'Enter'){
      e.preventDefault();
      const btns = pauseList.querySelectorAll('.pause-btn');
      const target = btns[state.pauseIndex];
      if(target) target.click();
      return;
    }
    return;
  }
  /* Меню заставки */
  if(!gate.classList.contains('hide')){
    if(e.key === 'Escape') return;
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'e' || e.key === 'E' || e.key === 'Enter'){
      e.preventDefault();
      const btns = gateMenu.querySelectorAll('.gate-btn');
      if(!btns.length) return;
      const dir = (e.key === 'ArrowUp') ? -1 : (e.key === 'ArrowDown' ? 1 : 0);
      if(dir){
        const cur = btns[0].classList.contains('selected') ? 0
                  : Array.from(btns).findIndex(b => b.classList.contains('selected'));
        const next = (cur + dir + btns.length) % btns.length;
        btns.forEach(b => b.classList.remove('selected'));
        btns[next].classList.add('selected');
        safeClick();
      } else {
        const sel = gateMenu.querySelector('.gate-btn.selected') || btns[0];
        if(sel) sel.click();
      }
      return;
    }
  }
  /* Игра */
  if(e.key === 'Escape'){
    e.preventDefault();
    openPauseMenu();
    return;
  }
  if(e.key === 'Tab'){
    e.preventDefault();
    openPauseMenu();
    openSubMenu('dict');
    return;
  }
});

function getSubMenuCount(){
  switch(state.subKind){
    case 'settings': return SETTINGS_ITEMS.length + 3;
    case 'lessons':  return subList.querySelectorAll('.sub-btn').length || 1;
    case 'acts':     return subList.querySelectorAll('.sub-btn').length || 1;
    default: return 1;
  }
}

/* =========================================================
   АНИМАЦИЯ ЗАСТАВКИ
   ========================================================= */
function startGateCanvas(){
  if(!gateCanvas) return;
  const ctx = gateCanvas.getContext('2d');
  let W, H;
  const glyphs = ['ĉ','ĝ','ĥ','ĵ','ŝ','ŭ','✦','✧','·','◦','*','°'];
  const particles = [];
  function resize(){
    W = gateCanvas.width = gateCanvas.offsetWidth;
    H = gateCanvas.height = gateCanvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  for(let i = 0; i < 45; i++){
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
      glyph: Math.random() < .22 ? glyphs[Math.floor(Math.random()*glyphs.length)] : null,
      size: .8 + Math.random() * 1.6,
      alpha: .12 + Math.random() * .45,
      phase: Math.random() * Math.PI * 2,
      speed: .001 + Math.random() * .002
    });
  }
  function loop(t){
    if(!document.body.contains(gateCanvas)) return;
    if(gate.classList.contains('hide')){
      requestAnimationFrame(loop); return;
    }
    ctx.fillStyle = 'rgba(0,0,0,0.09)';
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = 'center';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if(p.x < -30) p.x = W + 30;
      if(p.x > W + 30) p.x = -30;
      if(p.y < -30) p.y = H + 30;
      if(p.y > H + 30) p.y = -30;
      const flicker = .5 + Math.sin(t * p.speed + p.phase) * .5;
      ctx.globalAlpha = p.alpha * flicker;
      if(p.glyph){
        ctx.font = `${p.size * 12}px "Courier New", monospace`;
        ctx.fillStyle = p.size > 5 ? '#a8e8a8'
          : (Math.random() < .3 ? '#ffd479' : '#7dff9a');
        ctx.fillText(p.glyph, p.x, p.y);
      } else {
        ctx.fillStyle = '#4a8a5a';
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* =========================================================
   СТАРТ
   ========================================================= */
applySettings();
load();

/* Мета-память: увеличиваем счётчик сессий */
if(!state.firstPlayed) state.firstPlayed = Date.now();
state.sessions++;
state.lastPlayed = Date.now();
save();
metaTitle();

updateHudAch();
updateHudWords();
hudMem.textContent = `MEMORO: ${state.memory}`;
hudMiss.textContent = `MALSUKCESOJ: ${state.misses}`;
startGateCanvas();
buildGateMenu();
startRandom();

/* Инициализация звука при первом касании документа */
window.addEventListener('mousedown', () => { initAudio(); }, { once: true });
window.addEventListener('touchstart', () => { initAudio(); }, { once: true });
window.addEventListener('keydown', () => { initAudio(); }, { once: true });

})();