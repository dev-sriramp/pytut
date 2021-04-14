import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import { ContextManager } from '../components/ContextManager';
import HomeScreen from '../screens/HomeScreen';
import LandScreen from '../screens/LandScreen';

const Stack = createStackNavigator();

const MyNavigator = () => {
    const [splashScreen,setShowSplash] = React.useState(true);
    React.useEffect(() => {
        setTimeout(async () =>{
            setShowSplash(false);
        },1000);
    },[]);
if(splashScreen){
    return <SplashScreen />;
}
return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LandScreen" component={LandScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyNavigator;



