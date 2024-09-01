import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaPills, FaUser, FaFilePrescription, FaPhone, FaRobot } from 'react-icons/fa';// Importing icons
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Banner';
import { Chat } from './Chat';
import '../App.css'

const Home = () => {
    return (
        <div className="container mt-4 banner" data-bs-theme="dark" >
            <Banner></Banner>
            <Chat></Chat>
            <hr />
            <hr />
            <h1 style={{ color: 'orange' }}>
                Hi! How are you?
            </h1>
            <br />
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card options shadow">
                        <div className="card-body text-center">
                            <FaCalendarAlt size={50} className="mb-3" />
                            <h5 className="card-title">Appointment</h5>
                            <p className="card-text">Manage your appointments</p>
                            <Link to="/appointment" className="btn btn-primary">Go to Appointment</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card options shadow">
                        <div className="card-body text-center">
                            <FaPills size={50} className="mb-3" />
                            <h5 className="card-title">Pill Reminder</h5>
                            <p className="card-text">Set up reminders for medication</p>
                            <Link to="/pill-reminder" className="btn btn-primary">Go to Pill Reminder</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card options shadow">
                        <div className="card-body text-center">
                            <FaUser size={50} className="mb-3" />
                            <h5 className="card-title">Patient's Profile</h5>
                            <p className="card-text">View and edit patient profiles</p>
                            <Link to="/patient-profile" className="btn btn-primary">Go to Profile</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card options shadow">
                        <div className="card-body text-center">
                            <FaFilePrescription size={50} className="mb-3" />
                            <h5 className="card-title">ePrescription</h5>
                            <p className="card-text">Manage your ePrescriptions</p>
                            <Link to="/eprescription" className="btn btn-primary">Go to ePrescription</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Link className="btn btn-info" style={{
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1em'
            }}>
                Need Help?
            </Link>
        </div>
    );
};

export default Home;
