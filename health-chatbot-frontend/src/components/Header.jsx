import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import myimage from '../assets/Logo.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={myimage} alt="" style={{ width: '10em' }} /></Link>
            </div>
        </nav>
    );
};

export default Header;
