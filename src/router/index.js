import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, GetStarted, SignIn, SignUp, UploadPhoto, Doctor, Messages, Hospital } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName="Doctor" tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Doctor" component={Doctor} options={{ headerShown: false }} />
            <Tab.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
            <Tab.Screen name="Hospital" component={Hospital} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;