import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import images from "../../assets/iphone-1.png"
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaArrowRight,
  FaArrowDown,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import  { useState, useEffect } from 'react';
import ImageMarquee from "../Marquee/Marquee";


const HeroSection = () => {
  const words = ["Laptops", "Mobiles Phones", "Computers" , "tablets"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length; 
      setCurrentWord(words[index]);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [words]);
  return (
    <div className="Hero-container">
      <div className="bubbles-container absolute inset-0 -z-10">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
      </div>
      <div className="hero-section grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 px-8 pb-10 pt-44">
        <div className="text-content flex-1 p-5">
          <h1 className="text-6xl  leading-tight font-bold py-6 capitalize ">
            Largest <span className="text-blue-400 ">wholeseller</span> of{" "}
            <span className="text-blue-400 changin-word ">{currentWord}</span>
          </h1>
          <p className="text-2xl font-semibold py-2">
            Supply that meets Demand. Get the best wholesale prices of used and
            refurbished Mobile Stocks
          </p>
          <p className="text-2xl font-semibold flex items-center py-3 text-blue-400">
            Learn more{" "}
            <span className="pt-2 pl-4">
              <FaArrowRight />
            </span>
          </p>
          <div className="contact-input flex items-center flex-wrap sm:gap-2">
            <span className="input-email">
              <MdOutlineMail />
            </span>
            <input
              type="email"
              placeholder=" Email"
              className="border border-green-500 px-10 py-3 rounded-full max-w-full"
            />
            <button className="border border-green-400 rounded-full cursor-pointer text-white text-base font-semibold bg-green-400 px-4 py-2 flex items-center ml-2 transition duration-200 hover:bg-transparent hover:border-green-500 hover:text-green-500">
              Subscribe{" "}
              <span className="pt-1 text-xl pl-2">
                <FaArrowRight />
              </span>
            </button>
            <button className="border border-blue-400 rounded-full cursor-pointer text-white text-base font-semibold bg-blue-400 px-4 py-2 flex items-center ml-2 transition duration-200 hover:bg-transparent hover:border-blue-500 hover:text-blue-400">
            <span className="pt-1 text-xl pr-2">
              <FaArrowDown />
              </span>Stock List{" "}
            </button>
          </div>
          <div className="social-contact flex items-center text-center gap-7 mt-3">
            <ul className="flex items-center gap-5 pt-5">
              <li className="bg-gradient-to-r from-blue-400 to-green-400 text-xl px-2 py-2 rounded-full">
                <FaFacebook className="text-white" />
              </li>
              <li className="bg-gradient-to-r from-blue-400 to-green-400 text-xl px-2 py-2 rounded-full">
                <FaLinkedin className="text-white" />
              </li>
              <li className="bg-gradient-to-r from-blue-400 to-green-400 text-xl px-2 py-2 rounded-full">
                <FaYoutube className="text-white" />
              </li>
              <li className="bg-gradient-to-r from-blue-400 to-green-400 text-xl px-2 py-2 rounded-full">
                <BsTwitterX className="text-white" />
              </li>
            </ul>
            <p className="text-green-500 mt-4 flex items-center gap-2">
              <span className="text-base">
                <BsPeopleFill />
              </span>{" "}
              400k people Registered
            </p>
          </div>
        </div>
        <div className="hero-slider pt-10">
          <Swiper
            modules={[Autoplay, Pagination  ]}
            spaceBetween={50} 
            slidesPerView={1} 
            autoplay={{ delay: 2000, disableOnInteraction: false }} 
            pagination={{ clickable: true }} 
            style={{ zIndex: 11 }}
          >
            <SwiperSlide>
              <img className="w-full" src={images} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={images} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={images} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={images} alt="Slide 4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

     <div className="marquee">
      <ImageMarquee/>
     </div>
    </div>
  );
};

export default HeroSection;
