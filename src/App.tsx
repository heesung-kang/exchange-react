import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@components/error/NotFound";
import CoinQuote from "@pages/CoinQuote";
import Top from "@components/common/Top";
import BuyCoin from "@pages/BuyCoin";

function App() {
  return (
    <div>
      <Top />
      <Routes location={location}>
        <Route path="/" element={<CoinQuote />} />
        <Route path="/buy" element={<BuyCoin />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
