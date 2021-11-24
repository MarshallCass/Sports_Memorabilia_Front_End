import React, { Component } from 'react';
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
        const 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.username} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange} value={this.state.password} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>

                </form>
            </div>
        )
    }
}

export default Login