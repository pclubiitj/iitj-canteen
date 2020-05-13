import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

class RatingCard extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Ionicon style={{ color: 'gold' }} size={16} name={'ios-star'} />
				<Text style={{ marginHorizontal: 5, fontSize: 13, fontWeight: 'bold' }}>{this.props.stars}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#f2f2f2',
		paddingVertical: 6,
		paddingHorizontal: 10,
		borderBottomEndRadius: 10,
		borderBottomStartRadius: 10,
		borderTopEndRadius: 10,
		borderTopStartRadius: 10
	}
});

export { RatingCard };
