'use strict';

import React, {
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
  Alert,
  NativeModules
} from 'react-native';

var {SystemBrightness} = NativeModules;


var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var Slider = require('react-native-slider');
//var RNFS = require('react-native-fs');
import TopBar from './TopBar.js';

var PAGES = 2;

var textData = "湖边的柳枝又泛起了新绿原野上春天的脚步是那么的轻盈迎面的柔风轻轻吹起我的长发，我的裙角，在缥缈的烟波里，我又听见春天的歌谣了。\n"+
"这颗驿动的心，倾听着潺潺的溪涧流水，扶摇着疏疏的林影风华，于脉脉含情的山水中静静等待着与春日邂逅。\n" +
"在冬天的背后，我一直守在梅花的一地落英上，翘首盼望着春天的绰约身影，期待着春天早日踩着雪花的翩然袅娜而来。真的无法诉说自己对春天是如何的眷恋，我只知道，不管在哪一年、哪一季、哪一天，每一个梦里，我都想辗转流连在有莺歌燕舞、有桃花盛开的地方。\n" +
"纵然四周叶飘零、花凋谢，景萧条，我的心中始终载着一片桃源，装着满园春色。当万物在冬季里瘦成寂寞的背影时，我依然会选择在旧日的春光里把盏、宿醉。我会依着春天的窗棂，遥看蝴蝶双飞，飞舞一簇嫣然；遥看百花摇曳，飘落一地诗情。每一个季节深处，一定都有我对春天的呢喃；每一个通往春天的路上，一定都有我寄给春天的情书。\n"+
"吹一支柳笛，拥一份清欢，于青山绿水间，等待着在春风里，听风、听雨，任心在昨日春天的每一个角落里逗留、游走，我常美美地遐想“烟水初销见万家，东风吹柳万条斜”，“春水碧于天，隔船听雨眠”，“夜来风雨声，花落知多少”，“杨柳弄春柔，花径暗香流”……\n你好吗？哈哈哈“”";

const textData1 = "立于蒹葭之畔，许遇见如诗，把深藏了一冬天对春的思念，安放在冰雪融化的地方，撷一缕梅的幽香，怀一抹雪的纯洁，等着春天送柳信，等着春天展风情，等着处处闻啼鸟，等着桃花朵朵开。"+
"谁说春天遥远？烟花三月，花间踏春，哪怕春天不语，我也懂得她的情深。" +
"风过处，弦音轻送。不必寻觅，披一件春天留给我的衣裳，戴一顶春天留给我的花帽，晓寒处，我的心早已与春天相逢……";

var changeFontSize = 14;
var lineSpaceSize = changeFontSize+6;
import DeviceBattery from 'react-native-device-battery';

export default class SettingFont extends Component{
    state = {
        show: false,
        backColor: '#B9AC8C',
        battery: {
            level: 1,
        },
    };

    onChange(){
        this.setState({
            changeFontSize: changeFontSize,
            lineSpaceSize: lineSpaceSize,
            backColor: this.state.backColor,

        })
    }

    onChangeBackColor(color){
        this.setState(
            Object.assign({}, this.state, {backColor: color})
        )
    }

    componentWillMount(){

        // 作为一个监听对象
        var onBatteryStateChanged = (state) => {
            this.state.battery = state;
            this.setState(Object.assign({}, this.state));
        };

        // 加入到电量监听机制
        DeviceBattery.addListener(onBatteryStateChanged);

        // 移除电量实时监听机制
        // DeviceBattery.removeListener(onBatteryStateChanged);

        //NativeModules.setBrightness(0.5)
    }

    touchHiddenSetting(){
        var bottomBar = this.refs.bottomBar;
        var topBar = this.refs.topBar;
        if(this.state.show){
            topBar.touchHiddenTabbar();
            bottomBar.touchHiddenSetting();
        }else{
            topBar.touchHiddenTabbar();
            bottomBar.touchHiddenSetting();
        }
        this.state.show = !this.state.show;
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={this.touchHiddenSetting.bind(this)} activeOpacity={1} style={{flex:1, backgroundColor: this.state.backColor}}>
                <ScrollView horizontal={true} style={{flex: 1}}>
                    <View style={{flex: 1, height: Dimensions.get('window').height, width: deviceWidth}}>
                        <Text style={{fontSize: changeFontSize, lineHeight: lineSpaceSize, justifyContent: 'center'}}>
                          {textData}
                        </Text>
                        <Text style={{fontSize: 14, lineHeight: 15, justifyContent: 'center'}}>
                          iiii{'\n'}llll{'\n'}ooooThis is my textStyle,Do you care?{'\n'}
                        </Text>
                    </View>
                </ScrollView>
                <View style={{flex: 1,flexDirection: 'row',position: 'absolute', right: 0, left: 10, bottom: 0, height: 20, backgroundColor: this.state.backColor, alignItems: 'center'}}>
                    <Image
                        style={{width: 16, height: 10}}
                        source={require('../../../resources/images/softmode_marks_power.png')}/>

                    <View style={[styles.batteryView, {width: this.state.battery.level*15}]} />
                </View>

                </TouchableOpacity>

                <TopBar ref={'topBar'} />

                <Setting ref={'bottomBar'} changeFont={this.onChange.bind(this)} changColor={this.onChangeBackColor.bind(this)}/>
            </View>
        );
    }
}

