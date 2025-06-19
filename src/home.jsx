// src/Home.jsx
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeInSection from './fadein';

export default function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null); 

  const slides = [
    { src: '/images/beach.jpg', caption: 'Relax at the Beach' },
    { src: '/images/mountains.jpg', caption: 'Explore the Mountains' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: false,       // 👈 Makes sure it's not centered with big spacing
    centerPadding: '0px',    // 👈 Removes internal gap
  };

  const handleClick = (slide) => {
    navigate('/detail', { state: slide });
  };

  const scrollToSlider = () => {
    sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['Destinations', 'Trips', 'Stories', 'Books', 'Explore'];

  return (
    <>
      {/* Header Video with Overlay Navbar and Text */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '800px',
        margin: '0',
        padding: '0',
        overflow: 'hidden'
      }}>
        <video
          src="/videos/waterfall1.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

        {/* Navbar on top of video */}
        <div style={{
          width: '100%',
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          fontWeight: '500',
          fontSize: '18px',
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '22px' }}>TravelApp</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            {navItems.map((item) => (
              <a key={item} href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Text overlay */}
        <div
  onClick={scrollToSlider}
  style={{
    position: 'absolute',
    right: '5%',
    top: '45%',
    transform: 'translateY(-50%)',
    padding: '20px 30px',
    fontSize: '45px',
    color: '#fff',
    lineHeight: '1.4',
    letterSpacing: '2px',
    zIndex: 1,
    cursor: 'pointer',
  }}
>
  {/* Line 1: "Explore" */}
  <div
    style={{
      display: 'inline-block',
      borderBottom: '1px solid transparent',
      transition: 'border-bottom 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderBottom = '1px solid white';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderBottom = '1px solid transparent';
    }}
  >
    Explore
  </div>

  <br />

  {/* Line 2: "various destinations →" */}
  <div
    style={{
      display: 'inline-block',
      borderBottom: '1px solid transparent',
      transition: 'border-bottom 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderBottom = '1px solid white';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderBottom = '1px solid transparent';
    }}
  >
    various destinations →
  </div>
</div>


      </div>

      {/* Slider Section with Fade Animation */}
      <FadeInSection>
        <div ref={sliderRef} style={{ padding: '30px', textAlign: 'start',  marginBottom: '30px'  }}>
          <h1 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>Plan your trip</h1>
         <p 
         style={{ fontSize: '52px', fontWeight: '400', marginTop: '0', lineHeight: '1.1' }}>
           Where to next?</p>
              <Slider {...settings}>

            {slides.map((slide, index) => (
              <FadeInSection key={index}>
                <div
                  onClick={() => handleClick(slide)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    padding: '0 5px'
                  }}
                >
                  <img
                    src={slide.src}
                    alt={slide.caption}
                    style={{
                      width: '70%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '15px'
                    }}
                  />
                  <p style={{ marginTop: '10px' }}>{slide.caption}</p>
                </div>
              </FadeInSection>
            ))}
          </Slider>
        </div>
      </FadeInSection>

      {/* Gradient Box with Fade-in */}
      <FadeInSection>
        <div style={{
          width: '80%',
          margin: 'auto',
          padding: '50px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
          color: 'white',
          fontSize: '24px',
          textAlign: 'center',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          marginBottom: '100px'
        }}>
          🌍 Discover the world like never before.
        </div>
      </FadeInSection>
    </>
  );
}
