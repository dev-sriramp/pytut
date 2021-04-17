import React from 'react';
import {StyleSheet,View,Text,StatusBar,SafeAreaView,Linking,} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import LottieView from 'lottie-react-native';
import {APP_WHITE,APP_PRIMARY_COLOR , HP,WP} from '../util/constants';
const HomeScreen = ({navigation}) => {
    const noInternet = () => {
        NetInfo.addEventListener(state => {
            if (state.isConnected == true) { navigation.navigate('LandScreen'); }
            else {
                navigation.navigate('NoInternet');
            }
        })
    };
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
                <LottieView onStartShouldSetResponder={noInternet}
                    source={require('../assets/Python.json')}
                    loop={true}
                    autoPlay={true}
                    progress={10000}
                    style={styles.splash}
                />
               
            </View>
        </SafeAreaView>
    );
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
