import React from 'react';
import {View, TouchableOpacity, Image, Text, Animated, Easing, Platform} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HeaderStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import ScreenName from './screenNames';
import {Screens} from '../constants';
import DrawerStack from './drawer-stack';

const isAndroid = Platform.OS == 'android' ? true : false
const { multiply } = Animated;

const FadeIn = {
	animation: 'timing',
	config: {
		duration: 250,
		easing: Easing.out(Easing.poly(5))
	}
};

const FadeOut = {
	animation: 'timing',
	config: {
		duration: 150,
		easing: Easing.in(Easing.poly(5))
	}
};

const forStackAndroid = ({ current, inverted, layouts: { screen } }) => {
	const translateX = multiply(
		current.progress.interpolate({
			inputRange: [0, 1],
			outputRange: [screen.width, 0]
		}),
		inverted
	);

	const opacity = current.progress.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 1]
	});

	return {
		cardStyle: {
			opacity,
			transform: [{ translateX }]
		}
	};
};

const StackAndroid = {
	gestureDirection: 'horizontal',
	transitionSpec: {
		open: FadeIn,
		close: FadeOut
	},
	cardStyleInterpolator: forStackAndroid,
	headerStyleInterpolator: HeaderStyleInterpolators.forFade
};

const StackAnimation = isAndroid ? StackAndroid : TransitionPresets.SlideFromRightIOS;

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

export const defaultHeader = {
  headerMode: 'screen',
	headerBackTitleVisible: false,
	cardOverlayEnabled: true,
	cardStyle: { backgroundColor: 'transparent' },
  headerStyle: {backgroundColor: 'white'},
};

export const LoginStack = () => {
  const LoginStack = createNativeStackNavigator();
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        ...defaultHeader,
        // ...StackAnimation
        ...MyTransition
        // TransitionScreenOptions
      }}>
      <LoginStack.Screen
        name={Screens.LOGIN}
        component={ScreenName.Login}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name={Screens.FORGOT_PASSWORD}
        component={ScreenName.ForgotPassword}
        options={{headerShown: true}}
      />
    </LoginStack.Navigator>
  );
};

export const MainStack = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={Screens.DRAWER_STACK}
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={Screens.PROFILE}
        component={ScreenName.Profile}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

