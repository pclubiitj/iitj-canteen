import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import { GoogleSignin } from '@react-native-community/google-signin'
import AuthenticationServices from 'App/Services/AuthenticationServices'

class RootScreen extends Component {
  componentDidMount() {
    GoogleSignin.configure(AuthenticationServices.googleConfig)
  }

  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen)
