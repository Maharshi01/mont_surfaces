import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import { colors,fonts } from "../../themes/constant";


export const LoadingIndicator = (props) => (
    <View style={[
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        props.containerStyle
    ]}>
        <ActivityIndicator
            hidesWhenStopped={true}
            animating={props.loading}
            color={colors.PRIMARY}
            size="small"
            style={{marginRight: 10}}
        />
        <Text 
            style={[fonts.P2]}
            testID={`loadingMessageText_${props.message}`}
            accessibilityLabel={`loadingMessageText_${props.message}`}   
         >{props.message}</Text>
    </View>
);
