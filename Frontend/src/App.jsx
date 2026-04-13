import React, { lazy } from 'react'
import { useState } from 'react';
import { HelmetProvider } from "react-helmet-async";
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import PrivacyPolicy from './pages/privacypolicy/PrivacyPolicy';
import TermsAndConditions from './pages/termsandconditions/TermsAndConditions';
import GoogleForm from "./components/GoogleForm";
import ScrollToTop from "./components/ScrollToTop";

import BlogAI from './pages/blog/BlogAI';
import BlogPersonalization from './pages/blog/BlogPersonalization';
import BlogSEOAEO from './pages/blog/BlogSEOAEO';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'


const NotFound = () => <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>Page Not Found Error 404!</h1>;

const AppContent = () => {
  const location = useLocation();
  const is404 = !['/',
    '/services',
    '/about',
    '/contact',
    '/privacypolicy',
    '/termsandconditions',
    '/blog',
    '/blog/ai',
    '/blog/personalization',
    '/blog/seo-aeo'
  ].includes(location.pathname);

  if (is404) {
    return <NotFound />;
  }

  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* <PopupForm /> */}
      <ScrollToTop smooth={true} />
       <Nav openForm={() => setFormOpen(true)} />

      <GoogleForm open={formOpen} setOpen={setFormOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/ai" element={<BlogAI />} />
        <Route path="/blog/personalization" element={<BlogPersonalization />} />
        <Route path="/blog/seo-aeo" element={<BlogSEOAEO />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <div className="scroll-container">
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  </div>
);

export default App;