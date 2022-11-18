import React from "react";
import { TouchableOpacity, View, Image, StyleSheet} from "react-native";

export const SecureIcon = ({ onPress, image, ...props }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.icon}>
                <Image
                    style={styles.image}
                    source={image}
                ></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        height: 20, 
        width: 20, 
        marginTop: 5, 
        marginRight: 15
    },
    image: {
        height: '100%',
        width: '100%', 
        resizeMode: 'contain'
    }
})


