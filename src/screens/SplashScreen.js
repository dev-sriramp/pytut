import React from 'react';
import {StyleSheet,View,SafeAreaView, StatusBar} from 'react-native';
import {APP_WHITE } from '../util/constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
    return (

    <SafeAreaView style={styles.container}>
    <StatusBar 
    barStyle="dark-content"
    hidden={false}
    backgroundColor={APP_WHITE}
    translucent={false}
    networkActivityIndicatorVisible={true}
    />
    <View style={styles.header}>
        <LottieView 
        source={require('../assets/Splash.json')}
        loop={false}
        autoPlay={true}
        progress={1}
        style={styles.splash}
        />
    </View>
</SafeAreaView>
    );
};

export default SplashScreen;

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor:APP_WHITE,
        },
        header: {
            paddingTop:hp('30%'),
            paddingBottom: hp('30%'),
        },
        splash: {
            height: hp('40%'),
            width: wp('40%'),
            paddingLeft: wp('10%')
        },
    });