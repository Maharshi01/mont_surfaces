
import { Platform, StyleSheet, } from 'react-native';
import { colors, fonts } from '../../../themes/constant';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    loginLogo: {
        marginTop: 30,
        marginStart: 20,
        marginEnd: 20,
        alignSelf: 'center',
    },
    titleTextContainer: {
        ...fonts.BIG_T2_BOLD,
        marginTop: 48,
        alignSelf: 'center',
        color: colors.BLACK,
        fontSize: 24,
        fontWeight: '600'
    },
    subTitleContainer: {
        alignSelf: 'center',
        marginTop: 22,
        justifyContent: 'center',
        textAlign: 'center',
        width: '90%'
    },
    buttonLoginContainer: {
        width: '90%',
        marginBottom: 30
    },
    cancelTouchableStyle: {
        marginTop: 10,
        alignSelf: 'center'
    },
    cancelTextStyle: {
        ...fonts.H1_BOLD,
        color: colors.PRIMARY
    }
});


export default styles;