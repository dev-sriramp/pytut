import React from 'react';
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
