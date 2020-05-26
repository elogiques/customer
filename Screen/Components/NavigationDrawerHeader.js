import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
const NavigationDrawerHeader = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="settings" size={25} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
