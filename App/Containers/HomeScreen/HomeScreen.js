import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import AuthActionTypes from '../../Stores/Authentication/Actions';
import styles from './HomeScreenStyle.js';
import { PropTypes } from 'prop-types';

class HomeScreen extends React.Component {
	render() {
		const { signOut, loading } = this.props;
		return (
			<View style={styles.view}>
				<Text style={styles.text}>HomeScreen</Text>
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
