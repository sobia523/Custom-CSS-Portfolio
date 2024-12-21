import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (
    
        <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/pexels-photo-2.webp)] bg-cover'
        style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>

            <Navbar />

            <div className="container grid lg:grid-cols-2 h-[calc100vh-60px]">
                <div className="hidden lg:block"></div>
                <div className="text-[90px] sm:text-[130px] font-bold leading-tight flex justify-center items-center">
                    <div>
                        <p data-aos="zoom-in-up">I am</p>
                        <p data-aos="zoom-in-up">Sobia</p>
                        <p data-aos="zoom-in-up">Shehnaz</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Hero;