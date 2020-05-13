import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { RatingCard } from './RatingCard';
import ViewMoreText from 'react-native-view-more-text';

class ReviewCard extends React.Component {
	render() {

		const { image, name, ratings, review } = this.props.data;

		return (
			<View style={styles.container}>
				<View style={{ flex: 0.2 }}>
					<Image
						source={{ uri: image }}
						style={styles.image}
					>
					</Image>
				</View>
				<View style={styles.rightContainer}>
					<View style={styles.header}>
						<Text style={styles.title}>{name}</Text>
						<RatingCard stars={ratings} />
					</View>
					<ViewMoreText numberOfLines={1}>
						<Text>{review}</Text>
					</ViewMoreText>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15
	},
	image: {
		borderRadius: 52 / 2,
		width: 52,
		height: 52
	},
	rightContainer: {
		flex: 0.8,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 3
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export { ReviewCard };
