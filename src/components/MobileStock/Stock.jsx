// HeroSection.js
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import stock1 from "../../assets/stock-1.png"


const Stock = () => {
  const settingsStock = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="mobile-stock">
      <div className="mobile-stock-head">
        <h1 className="text-4xl pt-10 text-blue-400 font-bold  text-center ">
          <span>Mobile</span> Stock
        </h1>
        <p className="text-xl py-4 text-center">
          we stay upto date with the latest technology trends and offer
          innovative solutions. that help <br /> you stay ahead in competetion{" "}
        </p>
      </div>

      <div className="stock-slider px-10">
        <div className="stock-section ">
          <Slider {...settingsStock} className="slider-two">
            <div className='mobile-stock-card px-2 py-4  '>
                <img src={stock1} alt="" />
              <h2>Iphone 14 pro max</h2>
              <p>apple iphone 14 pro 512gb Gold (MQ233)</p>
            </div>
            <div className='mobile-stock-card px-2 py-4  '>
            <img src={stock1} alt="" />
              <h2>Iphone 14 pro max</h2>
              <p>apple iphone 14 pro 512gb Gold (MQ233)</p>
            </div>
            <div className='mobile-stock-card px-2 py-4  '>
            <img src={stock1} alt="" />
              <h2>Iphone 14 pro max</h2>
              <p >apple iphone 14 pro 512gb Gold (MQ233)</p>
            </div>
            <div className='mobile-stock-card px-2 py-4  '>
            <img src={stock1} alt="" />
              <h2>Iphone 14 pro max</h2>
              <p>apple iphone 14 pro 512gb Gold (MQ233)</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Stock;
