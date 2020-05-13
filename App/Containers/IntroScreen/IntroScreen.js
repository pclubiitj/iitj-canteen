import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import normalize from 'react-native-normalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';

const slides = [
	{
		key: '1',
		title: 'Title 1',
		text: 'Description.\nSay something cool',
		// image: require('./assets/1.jpg'),
		backgroundColor: '#59b2ab'
	},
	{
		key: '2',
		title: 'Title 2',
		text: 'Other cool stuff',
		// image: require('./assets/2.jpg'),
		backgroundColor: '#febe29'
	},
	{
		key: '3',
		title: 'Rocket guy',
		text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
		// image: require('./assets/3.jpg'),
		backgroundColor: 'red'
	}
];

const IntroScreen = ({ navigation }) => {
	const renderNextButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon name="arrow-right" color="rgba(255, 255, 255, .9)" size={24} />
			</View>
		);
	};
	const renderDoneButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon name="check" color="rgba(255, 255, 255, .9)" size={24} />
			</View>
		);
	};

	const renderItem = ({ item }) => {
		return (
			<View style={{ ...styles.parent, backgroundColor: item.backgroundColor }}>
				<Text style={{ fontSize: 20 }}>{item.title}</Text>
				<Text style={{ fontSize: 20 }}>{item.text}</Text>
			</View>
		);
	};
	const setFirstTimeUser = async () => {
		try {
			await AsyncStorage.setItem('FirstTimeUser', 'NO');
			navigation.navigate('MainFlow');
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<AppIntroSlider
			renderDoneButton={renderDoneButton}
			renderNextButton={renderNextButton}
			renderItem={renderItem}
			data={slides}
			onDone={setFirstTimeUser}
		/>
	);
};

export default IntroScreen;

const styles = StyleSheet.create({
	parent: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonCircle: {
		width: normalize(40, 'width'),
		height: normalize(40, 'height'),
		backgroundColor: 'rgba(0, 0, 0, .2)',
		borderRadius: normalize(20),
		justifyContent: 'center',
		alignItems: 'center'
	}
});
