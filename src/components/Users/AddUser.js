import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

export default function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const changeInputHandler = (id, event) => {
    if (id === "username") {
      setEnteredUsername(event.target.value);
    } else if (id === "age") {
      setEnteredAge(event.target.value);
    }
  };



  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return
    }
    if (+enteredAge < 1) {
      return
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('')
    setEnteredUsername('')
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          // minLength={1}
          type="text"
          id="username"
          value={enteredUsername}
          onChange={(change) => changeInputHandler("username", change)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
        // min={1}
          type="number"
          id="age"
          value={enteredAge}
          onChange={(change) => changeInputHandler("age", change)}
        />
        <Button />
      </form>
    </Card>
  );
}
