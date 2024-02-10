import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Callout, PROVIDER_GOOGLE, Circle, Marker, Polygon, Polyline } from "react-native-maps";
import { locations } from "../Component/Static_data";
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import WebView from "react-native-webview";
import { auth } from 'firebase/app';
// import { signOut } from 'firebase/auth'  
// import { signOut } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Googlemaps = () => {
  const navigation = useNavigation();
  const [CurrentCords, setCurrentCords] = useState([]);
  const [PolygonPoint, setPolygonPoint] = useState([]);
  const [coordinates, setCoordinates] = useState([
    { latitude: 37.8025259, longitude: -122.4351431 },
    { latitude: 37.7896386, longitude: -122.421646 },
    { latitude: 37.7665248, longitude: -122.4161628 },
    { latitude: 37.7734153, longitude: -122.4577787 },
  ]);

  const [polylineCo, setpolylineCo] = useState([
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.75825, longitude: -122.4624 },
    { latitude: 37.74825, longitude: -122.4824 },
    { latitude: 37.72825, longitude: -122.5024 },
  ]
  );
  const [shapeType, setShapeType] = useState(null);
  const [PositionLocation, setPositionLocation] = useState(null);

  const [polygonCoordinates, setPolygonCoordinates] = useState([]);

  const [PolygonEnable, setPolygonEnable] = useState(false);
  const [PolylineEnable, setPolylineEnable] = useState(false);




  const [MarkerCluster, setMarkerCluster] = useState([]);


  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Alert.alert(
      //   'Logout  successful',
      //   'You have successfully Logout !',
      //   [
      //     {
      //       text: 'OK',
      //       onPress: () => navigation.navigate('Login')
      //     }
      //   ],
      //   { cancelable: false }
      // );
      // Sign-out successful.

      Alert.alert(

        'Logout',

        "are you sure you want to logout?",

        [
          {

            text: "cancel",

            onPress: () => console.log("Cancel Pressed"),

            style: "cancel",

          },

          {

            text: "yes", onPress: () => {

              AsyncStorage.clear();
  navigation.reset({

                index: 0,

                routes: [{ name: "Login" }]

              })

            }

          },

        ],

        { cancelable: false }

      );
    }).catch((error) => {
      // An error happened.
    });
  }



  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     console.log("Signed out successfully")
  //     navigation.replace("Login")
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // }

  useEffect(() => {
    getLocationAsync();
  }, [1]);


  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log("location in google map", location);

    setPositionLocation({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });



    let myArr = [], myObj = {};

    for (let i = 0; i < 10; i++) {
      myObj = {
        latitude: JSON.parse((location.coords.latitude).toFixed(7) + i),
        longitude: JSON.parse((location.coords.longitude).toFixed(7) + i),
      }
      myArr.push(myObj)

    }

    setMarkerCluster(myArr)
    // console.log("my arrr", myArr)
    // console.log("myObj", myObj)
  };

  const CustomCalloutView = () => {
    return (

      <View style={{ backgroundColor: 'red', height: 90, padding: 30 }}>
        <View>
          <Text style={{
            fontWeight: "bold",
          }}>
            Brainware University
          </Text>
        </View>
        <Text>
          <Image
            source={require('../Image/clg.png')}
            resizeMode={'contain'}
            style={{ width: 50, height: 50, marginVertical: 10 }}
          />
        </Text>
      </View>

    );
  };


  const handleMapPress = (event) => {
    const newCoordinate = event.nativeEvent.coordinate;
    const newCoordinates = [...polygonCoordinates, newCoordinate];
    setPolygonCoordinates(newCoordinates);
    setPolygonEnable(false)


  };

  const handleLogout = async () => {
    try {
      await auth().signOut(); // Call the signOut method
      // Navigate to the login screen or do something else after logout
      navigation.replace("Login")

      // Alert.alert(
      //   'Logout  successful',
      //   'You have successfully Logout !',
      //   [
      //     {
      //       text: 'OK',
      //       onPress: () => navigation.navigate('Login')
      //     }
      //   ],
      //   { cancelable: false }
      // );

    } catch (error) {
      console.log('Error willl be', error);
    }
  }
  return (
    <View style={styles.container}>

      <View style={{ width: '100%', height: 70, backgroundColor: 'lightblue', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingHorizontal: 20 }}>
        <FontAwesome5 name="map-marked-alt" size={24} color="black" />
        <TouchableOpacity onPress={()=>handleSignOut()}>
          <AntDesign name="logout" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>

        <View style={styles.search}>

          <TextInput
            placeholder="Search..."
            style={styles.serach_view}

          />
          <View style={{ justifyContent: 'center' }}>
            <FontAwesome5 name="search-location" size={20} color="lightgrey" />
          </View>
        </View>


        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row', alignSelf: 'center', width: '80%'
        }}>


          <TouchableOpacity style={[styles.button, { backgroundColor: 'lightgreen' }]} onPress={() => setPolygonEnable(true)}>
            <Text style={styles.button_text}> {PolygonEnable == false ? "Enable Polygon" : "Disable Polygon"} </Text>


          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'lightblue' }]} onPress={() => setPolylineEnable(true)}>
            <Text style={styles.button_text}> {PolylineEnable == false ? "Enable Polyline" : "Disable Polyline"} </Text>
          </TouchableOpacity>
        </View>


      </View>
      <View>

        <View style={{ marginVertical: 20, marginBottom: '30%' }}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsUserLocation
            radius={Dimensions.get("window").width * 0.08}
            minZoomLevel={1}
            maxZoomLevel={20}
            rotateEnabled={true}
            pitchEnabled={true}
            zoomControlEnabled={true}
            initialRegion={PositionLocation}
            onPress={handleMapPress}

            onLongPress={(e) => {
              setPolygonCoordinates([...polygonCoordinates, e.nativeEvent.coordinate]);
            }}

          >

            {polygonCoordinates.length >= 3 && PolygonEnable == true ? (
              <View>
                <Polygon
                  coordinates={polygonCoordinates}
                  fillColor="rgba(255, 0, 0, 0.5)"
                  strokeColor="rgba(255, 0, 0, 0.5)"
                  strokeWidth={2}
                />


              </View>
            ) : null}

            {polylineCo.length >= 2 && PolylineEnable == true ? (
              <Polyline
                coordinates={polylineCo}
                strokeColor='blue'
                strokeWidth={4}
              />
            ) : null}


            {MarkerCluster.map((item) =>
              // {  console.log("itemitem",item)}
              <Marker
                coordinate={item}

                image={require("../Image/mapmarker.png")}
              >
                <Callout tooltip >
                  {/* <Text style={{ fontSize: 13, fontWeight: "500" }}>
                    You're here
                  </Text> */}
                  {/* <Image
                        source={{ uri: 'https://i.ibb.co/2PwKJWc/UA-Studios-2.png' }}
                        style={{ width: 100, height: 100 }}
                    /> */}
                  <CustomCalloutView />
                </Callout>
              </Marker>

            )}



          </MapView>

        </View>
      </View>
    </View>
  );
};

export default Googlemaps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignSelf: 'center'
  },
  search: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 30,
    marginVertical: 10,
    // marginHorizontal: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // backgroundColor: 'green'

  },
  serach_view: {
    height: 40,
    width: '90%',
    // backgroundColor:'lightgrey'
  },
  serach_text: {
    color: 'gray'
  },
  button: {
    height: 35,
    width: 150,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    justifyContent: 'center'
  },
  button_text: {
    textAlign: 'center'
  },

  map: {
    width: "100%",
    height: Platform.OS === "ios" ? "100%" : "100%",
    alignSelf: "center",

  },
});