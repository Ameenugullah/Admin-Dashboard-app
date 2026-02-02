import { CircleDollarSign, Flag, GitBranchPlus, Pencil, Search, Star } from 'lucide-react';
import './StatisticsGrid.css';
import Huser from '../../assets/huser.jpg';
import Luser from '../../assets/luser.jpg';
import User3 from '../../assets/user3.jpg';
import User4 from '../../assets/user4.jpg';

const StatisticsGrid = () => {
    return (
        <div className="statistics-container">
            <h2 className='title'>Statistics Overview</h2>
            
            {/* Top Metric Boxes */}
            <div className="stats-boxes">
                <div className="stat-box">
                    <div className="icon-wrapper orange-light">
                        <GitBranchPlus className='icon-orange'/>
                    </div>
                    <div className="stat-info">
                        <h4>357k</h4>
                        <p className="muted">User Trust</p>
                    </div>
                </div>

                <div className="stat-box">
                    <div className="icon-wrapper blue-light">
                        <Flag className='icon-blue'/>
                    </div>
                    <div className="stat-info">
                        <h4>20</h4>
                        <p className="muted">Countries</p>
                    </div>
                </div>

                <div className="stat-box">
                    <div className="icon-wrapper orange-light">
                        <CircleDollarSign className='icon-orange'/>
                    </div>
                    <div className="stat-info">
                        <h4>$1.3m</h4>
                        <p className="muted">Transactions</p>
                    </div>
                </div>

                <div className="stat-box">
                    <div className="icon-wrapper green-light">
                        <Star className='icon-green'/>
                    </div>
                    <div className="stat-info">
                        <h4>3k</h4>
                        <p className="muted">Reviews</p>
                    </div>
                </div>
            </div>

            {/* Contact History Section */}
            <div className="contact-history-card">
                <div className="contact-header">
                    <div>
                        <h2 className='title-sm'>Contact History</h2>
                        <p className="muted-xs">30 new contacts added</p>
                    </div>
                    <div className="action-btns">
                        <button className="icon-btn"><Pencil size={18}/></button>
                        <button className="icon-btn"><Search size={18}/></button>
                    </div>
                </div>
                
                <div className="contacts-list">
                    {[
                        { img: Huser, name: "Hauwa Isa", val: "$1,200" },
                        { img: Luser, name: "Luku Gullah", val: "$2,200" },
                        { img: User3, name: "User 3", val: "$1,500" },
                        { img: User4, name: "User 4", val: "$2,800" }
                    ].map((user, i) => (
                        <div className="contact-item" key={i}>
                            <img src={user.img} alt={user.name} className="user-avatar" />
                            <div className="user-info">
                                <h3>{user.name}</h3>
                                <p className="amount">{user.val}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatisticsGrid;
