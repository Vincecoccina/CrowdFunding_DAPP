import React from 'react';
import classes from "./SearchButton.module.css";

const Button = (props) => {
  return (
    <button className={classes.btn}>{props.children}</button>
  )
}

export default Button
