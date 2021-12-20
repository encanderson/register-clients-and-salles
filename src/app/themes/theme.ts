import { DarkTheme, DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      superLight: ThemeFont;
    }
    interface ThemeColors {
      customColor: string;
      secondary: string;
    }
    interface ThemeAnimation {
      customProperty: number;
    }
    interface Theme {
      userDefinedThemeProperty: boolean;
    }
  }
}

export const CustomDarkTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  userDefinedThemeProperty: true,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    customColor: "#BADA55",
    background: "#111936",
    surface: "#212946",
    primary: "#1565c0",
    placeholder: "#8492c4",
    text: "#bdc8f0",
    backdrop: "#bdc8f0",
    secondary: "#b388ff"

  },
  fonts: {
    ...DefaultTheme.fonts,
    superLight: { ...DefaultTheme.fonts["light"] },
  },
  animation: {
    ...DefaultTheme.animation,
    customProperty: 1,
  },
};

/*
primary - primary color for your app, usually your brand color.
accent - secondary color for your app which complements the primary color.
background - background color for pages, such as lists.
paper - background color for elements containing content, such as cards.
text - text color for content.
disabled - color for disabled elements.
placeholder - color for placeholder text, such as input placeholder.
*/