import React from 'react'
import classes from './AddUser.module.css'

export default function AddUser() {
  return (
    <div className={classes.input}>
        <label>Username</label>
        <input type='text' placeholder='Type your Name'></input>
    </div>
  )
}
