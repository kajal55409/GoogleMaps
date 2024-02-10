// import React, { useEffect } from 'react';
// import { Text, View } from 'react-native';
// import { Device } from 'expo-device';


// const LockScreen = () => {
//   useEffect(() => {
//     // Lock the device's screen
//     Device.setKeepAwake(true);

//     // Set a timer to unlock the device's screen after 10 minutes
//     const timer = setTimeout(() => {
//       Device.setKeepAwake(false);
//     }, 10 * 60 * 1000);

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Your phone is locked for 10 minutes</Text>
//     </View>
//   );
// };

// export default LockScreen;
