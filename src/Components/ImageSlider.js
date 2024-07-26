// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Asserts/hand.jpg'; // Adjust the path to your images
import image2 from '../Asserts/home.jpeg';
import image3 from '../Asserts/home1.avif';
import './ImageSlider.css'; // Import your custom CSS for the slider

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-item">
          <img src={image1} alt="Image 1" className="slider-image" />
          <div className="slide-content">
            <h2>Welcome to DreamNext Global LLC
            </h2>
            <p>
<italic>Your Trusted Partner in Title Abstracting Services</italic>
              <pre> At DreamNext Global LLC, we are committed to providing top-tier title abstracting services
                to our clients nationwide With over a decade of experience, our team excels in delivering accurate, reliable, and cost-effective
                solutions tailored to the needs of title support.</pre>

              <pre> Our dedication to quality and client satisfaction sets us apart as the
                leading choice for title abstracting services. Partner with us for comprehensive title searches
                and seamless transactions that exceed your expectations.</pre>
              <pre> At DreamNext Global LLC, we specialize in providing comprehensive title
                abstracting services to title insurance firms, real estate attorneys, mortgage companies,
                escrow firms, and foreclosing entities across the nation. With over a decade of experience,
                we have established ourselves as a reliable and trustworthy partner in the title industry.</pre></p>
          </div>
        </div>
        <div className="slide-item">
          <img src={image2} alt="Image 2" className="slider-image" />
          <div className="slide-content">
            <h2>Content for Image 2</h2>
            <p>This is a description or any other content for the second image.</p>
          </div>
        </div>
        <div className="slide-item">
          <img src={image3} alt="Image 3" className="slider-image" />
          <div className="slide-content">
            <h2>Content for Image 3</h2>
            <p>This is a description or any other content for the third image.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
