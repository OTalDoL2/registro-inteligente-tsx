import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Set Esquema de Cores 
  const colorScheme = useColorScheme();

  // Carrega as fontes utilizadas 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Tela de espera, até que as fontes carreguem
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="Home" />
          <Stack.Screen name="Edit" />
          <Stack.Screen name="Register" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
}
