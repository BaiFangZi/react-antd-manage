import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './App'
import './assets/global.css'
import store from './store'
// debugger

// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// import { rootReducer } from './reducres'

// import router from './router'
// import { BrowserRouter as Router } from 'react-router-dom'
// import NavBar from './components/Nav/Nav.jsx'

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(logger, thunk))
// )

// store.subscribe(() => {})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)
