// import React, { useEffect, useState } from "react";
// import MapView from "react-native-map-clustering";
// import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
// import { locations } from "../Component/Static_data";
// import { Callout, PROVIDER_GOOGLE, Circle, Marker, Polygon, Polyline } from "react-native-maps";






// const Demo_page = () => {


//     const [polygonCoordinates, setPolygonCoordinates] = useState([]);
//     const INITIAL_REGION = {
//         latitude: 52.5,
//         longitude: 19.2,
//         latitudeDelta: 8.5,
//         longitudeDelta: 8.5,
//     };
//     return (

//         <View>
//             <MapView initialRegion={INITIAL_REGION}
//               style={styles.map}
//                 showsMyLocationButton={true}
//                 followsUserLocation={true}
//                 rotateEnabled={true}
//                 pitchEnabled={true}
//                 zoomControlEnabled={true}
//                 onLongPress={(e) => {
//                     setPolygonCoordinates([...polygonCoordinates, e.nativeEvent.coordinate]);
//                 }}
//                >
             


//                 {polygonCoordinates.length > 2 && (
//                     <Polygon
//                         coordinates={polygonCoordinates}
//                         fillColor="rgba(0, 200, 0, 0.5)"
//                         strokeColor="rgba(0, 0, 200, 0.5)"
//                         strokeWidth={2}
//                     />
//                 )}

//                 {locations.map((item) =>
//             <Marker
//                 coordinate={item}
//                 image={require("../Image/mapmarker.png")}
//             >
//                 <Callout>
//                     <Text style={{ fontSize: 13, fontWeight: "500" }}>
//                         Hello map
//                     </Text>
//                 </Callout>
//             </Marker>)}

        


//             </MapView>
//         </View>
//     );
// };

// export default Demo_page;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       height: '100%',
//       width: '100%',
//       alignSelf: 'center'
//     },
//     map: {
//         width: "100%",
//         height: Platform.OS === "ios" ? "100%" : "100%",
//         alignSelf: "center",
    
//       },
// });

import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-map-clustering';

const Demo_page = () => {
  const [markers, setMarkers] = useState([]);

  // Add markers to the marker array based on user's location or other data
  const addMarkers = () => {
    // Example code to add markers to the array
    const newMarkers = [
      { coordinate: { latitude: 37.78825, longitude: -122.4324 }, title: 'Marker 1' },
      { coordinate: { latitude: 37.78925, longitude: -122.4344 }, title: 'Marker 2' },
      { coordinate: { latitude: 37.79025, longitude: -122.4364 }, title: 'Marker 3' },
    ];
    setMarkers([...markers, ...newMarkers]);
  };

  // Update markers dynamically when user's location or relevant data changes
  useEffect(() => {
    addMarkers();
  }, []);

  return (
    <View style={styles.container}>
      <ClusteredMapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        rotateEnabled={true}
        pitchEnabled={true}
        zoomControlEnabled={true}
        showsMyLocationButton={true}
        radius={50}
        minZoom={1}
        maxZoom={20}
        
        clusterColor="#ff3d00"
        clusterTextColor="#ffffff"
        clusterBorderColor="#ffffff"
        clusterBorderWidth={2}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinate} title={marker.title} />
        ))}
      </ClusteredMapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    // padding:90
    marginVertical:90
  },
});

export default Demo_page;



//



  // useEffect(() => {
  //   const getLocationAsync = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       console.log('Permission to access location was denied');
  //       return;
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     console.log("location in google map", location);

  //     setPositionLocation({
  //       latitude: location.latitude,
  //       longitude: location.longitude,
  //       latitudeDelta: 0.45,
  //       longitudeDelta: 0.45,
  //     });
  //   };
  //   getLocationAsync();

  // }, [1]);


