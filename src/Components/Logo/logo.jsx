import './logo.css';
import {Loader} from 'lucide-react';
const Logo = () => {
    return (
        <div className="logo">
            <Loader size={32} className="primary" />
            <h1>
                <span className="primary">Lalita</span>
            </h1>
        </div>
    );
};

export default Logo;