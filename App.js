import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";

const isLoggedIn = true;
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {!isLoggedIn ? (
              <Stack.Group>
                <Stack.Screen options={{headerShown: false}} name='Signin' component={SigninScreen}/>
                <Stack.Screen options={{headerShown: false}} name='Signup' component={SignupScreen}/>
              </Stack.Group>
          ) : (
              <Stack.Group>
                <Stack.Screen options={{headerShown: false}} name='Home' component={HomeScreen}/>
                <Stack.Screen name='Track Detail' component={TrackDetailScreen}/>
              </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
