import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import styles from './SigninScreenStyle'
import { PropTypes } from 'prop-types'

class SigninScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SigninScreen</Text>
        <Button title="Sign in" onPress={() => this.props.signin({ username: "username", password: "password" })} />
      </View>
    )
  }
}

SigninScreen.propTypes = {
  signin: PropTypes.func
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  signin: (username, password) => dispatch(AuthActionTypes.signinUser(username, password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninScreen)