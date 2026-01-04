import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.jsx';
import Home from './Home.jsx';
import SellHome from './SellHome.jsx';
import BuyHome from './BuyHome.jsx';
import PageNotFound from './PageNotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/sellHome" element={<SellHome />} />
          <Route path="/buyHome" element={<BuyHome />} />
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
