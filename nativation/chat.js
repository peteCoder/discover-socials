import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndividualChatScreen, ChatsScreen } from '../screens';

const ChatStack = createNativeStackNavigator();

const MyChat = () => {
  return (
    <ChatStack.Navigator
        initialRouteName='Chats'
        
    >
        <ChatStack.Screen options={{headerShown: false}} name='Chats' component={ChatsScreen} />
        <ChatStack.Screen options={{headerShown: false}}  name='ChatsDetail' component={IndividualChatScreen} />
    </ChatStack.Navigator>
  )
}

export default MyChat;


