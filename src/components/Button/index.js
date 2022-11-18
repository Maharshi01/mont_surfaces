import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../themes/constant'
import ActivityIndicator from '../ActivityIndicator';

const Button = ({
	type = 'primary',
	disabled = false,
	loading = false,
	fontSize = 16,
	title,
	onPress,
	backgroundColor,
	color,
	style,
	styleText,
	testID,
	accessibilityLabel,
	...otherProps
}) => {

	const isPrimary = type === 'primary';

	let textColor = isPrimary ? colors.WHITE : colors.TEXT_PRIMARY;
	
	if (color) {
		textColor = color;
	}

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.95}
			disabled={disabled || loading}
			style={[
				styles.container,
				backgroundColor ? { backgroundColor } : { backgroundColor: isPrimary ? colors.PRIMARY : colors.RED},
				disabled && styles.disabled,
				style
			]}
			testID={testID || `button_${title ? title : ""}`}
			accessibilityLabel={accessibilityLabel || `button_${title ? title : ""}`}
			{...otherProps}
		>
			{loading ? (
				<ActivityIndicator color={textColor} />
			) : (
				<Text style={[styles.text, { color: textColor }, styleText]} accessibilityLabel={title}>
					{title}
				</Text>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 14,
		justifyContent: 'center',
		height: 48,
		borderRadius: 5,
		marginBottom: 12,
		activeOpacity: 1
	},
	text: {
		...fonts.H1_BOLD,
		textAlign: 'center'
	},
	disabled: {
		opacity: 0.3
	}
});

export default Button;
