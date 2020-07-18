import React from 'react';

class TodoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['wash up', 'eat some cheese', 'take a nap']
        };
    }
    
    render() {
        return(
            <div id="todo-list">
                <p>The busiest people have the most leisure</p>
                <ul>
                    <li>{this.state.todos[0]}</li>
                    <li>{this.state.todos[1]}</li>
                    <li>{this.state.todos[2]}</li>
                </ul>
            </div>
        );
    }
}

export default TodoComponent;