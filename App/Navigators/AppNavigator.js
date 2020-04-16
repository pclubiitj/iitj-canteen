import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from 'App/Containers/HomeScreen/HomeScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import SigninScreen from 'App/Containers/SigninScreen/SigninScreen'

const StackNavigator = createStackNavigator(
  {
    MainScreen: SplashScreen,
    SigninScreen: SigninScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
