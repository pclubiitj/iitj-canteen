import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as AuthReducer } from './Authentication/Reducers'

export default () => {
  const rootReducer = combineReducers({
    example: AuthReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
