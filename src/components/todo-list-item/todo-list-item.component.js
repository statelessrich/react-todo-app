import React, {Component} from 'react';
import './todo-list-item.component.css';
import classNames from 'classnames';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.item.text,
            done: props.item.done,
            mouseover: props.item.mouseover,
            key: props.index
        };

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    mouseOver() {
        this.setState({mouseover: true});
    }

    mouseLeave() {
        this.setState({mouseover: false});
    }

    onCheckboxChange(event) {
        this.setState({done: event.target.checked ? true : false});
    }

    onDelete() {
        const {deleteItem} = this.props;
        deleteItem(this.state);
    }

    onChange(event) {
        const {updateItem} = this.props;
        const oldState = this.state;
        this.setState({text: event.target.value}, () => updateItem(oldState, this.state));
    }

    render() {
        let {item} = this.props;

        let checkboxClasses = classNames({
            'checkbox': true,
            'checkbox--visible': this.state.mouseover
        });

        let deleteClasses = classNames({
            'delete': true,
            'delete--visible': this.state.mouseover
        });

        let itemClasses = classNames({
            'list__item': true,
            'list__item--done': this.state.done
        });

        return (
            <section className="list" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
                {/* checkbox */}
                <section className="flex-container">
                    <input className={checkboxClasses} type="checkbox" name="done" onChange={this.onCheckboxChange}/>
                </section>

                {/*todo item*/}
                <input className={itemClasses} type="text" value={this.state.text} onChange={this.onChange}/>

                {/*delete button*/}
                <section className="flex-container">
                    <a className={deleteClasses} href="#" onClick={this.onDelete}>x</a>
                </section>
            </section>
        );
    }
}

export default TodoListItem;