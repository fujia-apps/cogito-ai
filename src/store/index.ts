import { create } from 'zustand';

export type AppState = {
  theme: string;
};

export type AppAction = {
  configTheme: (
    themePrimary: AppState['theme']
  ) => void;
};

export const useStore = create<AppState & AppAction>((set) => ({
  theme: '#1677ff',
  configTheme: (themePrimary) =>
    set(() => ({
      theme: themePrimary,
    })),
}));
