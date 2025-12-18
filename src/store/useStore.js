import { create } from 'zustand'

export const useStore = create((set) => ({ // to store audio data and predictions
  
  audioData: new Uint8Array(0), // empty data
  
  // prediction values (0, 1)
  beatIntensity: 0,
  confidence: 0,
  genre: 'Initializing...',

  // actions to update the state
  setAudioData: (data) => set({ audioData: data }), // update audio data
  setPredictions: (beat, conf, genre) =>  // new predictions
    set({ beatIntensity: beat, confidence: conf, genre: genre }), 
}))