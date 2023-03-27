import "./NaviBar.css"

import React from "react";
const NaviBar = ()=> {
    return(
        <div className="navibar">
        <div className="naviContainer">
          <span className="logo">RAWBooking</span>
          <div className="navItems">
            <button className="naviButton">S'enregistrer</button>
            <button className="naviButton">Se Connecter</button>
          </div>
        </div>
      </div>
    )
}
export default NaviBar;