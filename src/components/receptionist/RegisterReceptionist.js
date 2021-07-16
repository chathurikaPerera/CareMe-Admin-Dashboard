import React, { Component } from 'react';
import firebase from '../../Firebase.js';



class RegisterReceptionist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hospital: '',
            receptionID: '',
            nic: '',
            age: '',
            gender: '',
            address: '',
            mobile: '',
            email: ''

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(this.state.name);
        const add = firebase.firestore();
        console.log(this.state.nic);
        const user = add.collection("receptionists").doc(this.state.nic).set({
            name: this.state.name,
            hospital: this.state.hospital,
            receptionID: this.state.receptionID,
            age: this.state.age,
            gender: this.state.gender,
            address: this.state.address,
            mobile: this.state.mobile,
            email: this.state.email,
        })
    }



    render() {
        return (
            <main>
                <div className="register-card">
                    <div className="form-container">
                        <h2>Add Receptionist </h2>
                        <form onSubmit={this.handleSubmit} className="form">
                            <div className="form-input">
                                <div className="form-label"><label>Name</label></div>
                                <div><input type="text" name="name" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Hospital</label></div>
                                <div><input type="text" name="hospital" onChange={this.handleChange} className="input" /></div>

                            </div>

                            <div className="form-input">
                                <div className="form-label"><label>Receptionist ID</label></div>
                                <div><input type="text" name="receptionID" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>NIC</label></div>
                                <div><input type="text" name="nic" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Age</label></div>
                                <div><input type="text" name="age" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Gender </label></div>
                                <div><input type="text" name="gender" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Address</label></div>
                                <div><input type="text" name="address" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Mobile Number</label></div>
                                <div><input type="text" name="mobile" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Email Address</label></div>
                                <div><input type="text" name="email" onChange={this.handleChange} className="input" /></div>

                            </div>
                            <div className="form-input-button"><input type="submit" value="Submit" /></div>
                        </form>
                    </div>


                </div>
            </main>
        );
    }
}

export default RegisterReceptionist;