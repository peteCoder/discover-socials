import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { 
  discoverPost
} from '../assets/images';

const DiscoverScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView style={{marginBottom: 50, flex: 1}}>
          <View style={styles.container}>
            <Text
              style={{
                fontFamily: "Comfortaa_400Regular",
                fontSize: 36,
                marginVertical: 10,
              }}
            >
              Discover
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto_900Black",
                textTransform: "uppercase",
                marginVertical: 32,
              }}
            >what's new today</Text>
            {/* Feeds to Discover */}
            <View style={{gap: 50, flexDirection: "column"}}>
              {discoverPost.map(feed => (
                <Pressable
                  key={feed.id}
                  onPress={() => navigation.navigate("DiscoverDetails", {feed})}
                >
                  <View
                    style={{
                      height: 343,
                      overflow: "hidden"
                    }}
                  >
                    <Image
                      source={feed.photo}
                      style={{
                        width: "100%",
                        height: "100%",

                      }}
                    />
                  </View>
                  <View style={{flexDirection: "row", alignItems: "center", gap: 8, marginTop: 10,}}>
                    
                    <Image
                      source={feed.postedBy.profile_photo}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 50
                      }}
                    />

                    <View>
                      <Text style={{
                        color: "black", 
                        fontFamily: "Roboto_700Bold",
                        fontSize: 13,
                      }}>{feed.postedBy.name}</Text>
                      <Text
                        style={{
                          fontFamily: "Roboto_400Regular",
                          fontSize: 11,
                          color: "rgba(0,0,0,0.8)",

                        }}
                      >@{feed.postedBy.username}</Text>
                    </View>

                  </View>
                  
                </Pressable>
              ))}
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DiscoverScreen

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