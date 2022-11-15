import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class Profile extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   componentDidMount() {
   }

   componentWillUnmount() { }

   render() {
      return (
         <View style={styles.mainContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Profile Screen</Text>
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


export default Profile;
