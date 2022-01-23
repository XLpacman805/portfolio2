import './navigation.scss';

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

const createListItems = (navigationData, activeId) => {
    return navigationData.map(item => {
        return `
            <li ${item.id === activeId ? 'class="active"' : ''} data-id="${item.id}">
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
        console.log(e.target.dataset);
        if (e.target.tagName === 'LI' && e.target.dataset.id !== this.active) {
            this.active = e.target.dataset.id;
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
