import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import running from "../../assets/running.jpg";
import {Context as AuthContext} from "../context/AuthContext";
import { useFocusEffect } from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    useFocusEffect(
        React.useCallback(() => {
            clearErrorMessage();

        }, [])
    );

    return (
        <View style={styles.image} >
            <ImageBackground resizeMode='cover' source={running} style={styles.image} >
                <View style={styles.gradient} >
                    <Text style={styles.text}>Create Account</Text>
                    <TextInput
                        placeholderTextColor='#fff'
                        placeholder='Your email'
                        style={styles.input}
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholderTextColor='#fff'
                        secureTextEntry={true}
                        placeholder='Password'
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    {state.errorMessage ? <Text style={styles.errorText}>{state.errorMessage}</Text> : null}
                    <Text style={styles.errorText}>{state.token}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => signup({email, password})} >
                        <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
                        <Text style={styles.signUp}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>)
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 5,
        marginTop: 150,
        marginBottom: 50
    },
    input: {
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        width: '75%',
        padding: 5,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    gradient: {
        flex: 1,
        backgroundColor: "rgba(24, 47, 15, .75)",
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ddd',
        paddingHorizontal: 100,
        paddingVertical: 5,
        borderRadius: 20,
        marginTop: 70
    },
    buttonText: {
        color: '#555',
        fontSize: 30,
    },
    signUp: {
        fontSize: 24,
        color: '#fff',
        marginTop: 100
    }
});

export default SignupScreen;