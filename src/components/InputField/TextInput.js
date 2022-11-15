import React, { Component, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Image,
    Picker,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { colors, fonts } from '../../themes/constant';
import { styles } from './styles';
import { FloatingLabelInput } from 'react-native-floating-label-input';
const { width, height } = Dimensions.get('window');

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    textInput = () => {
        return (
            <FloatingLabelInput
                secureTextEntry={this.props.showText}
                textAlignVertical={this.props.multiline == true ? 'top' : 'center'}
                multiline={this.props.multiline}
                editable={this.props.isEnable}
                placeholder={this.props.hint}
                placeholderTextColor={colors.TEXT_TERTIARY}
                ref={this.props.parRef}
                keyboardType={this.props.keyboardType}
                defaultValue={this.props.defaultValue}
                autoFocus={this.props.autoFocus}
                selectionColor={this.props.selectionColor}
                maxLength={this.props.maxLength}
                value={this.props.value}
                containerStyles={this.props.containerStyles}
                customLabelStyles={this.props.customLabelStyles}
                labelStyles={this.props.labelStyles}
                inputStyles={this.props.inputStyles}
                onChangeText={text => {
                    this.props.onTextChange(text);
                }}
                testID={
                    this.props.testID ||
                    `textField_${this.props.label
                        ? this.props.label
                        : this.props.hint
                            ? this.props.hint
                            : ''
                    }`
                }
                accessibilityLabel={
                    this.props.testID ||
                    `textField_${this.props.label
                        ? this.props.label
                        : this.props.hint
                            ? this.props.hint
                            : ''
                    }`
                } />
        )
    };
    

    render() {
        return (
            <View
                style={[
                    { marginTop: 0, alignSelf: 'center' },
                    this.props.containerStyle,
                ]}>
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: this.props.textInputHeight,
                        },
                        this.props.innerContainerStyle,
                    ]}>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: this.props.borderRadius,
                            borderWidth: this.props.borderWidth,
                            borderColor: this.props.error.length > 0 ? 'red' : this.props.isActive ? colors.PRIMARY : colors.TEXT_TERTIARY,
                            flexDirection: 'row',
                            backgroundColor: this.props.isEnable ? '#FFFFFF' : '#F2F2F2',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        {/* {this._renderRightIcon()} */}
                        {this.textInput()}
                        {/* {this.props.isSecure ? (
                            <TouchableOpacity
                                onPress={this.props.onClickSecure}
                                style={{
                                    height: 20,
                                    width: this.props.isSecure ? 20 : 0,
                                    alignSelf: 'center',
                                    position: 'absolute',
                                    right: 12,
                                }}>
                                <Image
                                    style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                                    source={
                                        this.props.showText
                                            ? require('../../assets/images/eye.png')
                                            : require('../../assets/images/eye-active.png')
                                    }></Image>
                            </TouchableOpacity>
                        ) : null} */}
                    </View>
                </View>
            </View>
        );
    }
}

InputField.defaultProps = {
    value: null,
    maxLength: null,
    hint: null,
    label: null,
    selectionColor: colors.TEXT_LABEL,
    autoFocus: false,
    parRef: null,
    defaultValue: null,
    isEnable: true,
    multiline: false,
    textInputHeight: 50,
    containerStyles: {},
    customLabelStyles: {},
    labelStyles: {},
    inputStyles: {},
    error: '',
    borderWidth: 1,
    borderRadius: 8,
    isSecure: false,

    isActive: false,

    containerStyle: {},
    innerContainerStyle: {},
    rightIcon: null,
    isAsterisk: false,
};
