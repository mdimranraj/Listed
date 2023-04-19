import React from 'react'
import style from './dashboard.module.css';
import DashboardMenu from '../components/dashboardMenu';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import TopBox from '../components/topBox';
import Graph from '../components/graph';
import Piegraph from '../components/piegraph';
import Schedule from '../components/schedule';
const Dashboard = () => {
  return (
    <div className={style.mainContainer}>
        <div className={style.leftSide}>
            <DashboardMenu/>
        </div>
        <div className={style.rightSide}>
            <Navbar/>
            <div className={style.topBoxes}>
              <div className={style.box} id={style.box1}><TopBox data={{img:"./revenue.png", title:"Total Revenue", numbers:"$ 2,109,980"}} /></div>
              <div className={style.box} id={style.box2}><TopBox data={{img:"./transactions_black.png", title:"Total Transactions", numbers:"1,520"}} /></div>
              <div className={style.box} id={style.box3}><TopBox data={{img:"./likes.png", title:"Total Likes", numbers:"9,721"}} /></div>
              <div className={style.box} id={style.box4}><TopBox data={{img:"./users.png", title:"Total Users", numbers:"892"}} /></div>
            </div>
            <div className={style.graphContainer}>
                <div className={style.graphHeading}>Activities</div>
                <Graph/>
            </div>
            <div className={style.bottomFlex}>
                <div className={style.bottomLeft}>
                    <Piegraph/>
                </div>
                <div className={style.bottomRight}>
                    <Schedule/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard