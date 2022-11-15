import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../themes/constant'
import { fonts } from '../../themes/constant'

export default class GradientButton extends Component {

    buttonView = () => {
        const { disableGradient, textStyle, buttonStyle } = this.props;
        let Component = null
        let cusStyle = {}
        let cusTextStyle = {}
        if (disableGradient) {
            Component = View
            cusTextStyle = styles.normalStyleText
            cusStyle = styles.normalStyle
        } else {
            Component = LinearGradient
        }
        return (
            <TouchableOpacity
                onPress={this.props.isActive ? this.props.onPress : null}
                disabled={this.props.disabled}
                activeOpacity={this.props.activeOpacity}
                style={[styles.container, { width: this.props.width, height: this.props.height }, this.props.style]}
                testID={this.props.testID || `button_${this.props.inputText ? this.props.inputText : this.props.text}`}
                accessibilityLabel={this.props.accessibilityLabel || `button_${this.props.inputText ? this.props.inputText : this.props.text}`}
            >
                <Component
                    testID={this.props.inputText}
                    accessibilityLabel={this.props.inputText}
                    start={!disableGradient ? colors.GRADIENT_PRIMARY.start : undefined}
                    end={!disableGradient ? colors.GRADIENT_PRIMARY.end : undefined}
                    colors={this.props.disabled ? colors.GRADIENT_DISABLED.colors : colors.GRADIENT_PRIMARY.colors}
                    style={[styles.gradientStyle, cusStyle, buttonStyle]}
                >
                    <Text style={[fonts.H1_BOLD, styles.textContainer, cusTextStyle, textStyle]}>
                        {this.props.inputText ? this.props.inputText : this.props.text}
                    </Text>
                </Component>
            </TouchableOpacity>

        )
    }


    render() {
        return (
            this.buttonView()
        )
    }
}

GradientButton.defaultProps = {
    height: 50,
    style: {},
    disableGradient: false,
    textStyle: {},
    buttonStyle: {},
    isActive: true
}
