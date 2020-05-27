import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import image1 from './../../Image/1.jpg';
import image2 from './../../Image/2.jpg';
import image3 from './../../Image/3.jpg';

const slides = [
  {
    key: '1',
    title: 'Hello All',
    text: 'Say something cool',
    image: image1,
    backgroundColor: '#59b2ab',
  },
  {
    key: '2',
    title: ' Be Cool',
    text: 'Other cool stuff',
    image: image2,
    backgroundColor: '#febe29',
  },
  {
    key: '3',
    title: 'Let us Start',
    text: 'We are already cool!',
    image: image3,
    backgroundColor: '#22bcb5',
  },
];

const SliderScreen = props => {
  onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showSlides: false});
  };

  return (
    <AppIntroSlider
      showSkipButton
      renderItem={this.renderItem}
      slides={slides}
      onDone={this.onDone}
    />
  );
};
export default SliderScreen;
