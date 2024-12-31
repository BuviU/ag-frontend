import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cartpage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import { CartProvider } from './context/CartContext';
import ConfirmationPage from './pages/ConfirmationPage'; 


const App = () => {
  return (
    <CartProvider>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Agro Hub
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
