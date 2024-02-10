import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    Image,
    TextInput,
    StyleSheet,
    Pressable
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import colors from "../Utils/Colors";

import { getAuth, updateEmail, updateProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const Profile = ({ route, navigation }) => {
    const [image, setImage] = useState(null);

    //   const { name, accountName, profileImage } = route.params;

    // const user = auth.currentUser;
    // Update email
// updateEmail(user, 'new-email@example.com')
// .then(() => {
//   console.log('Email updated successfully');
// })
// .catch((error) => {
//   console.error('Error updating email:', error);
// });

// Update profile
// updateProfile(user, {
// displayName: 'New Name',
// })
// .then(() => {
//   console.log('Profile updated successfully');
// })
// .catch((error) => {
//   console.error('Error updating profile:', error);
// });


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
 
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    marginTop: 30,
                }}
            >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionic name="close-outline" style={{ fontSize: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
                <TouchableOpacity
                    onPress={() => {
                        // TostMessage();
                        navigation.goBack();
                    }}
                >
                    <Ionic name="checkmark" style={{ fontSize: 35, color: "#3493D9" }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ padding: 20, alignItems: "center" }}
                onPress={pickImage}
            >

 here image are fetching from firebase 
                <Image
                    // source={require('../Image/map.png')}
                    source={{
                    uri:'https://firebasestorage.googleapis.com/v0/b/map-e7ea1.appspot.com/o/mapmarker.png?alt=media&token=3217ae61-8538-4f42-bd6f-861675b0b9d1'
                }}
                    resizeMode="contain"
                    style={styles.image}
                />

                <Text
                    style={{
                        color: "#3493D9",
                        marginTop: 10,
                    }}
                >
                    Change profile photo
                </Text>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <View>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}
                    >
                        Name
                    </Text>
                    <TextInput
                        placeholder="name"
                        defaultValue={'kajal'}
                        style={{
                            fontSize: 13,
                            borderBottomWidth: 1,
                            borderColor: "#CDCDCD",
                        }}
                    />
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text
                        style={{
                            opacity: 0.5,
                        }}
                    >
                        Email ID
                    </Text>
                    <TextInput
                        placeholder="accountname"
                        defaultValue={'kajal@gmail.com'}
                        style={{
                            fontSize: 13,
                            borderBottomWidth: 1,
                            borderColor: "#CDCDCD",
                        }}
                    />
                </View>


            </View>

            <Pressable
              // onPress={() => navigation.navigate("Home")}
            //   onPress={() => handleLogin(email, Password)}
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
                Update profile
              </Text>
            </Pressable>

        </View>
    );
};

export default Profile;
const styles = StyleSheet.create({

    image: {
        height: 90,
        width: 190,
        alignSelf: "center",
        marginTop: 30,
    },
    button: {
        backgroundColor: colors.blue,
        height: 50,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: "5%",
        marginHorizontal: 20,
        marginTop: 150,
      },
})