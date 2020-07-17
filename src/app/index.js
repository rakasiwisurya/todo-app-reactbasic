const React = require('react');
const ReactDOM = require('react-dom');

// Create Component
const TodoComponent = React.createClass({
    render: function() {
        return(
            <h1>Rakaaaaaa</h1>
        );
    }
});

// Put Component Into HTML Page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));