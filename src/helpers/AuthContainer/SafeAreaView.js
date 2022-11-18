import React from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';
import { colors } from '../../themes/constant';

const SafeAreaView = ({ style, children, vertical = true, ...props }) => {
	// const safeStyle = props.testID === 'login-view' ? ['right', 'left', 'top'] : ['right', 'left']
	const safeStyle = ['right', 'left', 'top']
	return (
		<SafeAreaContext
			style={[styles.view, { backgroundColor: colors.RED }, style]}
			edges={vertical ? safeStyle : 'undefined'}
			{...props}
		>
			{children}
		</SafeAreaContext>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1
	}
});

export default SafeAreaView;
