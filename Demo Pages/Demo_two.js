// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import { KMeans } from 'ml-kmeans';

// const Demo_two = () => {
//   const [location, setLocation] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         setLocation(position.coords);
//         fetchRestaurants(position.coords.latitude, position.coords.longitude);
//       },
//       error => console.log(error),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//     );
//   }, []);

//   const fetchRestaurants = async (lat, lng) => {
//     const response = await fetch(
//       `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${lat}&longitude=${lng}`,
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );
//     const data = await response.json();
//     setRestaurants(data.businesses);
//   };

//   const clusterRestaurants = () => {
//     const coordinates = restaurants.map(r => [r.coordinates.latitude, r.coordinates.longitude]);
//     const kmeans = new KMeans();
//     const { clusters } = kmeans.cluster(coordinates, { k: 3 });
//     return clusters;
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {location && (
//         <MapView
//           style={{ flex: 1 }}
//           initialRegion={{
//             latitude: location.latitude,
//             longitude: location.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//         >
//           {clusterRestaurants().map((cluster, index) => (
//             <Marker
//               key={index}
//               coordinate={{
//                 latitude: cluster.centroid[0],
//                 longitude: cluster.centroid[1],
//               }}
//               title={`Cluster ${index}`}
//               description={`${cluster.size} restaurants`}
//             />
//           ))}
//         </MapView>
//       )}
//     </View>
//   );
// };

// export default Demo_two;


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const Demo_two = () => {
//   const [location, setLocation] = useState(null);
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         // handle location permission not granted
//       }

//       let userLocation = await Location.getCurrentPositionAsync({});
//       setLocation(userLocation.coords);
      
//       // fetch nearby restaurants using userLocation
//       // cluster restaurants using k-means or DBSCAN
//       // setRestaurants with clustered data
//     })();
//   }, []);

//   if (!location) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <MapView
//       style={styles.map}
//       initialRegion={{
//         latitude: location.latitude,
//         longitude: location.longitude,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     >
//       {restaurants.map((restaurant) => (
//         <Marker
//           key={restaurant.id}
//           coordinate={{
//             latitude: restaurant.latitude,
//             longitude: restaurant.longitude,
//           }}
//           pinColor={getColorForCluster(restaurant.cluster)}
//           title={restaurant.name}
//         />
//       ))}
//     </MapView>
//   );
// };

// const getColorForCluster = (cluster) => {
//   // return a color based on the cluster number
// };

// const styles = StyleSheet.create({
//   map: {
//     flex: 1,
//   },
// });

// export default Demo_two;

// import React, { useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GooglePlacesInput = () => {
//   const [location, setLocation] = useState('');

//   const onLocationSelect = (data, details = null) => {
//     // `data` contains information about the selected location,
//     // `details` contains additional details about the selected location
//     console.log('Selected Location:', data.description);
//     setLocation(data.description);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Enter your location:</Text>
//       <GooglePlacesAutocomplete
//         placeholder='Search'
//         onPress={onLocationSelect}
//         query={{
//           key: 'AIzaSyC_d73LOpsp_vjNAq8mAK1THiXxn3OEF2s',
//           language: 'en',
//         }}
//         fetchDetails={true}
//         styles={{
//           container: styles.searchContainer,
//           textInputContainer: styles.textInputContainer,
//           textInput: styles.textInput,
//           predefinedPlacesDescription: styles.predefinedPlacesDescription,
//         }}
//       />
//       <Text style={styles.text}>Selected Location: {location}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   searchContainer: {
//     width: '90%',
//     backgroundColor: '#fff',
//     borderTopWidth: 0,
//     borderBottomWidth: 0,
//   },
//   textInputContainer: {
//     backgroundColor: '#F5FCFF',
//     borderTopWidth: 0,
//     borderBottomWidth: 0,
//   },
//   textInput: {
//     marginLeft: 0,
//     marginRight: 0,
//     height: 38,
//     color: '#5d5d5d',
//     fontSize: 16,
//   },
//   predefinedPlacesDescription: {
//     color: '#1faadb',
//   },
// });

// export default GooglePlacesInput;


import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const Demo_two = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    setLocation(locationData);
  };

  useEffect(() => {
    getLocation();

    return () => {
      // cleanup function to stop location tracking
    };
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <Text>Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}</Text>
      ) : (
        <Text>Loading location...</Text>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Demo_two;

