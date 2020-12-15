import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  return (
    <div>
      <Card movie={props.movies} />
    </div>
  );
}

export default CardsList;
