import React from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import ExampleActions from 'App/Stores/Authentication/Actions'
import styles from './HomeScreenStyle.js'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Button title='Sign Out' onPress={this.props.signout}/>
        <Text style={styles.text}>HomeScreen</Text>
      </View>     
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(ExampleActions.signoutUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
