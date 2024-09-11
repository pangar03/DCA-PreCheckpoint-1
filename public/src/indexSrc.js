import * as components from "./components/indexComponents.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/indexGlobal.css">
            <section>
                <h1>Tareas</h1>
                <task-list></task-list>
            </section>
        `;
    }
}

customElements.define('app-container', AppContainer);