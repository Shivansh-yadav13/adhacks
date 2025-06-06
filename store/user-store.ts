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
      const createdUser = await axios.post("/api/create-user", user);
      set({ user: createdUser.data });
    } catch (error) {
      console.error("Failed to create user", error);
    }
  },

  // addCredits: async (id: string, amount: number) => {
  //   try {
  //     const updatedUser = await prisma.user.update({
  //       where: { id },
  //       data: {
  //         credits: {
  //           increment: amount,
  //         },
  //       },
  //     });
  //     set({ user: updatedUser });
  //   } catch (error) {
  //     console.error("Failed to add credits", error);
  //   }
  // },

  clearUser: () => set({ user: null }),
}));

// updateUser: async (id: string, data: Partial<User>) => {
//   try {
//     const updatedUser = await prisma.user.update({
//       where: { id },
//       data,
//     });
//     set({ user: updatedUser });
//   } catch (error) {
//     console.error("Failed to update user", error);
//   }
// },
