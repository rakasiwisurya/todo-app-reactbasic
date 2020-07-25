import React from 'react';
import '../css/add-item.css';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newItem = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.newItem.current.value);
    }

    render() {
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref={this.newItem} />
                <button type="submit">Hit Me</button>
            </form>
        );
    }
}

export default AddItem;