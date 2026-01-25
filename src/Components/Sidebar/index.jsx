import "./sidebar.css";
import Logo from "../Logo/logo";
import { ChartColumnBig, HandHelping, LayoutDashboard, MessageCircle, MonitorDot, ScrollText, Settings, SunMoon, Wallet } from "lucide-react";
import Profile from "../../assets/profile-2.jpg";
const Sidebar = ({open}) => {
    return (
        <aside className={`sidebar ${open &&  "open"}`}>
            <Logo/>
            <div className="tabs">
                <div className="tabs">
                    <a href="#" className="item">
                        <LayoutDashboard />
                        <h3>Dashboard</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <MessageCircle />
                        <h3>Messages</h3>
                        <div className="count">10+</div>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <ScrollText />
                        <h3>Invoices</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <Wallet />
                        <h3>Wallet</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <ChartColumnBig />
                        <h3>Analytics</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <MonitorDot />
                        <h3>My Activity</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <Settings />
                        <h3>Settings</h3>
                    </a>
                </div>
            </div>
            <div className="button">
                <div className="items-tabs">
                    <HandHelping />
                    <h3>Help Center</h3>
                </div>
                <div className="items-tabs">
                    <SunMoon />
                    <h3>Theme</h3>
                </div>
                 <div className="user">
                  <div className="profile">
                    <img src={Profile} alt="User Profile" />
                    <div className="details">
                        <h4 className="name">Abdulmalik Aminu</h4>
                        <p className="role">Admin</p>
                    </div>
                   
                  </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;