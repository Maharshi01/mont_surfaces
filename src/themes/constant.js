import {StyleSheet} from 'react-native';

export const colors = {
    PRIMARY: "#0050BB",
    PRIMARY_STRING: "#E65F24",
    // text
    TEXT_PRIMARY: "#303035",
    TEXT_SECONDARY: "#999999",
    TEXT_TERTIARY: "#CCCCCC",
    LIGHT_GRAY: "#F2F2F2",
    // background
    BACKGROUND_WHITE: "white",
    BACKGROUND_CARD: "#F3F4F6",
    BACKGROUND_CARD_2: "#FAFAFA",
    BACKGROUND_SEASHELL: "#FFF3E6",
    BACKGROUND_SEASHELL_DARK: "#FFEDDC",
    BACKGROUND_ATHENS_GRAY: "#E6E7EB",
    BACKGROUND_PRIMARY_LIGHT: '#fceee1',
    BACKGROUND_PRIMARY_LIGHTER: '#FFF8F2',
    BACKGROUND_DIVIDER_COLOR: '#F2F2F2',
    // errors
    ERROR: "#FF6363",
    // other
    GRADIENT_PRIMARY: {
        "start": {x: 0, y: 0},
        "end": {x: 1, y: 0},
        "colors": ['#FAA61A', '#E65F24'],
        "locations": [-2.4, 103.54]
    },
    GRADIENT_DISABLED: {
        "colors": ['#B40079', '#B40079'],
    },
    GRADIENT_DISABLED_NEW :{
      "colors": ['#CCCCCC', '#CCCCCC'],
    },

    TEXT_LABEL: "#4C4C4C",

    GREEN: "#219653",
    GREEN_2: "#00B4AC",
    GREEN_3: "#27AE60",
    WHITE: "white",
    IRON: "#DEDFE3",
    GRAY: "#999999",
    GRAY_2: "#E7E7E7",
    GRAY_3: "#ABABAB",
    TRANSPARENT: 'rgba(0, 0, 0, 0.0)',
    BLACK: 'black',
    SMOKE_GRAY: '#CDCDCD',
    RED: "#F62929",
    INPUT_HEADER:"#2C2C2C",
    MAIN_HEADER:"#2E2E2E",
    TITLE_HEADER:"#363436"
};

export const FONT_FAMILY = "Inter-Medium"
export const FONT_FAMILY_REGULAR = "Inter-Regular"
export const FONT_FAMILY_LITE = "Inter-Light"
export const FONT_FAMILY_BOLD = "Inter-Bold"

export const view = StyleSheet.create({
    LINE: {
        backgroundColor: colors.BACKGROUND_CARD,
        height: 0.4,
    }
})


export const fonts = StyleSheet.create({
    T1: {
        fontFamily: FONT_FAMILY,
        fontSize: 18,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    T1_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 18,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    T1_PRIMARY: {
        fontFamily: FONT_FAMILY,
        fontSize: 18,
        lineHeight: 23,
        color: colors.PRIMARY,
        backgroundColor: 'transparent'
    },
    T1_SEMI_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 18,
        lineHeight: 23,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    H1: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    H1_LIGHT: {
        fontFamily: FONT_FAMILY_LITE,
        fontSize: 16,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    H1_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 16,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent',
        fontWeight: '600'
    },
    H1_SEMI_BOLD: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        fontWeight: '500',
        backgroundColor: 'transparent'
    },
    H3_SEMI_BOLD: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 21,
        color: colors.TEXT_PRIMARY,
        fontWeight: '500',
        backgroundColor: 'transparent'
    },
    H2: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    H2_SHADED: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_SECONDARY,
        backgroundColor: 'transparent'
    },
    P1: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    P1_SEMI_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 14,
        lineHeight: 18,
        color: colors.TEXT_PRIMARY,
        fontWeight: '500',
        backgroundColor: 'transparent'
    },
    P1_UPPER_GREEN: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 18,
        color: colors.GREEN,
        backgroundColor: 'transparent'
    },
    P2: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },

    P2_SEMI_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 13,
        lineHeight: 17,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    P2_ERROR: {
        fontFamily: FONT_FAMILY,
        fontSize: 13,
        lineHeight: 17,
        color: colors.ERROR,
        backgroundColor: 'transparent'
    },
    SMALL: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        lineHeight: 15,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    SMALL_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 12,
        lineHeight: 15,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    MEDIUM: {
        fontFamily: FONT_FAMILY,
        fontSize: 15,
        lineHeight: 19,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T1: {
        fontFamily: FONT_FAMILY,
        fontSize: 36,
        lineHeight: 46,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T2: {
        fontFamily: FONT_FAMILY,
        fontSize: 24,
        lineHeight: 31,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },
    BIG_T2_BOLD: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 25,
        lineHeight: 31,
        color: colors.TEXT_PRIMARY,
        backgroundColor: 'transparent'
    },

    NOTE: {
        fontFamily: FONT_FAMILY,
        fontSize: 12,
        lineHeight: 21,
        color: colors.TEXT_SECONDARY,
        backgroundColor: 'transparent'
    }
})

export const borders = StyleSheet.create({
    BORDER_1: {
        borderWidth: 0.5,
        borderColor: colors.TEXT_TERTIARY
    },
    BORDER_2_BOTTOM: {
        borderBottomWidth: 1,
        borderColor: colors.TEXT_TERTIARY
    }
})

export const shadow = StyleSheet.create({
    card_0: {
        // box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
        backgroundColor: colors.WHITE,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 0,
        shadowOpacity: 0,
        elevation: 0
    },
    card: {
        // box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);
        backgroundColor: colors.WHITE,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 15,
        shadowOpacity: 0.15,
        elevation: 15
    },
    card_2: {
        // box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        // border-radius: 10px;
        backgroundColor: colors.WHITE,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 3,
        shadowOpacity: 0.15,
        elevation: 5
    },
    card_3: {
        // box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        backgroundColor: colors.WHITE,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 3,
        shadowOpacity: 0.25,
        elevation: 5
    },
    topSh1: {
        // box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
        backgroundColor: colors.WHITE,
        shadowColor: "#000000",
        shadowRadius: 7,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        elevation: 5,
        shadowOpacity: 0.1,
    },
})
