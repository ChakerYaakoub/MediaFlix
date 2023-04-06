import React, { useState, useEffect } from "react";

const GetDataCasts = () => {
  const [actors, setActors] = useState([]);
  const [writers, setWriters] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/admin/GetDataCasts")
      .then(res => res.json())
      .then(data => {
        setActors(data.actors);
        setWriters(data.writers);
        setDirectors(data.directors);
      
      });
  }, []);



  const formatParticipant = participant => ({
    _id: participant._id,
    firstName: participant.firstName,
    lastName: participant.lastName
  });

  const dataWriters = writers.map(formatParticipant);
  const dataActors = actors.map(formatParticipant);
  const dataDirectors = directors.map(formatParticipant);


  return { dataWriters, dataActors, dataDirectors };
};

export default GetDataCasts;
