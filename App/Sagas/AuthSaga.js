import { put, call } from 'redux-saga/effects'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import NavigationService from 'App/Services/NavigationService'
import { AsyncStorage } from 'react-native';

export function* fetchUser() {
  try {
    const token = yield call(AsyncStorage.getItem, "token")
    if (token) {
      yield put(AuthActionTypes.fetchUserSuccess(token))
      NavigationService.navigate('HomeScreen')
    } else {
      NavigationService.navigate('SigninScreen')
    }
  }
  catch (err) {
    console.log("Error while accessing AsyncStorage", err)
  }
}

export function* signinUser({ data }) {
  try {
    username = data.username,
      password = data.password
    const response = yield call(api, username, password)
    yield call(AsyncStorage.setItem, "token", response.token)
    yield put(AuthActionTypes.fetchUserSuccess(response.token))
    NavigationService.navigate('HomeScreen')
  } catch (err) {
    // I m temporarly forcing app to move ahead to HomeScreen 
    yield put(AuthActionTypes.fetchUserSuccess('FakeToken'))
    // yield put(AuthActionTypes.fetchUserFailure("Some Error Occured While Connecting to API"))
    NavigationService.navigate('HomeScreen')
  }
}

export function* signoutUser() {
  try {
    yield call(AsyncStorage.removeItem, "token")
    NavigationService.navigate('SigninScreen')
  } catch (err) {
    console.log("Failed to remove token from storage!")
  }
}