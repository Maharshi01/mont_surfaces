import React, { Component } from 'react';
import {
   StyleSheet,
   ImageBackground,
   Dimensions,
   TouchableOpacity,
   View,
   Text,
   Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import LoginTitle from '../../../assets/svg/login_title';
import GradientButton from '../../../components/gradientButton';
import { loginScreen, strings } from '../../../appstring/index';
import { colors, fonts } from '../../../themes/constant';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import KeyboardView from '../../../components/KeyboardView';
import InputField from '../../../components/InputField/TextInput';
import { loginSchema } from '../schema/loginScheme'
import UserIcon from '../../../assets/svg/userIcon';
import Config from 'react-native-config';
import style from '../../../components/gradientButton/style';
import Analytics from '../../../utils/firebase/analyticsManager'

const window = Dimensions.get('window');

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userName: '',
         password: '',
         userNameError: '',
         passwordError: '',
         isSecure: false,
      };
   }

   componentDidMount() {
      Analytics.init("Login")
   }


   componentWillUnmount() { }


   //Validate
   validate = async () => {
      loginSchema.validate({
         user_name: this.state.userName,
         password: this.state.password,
      }).then(value => {
         LogTracker.debug("Login Button", value)
      }).catch((err) => {
         if (err.errors[0].toLowerCase().includes('user_name')) {
            this.setState({
               userNameError: err.errors[0]
            })
         } else {
            this.setState({
               passwordError: err.errors[0]
            })
         }
      })

   }

   passwordComp = () => {
      return <TouchableOpacity
         onPress={() => {
            this.setState({
               isSecure: !this.state.isSecure
            })
         }}
         style={{ height: 20, width: 20, marginTop: 5, marginRight: 5 }}>
         <Image
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            source={this.state.isSecure ? (require('../../../assets/icons/eye.png')) : (require('../../../assets/icons/eye_inactive.png'))}
         ></Image>

      </TouchableOpacity>
   }

   render() {
      return (
         <KeyboardView
            contentContainerStyle={styles.mainContainer}
            keyboardVerticalOffset={128}
         >
            <ImageBackground
               source={require('../../../assets/images/login_background.png')}
               style={styles.login_backgroundImage}>
               <SafeAreaView style={{ width: '100%' }}>
                  <ScrollView
                     contentContainerStyle={styles.scrollContainer}
                     keyboardShouldPersistTaps="handled">
                     <LoginTitle
                        height={window.height / 8}
                        // width={window.width}
                        style={[styles.login_logo]}
                     />
                     <Text
                        style={[
                           fonts.BIG_T2_BOLD,
                           styles.login_textContainer,
                           { fontSize: 24, fontWeight: '600' },
                        ]}
                        testID="welcome_button_login"
                        accessibilityLabel="Login">
                        {loginScreen.welcomeText}
                     </Text>
                     <View style={{ width: '90%', alignSelf: 'center', marginTop: 60 }}>
                        {/* <InputField
                           onTextChange={value => {
                              this.setState({
                                 userName: value,
                              });
                           }}
                           label={loginScreen.userName}
                           containerStyles={{
                              // borderWidth: 1,
                              height: 50,
                              paddingHorizontal: 8,
                              // backgroundColor: 'red',
                              borderColor: '#D9D9D9',
                              borderRadius: 8,
                           }}
                           customLabelStyles={{
                              colorFocused: '#666666',
                              fontSizeFocused: 12,
                              colorBlurred: '#666666',
                              activeOpacity: 0,
                           }}
                           labelStyles={{
                              backgroundColor: '#fff',
                              paddingHorizontal: 5,
                           }}
                           inputStyles={{
                              color: 'black',
                              fontSize: 15,
                              height: 20,
                              marginTop: 10,
                              paddingHorizontal: 5,
                           }}
                           value={this.state.userName}
                           selectionColor="#4C4C4C"
                        />
                        <View style={{ marginTop: 25 }}></View> */}
                        <FloatingLabelInput
                           onChangeText={value => {
                              this.setState({
                                 userNameError: '',
                                 userName: value,
                              });
                           }}
                           containerStyles={{
                              borderWidth: 1,
                              height: 60,
                              paddingHorizontal: 8,
                              backgroundColor: 'white',
                              borderColor: !this.state.userNameError ? '#D9D9D9' : 'red',
                              borderRadius: 8,
                           }}
                           customLabelStyles={{
                              colorFocused: '#666666',
                              fontSizeFocused: 12,
                              colorBlurred: '#666666',
                              activeOpacity: 0,
                           }}
                           labelStyles={{
                              backgroundColor: '#fff',
                              paddingHorizontal: 5,
                           }}
                           inputStyles={{
                              color: 'black',
                              fontSize: 15,
                              height: 20,
                              marginTop: 10,
                              paddingHorizontal: 5
                           }}
                           rightComponent={<UserIcon style={{ marginRight: 5, marginTop: 5 }} />}
                           label={loginScreen.userName}
                           value={this.state.userName}
                           selectionColor="#4C4C4C"
                        />
                        {this.state.userNameError ?
                           <Text
                              style={{ marginLeft: 12, color: 'red', marginTop: 4, fontSize: 12 }}
                              testID={`error_${this.state.error}`}
                              accessibilityLabel={`error_${this.state.userNameError}`}
                           >{this.state.userNameError}</Text> : null
                        }
                        <View style={{ marginTop: 25 }}></View>
                        <FloatingLabelInput
                           onChangeText={value => {
                              this.setState({
                                 passwordError: '',
                                 password: value,
                              });
                           }}
                           containerStyles={{
                              borderWidth: 1,
                              height: 60,
                              paddingHorizontal: 8,
                              backgroundColor: 'white',
                              borderColor: !this.state.passwordError ? '#D9D9D9' : 'red',
                              borderRadius: 8,
                           }}
                           customLabelStyles={{
                              colorFocused: '#666666',
                              fontSizeFocused: 12,
                              colorBlurred: '#666666',
                              activeOpacity: 0,
                           }}
                           labelStyles={{
                              backgroundColor: '#fff',
                              paddingHorizontal: 5,
                           }}
                           inputStyles={{
                              color: 'black',
                              fontSize: 15,
                              height: 20,
                              marginTop: 10,
                              paddingHorizontal: 5
                           }}
                           rightComponent={<this.passwordComp />}
                           secureTextEntry={!this.state.isSecure}
                           label={loginScreen.password}
                           value={this.state.password}
                           selectionColor="#4C4C4C"
                        />
                        {this.state.passwordError ?
                           <Text
                              style={{ marginLeft: 12, color: 'red', marginTop: 4, fontSize: 12 }}
                              testID={`error_${this.state.passwordError}`}
                              accessibilityLabel={`error_${this.state.passwordError}`}
                           >{this.state.passwordError}</Text>
                           : null
                        }
                        < TouchableOpacity
                           style={{ marginTop: 24, alignSelf: 'flex-end' }}
                           onPress={() => {
                              this.props.navigation.navigate('ForgotPassword');
                           }}>
                           <Text
                              style={[styles.forgotPinText]}
                              testID="login_forgot_password"
                              accessibilityLabel="login_forgot_password">
                              {loginScreen.forgotPassword}
                           </Text>
                        </TouchableOpacity>
                     </View>
                  </ScrollView>
               </SafeAreaView>
            </ImageBackground>
            <View style={styles.bottomView}>
               <GradientButton
                  testId="welcome_button_login"
                  accessibilityLabel="welcome_button_login"
                  inputText={loginScreen.login.toUpperCase()}
                  activeOpacity={0.95}
                  disableGradient={true}
                  style={styles.loginButton}
                  buttonStyle={styles.loginButton}
                  textStyle={styles.textStyle}
                  height={45}
                  onPress={() => {
                     this.validate()
                  }}
               />
            </View>

         </KeyboardView>
      );
   }
}

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
   },
   scrollContainer: {
      flexGrow: 1,
   },
   login_backgroundImage: {
      alignItems: 'center',
      flex: 1,
      resizeMode: 'contain',
   },
   login_logo: {
      marginTop: 50,
      marginStart: 20,
      marginEnd: 20,
      alignSelf: 'center',
   },
   login_textContainer: {
      marginTop: 55,
      alignSelf: 'center',
      color: colors.BLACK,
   },
   loginButton: {
      backgroundColor: colors.PRIMARY,
      borderRadius: 5,
   },
   textStyle: {
      ...fonts.H1_BOLD,
      color: colors.WHITE,
   },
   bottomView: {
      position: 'absolute',
      bottom: 25,
      justifyContent: 'center',
      alignSelf: 'center',
      width: '90%',
   },
   forgotPinText: {
      ...fonts.H1,
      color: colors.PRIMARY,
   },
});

export default Login;
