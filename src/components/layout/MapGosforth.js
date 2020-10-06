import React from 'react';

const Map = () => {
  return (<div>
        <h2>Find us</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.081126051876!2d-1.60705348395899!3d55.00674295674904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e713b272acf23%3A0x26d19e4b2987f421!2sMADE%20BARBERS!5e0!3m2!1sen!2suk!4v1597772370367!5m2!1sen!2suk'
          width='100%'
          height='600'
          frameBorder='0'
          style={{ border: '0' }}
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
          title='Map'
        ></iframe>
        <p>
          <i className='fas fa-phone-volume' style={{ margin: '0.5rem' }}>
            {' '}
            Call us: 0191 447 4415
          </i>
          <br />
          <a href='https://www.instagram.com/madebarbersuk/'>
            <i
              className='fab fa-instagram'
              style={{ margin: '0.5rem', fontWeight: 'bold' }}
            >
              {' '}
              MADEBARBERSUK on Instagram
            </i>
          </a>
        </p>
        </div>
  );
};

export default Map;
