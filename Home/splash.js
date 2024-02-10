import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
  
      funcNavigate()
    
  }, []);


  const funcNavigate = async () => {
    const userid = await AsyncStorage.getItem('@UID')

    console.log("id", userid);

    setTimeout(() => {

      if (userid != null) {

        navigation.reset({

          index: 0,

          routes: [{ name: "Home" }]

        })

      }

      else {

        navigation.reset({

          index: 0,

          routes: [{ name: "Login" }]

        })

      }

    }, 2000);

  }

  return (
    <View style={styles.container}>
      <Image source={require('../Image/map.png')} resizeMode="contain" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "50%",
    width: "50%",
  },
});
