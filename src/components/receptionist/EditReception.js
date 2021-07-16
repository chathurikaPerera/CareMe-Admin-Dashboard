import React from 'react';

class EditReception extends Component {

    render() {
        return (
            <main className="main-container">
                <div className="edit-card">
                    <div className="form-container">
                        <h2>Enter the Receptionist NIC</h2>
                        <form onSubmit={this.handleSubmit} className="form-edit">
                            <div className="form-input">
                                <div className="form-edit-label"><label>NIC</label></div>
                                <div><input type="text" name="id" onChange={this.handleChange} className="edit-input" /></div>
                            </div>
                            <div className="form-input-button"><input type="submit" value="Submit" /></div>
                        </form>
                    </div>
                    <div className="edit-container">
                        <form onSubmit={this.handleEditSubmit} className="form">
                            <div className="form-input">
                                <div className="form-label-edit"><label>Name</label></div>
                                <div><input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Hospital</label></div>
                                <div><input type="text" name="hospital" value={this.state.hospital} onChange={this.handleChange} className="input-edit" /></div>

                            </div>

                            <div className="form-input">
                                <div className="form-label-edit"><label>Receptionist ID</label></div>
                                <div><input type="text" name="docId" value={this.state.docId} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Age</label></div>
                                <div><input type="text" name="age" value={this.state.age} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Gender </label></div>
                                <div><input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Address</label></div>
                                <div><input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Mobile Number</label></div>
                                <div><input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="input-edit" /></div>

                            </div>
                            <div className="form-input">
                                <div className="form-label-edit"><label>Email Address</label></div>
                                <div><input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="input-edit" /></div>
                            </div>
                            <div className="form-input-button"><input type="submit" value="Edit Doctor" /></div>
                            <button>Delete</button>
                        </form>

                    </div>
                </div>
            </main>
        );
    }
}

export default EditReception;