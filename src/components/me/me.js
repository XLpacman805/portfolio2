import './me.scss';

const data = {
    id: 'me',
    name: 'Johnny Meza',
    title: 'Senior Front-End Developer',
    h1: 'HELLO WORLD HERE I AM'    
};

class Me extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section class="${data.id}">
                <h1>HELLO WORLD HERE I AM</h1>
            </section>
        `;
    }
}

customElements.define('me-jmdev', Me);