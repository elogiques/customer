import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Button,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loader from './../Components/loader';

import styles from './styles';

const LoginScreen = props => {
  let [Username, setUsername] = useState('');
  let [Password, setPassword] = useState('');

  const onLoginPress = () => {
    console.log('Logged in');
    props.navigation.navigate('DrawerNavigationRoutes');
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <StatusBar translucent backgroundColor="transparent" />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image source={require('./../../Image/logo.png')} />
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={onLoginPress}
              title="Login"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
