import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import styles from './SigninScreenStyle'
import { PropTypes } from 'prop-types'
import { GoogleSigninButton } from 'react-native-google-signin'

class SigninScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SignIn Through Your Google Account!</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.props.signin}
        />
      </View>
    )
  }
}

SigninScreen.propTypes = {
  signin: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  signin: () => dispatch(AuthActionTypes.signinUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
