import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
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
        <Drawer.Navigator initialRouteName="Home">
            {drawerItems.map((item: DrawerItem) => (
                <Drawer.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                />
            ))}
        </Drawer.Navigator>
    );
}