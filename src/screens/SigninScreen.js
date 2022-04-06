import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
    return (
        <View>
            <Text>Signin Screen</Text>
            <Button title='spausk' onPress={() => navigation.navigate('Signup')} />
        </View>)
}

const styles = StyleSheet.create({});

export default SigninScreen;