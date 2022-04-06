import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackListScreen from "./TrackListScreen";
import TrackCreateScreen from "./TrackCreateScreen";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Account' component={AccountScreen}/>
            <Tab.Screen name='Track List' component={TrackListScreen}/>
            <Tab.Screen name='Track Create' component={TrackCreateScreen}/>
        </Tab.Navigator>
    )
}

export default HomeScreen;