import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { RatingCard, ReviewCard } from '../../Components';

import COLORS from '../../Theme/Colors';

export default class DetailScreen extends React.Component {

	constructor(props) {
		super(props)

		this.state = ({
			data: {
				name: 'Tarun Tomar',
				image: 'https://cdn.britannica.com/s:800x450,c:crop/00/193400-138-6C287BFA/What-is-it-to-be-human.jpg',
				ratings: 4.5,
				review: "I love this Shitty Food and i can't tell you how much i want to eat this right now! Nonetheless i think this should be enough to test ViewMoreText!"
			}
		})
	}

	render() {
		return (
			<>
				<View style={styles.topContainer}>
					<View style={styles.header}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}>
							<Ionicon style={{ color: 'white' }} size={30} name={'ios-arrow-back'} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Ionicon style={{ color: "white" }} size={30} name={'ios-heart-empty'} />
						</TouchableOpacity>
					</View>
					<Image
						source={require('../../Assets/Images/signinScreenImage.png')}
						style={styles.image}
					>
					</Image>
				</View>
				<ScrollView>
					<View style={styles.titleBox}>
						<Text style={styles.title}>Paneer Butter Masala</Text>
						<RatingCard stars={4.5} />
					</View>
					<Text style={{ paddingHorizontal: 16, fontSize: 16, color: COLORS.text }}>IIT Jodhpur Canteen</Text>
					<View style={styles.bottomContainer}>
						<Text style={{ fontSize: 20 }}>About</Text>
						<Text style={{ fontSize: 16, color: COLORS.text }}>This is Some Cool Shit About Paneer Butter Masala. I love this Btw!</Text>
					</View>
					<View style={styles.bottomContainer}>
						<View style={styles.reviewHeader}>
							<Text style={{ fontSize: 20 }}>Review & Ratings</Text>
							<TouchableOpacity>
								<Entypo style={{ color: '#7300e6', marginLeft: 10 }} size={26} name={'circle-with-plus'} />
							</TouchableOpacity>
						</View>
					</View>
					<ReviewCard data={this.state.data} />
					<ReviewCard data={this.state.data} />
					<ReviewCard data={this.state.data} />
					<TouchableOpacity>
						<Text style={styles.more}>See all reviews</Text>
					</TouchableOpacity>
				</ScrollView>
			</>
		)
	}
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		flex: 1
	},
	header: {
		position: 'absolute',
		zIndex: 1,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingTop: 10
	},
	topContainer: {
		zIndex: -1,
		height: 240,
	},
	titleBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		paddingTop: 12
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	bottomContainer: {
		paddingHorizontal: 16,
		paddingVertical: 8,

	},
	reviewHeader: {
		flexDirection: 'row'
	},
	more: {
		fontSize: 16,
		fontWeight: 'bold',
		color: COLORS.text,
		alignSelf: 'center',
		paddingBottom: 10
	}
});
