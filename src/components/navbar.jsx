import React from 'react'
import style from './navbar.module.css';
const Navbar = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={style.navContainer}>
        <h4>Dashboard</h4>
        <div className={style.rightSide}>
            <div className={style.searchContainer}>
                <input type="text" placeholder='search...'></input>
                <img src="./search.png" />
            </div>  
            <img className={style.bell} src="./bell.png" />
            <div className={style.user}>
              <div className={style.userName}>{user.displayName}</div>
              
              <img className={style.userImage} src={user.photoURL} alt=""></img>
              
            </div>
            
        </div>
        

    </div>
  )
}

export default Navbar