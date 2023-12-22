import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Button from '../ui/Button';

const Header = () => {
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
			<a href="#" className="header__home">
				<span className='header__home-text'>.developetra</span>
			</a>
			<div className='header__row'>
				<Button>Checkout my projects</Button>
				<Navbar />
			</div>
		</div>
	</header>
  )
}

export default Header
