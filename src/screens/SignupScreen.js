import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <View>
            <Text>Signup Screen</Text>
            <Button title='spausk' onPress={() => navigation.navigate('Signin')} />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SignupScreen;