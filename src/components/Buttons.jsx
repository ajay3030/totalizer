import React from 'react'
import styles from './Buttons.module.css'

export default function Buttons({btns , handleClick}) { 
  return (
    <div className={styles.btn}>
        {
        btns.map(i=>(
            <button className={styles.btn2} onClick={(e)=>{handleClick(e)}}>{i}</button>
        ))
    }
    </div>
  )
}
