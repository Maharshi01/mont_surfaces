import React, { Component } from 'react';
import {
   StyleSheet,
   Dimensions,
   TouchableOpacity,
   View,
   Text,
} from 'react-native';
import LoginTitle from '../../../assets/svg/login_title';
import { strings } from '../../../appstring/index';
import { colors, fonts } from '../../../themes/constant';
import { loginSchema } from '../schema/loginScheme'
import UserIcon from '../../../assets/svg/userIcon';
import Config from 'react-native-config';
import Analytics from '../../../utils/firebase/analyticsManager'
import AuthContainer from '../../../helpers/AuthContainer/AuthContainer';
import FloatingLabel from '../../../components/FloatingLabelInput';
import { Images } from '../../../themes/images'
import Button from '../../../components/Button';
import loginStorage from './storeLoginData';
import { SecureIcon } from '../../../components/SecureIcon';
import sharedStyles from './sharedStyles'

const window = Dimensions.get('window');

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: '',
         password: '',
         emailError: '',
         passwordError: '',
         isSecure: false,
         isFetching: false
      };
   }

   componentDidMount() {
      if (Config.AUTO_LOGIN === "1") {
         this.setState({
            email: Config.LOGIN_EMAIL,
            password: Config.LOGIN_PASSWORD
         }, () => {
            // this.validate()
         })
      }
      Analytics.init("Login")
   }

   componentWillUnmount() { }

   //Need to integrate api once ready
   validate = async () => {
      loginSchema.validate({
         email: this.state.email.trim(),
         password: this.state.password.trim(),
      }).then(value => {
         this.setState({
            isFetching: true
         })
         setTimeout(async () => {
            //hard coded token to store, need to update once api is ready
            await loginStorage("sajbckdskcbdskcbdsfkvbfsoivfhivbvfbnfkbvfsjkvb");
            await this.props.actions.storeLoginData({ token: "sajbckdskcbdskcbdsfkvbfsoivfhivbvfbnfkbvfsjkvb" });
            this.setState({
               isFetching: false,
               email: '',
               password: '',
               emailError: '',
               passwordError: ''
            })
         }, 2000)
      }).catch((err) => {
         if (err.errors[0].toLowerCase().includes('email')) {
            this.setState({
               emailError: err.errors[0]
            })
         } else {
            this.setState({
               passwordError: err.errors[0]
            })
         }
      })
   }

   passwordComp = () => {
      return <SecureIcon
         onPress={() => {
            this.setState({
               isSecure: !this.state.isSecure
            })
         }}
         image={this.state.isSecure ? Images.eye : Images.eyeInactive}
      />
   }

   render() {
      return (
         <AuthContainer testID='login-view'>
            <View style={sharedStyles.mainContainer}>
               <LoginTitle
                  height={window.height / 8}
                  style={sharedStyles.loginLogo}
               />
               <Text
                  style={sharedStyles.titleTextContainer}>
                  {strings.loginScreen.welcomeText}
               </Text>
               <Text>

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
                     testID='login-email-textfield'
                     accessibilityLabel='login-email-textfield'
                     error={this.state.emailError}
                  />
                  <View style={{ marginTop: this.state.emailError ? 24 : 15 }} />
                  <FloatingLabel
                     label={strings.loginScreen.password}
                     value={this.state.password}
                     onTextChange={value => {
                        this.setState({
                           passwordError: '',
                           password: value,
                        });
                     }}
                     showText={!this.state.isSecure}
                     rightComponent={<this.passwordComp />}
                     testID='login-password-textfield'
                     accessibilityLabel='login-password-textfield'
                     error={this.state.passwordError}
                  />
                  < TouchableOpacity
                     testID="login-forgot-password"
                     accessibilityLabel="login-forgot-password"
                     style={{ marginTop: 10, alignSelf: 'flex-end' }}
                     onPress={() => {
                        this.setState({
                           email: '',
                           password: '',
                           emailError: '',
                           passwordError: ''
                        })
                        this.props.navigation.navigate('ForgotPassword');
                     }}>
                     <Text
                        style={[styles.forgotPinText]}>
                        {strings.loginScreen.forgotPassword}
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
            <View style={sharedStyles.buttonLoginContainer}>
               <Button
                  title={strings.loginScreen.login.toUpperCase()}
                  type='primary'
                  onPress={() => {
                     this.validate()
                  }}
                  testID='login-submit-button'
                  accessibilityLabel='login-submit-button'
                  loading={this.state.isFetching}
                  disabled={false}
               />
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
   },
   forgotPinText: {
      ...fonts.H1,
      color: colors.PRIMARY,
      marginBottom: 20
   },
});

export default Login;
