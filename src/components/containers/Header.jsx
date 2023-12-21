import React from 'react';
import Wrap from '../ui/Wrap';
import Navbar from './Navbar';
import Button from '../ui/Button';

const Header = () => {
  return (
	<header className="header">
		<Wrap>
			<div className="header__content">
				<a href="#" className="header__home">
					<span className='header__home-text'>.logo</span>
				</a>
				<div className='header__row'>
					<Button>Checkout my projects</Button>
					<Navbar />
				</div>
			</div>
		</Wrap>
	</header>
  )
}

export default Header
