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

    render() {
        this.innerHTML = `
            <navigation-jmdev navigation-id="${this.navigationId}"></navigation-jmdev>
            ${navigations.get(this.navigationId)}
        `;
    }
}

customElements.define('app-jmdev', App);