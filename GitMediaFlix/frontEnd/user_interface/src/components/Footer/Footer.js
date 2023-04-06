import React from 'react'
import "./Footer.css"
// import FaWhatsappSquare from "react-icons/fa"

const Footer = () => {
    return (
        <div>
    
            <footer class=" m-4 p-4 rounded-lg shadow md:px-6 md:py-8 sm:m-auto ">
            <hr class="pb-3  " style={{borderTop:" 2px solid #ff0000 "}}/>
                <div class="sm:flex sm:items-center sm:justify-between">
                    <p className="website-name text-white">    Media<span>Flix</span>   </p>

                    <div class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <span>
                            <a href="/AbouUs" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </span>
                        <span>
                            <a href="https://www.instagram.com/netflix/?hl=en" class="mr-4 hover:underline md:mr-6">instagram</a>
                        </span>
                        <span>
                            <a href="https://www.facebook.com/netflix/" class="mr-4 hover:underline md:mr-6 ">facebook</a>
                        </span>
                        <span>
                            <a href="mailto:info@partner.netflix.com." class="hover:underline">Contact</a>
                        </span>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© MediaFlix™ : Rawan / Chaker / Hadi / All Rights Reserved.
                </span>
            </footer>





        </div>
    )
}

export default Footer