import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

export default function AddUser() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const changeInputHandler = (id, event) => {
    if (id === "username") {
      setUsername(event.target.value);
    } else if (id === "age") {
      setAge(event.target.value);
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(age);
    // console.log("test");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          minLength={3}
          type="text"
          id="username"
          onChange={(change) => changeInputHandler("username", change)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
        min={1}
          type="number"
          id="age"
          onChange={(change) => changeInputHandler("age", change)}
        />
        <Button />
      </form>
    </Card>
  );
}
