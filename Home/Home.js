import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}}>
      <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:200,borderWidth:1,padding:10,borderColor:'blue',color:'blue'}}
    onPress={() => navigation.navigate("Googlemaps")}
    > Polygon Maps</Text>
    </TouchableOpacity>
       <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}}>
       <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:20,borderWidth:1,padding:10,borderColor:'blue',color:'blue'}}
     onPress={() => navigation.navigate("Demo_page")}
     > Demo One</Text>
     </TouchableOpacity>

     <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}}>
       <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:20,borderWidth:1,padding:10,borderColor:'blue',color:'blue'}}
     onPress={() => navigation.navigate("Demo_two")}
     > Demo clustering</Text>
     </TouchableOpacity>


     <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}}>
       <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:20,borderWidth:1,padding:10,borderColor:'blue',color:'blue'}}
     onPress={() => navigation.navigate("LockScreen")}
     > Locking phone</Text>
     </TouchableOpacity>

     <TouchableOpacity style={{alignContent:'center',justifyContent:'center'}}>
       <Text  style={{alignSelf:'center',justifyContent:'center',marginTop:20,borderWidth:1,padding:10,borderColor:'blue',color:'blue'}}
     onPress={() => navigation.navigate("pdf")}
     > Pdf Editor</Text>
     </TouchableOpacity>
     </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
