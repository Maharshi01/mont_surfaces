import React from 'react';
import { View, TouchableOpacity, Image, Text, Animated, Easing, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { defaultHeader } from '../utils/navigation'
import { StackAnimation } from '../utils/navigation/animations';
import ScreenName from './screenNames';
import { Screens } from '../constants';
import DrawerStack from './drawer-stack';


export const LoginStack = () => {
  const LoginStack = createStackNavigator();
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        ...defaultHeader,
        ...StackAnimation
      }}>
      <LoginStack.Screen
        name={Screens.LOGIN}
        component={ScreenName.Login}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name={Screens.FORGOT_PASSWORD}
        component={ScreenName.ForgotPassword}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name={Screens.RESET_PASSWORD}
        component={ScreenName.ResetPassword}
        options={{ headerShown: false }}
      />
    </LoginStack.Navigator>
  );
};

export const MainStack = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        ...defaultHeader,
        ...StackAnimation
      }}>
      <MainStack.Screen
        name={Screens.DRAWER_STACK}
        component={DrawerStack}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={Screens.PROFILE}
        component={ScreenName.Profile}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

