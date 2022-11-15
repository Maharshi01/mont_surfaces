import React from 'react';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from '@codler/react-native-keyboard-aware-scroll-view';


const scrollPersistTaps = {
	keyboardShouldPersistTaps: 'always',
	keyboardDismissMode: 'interactive'
};


const KeyboardView = ({ style, contentContainerStyle, scrollEnabled, keyboardVerticalOffset, children }) => (
	<KeyboardAwareScrollView
		{...scrollPersistTaps}
		style={style}
		contentContainerStyle={contentContainerStyle}
		scrollEnabled={scrollEnabled}
		alwaysBounceVertical={false}
		extraHeight={keyboardVerticalOffset}
	>
		{children}
	</KeyboardAwareScrollView>
);

export default KeyboardView;
