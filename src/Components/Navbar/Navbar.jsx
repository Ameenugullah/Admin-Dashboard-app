import "./Navbar.css";
import Logo from "../Logo/logo";
import { BellRing, Menu, Search } from "lucide-react";
import Profile from "../../assets/profile2.jpg";

const Navbar = ({ onMenuClick }) => {
    return (
        <nav className="navbar">
            {/* Logo hidden on desktop via CSS, visible on mobile */}
            <Logo className="nav-logo" />

            <div className="search-bar">
                <Search className="search-icon" size={18} />
                <input type="text" placeholder="Search history..." />
            </div>

            <div className="nav-actions">
                <div className="icon-badge-wrapper">
                    <BellRing size={22} />
                    <span className="badge-dot"></span>
                </div>
                
                <div className="nav-profile">
                    <img src={Profile} alt="profile" />
                </div>

                {/* Menu Button - Only functional/visible on Mobile */}
                <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle Menu">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
