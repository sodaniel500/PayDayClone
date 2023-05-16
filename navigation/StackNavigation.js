import React from "react";
import { createStackNavigator } from "@react-navigation/native-stack";
import OnboardScreen from "../Screens/OnboardScreen";

const MainStack = createStackNavigator();

const StackNavigation = () => {

    return (
        <MainStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={"OnboardScreen"}
        >
            <MainStack.Screen name='OnboardScreen' component={OnboardScreen} />
            {/* <MainStack.Screen name='Home' component={TestRedux} /> */}
            {/* <MainStack.Screen name='Blog' component={Blog} /> */}
        </MainStack.Navigator>
    )
}

export default StackNavigation