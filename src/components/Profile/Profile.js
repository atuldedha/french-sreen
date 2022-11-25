import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import data from "./staticData";

const Profile = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(data);
  const [newData, setNewData] = useState(data);
  const [personalEditActive, setPersonalEditActive] = useState(false);
  const [reunionEditActive, setReunionEditActive] = useState(false);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = URL.createObjectURL(e.target.files[0]);
      setInfo({ ...info, image: img });
      setNewData({ ...newData, image: img });
    }
  };

  const handleRoute = (value) => {
    navigate(value);
  };

  const closePersonalEdit = () => {
    setPersonalEditActive(false);
    setNewData(...info);
  };

  const closeReunionEdit = () => {
    setReunionEditActive(false);
    setNewData(...info);
  };

  const handlePersonalSave = (from) => {
    setInfo({ ...info, ...newData });
    setPersonalEditActive(false);
  };

  const handleReunionSave = (from) => {
    setInfo({ ...info, ...newData });
    setReunionEditActive(false);
  };

  const handleEdit = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div className="middleContainer">
      <div className="middleLeftContainer">
        <button className="middleLinks" onClick={() => handleRoute("/profile")}>
          Profile
        </button>
        <button className="middleLinks" onClick={() => handleRoute("/reunion")}>
          Rèunion
        </button>
        <button
          className="middleLinks"
          onClick={() => handleRoute("/historique")}
        >
          Historique
        </button>
      </div>
      <div className="middleRightContainer">
        <div className="profileImageContainer">
          <input
            type="file"
            id="input-file-upload"
            hidden
            // multiple={true}
            onChange={handleChange}
          />
          <label id="label-file-upload" htmlFor="input-file-upload">
            <img src={info.image} alt="icon" className="profileImage" />
          </label>
        </div>

        <div className="profileNameWrapper">
          <span className="firstNameText">{info.firstName} &nbsp;</span>
          <span className="firstNameText">{info.lastName}</span>
        </div>

        <div className="editInfoTextContainer">
          <span className="firstNameText">
            Données <span>&nbsp; </span>Personnelles
          </span>
          {!personalEditActive && (
            <button
              className="editButton"
              onClick={() => setPersonalEditActive(true)}
            >
              Edit
            </button>
          )}
          {personalEditActive && (
            <button className="saveButton" onClick={handlePersonalSave}>
              Save
            </button>
          )}
          {personalEditActive && (
            <button className="closeButton" onClick={closePersonalEdit}>
              Cancel
            </button>
          )}
        </div>

        <div className="editInfoContainer">
          <div className="flexRowContainer">
            <span className="editOption">Nom:</span>
            {personalEditActive ? (
              <input
                type="text"
                value={newData.firstName}
                name="firstName"
                onChange={handleEdit}
                className="editInput"
              />
            ) : (
              <span className="editValue">{info.firstName}</span>
            )}

            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Prénom:</span>
            {personalEditActive ? (
              <input
                type="text"
                value={newData.lastName}
                name="lastName"
                onChange={handleEdit}
                className="editInput"
              />
            ) : (
              <span className="editValue">{info.lastName}</span>
            )}

            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Adresse Mail:</span>
            {personalEditActive ? (
              <input
                type="text"
                value={newData.address}
                name="address"
                onChange={handleEdit}
                className="editInput"
              />
            ) : (
              <span className="editValue">{data.address}</span>
            )}

            {/* To do editing here */}
          </div>
        </div>

        <div className="editInfoTextContainer">
          <span className="firstNameText">
            Données <span>&nbsp;</span> de <span>&nbsp;</span> la{" "}
            <span>&nbsp;</span>Rèunion:
          </span>
          {!reunionEditActive && (
            <button
              className="editButton"
              onClick={() => setReunionEditActive(true)}
            >
              Edit
            </button>
          )}
          {reunionEditActive && (
            <button className="saveButton" onClick={handleReunionSave}>
              Save
            </button>
          )}
          {reunionEditActive && (
            <button className="closeButton" onClick={closeReunionEdit}>
              Cancel
            </button>
          )}
        </div>

        <div className="editInfoContainer">
          <div className="flexRowContainer">
            <span className="editOption">Id de la Rèunion:</span>
            {reunionEditActive ? (
              <input
                type="text"
                value={newData.reunion}
                name="reunion"
                onChange={handleEdit}
                className="editInput"
              />
            ) : (
              <span className="editValue">{info.reunion}</span>
            )}

            {/* To do editing here */}
          </div>

          <div className="flexRowContainer">
            <span className="editOption">Code Secret</span>
            {reunionEditActive ? (
              <input
                type="text"
                value={newData.reunionSecret}
                name="reunionSecret"
                onChange={handleEdit}
                className="editInput"
              />
            ) : (
              <span className="editValue">{info.reunionSecret}</span>
            )}

            {/* To do editing here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
