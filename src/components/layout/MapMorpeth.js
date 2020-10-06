import React from 'react';

const MapMorpeth = () => {
  return (<div>
        <h2>Find us</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1916.5453468532596!2d-1.701265907978529!3d55.1628129900038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbbdc3d037cc58b5d!2sThe%20Iron%20Pencil%20Tattoo%20%26%20Barber%20Shop!5e0!3m2!1sen!2suk!4v1602002425801!5m2!1sen!2suk'
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
            Call us: 01670 458481
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

export default MapMorpeth;
