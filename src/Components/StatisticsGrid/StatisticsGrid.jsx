import { CircleDollarSign, Flag, GitBranchPlus, Pencil, Search, Star } from 'lucide-react';
import  './StatisticsGrid.css';
import Huser from '../../assets/huser.jpg';
import Luser from '../../assets/luser.jpg';
import User2 from '../../assets/user2.jpg';
import User3 from '../../assets/user3.jpg';
import User4 from '../../assets/user4.jpg';

const StatisticsGrid = () => {
    return (
        <div className="statistics-grid">
            <h2 className='title'>Statistics Overview</h2>
            <div className="boxes">
                <div className="box">
                  <div className="rounded-icon-btn">
                    <GitBranchPlus className='icon danger'/>
                  </div>
                  <h4>357k</h4>
                  <p className="muted">User Trust</p>
                </div>
                <div className="box">
                  <div className="rounded-icon-btn">
                    <Flag className='icon primary'/>
                  </div>
                  <h4>20 Countries</h4>
                  <p className="muted">Global Reach</p>
                </div>
                <div className="box">
                  <div className="rounded-icon-btn">
                    <CircleDollarSign className='icon danger'/>
                  </div>
                  <h4>$1.3m</h4>
                  <p className="muted">Transaction</p>
                </div>
                <div className="box">
                  <div className="rounded-icon-btn">
                    <Star className='icon danger'/>
                  </div>
                  <h4>3k</h4>
                  <p className="muted">Reviews</p>
                </div>
                <div className="contact-history">
                    <div className="row contact-history-header">
                        <h2 className='title'>Contact History</h2>
                      <div className="row">
                        <div className="rounded-icon-btn">
                            <Pencil className='icon'/>
                        </div>
                        <div className="rounded-icon-btn">
                            <Search className='icon'/>
                        </div>
                      </div>
                    </div>
                 
                    <p className="mute">30 new contact added</p>
                    <div className="profile-container">
                        <div className="row user">
                            <div className="profile">
                                <img src={Huser} alt="Hauwa" />
                            </div>
                            <h3>Hauwa Isa</h3>
                            <p className="muted">$1200</p>
                        </div>

                        <div className="row user">
                            <div className="profile">
                                <img src={Luser} alt="luku" />
                            </div>
                            <h3>Luku Gullah</h3>
                            <p className="muted">$2,200</p>
                        </div>
                        <div className="row user">
                            <div className="profile">
                                <img src={User3} alt="User 3" />
                            </div>
                            <h3>User 3</h3>
                            <p className="muted">$1,500</p>
                        </div>
                        <div className="row user">
                            <div className="profile">
                                <img src={User4} alt="User 4" />
                            </div>
                            <h3>User 4</h3>
                            <p className="muted">$2,800</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsGrid;