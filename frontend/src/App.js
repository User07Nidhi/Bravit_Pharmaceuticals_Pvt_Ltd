import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Header />
      {/* Main content area */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cancellationPolicy" element={<CancellationPolicy />} />
          <Route path="/refundPolicy" element={<RefundPolicy />} />
          <Route path="/shippingPolicy" element={<ShippingPolicy />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
