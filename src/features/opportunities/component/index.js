import React, { Component } from 'react';
import { StyleSheet, StatusBar, View, Text, Button } from 'react-native';


class Opportunities extends Component {
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
               <Text>Opportunities Screen</Text>
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


export default Opportunities;
