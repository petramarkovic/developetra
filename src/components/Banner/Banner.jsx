import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { useTheme } from '../../store/ThemeContext';


export const Banner = () => {
	const { theme } = useTheme();

	const container = useRef();
	const firstLine = useRef();
	const secondLine = useRef();
	const thirdLine = useRef();
	const text = useRef();
	const name = useRef();

	useGSAP(() => {
		gsap.registerPlugin();

		let tl = gsap.timeline({ delay: 1, duration: 0.3 });

		tl.to(firstLine.current, { y: 0, opacity: 1 });
		tl.to(secondLine.current, { y: 0, opacity: 1 });
		tl.to(thirdLine.current, { y: 0, opacity: 1 });
		tl.to(text.current, { opacity: 1, x: 0 });
		tl.to(name.current, { opacity: 0.8, x: 0 });

	}, { scope: container });

	return (
		<section className={`banner ${theme === 'dark' ? 'banner--dark' : ''}`} ref={container}>
			<div className="banner__content">
				<h1 className='banner__title'>
					<span className='banner__title-span' ref={firstLine}>asdfg</span>
					<span className='banner__title-span' ref={secondLine}>asdfghjk</span>
					<span className='banner__title-span' ref={thirdLine}>asdfghjklpoi</span>
				</h1>
				<div className='banner__col'>
					<h2 className='h2' ref={name}>
						<span>zxcvb</span>
						<span>aswdefrg</span>
					</h2>
					<p className="banner__text" ref={text}>
						<span className='tag'></span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, aliquid!
					</p>
				</div>
			</div>
		</section>
	);
};
