require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';
import UserDetail from './user-details';
import GridComponent from './grid'
import './user-details.css';
import { Router, Route, Link, hashHistory} from 'react-router'



class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Our awesome app</h1>
                <ul role="nav">
                    <li><Link to="/grid">Grid</Link></li>
                    <li><Link to="/details">Details</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="grid" component={GridComponent}/>
            <Route path="details" component={UserDetail}>
                <Route path="/details/:id" component={UserDetail}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);

