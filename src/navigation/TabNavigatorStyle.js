import { Platform, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors, fonts } from '../themes/constant';

const styles = StyleSheet.create({
  activeTabLabel: {
    ...fonts.SMALL_REGULAR,
    color: colors.PRIMARY,
    bottom: Platform.OS === 'android' ? 8 : 0
  },
  inactiveTabLabel: { 
    ...fonts.SMALL_REGULAR,
    color: colors.ICON_INACTIVE,
    bottom: Platform.OS === 'android' ? 8 : 0
  },
  drawerHeaderStyle: {
    backgroundColor: colors.WHITE,
    height: Platform.OS=='ios'? 100:50,
  }
});

export default styles;