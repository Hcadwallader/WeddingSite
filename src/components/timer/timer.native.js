import React from 'react';
import { Text, View } from 'react-native';

const Timer = ({ days, hours, minutes, seconds }) => {
	return (
		<View>
			<Text>This is ReactNative</Text>
			<Text>{days}:</Text>
			<Text>{hours}:</Text>
			<Text>{minutes}: </Text>
			<Text>{seconds}</Text>
		</View>
	);
};

export default Timer;
