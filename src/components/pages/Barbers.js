import React, { useState } from 'react';
import Profile from './Profile';

import matt from '../images/barbers/matt.png'
import jay from '../images/barbers/jay.png'
import ellen from '../images/barbers/ellen.png'
import chris from '../images/barbers/chris.png'

const Barbers = () => {
  const [barbers] = useState([
    {
      name: 'Matty',
      image: matt,
      description:
        'Matthew was raised in the hair industry in his Mothers salon where his older sisters worked. When he opened Made Barbers he wanted to create a relaxing and friendly environment where people could get a haircut that they would love. Even though he never shuts up he still somehow manages to put a smile on everybody’s face.',
    },
    {
      name: 'Jay',
      image: jay,
      description:
        'Jay has been described as courageous, handsome, whitty all with a genius intellect. Jay has been described this by Jay of course which all of us completely ignore. He has however grown into an amazing barber since joining the Made team which is why he is the manager of our South Gosforth shop. He was the first barber Matthew hired and the two have been pushing each others buttons ever since! Don’t judge him for being a Boro fan though he’s alright really.',
    },
    {
      name: 'Ellen',
      image: ellen,
      description:
        'With her high pitched voice and 4ft 11 inches of swagger. Matthews older sister has brought 25 years of hairdressing experience with her. Whether its colouring, perming or eyebrow waxing she has accumulated a wide range of skills in the beauty industry.',
    },
    {
      name: 'Chris',
      image: chris,
      description: 
        'Chris is the newest member of Made. He studied at the prestigious SB barbering academy, found an immediate love for barbering excelled quickly. He then joined the Made team to further his knowledge. After seeing his progress and being the absolute nerd he is, the guys had to make him part of the team and now you can catch him in the Morpeth store.'
    }
  ]);

  return (
    <div className='content'>
      <h1>Meet the Team</h1>
      {barbers.map((barber) => {
        return <Profile barber={barber} key={barber.name} />;
      })}
    </div>
  );
};

export default Barbers;
