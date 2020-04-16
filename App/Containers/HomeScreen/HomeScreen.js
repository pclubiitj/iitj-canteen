import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import styles from './HomeScreenStyle.js'
import { PropTypes } from 'prop-types'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>HomeScreen</Text>
        <Text>Here is the Dummy Token - {this.props.token}</Text>
        <Button title="Sign Out" onPress={this.props.signout} />
      </View>
    )
  }
}

HomeScreen.propTypes = {
  token: PropTypes.string,
  signin: PropTypes.func
}

const mapStateToProps = (state) => ({
  token: state.authentication.token
})

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(AuthActionTypes.signoutUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
