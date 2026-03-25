import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

export default function SplashScreen({ navigation }: any) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main'); // go to app
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>All in One Splash</Text>
    </View>
  );
}