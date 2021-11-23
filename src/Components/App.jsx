import React, { Component } from 'react';
import Login from './Login/Login';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Login/>
        )
    }
}

export default App