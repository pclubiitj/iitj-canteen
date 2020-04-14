import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Authentication/Actions'
import styles from './SigninScreenStyle'


class SigninScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SigninScreen</Text>
        <Button title="Sign in" onPress={() => this.props.signin({ username:"username", password:"password" })} />
      </View>   
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    signin: (username,password) => dispatch(ExampleActions.signinUser(username,password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninScreen)