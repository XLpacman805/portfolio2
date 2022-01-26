import './styles.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import './components/navigation-slideout/navigation-slideout.js';
import './components/navigation/navigation.js';
import './components/me/me.js';
import './components/recommendations/recommendations.js';

class App extends HTMLElement {
    constructor() {
        super();
        this.navigationId = 'me';
        this.elementFocusQuery = null;
        this.navigationSlideoutOpen = false;
        this.__navigations = new Map([ // value is the custom element
            ['me', {
                name: 'Me',
                component: '<me-jmdev></me-jmdev>',
                selector: 'me-jmdev'
            }],
            ['projects', {
                name: 'Projects',
                component: '<section id="projects"> Projects </section>',
                selector: '#projects'
            }],
            ['contact', {
                name: 'Contact',
                component: '<section id="contact"> Contact </section>',
                selector: '#contact'
            }]
        ]);
    }

    connectedCallback() {
        this.render();
    }

    getNavigations() {
        if (this.__navigations) {
            return this.__navigations;
        }
        
        return new Map([]);
    }


    setNavigationId(id, options = {render: true}) {
        if (this.getNavigations().has(id)){
            this.navigationId = id;
            if (options.render) {
                this.render();
            }
        }
    }

    /**
     * Used for setting focus on the element when the page is loaded.
     * @param {string} query 
     */
    setElementFocusQuery(query) {
        this.elementFocusQuery = query;
    }

    toggleNavigationSlideout(options = {render: true}) {
        this.navigationSlideoutOpen = !this.navigationSlideoutOpen;
        if (options.render) {
            this.render();
        }
    }

    render() {
        this.innerHTML = `
            ${this.navigationSlideoutOpen ? `<navigation-slideout-jmdev aria-label="navigation container slideout" navigation-id="${this.navigationId}"></navigation-slideout-jmdev>` : ''}

            <navigation-jmdev navigation-id="${this.navigationId}" aria-label="navigation container"></navigation-jmdev>
            
            ${this.getNavigations().get(this.navigationId).component}            
        `;

        if (this.elementFocusQuery) {
            const element = this.querySelector(this.elementFocusQuery);
            if (element) {
                element.focus();
            }
        }
    }
}

customElements.define('app-jmdev', App);