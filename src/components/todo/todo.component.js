import React, {Component} from 'react';
import {connect} from 'react-redux';
import './todo.component.css';
import NewTodo from '../new-todo/new-todo.component';
import TodoList from '../todo-list/todo-list.component';
import * as todoActions from '../../actions/todo-actions';

class Todo extends Component {
    constructor() {
        super();

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
                {this.props.todos.length > 0 &&
                <TodoList setDone={this.setDone} setMouseOver={this.setMouseOver} onTodoDeleted={this.onTodoDeleted}
                          onTodoUpdated={this.onTodoUpdated} todos={this.props.todos}/>}
            </section>
        );
    }

    /**
     * Add TODO to list.
     * @param text New todo text.
     */
    onTodoAdded(text) {
        this.props.addTodo(text);
    }

    /**
     * Delete TODO from list.
     * @param index Index of TODO to delete.
     */
    onTodoDeleted(index) {
        this.props.deleteTodo(index);
    }

    /**
     * Update TODO in list.
     * @param index Index of TODO to update.
     * @param newTodo New value of TODO.
     */
    onTodoUpdated(text, index) {
        const todo = this.props.todos[index];
        const newTodo = Object.assign({}, todo);
        newTodo.text = text;

        this.props.updateTodo({index, newTodo});
    }

    /**
     * Set the mouseover state on TODO.
     * @param index Index of TODO to update.
     * @param mouseover Mouseover flag.
     */
    setMouseOver(index, mouseover) {
        const todo = this.props.todos[index];
        const newTodo = Object.assign({}, todo);
        newTodo.mouseover = mouseover;

        this.props.updateTodo({index, newTodo});
    }

    /**
     * Sets a TODO to done.
     * @param index Index of TODO to update.
     * @param done Done flag.
     */
    setDone(index, done) {
        const todo = this.props.todos[index];
        const newTodo = Object.assign({}, todo);
        newTodo.done = done;

        this.props.updateTodo({index, newTodo});
    }
}

// Map state from store to props.
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

// Map actions to props.
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: todo => dispatch(todoActions.addTodo(todo)),
        deleteTodo: todo => dispatch(todoActions.deleteTodo(todo)),
        updateTodo: todo => dispatch(todoActions.updateTodo(todo))
    };
};

// Put store and actions together.
export default connect(mapStateToProps, mapDispatchToProps)(Todo);