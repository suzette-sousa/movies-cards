import React from 'react';

const Card = (props) => {
  const movie = props.movie;
  return (
    <li className="p-6 bg-gray-100 rounded-lg shadow-xl">
      <p>{movie.title}</p>
      <p>{movie.subtitle}</p>
      <p>{movie.description}</p>
      <p>{movie.image}</p>
      <p>{movie.rating}</p>
    </li>
  );
}

export default Card;
