import './navigation.scss';

const navigationData = [
    {
        id: 'nav-me',
        text: 'Me'
    },
    {
        id: 'nav-projects',
        text: 'Projects'
    },
    {
        id: 'nav-contact',
        text: 'Contact'
    }
];

const createListItems = (navigationData, activeId) => {
    return navigationData.map(item => {
        return `
            <li ${item.id === activeId ? 'class="active"' : ''} id="${item.id}">
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
        this.active = navigationData[0].id;
    }

    connectedCallback() {
        this.render();
    }

    handleClick(e) { 
        if (e.target.tagName === 'LI' && e.target.id !== this.active) {
            this.active = e.target.id;
            this.render();
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
