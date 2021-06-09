import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../Firebase.js';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {email:'', role:'', password:'', confirm_password:'', redirect:false};
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
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        this.setState({redirect:true})
      );
      console.log('create successfully');
        
    }

    render() {
      const {redirect} = this.state;

        if(redirect){
            return(
                <Redirect to="/login" />
            );
        }
        return (
            <div className="signup-container">
               
               <div className="signup">
               <h2>Sign Up</h2>
                  <form className="form-new" onSubmit={this.handleSubmit}>
                      <div className="form-input-row">
                        <label class="signup-label">Email</label>
                        <input className="signup-input" type="text" name="email" onChange={this.handleChange} required/>
                      </div>
                      <div className="form-input-row">
                        <label class="signup-label">User Role</label>
                        <input className="signup-input" type="text" name="role" onChange={this.handleChange} required/>
                      </div>
                     <div className="form-input-row">
                        <label class="signup-label">Password</label>
                        <input className="signup-input" type="password" name="password" onChange={this.handleChange} />
                      </div>
                      <div className="form-input-row">
                        <label class="signup-label">Confirm Password</label>
                        <input className="signup-input" type="password" name="confirm_password" onChange={this.handleChange}/>
                      </div>
                      <div><input type="submit" value="Submit" className="signup-button"/></div>
                      
                  
                  
                  </form>
                  <div>Already have an account? <Link to="/login">LogIn</Link></div>
               
               </div>
                
            </div>
        );
    }
}

export default SignUp;
