import "./sidebar.css";
import Logo from "../Logo/logo";
import { 
    ChartColumnBig, HandHelping, LayoutDashboard, MessageCircle, 
    MonitorDot, ScrollText, Settings, SunMoon, Wallet 
} from "lucide-react";
import Profile from "../../assets/profile2.jpg";

const Sidebar = ({ open }) => {
    return (
        // The "open" class controls visibility on mobile
        <aside className={`sidebar ${open ? "open" : ""}`}>
            <div className="sidebar-top">
                <Logo />
            </div>

            <nav className="tabs">
                <a href="#" className="item active">
                    <LayoutDashboard className="icon" />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="item">
                    <MessageCircle className="icon" />
                    <span>Messages</span>
                    <span className="count">10</span>
                </a>
                <a href="#" className="item">
                    <ScrollText className="icon" />
                    <span>Invoices</span>
                </a>
                <a href="#" className="item">
                    <Wallet className="icon" />
                    <span>Wallet</span>
                </a>
                <a href="#" className="item">
                    <ChartColumnBig className="icon" />
                    <span>Analytics</span>
                </a>
                <a href="#" className="item">
                    <MonitorDot className="icon" />
                    <span>My Activity</span>
                </a>
                <a href="#" className="item">
                    <Settings className="icon" />
                    <span>Settings</span>
                </a>
            </nav>

            <div className="sidebar-footer">
                <div className="footer-item">
                    <HandHelping className="icon" />
                    <span>Help Center</span>
                </div>
                <div className="footer-item">
                    <SunMoon className="icon" />
                    <span>Theme</span>
                </div>
                
                <div className="user-profile">
                    <img src={Profile} alt="User Profile" />
                    <div className="details">
                        <h4 className="name">Abdulmalik</h4>
                        <p className="role">Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
