import React from 'react';
import RecepNavbar from '../../components/receptionalist/RecepNavbar';
import RecepSidebar from '../../components/receptionalist/RecepSidebar';
import '../../styles/receptionalist.css';

const NewAppointments = () => {
    return (
        <div className="container">
            <RecepNavbar />
            <RecepSidebar />

            <div className="newcontainer">
                <table className="newtable">
                    <thead className="">
                        <tr>
                            <th className="">Patient Name</th>
                            <th className="">Mobile</th>
                            <th className="">Date</th>
                            <th className="">Time</th>
                            <th className="">Doctor Name</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        
                    </tbody>
                </table>
            </div>
        </div>                  
    );
}

export default NewAppointments;