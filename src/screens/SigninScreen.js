import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import running from '../../assets/running.jpg';
import {Context as AuthContext} from "../context/AuthContext";
import { useFocusEffect } from '@react-navigation/native';

const SigninScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signin, clearErrorMessage} = useContext(AuthContext);

    useFocusEffect(
        React.useCallback(() => {
            clearErrorMessage();

        }, [])
    );

    return (
        <View style={styles.image} >
            <ImageBackground resizeMode='cover' source={running} style={styles.image} >
                <View style={styles.gradient} >
                    <Text style={styles.text}>LOGIN</Text>
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
                    <TouchableOpacity style={styles.button} onPress={() => signin({email, password})} >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signUp}>SIGN UP</Text>
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

export default SigninScreen;