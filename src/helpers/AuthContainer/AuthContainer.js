import React from 'react';
import { ScrollView, ImageBackground, ScrollViewProps, StyleSheet, View } from 'react-native';
import scrollPersistTaps from '../ScrollPersistTaps';
import KeyboardView from '../KeyboardView';
import StatusBar from '../StatusBar';
import SafeAreaView from './SafeAreaView';
import { colors } from '../../themes/constant'

const AuthContainer = ({ children, testID, ...props }) => {
	return (
		<KeyboardView
			style={{ backgroundColor: "white" }}
			contentContainerStyle={styles.container}
			keyboardVerticalOffset={128}
		>
			<StatusBar barStyle="dark-content" backgroundColor={colors.PRIMARY} />
			<ScrollView
				style={styles.container}
				contentContainerStyle={[styles.containerScrollView, styles.scrollView]}
				{...scrollPersistTaps}
				{...props}
			>
				<SafeAreaView testID={testID} style={{ backgroundColor: "white" }}>
					<ImageBackground
						source={require('../../assets/images/login_background.png')}
						style={styles.login_backgroundImage}>
						{children}
					</ImageBackground>
				</SafeAreaView>
			</ScrollView>
		</KeyboardView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	scrollView: {
		minHeight: '100%'
	},
	containerScrollView: {
		// padding: 15,
		// paddingBottom: 30
	},
	login_backgroundImage: {
		alignItems: 'center',
		flex: 1,
		resizeMode: 'contain',
	}
});

export default AuthContainer;