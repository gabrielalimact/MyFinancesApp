import {
  SplashScreen,
  Stack,
} from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    regular: require('../assets/fonts/Poppins-Regular.ttf'),
    medium: require('../assets/fonts/Poppins-Medium.ttf'),
    bold: require('../assets/fonts/Poppins-Bold.ttf'),
    light: require('../assets/fonts/Poppins-Light.ttf'),
    semibold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    extrabold: require('../assets/fonts/Poppins-ExtraBold.ttf'),

  });
  
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  );
}
