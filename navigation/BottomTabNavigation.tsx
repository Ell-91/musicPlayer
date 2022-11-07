import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlbumScreen from '../screens/AlbumScreen';
import TabTwoScreen from '../screens/AlbumScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={TabTwoScreen} />
        <Tab.Screen name="Library" component={SettingsScreen} />
        <Tab.Screen name="Playlist" component={SettingsScreen} />
        <Tab.Screen name="AlbumScreen" component={HomeScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}