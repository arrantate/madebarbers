import React from 'react';
import { NavLink } from 'react-router-dom';

const BookGateshead = () => {
  return (
    <div className='content'>
      <div style={{ textAlign: 'right' }}>
        <NavLink to='/booking' style={{ textAlign: 'right' }}>
          back
        </NavLink>
      </div>

      <h1 style={{ textAlign: 'center' }}>GATESHEAD</h1>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Gateshead</th>
            <th>Time to Allow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Standard Cut</td>
            <td>£14</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Skin Fade</td>
            <td>£17</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Buzz Cut / Crew Cut</td>
            <td>£10</td>
            <td>15 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Under 14</td>
            <td>£9</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Under 14 Skin Fade</td>
            <td>£12</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Cut and Beard</td>
            <td>£18</td>
            <td>45 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Skin Fade and Beard</td>
            <td>£21</td>
            <td>1 hour</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Student Cut</td>
            <td>*£11</td>
            <td>30 mins</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>Student Fade</td>
            <td>*£14</td>
            <td>45 mins</td>
          </tr>
        </tbody>
      </table>
      <br />
      <p style={{ fontSize: '0.8rem' }}>
        15% discount applies to gym members from Tuesday to Thursday
        <br />
        * Student Discount only applies from Monday to Thursday
        <br />
        ** OAP discount Monday to Friday
      </p>
    </div>
  );
};

export default BookGateshead;
