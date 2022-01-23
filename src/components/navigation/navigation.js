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
            <li id="nav-${item.id}" tabindex="0" ${item.id === navigationId ? 'class="active"' : ''} data-id="${item.id}">
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

    handleClick(e, options = {elementFocusQuery: false}) { 
        if (e.target.tagName === 'LI' && e.target.dataset.id !== this.active) {
            // Ensure the element will be focused upon next render.
            if (options.elementFocusQuery) {
                app.setElementFocusQuery(options.elementFocusQuery);
            }

            this.active = e.target.dataset.id;
            app.setNavigationId(e.target.dataset.id);
        }
    }

    handleKeydown(e) {
        if (e.key === 'Enter') {
            this.handleClick(e, {elementFocusQuery: '#' + e.target.id});
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
        this.removeEventListener('keydown', this.handleKeydown);
        this.addEventListener('click', this.handleClick);
        this.addEventListener('keydown', this.handleKeydown);
    }
}

// define the element
customElements.define('navigation-jmdev', Navigation);
