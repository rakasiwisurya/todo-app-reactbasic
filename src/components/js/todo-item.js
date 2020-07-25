import React from 'react';
import '../css/todo-item.css';

class TodoItem extends React.Component {
    constructor(props)
	{
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
    
    handleDelete() {
        this.props.onDelete(this.props.item);
    }

    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;