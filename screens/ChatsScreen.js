import { SafeAreaView, ScrollView, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import ChatRow from '../components/chatRow';

import { chatLists } from '../assets/images';

const ChatsScreen = ({navigation}) => {

  const navigator = useNavigation()



  useEffect(() => {
    navigator.setOptions({
      
    })
  }, [])
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <View style={{
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 0.1,
        paddingTop: Platform.OS == 'ios' ? 0 : 50
      }}>
        
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
            paddingBottom: Platform.OS == 'ios' ? 0 : 10
            

          }}
        >Chats</Text>
        <View
          style={{
            height: 0.5,
            width: "100%",
            // backgroundColor:"gray",
            paddingTop: 7,
            marginTop: 10
          }}>  
        </View>

      </View>
      <ScrollView style={{
        flex: 0.9,
        marginBottom: 40
      }}>
        {chatLists.friends.map(chat => <ChatRow onPress={() => navigator.navigate("ChatsDetail", {chat: chat})} chat={chat} key={chat.id} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({})