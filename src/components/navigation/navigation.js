import './navigation.scss';

// create custom element
class Navigation extends HTMLElement {
    constructor() {
        super();
        this.render = this.render.bind(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav>
                <h1 class="home">JohnnyMezaDev.com</h1>
                    <ul class="root-ul">
                        <li class="active">Me</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
            </nav>
        `;
    }
}

// define the element
customElements.define('navigation-jmdev', Navigation);
