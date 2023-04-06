

import { FilmForm, Header } from '../components';






const AddANewFilm = () => {
    return (
        <div className='m-1 md:m-2 mt-14 p-1 md:p-4   bg-white rounded-3xl '>
            <Header category="MEDIA TOOLS" title="Add A New Film :" />

            <div>
                
               <FilmForm url='http://localhost:3000/admin/addFilm'/>


               
            </div>

         </div>
    )
}

export default AddANewFilm

{/* <div>  title , type : default value "movie" hidden  ,description , year , category select {"action", "adventure",}  , actors multiple select {chaker, ali} , writer {chaker, ali} , director {chaker, ali}, trailaire ,imsge , video   </div>
</div> */}