import React from 'react'
import { Text, View,Button } from 'react-native'
import styles from './SplashScreenStyle'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Authentication/Actions'
import { PropTypes } from 'prop-types'

class SplashScreen extends React.Component {
  render() {
    this.props.fetchUser()
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading....</Text>
      </View>
    )
  }
}

SplashScreen.propTypes = {
  fetchUser: PropTypes.func
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)