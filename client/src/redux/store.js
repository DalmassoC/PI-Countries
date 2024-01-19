import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk' //  permite el manejo de acciones asíncronas en Redux.
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleWare))
)

export default store
