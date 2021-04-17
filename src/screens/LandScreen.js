import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { HP , WP} from '../util/constants';
import SplashScreen from './SplashScreen';


const LandScreen = () => {
  const LoadingIndicatorView = () => {
    return <SplashScreen/>
  };

  return (
          <WebView
          renderLoading={LoadingIndicatorView}
      originWhitelist={['*']}
      source={{ uri: 'https://cscircles.cemc.uwaterloo.ca/visualize', }}
      // style={{width:WP('210%'), height:HP('210%') }}
           startInLoadingState={true}
           scalesPageToFit={false}
      
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