import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardScreen from './Screens/OnboardScreen';
import JoinPayday from './Screens/auth/JoinPayday/JoinPayday';
import Login from './Screens/auth/Login/Login';
import Reset from './Screens/auth/Login/Reset';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName={"OnboardScreen"}>
        <Stack.Screen name="OnboardScreen" component={OnboardScreen}/>
        <Stack.Screen name="JoinPayday" component={JoinPayday}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Reset" component={Reset}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
