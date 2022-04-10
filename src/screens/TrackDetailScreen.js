import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackContext'
import MapView , {Polyline} from "react-native-maps";

const TrackDetailScreen = ({route}) => {
    const {state} = useContext(TrackContext);
    const {_id} = route.params;
    const track = state.find(track => track._id === _id);
    console.log(track)

    return (<>
        <Text>Track Detail Screen {_id}</Text>
        <Text>{track.name}</Text>
        <MapView
            style={styles.map}
            region={{
                ...track.locations[0].coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Polyline
                coordinates={track.locations.map(loc => loc.coords)}
                strokeWidth={7}
                strokeColor='rgba(158,158,255,1.0)'
            />
        </MapView>
        </>)
}

const styles = StyleSheet.create({
    map: {
        height: '60%'
    }
});

export default TrackDetailScreen;