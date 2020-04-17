export const API_URL = 'https://jsonplaceholder.typicode.com/users/';

export const GOOGLE_SIGN_IN_CONFIG = {
	scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
	webClientId: '158661755426-m66lsdd1db72uuqm32a2fnt3f2lneknu.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
	offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
	account: ''
};
