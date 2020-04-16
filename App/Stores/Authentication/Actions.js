import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations from asyncStorage
  fetchUser: null,
  // Sign user in and send data to API to get back token
  signinUser: ['data'],
  // User informations were successfully fetched
  fetchUserSuccess: ['token'],
  // Sign User Out and Remove The Token
  signoutUser: null,
  // An error occurred
  fetchUserFailure: ['errorMessage']
})

export const AuthActionTypes = Types
export default Creators
