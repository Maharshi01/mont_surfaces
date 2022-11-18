import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../themes/constant'

const RCActivityIndicator = ({ absolute, ...props }) => {
	return (
		<ActivityIndicator style={[styles.indicator, absolute && styles.absolute]} color={colors.WHITE} {...props} />
	);
};

const styles = StyleSheet.create({
	indicator: {
		padding: 16,
		flex: 1
	},
	absolute: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default RCActivityIndicator;
