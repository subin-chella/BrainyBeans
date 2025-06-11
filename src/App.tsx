import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Questionnaire } from './components/Questionnaire';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SaleDays } from './components/SaleDays';
import { Testimonials } from './components/Testimonials';
import { BooksSection } from './components/BooksSection';
import { ToysSection } from './components/ToysSection';
import { HowItWorks } from './components/HowItWorks';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-x-hidden">
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <About />
        <Questionnaire />
        <FeaturedProducts />
        <SaleDays />
        <BooksSection />
        <ToysSection />
        <Testimonials />
        <HowItWorks />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;