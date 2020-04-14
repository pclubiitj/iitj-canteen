import { takeLatest, all } from 'redux-saga/effects'
import { AuthActionTypes } from 'App/Stores/Authentication/Actions'
import { fetchUser,signinUser, signoutUser } from './AuthSaga'

export default function* root() {
  yield all([
    takeLatest(AuthActionTypes.FETCH_USER, fetchUser),
    takeLatest(AuthActionTypes.SIGNIN_USER, signinUser),
    takeLatest(AuthActionTypes.SIGNOUT_USER, signoutUser)
  ])
}
