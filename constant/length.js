import { Dimensions } from 'react-native';
// import {StatusBar} from 'react-native';
import Constants from 'expo-constants';


export const windowWidth = Dimensions.get('screen').width;
export const windowHeight = Dimensions.get('screen').height;
export const statusBarHeight = Constants.statusBarHeight;