import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase.js';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
        super(props);
        this.state = {email:'', password:'', redirect:false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.email);
      const x =firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        this.setState({redirect:true})
      );
      console.log(x);
        
    }
    render() {
      const {redirect} = this.state;

        if(redirect){
            return(
                <Redirect to="/home" />
            );
        }
        return (
            <div className="signup-container">
               <div className="login">
               <h2>Sign In</h2>
                  <form className="form-new" onSubmit={this.handleSubmit}>
                      <div className="form-input-row">
                        <label class="signup-label">Email</label>
                        <input className="signup-input" type="text" name="email" onChange={this.handleChange} required/>
                      </div>
                      <div className="form-input-row">
                        <label class="signup-label">Password</label>
                        <input className="signup-input" type="password" name="password" onChange={this.handleChange} required/>
                      </div>
                      <div><input type="submit" value="Submit" className="signup-button"/></div> 
                  </form>
                  <div>Don't have an account? <Link to="/">Sign Up</Link></div>
               
               </div>
                
            </div>
        );
    }
}

export default SignUp;
