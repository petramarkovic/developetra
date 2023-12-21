import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Header from "./components/containers/Header";
import Banner from "./components/containers/Banner";
import Footer from "./components/containers/Footer";

function App() {

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('loaded');
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <Header />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default App
