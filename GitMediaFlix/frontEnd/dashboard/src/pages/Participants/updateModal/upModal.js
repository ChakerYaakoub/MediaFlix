import React from "react";
import "./opModal.css";
import "../craetePar.css";
import { useState } from "react";

function PreUpModal({ setOpenModal, Participant }) {
  const [updateFirstName, setUpdateFirstName] = useState(Participant.firstName);
  const [updateLastName, setUpdateLastName] = useState(Participant.lastName);
  const [updateInfo, setUpdateInfo] = useState(Participant.info);
  const [updateImg, setUpdateImg] = useState(Participant.img);
  const [updateKind, setUpdateKind] = useState(Participant.kind);
  console.log(updateImg);

  const handleUpdate = () => {
    fetch(`http://localhost:3000/Participants/${Participant._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: updateFirstName,
        lastName: updateLastName,
        info: updateInfo,
        img: updateImg,
        kind: updateKind,
      }),
    }).then(() => {
      setOpenModal(false);
      window.location.reload();
    });
  };
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="create">
          <form>
            <label>
              First Name:
              <input
                type="text"
                value={updateFirstName}
                onChange={(e) => setUpdateFirstName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={updateLastName}
                onChange={(e) => setUpdateLastName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Info:
              <textarea
                value={updateInfo}
                onChange={(e) => setUpdateInfo(e.target.value)}
              />
            </label>
            <br />
            <label>
              Img:
              <input type="file" 
              // src={updateImg}
              onChange={(e) => setUpdateImg(e.target.files[0])} 
              />
            </label>
            <br />
            <label>
              Kind:
              <input
                type="text"
                value={updateKind}
                onChange={(e) => setUpdateKind(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PreUpModal;