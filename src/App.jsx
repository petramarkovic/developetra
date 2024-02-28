import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './store/ThemeContext';
import { Loader } from './components/Loader/Loader';

function App() {
	const { theme } = useTheme();

	useEffect(() => {
		const html = document.querySelector('html');
		html.classList.add('loaded');
		const lenis = new Lenis();

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}, []);

	useGSAP(() => {
		gsap.registerPlugin();

		let tl = gsap.timeline({ delay: 1.6, duration: 0.3 });

		tl.to('.header', { opacity: 1 });

	}, []);

	return (
		<Router>
			<Loader />
			<Header />
			<main className={`main ${theme === 'dark' ? 'main--dark' : ''}`}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
