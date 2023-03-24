import React from "react";
import classes from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/index";
import Button from "./shared/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const adress = "0xcB1441CB818034DF5E235b0bc71638B536c5F9e3";

  return (
    <header>
      <nav className={classes.container}>
        <div className={classes.serachIconContainer}>
          <img src={logo} alt="logo" />
          <div className={classes.searchContainer}>
            <input type="text" />
          </div>
        </div>

        <div className={classes.containerBtn}>
          <Button
            btnType="button"
            handleClick={() => {
              if (adress) {
                navigate("/addProject");
              }
            }}
          >
            {adress ? "Create Campaign" : "Connect Wallet"}
          </Button>
          <Link to="/profile">
            <div className={classes.containerAvatar}>
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
