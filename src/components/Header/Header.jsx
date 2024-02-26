import React from 'react';
import { Navbar } from '../Navbar';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../store/ThemeContext';

export const Header = () => {
	const { theme } = useTheme();

	return (
		<header className={`header ${theme === 'dark' ? 'header--dark' : ''}`}>
			<div className='header__content'>
				<NavLink to='/' className='header__home'>
					<span>testing</span>
				</NavLink>
				<div className='header__row'>
					<span className='header__text'>
						<span className='header__text-dot'></span>
						Available for freelance work
					</span>
					<a className='header__link' href='mailto:petramarkovic996@gmail.com'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
							/>
						</svg>
						<span>petramarkovic996@gmail.com</span>
					</a>
					<Navbar />
				</div>
			</div>
		</header>
	);
};
