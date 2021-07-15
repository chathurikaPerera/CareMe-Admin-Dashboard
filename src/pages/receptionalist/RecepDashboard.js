import React from 'react';
import {FaBookMedical, FaUserMd, FaUserEdit} from 'react-icons/fa';
import LineChart from '../../components/doctor/LineChart';
import PieChart from '../../components/doctor/PieChart';

const RecepDashboard = () => {
    return (
        <main className="main-container">
          <div className="main-card">
                <div className="card">
                    {/* <FaUserMd class="main-icon"/> */}
                    <div className="card-inner">
                        <p className="card-text">Number of New Appointments</p>
                        <span className="card-numer">20</span>
                    </div>
                </div>
                <div className="card">
                    <FaUserEdit class="main-icon"/>
                    <div className="card-inner">
                        <p className="card-text">Today Available Doctors</p>
                        <span className="card-numer">10</span>
                    </div>
                </div>
                <div className="card">
                    <FaBookMedical class="main-icon"/>
                    <div className="card-inner">
                        <p className="card-text">Number of Today Appointments</p>
                        <span className="card-numer">100</span>
                    </div>
                </div>
            </div>

            <div className="main-card2">
                <div className="card2">
                    <LineChart /> 
                </div>
                <div className="card2">
                <div className="graph">
                <PieChart/>
                </div>
                </div>
            </div>   
        </main>
    )
}

export default RecepDashboard;