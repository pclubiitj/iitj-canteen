// This is Authentication Services File where you can find all the authenctication related Function.
import { GoogleSignin } from 'react-native-google-signin'

async function trySilentSignin() {
  try {
    const userInfo = await GoogleSignin.signInSilently()
    console.log(userInfo)
    return userInfo
  } catch (err) {
    console.log('Try Silent Signin Error -', err)
  }
}

async function signin() {
  try {
    await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    return userInfo
  } catch (error) {
    console.log('Google Signin Error', error)
  }
}

async function signout() {
  try {
    await GoogleSignin.revokeAccess()
    await GoogleSignin.signOut()
  } catch (error) {
    console.log('Error While Signin user out!', error)
  }
}

export default {
  trySilentSignin,
  signin,
  signout
}
