import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../constants';
import { LoginStack } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthStack.Navigator
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'white' },
        }}>
        <AuthStack.Screen name={Screens.LOGINSTACK} component={LoginStack} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
}
