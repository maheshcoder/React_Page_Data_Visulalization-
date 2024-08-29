import React from "react"
import "./Navbar.css"
const Navbar = ()=>{
  return (
    <div className="header-container">
      <div className="header-section">
        <h2 className="h2">K-Hub React Practise App</h2>
      </div>
      <div className="header-section middle"></div>
      <div className="header-section right"></div>
    </div>
  );
};
export default Navbar;