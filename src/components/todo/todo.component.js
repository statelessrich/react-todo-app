import React, {Component} from 'react';
import './todo.component.css';
import NewTodo from "../new-todo/new-todo.component";
import TodoList from "../todo-list/todo-list.component";

class Todo extends Component {
    constructor() {
        super();

        this.state = {
          items: []
        };

        this.onItemAdded = this.onItemAdded.bind(this);
        this.onItemDeleted = this.onItemDeleted.bind(this);
        this.onItemUpdated = this.onItemUpdated.bind(this);
    }

    render() {
        return (
            <section className="todo-container">
                <NewTodo onItemAdded={this.onItemAdded} />
                {this.state.items.length > 0 && <TodoList onItemDeleted={this.onItemDeleted} onItemUpdated={this.onItemUpdated} items={this.state.items}/>}
            </section>
        );
    }

    onItemAdded(item) {
        const newItems = this.state.items;
        newItems.push(item);
        this.setState({items: newItems});
    }

    onItemDeleted(deletedItem) {
        const newItems = this.state.items.filter(item => item.text !== deletedItem.text);
        this.setState({items: newItems});
    }

    onItemUpdated(oldItem, updatedItem) {
        let {items} = this.state;

        let index = this.state.items.findIndex(item => item.text === oldItem.text);
        items[index].text = updatedItem.text;

        this.setState({items: items});

    }
}

export default Todo;