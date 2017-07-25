import React, {Component} from 'react';
import './todo.component.css';
import NewTodo from "../new-todo/new-todo.component";
import TodoList from "../todo-list/todo-list.component";

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todos: []
        };

        this.onTodoAdded = this.onTodoAdded.bind(this);
        this.onTodoDeleted = this.onTodoDeleted.bind(this);
        this.onTodoUpdated = this.onTodoUpdated.bind(this);
        this.setMouseOver = this.setMouseOver.bind(this);
        this.setDone = this.setDone.bind(this);
    }

    render() {
        return (
            <section className="todo-container">
                <NewTodo onTodoAdded={this.onTodoAdded}/>
                {this.state.todos.length > 0 &&
                <TodoList setDone={this.setDone} setMouseOver={this.setMouseOver} onTodoDeleted={this.onTodoDeleted}
                          onTodoUpdated={this.onTodoUpdated} todos={this.state.todos}/>}
            </section>
        );
    }

    /**
     * Add TODO to list.
     * @param todo New TODO.
     */
    onTodoAdded(todo) {
        const newTodos = this.state.todos;
        newTodos.push(todo);
        this.setState({todos: newTodos});
    }

    /**
     * Delete TODO from list.
     * @param index Index of TODO to delete.
     */
    onTodoDeleted(index) {
        const newTodos = this.state.todos;
        newTodos.splice(index, 1);

        this.setState({todos: newTodos});
    }

    /**
     * Update TODO in list.
     * @param index Index of TODO to update.
     * @param newTodo New value of TODO.
     */
    onTodoUpdated(index, newTodo) {
        const todo = this.state.todos[index];
        todo.text = newTodo;

        const todos = this.state.todos;
        todos[index] = todo;

        this.setState({todos: todos});
    }

    /**
     * Set the mouseover state on TODO.
     * @param index Index of TODO to update.
     * @param mouseover Mouseover flag.
     */
    setMouseOver(index, mouseover) {
        const todo = this.state.todos[index];
        todo.mouseover = mouseover;

        const todos = this.state.todos;
        todos[index] = todo;

        this.setState({todos: todos});
    }

    /**
     * Sets a TODO to done.
     * @param index Index of TODO to update.
     * @param done Done flag.
     */
    setDone(index, done) {
        const todo = this.state.todos[index];
        todo.done = done;

        const todos = this.state.todos;
        todos[index] = todo;

        this.setState({todos: todos});
    }
}

export default Todo;