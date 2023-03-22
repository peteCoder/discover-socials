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
  ScrollView,
} from "react-native";
import React from "react";
import { unionIcon } from "../assets/images";

const RegisterNextScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate("Register", {})}>
              <Image
                source={unionIcon}
                style={{
                  width: 12.21,
                  height: 11.35,
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
            >
              Register
            </Text>

            <View
              style={{
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Username */}
              <TextInput
                cursorColor="black"
                onChangeText={() => {}}
                placeholderTextColor="black"
              placeholder='the_jane'
                style={{
                  width: "100%",
                  height: 52,
                  borderWidth: 2,
                  borderColor: "black",
                  paddingHorizontal: 15,
                  color: "black",
                }}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.button}
              >
                <Text
                  style={{ color: "#ffffff", fontFamily: "Roboto_900Black", fontSize: 13 }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: "black", marginTop: 32, fontFamily: "Roboto_400Regular", fontSize: 13}}>
              <Text>By signing up, you agree to Photo’s{" "}</Text>
              <Text 
                onPress={() => console.log("Pressed")}
                style={{textDecorationLine: "underline", }}
              > 
                  Terms of Service and Privacy Policy.
              </Text> 
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterNextScreen;

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
    borderRadius: 6
  },
});
