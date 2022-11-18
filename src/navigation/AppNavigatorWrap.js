import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SampleAction from '../redux/actions/sample';
import { LoginStack, MainStack } from './index';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from '../constants';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { colors } from '../themes/constant';
import crashlytics from '@react-native-firebase/crashlytics';
import DeviceInfo from 'react-native-device-info';

const RootStack = createStackNavigator();

class AppNavigatorWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    this.initCrashlytics()
    this._isLoggedIn()
    SplashScreen.hide();
  }

  componentWillUnmount() { }

  async initCrashlytics() {
    await Promise.all([
      crashlytics().setCrashlyticsCollectionEnabled(true),
      DeviceInfo.getUniqueId().then((uniqueId) => {
        LogTracker.debug("Unique Device ID", uniqueId);
        crashlytics().setUserId(uniqueId)
      })
    ]);
  }

  _isLoggedIn = () => {
    let loginData = this.props.sample.loginData.token;
    return loginData;
  };

  render() {
    const navTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'white',
      },
    };
    return (
      <NavigationContainer theme={navTheme}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.PRIMARY} />
        <RootStack.Navigator
          screenOptions={{ headerShown: false, animationEnabled: false }}>
          {this._isLoggedIn() ?
            <RootStack.Screen
              name={Screens.MAINSTACK}
              component={MainStack}
            /> :
            <RootStack.Screen name={Screens.LOGINSTACK} component={LoginStack} /> }
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

//dummy methods
const mapStateToProps = state => {
  return {
    sample: state.sample,
  };
};

const Actions = {
  ...SampleAction,
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigatorWrap);
