import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Analytics from '../../../utils/firebase/analyticsManager';

class ForgotPassword extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   componentDidMount() {
      Analytics.init("Forgot Password")
   }

   componentWillUnmount() { }

   render() {
      return (
         <View style={styles.mainContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Forgot Password Screen</Text>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
   },
});


export default ForgotPassword;
