import { Animated, Easing, Platform } from 'react-native';
import { HeaderStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';

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

export const StackAnimation = isAndroid ? StackAndroid : TransitionPresets.SlideFromRightIOS;
