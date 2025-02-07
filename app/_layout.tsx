import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './index';
import Edit from './edit';
import Register from './register';
import { RootStackParamList } from './RootStackParamList';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator<RootStackParamList>();


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
    <Provider store={store}>
      <ThemeProvider value={DefaultTheme}>
        <PersistGate persistor={persistor}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </PersistGate>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}