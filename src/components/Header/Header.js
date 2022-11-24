import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftContent">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9i0PODzR-Wu6ZDADP_kgLooZqWYQkt68-MQ&usqp=CAU"
          alt="Logo"
          className="logoImage"
        />
      </div>

      <div className="rightContent">
        <div className="headerLinks">
          <span className="headerText">Planifier</span>
          <span className="headerText">Rejoindre</span>
        </div>

        <button className="logoutButton">Logout</button>
      </div>
    </div>
  );
};

export default Header;