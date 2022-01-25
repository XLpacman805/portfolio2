import './navigation-slideout.scss';
const app = document.querySelector('app-jmdev');

class NavigationSlideout extends HTMLElement {
    constructor() {
        super();
        this.active = this.getAttribute('navigation-id');
    }

    connectedCallback() {
        this.render();
    }

    handleClick = (e) => {
        if (e.target.closest ('button.close-slideout')) {
            app.toggleNavigationSlideout();
            return;
        }

        if (e.target.closest('li')) {
            const navigationId = e.target.closest('li').dataset.id;
            app.setNavigationId(navigationId, {render: false}); // no need to double re-render.
            app.toggleNavigationSlideout({render: true});
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.handleClick(e);
        }
    }

    /**
     * 
     * @param {Map} navigations 
     * @param {String} navigationId 
     */
    createListItems(navigations, navigationId) {
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

    render() {
        this.innerHTML = `
            <div aria-label="navigation mobile" class="navigation-slideout-container">
                <div class="navigation-slideout">
                    <div aria-label="header" class="navigation-slideout-header">
                        <button aria-label="close slideout navigation" class="close-slideout">
                            <i class="fas fa-times fa-lg"></i>
                        </button>
                    </div>
                    <ul class="navigation-slideout-menu">
                        ${this.createListItems(app.getNavigations(), this.active)}
                    </ul>
                </div>
            </div>
        `;

        this.removeEventListener('keydown', this.handleKeyDown);
        this.removeEventListener('click', this.handleClick);
        this.addEventListener('click', this.handleClick);
        this.addEventListener('keydown', this.handleKeyDown);
    }
}

customElements.define('navigation-slideout-jmdev', NavigationSlideout);