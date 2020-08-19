import React from 'react';

const Profile = ({ barber }) => {
  const { name, description, availability } = barber;

  return (
    <div>
      <h2 style={{ color: 'var(--pink)', textAlign: 'center' }}>{name}</h2>
      <p>{description}</p>
      <p style={{ fontSize: '0.9rem' }}>{availability}</p>
    </div>
  );
};

export default Profile;
