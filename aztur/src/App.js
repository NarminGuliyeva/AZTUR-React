import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Haqqimizda from './Pages/Haqqimizda';
import Xidmetler from './Pages/Xidmetler';
import Xidmet from './Pages/Xidmet';
import Aviabiletler from './Pages/Aviabiletler';
import Turlar from './Pages/Turlar';
import Layout from './Pages/Layout';
import Tur from './Pages/Tur';
import Hoteller from './Pages/Hoteller';
import Xeberler from './Pages/Xeberler';
import Xeber from './Pages/Xeber';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<Haqqimizda />} />
        <Route path="services" element={<Xidmetler />} />
        <Route path="service" element={<Xidmet />} />
        <Route path="planetickets" element={<Aviabiletler />} />
        <Route path="tours" element={<Turlar />} />
        <Route path="tours/:tourslug" element={<Tur />} />
        <Route path="hotels" element={<Hoteller />} />
        <Route path="news" element={<Xeberler />} />
        <Route path="news/:newsdetailsslug" element={<Xeber />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