class Setting extends Component{
    state = {
        style: {
            bottom: new Animated.Value(-183),
            height: 183,
            left: 0,
            right:0,
            position: 'absolute',
            flex: 1,
        },
        bottom: true,
        page: 0,
        animationsAreEnabled: true,
        progress: {
            position: 0,
            offset: 0,
        },
    };

    onPageSelected(e){
        this.setState({page: e.nativeEvent.position});
    }

    onPageScroll(e){
        this.setState({progress: e.nativeEvent});
    }

    move(delta){
        var page = this.state.page + delta;
        this.go(page);
    }

    go(page){
        if(this.state.animationsAreEnabled){
            this.viewPager.setPage(page);
        }else{
            this.viewPager.setPageWithoutAnimation(page);
        }
        this.setState({page});
    }

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
                    toValue: -183,
                    duration: 200,
                },
            ).start();
        }
    }
//#1C1918
    render(){
        var { page, animationsAreEnabled } = this.state;
        return(
            <Animated.View style={this.state.style}>
            <View style={{flex: 1}}>
                <ViewPagerAndroid
                    style={{flex: 1, position: 'absolute',height: 183,left: 0, right: 0, bottom: 0,backgroundColor: '#1C1918', alignItems: 'center'}}
                    ref={viewPager => {this.viewPager = viewPager}}
                    onPageScroll={this.onPageScroll.bind(this)}
                    onPageSelected={this.onPageSelected.bind(this)}
                    initialPage={0}>
                    <View>
                        <FirstPage changeFont={this.props.changeFont} changColor={this.props.changColor}/>
                    </View>
                    <View>
                        <SecondPage />
                    </View>
                </ViewPagerAndroid>

                <View style = { [styles.dotView1, { opacity : page == 0 ? 1 : 0.2 }] } />
                <View style = { [styles.dotView2 , { opacity : page == 1 ? 1 : 0.2 }] }/>
            </View>
            </Animated.View>
        );
    }
}

class FirstPage extends Component{
    state = {
        value: 0,

        //背景图片默认选择
        backColorSelect: 3,
        backColor1: require('../../../resources/images/reading_bg_default.png'),
        backColor2: require('../../../resources/images/reading_bg_eye.png'),
        backColor3: require('../../../resources/images/reading_bg_kraft_select.png'),
        backColor4: require('../../../resources/images/reading_bg_4.png'),
        backColor5: require('../../../resources/images/reading_bg_5.png'),
        backColor6: require('../../../resources/images/reading_bg_soft.png'),
        backColor7: require('../../../resources/images/rukou_moren.png'),

        //文字间距默认选择
        rowSpaceSelect: 2,
        rowSpace1: require('../../../resources/images/liner_space_0_2.png'),
        rowSpace2: require('../../../resources/images/liner_space_default_checked.png'),
        rowSpace3: require('../../../resources/images/liner_space_1.png'),
        rowSpace4: require('../../../resources/images/liner_space_1_5.png'),
        rowSpace5: 'gray',

        //系统亮度默认选择
        brightSelect: 2,
        brightSelectColor: 'orange',

    };

