import React from 'react'
import './assets/global.css'
import ReactDOM from 'react-dom'
// import './index.css';
import App from './App'

import store from './store'
// debugger

// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale/zh_CN'
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
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider>
  </Provider>,

  document.getElementById('root')
)
