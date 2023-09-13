const scroll = {
	btn: document.querySelector('.js-scroll-top'),

	init: function() {
		this.scrollToTop();
	},

	scrollToTop: function() {
		this.btn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
}

export default scroll;