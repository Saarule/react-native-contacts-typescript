import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import ContactsScreen from './screens/ContactsScreen';
import InfoScreen from './screens/InfoScreen';


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Screen name="Details" component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const Stack = createStackNavigator();