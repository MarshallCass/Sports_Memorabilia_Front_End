import React, { Component } from 'react';
import 'react-router-dom';
import './Login.css';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password,
        };
        this.props.loginUser(login);
        this.setState({
            username: "",
            password: "",
        });
        
    }

    render() {
        return (
          
<div className="container">

<form onSubmit={this.handleSubmit} className="form-signin">
          <div className="row">
            <div className="col">
                <div>
                <h1 className="fs-1 fw-bold mb-5 text-uppercase">Login</h1>
                </div>
                  <p className="fs-5 text-white-50 mb-4">Please enter your username and password!</p>

                  <div className="form-outline form-white mb-4">
                    <input type="text" name= "username" id="typeUsernameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.username}  />
                    <label className="form-label fs-5 fw-bold" for="typeUsernameX">Username</label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" name= "password" id="typePasswordX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} />
                    <label className="form-label fs-5 fw-bold" for="typePasswordX">Password</label>
                  </div>
                  <div>
                  <button class="btn btn-outline-light btn-lg px-5 fw-" type="submit">Login</button>
                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  </div>
                  <div>
                  <p class="fs-6 fw-bold mb-0">Don't have an account? <a href="#!" className="fs-6 text-white-50 fw-bold">Sign Up</a></p>
                  </div>
            </div>
            
          </div>
          
</form>

</div>


        )
    }
}

export default Login
