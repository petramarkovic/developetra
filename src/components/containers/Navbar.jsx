import React from 'react';
import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavbarToggle = () => {
		setIsNavOpen(isNavOpen => !isNavOpen);
	}

	useEffect(() => {
		const body = document.querySelector('body');
		isNavOpen ? body.classList.add('scroll-disabled') : body.classList.remove('scroll-disabled');
		const lenis = new Lenis()
		isNavOpen ? lenis.destroy() : lenis.start();
	}, [isNavOpen]);

	return (
		<nav className={`nav ${isNavOpen ? 'nav--active' : ''}`}>
			<button type='button' className='nav__menu' onClick={handleNavbarToggle}>
				<span className='nav__menu-text'>{isNavOpen ? 'Close' : 'Menu'}</span>
				<span className='nav__menu-icon'>
					<span className="nav__menu-icon-line"></span>
					<span className="nav__menu-icon-line"></span>
					<span className="nav__menu-icon-line"></span>
				</span>
			</button>
			<ul className="nav__list">
				<li className="nav__item">
					<a href="" className="nav__link nav__link--first">Projects</a>
				</li>
				<li className="nav__item">
					<a href="" className="nav__link nav__link--second">About</a>
				</li>
				<li className="nav__item">
					<a href="" className="nav__link nav__link--third">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
