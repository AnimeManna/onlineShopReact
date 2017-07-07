import {
  createStore
} from 'redux'
import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer)

store.subscribe(() => console.info('Subscribe. State is', store.getState(), 'now.'))
export default store