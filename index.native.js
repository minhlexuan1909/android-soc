/**
 * @format
 */

import {AppRegistry} from 'react-native';
import './src/modules/app/androidRoutes.ts';
import './src/modules/app/androidBottomTabRoutes.ts';
import App from './src/modules/app/components/App.native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
