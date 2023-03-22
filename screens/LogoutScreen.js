import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { rectangularBg, Logo, LogoutAvartar } from '../assets/images';


const {width, height} = Dimensions.get("screen");

const SPACE_BETWEEN_BUTTONS = 9
const PADDING_LEFT_AND_RIGHT = 16
const DESIGN_STYLE = (PADDING_LEFT_AND_RIGHT * 2) + SPACE_BETWEEN_BUTTONS

const SIZE_OF_BUTTON = (width - DESIGN_STYLE) / 2


const LogoutScreen = ({navigation}) => {
  return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ImageBackground 
          source={rectangularBg}
          style={styles.imageBg}
        >
          <Image 
            source={Logo}
            style={{
              width: 206,
              height: 54,
            }}
          />
          <View style={{
            position: "absolute", 
            bottom: 20,
            left: 2,
            flexDirection: "row",
            gap: 8,
            marginLeft: 16
          }}>
            <Image 
              source={LogoutAvartar}
              style={{
                width: 28, 
                height: 28, 
                borderRadius: 50
              }}
            />
            <View>
              <Text style={{color: "#000000", fontSize: 13, fontFamily: "Roboto_700Bold"}}>Pawel Czerwinski</Text>
              <Text style={{color: "rgba(0,0,0,0.8)", fontSize: 11, lineHeight: 13, fontFamily: "Roboto_400Regular"}}>@pawel_czerwinski</Text>
            </View>
            
          </View>
        </ImageBackground>
        <View style={{flex: 0.15, flexDirection: "row", justifyContent:"center", gap: SPACE_BETWEEN_BUTTONS, alignItems: "center"}}>
            <TouchableOpacity
              style={{
                
                width: SIZE_OF_BUTTON,
                height: 52,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: 6,
              }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{
                fontFamily: "Roboto_900Black", 
                fontSize: 13,
                lineHeight: 15,
                color: "black"
                
              }}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                
                width: SIZE_OF_BUTTON,
                height: 52,
                borderWidth: 2,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
                borderRadius: 6,
                
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{
                fontFamily: "Roboto_900Black", 
                fontSize: 13,
                lineHeight: 15,
                color: "white"
                
              }}>REGISTER</Text>
            </TouchableOpacity>
        </View>

      </View>
  )
}

export default LogoutScreen

const styles = StyleSheet.create({
  imageBg :{
    
    // height: 700,
    flex: 0.85,
    justifyContent: "center", 
    alignItems: "center",
    position: "relative"

  }
})