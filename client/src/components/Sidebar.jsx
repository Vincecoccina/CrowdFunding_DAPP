import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const { pathname } = useLocation();

  const isActive = (linkPath) => {
    return pathname === linkPath ? classes.active : "";
  };

  return (
    <div className={classes.container}>
      <h4 className={classes.sidebarTitle}>CrownFunding</h4>
      <div className={classes.linkContainer}>
        <NavLink to="/" className={() => isActive("/details")}>
          Dashboard
        </NavLink>
        <NavLink to="/addProject" className={() => isActive("/addProject")}>
          Créer un projet
        </NavLink>
        <NavLink to="/payement" className={() => isActive("/payement")}>
          Paiement
        </NavLink>
        <NavLink to="/wwidraw" className={() => isActive("/wwidraw")}>
          Retirer
        </NavLink>
        <NavLink to="/profile" className={() => isActive("/profile")}>
          Profil
        </NavLink>
        <NavLink to="/logout" className={() => isActive("/logout")}>
          Se deconnecter
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
