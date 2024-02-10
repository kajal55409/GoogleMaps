import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    Pressable,
    Image,
    Modal,
    Alert,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { useNavigation } from "@react-navigation/native";
  import {
    FontAwesome5,
    AntDesign,
    Feather,
    SimpleLineIcons,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";
  import colors from "../Utils/Colors";
//   import image from "../../Utils/image";
  import { Ionicons } from "@expo/vector-icons";
  import { Calendar } from "react-native-calendars";
  import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
  
  const Sign_up = () => {
    const [email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation();

  const handleSignUp = async (email, Password) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, Password);
      const user = userCredential.user;
      console.log('User registered successfully!', user);
      Alert.alert(
        'Sign up successful',
        'You have successfully signed up!',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Home')
          }
        ],
        { cancelable: false }
      );
    
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View
              style={{
                marginTop: 50,
                borderWidth: 2,
                height: 130,
                width: 130,
                borderRadius: 75,
                justifyContent: "center",
                alignSelf: "center",
                bottom: 10,
                borderColor: "gray",
              }}
            >
              <SimpleLineIcons
                name="user-follow"
                size={50}
                color="gray"
                style={{ alignSelf: "center" }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                color: "gray",
                fontSize: 18,
              }}
            >
              Sign Up
            </Text>
            <View style={{}}>
              <View
                style={[
                  styles.Inputview,
                  {
                    flexDirection: "row",
                  },
                ]}
              >
                 <MaterialCommunityIcons name="email" size={22} color="gray" />
                <TextInput
                  placeholder="Phone number or Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="gray"
                  keyboardType="name-phone-pad"
                  style={{ marginHorizontal: 13 }}
                />
              </View>
  
              <View
                style={[
                  styles.Inputview,
                  {
                    flexDirection: "row",
                  },
                ]}
              >
                <FontAwesome5
                  name="key"
                  size={20}
                  color="gray"
                />
                <TextInput
                    placeholder="Password"
                  value={Password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor="gray"
                  keyboardType="name-phone-pad"
                  style={{ marginHorizontal: 10 }}
                />
              </View>
  
              {/* <Pressable
                style={[
                  styles.Inputview,
                  {
                    flexDirection: "row",
                  },
                ]}
                onPress={() => setShowModal(true)}
              >
                <FontAwesome5 name="calendar" size={18} color="gray" />
                <TextInput
                  placeholder="Date of birth"
                  value={Password}
                  onChangeText={(text) => setPassword(text)}
                  placeholderTextColor="gray"
                  keyboardType="name-phone-pad"
                  style={{ marginHorizontal: 13 }}
                />
              </Pressable> */}
  
              <Pressable
                // onPress={() => navigation.navigate("Forgot_Otp")}
                onPress={()=>handleSignUp(email,Password)}
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
                  Sign up
                </Text>
              </Pressable>
  
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  alignSelf: "center",
                }}
              >
                <Text style={styles.forgot_text}>Already have an account? </Text>
                <Text
                  style={[
                    styles.forgot_text,
                    { color: "black", fontWeight: "600" },
                  ]}
                >
                  Log In.
                </Text>
              </Pressable>
              <Modal
                visible={showModal}
                //  animationType="fade"
                animationType="slide"
                transparent={true}
              >
                <Calendar
                  style={{
                    borderRadius: 10,
                    elevation: 4,
                    margin: 40,
                    // backgroundColor: "lightblue",
                    borderWidth: 0.6,
                    marginTop: 280,
                    borderColor: "gray",
                  }}
                  onDayPress={(date) => {
                    console.log(date);
                    setShowModal(false);
                  }}
                />
              </Modal>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Sign_up;
  
  const styles = StyleSheet.create({
    Inputview: {
      // backgroundColor: colors.secondary,
      height: 50,
      borderRadius: 4,
      borderWidth: 1,
    //   elevation: 5,
      borderColor: "lightgray",
      // justifyContent: "center",
      padding: 13,
      fontSize: 14,
      color: "black",
      marginTop: 20,
  
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
      // height: "50%",
      width: "40%",
      alignSelf: "center",
      // marginTop: 70,
    },
    forgot_text: {
      fontSize: 13,
      fontWeight: "400",
      color: "gray",
      textAlign: "center",
    },
  
    border_line: {
      width: 150,
      borderColor: "gray",
      borderBottomWidth: 0.5,
      alignSelf: "center",
      marginHorizontal: 5,
    },
  });
  