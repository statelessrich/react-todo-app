import React, {Component} from 'react';
import './todo-list.component.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.todos
        };
    }

    render() {
        const {todos} = this.state;

        return (
            <section>
                {todos.map((item, index) =>
                    <section key={index} className="list" onMouseOver={() => this.setMouseOver(index, true)}
                             onMouseLeave={() => this.setMouseOver(index, false)}>
                        {/* checkbox */}
                        <section className="flex-container">
                            <input className={"checkbox " + (item.mouseover ? "checkbox--visible" : "")} type="checkbox"
                                   name="done" checked={item.done} onChange={(e) => this.onCheckboxChange(e, index)}/>
                        </section>

                        {/*todo value*/}
                        <input className={"list__item " + (item.done ? "list__item--done" : "")} type="text"
                               value={item.text} onChange={(e) => this.onChange(e, index)}/>

                        {/*delete button*/}
                        <section className="flex-container">
                            <a className={"delete " + (item.mouseover ? "delete--visible" : "")}
                               onClick={() => this.onDelete(index)}>x</a>
                        </section>
                    </section>
                )}
            </section>
        );
    }

    /**
     * Set mouseover state.
     * @param index Index of TODO to update.
     * @param mouseover Mouseover flag.
     */
    setMouseOver(index, mouseover) {
        const {setMouseOver} = this.props;
        setMouseOver(index, mouseover);
    }

    /**
     * Set done value.
     * @param event Event object.
     * @param index Index of TODO to update.
     */
    onCheckboxChange(event, index) {
        const {setDone} = this.props;
        setDone(index, event.target.checked);
    }

    /**
     * Delete TODO.
     * @param index Index of TODO to delete.
     */
    onDelete(index) {
        const {onTodoDeleted} = this.props;
        onTodoDeleted(index);
    }

    /**
     * Update TODO value.
     * @param event Event object.
     * @param index Index of TODO to update.
     */
    onChange(event, index) {
        const {onTodoUpdated} = this.props;
        onTodoUpdated(index, event.target.value);
    }
}

export default TodoList;