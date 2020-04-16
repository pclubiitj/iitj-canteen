import { put, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import AuthActionTypes from 'App/Stores/Authentication/Actions'
import NavigationService from 'App/Services/NavigationService'
import AuthenticationServices from 'App/Services/AuthenticationServices'

export function* fetchUser() {
  try {
    const token = yield call(AsyncStorage.getItem, 'token')
    if (token) {
      yield put(AuthActionTypes.fetchUserSuccess(token))
      NavigationService.navigate('HomeScreen')
    } else {
      // If token not found let's try silent Signin
      const userInfo = yield call(AuthenticationServices.trySilentSignin)
      if (userInfo) {
        yield call(AsyncStorage, 'token', userInfo.idToken) //Save Token in async storage
        yield put(AuthActionTypes.fetchUserSuccess(userInfo.idToken)) //set redux state token to token
        NavigationService.navigate('HomeScreen')
      } else {
        // Both of these failed so prompt user to signinScreen
        NavigationService.navigate('SigninScreen')
      }
    }
  } catch (err) {
    console.log('Error during fetchUser', err)
    yield put(AuthActionTypes.fetchUserFailure(err))
  }
}

export function* signinUser() {
  try {
    const userInfo = yield call(AuthenticationServices.signin)
    yield call(AsyncStorage.setItem, 'token', userInfo.idToken)
    yield put(AuthActionTypes.fetchUserSuccess(userInfo.idToken))
    NavigationService.navigate('HomeScreen')
  } catch (err) {
    console.log('Error During Signin Saga', err)
    yield put(AuthActionTypes.fetchUserFailure(err))
  }
}

export function* signoutUser() {
  try {
    yield call(AuthenticationServices.signout)
    yield call(AsyncStorage.removeItem, 'token')
    NavigationService.navigate('SigninScreen')
  } catch (err) {
    console.log('Failed to remove token from storage!')
    yield put(AuthActionTypes.fetchUserFailure(err))
  }
}
