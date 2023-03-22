import { SafeAreaView, StyleSheet, Image, Text, View, ScrollView, Pressable, TouchableOpacity, Platform } from 'react-native'
import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { chevronIcon } from '../assets/images';

const IndividualChatScreen = ({navigation, route}) => {

  const navigator = useNavigation()

  const { chat } = route.params;
  
  if (chat) {
    return (
      <SafeAreaView style={{
        flex: 1
      }}>
        <View style={{
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 0.1,
          position: "relative",
          
        }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 1,
            bottom: 0.1,
            padding: 9,
            paddingHorizontal: 15,
            paddingRight: 20,
            zIndex: 10
          }}
        >
          <Image
              source={chevronIcon}
              style={{
                width: 12,
                height: 22,
              }}
              resizeMode="contain"
            />
        </Pressable>
          
          
          <Text
            style={{
              fontSize: 18,
              lineHeight: 22,
              fontFamily: "Roboto_500Medium",
              color: "black",
              borderBottomWidth: 1,
              borderTopWidth: 0,
              width: "100%",
              textAlign: "center",
              paddingBottom: 4
              
  
            }}
          >{chat.name}</Text>
          {Platform.OS === "ios" && (
            <View
              style={{
                height: 0.5,
                width: "100%",
                backgroundColor:"gray",
                marginTop: 10
              }} 
            />
          )}
          

        </View>
        <ScrollView style={{
          flex: 0.9,
          marginBottom: 40,
          // paddingHorizontal: 16,
        }}>
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
              paddingVertical: 16,
              marginBottom: 100,
              marginTop: 29,
              
              // backgroundColor: "red",
            }}
          >
            <View></View>
            {chat.messages.map (message => (
              <View
                key={message.id}
                style={{
                  gap: 20,
                  flexDirection: message.name === "Me" ? "row-reverse" : "row",
                  paddingHorizontal: 16,
                }}
              >
                
                  <Image 
                  source={message.image}
                  style={{
                    width: 28,
                    height: 28
                  }}
                  resizeMode="contain"
                />
                <Text style={{
                  backgroundColor: "rgba(0,0,0,0.03)",
                  marginBottom: 24,
                  padding: 16,
                  paddingHorizontal: 16,
                  maxWidth: Platform.OS === 'ios' ? 299 : 280,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5

                }}>{message.message}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}





export default IndividualChatScreen;


