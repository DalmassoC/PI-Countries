import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom' //Sirve para un movimiento fluido entre los path/links
import store from './redux/store'
import { Provider } from 'react-redux' ; //Configuracion para que redux maneje estados

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

