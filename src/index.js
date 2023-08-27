import './style.scss';
import './assets/developetra-mask.png';
import './assets/github.svg';
import './assets/linkedin.svg';
import './assets/instagram.svg';
import './assets/email.svg';
import './assets/arrow.svg';

function init() {
    const html = document.querySelector('html');

    window.addEventListener('load', () => {
        setTimeout(() => {
            html.classList.add('loaded');
        }, 10);
    });
}

init();