import React,{Component} from 'react';
import {StyleSheet,View,Text,StatusBar,SafeAreaView,Linking,} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import LottieView from 'lottie-react-native';
import {APP_WHITE,APP_PRIMARY_COLOR , HP,WP} from '../util/constants';

class HomeScreen extends Component{
    constructor() {
        super();
        this.state = {
            SiteName: "visualize",
        };
    };
    noInternet = siteValue => () => {
        this.setState({ siteName: siteValue });
            NetInfo.addEventListener(state => {
                if (state.isConnected == true) {
                    this.props.navigation.navigate('LandScreen', { siteName: this.state.siteName, });
                }
                else {
                    this.props.navigation.navigate('NoInternet');
                }
            })
        };
    render(){
        
    return (
        
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor={APP_WHITE}
                translucent={false}
                networkActivityIndicatorVisible={true}
            />
            <View style={styles.header}>
                <LottieView onStartShouldSetResponder={this.noInternet('visualize')}
                    source={require('../assets/Python.json')}
                    loop={true}
                    autoPlay={true}
                    progress={10000}
                    style={styles.splash}
                />
               
            </View>
        </SafeAreaView>
    );}
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_WHITE,
    },
    header: {
        height: HP('20%'),
        width: WP('20%'),
        left:WP('40%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
