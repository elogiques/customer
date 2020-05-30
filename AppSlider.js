import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-community/async-storage';

import App from './App';

import Icon from 'react-native-vector-icons/MaterialIcons';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./Image/1.jpg'),
    backgroundColor: '#59b2ab',
    index: 0,
  },
  {
    key: 2,
    index: 1,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./Image/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    index: 1,
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./Image/3.jpg'),
    backgroundColor: '#22bcb5',
  },
];

export default class AppSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="arrow-forward" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="check" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };
  _onDone = () => {
    AsyncStorage.getItem('user_id').then(value =>
      props.navigation.navigate(
        value === null ? 'Auth' : 'DrawerNavigationRoutes',
      ),
    );

    this.setState({showRealApp: true});
  };

  render() {
    if (this.state.showRealApp == false) {
      return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            renderItem={this._renderItem}
            data={slides}
            onDone={this._onDone}
          />
        </View>
      );
    } else {
      return <App />;
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  buttonCircle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
