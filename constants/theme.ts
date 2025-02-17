import { useColorScheme } from 'react-native';
import { create } from 'zustand';

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setTheme: (isDark) => set({ isDark }),
}));

export const lightColors = {
  primary: '#2D6A4F',
  secondary: '#74C69D',
  background: '#FFFFFF',
  card: '#F7F7F7',
  text: '#1B1B1B',
  border: '#E5E5E5',
  notification: '#FF4D4D',
  success: '#40916C',
  error: '#DC2626',
};

export const darkColors = {
  primary: '#40916C',
  secondary: '#74C69D',
  background: '#1B1B1B',
  card: '#2D2D2D',
  text: '#FFFFFF',
  border: '#404040',
  notification: '#FF4D4D',
  success: '#40916C',
  error: '#DC2626',
};

export function useTheme() {
  const systemColorScheme = useColorScheme();
  const { isDark } = useThemeStore();
  const colors = isDark ? darkColors : lightColors;

  return { colors, isDark };
}