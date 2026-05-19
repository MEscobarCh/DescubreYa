export interface CityTheme {
  name: string;
  primary: string;
  accent: string;
  accentAlt: string;
  darkVariant: string;
  lightVariant: string;
  bgGradientStart: string;
  bgGradientEnd: string;
  cardOverlay: string;
}

export const CITY_THEMES: Record<string, CityTheme> = {
  "Tingo María": {
    name: "Tingo María",
    primary: "20 35% 12%", // Warm dark brown
    accent: "139 72% 45%", // Rich jungle green
    accentAlt: "38 92% 52%", // Golden sun
    darkVariant: "139 72% 32%",
    lightVariant: "139 72% 60%",
    bgGradientStart: "139 65% 95%", // Soft sage
    bgGradientEnd: "38 100% 95%", // Warm cream
    cardOverlay: "rgba(45, 90, 39, 0.08)", // Jungle green overlay
  },
  "Huánuco": {
    name: "Huánuco",
    primary: "18 50% 15%", // Warm earth brown
    accent: "25 95% 53%", // Warm terracotta orange
    accentAlt: "9 85% 55%", // Deeper warm red
    darkVariant: "25 95% 40%",
    lightVariant: "25 95% 68%",
    bgGradientStart: "25 95% 95%", // Soft peach
    bgGradientEnd: "38 100% 93%", // Warm vanilla
    cardOverlay: "rgba(204, 102, 51, 0.08)", // Orange overlay
  },
  "La Unión": {
    name: "La Unión",
    primary: "210 25% 18%", // Deep slate blue
    accent: "259 84% 52%", // Vibrant purple
    accentAlt: "189 89% 51%", // Cyan
    darkVariant: "259 84% 38%",
    lightVariant: "259 84% 65%",
    bgGradientStart: "259 50% 95%", // Soft purple
    bgGradientEnd: "189 60% 94%", // Soft cyan
    cardOverlay: "rgba(123, 97, 255, 0.08)", // Purple overlay
  },
  "Tarapoto": {
    name: "Tarapoto",
    primary: "20 35% 14%", // Warm tropical dark
    accent: "160 80% 40%", // Rainforest green
    accentAlt: "189 85% 50%", // Waterfall blue
    darkVariant: "160 80% 28%",
    lightVariant: "160 80% 58%",
    bgGradientStart: "160 70% 94%", // Tropical mist
    bgGradientEnd: "189 70% 93%", // River water
    cardOverlay: "rgba(32, 201, 151, 0.08)", // Emerald overlay
  },
  "Cusco": {
    name: "Cusco",
    primary: "18 45% 16%", // Dark terracotta
    accent: "38 95% 55%", // Golden Inca
    accentAlt: "18 85% 50%", // Warm terracotta
    darkVariant: "38 95% 42%",
    lightVariant: "38 95% 70%",
    bgGradientStart: "38 100% 95%", // Soft gold
    bgGradientEnd: "18 80% 93%", // Warm terracotta
    cardOverlay: "rgba(204, 136, 34, 0.08)", // Gold overlay
  },
  "Lima": {
    name: "Lima",
    primary: "210 30% 15%", // Modern dark blue
    accent: "189 85% 48%", // Coastal blue
    accentAlt: "38 98% 55%", // Sunset orange
    darkVariant: "189 85% 35%",
    lightVariant: "189 85% 62%",
    bgGradientStart: "189 70% 96%", // Ocean mist
    bgGradientEnd: "38 100% 94%", // Sunset cream
    cardOverlay: "rgba(20, 150, 200, 0.08)", // Blue overlay
  },
};

export function getTheme(cityName: string): CityTheme {
  return CITY_THEMES[cityName] || CITY_THEMES["Tingo María"];
}

export function applyThemeToDOM(cityName: string) {
  const theme = getTheme(cityName);
  const root = document.documentElement;

  // Apply theme CSS variables
  root.style.setProperty("--theme-primary", theme.primary);
  root.style.setProperty("--theme-accent", theme.accent);
  root.style.setProperty("--theme-accent-alt", theme.accentAlt);
  root.style.setProperty("--theme-dark-variant", theme.darkVariant);
  root.style.setProperty("--theme-light-variant", theme.lightVariant);
  root.style.setProperty("--theme-bg-gradient-start", theme.bgGradientStart);
  root.style.setProperty("--theme-bg-gradient-end", theme.bgGradientEnd);
  root.style.setProperty("--theme-card-overlay", theme.cardOverlay);
}
