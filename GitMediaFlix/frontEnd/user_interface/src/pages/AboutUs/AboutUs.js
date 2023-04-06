import React from 'react'
import "./AboutUs.css"
import rawan from "../../assets/images/rawan.jpg"
import chaker from "../../assets/images/chaker.jpg"
import hadi from "../../assets/images/hadi.jpg"
import back from "../../assets/images/bac2.jpg"
// import back from "../../assets/images/back.jpg"




const AboutUs = () => {
    return (
        <div>


            <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div class="flex flex-col lg:flex-row justify-between gap-8">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 pb-4">About Us</h1>
                        <p class="font-normal text-base leading-6  ">

                        We are a team of three passionate developers currently training at ESA Coding Lab,
                         a top-rated full-stack development bootcamp. Our shared love for movies and TV shows inspired us
                         to create Media Flix, an online platform for browsing and discovering new content.
                        </p>
                    </div>
                    <div class="w-full lg:w-8/12">
                        <img class="w-full h-80 opacity-90 rounded-sm shadow-2xl " src={back} alt="films" />
                    </div>
                </div>

                <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div class="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9pb-4">Our Story</h1> <br />
                        <p class="font-normal text-base leading-6">

                        Together, we've built Media Flix with the goal of making it easy 
                        for users to find the movies and TV shows they love. We believe that great content
                         should be accessible to everyone, and we're committed to creating a platform that helps
                          users discover and enjoy new entertainment. <br/> <br />

Thank you for choosing Media Flix - we're excited to share our love of movies and TV with you!
                        </p>
                    </div>
                    <div class="w-full lg:w-8/12 lg:pt-8 justify-between">
                        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class=" imageI md:block hidden" src={rawan} alt="Rawan Younnes" />
                                <img class="imageI md:hidden block" src={rawan} alt="rawan " />

                                <p class="font-medium text-xl leading-5 mt-4">Rawan</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class="imageI md:block hidden" src={chaker} alt="chaker" />
                                <img class=" imageI md:hidden block" src={chaker} alt="chaker" />

                                <p class="font-medium text-xl leading-5 mt-4">Chaker</p>
                            </div>
                            <div class="p-4 pb-6 flex justify-center flex-col items-center">
                                <img class=" imageI md:block hidden" src={hadi} alt="Liam featued Image" />
                                <img class="imageI md:hidden block" src={hadi} alt="Liam featued Image" />
                                <p class="font-medium text-xl leading-5 mt-4">Hadi</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default AboutUs