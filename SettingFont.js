// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';
//
// // var SeekBarAndroid = require('react-native-seekbar-android');
// var Slider = require('react-native-slider');
//
// class MyProject extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         mvalue: 0,
//         };
//     }
//   render() {
//     return (
//         <Image
//             style={{flex:1,width: 300, height: 500}}
//             source={require('./tupian-4.png')}>
//             <View style={styles.container}>
//             <Slider
//               value={this.state.mvalue}
//               onValueChange={(mvalue) => this.setState({mvalue})} />
//             <Text>Value: {this.state.mvalue}</Text>
//           </View>
//          </Image>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       marginLeft: 10,
//       marginRight: 10,
//       alignItems: 'stretch',
//       justifyContent: 'center',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


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
  Animated
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var imagePath = './resources/images/';

class SettingFont extends Component{
    state = {
        show: false,
    };

    touchHiddenSetting(){
        var bottomBar = this.refs.bottomBar;
        if(this.state.show){
            bottomBar.touchHiddenSetting(false);
        }else{
            bottomBar.touchHiddenSetting(true);
        }
        this.state.show = !this.state.show;
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={this.touchHiddenSetting.bind(this)} style={{flex: 1}} />
                <Setting ref={'bottomBar'} />
            </View>
        );
    }
}

class Content extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
            <TouchableOpacity onPress={this.props.onPress} activeOpacity={1} style={{flex:1}}>
                <Text style={{fontSize: 14, alignItems: 'center'}}>会发生地方阿道夫</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

class Setting extends Component{
    state = {
        style: {
            bottom: new Animated.Value(-160),
            height: 160,
            left: 0,
            right: 0,
            position: 'absolute',
            flex: 1,
        },
        bottom: true,
    };

    touchHiddenSetting(){
        if (this.state.bottom) {
            this.setState({
                bottom: false,
            });
            Animated.timing(
                this.state.style.bottom,
                {
                    toValue: 0,
                    duration: 200,
                },
            ).start();
        }else{
            this.setState({
                bottom: true,
            });
            Animated.timing(
                this.state.style.bottom,
                {
                    toValue: -160,
                    duration: 200,
                },
            ).start();
        }
    }

    render(){
        return(
            <Animated.View style={this.state.style}>
                <View style={{flex: 1, position: 'absolute',height: 161.5,left: 0, right: 0, bottom: 0,backgroundColor: '#2b2525', alignItems: 'center'}}>
                    <View style={{ flex: 1,flexDirection: 'row',width: screenWidth, alignItems: 'center', justifyContent: 'space-between'}}>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 33, height: 21}} source={require('./resources/images/read_typeface_decrease.png')}/>
                        </TouchableHighlight>

                        <View style={{width: 0.5, height: 40, backgroundColor: 'gray'}}></View>

                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 33, height: 21}} source={require('./resources/images/read_typeface_increase.png')}/>
                        </TouchableHighlight>
                    </View>

                    <View style={{width: screenWidth, height: 0.5, backgroundColor: 'gray'}}></View>

                    <View style={{flex: 1,width: screenWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_default.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_eye.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_kraft.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_4.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_5.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                        <Image style={{width: 30, height: 30}} source={require('./resources/images/reading_bg_soft.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/rukou_moren.png')}/>
                        </TouchableHighlight>
                    </View>

                    <View style={{width: screenWidth, height: 0.5, backgroundColor: 'gray'}}></View>

                    <View style={{flex: 1, flexDirection: 'row', width: screenWidth, alignItems: 'center', justifyContent: 'space-around'}}>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/liner_space_0_2.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/liner_space_default.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/liner_space_1.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Image style={{width: 30, height: 30}} source={require('./resources/images/liner_space_1_5.png')}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Text style={{borderWidth: 1, borderColor: 'gray',fontSize: 10, color: 'gray'}}>自定义</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{width: screenWidth, height: 0.5, backgroundColor: 'gray'}}></View>

                    <View style={{flex: 1, flexDirection: 'row',width: screenWidth, alignItems: 'center', justifyContent: 'space-around'}}>
                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Text style={{fontSize: 10, color: 'gray'}}>横屏</Text>
                        </TouchableHighlight>

                        <View style={{width: 0.5, height: 40, backgroundColor: 'gray'}}></View>

                        <TouchableHighlight
                            underlayColor={'#3a3a3a'}
                            style={styles.touchContainer}>
                            <Text style={{fontSize: 10, color: 'gray'}}>高级设置</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    touchContainer: {
        flex:1,
        height: 40,

        // borderWidth: 1,
        // borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = SettingFont;
