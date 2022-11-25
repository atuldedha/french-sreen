import React, { useState } from "react";
import "./Middle.css";
import data from "./staticData";

const Middle = () => {
  const [info, setInfo] = useState(data);
  return (
    <div className="middleContainer">
      <div className="middleLeftContainer">
        <button className="middleLinks">Profile</button>
        <button className="middleLinks">Rèunion</button>
        <button className="middleLinks">Historique</button>
      </div>
      <div className="middleRightContainer">
        <div className="profileImageContainer">
          <input
            type="file"
            id="input-file-upload"
            hidden
            // multiple={true}
            // onChange={handleChange}
          />
          <label id="label-file-upload" htmlFor="input-file-upload">
            <img src={info.image} alt="icon" className="profileImage" />
          </label>
        </div>

        <div className="profileNameWrapper">
          <span className="firstNameText">Name: &nbsp;</span>
          <span className="firstNameValue">{info.firstName}</span>
        </div>

        <div className="editInfoTextContainer">
          <span className="firstNameText">Données</span>
          <span className="firstNameText2">Personnelles</span>
          <button className="editButton">Edit</button>
        </div>

        <div className="editInfoContainer">
          <div className="flexRowContainer">
            <span className="editOption">Nom:</span>
            <span className="editValue">{info.firstName}</span>
            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Prénom:</span>
            <span className="editValue">{info.lastName}</span>
            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Adresse Mail:</span>
            <span className="editValue">{data.address}</span>
            {/* To do editing here */}
          </div>
        </div>

        <div className="editInfoTextContainer">
          <span className="firstNameText">
            Données <span>&nbsp;</span> de <span>&nbsp;</span> la{" "}
            <span>&nbsp;</span>Rèunion:
          </span>
          <button className="editButton">Edit</button>
        </div>

        <div className="editInfoContainer">
          <div className="flexRowContainer">
            <span className="editOption">Id de la Rèunion:</span>
            <span className="editValue">{info.reunion}</span>
            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Code Secret</span>
            <span className="editValue">{info.reunionSecret}</span>
            {/* To do editing here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
