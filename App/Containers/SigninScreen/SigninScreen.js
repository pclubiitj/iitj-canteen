import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import AuthActionTypes from '../../Stores/Authentication/Actions';
import styles from './SigninScreenStyle';
import { PropTypes } from 'prop-types';
import { GoogleSigninButton } from '@react-native-community/google-signin';

class SigninScreen extends React.Component {
	render() {
		const { signIn, loading, error } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>SignIn Through Your Google Account!</Text>
				<GoogleSigninButton
					style={{ width: '80%', height: 60 }}
					size={GoogleSigninButton.Size.Wide}
					color={GoogleSigninButton.Color.Light}
					onPress={signIn}
					disabled={loading}
				/>
				<Text>{error}</Text>
			</View>
		);
	}
}

SigninScreen.propTypes = {
	signIn: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.string
};

const mapStateToProps = (state) => ({
	error: state.authentication.errorMessage,
	loading: state.authentication.loadingUserInfo
});

const mapDispatchToProps = (dispatch) => ({
	signIn: () => dispatch(AuthActionTypes.signInUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen);
