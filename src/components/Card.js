import React from 'react';

const Card = (props) => {
  return (
    <div>
      {props.movie.map(item => (
        <ul>
          <li key={Math.random()}>
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
            <p>{item.description}</p>
            <p>{item.image}</p>
            <p>{item.rating}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Card;
