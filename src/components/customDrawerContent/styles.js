import React, { Component } from 'react';
import { Platform, StyleSheet, } from 'react-native';
import { fonts, colors } from "../../themes/constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 8,
    marginEnd: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  versionNumber: {
    ...fonts.H1,
    marginLeft: 20,
    marginBottom: 10,
    color: colors.GRAY_3
  },
  headerImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  menuItem: (isSelected) => {
    return {
      flex: 1,
      paddingVertical: 16,
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: isSelected ? colors.TRANSPARENT : colors.TEXT_TERTIARY
    }
  },
  menuItemText: (isSelected) => {
    return {
      ...fonts.P1,
      fontSize: 16,
      flexGrow: 1,
      textAlignVertical: 'center',
      alignSelf: 'center',
      marginLeft: 10,
      width: "72%",
      color: isSelected ? colors.PRIMARY : colors.TEXT_PRIMARY
    }
  },
  subMenuItemText: {
    ...fonts.H1_BOLD,
    color: colors.TEXT_PRIMARY,
    paddingVertical: 16
    // fontSize: 15
  },
});

export default styles
