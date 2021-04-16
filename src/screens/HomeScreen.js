import React from 'react';
import {StyleSheet,View,Text,StatusBar,SafeAreaView,Linking,} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import {APP_WHITE,APP_PRIMARY_COLOR} from '../util/constants';
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
                <Text onStartShouldSetResponder={noInternet}
                style={styles.text}>Miniature</Text>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('http://pythontutor.com')}>
                    pythontutor
</Text>
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
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
