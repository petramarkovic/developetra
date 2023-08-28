import animation from './animation.js';

const init = {
	init: function() {
		const html = document.querySelector('html');
	
		window.addEventListener('load', () => {
			setTimeout(() => {
				html.classList.add('loaded');
			}, 10);
		});

		animation.init();
	}
};

export default init;
