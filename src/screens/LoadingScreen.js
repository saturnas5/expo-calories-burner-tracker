import React, {useEffect, useContext} from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import running from "../../assets/running.jpg";

const LoadingScreen = ({setIsLoading}) => {
    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
        dellay();
    }, [])

    function dellay() {
        setTimeout(() => setIsLoading(false), 3000)
    }

    return (
        <ImageBackground resizeMode='cover' source={running} style={styles.image} >
            <View style={styles.gradient} >
                <Text style={styles.text}>Tracker</Text>
            </View>
        </ImageBackground>
        )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    gradient: {
        flex: 1,
        backgroundColor: "rgba(24, 47, 15, .75)",
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    }
});

export default LoadingScreen;