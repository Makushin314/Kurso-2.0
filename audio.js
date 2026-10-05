/* =========================================================
   audio.js — процедурная звуковая система KURSO v11.4
   37 треков: настроения · локации · время · сюжет · особые
   ========================================================= */
window.Audio3 = (() => {
  let actx = null, master = null;
  const layers = {
    drone:    { gain: null, oscs: [] },
    pad:      { gain: null, oscs: [] },
    sub:      { gain: null, osc: null },
    noise:    { gain: null },
    melody:   { gain: null, timer: null, step: 0 },
    bells:    { gain: null, timer: null },
    heartbeat:{ gain: null, timer: null }
  };
  let current = 'silence';

  /* =========================================================
     37 ТРЕКОВ
     ========================================================= */
  const TRACKS = {

    /* ---- I. ТИШИНА И ПОКОЙ (3) ---- */
    silence:      { drone:0,    pad:0,    noise:0,     sub:0,    melody:0,   bells:0,   heartbeat:0 },
    calm:         { drone:0.06, pad:0.04, noise:0.008, sub:0,    melody:0,   bells:0,   heartbeat:0 },
    peaceful:     { drone:0,    pad:0.12, noise:0.004, sub:0,    melody:0.8, notes:'peaceful', bells:0.18, heartbeat:0, warm:true },

    /* ---- II. ТЕПЛО И НЕЖНОСТЬ (4) ---- */
    warm:         { drone:0,    pad:0.16, noise:0,     sub:0,    melody:0.75,notes:'warm',    bells:0.3,  heartbeat:0, warm:true },
    sweet:        { drone:0,    pad:0.18, noise:0,     sub:0,    melody:0.85,notes:'musicbox',bells:0.4,  heartbeat:0, warm:true },
    storySweet:   { drone:0,    pad:0.14, noise:0,     sub:0,    melody:0.85,notes:'musicbox',bells:0.35, heartbeat:0, warm:true },
    storyWarm:    { drone:0,    pad:0.18, noise:0,     sub:0,    melody:0.7, notes:'warm',    bells:0.4,  heartbeat:0, warm:true },

    /* ---- III. ГРУСТЬ И УТРАТА (3) ---- */
    sad:          { drone:0.04, pad:0.1,  noise:0.006, sub:0,    melody:0.75,notes:'sad',     bells:0.15, heartbeat:0, warm:true },
    grief:        { drone:0.14, pad:0.12, noise:0.015, sub:0.05, melody:0.65,notes:'grief',   bells:0.2,  heartbeat:0 },
    hope:         { drone:0.03, pad:0.14, noise:0.005, sub:0,    melody:0.85,notes:'hope',    bells:0.3,  heartbeat:0, warm:true },

    /* ---- IV. НАПРЯЖЕНИЕ И УЖАС (8) ---- */
    tense:        { drone:0.16, pad:0.05, noise:0.022, sub:0.03, melody:0,   bells:0,   heartbeat:0 },
    dread:        { drone:0.34, pad:0.1,  noise:0.07,  sub:0.14, melody:0,   bells:0,   heartbeat:0.5 },
    horror:       { drone:0.28, pad:0.08, noise:0.05,  sub:0.09, melody:0,   bells:0,   heartbeat:0 },
    chaos:        { drone:0.4,  pad:0.14, noise:0.14,  sub:0.18, melody:0,   bells:0,   heartbeat:0.9 },
    void:         { drone:0.02, pad:0,    noise:0.008, sub:0.26, melody:0,   bells:0,   heartbeat:0 },
    static:       { drone:0.02, pad:0,    noise:0.16,  sub:0,    melody:0,   bells:0,   heartbeat:0 },
    whisperTrack: { drone:0.04, pad:0.02, noise:0.09,  sub:0,    melody:0,   bells:0,   heartbeat:0 },
    ritual:       { drone:0.22, pad:0.14, noise:0.03,  sub:0.12, melody:0.4, notes:'ritual', bells:0.6, heartbeat:0.4 },

    /* ---- V. МУЗЫКА И ПАМЯТЬ (7) ---- */
    melody:       { drone:0.04, pad:0.03, noise:0.006, sub:0,    melody:0.9, notes:'major',  bells:0,    heartbeat:0 },
    melody_dark:  { drone:0.08, pad:0.05, noise:0.012, sub:0.03, melody:0.85,notes:'minor',  bells:0,    heartbeat:0 },
    mystery:      { drone:0.1,  pad:0.06, noise:0.02,  sub:0.02, melody:0.7, notes:'mystery',bells:0.25, heartbeat:0 },
    sunset:       { drone:0.05, pad:0.09, noise:0.01,  sub:0,    melody:0.75,notes:'warm',   bells:0,    heartbeat:0 },
    lullaby:      { drone:0,    pad:0.1,  noise:0,     sub:0,    melody:0.9, notes:'lullaby',bells:0.3,  heartbeat:0, warm:true },
    memory:       { drone:0.03, pad:0.12, noise:0.005, sub:0,    melody:0.8, notes:'hope',   bells:0.4,  heartbeat:0, warm:true },
    clockwork:    { drone:0.05, pad:0.06, noise:0.02,  sub:0.02, melody:0.5, notes:'mystery',bells:0.15, heartbeat:0.3 },

    /* ---- VI. ЛОКАЦИИ КЛУБА (6) ---- */
    vestiblo:     { drone:0.08, pad:0.06, noise:0.01,  sub:0,    melody:0.5, notes:'peaceful',bells:0.15, heartbeat:0 },
    biblioteko:   { drone:0.1,  pad:0.07, noise:0.015, sub:0.02, melody:0.4, notes:'mystery', bells:0.2,  heartbeat:0 },
    spegula:      { drone:0.14, pad:0.08, noise:0.03,  sub:0.05, melody:0,   bells:0.25, heartbeat:0.3 },
    kelo:         { drone:0.36, pad:0.12, noise:0.08,  sub:0.16, melody:0,   bells:0,    heartbeat:0.6 },
    gardeno:      { drone:0,    pad:0.14, noise:0.008, sub:0,    melody:0.7, notes:'peaceful',bells:0.3,  heartbeat:0, warm:true },
    kapelo:       { drone:0.12, pad:0.16, noise:0.02,  sub:0.03, melody:0,   bells:0.2,  heartbeat:0 },

    /* ---- VII. ВРЕМЯ ГОДА И СУТОК (5) ---- */
    morning:      { drone:0.02, pad:0.1,  noise:0.005, sub:0,    melody:0.65,notes:'major', bells:0.2,  heartbeat:0, warm:true },
    evening:      { drone:0.06, pad:0.09, noise:0.012, sub:0.01, melody:0.6, notes:'sad',   bells:0.15, heartbeat:0 },
    night:        { drone:0.22, pad:0.06, noise:0.04,  sub:0.1,  melody:0,   bells:0,   heartbeat:0.3 },
    winter:       { drone:0.08, pad:0.12, noise:0.02,  sub:0.02, melody:0.5, notes:'grief', bells:0.3,  heartbeat:0 },
    spring:       { drone:0,    pad:0.11, noise:0.006, sub:0,    melody:0.75,notes:'hope',  bells:0.25, heartbeat:0, warm:true },

    /* ---- VIII. ОСОБОЕ (1) ---- */
    choir:        { drone:0.12, pad:0.16, noise:0.02,  sub:0.03, melody:0,   bells:0.2,  heartbeat:0 }
  };

  /* =========================================================
     МЕЛОДИЧЕСКИЕ НАБОРЫ (11)
     ========================================================= */
  const NOTES = {
    major:    [523.25, 587.33, 659.25, 783.99, 880,   783.99, 659.25, 587.33],
    minor:    [440,    523.25, 587.33, 659.25, 587.33,523.25, 466.16, 415.30],
    warm:     [349.23, 392,    440,    523.25, 587.33,523.25, 440,    392],
    musicbox: [659.25, 587.33, 523.25, 587.33, 659.25, 783.99, 659.25, 523.25],
    peaceful: [392,    440,    493.88, 523.25, 587.33, 523.25, 493.88, 440],
    sad:      [440,    415.30, 392,    349.23, 329.63, 349.23, 392,    415.30],
    mystery:  [261.63, 311.13, 293.66, 349.23, 329.63, 293.66, 261.63, 233.08],
    hope:     [392,    523.25, 659.25, 783.99, 880,    783.99, 659.25, 523.25],
    grief:    [220,    233.08, 246.94, 261.63, 246.94, 233.08, 220,    196],
    lullaby:  [523.25, 493.88, 466.16, 440,    415.30, 392,    415.30, 440],
    ritual:   [130.81, 155.56, 164.81, 174.61, 196,    174.61, 164.81, 155.56]
  };

  function init(){
    if (actx) { if (actx.state === 'suspended') actx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    actx = new AC();
    master = actx.createGain(); master.gain.value = 0.6; master.connect(actx.destination);

    // DRONE
    const dg = actx.createGain(); dg.gain.value = 0.0001;
    const dlp = actx.createBiquadFilter(); dlp.type='lowpass'; dlp.frequency.value=320; dlp.Q.value=3;
    dg.connect(dlp); dlp.connect(master);
    [55, 55.6, 82.5, 110.4, 82.2].forEach((f,i)=>{
      const o = actx.createOscillator();
      o.type = (i%2) ? 'sine' : 'triangle'; o.frequency.value = f;
      const g = actx.createGain(); g.gain.value = (i===3)?0.12:0.32;
      o.connect(g); g.connect(dg); o.start();
      layers.drone.oscs.push({o, base:f});
    });
    layers.drone.gain = dg;

    // PAD
    const pg = actx.createGain(); pg.gain.value = 0.0001;
    const plp = actx.createBiquadFilter(); plp.type='lowpass'; plp.frequency.value=900; plp.Q.value=1.5;
    pg.connect(plp); plp.connect(master);
    [220, 261.63, 329.63, 246.94, 293.66].forEach((f,i)=>{
      const o = actx.createOscillator(); o.type='sine'; o.frequency.value=f;
      const lfo = actx.createOscillator(); lfo.frequency.value = 0.05+i*0.014;
      const lg = actx.createGain(); lg.gain.value = 0.8;
      lfo.connect(lg); lg.connect(o.frequency); lfo.start();
      const g = actx.createGain(); g.gain.value = 0.14;
      o.connect(g); g.connect(pg); o.start();
      layers.pad.oscs.push(o);
    });
    layers.pad.gain = pg;

    // SUB
    const sg = actx.createGain(); sg.gain.value = 0.0001;
    const so = actx.createOscillator(); so.type='sine'; so.frequency.value=27;
    so.connect(sg); sg.connect(master); so.start();
    layers.sub.gain = sg; layers.sub.osc = so;

    // NOISE
    const len = actx.sampleRate*4;
    const buf = actx.createBuffer(1,len,actx.sampleRate);
    const data = buf.getChannelData(0);
    for(let i=0;i<len;i++) data[i] = Math.random()*2-1;
    const src = actx.createBufferSource(); src.buffer=buf; src.loop=true;
    const bp = actx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1100; bp.Q.value=0.7;
    const ng = actx.createGain(); ng.gain.value=0.0001;
    src.connect(bp); bp.connect(ng); ng.connect(master); src.start();
    layers.noise.gain = ng;

    // MELODY
    const mg = actx.createGain(); mg.gain.value=0.0001; mg.connect(master);
    layers.melody.gain = mg;
    // BELLS
    const bg = actx.createGain(); bg.gain.value=0.0001; bg.connect(master);
    layers.bells.gain = bg;
    // HEARTBEAT
    const hg = actx.createGain(); hg.gain.value=0.0001; hg.connect(master);
    layers.heartbeat.gain = hg;
  }

  function fade(g,t,time=1.4){
    if(!g||!actx) return;
    g.gain.cancelScheduledValues(actx.currentTime);
    g.gain.setTargetAtTime(Math.max(0.0001,t), actx.currentTime, time/3);
  }
  function stopMelody(){ if(layers.melody.timer) clearTimeout(layers.melody.timer); layers.melody.timer=null; }
  function startMelody(setName, warm){
    stopMelody();
    const notes = NOTES[setName] || NOTES.major;
    const delay = warm ? 1300 : 850;
    const step = () => {
      if(!actx) return;
      const t = actx.currentTime;
      const f = notes[layers.melody.step % notes.length];
      const o = actx.createOscillator(); o.type = warm ? 'sine' : 'triangle';
      o.frequency.value = f;
      const g = actx.createGain();
      const dur = warm ? 1.6 : 1.1;
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(warm?0.06:0.055, t+0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t+dur);
      o.connect(g); g.connect(layers.melody.gain);
      o.start(t); o.stop(t+dur+0.1);
      layers.melody.step++;
      layers.melody.timer = setTimeout(step, delay + Math.random()*200);
    };
    step();
  }
  function stopBells(){ if(layers.bells.timer) clearTimeout(layers.bells.timer); layers.bells.timer=null; }
  function startBells(warm){
    stopBells();
    const step = () => {
      if(!actx) return;
      const t = actx.currentTime;
      const freqs = warm ? [659.25,783.99,1046.5] : [523.25,659.25,783.99];
      freqs.forEach((f,i)=>{
        const o = actx.createOscillator(); o.type='sine'; o.frequency.value=f;
        const g = actx.createGain();
        g.gain.setValueAtTime(0,t);
        g.gain.linearRampToValueAtTime((warm?0.02:0.03)/(i+1), t+0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t+(warm?3.5:2.4));
        o.connect(g); g.connect(layers.bells.gain);
        o.start(t); o.stop(t+3.6);
      });
      layers.bells.timer = setTimeout(step, (warm?5500:3500)+Math.random()*2000);
    };
    step();
  }
  function stopHeart(){ if(layers.heartbeat.timer) clearTimeout(layers.heartbeat.timer); layers.heartbeat.timer=null; }
  function startHeart(){
    stopHeart();
    const step = () => {
      if(!actx) return;
      const t = actx.currentTime;
      [0,0.16].forEach((off,i)=>{
        const o = actx.createOscillator(); o.type='sine';
        o.frequency.setValueAtTime(70, t+off);
        o.frequency.exponentialRampToValueAtTime(30, t+off+0.14);
        const g = actx.createGain();
        g.gain.setValueAtTime(i===0?0.16:0.12, t+off);
        g.gain.exponentialRampToValueAtTime(0.0001, t+off+0.22);
        o.connect(g); g.connect(layers.heartbeat.gain);
        o.start(t+off); o.stop(t+off+0.25);
      });
      layers.heartbeat.timer = setTimeout(step, 900);
    };
    step();
  }
  function setTrack(name, fadeTime=1.4){
    if(!TRACKS[name]) name='silence';
    current = name;
    if(!actx) return;
    const t = TRACKS[name];
    fade(layers.drone.gain, t.drone, fadeTime);
    fade(layers.pad.gain, t.pad, fadeTime);
    fade(layers.noise.gain, t.noise, fadeTime);
    fade(layers.sub.gain, t.sub, fadeTime);
    fade(layers.melody.gain, t.melody?0.9:0, fadeTime);
    fade(layers.bells.gain, t.bells?0.8:0, fadeTime);
    fade(layers.heartbeat.gain, t.heartbeat?1:0, fadeTime);
    stopMelody(); stopBells(); stopHeart();
    if(t.melody) startMelody(t.notes||'major', !!t.warm);
    if(t.bells) startBells(!!t.warm);
    if(t.heartbeat) startHeart();
    return t;
  }
  function getTrack(){ return TRACKS[current]; }
  function getTrackName(){ return current; }
  function listTracks(){ return Object.keys(TRACKS); }

  /* =========================================================
     ГЛУБОКАЯ ТИШИНА
     Резко выключает весь звук на durationMs — приём хоррора
     ========================================================= */
  function deadSilence(durationMs = 3000){
    if(!actx || !master) return;
    const t = actx.currentTime;
    const oldGain = master.gain.value;
    master.gain.cancelScheduledValues(t);
    master.gain.setValueAtTime(oldGain, t);
    master.gain.linearRampToValueAtTime(0.0001, t + 0.06);
    setTimeout(() => {
      if(!actx || !master) return;
      const t2 = actx.currentTime;
      master.gain.cancelScheduledValues(t2);
      master.gain.setValueAtTime(0.0001, t2);
      master.gain.linearRampToValueAtTime(oldGain, t2 + 0.35);
    }, durationMs);
  }

  /* =========================================================
     УПРАВЛЕНИЕ СЕРДЦЕБИЕНИЕМ
     ========================================================= */
  let heartRate = 70;
  function setHeartRate(bpm){
    heartRate = Math.max(40, Math.min(180, bpm));
    if(!layers.heartbeat.timer) return;
    stopHeart();
    const step = () => {
      if(!actx) return;
      const t = actx.currentTime;
      [0,0.16].forEach((off,i)=>{
        const o = actx.createOscillator(); o.type='sine';
        o.frequency.setValueAtTime(70, t+off);
        o.frequency.exponentialRampToValueAtTime(30, t+off+0.14);
        const g = actx.createGain();
        g.gain.setValueAtTime(i===0?0.16:0.12, t+off);
        g.gain.exponentialRampToValueAtTime(0.0001, t+off+0.22);
        o.connect(g); g.connect(layers.heartbeat.gain);
        o.start(t+off); o.stop(t+off+0.25);
      });
      layers.heartbeat.timer = setTimeout(step, 60000 / heartRate);
    };
    step();
  }

  /* =========================================================
     РАЗОВЫЕ ЗВУКИ
     ========================================================= */
  function blip(){
    if(!actx) return;
    const t = actx.currentTime;
    const o = actx.createOscillator(), g = actx.createGain();
    o.type='square'; o.frequency.value = 620+Math.random()*480;
    g.gain.setValueAtTime(0.0001,t);
    g.gain.linearRampToValueAtTime(0.016, t+0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.045);
    o.connect(g); g.connect(master); o.start(t); o.stop(t+0.06);
  }
  function click(){
    if(!actx) return;
    const t = actx.currentTime;
    const o = actx.createOscillator(), g = actx.createGain();
    o.type='square';
    o.frequency.setValueAtTime(1400,t);
    o.frequency.exponentialRampToValueAtTime(500, t+0.07);
    g.gain.setValueAtTime(0.05,t);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.09);
    o.connect(g); g.connect(master); o.start(t); o.stop(t+0.1);
  }
  function chime(){
    if(!actx) return;
    const t = actx.currentTime;
    [440,554.37,659.25,880].forEach((f,i)=>{
      const o = actx.createOscillator(); o.type='sine'; o.frequency.value=f;
      const g = actx.createGain();
      g.gain.setValueAtTime(0,t+i*0.08);
      g.gain.linearRampToValueAtTime(0.05, t+i*0.08+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t+i*0.08+0.7);
      o.connect(g); g.connect(master); o.start(t+i*0.08); o.stop(t+i*0.08+0.8);
    });
  }
  function bell(){
    if(!actx) return;
    const t = actx.currentTime;
    [523.25,659.25,783.99].forEach((f,i)=>{
      const o = actx.createOscillator(); o.type='sine'; o.frequency.value=f;
      const g = actx.createGain();
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(0.04/(i+1), t+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t+2.2);
      o.connect(g); g.connect(master); o.start(t); o.stop(t+2.3);
    });
  }
  function whisper(){
    if(!actx) return;
    const t = actx.currentTime;
    const dur = 0.7+Math.random()*0.6;
    const len = Math.floor(actx.sampleRate*dur);
    const buf = actx.createBuffer(1,len,actx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<len;i++){ const env = Math.sin((i/len)*Math.PI); d[i]=(Math.random()*2-1)*env; }
    const s = actx.createBufferSource(); s.buffer=buf;
    const f = actx.createBiquadFilter(); f.type='bandpass';
    f.frequency.setValueAtTime(700+Math.random()*900, t); f.Q.value=4+Math.random()*4;
    const g = actx.createGain(); g.gain.value=0.03+Math.random()*0.02;
    s.connect(f); f.connect(g); g.connect(master); s.start(t);
  }
  function lowBoom(){
    if(!actx) return;
    const t = actx.currentTime;
    const o = actx.createOscillator(); o.type='sine';
    o.frequency.setValueAtTime(45,t);
    o.frequency.exponentialRampToValueAtTime(22,t+1.6);
    const g = actx.createGain();
    g.gain.setValueAtTime(0.42,t);
    g.gain.exponentialRampToValueAtTime(0.0001,t+1.8);
    o.connect(g); g.connect(master); o.start(t); o.stop(t+2);
  }
  function growl(){
    if(!actx) return;
    const t = actx.currentTime;
    const o = actx.createOscillator(); o.type='sawtooth';
    o.frequency.setValueAtTime(70,t);
    o.frequency.linearRampToValueAtTime(38,t+1.1);
    const lfo = actx.createOscillator(); lfo.frequency.value=14;
    const lg = actx.createGain(); lg.gain.value=12;
    lfo.connect(lg); lg.connect(o.frequency); lfo.start();
    const f = actx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=200; f.Q.value=6;
    const g = actx.createGain();
    g.gain.setValueAtTime(0.0001,t);
    g.gain.linearRampToValueAtTime(0.28, t+0.15);
    g.gain.exponentialRampToValueAtTime(0.0001, t+1.3);
    o.connect(f); f.connect(g); g.connect(master); o.start(t); o.stop(t+1.4);
  }
  function metal(){
    if(!actx) return;
    const t = actx.currentTime;
    [58,87,116,145].forEach((f,i)=>{
      const o = actx.createOscillator(); o.type='sawtooth'; o.frequency.value=f;
      const g = actx.createGain();
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(0.06/(i+1), t+0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t+1.4);
      o.connect(g); g.connect(master); o.start(t); o.stop(t+1.5);
    });
  }
  function scratch(){
    if(!actx) return;
    const t = actx.currentTime;
    const len = actx.sampleRate*0.6;
    const buf = actx.createBuffer(1,len,actx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=(Math.random()*2-1)*(1-i/len);
    const s = actx.createBufferSource(); s.buffer=buf;
    const f = actx.createBiquadFilter(); f.type='bandpass';
    f.frequency.setValueAtTime(220,t);
    f.frequency.exponentialRampToValueAtTime(1800,t+0.6);
    f.Q.value=5;
    const g = actx.createGain();
    g.gain.setValueAtTime(0.26,t);
    g.gain.exponentialRampToValueAtTime(0.0001, t+0.7);
    s.connect(f); f.connect(g); g.connect(master); s.start(t);
  }
  const SCARES = [lowBoom, growl, metal, scratch];
  function randomScare(){
    SCARES[Math.floor(Math.random()*SCARES.length)]();
    setTimeout(()=>SCARES[Math.floor(Math.random()*SCARES.length)](), 90+Math.random()*120);
    setTimeout(()=>SCARES[Math.floor(Math.random()*SCARES.length)](), 240+Math.random()*180);
  }

  return {
    init, setTrack, getTrack, getTrackName, listTracks,
    blip, click, chime, bell, whisper,
    lowBoom, growl, metal, scratch, randomScare,
    deadSilence, setHeartRate
  };
})();