import { create } from "zustand";
import axios from "axios";

// interface Creative {
//   id: string;
//   prompt?: string | null;
//   userId: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

interface CreativeState {
  creatives: string[];
  setCreatives: (creatives: string[]) => void;
  fetchCreatives: (userId: string) => Promise<void>;
  clearCreatives: () => void;
}

export const useCreativeStore = create<CreativeState>((set, get) => ({
  creatives: [],

  setCreatives: (creatives) => set({ creatives }),

  fetchCreatives: async (userId: string) => {
    try {
      const creatives = await axios.get(`/api/creative?userId=${userId}`);
      set({ creatives: creatives.data });
    } catch (error) {
      console.error("Failed to fetch creatives", error);
    }
  },

  clearCreatives: () => set({ creatives: [] }),
}));
