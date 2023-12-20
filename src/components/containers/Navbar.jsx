import React from 'react';
import { useState } from 'react';

const Navbar = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleNavbarToggle = () => {
		setIsNavOpen(isNavOpen => !isNavOpen);
	}
  return (
	<nav className={`nav ${isNavOpen && 'nav--active'}`}>
		<button type='button' className='nav__menu' onClick={handleNavbarToggle}>
			<span className='nav__menu-text'>Menu</span>
			<span className='nav__menu-icon'>
				<span className="nav__menu-icon-line"></span>
				<span className="nav__menu-icon-line"></span>
				<span className="nav__menu-icon-line"></span>
			</span>
		</button>
		<ul className="nav__list">
			<li className="nav__item">
				<a href="" className="nav__link">Projects</a>
			</li>
			<li className="nav__item">
				<a href="" className="nav__link">About</a>
			</li>
			<li className="nav__item">
				<a href="" className="nav__link">Contact</a>
			</li>
		</ul>
	</nav>
  )
}

export default Navbar
