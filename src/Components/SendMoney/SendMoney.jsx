import "./SendMoney.css";
import MasterCard from '../../assets/mastercard.png';
import Profile from '../../assets/profile2.jpg';
import NgFlag from '../../assets/ng-flag.svg';
import UsFlag from '../../assets/us-flag.png';
import Luser from '../../assets/luser.jpg';
import { Plus } from "lucide-react";

const SendMoney = () => {
  return (
    <div className="send-money card">
      <h2 className="title">Send Money</h2>

      {/* Balance Section */}
      <div className="balance-row">
        <div className="balance-info">
          <h1>$200,000</h1>
          <p className="stat">
            <span className="success-text">+2.52%</span>
            <span className="muted"> ($1,500)</span>
          </p>
        </div>

        <button className="add-fund-btn">
          <img src={MasterCard} className="card-icon" alt="mastercard" />
          <span>Add Funds</span>
        </button>
      </div>

      {/* Amount Input */}
      <div className="amount-card">
        <div className="input-header">
          <div className="profile-sm">
            <img src={Profile} alt="sender" />
          </div>
          <p className="muted">Enter amount</p>
        </div>

        <div className="input-group">
          <span className="currency-symbol">$</span>
          <input type="number" placeholder="0.00" step="0.01" />

          <div className="flag-group">
            <img src={NgFlag} className="flag" alt="NG" />
            <img src={UsFlag} className="flag" alt="US" />
          </div>
        </div>
      </div>

      {/* Receiver */}
      <div className="receiver-card">
        <div className="receiver-info">
          <div className="profile-sm">
            <img src={Luser} alt="receiver" />
          </div>
          <h3 className="name">Lukman Aminu</h3>
        </div>

        <button className="add-btn" aria-label="Change receiver">
          <Plus size={18} />
        </button>
      </div>

      <button className="send-money-btn">Send Money</button>
    </div>
  );
};

export default SendMoney;
