import React from 'react';
import Wrap from '../ui/Wrap';
import Navbar from './Navbar';
import Button from '../ui/Button';

const Header = () => {
  return (
	<header className="header">
		<Wrap>
			<a href="#" className="header__home">
				<span className='heaedr__home-text'>.developetra</span>
			</a>
			<div className='header__row'>
				<Button>Checkout my projects</Button>
				<Navbar />
			</div>
		</Wrap>
	</header>
  )
}

export default Header
