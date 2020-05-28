/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppSlider from './AppSlider';
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppSlider);
