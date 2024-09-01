import { Link } from 'react-router-dom';
import '../App.css'
import myimage from '../assets/Logo.png';

export const Banner = () => {
    return (
        <div className="container-fluid px-0 py-5 mb-5">
            <div className="container py-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div><img src={myimage} alt="image" /></div>
                        <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
                        <Link className="btn btn-outline-success" to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}