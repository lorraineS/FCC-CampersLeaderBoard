import React from 'react';

const CamperListItem = ({ camper, number }) => {
  return (
    <tr>
      <td>
        <span>{number}.</span>
        <a href={`https://freecodecamp.com/${camper.username}`} target="_blank">
          <img className="thumb" src={camper.img} alt={camper.username} />
        </a>
      </td>
      <td><a href={`https://freecodecamp.com/${camper.username}`} target="_blank">{camper.username}</a></td>
      <td>{camper.recent}</td>
      <td>{camper.alltime}</td>
    </tr>
  );
}

export default CamperListItem;
