import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, View, Text } from 'react-native';
import Analytics from '../../../utils/firebase/analyticsManager';
import AuthContainer from '../../../helpers/AuthContainer/AuthContainer';
import LoginTitle from '../../../assets/svg/login_title';
import { strings } from '../../../appstring/index';
import { fonts } from '../../../themes/constant'
import FloatingLabel from '../../../components/FloatingLabelInput';
import UserIcon from '../../../assets/svg/userIcon';
import CustButton from '../../../components/Button';
import { forgotPasswordSchema } from '../schema/loginScheme';
import sharedStyles from './sharedStyles'

const window = Dimensions.get('window');

class ForgotPassword extends Component {

   constructor(props) {
      super(props);
      this.state = {
         email: '',
         emailError: ''
      };
   }

   componentDidMount() {
      Analytics.init("Forgot Password")
   }

   componentWillUnmount() { }

   //Need to integrate api once ready
   forgotPassword = async () => {
      forgotPasswordSchema.validate({
         email: this.state.email.trim(),
      }).then(value => {
         this.setState({
            isFetching: true
         })
         setTimeout(() => {
            this.setState({
               isFetching: false,
               email: '',
               emailError: ''
            })
            this.props.navigation.navigate('ResetPassword')
         }, 1000)
      }).catch((err) => {
         if (err.errors[0].toLowerCase().includes('email')) {
            this.setState({
               emailError: err.errors[0]
            })
         }
      })
   }

   render() {
      return (
         <AuthContainer testID='forgot-pasword-view'>
            <View style={sharedStyles.mainContainer}>
               <LoginTitle
                  height={window.height / 8}
                  style={[sharedStyles.loginLogo]}
               />
               <Text
                  style={sharedStyles.titleTextContainer}>
                  {strings.forgotPasswordScreen.title}
               </Text>
               <Text
                  style={[
                     fonts.H1,
                     sharedStyles.subTitleContainer
                  ]}>
                  {strings.forgotPasswordScreen.subTitle}
               </Text>
               <View style={styles.textContainer}>
                  <FloatingLabel
                     label={strings.loginScreen.email}
                     value={this.state.email}
                     onTextChange={value => {
                        this.setState({
                           emailError: '',
                           email: value,
                        });
                     }}
                     rightComponent={<UserIcon style={{ marginRight: 15, marginTop: 5 }} />}
                     testID='forgot-password-email-textfield'
                     accessibilityLabel='forgot-password-email-textfield'
                     error={this.state.emailError}
                  />
               </View>
            </View>
            <View style={sharedStyles.buttonLoginContainer}>
               <CustButton
                  title={strings.submit.toUpperCase()}
                  type='primary'
                  onPress={() => {
                     this.forgotPassword()
                  }}
                  testID='forgot-password-submit-button'
                  accessibilityLabel='forgot-password-submit-button'
                  loading={this.state.isFetching}
                  disabled={false}
               />
               <TouchableOpacity
                  style={sharedStyles.cancelTouchableStyle}
                  activeOpacity={0.95}
                  onPress={() => this.props.navigation.navigate('Login')}
               >
                  <Text
                     style={sharedStyles.cancelTextStyle}>
                     {strings.cancel.toUpperCase()}
                  </Text>
               </TouchableOpacity>
            </View>
         </AuthContainer>
      );
   }
}

const styles = StyleSheet.create({
   textContainer: {
      width: '90%',
      alignSelf: 'center',
      marginTop: 37
   }
});


export default ForgotPassword;
