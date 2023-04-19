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
                <div className={style.graphDate}>May-June 2021 ▾</div>
                <div className={style.graph}>
                    <Graph/>
                </div>
                
            </div>
            <div className={style.bottomFlex}>
                <div className={style.bottomLeft}>
                    <div className={style.pieHeadings}>   
                        <div className={style.graphHeading}>Top products</div>
                        <div className={style.graphDate}>May-June 2021 ▾</div>
                    </div>
                    <div className={style.graphFlex}>
                        <div className={style.pieContainer}>
                            <Piegraph/>
                        </div>
                        <div className={style.desc}>
                            <div className={style.descriptionHolder}>
                                <div className={style.colorTitle}>
                                    <div className={style.color} id={style.color1}></div>
                                    <div className={style.descTitle}>Basic Tees</div>
                                </div>
                                
                                <div className={style.descNumber}>55%</div>
                            </div>
                            <div className={style.descriptionHolder}>
                                <div className={style.colorTitle}>
                                    <div className={style.color} id={style.color2}></div>
                                    <div className={style.descTitle}>Custom short pants</div>
                                </div>
                                <div className={style.descNumber}>31%</div>
                            </div>
                            <div className={style.descriptionHolder}>
                                <div className={style.colorTitle}>
                                    <div className={style.color} id={style.color3}></div>
                                    <div className={style.descTitle}>Super Hoodies</div>
                                </div>
                                
                                <div className={style.descNumber}>14%</div>
                            </div>
                        </div>
                    </div>

                    
                    
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