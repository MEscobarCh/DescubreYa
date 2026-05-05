export interface CityTheme {
  name: string;
  primary: string; // HSL format: "h s% l%"
  accent: string;
  accentAlt: string;
  darkVariant: string;
  lightVariant: string;
  forestGreen?: string;
  sunYellow?: string;
}

export const CITY_THEMES: Record<string, CityTheme> = {
  "Tingo María": {
    name: "Tingo María",
    primary: "210 10% 20%", // Dark navy
    accent: "139 68% 43%", // Forest green
    accentAlt: "38 92% 50%", // Sun yellow
    darkVariant: "139 68% 30%", // Darker green
    lightVariant: "139 68% 60%", // Lighter green
    forestGreen: "139 68% 43%",
    sunYellow: "38 92% 50%",
  },
  "Huánuco": {
    name: "Huánuco",
    primary: "210 10% 20%",
    accent: "25 95% 53%", // Warm orange
    accentAlt: "9 78% 50%", // Terracotta red
    darkVariant: "25 95% 40%",
    lightVariant: "25 95% 65%",
  },
  "La Unión": {
    name: "La Unión",
    primary: "210 10% 20%",
    accent: "259 62% 50%", // Purple
    accentAlt: "189 89% 51%", // Cyan
    darkVariant: "259 62% 35%",
    lightVariant: "259 62% 65%",
  },
  "Tarapoto": {
    name: "Tarapoto",
    primary: "210 10% 20%",
    accent: "160 84% 39%", // Tropical emerald green
    accentAlt: "25 95% 53%", // Warm tropical orange
    darkVariant: "160 84% 25%", // Darker emerald
    lightVariant: "160 84% 55%", // Lighter emerald
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
}
