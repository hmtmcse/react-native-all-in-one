import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import RootNavigator from "./screen/other/root-navigator";

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style="dark"/>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