    render() {
        return(
            <View>
                <View style={{width: deviceWidth,height: 40, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../../../resources/images/brightness_smallsun_2x.png')}/>
                    </View>
                    <View style={{width: deviceWidth-160,height: 40, alignItems: 'stretch', justifyContent:'center'}}>
                        <Slider
                            minimumTrackTintColor="orange"
                            thumbTintColor="white"
                            trackStyle={{height: 2}}
                            value={this.state.value}
                            onValueChange={(value) => this.setState({value})} />
                    </View>
                    <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../../../resources/images/brightness_bigsun_2x.png')}/>
                    </View>
                    <View style={{width: 80, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={{width: 60,height: 20,alignItems: 'center',justifyContent:'center',borderWidth: 1, borderColor: this.state.brightSelectColor}}>
                            <Text style={{fontSize: 11,color: 'gray'}}>跟随系统</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{width: deviceWidth, height: 1, backgroundColor: 'gray'}}></View>


                {/*字体大小的设置*/}
                <View style={{flex: 1, flexDirection: 'row', height: 40, width: deviceWidth,alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={{width: deviceWidth*2/5,height: 20,alignItems: 'center',justifyContent:'center',borderWidth: 1, borderColor: 'gray'}}
                        onPress={this.fontSizeSmall.bind(this)}>
                        <Image style={{width: 30, height: 20}} source={require('../../../resources/images/read_typeface_decrease.png')}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={{width: deviceWidth*2/5,height: 20,alignItems: 'center',justifyContent:'center',borderWidth: 1, borderColor: 'gray'}}
                        onPress={this.fontSizeBig.bind(this)}>
                        <Image style={{width: 30, height: 20}} source={require('../../../resources/images/read_typeface_increase.png')}/>
                    </TouchableHighlight>
                </View>

                <View style={{width: deviceWidth, height: 1, backgroundColor: 'gray'}}></View>


                {/*行间距的设置*/}
                <View style={{flex: 1,flexDirection: 'row', height: 40, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', width: deviceWidth*3/5, height: 40, alignItems: 'center', justifyContent:'space-between'}}>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={styles.touchContainer}
                            onPress={this.changeLineSpace.bind(this, 4)}>
                            <Image style={{width: 30, height: 30}} source={this.state.rowSpace1}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={styles.touchContainer}
                            onPress={this.changeLineSpace.bind(this, 6)}>
                            <Image style={{width: 30, height: 30}} source={this.state.rowSpace2}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={styles.touchContainer}
                            onPress={this.changeLineSpace.bind(this, 10)}>
                            <Image style={{width: 30, height: 30}} source={this.state.rowSpace3}/>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={styles.touchContainer}
                            onPress={this.changeLineSpace.bind(this, 12)}>
                            <Image style={{width: 30, height: 30}} source={this.state.rowSpace4}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{position: 'absolute', right: 10,width: deviceWidth/5,top: 10, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableHighlight
                            underlayColor={'transparent'}
                            style={{flex: 1, alignItems:'center', marginRight: 10,width: deviceWidth/5, height: 20,justifyContent: 'center', borderWidth: 1, borderColor:this.state.rowSpace5}}
                            onPress={this.changeLineSpace.bind(this, 14)}>
                            <Text style={{fontSize: 11,  color: 'gray'}}>自定义</Text>
                        </TouchableHighlight>
                    </View>
                </View>


                <View style={{width: deviceWidth, height: 1, backgroundColor: 'gray'}}></View>

                <View style={{flex: 1,flexDirection: 'row', height: 40, width: deviceWidth, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 1)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor1}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 2)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor2}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 3)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor3}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 4)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor4}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 5)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor5}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 6)}>
                    <Image style={{width: 30, height: 30}} source={this.state.backColor6}/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.touchContainer}
                        onPress={this.changeBackColor.bind(this, 7)}>
                        <Image style={{width: 30, height: 30}} source={this.state.backColor7}/>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }

    fontSizeSmall(){
        if(changeFontSize > 10){
            changeFontSize--;
            lineSpaceSize--;
            this.props.changeFont();
        }
    }

    fontSizeBig(){
        if(changeFontSize < 20){
            changeFontSize++;
            lineSpaceSize++;
            this.props.changeFont();
        }
    }

    changeLineSpace(position){
        lineSpaceSize=changeFontSize+position;
        this.props.changeFont();

        //把之前选择的图片样式还原为以前默认的图片样式
        switch (this.state.rowSpaceSelect) {
            case 1:
                this.state.rowSpace1 = require('../../../resources/images/liner_space_0_2.png');
                break;
            case 2:
                this.state.rowSpace2 = require('../../../resources/images/liner_space_default.png');
                break;
            case 3:
                this.state.rowSpace3 = require('../../../resources/images/liner_space_1.png');
                break;
            case 4:
                this.state.rowSpace4 = require('../../../resources/images/liner_space_1_5.png');
                break;
            case 5:
                this.state.rowSpace5 = 'gray';
                break;

        }

        //更改当前选中的图片样式
        switch (position) {
            case 4:
                this.state.rowSpaceSelect = 1;
                this.state.rowSpace1 = require('../../../resources/images/liner_space_0_2_checked.png');
                break;

            case 6:
                this.state.rowSpaceSelect = 2;
                this.state.rowSpace2 = require('../../../resources/images/liner_space_default_checked.png');
                break;

            case 10:
                this.state.rowSpaceSelect = 3;
                this.state.rowSpace3 = require('../../../resources/images/liner_space_1_checekd.png');
                break;

            case 12:
                this.state.rowSpaceSelect = 4;
                this.state.rowSpace4 = require('../../../resources/images/liner_space_1_5_checked.png');
                break;

            default:
                this.state.rowSpaceSelect = 5;
                this.state.rowSpace5 = 'orange';

        }
        this.setState(Object.assign({}, this.state))
    }

    changeBackColor(expression){

        //把之前选中的样式图片还原为以前的样式图片
        switch (this.state.backColorSelect) {
            case 1:
                this.state.backColor1 = require('../../../resources/images/reading_bg_default.png');
                break;
            case 2:
                this.state.backColor2 = require('../../../resources/images/reading_bg_eye.png');
                break;
            case 3:
                this.state.backColor3 = require('../../../resources/images/reading_bg_kraft.png');
                break;
            case 4:
                this.state.backColor4 = require('../../../resources/images/reading_bg_4.png');
                break;
            case 5:
                this.state.backColor5 = require('../../../resources/images/reading_bg_5.png');
                break;
            case 6:
                this.state.backColor6 = require('../../../resources/images/reading_bg_soft.png');
                break;
            case 7:
                this.state.backColor7 = require('../../../resources/images/rukou_moren.png');
                break;
        }

        //改变当前选中的样式图片
        switch (expression) {
            case 1:
                this.props.changColor('#F3EFE6');
                this.state.backColorSelect = 1;
                this.state.backColor1 = require('../../../resources/images/reading_bg_default_select.png');
                break;

            case 2:
                this.props.changColor('#CCEBCC');
                this.state.backColorSelect = 2;
                this.state.backColor2 = require('../../../resources/images/reading_bg_eye_select.png');
                break;

            case 3:
                this.props.changColor('#B9AC8C');
                this.state.backColorSelect = 3;
                this.state.backColor3 = require('../../../resources/images/reading_bg_kraft_select.png');
                break;

            case 4:
                this.props.changColor('#383330');
                this.state.backColorSelect = 4;
                this.state.backColor4 = require('../../../resources/images/reading_bg_4_select.png');
                break;

            case 5:
                this.props.changColor('#705C61');
                this.state.backColorSelect = 5;
                this.state.backColor5 = require('../../../resources/images/reading_bg_5_select.png');
                break;

            case 6:
                this.props.changColor('#9E897C');
                this.state.backColorSelect = 6;
                this.state.backColor6 = require('../../../resources/images/reading_bg_soft_check.png');
                break;

            case 7:
                this.state.backColorSelect = 7;
                this.state.backColor7 = require('../../../resources/images/rukou_xuanzhong.png');
                break;
        }
        this.setState(Object.assign({}, this.state))

    }
}

