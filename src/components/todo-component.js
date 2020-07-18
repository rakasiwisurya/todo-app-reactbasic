import React from 'react';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: ['wash up', 'eat some cheese', 'take a nap', 'buy something']
        };
    }
    
    render() {
        const todoList = this.state.todoList;

        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <ul>
                    {todoList.map((todoItem, index) => {
                      return (
                        <li key={index}>
                            {todoItem}
                        </li>
                      );
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoComponent;