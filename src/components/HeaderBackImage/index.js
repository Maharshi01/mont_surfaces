import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes/constant'
import BackArrow from '../../assets/svg/back'
import { Button } from 'react-native-elements';

const HeaderBackImage = ({ title, onPress, testID, accessibilityLabel }) => {
    return (
        <View style={styles.headerView}>
            <Button
                TouchableComponent={TouchableOpacity}
                activeOpacity={0.5}
                icon={<BackArrow style={{ marginLeft: 5 }} width={18} height={18} />}
                type={"clear"}
                onPress={onPress}
                testID={testID ? testID :`${title}-goback-button`}
                accessibilityLabel={ accessibilityLabel ? accessibilityLabel : `${title}-goback-button`}
            />
            <Text style={styles.headerLeftText}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerLeftText: {
        ...fonts.T1_PRIMARY,
        fontWeight: "500",
        color: colors.IMAGE_HEADER,
        marginBottom: 1,
        marginTop:1
    },
});

export default HeaderBackImage;