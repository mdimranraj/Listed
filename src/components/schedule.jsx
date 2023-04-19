import React from 'react'
import style from './schedule.module.css'

const Schedule = () => {
  return (
    <div className={style.mainContainer}>
        <div className={style.headingContainer}>
            <div className={style.heading}>Today's Schedule</div>
            <div className={style.seeAll} style={{cursor:"pointer"}}>See all ›</div>
        </div>
       
       <div className={style.meeting1}>
            <div className={style.title}>Meeting with suppliers from Kuta Bali</div>
            <div className={style.time}>14:00 - 15:00</div>
            <div className={style.place}>At sunset road, Kuta Bali</div>
       </div>
       <div className={style.meeting2}>
            <div className={style.title}>Check operation at GIGA Factory 1</div>
            <div className={style.time}>18:00 - 20:00</div>
            <div className={style.place}>At Central Jakarta</div>
       </div>
        
    </div>
  )
}

export default Schedule