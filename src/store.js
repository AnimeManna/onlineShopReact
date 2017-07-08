import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import rootReducer from './reducers/rootReducer.js'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

store.subscribe(() => console.info('Subscribe. State is', store.getState(), 'now.'))

export default store

export {
  history
}