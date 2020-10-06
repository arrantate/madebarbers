import React from 'react';

const Profile = ({ barber }) => {
  const { name, description } = barber;

  return (
    <div>
      <h2 style={{ color: 'var(--pink)', textAlign: 'center' }}>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
