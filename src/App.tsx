import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import NotFound from '@components/error/NotFound'
import CoinQuote from '@pages/CoinQuote'
import Top from '@components/common/Top'
import BuyCoin from '@pages/BuyCoin'
import BuyComplete from '@pages/BuyComplete'
import Index from '@pages/Index'

function App() {
  const location = useLocation()
  return (
    <div>
      <Top />
      <Routes location={location}>
        <Route path="/" element={<Index />}></Route>
        <Route path="/coinQuote" element={<CoinQuote />}></Route>
        <Route path="/buy/:name/:abbr" element={<BuyCoin />} />
        <Route path="/buyComplete/:abbr/:krw/:exchange" element={<BuyComplete />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
