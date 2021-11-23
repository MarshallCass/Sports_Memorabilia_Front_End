import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>

                </form>
            </div>
        )
    }
}

export default Login