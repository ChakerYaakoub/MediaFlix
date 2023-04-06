import React from 'react'
// import { Link } from 'react-router-dom';
import './CastsDiv.css'





const CastsDiv = ({casts}) => {
  return (
    <div class='ThePDIv' key={casts._id} style={{ height: "20rem",  padding: '5px', position: 'relative' }}>

    <a href={`http://localhost:5000/cast/${casts._id}`} > <img src={`http://localhost:3000/${casts.img}`} alt={`Slide ${casts._id}`} style={{ height: "100%" }} /> </a>

    <p style={{fontWeight:"bold" ,fontSize: "1rem", position: "absolute", bottom: "5px", left: "5px", color: "#ffffff", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "5px",width:"95%", borderRadius: "5px", display: "none" , height:"3.5rem"}}>{casts.kind} - {casts.firstName} {casts.lastName}</p>
 </div>
  )
}

export default CastsDiv


