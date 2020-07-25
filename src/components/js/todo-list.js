import React from 'react';
import TodoItem from './todo-item';
import '../css/todo-list.css';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: ['wash up', 'eat some cheese', 'take a nap', 'buy something']
        };
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(item) {
        const updateTodoList = this.state.todoList.filter((val, index) => {
            return item !== val;
        });
        this.setState({
            todoList: updateTodoList
        });
    }
    
    render() {
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <ul>
                    {this.state.todoList.map((todoItem, index) => {
                        return (
                            <TodoItem item={todoItem} key={index} onDelete={this.onDelete} />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoComponent;