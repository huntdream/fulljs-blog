import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';

import Home from './Home';
import Sidebar from './Sidebar';
import Header from './Header';

const mainStyle = {
    menuIsOPen: {
        maxWidth: "calc(100% - 240px)"
    },
    menuNotOPen: {
        minWidth: "100%",
        left: 0
    }
};

const Hello = () => (
    <h1> Hello World</h1>
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOPen: true,
            mainStyle: mainStyle.menuIsOPen
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleStyle = this.toggleStyle.bind(this);
    }


    toggleMenu() {
        let theStyle = this.toggleStyle(this.state.isOPen);
        this.setState(prevState => ({
            isOPen: !prevState.isOPen,
            mainStyle: theStyle
        }));
    }

    toggleStyle(isOpen) {
        return isOpen ? mainStyle.menuNotOPen : mainStyle.menuIsOPen;
    }

    render() {

        return (
            <Router>
                <div className="body">
                    <Header onClick={this.toggleMenu} />
                    <Sidebar isOpen={this.state.isOPen} />
                    <main style={this.state.mainStyle}>
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
