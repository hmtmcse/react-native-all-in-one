import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../page/splash-screen';
import BottomTabs from './bottom-tabs';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  );
}