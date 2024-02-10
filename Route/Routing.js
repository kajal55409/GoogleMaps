import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Home";
import Googlemaps from "../GoogleMaps/Googlemap";
import Splash from "../Home/splash";
import Demo_page from "../Demo Pages/DemoPage";
import Demo_two from "../Demo Pages/Demo_two";
import Login from "../Auth/Login";
import Sign_up from "../Auth/Signup";
import Forgot_Password from "../Auth/Forgot";
import Forgot_Otp from "../Auth/Forgot_otp";
import LockScreen from "../Demo Pages/Locking";
import Profile from "../Home/Profile";
import pdf from "../Demo Pages/Pdf";

function Main_Navigator() {
  const Tab = createBottomTabNavigator();

  const TabIcon = ({ name, size, color }) => {
    return (
      <Image
        source={name}
        style={{ height: 20, width: 20, tintColor: color, }}
        resizeMode={"contain"}
      />
    );
  };

  return (
    <Tab.Navigator

      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 74 : 54,
          backgroundColor:'lightblue',
          paddingBottom: Platform.OS === 'ios' ? 25 : 5,
        }
      }}
 >

<Tab.Screen
        name={'Map'}
        component={Googlemaps}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: require("../Image/googlemap.png"),
              color: props.focused ? "blue" : "gray",
            }),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />
      <Tab.Screen

        name={'Chat'}
        component={Home}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: require("../Image/chat.png"),
              color: props.focused ? "blue" : "gray",
            }),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />

    

      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: require("../Image/user.png"),
              color: props.focused ? "blue" : "gray",
            }),
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />

    
    </Tab.Navigator>
  );
}


const Screen_Navigation = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Splash" component={Splash} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Main_Navigator}  options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Sign_up" component={Sign_up}  options={{ headerShown: false }} />
        <Stack.Screen name="Forgot_Password" component={Forgot_Password}  options={{ headerShown: false }} />
        <Stack.Screen name="Forgot_Otp" component={Forgot_Otp}  options={{ headerShown: false }} />
        <Stack.Screen name="Googlemaps" component={Googlemaps} />
        <Stack.Screen name="Demo_page" component={Demo_page} />
        <Stack.Screen name="Demo_two" component={Demo_two} />
        {/* <Stack.Screen name="LockScreen" component={LockScreen} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="pdf" component={pdf} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screen_Navigation;

const styles = StyleSheet.create({});
