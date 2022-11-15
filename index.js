import { AppRegistry, Text} from 'react-native';
import 'react-native-gesture-handler'
import './src/utils/customLog'
import App from './src';
import {name as appName} from './app.json';

// Disable the font scaling
if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
Text.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
