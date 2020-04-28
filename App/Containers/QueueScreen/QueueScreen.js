import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class QueueScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>QueueScreen</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.authentication.token
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(QueueScreen);
