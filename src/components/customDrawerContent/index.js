import React, { Component } from "react";
import { Alert, Image, SafeAreaView, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from 'react-native-device-info';
import { Button, Icon } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { colors, fonts } from "../../themes/constant";
import styles from './styles';

const version = DeviceInfo.getVersion();

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }



    logout = () => {
      Alert.alert("Do you want to login??", '', [
        {text: "Yes", onPress: () => LogTracker.debug("Logged Out!!")},
        {
          text: "No",
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{width: '60%', height: 55, alignSelf: 'center', alignItems: 'center', marginTop: 22,}}>
                        <Button
                            title={"Logout"}
                            style={{height: 40}}
                            width="100%"
                            onPress={() => {
                                this.logout()
                            }}/>
                    </View>
                </ScrollView>
                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={styles.versionNumber}> v{version}</Text> 
                </View>
            </SafeAreaView>
        )
    }
}
