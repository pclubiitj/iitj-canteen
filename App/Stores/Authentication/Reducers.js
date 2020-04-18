import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { AuthActionTypes } from './Actions';

export const loadToken = (state, { token }) => ({
	...state,
	token,
	errorMessage: null,
	loadingUserInfo: false
});

export const error = (state, { message }) => ({
	...state,
	token: null,
	errorMessage: message,
	loadingUserInfo: false
});

export const deleteToken = (state) => ({
	...state,
	token: null,
	loadingUserInfo: false
});

export const loadingUserInfo = (state) => ({
	...state,
	loadingUserInfo: !state.loadingUserInfo
});

export const reducer = createReducer(INITIAL_STATE, {
	[AuthActionTypes.DELETE_TOKEN]: deleteToken,
	[AuthActionTypes.ERROR]: error,
	[AuthActionTypes.LOAD_TOKEN]: loadToken,
	[AuthActionTypes.LOADING_USER_INFO]: loadingUserInfo
});
