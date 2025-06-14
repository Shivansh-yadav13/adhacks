import { create } from "zustand";
import axios from "axios";

interface User {
  id: string;
  email: string;
  name?: string | null;
  profileUrl?: string | null;
  credits?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  createUser: (user: User) => Promise<void>;
  fetchUser: (id: string) => Promise<void>;
  fetchCredits: (id: string) => Promise<void>;
  reduceCredits: (id: string, amount: number) => Promise<void>;
  // updateUser: (id: string, data: Partial<User>) => Promise<void>;
  // addCredits: (id: string, amount: number) => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  user: null,

  setUser: (user) => set({ user }),

  fetchUser: async (id: string) => {
    try {
      const user = await axios.get(`/api/user?id=${id}`);
      set({ user: user.data });
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  },

  createUser: async (user: User) => {
    try {
      const createdUser = await axios.post("/api/user/create", user);
      set({ user: createdUser.data });
    } catch (error) {
      console.error("Failed to create user", error);
    }
  },

  reduceCredits: async (id: string, amount: number) => {
    try {
      const updatedUser = await axios.post("/api/user/credits/reduce", {
        amount,
        userId: id,
      });
      set({ user: updatedUser.data.user });
    } catch (error) {
      console.error("Failed to reduce credits", error);
    }
  },

  fetchCredits: async (id: string) => {
    try {
      const credits = await axios.get(`/api/user/credits?id=${id}`);
      console.log("Fetched Credits:", credits.data);
      const currentUser = get().user;
      if (!currentUser) return;
      set({ user: { ...currentUser, credits: credits.data.credits } });
    } catch (error) {
      console.error("Failed to fetch credits", error);
    }
  },

  clearUser: () => set({ user: null }),
}));
