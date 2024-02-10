import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../Utils/Colors";
//   import image from "../../Utils/image";
import { Ionicons } from "@expo/vector-icons";
// import { auth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from '../firebase'
// import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import auth from '../firebase'
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
  const [email, setEmail] = useState('kajal@gmail.com');
  const [Password, setPassword] = useState('123456');
  const [LoginID, setLoginID] = useState('');

  const navigation = useNavigation();
  // useEffect(() => {
  //   const unsubscribe =  firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })
  //   return unsubscribe 
  // }, [1])



  const handleLogin = (email, Password) => {
    console.log("working", email, Password)
    const auth = getAuth();
    console.log("authauthauth",auth)
    signInWithEmailAndPassword(auth, email, Password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;

        console.log("login user", user.uid)
        const id =await AsyncStorage.setItem(
          '@UID',
          (user.uid)
        )
        console.log("login user idididid", id)
        Alert.alert(
          'Login  successful',
          'You have successfully Login !',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Home')
            }
          ],
          { cancelable: false }
        );
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }




  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, height: '100%' }}>
      <ScrollView>
        <View style={{ flex: 1, height: '100%' }}>
          <View style={{}}>
            <Image
              source={require('../Image/map.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>

          <View style={{ width: '90%', alignSelf: 'center', marginTop: 50 }}>
            <View style={[styles.Inputview]}>
              <TextInput
                placeholder="Email or username"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="gray"
                keyboardType="name-phone-pad"
              />
            </View>

            <View
              style={[
                styles.Inputview,
                {
                  marginTop: "5%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                value={Password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor="gray"
                keyboardType="name-phone-pad"
              />
              <Ionicons name="eye" size={24} color="gray" />
            </View>

            <Pressable
              // onPress={() => navigation.navigate("Home")}
              onPress={() => handleLogin(email, Password)}
              // onPress={()=>handleSignUp(email,Password)}
              style={styles.button}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              // onPress={() => navigation.navigate("Forgot_Otp")}
              style={{
                marginTop: 15,
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={styles.forgot_text}>
                Forgot your login details?{" "}
              </Text>
              <Text
                style={[
                  styles.forgot_text,
                  { color: "black", fontWeight: "600" },
                ]}
              >
                Get help logging in.
              </Text>
            </Pressable>

            <View style={{ marginTop: 20, flexDirection: "row", justifyContent: 'center' }}>
              <View style={styles.border_line}></View>
              <Text> OR </Text>
              <View style={styles.border_line}></View>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome5 name="facebook" size={24} color={colors.primary} />
              <Text
                style={[
                  styles.forgot_text,
                  {
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 15,
                    marginHorizontal: 5,
                    top: 3,
                  },
                ]}
              >
                Login with facebook
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.sectionBottom}
            onPress={() => navigation.navigate("Sign_up")}
          // onPress={handleSignUp}
          // onPress={()=>handleSignUp(email,Password)}
          >
            <View style={styles.bottomContainer}>
              <Text style={styles.subTitle}>
                <Text style={styles.noAccount}>Dont Have an account?</Text>{" "}
                <Text style={styles.link}>Sign up.</Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Inputview: {
    // backgroundColor: colors.secondary,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    //   elevation: 1,
    borderColor: "lightgray",
    // justifyContent: "center",
    padding: 13,
    fontSize: 14,
    color: "black",
    // backgroundColor: "red",
  },

  button: {
    backgroundColor: colors.blue,
    height: 50,
    justifyContent: "center",
    borderRadius: 5,
    marginTop: "5%",
    // marginHorizontal: 20,
  },
  image: {
    height: 90,
    width: 190,
    alignSelf: "center",
    marginTop: 70,
  },
  forgot_text: {
    fontSize: 12,
    fontWeight: "300",
    color: "gray",
    textAlign: "center",
  },
  sectionBottom: {
    display: "flex",
    //   top: 0,
    marginTop: 120,
    justifyContent: "flex-end",
    flex: 1,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  subTitle: {
    textAlign: "center",
  },
  link: {
    color: "black",
    fontWeight: "700",
    fontSize: 12,
  },
  noAccount: {
    color: colors.gray,
  },
  border_line: {
    width: 150,
    borderColor: "gray",
    borderBottomWidth: 0.5,
    alignSelf: "center",
    justifyContent: 'center'
    //   marginHorizontal: 5,
  },
});
