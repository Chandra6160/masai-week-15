import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: this.props.match.params.id,
            username: ""
        }
    }
    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:5000/signin",
        })
            .then((res) => {
                if (res.data) {
                    res.data.map(e => {
                        if (e.email == this.props.match.params.email) {
                            this.setState({
                                username: e.name
                            })
                        }
                    })
                }
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid bg-light">
                    <div className="container">
                        {this.props.match.params.id ? (
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <Link to={`/login/${this.props.match.params.id}`} class="navbar-brand" >Kaola</Link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" >{this.state.username} <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item active">
                                            <Link to="/login" class="nav-link" >Train routes <span class="sr-only">(current)</span></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/" class="nav-link" >Logout</Link>
                                        </li>
                                    </ul>

                                </div>
                            </nav>
                        ) : (
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link to="/" class="navbar-brand" >Kaola</Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav ml-auto">
                                            <li class="nav-item active">
                                                <Link to="/login" class="nav-link" >Sign in <span class="sr-only">(current)</span></Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link to="/register" class="nav-link" >Register</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </nav>
                            )}
                    </div>
                </div>
                {this.state.btn ? (
                    <div class="container mt-5">
                        <h3 class="row mt-2 m-4">Search trains</h3>
                        <p class="Lead row mt-2 m-4">Railways train ticket reservation</p>
                        <div class="row px-5 py-3" >
                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                <label ><b>From</b></label>
                                <input type="text" name="bday" placeholder="Enter a city or station" class="form-control" />
                            </div>
                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                <label ><b>To</b></label>
                                <input type="text" name="bday" placeholder="Enter a city or station" class="form-control" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <label ><b>Class</b></label>
                                <div class="input-group  ">
                                    <div class="input-group-prepend">
                                        <label class="input-group-text" for="inputGroupSelect01">Class</label>
                                    </div>
                                    <select class="custom-select " id="inputGroupSelect01">
                                        <option selected>Choose...</option>
                                        <option value="1">AC First Class(1A)</option>
                                        <option value="2">First Class(FC)</option>
                                        <option value="3">Sleeper(SL)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                <label >Date</label>
                                <input type="date" name="bday" min="1000-01-01"
                                    max="3000-12-31" class="form-control" />
                            </div>
                        </div>

                    </div>
                ) : null}

            </React.Fragment>
        );
    }
}

export default Nav;