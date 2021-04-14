import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';
const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
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
    },
    header: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
