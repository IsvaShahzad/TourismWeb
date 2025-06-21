import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // 👈 import scroll detection

const testimonials = [
  { name: 'Sarah Arl', comment: '“An unforgettable experience! Highly recommended.”' },
  { name: 'Daniel M', comment: '“Top-notch service from start to finish.”' },
  { name: 'Paris Ris', comment: '“Loved every bit of the journey. Felt very personalized.”' },
  { name: 'Ahmed Kalim', comment: '“Professional, friendly, and hassle-free.”' },
  { name: 'Linda Woods', comment: '“I’ll definitely book my next trip with them.”' },
  { name: 'Jonas H', comment: '“Fantastic itinerary planning and execution.”' },
];

const TestimonialsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 20px',
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      <h2
        style={{
          fontSize: '36px',
          marginBottom: '50px',
          color: '#333',
        }}
      >
        What Our Customers Say
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '30px 20px',
              borderRadius: '20px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              width: '280px',
              textAlign: 'left',
              transition: 'all 0.4s ease-in-out',
            }}
          >
            <p
              style={{
                fontStyle: 'italic',
                marginBottom: '15px',
                fontSize: '17px',
                color: '#555',
              }}
            >
              {item.comment}
            </p>
            <p
              style={{
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: '16px',
                color: '#333',
              }}
            >
              – {item.name}
            </p>
            <div style={{ color: '#f4c150' }}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
