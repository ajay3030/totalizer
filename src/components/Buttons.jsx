import React from 'react'
import styles from './Buttons.module.css'

export default function Buttons() {
   const btns = ['1','2','3','4','5','6','7','8','9','0','+','-','*','=','C'];
  return (
    <div className={styles.btn}>
        {
        btns.map(i=>(
            <button className={styles.btn2}>{i}</button>
        ))
    }
    </div>
  )
}
