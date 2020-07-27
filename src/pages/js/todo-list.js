import React from 'react';
import TodoItem from './todo-item';
import AddItem from './add-item';
import '../css/todo-list.css';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: ['wash up', 'eat some cheese', 'take a nap', 'buy something']
        };
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onDelete(item) {
        const updateTodoList = this.state.todoList.filter((val) => {
            return item !== val;
        });
        this.setState({
            todoList: updateTodoList
        });
    }

    onAdd(item) {
        const updateTodoList = this.state.todoList;
        updateTodoList.push(item);
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
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    }
}

export default TodoList;