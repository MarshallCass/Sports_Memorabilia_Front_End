import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login/Login';
import Register from './Register/Register';
import NavBar from './NavBar/NavBar'; 
import CreateProduct from './CreateProduct/CreateProduct'
import DisplayProducts from './DisplayProducts/DisplayProducts';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Footer from './Footer/Footer';


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
        this.addNewProduct();
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
        let response = await axios.get('https://localhost:44394/api/Product/')
        this.setState({
            products: response.data
        });
    }

    addNewProduct = async (product) => {
        try{
            const response = await axios.post('https://localhost:44394/api/Product', product);
            console.log(response)
            this.product = ({'name': product.name, 'description': product.description, 'price': product.price, 'category': product.category})
            this.setState({
                products: response.data
            });
        }
        catch(error) {
            console.log(error, 'Invalid input');
        }
        
        
    }

    render() {
        return (
            <div>
                <NavBar/>
                <CreateProduct  test="test" addNewProduct={this.addNewProduct} />
                <Switch>

                <Route path='/Login' render={props => <Login {...props} loginUser={this.loginUser}/>} />
                <Route path='/Register' render={props => <Register {...props} registerNewUser={this.registerNewUser}/>} />               
                <Route path='/Products' render={props => <DisplayProducts {...props} products={this.state.products}/>} />               
                <Route path='/createProduct' render={props => <CreateProduct {...props} addNewProduct={this.addNewProduct} />} />
                </Switch>
                <Footer/>
                
            </div>

        )
    }
}

export default App