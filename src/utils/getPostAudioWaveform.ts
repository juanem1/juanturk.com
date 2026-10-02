import audioWaveforms from "../data/audio-waveforms.json";

// Keyed by post slug. Each value is the normalized RMS amplitude (0 to 1) of one bar,
// computed from public/audio/<slug>.mp3.
const postAudioWaveforms: Readonly<Record<string, readonly number[]>> = audioWaveforms;

/**
 * Returns the precomputed waveform of a post audio from src/data/audio-waveforms.json.
 * Throws when the post has no entry, because every post audio must ship with its waveform.
 */
export function getPostAudioWaveform(slug: string): readonly number[] {
  if (!Object.hasOwn(postAudioWaveforms, slug)) {
    throw new Error(`Post audio waveform is missing in src/data/audio-waveforms.json (slug=${slug})`);
  }

  return postAudioWaveforms[slug];
}
