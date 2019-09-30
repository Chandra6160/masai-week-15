import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false,
            email: "",
            password: "",
            name: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSignin = () => {
        axios({
            method: "GET",
            url: "http://localhost:5000/signin",
        })
            .then((res) => {
                console.log(res)
                var flag = false
                let flag2=false
                if (res.data) {
                    console.log("dsfas") 
                    res.data.map(e => {
                        if (e.email === this.state.email) {
                            flag = true;
                        }
                    })
                    if (flag) {
                        res.data.map(e => {
                            if(e.email==this.state.email){
                                if (e.email === this.state.email && e.password === this.state.password) {
                                    alert("Login successful")
                                    this.setState({
                                        btn: true,
                                        name: e.name
                                    })
                                }
                                else{
                                    alert("Entered password incorrect")
                                }
                            }
                            
                        })
                    }
                    else {
                        console.log("dsakjl")
                        alert("Entered Email is not registed,please register...")
                    }
                }

            })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.btn ? (<h3><Link to={`/login/${this.state.btn}/email/${this.state.email}`}>Click Here</Link></h3>) : (
                    <div class="row justify-content-center ">
                        <form class="form-signin">
                            <h1 class="h3 mb-3 font-weight-normal" > Sign in</h1>
                            <div class="social-login">
                                <button class="btn btn-primary" type="button"><span><i class="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                                <button class="btn btn-danger" type="button"><span><i class="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                            </div>
                            <p class="justify-content-center"> OR  </p>
                            <input type="text" name="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" onChange={this.handleInput} />
                            <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={this.handleInput} />
                            <button class="btn btn-success btn-block" type="button" onClick={this.onSignin}><i class="fas fa-sign-in-alt" ></i> Sign in</button>
                            <a href="#" id="forgot_pswd">Forgot password?</a>
                            <hr />
                            <Link to="/register"><button class="btn btn-primary btn-block" type="button" id="btn-signup" ><i class="fas fa-user-plus"></i> Sign up New Account</button></Link>
                        </form>
                        <br />
                    </div>
                )}
            </React.Fragment>
        );
    }

}

