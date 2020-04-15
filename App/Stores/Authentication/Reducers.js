import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthActionTypes } from './Actions'

export const fetchUserSuccess = (state, { token }) => ({
  ...state,
  token: token,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  token: null,
  userErrorMessage: errorMessage,
})

export const signoutUser = (state) => ({
  ...state,
  token: null,
})

export const reducer = createReducer(INITIAL_STATE, {
  [AuthActionTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [AuthActionTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [AuthActionTypes.SIGNOUT_USER]: signoutUser
})
