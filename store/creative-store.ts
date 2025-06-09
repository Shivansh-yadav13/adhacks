import { create } from "zustand";
import axios from "axios";

interface Creative {
  id: string;
  prompt?: string | null;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CreativeState {
  creatives: Creative[];
  setCreatives: (creatives: Creative[]) => void;
  addCreative: (creative: Creative) => void;
  createCreative: (
    creative: Omit<Creative, "createdAt" | "updatedAt">
  ) => Promise<void>;
  fetchCreatives: (userId: string) => Promise<void>;
  clearCreatives: () => void;
}

export const useCreativeStore = create<CreativeState>((set, get) => ({
  creatives: [],

  setCreatives: (creatives) => set({ creatives }),

  addCreative: (creative) =>
    set((state) => ({
      creatives: [...state.creatives, creative],
    })),

  createCreative: async (creative) => {
    try {
      const createdCreative = await axios.post(
        "/api/creative/create",
        creative
      );
      set((state) => ({
        creatives: [...state.creatives, createdCreative.data],
      }));
    } catch (error) {
      console.error("Failed to create creative", error);
    }
  },

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
