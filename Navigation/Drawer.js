import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import HomeScreen from './../Screens/HomeScreen';
import AccountScreen from './../Screens/AccountScreen';
import {Button} from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Sign out" component={LogOut} />
    </Drawer.Navigator>
  );
}
function LogOut() {
  return <Button title="Sign out" onPress={signOut} />;
}
export default MyDrawer;

/*<Button title="Sign out" onPress={signOut} />*/
