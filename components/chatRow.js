import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import { chatIcon } from '../assets/images'

const ChatRow = ({chat, onPress}) => {
  return (
    <Pressable style={{width: "100%"}} onPress={onPress}>
      <View style={{width: "100%"}}>
          <View
            style={{
              height: 64,
              marginHorizontal: 16,
              marginVertical: 16,
              flexDirection: "row",
              gap: 16,
            }}
          >
            <Image
                source={chat.profile_photo}
                style={{
                    height: 70,
                    width: 70
                }}
            />

            <View style={{
                gap: 3,
                maxWidth: 220,
                overflowX: "hidden"
            }}>
                <Text style={{
                    color: "black",
                    fontFamily:"Roboto_700Bold",
                    lineHeight: 16,

                }}>{chat.name }</Text>
                {/* Last Message Received or Sent */}
                <Text style={{
                  fontSize: 13
                }}>{chat.messages[chat.messages.length - 1].message}</Text>
            </View>
          </View>
          
        </View>
        <View
          style={{
            height: 0.4,
            width: "100%",
            backgroundColor:"gray",
            marginTop: 5
          }} 
        />
    </Pressable>
  )
}

export default ChatRow

const styles = StyleSheet.create({})