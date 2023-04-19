import React from 'react'
import style from '../pages/dashboard.module.css';
const DashboardLanding = () => {
  return (
    <>
            <div className={style.topBoxes}>
              <div className={style.box} id={style.box1}></div>
              <div className={style.box} id={style.box2}></div>
              <div className={style.box} id={style.box3}></div>
              <div className={style.box} id={style.box4}></div>
            </div>
            <div className={style.graphContainer}>

            </div>
            <div className={style.bottomFlex}>
                <div className={style.bottomLeft}>
                    
                </div>
                <div className={style.bottomRight}>
                    
                </div>
            </div>
    </>
            
  )
}

export default DashboardLanding