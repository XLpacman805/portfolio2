import './navigation.scss';

const app = document.querySelector('app-jmdev');

const navigationData = [
    {
        id: 'me',
        text: 'Me'
    },
    {
        id: 'projects',
        text: 'Projects'
    },
    {
        id: 'contact',
        text: 'Contact'
    }
];

const createListItems = (navigationData, navigationId) => {
    return navigationData.map(item => {
        return `
            <li ${item.id === navigationId ? 'class="active"' : ''} data-id="${item.id}">
                ${item.text}
            </li>
        `;
    }).join('');
};

// create custom element
class Navigation extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
        this.active = this.getAttribute('navigation-id') || navigationData[0].id;
    }

    connectedCallback() {
        this.render();
    }

    handleClick(e) { 
        if (e.target.tagName === 'LI' && e.target.dataset.id !== this.active) {
            this.active = e.target.dataset.id;
            app.setNavigationId(e.target.dataset.id);
        }
    }

    render() {
        this.innerHTML = `
            <nav>
                <h1 class="home">johnnyMezaDev.com</h1>
                    <ul class="root-ul">
                        ${createListItems(navigationData, this.active)} 
                    </ul>
            </nav>
        `;

        this.removeEventListener('click', this.handleClick);
        this.addEventListener('click', this.handleClick);
    }
}

// define the element
customElements.define('navigation-jmdev', Navigation);
