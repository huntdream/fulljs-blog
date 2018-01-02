import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

import Home from './Home';
import Sider from './Sider';
import Header from './Header';

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
                            <Route exact path="/" component={Home} />
                            <Route path="/articles" component={Hello} />
                            <Route path="/category" component={Hello} />
                            <Route path="/tags" component={Hello} />
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
