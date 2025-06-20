// src/Home.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FadeInSection from './fadein';

export default function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const emailSectionRef = useRef(null);

  const slides = [
    { src: '/images/switzerland.png', caption: 'Switzerland' },
    { src: '/images/dubai.jpg', caption: 'Dubai' },
    { src: '/images/london.jpg', caption: 'London' },
    { src: '/images/turkey.jpg', caption: 'Turkey' },
    { src: '/images/bali.jpg', caption: 'Bali' },
  ];

  const handleClick = (slide) => {
    navigate('/detail', { state: slide });
  };

  const scrollToSlider = () => {
    sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['Destinations', 'Trips', 'Contact us', 'Books', 'Explore'];

  return (
    <>
      {/* Header Video Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '800px',
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
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />

        {/* Navbar */}
        <div style={{
          width: '100%',
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
          color: '#fff',
          fontSize: '18px',
        }}>
          <div style={{ fontWeight: 'bold', fontSize: '22px' }}>TravelApp</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Contact us' && emailSectionRef.current) {
                    emailSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                  } else if (item === 'Destinations' && sliderRef.current) {
                    sliderRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = '2px solid white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = '2px solid transparent';
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Text Overlay */}
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
          <div style={{ display: 'inline-block', borderBottom: '1px solid transparent', transition: 'border-bottom 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}
          >
            Explore
          </div>
          <br />
          <div style={{ display: 'inline-block', borderBottom: '1px solid transparent', transition: 'border-bottom 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid white'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}
          >
            various destinations →
          </div>
        </div>
      </div>

      {/* Image Horizontal Scroll Section */}
     <FadeInSection>
  <div style={{ backgroundColor: '#f9f9f9' }}>
    <div ref={sliderRef}></div> {/* Scroll Target */}
    <div style={{ padding: '50px 60px' }}>
      <h1 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '5px' }}>Plan your trip</h1>
      <p style={{ fontSize: '52px', fontWeight: '400', marginTop: '0', lineHeight: '1.1' }}>
        Where to next?
      </p>

      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          paddingBottom: '10px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
        className="horizontal-scroll-container"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => handleClick(slide)}
            style={{
              minWidth: '400px',
              height: '450px',
              backgroundColor: '#fff',
              borderRadius: '0px',
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              scrollSnapAlign: 'start',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
          
              color: 'white',
              padding: '12px',
              textAlign: 'center',
              fontSize: '2px',
              fontWeight: '300',
            }}>
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</FadeInSection>


      {/* Contact Email Section */}
      <FadeInSection>
        <div
          ref={emailSectionRef}
          style={{
            backgroundImage: "url('/images/green.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '60px 20px 20px 20px',
            boxSizing: 'border-box'
          }}
        >
          <div style={{ padding: '20px', borderRadius: '10px', maxWidth: '80%' }}>
            <h2 style={{ fontSize: '42px', marginBottom: '10px' }}>
              Let the world come to you—inspiration sent regularly.
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '1.5', marginBottom: '20px' }}>
              Embark on unforgettable journeys and create lasting memories. Your next adventure starts here.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginTop: '40px'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '12px 20px',
                  borderRadius: '25px',
                  border: 'none',
                  outline: 'none',
                  width: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  fontSize: '16px',
                }}
              />
              <button
                style={{
                  padding: '12px 24px',
                  borderRadius: '25px',
                  border: 'none',
                  backgroundColor: '#ffffff',
                  color: '#333',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Footer Video Section */}
      <FadeInSection>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '700px',
          overflow: 'hidden',
        }}>
          <video
            src="/videos/forest2.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
            }}
          />
          <div style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px',
          }}>
            <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>
              Where every journey whispers a story.
            </h2>
          </div>
        </div>
      </FadeInSection>
    </>
  );
}
