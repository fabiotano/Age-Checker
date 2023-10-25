import React from "react";

import Card from '../UI/Card';
import Button from "../Button";

import classes from "./AddUser.module.css";

export default function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("test");
  };

  return (
    <Card>
      <form onSubmit={addUserHandler} className={classes.input}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Type your name" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" placeholder="Type your age" />
        <Button />
      </form>
    </Card>
  );
}
