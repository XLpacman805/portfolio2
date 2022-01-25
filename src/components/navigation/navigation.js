import './navigation.scss';
const app = document.querySelector('app-jmdev');
const openSlideoutSelector = 'button.open-slideout';

/**
 * Create the HTML for the navigation items. Expects the app.js's getNavigations() to return a Map.
 * @param {Map} navigations 
 * @param {String} navigationId 
 * @returns 
 */
const createListItems = (navigations, navigationId) => {
    let html = '';
    for (const [key, value] of navigations) {
        html += `
            <li id="nav-${key}" tabindex="0" ${key === navigationId ? 'class="active"' : ''} data-id="${key}">
                ${value.name}
            </li>
        `;
    }
    return html;
}

// create custom element
class Navigation extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
        this.active = this.getAttribute('navigation-id');
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

        if (e.target.closest(openSlideoutSelector)) {
            app.toggleNavigationSlideout();
        }
    }

    handleKeydown(e) {
        if (e.key === 'Enter') {
            this.handleClick(e, {elementFocusQuery: '#' + e.target.id});
        }
    }

    render() {
        this.innerHTML = `
            <nav class="navigation mobile">
                <button aria-label="open slideout" class="open-slideout"> <i class="fas fa-bars"></i> </button>
                <h1 class="home"> johnnyMezaDev.com </h1>
            </nav>

            <nav class="navigation desktop">
                <h1 class="home">johnnyMezaDev.com</h1>
                    <ul class="root-ul">
                        ${createListItems(app.getNavigations(), this.active)} 
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
