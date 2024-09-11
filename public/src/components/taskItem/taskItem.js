class TaskItem extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'description', 'completed'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/taskItem/taskItem.css">
            <div class="task">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <button>Completar</button>
            </div>
        `;
        
        this.shadowRoot.querySelector('button').addEventListener('click', () => {
            this.completed = !this.completed;
            this.render();
        });

        if(!this.completed) {
            this.shadowRoot.querySelector('div').classList.toggle('task-completed');
        }
    }
}

customElements.define('task-item', TaskItem);
export default TaskItem;