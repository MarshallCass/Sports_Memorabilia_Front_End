import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            email:"",
            phonenumber:"",
         };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.password,
            email: this.state.email,
            phonenumber: this.state.phonenumber,
        };
        this.props.registerNewUser(user);
        this.setState({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            email: "",
            phonenumber: "",
        });
    }

    render() {
        return (
           <div className="login-wrapper">
               <h3>Register</h3>
               <form onSubmit={this.handleSubmit}>
                   <table>
                       <label>First Name</label>
                       <input type = "text" name= "firstname" onChange={this.handleChange} value={this.state.firstname} ></input>
                       <label>Last Name</label>
                       <input type = "text" name= "lastname" onChange={this.handleChange} value={this.state.lastname} ></input>
                       <label>Username</label>
                       <input type = "text" name= "username" onChange={this.handleChange} value={this.state.username} ></input>
                       <label>Password</label>
                       <input type = "text" name= "password" onChange={this.handleChange} value={this.state.password} ></input>
                       <label>Email</label>
                       <input type = "text" name= "email" onChange={this.handleChange} value={this.state.email} ></input>
                       <label>Phone Number</label>
                       <input type = "text" name= "phonenumber" onChange={this.handleChange} value={this.state.phonenumber} ></input>
                       <button type="submit" className="btn btn-primary btn-block">Register</button>
                   </table>
               </form>

           </div>
        )
    }
}

export default Register;