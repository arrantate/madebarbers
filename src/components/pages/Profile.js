import React from 'react';

const Profile = ({ barber }) => {
  const { name, description, image } = barber;

  return (
    <div>
      <h2 style={{ color: 'var(--pink)', textAlign: 'center' }}>{name}</h2>
      <div className='row'>
        <div className='column left headshot-box'>
          <img className='headshot' src={image} alt={name}></img>
        </div>
        <div className='column right'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
