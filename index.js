/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import App from './src/root/App';
import Start from './src/root';

AppRegistry.registerComponent(appName, () => Start);
