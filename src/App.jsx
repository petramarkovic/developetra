import { useEffect } from "react";
import Header from "./components/containers/Header";
import Banner from "./components/containers/Banner";
import Footer from "./components/containers/Footer";

function App() {

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('loaded');
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
