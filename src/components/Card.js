import React from 'react';

const Card = (props) => {
  const movie = props.movie;
  return (
    <li>
      <p>{movie.title}</p>
      <p>{movie.subtitle}</p>
      <p>{movie.description}</p>
      <p>{movie.image}</p>
      <p>{movie.rating}</p>
    </li>
  );
}

export default Card;
