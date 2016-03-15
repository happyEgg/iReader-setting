'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  Dimensions,
  Animated,
} from 'react-native';


var deviceWidth = Dimensions.get('window').width;

// 上边栏
export default class TopBar extends Component {
  state = {
    toolbar:{
      flex: 1,
      position: 'absolute',
      top: new Animated.Value(-44),
      left: 0,
      right: 0,
      height:44,
    },
    top:true,
  };

  touchHiddenTabbar() {
    if (this.state.top) {
    this.state.top = false ,
      Animated.timing(
        this.state.toolbar.top,
        {
          toValue: 0,
          duration: 200,
        },
      ).start();
    } else {
        this.state.top = true;
      Animated.timing(
        this.state.toolbar.top,
        {
          toValue: -44,
          duration: 200,
        },
      ).start();
    }
  }
   render() {

       return (
         <Animated.View style={this.state.toolbar}>
           <Image
                resizeMode={Image.resizeMode.stretch}
                style={{width: deviceWidth,height:40,flexDirection:'row'}}
                source={require('../../../resources/images/title_back.png')}>

               <TouchableHighlight style={styles.fanhui} underlayColor = 'transparent'>
                 <Image
                    style={styles.imageContain}
                    source={require('../../../resources/images/fanhui.png')}/>
               </TouchableHighlight>

              <ToolTouch />
           </Image>
         </Animated.View>
       );
   }
}

//    上边栏
class  ToolTouch extends Component {
  render() {
    return (
      <View style={styles.rightView}>
        <TouchableHighlight  underlayColor = 'transparent'>
          <Image
            style={[styles.imageContain,styles.marginTop]}
            source={require('../../../resources/images/bokreading_icon_bokclub.png')}/>
        </TouchableHighlight>
        <TouchableHighlight  underlayColor = 'transparent'>
          <Image
            style={[styles.imageContain,styles.marginTop]}
            source={require('../../../resources/images/autoread.png')}/>
        </TouchableHighlight>
        <TouchableHighlight  underlayColor = 'transparent'>
          <Image
            style={[styles.imageContain,styles.marginTop]}
            source={require('../../../resources/images/bookmark.png')}/>
        </TouchableHighlight>
        <TouchableHighlight  underlayColor = 'transparent'>
          <Image
            style={[styles.imageContain,styles.marginTop]}
            source={require('../../../resources/images/gengduo.png')}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    rightView: {
        position: 'absolute',
        justifyContent: 'space-around',
        flexDirection: 'row',
        left: deviceWidth/2,
        width: deviceWidth/2,
        height: 40,
    },
    imageContain: {
        resizeMode: Image.resizeMode.container,
    },
    marginTop: {
        marginTop: 10,
    },
    fanhui: {
        width:20,
        height:40,
        marginTop: 10,
        marginLeft: 10,
    },
});
