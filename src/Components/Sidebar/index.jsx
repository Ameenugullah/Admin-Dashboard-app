import "./Sidebar.css";
import Logo from "../Logo/logo";
import { ChartColumnBig, LayoutDashboard, MessageCircle, MonitorDot, ScrollText, Settings, Wallet } from "lucide-react";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <Logo/>
            <div className="tabs">
                <div className="tabs">
                    <a href="#" className="item">
                        <LayoutDashboard size={15} />
                        <h3>Dashboard</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <MessageCircle size={15} />
                        <h3>Messages</h3>
                        <div className="count">10+</div>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <ScrollText size={15} />
                        <h3>Invoices</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <Wallet size={15} />
                        <h3>Wallet</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <ChartColumnBig size={15} />
                        <h3>Analytics</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <MonitorDot size={15} />
                        <h3>My Activity</h3>
                    </a>
                </div>
                 <div className="tabs">
                    <a href="#" className="item">
                        <Settings size={15} />
                        <h3>Settings</h3>
                    </a>
                </div>
            </div>
            
        </aside>
    );
};

export default Sidebar;