import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
	useEffect(() => {
		const html = document.querySelector('html');
		html.classList.add('loaded');
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		gsap.registerPlugin();

		let tl = gsap.timeline({ delay: 1, duration: 1 });

		tl.fromTo('.header', { opacity: 0 }, { opacity: 1 });
	}, []);

	return (
		<Router>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
