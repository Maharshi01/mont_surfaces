import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, View, Text } from 'react-native';
import Analytics from '../../../utils/firebase/analyticsManager';
import AuthContainer from '../../../helpers/AuthContainer/AuthContainer';
import LoginTitle from '../../../assets/svg/login_title';
import { strings } from '../../../appstring/index';
import { fonts } from '../../../themes/constant'
import FloatingLabel from '../../../components/FloatingLabelInput';
import CustButton from '../../../components/Button';
import { resetPasswordSchema } from '../schema/loginScheme';
import { Images } from '../../../themes/images'
import loginStorage from './storeLoginData';
import sharedStyles from './sharedStyles'
import { SecureIcon } from '../../../components/SecureIcon';

const window = Dimensions.get('window');

class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            newPassword: {
                value: '',
                isSecure: true,
                text: strings.resetPasswordScreen.newPassword,
                error: '',
            },
            confirmPassword: {
                value: '',
                isSecure: true,
                text: strings.resetPasswordScreen.confirmPassword,
                error: '',
            },
        };
    }

    componentDidMount() {
        Analytics.init("Reset Password")
    }

    componentWillUnmount() { }

    //Need to integrate api once ready
    resetPassword = async () => {
        const { newPassword, confirmPassword } = this.state
        resetPasswordSchema.validate({
            newPassword: newPassword.value.trim(),
            confirmPassword: confirmPassword.value.trim(),
        }).then(value => {
            this.setState({
                isFetching: true
            })
            if (value.newPassword === value.confirmPassword) {
                newPassword.error = '';
                confirmPassword.error = '';
                this.setState({
                    newPassword,
                    confirmPassword,
                    isFetching: false
                }, async () => {
                    //hard coded token to store, need to update once api is ready
                    await loginStorage("sajbckdskcbdskcbdsfkvbfsoivfhivbvfbnfkbvfsjkvb");
                    await this.props.actions.storeLoginData({ token: "sajbckdskcbdskcbdsfkvbfsoivfhivbvfbnfkbvfsjkvb" });
                });
            } else {
                confirmPassword.error = strings.resetPasswordScreen.passwordMismatch;
                this.setState({
                    confirmPassword,
                    isFetching: false
                });
            }
        }).catch((err) => {
            if (err.errors[0].toLowerCase().includes('confirm password')) {
                confirmPassword.error = err.errors[0]
                this.setState({
                    confirmPassword
                })
            } else {
                newPassword.error = err.errors[0]
                this.setState({
                    newPassword
                })
            }
        })
    }

    newPasswordComp = () => {
        const { newPassword } = this.state;
        return <SecureIcon
            onPress={() => {
                newPassword.isSecure = !newPassword.isSecure
                this.setState({
                    newPassword
                })
            }}
            image={newPassword.isSecure ? Images.eyeInactive : Images.eye}
        />
    }

    confirmPasswordComp = () => {
        const { confirmPassword } = this.state;
        return <SecureIcon
            onPress={() => {
                confirmPassword.isSecure = !confirmPassword.isSecure
                this.setState({
                    confirmPassword
                })
            }}
            image={confirmPassword.isSecure ? Images.eyeInactive : Images.eye}
        />
    }

    render() {
        const { newPassword, confirmPassword } = this.state;
        return (
            <AuthContainer testID='reset-pasword-view'>
                <View style={sharedStyles.mainContainer}>
                    <LoginTitle
                        height={window.height / 8}
                        style={[sharedStyles.loginLogo]}
                    />
                    <Text
                        style={sharedStyles.titleTextContainer}>
                        {strings.resetPasswordScreen.title}
                    </Text>
                    <Text
                        style={[
                            fonts.H1,
                            sharedStyles.subTitleContainer
                        ]}>
                        {strings.resetPasswordScreen.subTitle}
                    </Text>
                    <View style={styles.textContainer}>
                        <FloatingLabel
                            label={strings.resetPasswordScreen.newPassword}
                            value={this.state.newPassword.value}
                            onTextChange={value => {
                                newPassword.error = ''
                                newPassword.value = value
                                this.setState({
                                    newPassword
                                });
                            }}
                            showText={newPassword.isSecure}
                            rightComponent={<this.newPasswordComp />}
                            testID='reset-password-new-password-textfield'
                            accessibilityLabel='reset-password-new-password-textfield'
                            error={newPassword.error}
                        />
                        <View style={{ marginTop: newPassword.error ? 24 : 15 }} />
                        <FloatingLabel
                            label={strings.resetPasswordScreen.confirmPassword}
                            value={this.state.confirmPassword.value}
                            onTextChange={value => {
                                confirmPassword.error = ''
                                confirmPassword.value = value
                                this.setState({
                                    confirmPassword
                                });
                            }}
                            showText={confirmPassword.isSecure}
                            rightComponent={<this.confirmPasswordComp />}
                            testID='reset-password-confirm-password-textfield'
                            accessibilityLabel='reset-password-confirm-password-textfield'
                            error={confirmPassword.error}
                        />
                    </View>
                </View>
                <View style={sharedStyles.buttonLoginContainer}>
                    <CustButton
                        title={strings.submit.toUpperCase()}
                        type='primary'
                        onPress={() => {
                            this.resetPassword()
                        }}
                        testID='reset-password-submit-button'
                        accessibilityLabel='reset-password-submit-button'
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


export default ResetPassword;
