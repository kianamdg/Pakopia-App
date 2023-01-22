import React, { Component } from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { View, StyleSheet, Text, Button, Image } from 'react-native';

import Index from './components/Index';
import InputNotes from './components/InputNotes';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
     <NavigationContainer > 
      <Stack.Navigator >
        <Stack.Screen component={Index} name="Index" options={{ title: "PAKOPIA"}}/>
        <Stack.Screen component={InputNotes} name="InputNotes"
                  options={{headerRight: () => (<Image />),}}/>
      </Stack.Navigator>
     </NavigationContainer>
     
     
    );
  }
}

const styles = StyleSheet.create ({
  
})
