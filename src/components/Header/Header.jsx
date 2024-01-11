import React from 'react';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
	<header className={`header`}>
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

