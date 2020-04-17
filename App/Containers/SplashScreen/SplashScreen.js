import React from 'react';
import { Text, View } from 'react-native';
import styles from './SplashScreenStyle';
import { connect } from 'react-redux';
import AuthActionTypes from '../../Stores/Authentication/Actions';
import { PropTypes } from 'prop-types';

class SplashScreen extends React.Component {
	componentDidMount() {
		const { fetchUser } = this.props;
		fetchUser();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Hi!</Text>
			</View>
		);
	}
}

SplashScreen.propTypes = {
	fetchUser: PropTypes.func
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
	fetchUser: () => dispatch(AuthActionTypes.fetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
