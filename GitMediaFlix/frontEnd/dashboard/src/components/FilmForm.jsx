import { useState, useEffect, useRef, useReducer } from 'react';
import * as React from 'react';
import { FormValidator } from '@syncfusion/ej2-inputs';
import { TextBoxComponent, NumericTextBoxComponent, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import Button from './Button';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';
import Alert from './Alert';
import SelectedImage from './SelectedImage';
import GetImageData from './GetImageData';
import GetDataCasts from './FetchData/GetDataCasts'



let formObject;

function FilmForm({ url, oldData, ForWhat }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [fillalldata, setfillalldata] = useState(false);
    const [existsFilm, setexistsFilm] = useState(false);
    const [succ, setsucc] = useState(false);
    // console.log(oldData)

    const casts = GetDataCasts();

    // console.log(casts.dataWriters)
    const dataActors =casts.dataActors;

    const datawriter = casts.dataWriters;

    const datadirector = casts.dataDirectors;

    let oldAcdtors='';

    if(oldData){
         oldAcdtors=oldData.actors.map((actor) => actor);

    }
    
   
  








    const { currentColor } = useStateContext();



    // const dataActors = [
    //     { _id: '63e2a02b8398ec9c710031eb', firstName: 'chaker', lastName: 'chaker' },
    //     { _id: '63e2a03e8398ec9c710031ed', firstName: 'leo', lastName: 'ali' },
    //     { _id: '63e58df062ee8e81218534e1', firstName: 'ronaldo', lastName: 'wehbe' }
    // ];

    // const datawriter = [
    //     { _id: '63e2a02b8398ec9c710031eb', firstName: 'chaker', lastName: 'chaker' },
    //     { _id: '63e2a03e8398ec9c710031ed', firstName: 'leo', lastName: 'ali' },
    //     { _id: '63e58df062ee8e81218534e1', firstName: 'ronaldo', lastName: 'wehbe' }
    // ];

    // const datadirector = [
    //     { _id: '63e2a02b8398ec9c710031eb', firstName: 'chaker', lastName: 'chaker' },
    //     { _id: '63e2a03e8398ec9c710031ed', firstName: 'leo', lastName: 'ali' },
    //     { _id: '63e58df062ee8e81218534e1', firstName: 'ronaldo', lastName: 'wehbe' }
    // ];


    function CastCombiner(props) {
        const data = props.data.map(item => {
            return {
                _id: item._id,
                text: `${item.firstName} ${item.lastName}`,
            }
        });
        return data;
    }


    const categoryType = [
        "action",
        "adventure",
        "comedy",
        "drama",
        "fantasy",
        "horror",
        "musicals",
        "mystery",
        "romance",
        "science fiction",
        "sports",
        "thriller",
        "Western",
        "animation"
    ];



    const [image, setImage] = useState(null);
    const [video, setvideo] = useState(null);

    const handleImageUpload = (event) => {
        // console.log(event);
        if (event.filesData) {
            setImage(event.filesData[0].rawFile);
        } else {
            setImage(event.target.files[0]);
        }
        setError(false);
        setfillalldata(false);

        // console.log(image)
    };

    const handleVideoUpload = (event) => {
        // console.log(event);
        if (event.filesData) {
            setvideo(event.filesData[0].rawFile);
        } else {
            setvideo(event.target.files[0]);
        }
        setError(false);
        setfillalldata(false);

        // console.log(event.filesData[0].rawFile)
    };


    // if(oldData.image){



    //     setImage( GetImageData(oldData.image)) ;
    //     setvideo(GetImageData(oldData.video)) ;


    // };


    // URL.createObjectURL(event.target.files[0])
    // URL.createObjectURL(`http://localhost:3000/${oldData.image}`)
    // const response =  fetch(`http://localhost:3000/${oldData.image}`)
    
    // console.log(oldData.actors)
    // oldData.actors.map(actor => actor._id)

    // ['63e783d22345cd6e6b2344b6','63e783d22345cd6e6b2344b6']
    //  ['63e785662345cd6e6b2344bc', '63e7847a2345cd6e6b2344b9', '63e7823b2345cd6e6b2344a9', '63e7836c2345cd6e6b2344b3']

    const [initialState, setState] = useState(

        oldData ?
            {
                type:oldData.film.type,
                title: oldData.film.title,
                dateYear: oldData.film.dateYear,
                description: oldData.film.description,
                trailer: oldData.film.trailer,
                category:oldData.film.category,
                actors:[''],
                writer: oldData.film.writer,
                director: oldData.film.director,

                image:oldData.film.image,
                video: oldData.film.video

            }


            : {
                type: 'movie',
                title: null,
                dateYear: 1990,
                description: '',
                category: '',
                actors: ['', ''],
                writer: '',
                director: '',
                trailer: '',
                image: '',
                video: ''

            });

            // console.log(initialState.actors) ;


        















    const userNameRef = useRef(null);


    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: typeof action.value === 'string' ? action.value.trim() : action.value };
            default:
                return initialState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const update = (field) => (event) => {
        let value = event.value;

        dispatch({ type: 'update', field, value });
        // console.log(state.actors)
        setError(false);
        setexistsFilm(false);
        setfillalldata(false);
    };


    useEffect(() => {
        userNameRef.current.focusIn();


        const options = {
            rules: {
                title: {
                    required: [true, '* Please enter the title'],
                },
                dateYear: {
                    number: [true, '* Please enter A valide Number'],
                    required: [true, '* Please enter the Release date '],
                    max: [2023, '*  Please enter a valid  date '],
                    min: [1900, '* Please enter a valid  date '],
                },
                description: {
                    required: [true, '* Please enter the Description'],
                },
                category: {
                    required: [true, '* Please enter the category '],
                },
                actors: {
                    required: [true, '* Please enter the actors names '],

                },
                director: {
                    required: [true, '* Please enter the director name'],
                },
                writer: {
                    required: [true, '* Please enter the writer name '],
                },
                trailer: {
                    required: [true, '* Please enter the URL trailer '],
                },
                // image: {
                //     required: [true, '* Please enter the image film '],
                // },
                // video: {
                //     required: [true, '* Please enter the video film '],
                // },
            },
        };

        formObject = new FormValidator('#FilmForm', options);



    }, []);




    const handleSubmit = async (event) => {
        setError(false);
        setfillalldata(false);
        setexistsFilm(false);

        event.preventDefault();
        const formData = new FormData();
        formData.append('type', state.type);
        formData.append('title', state.title);
        formData.append('dateYear', state.dateYear);
        formData.append('description', state.description);
        formData.append('category', state.category);
        formData.append('trailer', state.trailer);
        // formData.append('actors', state.actors);
        state.actors.map((actor, index) => {
            formData.append(`actors[${index}]`, actor);
        });


        formData.append('writer', state.writer);
        formData.append('director', state.director);

        formData.append('image', image);
        formData.append('video', video);



        if (formObject.validate() && image != null && video != null) {
            setLoading(true);
            setError(false);
            setfillalldata(false);
            setexistsFilm(false);




            try {
                const response = await axios.post(`${url}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    }
                });
                if (response.status === 200) {
                    setsucc(true);

                }
                setLoading(false);
            } catch (error) {
                setLoading(false);


                if (error.response) {
                    // The request was made and the server responded with a status code that falls out of the range of 2xx
                    setexistsFilm(error.response.data.error);
                    setError(flase);

                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                    setError(error.message);
                }
            }
        } else {
            console.log('You have to fill out all data form ')
            setfillalldata(true);
        }
    }

    return (

        <div>





            {
                succ && ForWhat === "edit" ? (
                    <Alert
                        text1="Data edited successfully!"
                        titleData={state.title}
                        text2=" : Changes in movie data are updated now"
                    />
                ) : succ ? (
                    <Alert
                        text1="Data submitted successfully!"
                        titleData={state.title}
                        text2=" : New movie in our data now"
                    />
                ) : null
            }


            <div className="control_wrapper">
                <div className="control_wrapper textbox-form">
                    <form id="FilmForm" >
                        <input type="text" name="type" value="film" readOnly hidden />

                        <div className="form-group">
                            <TextBoxComponent

                                ref={userNameRef}
                                name="title"
                                value={state.title}
                                change={update('title')}
                                placeholder="Title"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForTitle"

                            />
                            <div id="errroForTitle" />
                        </div>

                        <br />




                        <div className="form-group">
                            <NumericTextBoxComponent

                                name="dateYear"
                                format="####"
                                value={state.dateYear}
                                change={update('dateYear')}
                                placeholder="Release date:"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForDateYear"
                            />
                            <div id="errroForDateYear" />

                        </div>
                        <br />

                        <div className="form-group">

                            <DropDownListComponent
                                name="category"

                                value={state.category}

                                change={update('category')}
                                ignoreAccent={true}
                                dataSource={categoryType}
                                allowFiltering={true}
                                placeholder="Select the category of film "
                                floatLabelType="Auto"
                                filterBarPlaceholder="e.g: action"
                                data-msg-containerid="errroForcategory" />


                            <div id="errroForcategory" />

                        </div>

                        <br />

                        <div className="form-group">
                            <TextBoxComponent
                                name="description"
                                value={state.description}

                                change={update('description')}
                                multiline="true"
                                placeholder="Description"
                                floatLabelType="Auto"
                                data-msg-containerid="errroForDescription" />
                            <div id="errroForDescription" />
                        </div>

                        <br />
                        <div className="form-group">

                            <MultiSelectComponent
                                name="actors"

                                value={oldAcdtors}
                                allowFiltering={true}

                                change={update('actors')}
                                dataSource={CastCombiner({ data: dataActors })}
                                fields={{ text: 'text', value: '_id' }}
                                floatLabelType="Auto"
                                placeholder="Select multiple  Actors "
                                data-msg-containerid="errroForactors" />

                            <div id="errroForactors" />
                        </div>

                        <br />

                        <div className="form-group">

                            <DropDownListComponent
                                name="director"

                                value={state.director}

                                change={update('director')}
                                dataSource={CastCombiner({ data: datadirector })}
                                fields={{ text: 'text', value: '_id' }}
                                floatLabelType="Auto"
                                placeholder="Select the  director "
                                allowFiltering={true}
                                data-msg-containerid="errroFordirector" />

                            <div id="errroFordirector" />
                        </div>

                        <br />

                        <div className="form-group">

                            <DropDownListComponent
                                name="writer"

                                value={state.writer}

                                change={update('writer')}
                                dataSource={CastCombiner({ data: datawriter })}
                                fields={{ text: 'text', value: '_id' }}

                                floatLabelType="Auto"
                                placeholder="Select the  writer "
                                allowFiltering={true}
                                data-msg-containerid="errroForwriter" />

                            <div id="errroForwriter" />
                        </div>

                        <br />

                        <div className="form-group">
                            <TextBoxComponent


                                name="trailer"
                                value={state.trailer}
                                change={update('trailer')}
                                placeholder="trailer"
                                floatLabelType="Auto"
                                data-msg-containerid="errroFortrailer"
                            />
                            <div id="errroFortrailer" />
                        </div>

                        <br />

                        <div className="form-group">
                            <p className='text-gray-500'>Poster of Film :</p>

                            <UploaderComponent
                                multiple={false}
                                autoUpload={false}
                                files={image}
                              
                                name="image"
                                selected={handleImageUpload}
                                allowedExtensions='.jpeg,.jpg,.png'
                                placeholder="image"
                                maxFileSize="500 * 1024 * 1024"
                                data-msg-containerid="errorForImage" />



                            {/* <input type="file" name='image' onChange={handleImageUpload} /> */}



                            <div id="errorForImage" />

                            <div className='m-auto content-center'>
                            
                                {/* <img style={{margin:"auto"}} src={`http://localhost:3000/${oldData.image}`} alt="Selected Image" width={"50%"} height={"25%"}/> */}
                            </div>


                        </div>
                        <br />


                        <div className="form-group">
                            <p className='text-gray-500'>Media of Film :</p>



                            <UploaderComponent
                                multiple={false}
                                autoUpload={false}
                                files={video}
                                name="video"
                                selected={handleVideoUpload}
                                allowedExtensions='.mp4'

                                placeholder="video"
                                maxFileSize="500 * 1024 * 1024"
                                data-msg-containerid="errorForVideo" />

                            <div id="errorForVideo" />
                        </div>
                        <br />

                        <div>
                            {error && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong class="font-bold">Holy smokes!</strong>
                                <span class="block sm:inline">Something seriously bad happened.</span>

                            </div>}
                            {existsFilm && <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong class="font-bold">{existsFilm}</strong>
                                <span class="block sm:inline"> Movie name already exists database, check the info!!</span>

                            </div>}
                            {fillalldata && <div class="flex items-center bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                <p>You have to fill out all data form ..</p>
                            </div>}








                        </div>





                        <div className='text-center m-5 mr-10 '>
                            {loading && <button disabled type="button" class="py-2.5 px-5 mr-2 text-xl font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                </svg>
                                Loading...
                            </button>}

                            {!loading && <Button
                                color='white'
                                bgColor={currentColor}
                                text="Add To Data"
                                borderRadius="10px"
                                size="xl"
                                onClick={handleSubmit}


                            />
                            }


                        </div>



                    </form>





                </div>
                <br />
                <br />
            </div>
        </div>);
}
export default FilmForm;
