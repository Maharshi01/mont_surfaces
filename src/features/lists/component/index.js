import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


class List extends Component {
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
               <Text>Lists Screen</Text>
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


export default List;
