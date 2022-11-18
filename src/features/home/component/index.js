import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SampleAction from '../../../redux/actions/sample';
import analytics from '@react-native-firebase/analytics';


class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   componentDidMount() {
   }

   componentWillUnmount() { }

   render() {
      const count = this.props.sample.count + 1
      return (
         <View style={styles.mainContainer}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <Text>Home Screen</Text>
                {/* <Button title="Add Analytics" 
                        onPress={async () =>
                           await analytics().logEvent('mont_dev_env'+ "_"+ Platform.OS, {
                           id: 37450029})}
                /> */}
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

//dummy methods
const mapStateToProps = state => {
   return {
      sample: state.sample,
   };
};

const Actions = {
   ...SampleAction,
};

const mapDispatchToProps = dispatch => {
   return { actions: bindActionCreators(Actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
