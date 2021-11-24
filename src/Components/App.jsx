import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// const tokenFromStorage = localStorage.getItem('token');
// localStorage.removeItem('token')

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: null,
            products: [],
            shoppingCart: []
        };
    }

    componentDidMount() {
        
        const jwt = localStorage.getItem('token');
        try {
            const user = jwtDecode(jwt);
            this.setState({ user });

        } catch (error) {
            console.log(error);
        }
    }

    

    loginUser = async (login) => {
        try {
            let response = await axios.post('https://localhost:44394/api/authentication/login', login);
            this.setState({
                user: response.data.token
            });
            localStorage.setItem('token', responseData.token);
            

        } catch (error) {
            alert('Invalid username or password')
        }
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