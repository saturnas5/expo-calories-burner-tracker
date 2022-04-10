import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AccountScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        if( !result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View>
            {!image ? <TouchableOpacity onPress={pickImage}><View style={styles.emptyImage}/></TouchableOpacity> : <TouchableOpacity><Image source={{uri: image}} style={styles.image}/></TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    emptyImage: {
        height: 100,
        width: 100,
        backgroundColor: "#777",
        borderRadius: 100/2
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100/2
    }
});

export default AccountScreen;