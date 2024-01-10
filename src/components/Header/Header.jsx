import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isScrollingUp = currentScrollPos < prevScrollPos;

			setPrevScrollPos(currentScrollPos);

			if (isScrollingUp && !visible) {
				setVisible(true);
			} else if (!isScrollingUp && visible) {
				setVisible(false);
			}
		};

		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos, visible]);

  return (
	<header className={`header ${!visible ? 'header--hidden' : ''}`}>
		<div className="header__content">
			<Link to="/" className="header__home">
				<span className='header__home-text'>NAK<span className='header__home-span'></span>D</span>
			</Link>
			<div className='header__row'>
				<a href="https://calendly.com/d/4z7-bt3-d58/one-off-meeting" target='_blank' className='btn'>Book a call</a>
				<Navbar />
			</div>
		</div>
	</header>
  )
}

