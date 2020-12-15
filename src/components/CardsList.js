import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  const numbers = props.movies;
  const listItems = numbers.map((number) =>
    <Card key={number.id.toString()} movie={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default CardsList;
