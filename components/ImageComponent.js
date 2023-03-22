import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get("screen");


const PADDING_SIZE = 16;
const SPACE_BETWEEN_IMAGES = 11; 

const WIDTH_OF_IMAGE = (width - ((PADDING_SIZE * 2) + (SPACE_BETWEEN_IMAGES * 2))) / 3;

const ImageComponent = ({ image }) => {
  return (
    <View 
        style={{
            width: WIDTH_OF_IMAGE,
            height: 120,
        }}
    >
        <Image 
            style={{
                width: "100%",
                height: "100%",
            }}
            resizeMode="contain"
            source={image}
        />
      
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({})