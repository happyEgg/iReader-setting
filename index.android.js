'use strict';

import React, {
    AppRegistry,
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  ToastAndroid,
  ViewPagerAndroid,
  Alert
} from 'react-native';

import SettingFont from './app/Android/Setting/SettingFont.js'

class MyProject extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <SettingFont />
            </View>
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
