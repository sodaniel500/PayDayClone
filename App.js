import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardScreen from './Screens/OnboardScreen';
import InputName from './Screens/auth/JoinPayday/InputName';
import Login from './Screens/auth/Login/Login';
import Reset from './Screens/auth/Login/Reset';
import SetEmail from './Screens/auth/JoinPayday/SetEmail';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName={"OnboardScreen"}>
        <Stack.Screen name="OnboardScreen" component={OnboardScreen}/>
        <Stack.Screen name="InputName" component={InputName}/>
        <Stack.Screen name="SetEmail" component={SetEmail}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Reset" component={Reset}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
