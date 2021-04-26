import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { APP_WHITE, } from '../util/constants';

class HomeScreen extends Component {
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
    render() {

        return (

            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                    hidden={false}
                    backgroundColor={APP_WHITE}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
                <ScrollView>
                    <View style={styles.header}>
                        <Image onStartShouldSetResponder={this.noInternet('visualize')}
                            style={styles.stretch}
                            source={require('../assets/PYTHON.png')}
                        />
                    </View>
                    <View style={styles.header}>
                        <Image onStartShouldSetResponder={this.noInternet('c')}
                            style={styles.stretch}
                            source={require('../assets/C.png')}
                        />

                    </View>
                    <View style={styles.header}>
                        <Image onStartShouldSetResponder={this.noInternet('java')}
                            style={styles.stretch}
                            source={require('../assets/JAVA.png')}
                        />
                    </View>
                    <View style={styles.header}>
                        <Image onStartShouldSetResponder={this.noInternet('cpp')}
                            style={styles.stretch}
                            source={require('../assets/CPP.png')}
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_WHITE,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    stretch: {
        width: 250,
        height: 250,
        resizeMode: 'stretch'
    },

});
