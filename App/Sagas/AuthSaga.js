import { put, call } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import AuthActionTypes from '../Stores/Authentication/Actions';
import NavigationService from '../Services/NavigationService';
import { setAxiosHeader, healthCheck, revokeAxiosHeader } from '../Services/API';
import { silentSignIn, signIn, signOut } from '../Services/AuthenticationServices';

function* injectToken(token) {
	try {
		yield call(setAxiosHeader, token);
		yield call(healthCheck);
		yield call(AsyncStorage.setItem, 'token', token);
		yield put(AuthActionTypes.loadToken(token));
		NavigationService.navigateAndReset('HomeScreen');
	} catch ({ message = 'Snap :(' }) {
		yield put(AuthActionTypes.error(message));
		yield call(revokeToken);
	}
}

function* revokeToken() {
	yield call(revokeAxiosHeader);
	yield call(AsyncStorage.removeItem, 'token');
	yield put(AuthActionTypes.deleteToken());
	NavigationService.navigateAndReset('SigninScreen');
}

export function* fetchUser() {
	try {
		yield put(AuthActionTypes.loadingUserInfo());
		const token = yield call(AsyncStorage.getItem, 'token');
		if (token) {
			yield call(injectToken, token);
		} else {
			const { idToken = null } = yield silentSignIn();
			yield call(injectToken, idToken);
		}
	} catch ({ message = 'Snap :(' }) {
		yield call(revokeToken);
		yield put(AuthActionTypes.error(message));
	}
}

export function* signInUser() {
	try {
		yield put(AuthActionTypes.loadingUserInfo());
		const { idToken = null } = yield signIn();
		yield call(injectToken, idToken);
	} catch ({ message = 'Snap :(' }) {
		yield put(AuthActionTypes.error(message));
	}
}

export function* signoutUser() {
	try {
		yield put(AuthActionTypes.loadingUserInfo());
		yield call(signOut);
		yield call(revokeToken);
	} catch ({ message = 'Snap :(' }) {
		yield put(AuthActionTypes.error(message));
	}
}
