import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,

} from "react-native";

import React from "react";
import ImageComponent from "../components/ImageComponent";


import { dogData } from "../assets/images";




const SearchScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{marginBottom: 50}}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Text
              style={{
                fontFamily: "Comfortaa_400Regular",
                fontSize: 36,
                marginVertical: 10,
                marginBottom: 40,
              }}
            >
              Search
            </Text>

            <View
              style={{
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Email */}
              <TextInput
                cursorColor="black"
                placeholderTextColor="gray"
                placeholder="Search all photos"
                style={{
                  width: "100%",
                  height: 52,
                  borderWidth: 2,
                  borderColor: "black",
                  paddingHorizontal: 15,
                  color: "black",
                }}
              />
            </View>

            <View>
              <Text
                style={{
                  textTransform: "uppercase",
                  marginTop: 32,
                  fontFamily: "Roboto_900Black",
                  fontSize: 14,
                  color: "#000000",
                  marginBottom: 30
                }}
              >
                all results
              </Text>

              <ScrollView>
                {/* 11 * 2 */}
                {/* 16 * 2 */}

                {/* Images w - 107, h - 107 */}
                {/* 3 Images in a row */}
                <View style={{
                    flex: 1, 
                    justifyContent: "space-between", 
                    flexDirection: "row", 
                    flexWrap: "wrap",
                    gap: 4.5
                  }}>
                  {dogData.map(item => (
                    <ImageComponent 
                    key={item.id}
                      id={item.id} 
                      image={item.image} 
                      name={item.name} 
                    />
                  ))}
                </View>

                <View
                  style={{
                    marginVertical: 25,
                    flex: 1,

                  }}
                >
                  <TouchableOpacity onPress={() => console.log("Login")}
                      style={styles.button}
                    >
                      <Text style={{color: "#000000", fontFamily: "Roboto_900Black", fontSize: 13}}>SEE MORE</Text>
                  </TouchableOpacity>
                </View>

              </ScrollView>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

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
    borderRadius: 6,
    borderWidth: 2
  },
});
