import React from 'react';
import classes from "./Icon.modile.css";

const Icon = ({ name, imgUrl, isActive, disables, handleClick }) => {
  return (
    <div
    className={`${classes.link} ${
      isActive && isActive === name ? classes.activeLink : ""
    }`}
  >
    {!isActive ? (
      <img src={imgUrl} alt="logo" className={classes.imgLink} />
    ) : (
      <img src={imgUrl} alt="logo" className={classes.imgLink} />
    )}
  </div>
  )
}

export default Icon
