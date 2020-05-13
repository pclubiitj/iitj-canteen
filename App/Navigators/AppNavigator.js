import { createAppContainer } from 'react-navigation';

import { AsyncStorage } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import SigninScreen from '../Containers/SigninScreen/SigninScreen';
import PastOrdersScreen from '../Containers/PastOrdersScreen/PastOrderScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import QueueScreen from '../Containers/QueueScreen/QueueScreen';
import DetailScreen from '../Containers/DetailScreen/DetailScreen';
import IntroScreen from '../Containers/IntroScreen/IntroScreen';

import React from 'react';
import { View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator(
	{
		HomeScreen: HomeScreen,
		DetailScreen: DetailScreen
	},
	{
		initialRouteName: 'HomeScreen',
		headerMode: "none"
	}
);

const BottomStack = createMaterialBottomTabNavigator(
	{
		PastOrdersScreen: {
			screen: PastOrdersScreen,
			navigationOptions: {
				tabBarLabel: 'PastOrders',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MaterialCommunityIcons style={{ color: tintColor }} size={25} name={'food'} />
					</View>
				)
			}
		},
		HomeStack: {
			screen: HomeStack,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<Ionicon style={{ color: tintColor }} size={25} name={'ios-home'} />
					</View>
				)
			}
		},
		QueueScreen: {
			screen: QueueScreen,
			navigationOptions: {
				tabBarLabel: 'OrderQueue',
				tabBarIcon: ({ tintColor }) => (
					<View>
						<MaterialIcon style={{ color: tintColor }} size={25} name={'queue'} />
					</View>
				)
			}
		}
	},
	{
		initialRouteName: 'HomeStack',
		barStyle: {
			backgroundColor: '#f2f2f2',
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,
			overflow: 'hidden'
		}
	}
);

const Drawer = createDrawerNavigator(
	{
		MainStack: BottomStack,
		ProfileScreen: ProfileScreen
	},
	{
		initialRouteName: 'MainStack'
	}
);

const StackNavigator = createStackNavigator(
	{
		IntroScreen: IntroScreen,
		SplashScreen: SplashScreen,
		LoginFlow: SigninScreen,
		MainFlow: Drawer
	},
	{
		initialRouteName: AsyncStorage.getItem('FirstTimeUser') ? 'SplashScreen' : 'IntroScreen',
		headerMode: 'none'
	}
);

export default createAppContainer(StackNavigator);
