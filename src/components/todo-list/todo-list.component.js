import React, {Component} from 'react';
import './todo-list.component.css';

class TodoList extends Component {
    render() {
        return (
            <section>
                {this.props.todos.map((todo, index) =>
                    <section key={index} className="list" onMouseOver={() => this.setMouseOver(index, true)}
                             onMouseLeave={() => this.setMouseOver(index, false)}>

                        {/* checkbox */}
                        <section className="flex-container">
                            <input className={"checkbox " + (todo.mouseover ? "checkbox--visible" : "")} type="checkbox"
                                   name="done" checked={todo.done} onChange={(e) => this.onCheckboxChange(e, index)}/>
                        </section>

                        {/*todo value*/}
                        <input className={"list__item " + (todo.done ? "list__item--done" : "")} type="text"
                               value={todo.text} onChange={(e) => this.onChange(e, index)}/>

                        {/*delete button*/}
                        <section className="flex-container">
                            <a className={"delete " + (todo.mouseover ? "delete--visible" : "")}
                               onClick={() => this.onDelete(index)}>x</a>
                        </section>
                    </section>
                )}
            </section>
        );
    }

    /**
     * Set mouseover flag.
     * @param index Index of TODO to update.
     * @param mouseover Mouseover flag.
     */
    setMouseOver(index, mouseover) {
        this.props.setMouseOver(index, mouseover);
    }

    /**
     * Set done value.
     * @param event Event object.
     * @param index Index of TODO to update.
     */
    onCheckboxChange(event, index) {
        this.props.setDone(index, event.target.checked);
    }

    /**
     * Delete TODO.
     * @param index Index of TODO to delete.
     */
    onDelete(index) {
        this.props.onTodoDeleted(index);
    }

    /**
     * Update TODO value.
     * @param event Event object.
     * @param index Index of TODO to update.
     */
    onChange(event, index) {
        this.props.onTodoUpdated(event.target.value, index);
    }
}

export default TodoList;