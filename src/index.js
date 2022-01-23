import './styles.scss';
import './components/navigation/navigation.js';



class App extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <navigation-jmdev></navigation-jmdev>
        `;
    }
}

customElements.define('app-jmdev', App);