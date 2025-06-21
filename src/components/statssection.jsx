import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { label: 'Customers', value: 897 },
    { label: 'Trips', value: 77 },
    { label: 'Countries', value: 12 },
  ];

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: '#f0f0f0',
        padding: '60px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Long stretched shared card */}
      <div style={{
        backgroundColor: '#fff',
        padding: '60px 100px',
        borderRadius: '0px',
        display: 'flex',
        gap: '100px', // more space between counters
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        flexWrap: 'wrap',
      }}>
        {stats.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#577b2c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '7px',
            }}>
              {inView && <CountUp end={item.value} duration={2} />}+
            </div>
            <p style={{ fontSize: '20px', color: '#333' }}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
