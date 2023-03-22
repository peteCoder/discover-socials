import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {
  ChatsScreen,
  IndividualChatScreen,
  DiscoverScreen,
  LoginScreen,
  LogoutScreen,
  PhotoOpenReelsScreen,
  ProfileScreen,
  RegisterScreen,
  RegisterNextScreen,
  SearchScreen
} from '../screens'



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './tabs';

const Stack = createNativeStackNavigator();

const AppRoot = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Logout' 
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Logout" component={LogoutScreen} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name="RegisterNext" component={RegisterNextScreen} />
        <Stack.Screen options={{headerShown: false}} name="PhotoOpenReels" component={PhotoOpenReelsScreen} />

        <Stack.Screen options={{headerShown: false}} name='Home' component={MyTabs} />

    </Stack.Navigator>
  )
}

export default AppRoot

const styles = StyleSheet.create({})