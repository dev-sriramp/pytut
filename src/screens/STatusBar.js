 import React from 'react';
import { StatusBar} from 'react-native';
import { APP_WHITE, } from '../util/constants';
const STatusBar = () =>{
return(
 <StatusBar
                    barStyle='dark-content'
                    hidden={false}
                    backgroundColor={APP_WHITE}
                    translucent={false}
                    networkActivityIndicatorVisible={true}
                />
)
}
