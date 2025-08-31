import { create } from "zustand";

interface AuthState {
  userId: string | null;
  login: (id: string, remember?: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  login: (id, remember = false) => {
    set({ userId: id });
    if (remember) {
      localStorage.setItem("userId", id);
    }
  },
  logout: () => {
    set({ userId: null });
    localStorage.removeItem("userId");
  },
}));
