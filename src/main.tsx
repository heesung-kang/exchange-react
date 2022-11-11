import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import ScrollToTop from '@components/common/ScrollTop'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter basename="/">
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
  </HashRouter>,
)
