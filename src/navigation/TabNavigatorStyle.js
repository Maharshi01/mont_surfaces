import { Platform, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from '../themes/constant';

const styles = StyleSheet.create({
  activeTabLabel: {
    fontWeight: 'normal',
    fontSize: 12,
    // bottom: Platform.OS === 'android' ? 8 : 0
    bottom: 8 
  },
  inactiveTabLabel: { 
    fontWeight: 'normal', 
    fontSize: 12, 
    color: colors.GRAY,
    // bottom: Platform.OS === 'android' ? 8 : 
    bottom: 8 
  },
  drawerHeaderStyle: {
    backgroundColor: colors.WHITE,
    // height: Platform.OS=='ios'? 100:50
    height: 100
  }
});

export default styles;