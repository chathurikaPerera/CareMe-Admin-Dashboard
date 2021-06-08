import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div className="signup-container">
               <div className="signup">
                  <form className="form-new">
                      <div className="form-input-row">
                        <label class="signup-label">Email</label>
                        <input className="signup-input" type="text"/>
                      </div>
                      <div className="form-input-row">
                        <label class="signup-label">Password</label>
                        <input className="signup-input" type="text"/>
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
