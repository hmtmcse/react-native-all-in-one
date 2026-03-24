import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../page/home';

export type DrawerItem = {
    name: string;
    component: React.ComponentType<any>;
};

export const drawerItems: DrawerItem[] = [
    {name: 'Home', component: Home},
]

export type DrawerParamList = {
    [key: string]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                {drawerItems.map((item: DrawerItem) => (
                    <Drawer.Screen
                        key={item.name}
                        name={item.name}
                        component={item.component}
                    />
                ))}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}