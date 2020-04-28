import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Rating } from 'react-native-elements';

class Card extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.img} source={{ uri: this.props.data.imageURI }} />
				<View style={styles.bottomContainer}>
					<Text style={styles.title}>{this.props.data.title}</Text>
					<Rating imageSize={15} readonly={true} startingValue={this.props.data.ratings} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomContainer: {
		alignItems: 'center',
		padding: 3
	},
	container: {
		borderBottomEndRadius: 5,
		borderBottomStartRadius: 5,
		borderColor: 'black',
		borderTopEndRadius: 5,
		borderTopStartRadius: 5,
		borderWidth: 2,
		height: 150,
		margin: 6,
		width: 180
	},
	icon: {},
	img: {
		flex: 1
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export { Card };
