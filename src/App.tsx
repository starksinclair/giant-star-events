import "./App.css"
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import ServicePage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Analytics />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;