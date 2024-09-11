import TaskItem from "../taskItem/taskItem.js";

class TaskList extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.taskList = [];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/taskList/taskList.css">
        `;

        this.taskList.forEach(task => {
            this.shadowRoot.appendChild(task);
        });

        const taskForm = document.createElement('form');
        taskForm.classList.add("task-form");
        taskForm.innerHTML= `
            <label for="task-name">Ingrese el nombre de la tarea</label>
            <input type="text" name="task-name" id="task-name" placeholder="Nombre de la tarea" required>
            <label for="task-description">Ingrese la descripcion de la tarea</label>
            <input type="text" name="task-description" id="task-description" placeholder="Descripcion de la tarea required">
            <input id="submit-button" type="submit" value="Agregar Tarea">
        `;

        this.shadowRoot.appendChild(taskForm);

        taskForm.addEventListener("submit" , (e) => {
            e.preventDefault();

            const taskName = e.target.querySelector("#task-name").value;
            const taskDescription = e.target.querySelector("#task-description").value;

            this.addTask(taskName, taskDescription);
        })
    }

    addTask(taskName, taskDescription) {
        const newTask = this.ownerDocument.createElement('task-item');
        newTask.setAttribute('name', taskName);
        newTask.setAttribute('description', taskDescription);
        newTask.setAttribute('completed', false);

        this.taskList.push(newTask);
        this.render();
    }
}

customElements.define('task-list', TaskList);
export default TaskList;