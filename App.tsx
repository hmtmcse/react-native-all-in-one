import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer, ThemeProvider} from "@react-navigation/native";
import RootNavigator from "./screen/other/root-navigator";
import '@/global.css';
import {NAV_THEME} from "@/lib/theme";
import {useColorScheme} from "nativewind";
import { PortalHost } from "@rn-primitives/portal";

export default function App() {
    const { colorScheme } = useColorScheme();
    const theme = NAV_THEME[colorScheme ?? 'light'];
    return (
        <ThemeProvider value={theme}>
            <GestureHandlerRootView style={{flex: 1}}>
                <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
                <NavigationContainer theme={theme}>
                    <RootNavigator/>
                </NavigationContainer>
                <PortalHost />
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
