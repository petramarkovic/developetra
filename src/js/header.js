const header = {
	nav: document.querySelector('.js-nav'),
	menu: document.querySelector('.js-menu'),
	navActiveClass: 'nav--active',

	body: document.querySelector('body'),

	topScroll: 0,
	isScrollDisabled: false,
	disabledScrollClass: 'scroll-disabled',

	init: function() {
		this.toggleNavbar();
	},

	toggleNavbar: function() {
		this.menu.addEventListener('click', () => {
			this.nav.classList.contains(this.navActiveClass) ? this.nav.classList.remove(this.navActiveClass) : this.nav.classList.add(this.navActiveClass);
			this.nav.classList.contains(this.navActiveClass) ? this.disableScroll() : this.enableScroll();
		});
	},

	disableScroll: function() {
		if (!this.isScrollDisabled) {
			this.topScroll = document.documentElement.scrollTop;
			this.body.style.top = `-${this.topScroll}px`;
			this.body.classList.add(this.disabledScrollClass);
			this.isScrollDisabled = true;
		}
	},

	enableScroll: function() {
		this.body.removeAttribute('style');
		this.body.classList.remove(this.disabledScrollClass);
		document.documentElement.scrollTop = this.topScroll;
		this.isScrollDisabled = false;
	},

}

export default header;