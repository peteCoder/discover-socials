import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useMemo} from 'react'

import MasonryList from '@react-native-seoul/masonry-list';

import { girlProfile } from '../assets/images'


import { MyDummyData } from '../mydummy';


// const ImageContainer = ({image}) => {
//   return (
//     <View style={{width: 30}}>
//       <Image 
//         source={image}
//         style={{flex: 1, alignSelf: "stretch", margin: 3}}
//         resizeMode="cover"
//       />
//     </View>
    
//   )
// }

const ImageContainer = ({
  item,
  style,
}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);
  // const {theme} = useTheme();

  return (
    <View key={item.id} style={[{marginTop: 12, flex: 1}, style]}>
      <Image
        source={{uri: item.imgURL}}
        style={{
          height: randomBool ? 150 : 280,
          alignSelf: 'stretch',
          borderRadius: 8
        }}
        resizeMode="cover"
      />
      {/* <Text
        style={{
          marginTop: 8,
        }}
      >
        {item.text}
      </Text> */}
    </View>
  );
};

const ProfileScreen = ({navigation}) => {


  const renderItem = ({item, i}) => {
    return (
      <ImageContainer item={item} style={{marginLeft: i % 2 === 0 ? 0 : 12}} />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <ScrollView style={{flex: 1, marginBottom: 80}}>
        <View style={{flex: 1, width: "100%", alignItems: "center", paddingHorizontal: 16}}>
          <Image 
            source={girlProfile.profile_photo}
            style={{width: 128, height: 128, marginTop: 32}}
          />
          <Text 
            style={{
              fontSize: 36, 
              fontFamily: "Comfortaa_400Regular",
              marginTop: 32,
              lineHeight: 40,
              marginBottom: 16
            }}
          >{girlProfile.name}</Text>
          <Text
            style={{
              fontFamily: "Roboto_900Black",
              textTransform: "uppercase",
              fontSize: 13,
              lineHeight: 15,
              marginBottom: 32
            }}
          >
            {girlProfile.city}
          </Text>

          <TouchableOpacity onPress={() => console.log("Follow")}
          style={styles.button}
            >
              <Text style={{color: "#ffffff", fontFamily: "Roboto_900Black", fontSize: 13, textTransform: "uppercase"}}>Follow {girlProfile.name}</Text>
            </TouchableOpacity>


          

            <TouchableOpacity onPress={() => navigation.navigate("Chats")}
                style={[styles.button, {borderWidth: 2, marginTop: 16, backgroundColor: "white", borderColor: "#000000"}]}
              >
                <Text style={{color: "#000000", fontFamily: "Roboto_900Black", fontSize: 13, textTransform: "uppercase"}}>message</Text>
            </TouchableOpacity>
        </View>

        
        <View style={{}}>
          {/* All Photos uploaded by user will be here */}

          <MasonryList 
            contentContainerStyle={{
              paddingHorizontal: 24,
              alignSelf: 'stretch',
              marginTop: 29,
            }}
            data={MyDummyData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}

            ListHeaderComponent={<View />}
            ListFooterComponent={<View style={{marginBottom: 50}} />}
            
            onEndReached={() => console.log('onEndReached')}
            
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    backgroundColor: "black",
    borderRadius: 6,
  }
})