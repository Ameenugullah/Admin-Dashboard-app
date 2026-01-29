import './Dashboard.css';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar';
import VisaCard from '../Components/VisaCard/Card';
import { useState } from 'react';
import SendMoney from '../Components/SendMoney/SendMoney';


const Dashboard = () => {
    const [open, _setOpen] = useState(false);
    return (
        <>
        <Sidebar open={open}/>
        <main className="main">
            <Navbar onMenuClick={() => _setOpen(!open)} />
            <section className="container">
                <div className="column">
                    <VisaCard/>
                    <SendMoney/>
                </div>
                <div className="column"></div>
            </section>
        </main>
        </>
    );
};

export default Dashboard;