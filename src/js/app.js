const helpers = {
    body: document.body,

    disableScroll: function() {
        this.body.classList.add('no-scroll');
    },

    enableScroll: function() {
        this.body.classList.remove('no-scroll');
    }
}

const header = {
    header: document.querySelector('.js-header'),
    menu: document.querySelector('.js-nav-btn'),

    init: function() {
        this.menuEvents();
    },

    menuEvents: function() {
        this.menu.addEventListener('click', () => {
            if(this.header.classList.contains('header--active')) {
                this.header.classList.remove('header--active');
                helpers.enableScroll();
            } else {
                this.header.classList.add('header--active');
                helpers.disableScroll();
            }
        })
    }
}

const tabs = {
    tabBtn: document.querySelectorAll('.js-tab-btn'),
    tabItems: document.querySelectorAll('.js-tab-item'),

    init: function() {
        if(!this.tabBtn) return;
        this.tabsEventHandler();
    },

    tabsEventHandler: function() {
        this.tabBtn.forEach(element => {
            element.addEventListener('click', (e) => {
                const clicked = e.target;
                const id = +clicked.getAttribute('data-id');
                this.tabBtn.forEach(tab => tab.classList.remove('tab__btn--active'));
                clicked.classList.add('tab__btn--active');
                this.tabItems.forEach(item => {
                    item.classList.remove('tab__item--active');
                    const itemId = +item.getAttribute('data-id');
                    if(id === itemId) {
                       item.classList.add('tab__item--active');
                    }
                })
            })
        })
    }
}

const init = function() {
    tabs.init();
    header.init();
}

init();