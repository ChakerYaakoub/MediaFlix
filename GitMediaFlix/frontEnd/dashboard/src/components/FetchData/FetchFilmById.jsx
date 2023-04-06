import React, { useState, useEffect } from 'react';

const FetchFilmById = (id) => {
  const [film, setFilm] = useState({
    type: '',
   
 
    title: '',
    dateYear: '',
    description: '',
    category: '',
    trailer: '',
    image: '',
    video: '',
   
    writer: '',
    director: ''
    
    
  });
  const [actors, setActors]= useState(['']) ;

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`http://localhost:3000/admin/GetFilm/${id}`);
        const filmData = await response.json();
        // console.log(filmData)
        setFilm({
          type: filmData.type,
   
          title: filmData.title,
          dateYear: filmData.dateYear,
          description: filmData.description,
          category: filmData.category,
          trailer: filmData.trailer,
          image: filmData.image,
          video: filmData.video,
   
          writer: filmData.writer,
          director: filmData.director
          
         
        });

      
          // actors: filmData.actors.map(actor => actor._id),

          setActors(filmData.actors)

      
       
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilm();
  }, [id]);
  // console.log(actors)


  return{ film , actors};
};

export default FetchFilmById;


