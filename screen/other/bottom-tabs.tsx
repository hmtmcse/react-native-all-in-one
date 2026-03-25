import {
    createBottomTabNavigator,
    BottomTabNavigationOptions,
    BottomTabBarButtonProps
} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {RouteProp} from '@react-navigation/native';
import Home from "../page/home";
import React from "react";
import ExpoComponent from "../page/expo-component";
import {CustomTabBarButton} from "./custom-tabbar-button";
import RnrComponent from "@/screen/rnr-component/rnr-component";

export type TabItem = {
    name: string;
    component: React.ComponentType<any>;
    icon: {
        focused: keyof typeof Ionicons.glyphMap;
        unfocused: keyof typeof Ionicons.glyphMap;
    };
    options?: BottomTabNavigationOptions;
};

export const tabItems: TabItem[] = [
    {
        name: 'Home',
        component: Home,
        icon: {focused: 'home', unfocused: 'home-outline'},
    },
    {
        name: 'RNR UI',
        component: RnrComponent,
        icon: {focused: 'add', unfocused: 'add'},
        options: {
            tabBarButton: (props: BottomTabBarButtonProps) => <CustomTabBarButton {...props} />,
        },
    },
    {
        name: 'Expo',
        component: ExpoComponent,
        icon: {focused: 'logo-npm', unfocused: 'logo-npm'},
    }
];

export type TabParamList = {
    [key: string]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({
                                route,
                            }: {
                route: RouteProp<TabParamList, string>;
            }): BottomTabNavigationOptions => {
                const current = tabItems.find(item => item.name === route.name);

                return {
                    tabBarIcon: ({
                                     color,
                                     size,
                                     focused,
                                 }: {
                        color: string;
                        size: number;
                        focused: boolean;
                    }) => {
                        const iconName = focused
                            ? current?.icon.focused
                            : current?.icon.unfocused;

                        return (
                            <Ionicons
                                name={iconName ?? 'ellipse'}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: '#007AFF',
                    tabBarInactiveTintColor: 'gray',
                    ...current?.options,
                };
            }}
        >
            {tabItems.map((item: TabItem) => (
                <Tab.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={item.options}
                />
            ))}
        </Tab.Navigator>
    );
}