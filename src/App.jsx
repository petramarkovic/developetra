import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from '@studio-freight/lenis'
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { ServiceDetails } from "./pages/ServiceDetails";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('loaded');
    const lenis = new Lenis()

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time)=>{
	lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)
  }, []);

  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:service" element={<ServiceDetails />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
