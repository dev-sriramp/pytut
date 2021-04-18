import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LandScreen from '../screens/LandScreen';
import NoInternet from '../screens/NoInternet'

const Stack = createStackNavigator();

const MyNavigator = () => {
    const [splashScreen,setShowSplash] = React.useState(true);
    React.useEffect(() => {
        setTimeout(async () =>{
            setShowSplash(false);
        },3000);
    },[]);
if(splashScreen){
    return <SplashScreen />;
}
return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LandScreen" component={LandScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="NoInternet" component={NoInternet} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyNavigator;



