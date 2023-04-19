import React from 'react'
import style from './topBox.module.css'

const TopBox = ({data}) => {
  return (
    <div className={style.boxContainer}>
        <div className={style.imgDiv}><img src={data.img} /></div>
        <div className={style.title}>{data.title}</div>
        <div className={style.numbers}>{data.numbers}</div>
    </div>
  )
}

export default TopBox