import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const changeInputHandler = (id, event) => {
    if (id === "username") {
      setEnteredUsername(event.target.value);
    } else if (id === "age") {
      setEnteredAge(event.target.value);
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername || !enteredAge) {
      setError({
        title: "Invalid input",
        message:
          "The input cannot be empty. Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "The age cannot be 0. Please enter a valid age.",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
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
          <Button info='Add User'/>
        </form>
      </Card>
    </div>
  );
}
