import React from "react";
import "./ParLIst.css";

import { Link } from "react-router-dom";
import PreUpModal from "./updateModal/upModal";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";


const ParList = ({ Participants }) => {
  const { currentColor } = useStateContext();

  const [selectedParticipant, setSelectedParticipant] = useState(null)

  const handleRefresh = () => {
    window.location.reload();
  };

  const deleteClick = (Participant) => {
    fetch(`http://localhost:3000/Participants/${Participant._id}`, {
      method: "DELETE",
    }).then(() => {
      handleRefresh();
    });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredParticipants = Participants.filter((Participant) => {
    return (
      Participant.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Participant.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Participant.kind.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }).reverse(); // reverse the order of the array

  return (
    <>
    
        {modalOpen && (
          
          <PreUpModal
            setOpenModal={setModalOpen}
            Participant= {selectedParticipant}
          />
        )}
           <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px",height:"40px" }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            width:"350px",
            border:"1px solid black",
            borderRadius:"8px"        
          }}
        />

        <button onClick={handleSearch} style={{marginLeft:"5px",fontSize:"25px",backgroundColor:`${currentColor}`,padding:"0 13px",color:"white",borderRadius:"8px"}} ><i className="fa fa-search"/></button>

      </div>
      <div className="parlistmainstructure">
        {filteredParticipants.map((Participant) => (
          <div className="mecard" key={Participant._id}>
            <img  src={`http://localhost:3000/${Participant.img}`} alt="John" style={{ width: "100%",height:"300px" }} />
            <div style={{display:"flex",justifyContent:"space-evenly",textAlign:"center",textTransform:"uppercase",paddingLeft:"10px"}}>
            <h1>{Participant.firstName}</h1><h1>{Participant.lastName}</h1>
            </div>
            <p
              className="metitle"
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              {Participant.kind}
            </p>
            <p>{Participant.info?.substring(0,50) + '...'}</p>
            <div style={{ margin: "24px 0" }}>
              <div>
                <button
                  style={{ backgroundColor: "#EF9D26" }}
                  className="bntfriend"
                  onClick={() => {
                    setModalOpen(true);
                    setSelectedParticipant(Participant)
                  }}
                >
                  Update
                </button>
                <button
                  style={{ backgroundColor: "#C63431" }}
                  className="bntfriend"
                  onClick={() => deleteClick(Participant)}
                >
                  Delete
                </button>
              </div>
              <p className="onebtn" style={{ background: `${currentColor}` }}>
                <Link to={`/Casts/${Participant._id}`}>
                  <button className="onebtn">View Details</button>
                </Link>
              </p>
            </div>
          </div>
        ))}
    
      </div>
    </>
  );
};

export default ParList;
