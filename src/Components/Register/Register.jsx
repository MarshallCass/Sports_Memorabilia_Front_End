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
            username: this.state.username,
            password:this.state.password,
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
<form onSubmit={this.handleSubmit}>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
              <p class="text-white-50 mb-5">Please enter registration information!</p>
            

            <div class="form-outline form-white mb-4">
                <input type="text" name = "firstname" id="typeFirstNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.firstname} />
                <label class="form-label" for="typeFirstNameX">First Name</label>
            </div>

            <div class="form-outline form-white mb-4">
                <input type="text" name = "lastname" id="typeLastNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.lastname} />
                <label class="form-label" for="typeLastNameX">Last Name</label>
            </div>

            <div class="form-outline form-white mb-4">
                <input type="text" name = "username" id="typeUserNameX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.username} />
                <label class="form-label" for="typeUserNameX">User Name</label>
            </div>

            <div class="form-outline form-white mb-4">
                <input type="text" name = "password" id="typePasswordX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.password} />
                <label class="form-label" for="typePasswordX">Password</label>
            </div>

            <div class="form-outline form-white mb-4">
                <input type="text" name = "email" id="typeEmailX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.email} />
                <label class="form-label" for="typeEmailX">Email</label>
            </div>

            <div class="form-outline form-white mb-4">
                <input type="text" name = "phonenumber" id="typePhonenumberX" class="form-control form-control-lg" onChange={this.handleChange} value={this.state.phonenumber} />
                <label class="form-label" for="typePhonenumberX">Phone Number</label>
            </div>
  
            <button class="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>

        )
    }
}

export default Register;