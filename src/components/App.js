import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./nav"
import Login from "./login"
import Register from "./register"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btn: false
        }
    }
    
    render() {
        console.log(this.state.btn)
        return (
            <React.Fragment>
                <Route exact path="/" component={Nav} />
                <Route exact path="/" render={() => {
                    return (
                        <figure class="figure" style={{ height: "40vh" }}>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8a465561486693.5a71bd683d677.png" class="figure-img img-fluid" alt="..." />
                            <figcaption class="figure-caption text-right"></figcaption>
                        </figure>
                    )
                }} />
                <Route exact path="/login" component={Nav} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Nav} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login/:id/email/:email" render={(props)=>{
                    return(<Nav {...props}/>)
                }}/>
            </React.Fragment>

        );
    }
}

export default App;