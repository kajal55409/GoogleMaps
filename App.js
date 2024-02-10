// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { createStackNavigator } from '@react-navigation/stack';
// import Googlemaps from './GoogleMaps/Googlemap';
// import Home from './Home/Home';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Googlemaps" component={Googlemaps} />

//     </Stack.Navigator>
//   );
// }

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen_Navigation from "./Route/Routing";
export default function App() {
  return (
   <Screen_Navigation />
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
