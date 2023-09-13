import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

const animation = {
	body: document.querySelector('body'),

	init: function() {
		this.headingsAnimation();
		this.textAnimation();
	},

	headingsAnimation: function() {
		const splitHeadings = document.querySelectorAll('.reveal-heading');
		splitHeadings.forEach((char, i) => {
			gsap.registerPlugin(ScrollTrigger);

			const text = new SplitType(char, {
				types: 'chars'
			})

			gsap.from(text.chars, {
				scrollTrigger: {
					trigger: char,
					start: 'top 80%',
					end: 'top 20%',
					scrub: false,
					toggleActions: 'play play complete reverse'
				},
				opacity: 0,
				y: '100',
				scaleY: 0,
				transformOrigin: 'top',
				stagger: 0.1
			})
		});
	},

	textAnimation: function() {
		const splitText = document.querySelectorAll('.reveal-text');
		splitText.forEach((char, i) => {
			gsap.registerPlugin(ScrollTrigger);

			const text = new SplitType(char, {
				types: 'chars'
			})

			gsap.from(text.chars, {
				scrollTrigger: {
					trigger: char,
					start: 'top bottom',
					end: 'top 30%',
					scrub: true,
					toggleActions: 'play play complete reverse'
				},
				opacity: 0,
				stagger: 0.1,
				duration: 1
			})
		});
	}

}

export default animation;