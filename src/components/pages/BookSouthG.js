import React from 'react';
import { NavLink } from 'react-router-dom';

const BookSouthG = () => {
  return (
    <div className='content'>
      <div style={{ textAlign: 'right' }}>
        <NavLink to='/booking' style={{ textAlign: 'right' }}>
          back
        </NavLink>
      </div>
      <h1 style={{ textAlign: 'center' }}>SOUTH GOSFORTH</h1>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>South Gosforth</th>
            <th>Time to Allow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Standard Cut</td>
            <td>£18</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Skin Fade</td>
            <td>£21</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Buzz Cut / Crew Cut</td>
            <td>£10</td>
            <td>15 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Under 14</td>
            <td>£10</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Under 14 Skin Fade</td>
            <td>£12</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Cut and Beard</td>
            <td>£22</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Skin Fade and Beard</td>
            <td>£25</td>
            <td>1 hour</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Student Cut</td>
            <td>*£14</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Student Fade</td>
            <td>*£17</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>*** Full Head Colour and Cut</td>
            <td>£45+</td>
            <td>Call Us</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>*** Highlights and Colour</td>
            <td>£35+</td>
            <td>Call Us</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>*** Perm and Cut</td>
            <td>£35+</td>
            <td>Call Us</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p style={{ fontSize: '0.8rem' }}>
        * Student Discount only applies from Monday to Thursday
        <br />
        ** OAP discount Monday to Friday
        <br />
        *** For all colouring and perm services please refer to our online
        colour chart and call us
      </p>
    </div>
  );
};

export default BookSouthG;
