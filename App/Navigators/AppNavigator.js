import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import SigninScreen from '../Containers/SigninScreen/SigninScreen';

const StackNavigator = createStackNavigator(
	{
		MainScreen: SplashScreen,
		SigninScreen: SigninScreen,
		HomeScreen: HomeScreen
	},
	{
		initialRouteName: 'MainScreen',
		headerMode: 'none'
	}
);

export default createAppContainer(StackNavigator);
