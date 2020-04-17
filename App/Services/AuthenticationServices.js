// This is Authentication Services File where you can find all the authenctication related Function.
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { GOOGLE_SIGN_IN_CONFIG } from '../Config/index.dev';

GoogleSignin.configure(GOOGLE_SIGN_IN_CONFIG);

export async function silentSignIn() {
	try {
		const userInfo = await GoogleSignin.signInSilently();
		return userInfo;
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_REQUIRED) {
			// user has not signed in yet
		} else {
			// some other error happened, possibly network error
		}
		return {};
	}
}

export async function signIn() {
	try {
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		return userInfo;
	} catch (error) {
		if (error.code === statusCodes.SIGN_IN_CANCELLED) {
			// user cancelled the login flow
		} else if (error.code === statusCodes.IN_PROGRESS) {
			// operation (e.g. sign in) is in progress already
		} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
			// play services not available or outdated
		} else {
			// some other error happened, possibly network error
		}
		return {};
	}
}

export async function signOut() {
	try {
		await GoogleSignin.revokeAccess();
		await GoogleSignin.signOut();
	} catch (error) {
		console.error(error);
	}
}
