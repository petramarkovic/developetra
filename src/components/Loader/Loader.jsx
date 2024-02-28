import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../store/ThemeContext';

export const Loader = () => {
	const { theme } = useTheme();
	const loader = useRef();
	const text = useRef();

	useEffect(() => {

		function displayRandomNumbers() {
			const loaderText = document.querySelector('.loader__text');

			if (!loaderText) {
				console.error('Loader text element not found');
				return;
			}

			const numbers = Array.from({ length: 3 }, () =>
				Math.floor(Math.random() * 100)
			);
			numbers.push(100);
			const sortedNumbers = numbers.sort((a, b) => a - b);

			let currentIndex = 0;
			const interval = 1000 / sortedNumbers.length;

			const displayNextNumber = () => {
				if (currentIndex < sortedNumbers.length) {
					loaderText.textContent = `${sortedNumbers[currentIndex]}%`;
					currentIndex++;
					setTimeout(displayNextNumber, interval);
				}
			};

			displayNextNumber();
		}

		displayRandomNumbers();
	}, []);

	useGSAP(() => {
		gsap.registerPlugin();

		let tl = gsap.timeline({ duration: 0.8 });

		tl.to(loader.current, { opacity: 0, visibility: 'hidden' });
	});

	return (
		<div
			className={`loader ${theme === 'dark' ? 'loader--dark' : ''}`}
			ref={loader}
			data-lenis-prevent='true'>
			<p className='loader__text' ref={text}></p>
		</div>
	);
};
