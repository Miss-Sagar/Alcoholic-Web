// App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/view/layout/Layout';
import Menu from './components/view/menu/menu';
import Teaser from './components/view/teaser/teaser';
import Gallery from './components/view/gallery/gallery';
import Booking from './components/view/booking/booking';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Menu />} />
              <Route path="/teaser" element={<Teaser />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
