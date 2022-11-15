import { StyleSheet, } from "react-native";
import { colors } from '../../themes/constant'

const style = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
    },
    textContainer: {
        color: colors.WHITE,
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center'

    },
    gradientStyle: {
        borderRadius: 5,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        // alignSelf: "center",
    },
    normalStyle: {
        borderColor: colors.PRIMARY,
        borderWidth: 1
    },
    normalStyleText: {
        color: colors.PRIMARY,
        borderRadius: 40,
        width: '100%',
        justifyContent: 'center'
    }
})

export default style;