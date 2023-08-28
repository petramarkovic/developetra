import { gsap } from "gsap";

const animation = {
	body: document.querySelector('body'),
	blockMask: document.querySelector('.js-block-mask'),
	blockContent: document.querySelectorAll('.js-block-content'),

	init: function() {
		this.removeMask();
		this.backgroundChange();
		this.showContent();
	},

	removeMask: function() {
		gsap.to(this.blockMask, {
			opacity: 0,
			delay: 1,
			duration: 2,
			ease: 'sine'
		});
	},

	backgroundChange: function() {
		gsap.to(this.body, {
			backgroundColor: '#0c0b0b',
			duration: 1,
			delay: 1.5,
			ease: 'sine'
		});
	},

	showContent: function() {
		let tl = gsap.timeline({
			delay: 2.5,
			defaults: {
				duration: 0.5,
				ease: 'ease'
			},
			smoothChildTiming: true
		});

		tl.to(this.blockContent[0], {y: 0})
		.to(this.blockContent[1], {y: 0})
		.to(this.blockContent[2], {y: 0})
		.to(this.blockContent[3], {y: 0})
	}
}

export default animation;