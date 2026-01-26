import './logo.css';
import {Crown} from 'lucide-react';
const Logo = () => {
    return (
        <div className="logo">
            <Crown size={30} className="primary" />
            <h1>
                Fast<span className="primary">pay</span>
            </h1>
        </div>
    );
};

export default Logo;