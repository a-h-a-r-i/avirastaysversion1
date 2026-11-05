// Web Audio API based ambient sound generator for the retreat

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isRunning = false;
  private nodes: any[] = [];
  private gainNode: GainNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public play() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isRunning) return;
    this.isRunning = true;

    try {
      // Create master gain
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);

      // Pink noise / wind generator
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter for gentle breeze
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(this.gainNode);
      whiteNoise.start();

      this.nodes.push(whiteNoise);

      // Add gentle harmonic chime (nature frequency)
      const osc1 = this.ctx.createOscillator();
      const oscGain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, this.ctx.currentTime); // 432Hz calming tuning
      oscGain1.gain.setValueAtTime(0.015, this.ctx.currentTime);

      osc1.connect(oscGain1);
      oscGain1.connect(this.gainNode);
      osc1.start();
      this.nodes.push(osc1);

      const osc2 = this.ctx.createOscillator();
      const oscGain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(216, this.ctx.currentTime);
      oscGain2.gain.setValueAtTime(0.02, this.ctx.currentTime);

      osc2.connect(oscGain2);
      oscGain2.connect(this.gainNode);
      osc2.start();
      this.nodes.push(osc2);
    } catch (e) {
      console.warn('Audio start note:', e);
    }
  }

  public stop() {
    this.nodes.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch (e) {}
    });
    this.nodes = [];
    this.isRunning = false;
  }

  public toggle() {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const ambientAudio = new AmbientAudioEngine();
