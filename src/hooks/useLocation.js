import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import * as TaskManager from "expo-task-manager"

const LOCATION_TASK_NAME = "ACCESS_BACKGROUND_LOCATION";

const stopBackgroundUpdate = async () => {
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_TASK_NAME
    )
    if (hasStarted) {
        await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME)
        console.log("Location tracking stopped")
    }
}

export default (shouldTrack, callback) => {
    const [errorMsg, setErrorMsg] = useState(null);

    TaskManager.defineTask(LOCATION_TASK_NAME, async ({data, error}) => {
        if (error) {
            console.log(error);
            return;
        }
        if (data) {
            const {locations} = data;
            const location = locations[0];
            if (location) {
                console.log("Background location", location);
                callback(location);
            }
        }
    });

    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                let {status} = await Location.requestForegroundPermissionsAsync();
                if(status !== 'granted') {
                    setErrorMsg('Location permission not granted');
                    return;
                }

                if (status) {
                    await Location.requestBackgroundPermissionsAsync();
                }

                // dabar naudojam background location is Task manager
                subscriber = await Location.watchPositionAsync({
                        accuracy: Location.Accuracy.BestForNavigation,
                        distanceInterval: 1,
                    },
                    (location) => {
                        // callback(location); //== kad nesidubliuotu callback'as su task manager callback'u ==
                    });

                let {granted} = await Location.getBackgroundPermissionsAsync();
                if (!granted) {
                    console.log("location tracking denied");
                    return;
                }

                const isTaskDefined = await TaskManager.isTaskDefined(LOCATION_TASK_NAME);
                if (!isTaskDefined) {
                    console.log('Task is not defined');
                }

                const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
                if (hasStarted) {
                    console.log('Already tracking');
                    return;
                }

                await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
                    accuracy: Location.Accuracy.BestForNavigation,
                    showsBackgroundLocationIndicator: true,
                    foregroundService: {
                        notificationTitle: 'Lokacija',
                        notificationBody: 'mes sekame tave',
                        notificationColor: '#fff'
                    }
                })

            } catch (err) {
                console.log(err)
                setErrorMsg(err);
            }
        };


        if(shouldTrack) {
            startWatching();
        } else {
            if(subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => {
            if(subscriber) {
                subscriber.remove();
                stopBackgroundUpdate();
            }
        };
    }, [shouldTrack, callback]);

    return [errorMsg];
}