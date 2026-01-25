import './logo.css';
import {Crown} from 'lucide-react';
const Logo = () => {
    return (
        <div className="logo">
            <Crown size={30} className="primary" />
            <h1>
                Mai<span className="primary">tama</span>
            </h1>
        </div>
    );
};

export default Logo;