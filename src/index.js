import './styles.scss';
import './components/navigation/navigation.js';
import './components/me/me.js';



const activeSections = new Map([ // value is the custom element
    ['me', '<me-jmdev></me-jmdev>'],
    ['projects', true],
    ['contact', true]
]);

class App extends HTMLElement {
    constructor() {
        super();
        this.activeSection = activeSections.get('me');
    }

    connectedCallback() {
        this.render();
    }

    createActiveSection(section) {
        return `
            <section id="${section.id}">
                ${this}
            </section>
        `;
    }

    render() {
        this.innerHTML = `
            <navigation-jmdev></navigation-jmdev>
            ${this.activeSection}
        `;
    }
}

customElements.define('app-jmdev', App);