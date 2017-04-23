import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import { initialState, gameReducer } from './gameReducer'
import scuttlebutt, { devToolsStateSanitizer } from 'redux-scuttlebutt'

const devToolsConfig = {
  stateSanitizer: devToolsStateSanitizer
}

const enhancer = compose(
  scuttlebutt(),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__(devToolsConfig)
    : f => f
)

const store = createStore(gameReducer, initialState, enhancer)

const rootEl = document.getElementById('root')

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  )
}

render()
store.subscribe(render)
