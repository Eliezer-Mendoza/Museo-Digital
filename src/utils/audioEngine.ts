/**
 * Motor de Audio Ambiental Precolombino con Web Audio API.
 * 100% autónomo, sin dependencias externas ni riesgo de enlaces rotos o bloqueo CORS.
 * Genera texturas sonoras de selva tropical (brisa en las ceibas, cantos del guardabarranco)
 * y melodías de ocarina de barro precolombina con tambor ceremonial huehuetl.
 */

export type SoundscapePreset = 'selva' | 'ocarina' | 'ritual';

export interface AudioEngineState {
  isPlaying: boolean;
  volume: number;
  preset: SoundscapePreset;
}

class PrecolumbianAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private volume: number = 0.4;
  private preset: SoundscapePreset = 'selva';

  // Nodes for wind & nature
  private windGain: GainNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private windSource: AudioBufferSourceNode | null = null;
  private windLfo: OscillatorNode | null = null;

  // Intervals & loops
  private birdTimer: number | null = null;
  private melodyTimer: number | null = null;
  private drumTimer: number | null = null;

  // Pentatonic ancient flute notes (Hz)
  private fluteScale = [293.66, 329.63, 392.0, 440.0, 523.25, 587.33]; // D4, E4, G4, A4, C5, D5

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Generate pink/brown noise for natural wind & jungle foliage
  private createNoiseBuffer(): AudioBuffer | null {
    if (!this.ctx) return null;
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Brown/Pink noise filter
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }
    return buffer;
  }

  // Start soothing ambient jungle wind
  private startWind() {
    if (!this.ctx || !this.masterGain) return;

    try {
      const noiseBuffer = this.createNoiseBuffer();
      if (!noiseBuffer) return;

      this.windSource = this.ctx.createBufferSource();
      this.windSource.buffer = noiseBuffer;
      this.windSource.loop = true;

      this.windFilter = this.ctx.createBiquadFilter();
      this.windFilter.type = 'lowpass';
      this.windFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
      this.windFilter.Q.setValueAtTime(3.0, this.ctx.currentTime);

      // Subtle LFO modulating the wind frequency like breeze through trees
      this.windLfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.windLfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
      this.windLfo.connect(lfoGain);
      lfoGain.connect(this.windFilter.frequency);
      this.windLfo.start();

      this.windGain = this.ctx.createGain();
      const windLevel = this.preset === 'ritual' ? 0.08 : 0.18;
      this.windGain.gain.setValueAtTime(windLevel, this.ctx.currentTime);

      this.windSource.connect(this.windFilter);
      this.windFilter.connect(this.windGain);
      this.windGain.connect(this.masterGain);

      this.windSource.start();
    } catch (e) {
      console.warn('Error al iniciar viento ambiental:', e);
    }
  }

  // Generate subtle tropical bird chirps (Guardabarranco / rainforest birds)
  private scheduleBirds() {
    if (!this.isPlaying) return;

    const interval = Math.random() * 3500 + 2500; // Chirp every 2.5 - 6s
    this.birdTimer = window.setTimeout(() => {
      try {
        if (this.isPlaying && this.ctx && this.masterGain && this.preset !== 'ritual') {
          this.playBirdSong();
        }
        this.scheduleBirds();
      } catch (err) {
        console.warn('Error en programador de aves:', err);
      }
    }, interval);
  }

  private playBirdSong() {
    if (!this.ctx || !this.masterGain) return;

    const startTime = this.ctx.currentTime;
    const notesCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 syllables
    let timeOffset = 0;

    const baseFreq = 2200 + Math.random() * 800; // High melodic bird pitch

    for (let i = 0; i < notesCount; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const noteDuration = 0.08 + Math.random() * 0.06;
      const noteStart = startTime + timeOffset;

      osc.type = 'sine';
      // Pitch inflection: rise then quick drop
      osc.frequency.setValueAtTime(baseFreq + i * 200, noteStart);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + i * 200 + 400, noteStart + noteDuration * 0.4);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + i * 200 - 150, noteStart + noteDuration);

      // Amplitude envelope
      gain.gain.setValueAtTime(0.0001, noteStart);
      gain.gain.linearRampToValueAtTime(0.045, noteStart + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + noteDuration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(noteStart);
      osc.stop(noteStart + noteDuration);

      timeOffset += noteDuration + 0.04;
    }
  }

  // Synthetic Mesoamerican Clay Ocarina Note
  private playFluteNote(freq: number, duration: number = 2.4) {
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;

      // Primary breath oscillator
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle warm harmonic
      const harmonic = this.ctx.createOscillator();
      harmonic.type = 'triangle';
      harmonic.frequency.setValueAtTime(freq * 2, now);

      // Vibrato LFO for expressive authentic flutes
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(4.8, now);
      vibratoGain.gain.setValueAtTime(2.5, now);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);
      vibrato.start(now);
      vibrato.stop(now + duration);

      // Articulation Gain
      const noteGain = this.ctx.createGain();
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.linearRampToValueAtTime(0.07, now + 0.35); // Soft gentle breath attack
      noteGain.gain.setValueAtTime(0.06, now + duration * 0.7);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      const harmonicGain = this.ctx.createGain();
      harmonicGain.gain.setValueAtTime(0.008, now);

      harmonic.connect(harmonicGain);
      harmonicGain.connect(noteGain);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      harmonic.start(now);
      osc.stop(now + duration);
      harmonic.stop(now + duration);
    } catch (err) {
      console.warn('Error al reproducir ocarina:', err);
    }
  }

  // Schedule slow mystical precolumbian melody
  private scheduleMelody() {
    if (!this.isPlaying) return;

    const interval = this.preset === 'ocarina' 
      ? Math.random() * 2500 + 2000 
      : Math.random() * 5000 + 4000;

    this.melodyTimer = window.setTimeout(() => {
      try {
        if (this.isPlaying && this.ctx && (this.preset === 'ocarina' || this.preset === 'selva')) {
          const randomNote = this.fluteScale[Math.floor(Math.random() * this.fluteScale.length)];
          const duration = this.preset === 'ocarina' ? 3.0 : 2.2;
          this.playFluteNote(randomNote, duration);
        }
        this.scheduleMelody();
      } catch (e) {
        console.warn('Error en melodía:', e);
      }
    }, interval);
  }

  // Huehuetl (Sacred wooden drum pulse)
  private playDrumPulse() {
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Low resonant frequency drop (typical of hollowed tree trunk drum)
      osc.frequency.setValueAtTime(78, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.25);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.48);
    } catch (e) {
      console.warn('Error en golpe de tambor:', e);
    }
  }

  private scheduleDrums() {
    if (!this.isPlaying) return;

    // Rhythmic ceremonial pulse in 'ritual' preset
    const interval = this.preset === 'ritual' ? 1800 : 4200;

    this.drumTimer = window.setTimeout(() => {
      try {
        if (this.isPlaying && (this.preset === 'ritual' || this.preset === 'ocarina')) {
          this.playDrumPulse();
          // Occasional double beat
          if (Math.random() > 0.5) {
            setTimeout(() => {
              if (this.isPlaying) this.playDrumPulse();
            }, 240);
          }
        }
        this.scheduleDrums();
      } catch (e) {
        console.warn('Error en programador de tambor:', e);
      }
    }, interval);
  }

  public play() {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isPlaying = true;
      this.startWind();
      this.scheduleBirds();
      this.scheduleMelody();
      this.scheduleDrums();
    } catch (e) {
      console.error('Error al iniciar reproductor ambiental:', e);
    }
  }

  public pause() {
    try {
      this.isPlaying = false;

      if (this.birdTimer) clearTimeout(this.birdTimer);
      if (this.melodyTimer) clearTimeout(this.melodyTimer);
      if (this.drumTimer) clearTimeout(this.drumTimer);

      if (this.windSource) {
        this.windSource.stop();
        this.windSource.disconnect();
        this.windSource = null;
      }

      if (this.windLfo) {
        this.windLfo.stop();
        this.windLfo.disconnect();
        this.windLfo = null;
      }
    } catch (e) {
      console.error('Error al pausar reproductor ambiental:', e);
    }
  }

  public setVolume(vol: number) {
    try {
      this.volume = Math.max(0, Math.min(1, vol));
      if (this.masterGain && this.ctx) {
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      }
    } catch (e) {
      console.warn('Error al ajustar volumen:', e);
    }
  }

  public setPreset(newPreset: SoundscapePreset) {
    try {
      this.preset = newPreset;
      if (this.isPlaying) {
        // Adjust wind intensity for the selected atmosphere
        if (this.windGain && this.ctx) {
          const windLevel = newPreset === 'ritual' ? 0.08 : 0.18;
          this.windGain.gain.setValueAtTime(windLevel, this.ctx.currentTime);
        }
      }
    } catch (e) {
      console.warn('Error al cambiar atmósfera sonora:', e);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }

  public getPreset(): SoundscapePreset {
    return this.preset;
  }
}

// Singleton instance
export const audioEngine = new PrecolumbianAudioEngine();
