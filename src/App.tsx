import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "John's Green Rocks Farmstay - Private Stay in Munnar, Kerala";
    
    // Smooth scroll for anchor links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="font-sans">
      <header>
        <Navbar />
      </header>
      
      <main>
        <Hero />
        <About />
        <Experiences />
        <Accommodations />
        <Testimonials />
        <BookingForm />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;