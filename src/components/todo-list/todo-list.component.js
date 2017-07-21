import React, {Component} from 'react';
import './todo-list.component.css';
import TodoListItem from '../todo-list-item/todo-list-item.component';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    /**
     * Update state on parent state change.
     * @param props Updated props.
     */
    componentWillReceiveProps(props) {
        this.setState({items: props.items});
    }

    deleteItem(deletedItem) {
        const {onItemDeleted} = this.props;
        onItemDeleted(deletedItem);
    }

    updateItem(oldItem, updatedItem) {
        const {onItemUpdated} = this.props;
        onItemUpdated(oldItem, updatedItem);
    }

    render() {
        const {items} = this.state;

        return (
            <section>
                {items.map((item, index) =>
                    <TodoListItem
                        deleteItem={this.deleteItem}
                        updateItem={this.updateItem}
                        item={item}
                        index={index}
                        key={index}
                    />
                )}
            </section>
        );
    }
}

export default TodoList;