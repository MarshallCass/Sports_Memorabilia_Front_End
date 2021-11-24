import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Register/>
                <Login />
            </div>
        )
    }
}

export default App