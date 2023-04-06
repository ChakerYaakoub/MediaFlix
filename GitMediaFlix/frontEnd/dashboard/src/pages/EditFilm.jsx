import React from 'react'
import { useParams } from "react-router-dom";
import { FilmForm, Header } from '../components';
import FetchFilmById from '../components/FetchData/FetchFilmById';
import Loading from '../components/Loading';





const EditFilm = () => {
  const { id } = useParams();
  const data = FetchFilmById(id);
  const  Url = `http://localhost:3000/admin/EditFilm/${ id }`;






  return (
    <div className='m-1 md:m-2 mt-14 p-1 md:p-4   bg-white rounded-3xl '>
      <Header category="MEDIA TOOLS" title="Edit Film " />
      <p>id:{id}</p> <br /><br />

      <div>
        {!data && <Loading />}



        {data.film.title   && <FilmForm url={Url} oldData={data} ForWhat="edit"/>} 
       



      </div>

    </div>
  )
}

export default EditFilm