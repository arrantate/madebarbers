import React, { useState } from 'react';
import Profile from './Profile';

const Barbers = () => {
  const [barbers] = useState([
    {
      name: 'Jay',
      description:
        'Jay has been described as courageous, handsome, whitty all with a genius intellect. Jay has been described this by Jay of course which all of us completely ignore. He has however grown into an amazing barber since joining the Made team. He was the first barber Matthew hired and the two have been pushing each others buttons ever since! Don’t judge him for being a Boro fan though he’s alright really.',
      availability:
        'Tue 0930 - 1800 | Wed 0930 - 1900 | Thu 0930 - 1900 | Fri 0930 - 1700 | Sat 0800 - 1300',
    },
    {
      name: 'Matty',
      description:
        'Matthew was raised in the hair industry in his Mothers salon where his older sisters worked. When he opened Made Barbers he wanted to create a relaxing and friendly environment where people could get a haircut that they would love. Even though he never shuts up he still somehow manages to put a smile on everybody’s face.',
      availability:
        'Tue 0900 - 2000 | Thu 0730 - 1730 | Fri 0700 - 1800 | Sat 0630 - 1500',
    },
    {
      name: 'Ellen',
      description:
        'With her high pitched voice and 4ft 11 inches of swagger. Matthews older sister has brought 25 years of hairdressing experience with her. Whether its colouring, perming or eyebrow waxing she has accumulated a wide range of skills in the beauty industry.',
      availability: 'Sat 0800 - 1300',
    },
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