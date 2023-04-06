import React, { useEffect,useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { FiSettings } from 'react-icons/fi';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import {
  DashHome, Films, Series, Casts, Users, Reviews, Bar, Pie, ColorMapping, AddANewFilm
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'
import EditFilm from './pages/EditFilm';

import NotFound from './pages/NotFound';
import LoginAdmin from './pages/LoginAdmin';

import ParticipantProfile from './pages/Participants/ParticipantProfile' 

import IsLogin from './components/FetchData/IsLogin'



const App = () => {

  const Login = IsLogin();

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext(); // for another component 



  return (

    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      {Login.isAuthenticated ? (
          <>
        <div className="flex relative dark:bg-main-dark-bg">

          {/* statrt div of setting button  */}

          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>

            <TooltipComponent content="Settings" position='Top'>

              <button type='button' className='text-3xl p-3  hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}>

                <FiSettings />
              </button>

            </TooltipComponent>

          </div>

          {/* start div active menu  */}

          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg  bg-white'>
              <Sidebar />

            </div>
          ) : (

            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />

            </div>
          )}

          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen  w-full
          ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>



            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>

            



                {/* dashboard  */}
                <Route exact path="/" element={(<DashHome />)} />
                <Route exact path="/DashHome" element={(<DashHome />)} />


                {/* MEDIA TOOLS  */}
                <Route exact path="/Films" element={(<Films />)} />
                <Route exact path="/Films/AddANewFilm" element={(<AddANewFilm />)} />


                <Route exact path="/Films/EditFilm/:id" element={(<EditFilm />)} />


                <Route exact path="/Series" element={(<Series />)} />





                {/*CAST TOOLS */}
                <Route exact path="/Casts" element={(<Casts />)} />



                <Route exact path="/Casts/:_id" element={(<ParticipantProfile />)} />
               




                {/*USERS TOOLS*/}
                <Route exact path="/Users" element={(<Users />)} />

                {/*Reviews TOOLS*/}
                <Route exact path="/Reviews" element={(<Reviews />)} />




                {/* charts  */}

                <Route exact path="/bar" element={<Bar />} />
                <Route exact path="/pie" element={<Pie />} />

                <Route exact path="/color-mapping" element={<ColorMapping />} />

                {/* NotFound 404  */}
                <Route path="*" element={<NotFound />}/>
                  

              


              </Routes>
            </div>
          </div>

        </div>

        </>
        ) : (
          <Routes>
            {/* Login Form  */}
             <Route exact path="/LoginAdmin" element={<LoginAdmin />} />
             <Route path="*" element={<LoginAdmin />}/>
          </Routes>
         
        )}

      </BrowserRouter>
    </div>


  )
}

export default App