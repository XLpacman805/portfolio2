import './styles.scss';
import './components/navigation/navigation.js';
import './components/me/me.js';

const navigations = new Map([ // value is the custom element
    ['me', '<me-jmdev></me-jmdev>'],
    ['projects', true],
    ['contact', true]
]);

class App extends HTMLElement {
    constructor() {
        super();
        this.navigationId = 'me';
        this.elementFocusQuery = null;
    }

    connectedCallback() {
        this.render();
    }


    setNavigationId(id) {
        if (navigations.has(id)){
            this.navigationId = id;
            this.render();
        }
    }

    /**
     * Used for setting focus on the element when the page is loaded.
     * @param {string} query 
     */
    setElementFocusQuery(query) {
        this.elementFocusQuery = query;
    }

    render() {
        this.innerHTML = `
            <navigation-jmdev navigation-id="${this.navigationId}"></navigation-jmdev>
            ${navigations.get(this.navigationId)}
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