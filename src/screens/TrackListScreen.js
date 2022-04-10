import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext'
import { useFocusEffect } from '@react-navigation/native';

const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);

    useFocusEffect(
        React.useCallback(() => {
            fetchTracks();
        })
    )

    return (
        <View>
            <Text>Track List Screen</Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Track Detail', {_id: item._id})}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default TrackListScreen;