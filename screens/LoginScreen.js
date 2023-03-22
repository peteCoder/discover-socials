import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { unionIcon } from '../assets/images';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");


const LoginScreen = ({navigation}) => {

  const navigator = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <ScrollView>
      <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>

        <TouchableOpacity onPress={() => navigation.navigate("Logout", {})}>
          <Image 
            source={unionIcon}
            style={{
              width: 12.21,
              height: 11.35
            }}
            resizeMode={"contain"}
          />
          
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "Comfortaa_300Light",
            fontSize: 36,
            marginVertical: 32,
          }}
        >Log in</Text>

        <View style={{
          flexDirection: "column",
          gap: 16,
        }}>
          {/* Email */}
          <TextInput 
            cursorColor="black"
            placeholderTextColor="black"
            placeholder='jane@example.com'
            style={{
              width: "100%",
              height: 52,
              borderWidth: 2,
              borderColor: "black",
              paddingHorizontal: 15,
              color: "black"
              
            }}
          />
          {/* Password */}
          <TextInput 
            cursorColor="black"
            secureTextEntry
            placeholder='••••••••••••'
            placeholderTextColor="black"
            style={{
              width: "100%",
              height: 52,
              borderWidth: 2,
              borderColor: "black",
              paddingHorizontal: 15,
              
            }}
          />

        <TouchableOpacity onPress={() => navigator.navigate("Home")}
          style={styles.button}
        >
          <Text style={{color: "#ffffff", fontFamily: "Roboto_900Black", fontSize: 13}}>LOG IN</Text>
        </TouchableOpacity>

        


        </View>

        

      </View>
      
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 60,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    backgroundColor: "black",
    borderRadius:6,
  }
})