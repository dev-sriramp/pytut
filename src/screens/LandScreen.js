import React,{Component} from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet,Text ,View} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

import SplashScreen from './SplashScreen';
class LandScreen extends Component {
  constructor() {
    super();
  }
  LoadingIndicatorView = () => {
    NetInfo.addEventListener(state => {
      if (state.isConnected != true) { this.props.navigation.navigate('NoInternet'); }
      else { return <SplashScreen /> };
    }
    );
  };
render(){
 var { siteName } = this.props.route.params;
 if(siteName == undefined || siteName == ''){
   siteName = 'visualize'
 }
  const source = '<iframe src="https://www.pythontutor.com/' + '' + siteName + '' + '.html#mode=edit" width="100%" height=100%" style="border:none;"></iframe>'
  return (
          <WebView
          renderLoading={this.LoadingIndicatorView}
      originWhitelist={['*']}
      source={{ html: source }}
           startInLoadingState={true}
          scalesPageToFit={false}
         />
  );};
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