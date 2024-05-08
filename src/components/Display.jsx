import React from 'react'
import style from './Display.module.css'
export default function Display({data}) {
  return (
    <div className={style.Display_container}>
        <input type="text" value={data} readonly/>
    </div>
  )
}
