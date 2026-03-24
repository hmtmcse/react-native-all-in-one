import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import DrawerNavigator from "./screen/other/drawer-navigator";

export default function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <StatusBar style="auto"/>
            <DrawerNavigator/>
        </GestureHandlerRootView>
    );
}
