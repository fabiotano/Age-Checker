import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <button className={classes.button} type="submit">
      {props.info}
    </button>
  );
}
