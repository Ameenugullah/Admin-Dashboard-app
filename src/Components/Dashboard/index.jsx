import './Dashboard.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar';
import VisaCard from '../VisaCard/Card';
import SendMoney from '../SendMoney/SendMoney';
import QuickTransfer from '../QuickTransfer/QuickTransfer';
import CashFlow from '../CashFlow/CashFlow';
import StatisticsGrid from '../StatisticsGrid/StatisticsGrid';
import Transaction from '../Transactions/Transaction';
import { useState } from 'react';

const Dashboard = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dashboard-wrapper">
            {/* Overlay for mobile: closes sidebar when clicking outside */}
            {open && <div className="mobile-overlay" onClick={() => setOpen(false)}></div>}
            
            <Sidebar open={open}/>
            
            <main className={`main-content ${open ? 'shifted' : ''}`}>
                <Navbar onMenuClick={() => setOpen(!open)} />
                <section className="dashboard-container">
                    {/* Main Content Area */}
                    <div className="content-grid">
                        <div className="main-column">
                            <div className="top-row">
                                <VisaCard/>
                                <CashFlow/>
                            </div>
                            <div className="second-row">
                                <SendMoney/>
                                <QuickTransfer/>
                            </div>
                            <StatisticsGrid/>
                            <Transaction/>
                        </div>

                       
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
