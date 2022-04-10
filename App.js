import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import {Context as AuthContext} from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();

const App = () => {
    const {state, signup} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);

    if(isLoading) {
        return <LoadingScreen setIsLoading={setIsLoading} />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {!state.token ? (
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

export default () => {
  return (
      <TrackProvider>
      <LocationProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
      </LocationProvider>
      </TrackProvider>
  )
}