import React from 'react';
import { Text, Dimensions, Platform } from 'react-native';
import ScreenName from './screenNames';
import { Images } from '../themes/images';
import { strings } from '../appstring/index';
import { colors } from '../themes/constant';
import TabIcon from '../components/bottomTabIcon/TabIcon';
import TabNavigatorStyle from './TabNavigatorStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
let { height } = Dimensions.get('window');

const BottomTabStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? (height > 800 ? 80 : 60) : 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ScreenName.Home}
        options={{
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.home}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.home}
              </Text>
            );
          },
          tabBarActiveTintColor: colors.BLACK,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return (
              <TabIcon
                tintColor={tintColor}
                imgUrl={Images.home}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ScreenName.Purchases}
        options={{
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.cart}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.cart}
              </Text>
            );
          },
          tabBarActiveTintColor: colors.black,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return (
              <TabIcon
                tintColor={tintColor}
                imgUrl={Images.cart}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
        initialParams={{ from: 'cart' }}
      />
      <Tab.Screen
        name="List"
        component={ScreenName.List}
        options={{
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.list}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.list}
              </Text>
            );
          },
          tabBarActiveTintColor: colors.black,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return (
              <TabIcon
                tintColor={tintColor}
                imgUrl={Images.list}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={ScreenName.Inventory}
        initialParams={{ menubar: false }}
        options={{
          tabBarLabel: ({ tintColor, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.profile}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.profile}
              </Text>
            );
          },
          tabBarActiveTintColor: colors.BLACK,
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            return (
              <TabIcon
                tintColor={tintColor}
                imgUrl={Images.user}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
