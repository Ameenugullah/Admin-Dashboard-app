import './Dashboard.css';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar';
import VisaCard from '../Components/VisaCard/Card';
import SendMoney from '../Components/SendMoney/SendMoney';
import QuickTransfer from '../Components/QuickTransfer/QuickTransfer';
import CashFlow from '../Components/CashFlow/CashFlow';
import StatisticsGrid from '../Components/StatisticsGrid/StatisticsGrid';
import Transaction from '../Components/Transactions/Transaction';
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
