import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import SigninScreen from 'App/Containers/SigninScreen/SigninScreen'
import GoogleSignIns from 'App/Containers/GoogleSignIn/GoogleSignIn'

const StackNavigator = createStackNavigator(
  {
    GoogleSignIn: GoogleSignIns,
    MainScreen: SplashScreen,
    SigninScreen: SigninScreen,
    HomeScreen: HomeScreen
  },
  {
    initialRouteName: 'GoogleSignIn',
    headerMode: 'none'
  }
)

export default createAppContainer(StackNavigator)
