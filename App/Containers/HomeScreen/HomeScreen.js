import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './HomeScreenStyle.js';
import { PropTypes } from 'prop-types';

class HomeScreen extends React.Component {
	render() {
		const { loading } = this.props;
		return (
			<View style={styles.view}>
				<Text style={styles.text}>HomeScreen</Text>
				<Button onPress={() => this.props.navigation.navigate('DetailScreen')} title="DetailScreen" />
			</View>
		);
	}
}

HomeScreen.propTypes = {
	token: PropTypes.string,
	loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
	token: state.authentication.token,
	loading: state.authentication.loadingUserInfo
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
