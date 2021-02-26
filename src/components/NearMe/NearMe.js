import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
const NearMe = () => {
  return (
    <View style={styles.container}>
      <MapView
        mapType="satellite"
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};
export default NearMe;
const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 800,
    height: 800,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
