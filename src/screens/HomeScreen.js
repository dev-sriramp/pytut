import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import {APP_WHITE,APP_PRIMARY_COLOR} from '../util/constants';
const HomeScreen = ({navigation}) => {
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
                <Text onStartShouldSetResponder={() => navigation.navigate('LandScreen')}
                style={styles.text}>Miniature</Text>
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
