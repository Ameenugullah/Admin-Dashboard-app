import './logo.css';
import { Crown } from 'lucide-react';

const Logo = ({ className }) => {
    return (
        // The className prop allows us to pass "nav-logo" from the Navbar
        <div className={`logo ${className || ""}`}>
            <Crown size={30} className="logo-icon" />
            <h1>
                Fast<span className="primary-text">pay</span>
            </h1>
        </div>
    );
};

export default Logo;
