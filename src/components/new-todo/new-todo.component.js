import React, {Component} from 'react';
import './new-todo.css';

class NewTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: {
                text: '',
                done: false,
                mouseover: false
            }
        };

        this.inputUpdated = this.inputUpdated.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    inputUpdated(event) {
        const {value} = event.target;
        this.setState({newItem: {text: value, done: false, mouseover: false}});
    }

    addItem(event) {
        event.preventDefault(); // Stay on page.

        const {newItem} = this.state;
        const {onItemAdded} = this.props;  // Get parent method from props.

        onItemAdded(newItem);

        this.setState({newItem: {text: '', done: false, mouseover: false}}); // Reset new item.
    }

    render() {
        const {onItemAdded} = this.props;

        return (
            <form onSubmit={this.state.newItem.text !== '' && this.addItem}>
                {/*todo input*/}
                <input type="text"
                       placeholder="todo"
                       onInput={this.inputUpdated}
                       value={this.state.newItem.text}
                       autoFocus/>
            </form>
        );
    }
}

export default NewTodo;