import { Theme } from '../Theme/Theme';
import { useTheme } from '../../store/ThemeContext';

export const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer className={`footer ${theme === 'dark' ? 'footer--dark' : ''}`}>
			<div className='footer__content'>
				<div className="footer__copy">
					<span>developetra &copy; </span>
					<span>2024</span>
				</div>
				<Theme />
			</div>
		</footer>
	);
};
