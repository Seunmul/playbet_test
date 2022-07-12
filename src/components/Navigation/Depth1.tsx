import React from 'react'
import classes from "./Depth1.module.css"

const Depth1 = () => {
  return (
    <div className={classes.border}>
        <div className={classes.main}>
            <img className={classes.logo} src='img/playbet.png'/>
            <div className={classes.betlist}>lol</div>
            <div className={classes.betlist}>soccer</div>
            <div className={classes.betlist}>baseball</div>
            <div className={classes.login}>로그인</div>
        </div>
    </div>
  )
}

export default Depth1