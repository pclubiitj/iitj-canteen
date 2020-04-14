import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';

import { navigate } from '../navigationRef';

const AuthReducer = (state,action)=>{
    switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...state,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...state,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...state,
            isSignout: true,
            userToken: null,
          };
        default:
            return {
              isLoading: true,
              isSignout: false,
              userToken: null,
          }
      }
}

const tryLocalSignin = dispatch =>async()=>{
    const token = await AsyncStorage.getItem('token')
    if(token){
      dispatch({type:'SIGN_IN',payload:token})
      navigate('HomeScreen');
    }
    else{
      navigate('SigninScreen');
    }
  }

const signin = (dispatch)=>{
    return async ({ email,password })=>{
      try{
        //here we will make calls to api after sigin
        const response = await Api.post('/signin',{email,password});
        await AsyncStorage.setItem('token',response.data.token)
        dispatch({type:'SIGN_IN',payload: response.data.token})
        navigate('HomeScreen');
      }catch(err){
        //console.log(err)
        //i m temporarly forcing the app to navigate to homescreen here!
        dispatch ({ type:'SIGN_IN',payload:'Fake_Token' });
        navigate('HomeScreen');
      }
    }
  }
  
const signout = (dispatch)=> {
  return async ()=>{
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    navigate('SigninScreen')
  }
}

export const {Provider,Context} = createDataContext(
    AuthReducer,
    {tryLocalSignin,signin,signout},
    {
        isLoading: true,
        isSignout: false,
        userToken: null,
    }
  )