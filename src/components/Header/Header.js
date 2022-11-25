import React from "react";
import "./Header.css";
import LogoutIcon from "../../icons/logout.png";
import { useNavigate } from "react-router-dom";
// import {signOut} from "firebase/auth";
// import { auth } from "../firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = (value) => {
    navigate(value);
  };

  const logout = async () => {
    //uncomment when firbase is implemented
    // await signOut(auth);
    console.log("logout called");
  };
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
          <span className="headerText" onClick={() => handleRoute("/plan")}>
            Planifier
          </span>
          <span className="headerText" onClick={() => handleRoute("/rejoin")}>
            Rejoindre
          </span>
        </div>

        <button className="logoutButton">
          <img src={LogoutIcon} alt="logout" onClick={logout} />
        </button>
      </div>
    </div>
  );
};

export default Header;
