import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  const numbers = props.movies;
  const listItems = numbers.map((number) =>
    <Card key={number.id.toString()} movie={number} />
  );
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {listItems}
    </ul>
  );
}

export default CardsList;
