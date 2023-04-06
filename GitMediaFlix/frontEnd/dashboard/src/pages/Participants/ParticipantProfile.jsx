import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFech";
import "./ParticipantProfile.css";

const ParticipantProfile = () => {
  const { _id } = useParams();
  const {
    data: Participant,
    error,
    isPending,
  } = useFetch(`http://localhost:3000/Participants/${_id}`);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {Participant && (
        <div className="maidPaitiInfo">
          <div className="profilefirstinfo">
            <div className="nameandpro">
              <div>
              <div style={{display:"flex",flexWrap:"wrap"}}>
                  <h3 style={{fontSize:"60px",marginTop:"50px",paddingLeft:"10px" }}>{Participant.firstName}</h3>
                  <h3 style={{fontSize:"60px",marginTop:"51px",paddingLeft:"20px"}}>{Participant.lastName}</h3>
              </div>
                <h4 style={{textTransform:"uppercase",fontSize:"30px",}}> {Participant.kind} </h4>
              </div>
            </div>

            <div className="imgprops">
            <img  src={`http://localhost:3000/${Participant.img}`} alt="John" style={{ width: "100%",height:"300px",borderRadius:"3px"}} />
            </div>
          </div>

          <div className="textPrainfo">
            <p>{Participant.info}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ParticipantProfile;
