import React, {useContext} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrackListScreen from "./TrackListScreen";
import TrackCreateScreen from "./TrackCreateScreen";
import AccountScreen from "./AccountScreen";
import { Ionicons } from '@expo/vector-icons';
import {Context as AuthContext} from "../context/AuthContext";

const Tab = createBottomTabNavigator();

function TrackListTitle() {
    return (<Text style={styles.header}><Ionicons name='ios-list' size={24} color='black' /> Tracks List</Text>)
}

const HomeScreen = () => {
    const {state, signout} = useContext(AuthContext);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Account') {
                        iconName = focused
                            ? 'person-circle-outline'
                            : 'person-circle-outline';
                    } else if (route.name === 'Track List') {
                        iconName = focused ? 'ios-list' : 'ios-list';
                    } else if (route.name === 'Track Create') {
                        iconName = focused ? 'analytics-outline' : 'analytics-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    headerRight: () => (
                        <Button
                            onPress={() => signout()}
                            title="Logout"
                            color="#333"
                        />
                    )
                }}
            />
            <Tab.Screen
                options={{headerTitle: (props) => <TrackListTitle {...props}/>}}
                name='Track List'
                component={TrackListScreen}
            />
            <Tab.Screen
                options={{title: 'Create Track'}}
                name='Track Create'
                component={TrackCreateScreen}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        alignContent: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;