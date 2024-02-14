import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react';
import Wrap from '../ui/Wrap';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';


export const LargeCard = ({ color, title, accent, image, alt, href, desc }) => {
	const linkState = {
		title: title,
		desc: desc,
		color: color
	}

	const largeCardRef = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: largeCardRef.current,
				start: "top 90%",
				end: "60% bottom",
				scrub: 1
			}
		})

		tl.fromTo(largeCardRef.current, { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 1 });

		return () => tl.scrollTrigger.kill();
	}, []);

	return (
		<section className='large-card' ref={largeCardRef}>
			<Wrap>
				<div className={`large-card__content bg-${color}`}>
					<div className="large-card__col bg-noise">
						<span className="tag">{ accent }</span>
						<h2 className="h3 large-card__title">{ title }</h2>
						<Link state={linkState} className='btn' to={href}>Explore</Link>
					</div>
					<div className="large-card__col">
						<img src={image} alt={alt} className='large-card__img' />
					</div>
				</div>
			</Wrap>
		</section>
	)
}

