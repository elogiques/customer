/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <StatusBar backgroundColor="#ff3000" />
      <Text style={{fontSize: 23, marginTop: 10}}>Home Screen</Text>
      <Text style={{fontSize: 18, marginTop: 10}}>
        Simple Login Registraction Example
      </Text>
      <Text style={{fontSize: 18, marginTop: 10}}>https://aboutreact</Text>
    </View>
  );
};
export default HomeScreen;
