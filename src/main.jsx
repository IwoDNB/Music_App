import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './context/Context.jsx'
import TokenContextProvider from './context/TokenContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <TokenContextProvider>
    <Context>
    <App />
    </Context>
    </TokenContextProvider>
 
)
