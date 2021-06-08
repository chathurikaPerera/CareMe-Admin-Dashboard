import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {email:'', role:'', password:'', confirm_password:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        
    }





    render() {
        return (
            <div className="signup-container">
               <div className="signup">
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
