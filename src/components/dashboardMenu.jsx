import React from 'react'
import {Link} from 'react-router-dom';
import style from './dashboardMenu.module.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DashboardMenu = () => {

  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("user");
    toast('Come Back Soon !', {
      icon: '😊',
    });
    navigate('/');
  }

  return (
    <div className={style.mainContainer}>
        <div className={style.menuContainer}>
            <div className={style.logo}>
                Board.
            </div>
            <div className={style.menu}>
                <div><Link className={style.links} to='/dashboard'><img src="./dashboard.png" />Dashboard</Link></div>
                <div><Link className={style.links} to='/dashboard/transactions'><img src="./transactions.png" />Transactions</Link></div>
                <div><Link className={style.links} to='/dashboard/schedules'><img src="./schedule.png" />Schedules</Link></div>
                <div><Link className={style.links} to='/dashboard/users'><img src="./user_icon.png" />Users</Link></div>
                <div><Link className={style.links} to='/dashboard/settings'><img src="./setting_icon.png" />Settings</Link></div>
            </div>
        </div>
        <div className={style.menuFooter}>
                
                <div className={style.footMenu} style={{cursor:"pointer"}}>Help</div>
                <div className={style.footMenu} style={{cursor:"pointer"}}>Contact Us</div>
                <div className={style.logout} onClick={signout} style={{cursor:"pointer", fontWeight:"bold",fontSize:"1.2rem",letterSpacing:"2px"}}><img src="./exit.png"/>Logout</div>

        </div>
    </div>
  )
}

export default DashboardMenu