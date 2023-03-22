import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Masonry from 'react-native-masonry';

const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://placeimg.com/640/640/nature',
    dimensions: { width: 640, height: 640 },
  },
  {
    uri: 'https://placeimg.com/640/480/nature',
    dimensions: { width: 640, height: 480 },
  },
  {
    uri: 'https://placeimg.com/640/800/nature',
    dimensions: { width: 640, height: 800 },
  },
  {
    uri: 'https://placeimg.com/640/480/nature',
    dimensions: { width: 640, height: 480 },
  },
  {
    uri: 'https://placeimg.com/640/960/nature',
    dimensions: { width: 640, height: 960 },
  },
  {
    uri: 'https://placeimg.com/640/480/nature',
    dimensions: { width: 640, height: 480 },
  },
  {
    uri: 'https://placeimg.com/640/640/nature',
    dimensions: { width: 640, height: 640 },
  },
  {
    uri: 'https://placeimg.com/640/480/nature',
    dimensions: { width: 640, height: 480 },
  },
  {
    uri: 'https://placeimg.com/640/960/nature',
    dimensions: { width: 640, height: 960 },
  },
];

class PhotoMasonryLayout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Masonry
                    bricks={data}
                    columns={2}
                    brickPadding={5}
                    sorted
                    customImageComponent={CustomImageComponent}
                />
            </View>
        );
    }
}

const CustomImageComponent = ({ source, style, ...props }) => {
  const { width: screenWidth } = Dimensions.get('window');
  const { width, height } = source.dimensions;
  const aspectRatio = width / height;
  const newHeight = screenWidth / 2 / aspectRatio;
  return (
    <Image
      source={source}
      style={[style, { width: screenWidth / 2, height: newHeight }]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default PhotoMasonryLayout;