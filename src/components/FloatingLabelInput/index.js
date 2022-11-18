import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Animated,
  Text,
  StyleSheet
} from 'react-native';
import { colors, fonts } from '../../themes/constant';
import styles from './styles';

class FloatingLabelInput extends Component {
  state = {
    isFocused: false,
  };

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
  }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }

  render() {
    const { isFocused } = this.state;

    const animatedLabelStyle = {
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 5],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.LABEL_PRIMARY, colors.LABEL_PRIMARY],
      }),
    };

    return (
      <View>
        <View style={[styles.mainContainer, {
          borderRadius: this.props.borderRadius,
          borderColor: this.props.error.length > 0 ? 'red' : colors.TEXT_TERTIARY,
        }]}>
          <Animated.Text style={[styles.labelStyle, animatedLabelStyle]}>
            {this.props.label}
          </Animated.Text>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <TextInput
              style={[styles.textInput, isFocused && styles.focusedTextInput]}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              blurOnSubmit
              selectionColor={this.props.selectionColor}
              textAlignVertical={this.props.multiline == true ? 'top' : 'center'}
              autoCapitalize={this.props.keyboardType == 'email-address' ? 'none' : 'sentences'}
              underlineColorAndroid='transparent'
              placeholder={this.props.hint}
              placeholderTextColor={colors.TEXT_TERTIARY}
              secureTextEntry={this.props.showText}
              keyboardType={this.props.keyboardType}
              editable={this.props.isEnable}
              multiline={this.props.multiline}
              autoFocus={this.props.autoFocus}
              onChangeText={(text) => {
                this.props.onTextChange(text)
              }}
              maxLength={this.props.maxLength}
              ref={this.props.parRef}
              value={this.props.value}
              defaultValue={this.props.defaultValue}
              testID={this.props.testID || `textField_${this.props.hint ? this.props.hint : ''}`}
              accessibilityLabel={this.props.testID || `textField_${this.props.hint ? this.props.hint : ''}`}
            />
            {this.props.rightComponent && this.props.rightComponent}
          </View>
        </View>
        <Text
          style={styles.errorTextStyle}
          testID={`error_${this.props.error}`}
          accessibilityLabel={`error_${this.props.error}`}
        >{this.props.error}</Text>
      </View>
    );
  }
}

FloatingLabelInput.defaultProps = {
  testID: '',
  text: null,
  hint: null,
  value: null,
  multiline: false,
  defaultValue: null,
  maxLength: null,
  autoFocus: false,
  isEnable: true,
  label: '',
  borderRadius: 8,
  error: '',
  selectionColor: colors.PRIMARY,
  rightIcon: false
}

export default FloatingLabelInput
