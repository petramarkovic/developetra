import React from 'react';
import Navbar from './Navbar';
import Button from '../ui/Button';

const Header = () => {
  return (
	<header className="header">
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
