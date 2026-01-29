import "./SendMoney.css"
import MasterCard from '../../assets/mastercard.png';
import Profile from '../../assets/profile-2.jpg';
import NgFlag from '../../assets/ng-flag.svg';
import UsFlag from '../../assets/us-flag.png';
import Luser from '../../assets/l-user.jpg';
import { Plus } from "lucide-react";

const SendMoney = () => {
    return (
       <div className="send-money">
            <h2 className="title">Send Money</h2>
            <div className="row balance">
                <div>
                    <h1>$200,000</h1>
                    <p><span className="success">+2.52%</span>
                    ($1,500)
                    </p>
                </div>
                <button className="add-fund-btn">
                    <img src={MasterCard} className="icon" alt="" />
                    Add Funds
                </button>
            </div>
            <div className="amount">
                <div className="row user">
                    <div className="profile">
                        <img src={Profile} alt="profile" />
                    </div>
                    <p className="muted">Enter amount</p>
                </div>
                <div className="row price-input">
                    <p className="currency">$</p>
                    <input type="text" placeholder="0.00"/>
                    <div className="row">
                        <div className="profile">
                            <img src={NgFlag} alt="ng-flag" />
                        </div>
                        <div className="profile">
                            <img src={UsFlag} alt="us-flag" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row receiver">
                <div className="profile">
                    <img src={Luser} alt=""/> 
                </div>
                <h3 className="name">Lukman Aminu</h3>
                <div className="rounded-icon-btn">
                    <Plus/>
                </div>
            </div>
            <button className="btn primary-btn send-money-btn">Send Money</button>
       </div>
    )
}

export default SendMoney;