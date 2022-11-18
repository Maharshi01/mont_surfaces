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
          tabBarLabel: ({ color, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.dashboard}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.dashboard}
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                tintColor={color}
                imgUrl={Images.dashboard}
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
        options={{
          tabBarLabel: ({ color, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.inventory}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.inventory}
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                tintColor={color}
                imgUrl={Images.inventory}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Opportunities"
        component={ScreenName.Opportunities}
        options={{
          tabBarLabel: ({ color, focused, item }) => {
            return focused ? (
              <Text style={TabNavigatorStyle.activeTabLabel}>
                {strings.opportunities}
              </Text>
            ) : (
              <Text style={TabNavigatorStyle.inactiveTabLabel}>
                {strings.opportunities}
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                tintColor={color}
                imgUrl={Images.opportunities}
                focused={focused}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ScreenName.Cart}
        initialParams={{ menubar: false }}
        options={{
          tabBarLabel: ({ color, focused, item }) => {
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
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabIcon
                tintColor={color}
                imgUrl={Images.cart}
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
