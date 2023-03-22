import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";


const TabIcon = ({ icon, focused, extraStyle, center }) => {
  if (center) {
    return (
      <View
        style={{
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <LinearGradient
          colors={["#FF00D6", "#FF2B5C", "#FF4D00"]}
          style={{
            width: 80,
            height: 50,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icon}
              style={{
                tintColor: "white",
                width: 18,
                height: 18,
              }}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>
      </View>
    );
  }

  return (
    <View>
      <Image
        source={icon}
        style={{
          width: 22,
          tintColor: focused ? "#FF00D6" : null,
          ...extraStyle,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
