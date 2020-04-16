// This is Authentication Services File where you can find all the authenctication related Function.
import { GoogleSignin } from '@react-native-community/google-signin'

async function trySilentSignin() {
  try {
    const userInfo = await GoogleSignin.signInSilently()
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

const googleConfig = {
  scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '158661755426-m66lsdd1db72uuqm32a2fnt3f2lneknu.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceConsentPrompt: false, // [Android] if you want to show the authorization prompt at each login.
  accountName: '' // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
}

export default {
  trySilentSignin,
  signin,
  signout,
  googleConfig
}
