import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar';
import jwtDecode from 'jwt-decode';
// localStorage.setItem('token', responseData.token);
// const tokenFromStorage = localStorage.getItem('token');
// localStorage.removeItem('token')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
        
    //     const jwt = localStorage.getItem('token');
    //     try {
    //         const user = jwtDecode(jwt);
    //         this.setState({ user });

    //     }catch{}
    // }

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