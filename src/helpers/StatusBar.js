import React from 'react';
import { StatusBar } from 'react-native';

const StatusBarRN = ({ barStyle, backgroundColor }) => {
	return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} animated />;
};

export default StatusBarRN;
