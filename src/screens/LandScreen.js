import React from 'react';
import { WebView } from 'react-native-webview';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SplashScreen from './SplashScreen';


const LandScreen = () => {
  const LoadingIndicatorView = () => {
    return <SplashScreen/>
  };

  return (
          <WebView
          renderLoading={LoadingIndicatorView}
      originWhitelist={['*']}
      source={{ uri: 'http://pythontutor.com/', }}
      style={{width:wp('210%'), height:hp('210%') }}
        
           startInLoadingState={true}
           scalesPageToFit={true}
      
          />
  );
};
export default LandScreen;
const styles = StyleSheet.create(
  {
    ActivityIndicatorStyle: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

    },
  });