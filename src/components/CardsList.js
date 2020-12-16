import React from 'react';
import Card from './Card';

const CardsList = (props) => {
  const numbers = props.movies;
  const listItems = numbers.map((number) =>
    <Card key={number.id.toString()} movie={number} />
  );
  return (
    <div className="container mx-auto px-4">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listItems}
      </ul>
    </div>
  );
}

export default CardsList;
