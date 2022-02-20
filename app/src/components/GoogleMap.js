import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const GoogleMap = ({ setDistanceFn }) => {
    const [current, setCurrent] = useState('from');
    const [from, setFrom] = useState({
        latitude: 43.81580943698291,
        longitude: -79.28190908312187,
    });
    const [to, setTo] = useState({
        latitude: 43.83110487464262,
        longitude: -79.27538595112817,
    });

    return (
        <View style={{ flex: 1, }}>
            <MapView
                style={{ flex: 1, }}
                onPress={(e) => {
                    var latitude = e.nativeEvent.coordinate.latitude;
                    var longitude = e.nativeEvent.coordinate.longitude;
                    if (current == 'from') {
                        setCurrent('to');
                        setFrom({ latitude, longitude });
                    } else {
                        setCurrent('from');
                        setTo({ latitude, longitude });
                    }
                }}
                initialRegion={{
                    latitude: to.latitude,
                    longitude: to.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}>
                <Marker coordinate={from} />
                <Marker coordinate={to} />
                <MapViewDirections
                    origin={from}
                    destination={to}
                    apikey={'AIzaSyDv59cbo2A3hZldY0S0usHzqEr8N1ZdjKc'} // insert your API Key here
                    strokeWidth={4}
                    strokeColor="#111111"
                    onReady={(obj) => {
                        console.log(obj.distance + 'km  ' + obj.duration + 'minutes');
                        setDistanceFn(obj.distance);
                    }}
                    precision={'low'}
                />
            </MapView>
        </View>
    )

}

export default GoogleMap;