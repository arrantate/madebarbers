import React from 'react';
import matt from '../images/barbers/matt.jpg';

const Introduction = () => {
  return (
    <div className='container introduction-box'>
      <div className='introduction'>
        <div className='introduction-img-box'>
          <img src={matt} alt=''></img>
        </div>
        <h2>Matthew Woodroffe, Owner</h2>
        <p>
          My mother was a hairdresser, i have 4 sisters, they cut hair. I Grew
          up in a salon all of my life. I’ve been involved in the industry of
          hair since I was born. We like to get to know who you are as a person,
          what you’ve been up-to. You get to know us as people you get a haircut
          that is going to suit you, suit your lifestyle, so that you walk out
          of this shop feeling like the best version of you. We dont want to be
          any barber, we want to be YOUR barber…
          <br />
          <br />
          And the banter is amazing
        </p>
      </div>
    </div>
  );
};

export default Introduction;
