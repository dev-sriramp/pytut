import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const SplashScreen = () => {
    return (
<View>
<Text style = {styles.header}>hi</Text>
</View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create(
    {
        header: {
            fontSize:100,
        },
    });