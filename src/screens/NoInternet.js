import React from 'react';
import {StyleSheet,View,SafeAreaView,StatusBar } from 'react-native';
import { HP, WP, APP_WHITE } from '../util/constants';
import LottieView from 'lottie-react-native';

const noInternet = () => {
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
                source={require('../assets/noInternet.json')}
                loop={true}
                autoPlay={true}
                progress={1}
                style={styles.noInternet}
            />
        </View>
    </SafeAreaView>
    );};
export default noInternet;

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: APP_WHITE,
        },
        header: {
            paddingTop: HP('30%'),
            paddingBottom: HP('30%'),
            paddingLeft:WP('20%'),
        },
        noInternet: {
            height: HP('40%'),
            width: WP('40%'),

        },
    });