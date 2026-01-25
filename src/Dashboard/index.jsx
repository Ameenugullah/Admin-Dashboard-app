import './Dashboard.css';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar';
import { useState } from 'react';


const Dashboard = () => {
    const [open, _setOpen] = useState(false);
    return (
        <>
        <Sidebar open={open}/>
        <main>
            <Navbar onMenuClick={() => _setOpen(!open)} />
        </main>
        </>
    );
};

export default Dashboard;