import React, { useContext } from "react";
import { TextInput, Button} from 'react-native';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const {state, startRecording, stopRecording, changeName} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    console.log(state.locations.length)

    return (<>
        <TextInput placeholder='Track Name' value={state.name} onChangeText={changeName} />
        {state.recording
            ? <Button title='Stop' onPress={stopRecording}/>
            : <Button title='Start tracking' onPress={startRecording}/>
        }
        {!state.recording && state.locations.length > 0 ? <Button title='Save track' onPress={saveTrack} /> : null}
        </>);
};

export default TrackForm;