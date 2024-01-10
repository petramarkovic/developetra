import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavbarToggle = () => {
		setIsNavOpen(isNavOpen => !isNavOpen);
	}

	const handleNavLinkClick = () => {
		setIsNavOpen(isNavOpen => !isNavOpen);
	}

	useEffect(() => {
		const body = document.querySelector('body');
		isNavOpen ? body.classList.add('scroll-disabled') : body.classList.remove('scroll-disabled');
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
			<ul className="nav__list" data-lenis-prevent>
				<li className="nav__item">
					<Link onClick={handleNavLinkClick} to="/" className="nav__link">Home</Link>
				</li>
				<li className="nav__item">
					<Link onClick={handleNavLinkClick} to="/services" className="nav__link">Services</Link>
				</li>
				<li className="nav__item">
				<Link onClick={handleNavLinkClick} to="/projects" className="nav__link">Projects</Link>
				</li>
				<li className="nav__item">
					<Link onClick={handleNavLinkClick} to="/about" className="nav__link">About</Link>
				</li>
			</ul>
		</nav>
	)
}

