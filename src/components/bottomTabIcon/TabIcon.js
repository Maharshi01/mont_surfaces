import React from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { colors } from '../../themes/constant';

const TabIcon = props => {
  return (
    <View>
      <Image
        tintColor={props.focused ? colors.PRIMARY : colors.ICON_INACTIVE}
        source={props.imgUrl}
        style={{
          width: 22,
          height: 22,
          tintColor: props.focused ? colors.PRIMARY : colors.ICON_INACTIVE,
          resizeMode: 'stretch',
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({});

const Actions = {};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(Actions, dispatch)};
};
export default connect(mapStateToProps, mapDispatchToProps)(TabIcon);
