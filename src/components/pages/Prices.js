import React from 'react';

const Prices = () => {
  return (
    <div className='content'>
      <h2 style={{ textAlign: 'center' }}>PRICES</h2>
      <table>
        <tr>
          <th>Service</th>
          <th>South Gosforth</th>
          <th>Gateshead</th>
          <th>Time to Allow</th>
        </tr>
        <tr>
          <td>Standard Cut</td>
          <td>£18</td>
          <td>£14</td>
          <td>30 mins</td>
        </tr>
        <tr>
          <td>Skin Fade</td>
          <td>£21</td>
          <td>£17</td>
          <td>45 mins</td>
        </tr>
        <tr>
          <td>Buzz Cut / Crew Cut</td>
          <td>£10</td>
          <td>£10</td>
          <td>15 mins</td>
        </tr>
        <tr>
          <td>Under 14</td>
          <td>£10</td>
          <td>£9</td>
          <td>30 mins</td>
        </tr>
        <tr>
          <td>Under 14 Skin Fade</td>
          <td>£12</td>
          <td>£12</td>
          <td>45 mins</td>
        </tr>
        <tr>
          <td>Cut and Beard</td>
          <td>£22</td>
          <td>£18</td>
          <td>45 mins</td>
        </tr>
        <tr>
          <td>Skin Fade and Beard</td>
          <td>£25</td>
          <td>£21</td>
          <td>1 hour</td>
        </tr>
        <tr>
          <td>Student Cut</td>
          <td>*£14</td>
          <td>*£11</td>
          <td>30 mins</td>
        </tr>
        <tr>
          <td>Student Fade</td>
          <td>*£17</td>
          <td>*£14</td>
          <td>45 mins</td>
        </tr>
        <tr>
          <td>Full Head Colour and Cut</td>
          <td>£45+</td>
          <td>-</td>
          <td>Call Us</td>
        </tr>
        <tr>
          <td>Highlights and Colour</td>
          <td>£35+</td>
          <td>-</td>
          <td>Call Us</td>
        </tr>
        <tr>
          <td>Perm and Cut</td>
          <td>£45+</td>
          <td>-</td>
          <td>Call us</td>
        </tr>
      </table>
      <br />
      <p>
        15% discount applies to gym members on Tuesday to Thursday
        <br />
        * Student Discount only applies on Monday to Thursday
        <br />
        ** OAP discount Monday to fridays
      </p>
    </div>
  );
};

export default Prices;
