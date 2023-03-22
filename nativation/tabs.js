import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../components/TabIcon';
import {
    ChatsScreen,
    DiscoverScreen,
    ProfileScreen,
    SearchScreen
  } from '../screens';
import * as images  from '../assets/images';


import MyChat from './chat';
import MyDiscover from './discover';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Chats'
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    borderTopColor: "transparent",
                    height: 90,
                }
            }}
        >
            <Tab.Screen 
                name="Discover" 
                component={MyDiscover}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon icon={images.homeIcon} focused={focused} />
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon icon={images.searchIcon} focused={focused} />
                    )
                }}
            />
            <Tab.Screen 
                name="MyDiscover" 
                component={MyDiscover} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({}) => (
                        <TabIcon 
                            center={true}
                            icon={images.plusIcon} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="MyChat" 
                component={MyChat} 
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon icon={images.chatIcon} focused={focused} />
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            icon={images.personIcon} 
                            focused={focused}
                            extraStyle={
                                {
                                    width: 16
                                }
                            }
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;