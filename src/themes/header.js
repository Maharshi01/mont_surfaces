import { StyleSheet } from 'react-native';


const headerTheme =  StyleSheet.create({ 
    headerStyle: {
        height: 65
    },
    headerNoBorder: {
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        borderBottomWidth: 0
    }
})

export default headerTheme;