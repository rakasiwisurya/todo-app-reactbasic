import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import TodoList from './pages/js/todo-list';
import About from './pages/js/about';

class App extends React.Component {
    render() {
        return(
            <Router history={createBrowserHistory()}>
                <Route exact path={'/'} component={TodoList} />
                <Route path={'/about'} component={About} /> 
            </Router>
        );
    }
}

export default App;