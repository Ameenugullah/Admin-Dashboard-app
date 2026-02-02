import './QuickTransfer.css';
import NgFlag from '../../assets/ng-flag.svg';
import UsFlag from '../../assets/us-flag.png';
import { Group, HandCoins, ScrollText, Send } from 'lucide-react';

const QuickTransfer = () => {
    return (
        // Using the global 'card' class for consistent styling
        <div className='quick-transfer-card card'>
            <h2 className="title-sm">Quick Transfer</h2>
            
            <div className="balance-info-transfer">
                <p className="muted">Balance</p>
                <h1>$200,000</h1>
            </div>
            
            <div className="transfer-input-group">
                <p className="muted">Enter amount</p>
                <div className="input-row">
                    <span className="currency-symbol">$</span>
                    <input type="text" placeholder='0.00' />
                    <div className="flag-stack">
                        <img src={NgFlag} className="flag-circle" alt="ng-flag" />
                        <img src={UsFlag} className="flag-circle" alt="us-flag" />
                    </div>
                </div>
            </div>
            
            <div className="action-buttons-grid">
                <button className="action-item">
                    <div className="icon-circle primary-bg">
                        <Send size={20} color="white"/>
                    </div>
                    <p className="muted">Send</p>
                </button>
                <button className="action-item">
                    <div className="icon-circle primary-bg">
                        <HandCoins size={20} color="white"/>
                    </div>
                    <p className="muted">Receiver</p>
                </button>
                <button className="action-item">
                    <div className="icon-circle primary-bg">
                        <ScrollText size={20} color="white"/>
                    </div>
                    <p className="muted">Invoice</p>
                </button>
                <button className="action-item">
                    <div className="icon-circle primary-bg">
                        <Group size={20} color="white"/>
                    </div>
                    <p className="muted">More</p>
                </button>
            </div>
        </div>
    );
};
export default QuickTransfer;
