import { Link } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import '../App.css'

export const Chat = () => {
    return (
        <div className="text-center mb-5 chat">
            <br /><br /><br />
            <h1 >Chat with MediMind Now!</h1>
            {/* Floating Action Button */}
            <div >
                <Link to="/chatbot" className="btn btn-primary text-center" style={{ width: '10em' }}>
                    Click Here!
                </Link>
            </div>
            <br /><br /><br />

        </div>
    );
}