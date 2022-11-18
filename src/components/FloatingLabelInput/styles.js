import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { fonts, colors } from "../../themes/constant";

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 18,
        backgroundColor: colors.WHITE,
        width: '100%',
        borderWidth: 1
    },
    labelStyle: {
        position: 'absolute',
        left: 10,
    },
    labelStyle: {
        position: 'absolute',
        left: 10,
    },
    textInput: {
        ...fonts.P1,
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent',
        marginLeft: 10,
        width: '85%',
    },
    focusedTextInput: {
        borderBottomColor: 'transparent'
    },
    selectionColor: 'red',
    errorTextStyle: {
        ...fonts.SMALL,
        marginLeft: 12,
        marginRight: 5,
        color: colors.RED,
        marginTop: 4
    }
})

export default styles;