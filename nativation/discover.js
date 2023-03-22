import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen, DiscoverDetailsScreen } from '../screens';

const DiscoverStack = createNativeStackNavigator();

const MyDiscover = () => {
  return (
    <DiscoverStack.Navigator
        initialRouteName='DiscoverList'
        
    >
        <DiscoverStack.Screen options={{headerShown: false}} name='DiscoverList' component={DiscoverScreen} />
        <DiscoverStack.Screen options={{headerShown: false}}  name='DiscoverDetails' component={DiscoverDetailsScreen} />
    </DiscoverStack.Navigator>
  )
}

export default MyDiscover;