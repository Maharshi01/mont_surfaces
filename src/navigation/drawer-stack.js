import React from 'react';
import {Dimensions, Button, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabStackScreen from './bottom-tab-stack';
import {Colors} from '../themes/style';
import CustomDrawerContent from '../components/customDrawerContent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SampleAction from '../redux/actions/sample';
import TabNavigatorStyle from './TabNavigatorStyle';

const {width} = Dimensions.get('window');

const DrawerStack = props => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
      }}
      drawerContent={props => (
        <CustomDrawerContent {...props} />
      )}>
      <Drawer.Screen
        name="DashBoardHome"
        component={BottomTabStackScreen}
        options={{
          headerTitle: props => <Text>Hello World!!</Text>,
          headerStyle: TabNavigatorStyle.drawerHeaderStyle,
          headerTintColor: Colors.light,
          headerTitleAlign: 'center',
          drawerStyle: {
            width: width - 30,
          },
          headerRight: () => (
            <Button 
              onPress={()=>{
                props.navigation.navigate('Profile', {})
              }}
              title={"Profile"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const mapStateToProps = state => ({});

const Actions = {
  ...SampleAction,
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerStack);