class SecondPage extends Component{
    render(){
        return(
            <View>
                <View style={{flex: 1, flexDirection: 'row', width: deviceWidth,height:40, alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{height: 25, width: deviceWidth/4, alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12, color: 'gray'}}>进度条设置</Text>
                    </View>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.secPageStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>控制翻章</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.secPageStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>控制翻页</Text>
                    </TouchableHighlight>
                </View>

                <View style={{width: deviceWidth, height: 1, backgroundColor: 'gray'}}></View>

                <View style={{flex: 1, flexDirection: 'row', width: deviceWidth, height:40, alignItems: 'center', justifyContent: 'space-around'}}>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.secPageStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>仿真翻页</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.secPageStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>平移翻页</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={'transparent'}
                        style={styles.secPageStyle}>
                        <Text style={{fontSize: 10, color: 'gray'}}>上下翻页</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    touchContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secPageStyle: {
        height: 25,
        width: deviceWidth/4,
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'gray',
    },
    textStyle:{
        lineHeight: 20,
        fontSize: 14,
    },
    dotView1: {
        position: 'absolute',
        width: deviceWidth/40,
        height: deviceWidth/40,
        borderRadius: deviceWidth/40,
        bottom: 0,
        left: deviceWidth/2 - 6,
        backgroundColor: 'white',
        // opacity: 0,
        flexDirection: 'column',
    },
    dotView2: {
        position: 'absolute',
        width: deviceWidth/40,
        height: deviceWidth/40,
        borderRadius: deviceWidth/40,
        bottom: 0,
        left: deviceWidth/2 + 6,
        backgroundColor: 'white',
        //opacity: 0,
        flexDirection: 'column',
    },
    batteryView: {
        // flex: 1,
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 5,
        height: 9,
        backgroundColor: 'black',
    },
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
