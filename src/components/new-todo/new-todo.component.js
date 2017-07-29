import React, {Component} from 'react';
import './new-todo.css';

class NewTodo extends Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }

    /**
     * Add TODO to list in parent state.
     * @param event Event object.
     * @param text Value of new TODO.
     */
    addTodo(event, text) {
        event.preventDefault(); // Stay on page.

        if (text === '') {
            return;
        }

        this.props.onTodoAdded(text);
        this.form.reset();
    }

    render() {
        return (
            <form onSubmit={(e) => this.addTodo(e, this.input.value)}
                  ref={(form) => this.form = form}>
                {/*todo text input*/}
                <input type="text"
                       placeholder="todo"
                       ref={(input) => this.input = input}
                       autoFocus/>
            </form>
        );
    }
}

export default NewTodo;