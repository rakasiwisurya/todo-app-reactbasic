import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from "history";
import TodoList from './pages/js/todo-list';
import About from './pages/js/about';

class App extends React.Component {
    render() {
        return(
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path={'/'} component={TodoList} />
                    <Route path={'/about'} component={About} /> 
                </Switch>
            </Router>
        );
    }
}

export default App;