/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Todo } from "./todo/todo";

export class Playground extends Component {
    static template = "owl_playground.playground";

    static components = { Counter, Todo };

    setup() {
        this.state = useState({
            id: 5,
            todos: [
                { id: 1, description: "buy milk 1", done: false },
                { id: 2, description: "buy milk 2", done: true },
                { id: 3, description: "buy milk 3", done: false },
                { id: 4, description: "buy milk 4", done: true }
            ],
            description: ''
        })
    }

    addTodo(event) {
        if (event.keyCode === 13 && this.state.description !== '') {
            this.state.todos.push({ id: this.state.id++, description: this.state.description, done: false });
            this.state.description = '';
        }
    }
}
