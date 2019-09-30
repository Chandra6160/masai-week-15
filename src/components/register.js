import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            repassword: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSignup = () => {
        if (this.state.password === this.state.repassword) {
            let ob = {
                "name": this.state.name,
                "email": this.state.email,
                "password": this.state.password.toString(),
            }
            axios({
                method: "post",
                url: "http://localhost:5000/signup",
                data: ob
            })
                .then((res) => {
                    console.log(res)
                    alert(res.data)
                })
                .catch(err => alert(err))
        }
        else {
            alert("Password did not match: Please try again...")
        }
    }
    render() {
        return (

            <div class="row justify-content-center mt-5">

                <form class="card form-signup">
                    <h3>Sign Up</h3>
                    <div class="row">
                        <div class="col-5 social-login">
                            <button class="btn btn-primary" type="button"><span><i class="fab fa-facebook-f"></i> Sign up with Facebook</span> </button>
                        </div>
                        <div class="col-5 social-login">
                            <button class="btn btn-danger" type="button"><span><i class="fab fa-google-plus-g"></i> Sign up with Google+</span> </button>
                        </div>
                    </div>


                    <p >OR</p>

                    <input type="text" name="name" id="user-name" class="form-control" placeholder="Full name" required="" autofocus="" onChange={this.handleInput} />
                    <input type="text" name="email" id="user-email" class="form-control" placeholder="Email address" required autofocus="" onChange={this.handleInput} />
                    <input type="password" name="password" id="user-pass" class="form-control" placeholder="Password" required autofocus="" onChange={this.handleInput} />
                    <input type="password" name="repassword" id="user-repeatpass" class="form-control" placeholder="Repeat Password" required autofocus="" onChange={this.handleInput} />

                    <button class="btn btn-primary btn-block" type="button" onClick={this.onSignup}><i class="fas fa-user-plus"></i> Sign Up</button>
                    <Link to="/login" href="#" id="cancel_signup"><i class="fas fa-angle-left"></i> Back</Link>
                </form>
            </div>

        );
    }

}

