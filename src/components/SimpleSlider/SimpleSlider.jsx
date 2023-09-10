import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";







export default function SimpleSlider() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
  };
  
  
  return <>
  
  <div>
        
        <Slider {...settings}>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/slider-2.webp')} alt="sider1" />
          </div>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/slider-image-1.webp')} alt="sider2" />
          </div>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/slider-image-2.webp')} alt="sider3" />
          </div>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/slider-image-3.webp')} alt="sider4" />
          </div>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/grocery-banner-2.webp')} alt="sider5" />
          </div>
          <div>
            <img style={{'width':'100%', 'height':'300px'}} src={require('../../images/grocery-banner.webp')} alt="sider6" />
          </div>
        </Slider>
      </div>

  
  </>
}
