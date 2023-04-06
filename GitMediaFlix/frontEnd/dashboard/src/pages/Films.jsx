import React from 'react';
import { Button, Header, MediaTable } from '../components';
// import { MediaData } from '../data/data/dummy';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import FetchDataComponent from '../components/FetchData/DataFilm';
import Loading from '../components/Loading';




const Films = () => {
  const data = FetchDataComponent();
  const { currentColor } = useStateContext();
  return (
    <div>
      <div className='m-1 md:m-2 mt-14 p-1 md:p-4   bg-white rounded-3xl '>

        <Header category="MEDIA TOOLS" title="Films Tools" />

        <div className='text-right m-5 mr-10 '>

          <Link to={"http://localhost:4000/Films/AddANewFilm"}>
            <Button
              color='white'
              bgColor={currentColor}
              text="Add A New Film"
              borderRadius="10px"
              size="xl"

            />
          </Link>


        </div>
        {!data && <Loading/>}




        {data && <MediaTable MediaData={data} />}

      </div>



    </div>

  )
}

export default Films;
