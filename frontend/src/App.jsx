import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Careers from './components/Careers';
import Achievements from './components/Achievements';
import PrivacyPolicy from './components/privacyPolicy';
import CancellationPolicy from './components/cancellationPolicy';
import RefundPolicy from './components/refundPolicy';
import ShippingPolicy from './components/shippingPolicy';
import TermsAndConditions from './components/termsAndConditions';
import NotFound from './components/NotFound'; // Optional 404 Page
import Register from './components/Register';
import Login from './components/Login';

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="header-buttons" style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <Link to="/login" style={{ marginRight: '10px', textDecoration: 'none', color: 'black' }}>Login</Link>
        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Register</Link>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
