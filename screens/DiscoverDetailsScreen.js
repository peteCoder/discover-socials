import { ImageBackground, Image, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { cancelTimes } from '../assets/images';


const DiscoverDetailsScreen = ({navigation, route}) => {
    const { feed } = route.params;

    return (
        <SafeAreaView style={{flex: 1}}>
            
            <ImageBackground
            style={{flex: 1}}
            source={feed.photo}
            resizeMode="cover"
            >
                <View style={{flex: 1, position: "relative"}}>
                <View style={{
                    width: "100%",
                    flex: 1,
                    position: "absolute", 
                    top: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 46,
                    paddingLeft: 16,
                    paddingRight: 24,
                    justifyContent: "space-between",
                    
                }}>
                    <View>
                        <Text style={{
                        color: "white", 
                        fontFamily: "Roboto_900Black",
                        fontSize: 16,
                        }}>{feed.postedBy.name}</Text>
                        <Text
                        style={{
                            fontFamily: "Roboto_700Bold",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.8)",

                        }}
                        >@{feed.postedBy.username}</Text>
                    </View>
                    <View>
                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={{
                                padding: 10
                            }}
                        >
                            <Image 
                                source={cancelTimes}
                                style={{
                                    tintColor: "white",
                                    width: 16,
                                    height: 16,
                                }}
                            />
                        </Pressable>
                    </View>
                    
                </View>
                </View>
                
            </ImageBackground>
        </SafeAreaView>
    
    )
}

export default DiscoverDetailsScreen;

const styles = StyleSheet.create({});