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
            this.setState({loggedInUser: user });

        } catch (error) {
            console.log(error);
        }
    }

    registerNewUser = async (user) => {
        try{
            const response = await axios.post('https://localhost:44394/api/authentication' , user);
            this.loggedInUser({'userName': user.userName, 'password': user.password})
        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }

    

    loginUser = async (login) => {
        try {
            let response = await axios.post('https://localhost:44394/api/authentication/login', login);
            this.setState({
                user: response.data.token
            });
            localStorage.setItem('token', response.data.token);
            

        } catch (error) {
            alert('Invalid username or password')
        }
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Login loginUser={this.loginUser}/>
                <Register registerNewUser={this.registerNewUser}/>
                
                
            </div>
        )
    }
}

export default App