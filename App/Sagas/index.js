import { takeLatest, all } from 'redux-saga/effects';
import { AuthActionTypes } from '../Stores/Authentication/Actions';
import { fetchUser, signInUser, signoutUser } from './AuthSaga';

export default function* root() {
	yield all([
		takeLatest(AuthActionTypes.FETCH_USER, fetchUser),
		takeLatest(AuthActionTypes.SIGN_IN_USER, signInUser),
		takeLatest(AuthActionTypes.SIGN_OUT_USER, signoutUser)
	]);
}
