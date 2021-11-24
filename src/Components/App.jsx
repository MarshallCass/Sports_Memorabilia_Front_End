import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar'; 
import DisplayProducts from './DisplayProducts/DisplayProducts';
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
        this.getAllProducts();
        try {
            const user = jwtDecode(jwt);
            this.setState({loggedInUser: user });

        } catch (error) {
            console.log(error);
        }
    }

    registerNewUser = async (user) => {
        console.log("User object from Register: ", user)
        try{
            const response = await axios.post('https://localhost:44394/api/authentication', user);
            console.log(response)
            this.loggedInUser = ({'userName': user.userName, 'password': user.password})

        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
    }

    

    loginUser = async (login) => {
        console.log("User object from login:", login)
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

    getAllProducts = async () => {
        console.log()  
        let response = await axios.get('https://localhost:44394/api/Product/')
        console.log()
        this.setState({
            products: response.data
        });
    }

    render() {
        return (
            <div>
                <NavBar/>
                <Switch>

                <Route path='/Login' render={props => <Login {...props} loginUser={this.loginUser}/>} />
                <Route path='/Register' render={props => <Register {...props} registerNewUser={this.registerNewUser}/>} />               
                <Route path='/DisplayProducts' render={props => <DisplayProducts {...props} getAllProducts={this.getAllProducts}/>} />               

                </Switch>
            </div>

        )
    }
}

export default App