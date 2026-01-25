
import "./Navbar.css";
import Logo from "../Logo/logo";
import { BellRing, Menu, Search } from "lucide-react";
import Profile from "../../assets/profile-2.jpg";

const Navbar = ({onMenuClick}) => {
    return (
       <nav className="navbar">
            <Logo/>
         <div>
           <input type="text" placeholder="Search history" />
           <div className="icon-wrapper">
                <Search/>
           </div>
         </div>
            <div className="user">
                <div className="icon-wrapper">
                    <BellRing />
                </div>
                <div className="profile">
                    <img src={Profile} alt="profile" />
                </div>
                <div className="rounded-icon-btn menu-btn" onClick={onMenuClick}>
                    <Menu/>
                </div>
            </div>
       </nav>
    );
};

export default Navbar;