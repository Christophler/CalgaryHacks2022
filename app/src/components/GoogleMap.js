import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'

const GoogleMap = () => {

    const [coordinates] = useState([
        {
            latitude: 43.81580943698291,
            longitude: -79.28190908312187,
        },
        {
            latitude: 43.83110487464262,
            longitude: -79.27538595112817,
        },
    ]);

    return (
        <View style={{ flex: 1, }}>
            <MapView
                style={{ flex: 1, }}
                initialRegion={{
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}>
                <Marker coordinate={coordinates[0]} />
                <Marker coordinate={coordinates[1]} />
                <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={'<API_KEY>'} // insert your API Key here
                    strokeWidth={4}
                    strokeColor="#111111"
                />
            </MapView>
        </View>
    )

}

export default GoogleMap;