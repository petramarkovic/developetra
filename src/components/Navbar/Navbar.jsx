import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Theme} from '../Theme/Theme';
import { useTheme } from '../../store/ThemeContext';

export const Navbar = () => {
	const { theme } = useTheme();
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
		<nav className={`nav ${isNavOpen ? 'nav--active ' : ''}${theme === 'dark' ? 'nav--dark' : ''}`}>
			<button type='button' className='nav__menu' onClick={handleNavbarToggle}>
				<span className='nav__menu-text sr-only'>{isNavOpen ? 'Close menu' : 'Open menu'}</span>
					<span className="nav__menu-icon-line nav__menu-icon-line--half start"></span>
					<span className="nav__menu-icon-line"></span>
					<span className="nav__menu-icon-line nav__menu-icon-line--half end"></span>
			</button>
			<div className="nav__list-wrap" data-lenis-prevent>
				<div className="nav__contact">
					<span className='nav__contact-title'>Contact</span>
					<ul className="nav__contact-list">
						<li className="nav__contact-list-item">
							<a href="" className="nav__contact-link">linkedin</a>
						</li>
						<li className="nav__contact-list-item">
							<a href="" className="nav__contact-link">github</a>
						</li>
						<li className="nav__contact-list-item">
							<a href="" className="nav__contact-link">instagram</a>
						</li>
					</ul>
				</div>
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink onClick={handleNavLinkClick} to="/" className={({isActive}) => `nav__link ${isActive && 'nav__link--active'}`}>Home</NavLink>
					</li>
					<li className="nav__item">
					<NavLink onClick={handleNavLinkClick} to="/projects" className="nav__link">Projects</NavLink>
					</li>
					<li className="nav__item">
						<NavLink onClick={handleNavLinkClick} to="/about" className="nav__link">About</NavLink>
					</li>
				</ul>
				<Theme />
			</div>
		</nav>
	)
}

