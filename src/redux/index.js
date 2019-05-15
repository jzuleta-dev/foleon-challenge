import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    photos: require('./PhotosRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}