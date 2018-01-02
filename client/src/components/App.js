import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import '../App.css';

import Home from './Home';
import Sider from './Sider';
import Header from './Header';
import Article from './Article';

const Hello = ({ match }) => (
    <h1> Hello {match.path}</h1>
)

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router>
                <div className="body">
                    <Header />
                    <Sider />
                    <main>
                        <div className="home-wrapper">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/articles" component={Hello} />
                                <Route path="/category" component={Hello} />
                                <Route path="/tags" component={Hello} />
                                <Route path="/:article" component={Article} />
                            </Switch>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
