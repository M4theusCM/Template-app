import React from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

import Screen from '../src/home';

import { ThemeProvider } from 'styled-components/native';
import themes from '../src/themes';

export default function Index() {
  const deviceTheme: ColorSchemeName = useColorScheme(); // Valor pode ser 'light', 'dark' ou null

  const themeUser = deviceTheme && themes[deviceTheme] ? themes[deviceTheme] : themes.dark;

  return (
    <ThemeProvider theme={themeUser}>
      <Screen />
    </ThemeProvider>
  );
}
