import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { connect } from 'react-redux'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import { PropTypes } from 'prop-types'

class SplashScreen extends React.Component {
  componentDidMount() {
    this._fetchuser()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading....</Text>
      </View>
    )
  }

  _fetchuser() {
    this.props.fetchUser()
  }
}

SplashScreen.propTypes = {
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(AuthActionTypes.fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
