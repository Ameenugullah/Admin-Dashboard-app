import "./sidebar.css";
import Logo from "../Logo/logo";
import Message from "../Messages/Message";
import { useState } from "react";
import {
  ChartColumnBig,
  HandHelping,
  LayoutDashboard,
  MessageCircle,
  MonitorDot,
  ScrollText,
  Settings,
  SunMoon,
  Wallet,
} from "lucide-react";
import Profile from "../../assets/profile2.jpg";

const Sidebar = ({ open }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-top">
        <Logo />
      </div>

      <nav className="tabs">
        {[
          { label: "Dashboard", icon: LayoutDashboard },
          { label: "Messages", icon: MessageCircle },
          { label: "Invoices", icon: ScrollText },
          { label: "Wallet", icon: Wallet },
          { label: "Analytics", icon: ChartColumnBig },
          { label: "My Activity", icon: MonitorDot },
          { label: "Settings", icon: Settings },
        ].map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={`item ${activeItem === label ? "active" : ""}`}
            onClick={() => setActiveItem(label)}
          >
            <Icon className="icon" />
            <span>{label}</span>

            {label === "Messages" && <span className="count">1</span>}
          </div>
        ))}
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
