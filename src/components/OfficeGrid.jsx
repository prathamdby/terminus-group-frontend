import React from 'react';

const OfficeComponent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Sticky Side Text */}
      <div
        style={{
          flex: '1',
          position: 'sticky',
          top: '20px', // Adjust for spacing from the top
          alignSelf: 'flex-start',
          paddingRight: '20px',
        }}
      >
        <ul style={{ listStyleType: 'none', paddingLeft: '120px', fontSize: '20px', lineHeight: '2' }}>
          <li>Team</li>
          <li>Philanthropy</li>
          <li>News & Media</li>
          <li>Consultants & Partners</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: '3', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Top Section */}
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://c-p.rmcdn1.net/6704dad37ea051caab873de5/5089501/Image-6f2f2b02-4bf3-40e7-b6ba-f6a5ddfcafc7.gif"
            alt="Office Scene"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
          <h1 style={{ fontWeight: '300', fontSize: '48px', margin: '40px 0' }}>The Finest.</h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            Featuring an established track record of creating luxury, retail, and corporate properties by partnering
            with experts in the engineering and architecture industry.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            Over a decade of delivering projects that are at the forefront of modern design, every time setting a
            benchmark in Hyderabad.
          </p>
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Hear from our Founder Chairman</p>
        </div>

        {/* Team Section */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontWeight: '300', fontSize: '36px', margin: '10px 0' }}>The Team</h2>
          <img
            src="https://i-p.rmcdn.net/6704dad37ea051caab873de5/5068988/image-82fc00d4-be74-4e76-887a-d79cdf4ee721.jpg"
            alt="The Team"
            style={{ width: '100%', height: 'auto', margin: '20px 0', borderRadius: '8px' }}
          />
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '20px' }}>
            We believe that you can achieve the best product if you have the best people in your team.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            We have a diverse team from all fields of expertise in engineering, design, and management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfficeComponent;
