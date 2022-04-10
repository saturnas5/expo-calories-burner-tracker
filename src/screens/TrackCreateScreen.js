import React, { useContext, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from "../components/Map";
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import { useIsFocused } from '@react-navigation/native';
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
    const {state, addLocation} = useContext(LocationContext);
    const isFocused = useIsFocused();
    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording])
    const [errorMsg] = useLocation(isFocused || state.recording, callback);

    return (
        <View>
            <Map />
            <TrackForm/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;