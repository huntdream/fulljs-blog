import React, {Component} from 'react';
import '../App.css';

import Home from './Home';

class App extends Component {
    state = {
        hello:'world'
    };

    render() {
        return (
            <div className="body">
                <aside></aside>
                <main>
                    <Home />
                </main>
            </div>
        );
    }
}

export default App;
