import { 
  Pressable, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  ScrollView 
} from 'react-native'
import React from 'react'
import { unionIcon } from '../assets/images';


const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <ScrollView>
      <KeyboardAvoidingView behavior="padding">

      
      <View style={styles.container}>

        <Pressable onPress={() => navigation.navigate("Logout", {})}>
          <Image
            source={unionIcon}
            style={{
              width: 12.21,
              height: 11.35
            }}
            resizeMode={"contain"}
          />
          
        </Pressable>

        <Text
          style={{
            fontFamily: "Comfortaa_300Light",
            fontSize: 36,
            marginVertical: 32,
          }}
        >Register</Text>

        <View style={{
          flexDirection: "column",
          gap: 16
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
            placeholder='••••••••••••'
            placeholderTextColor="black"
            secureTextEntry
            style={{
              width: "100%",
              height: 52,
              borderWidth: 2,
              borderColor: "black",
              paddingHorizontal: 15,
              
            }}
          />

        <TouchableOpacity onPress={() => navigation.navigate("RegisterNext")}
          style={styles.button}
        >
          <Text style={{color: "#ffffff", fontFamily: "Roboto_900Black", fontSize: 13}}>NEXT</Text>
        </TouchableOpacity>

        </View>
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

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
    borderRadius: 6,
  }
})