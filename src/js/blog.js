import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const blog = {
	blog: document.querySelector('.js-blog'),
	blogContent: document.querySelector('.js-blog-content'),

	init: function() {
		// this.blogAnimation();
	},

	blogAnimation: function() {
		const swiper = new Swiper('.swiper', {
			slidesPerView: 2.1,
			spaceBetween: 50,

			freeMode: {
				enabled: false
			},

			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},

			scrollbar: {
			  el: '.swiper-scrollbar',
			},
		  });
	}
}

export default blog;