import React from 'react';

const Card = (props) => {
  const movie = props.movie;
  return (
    <li className="overflow-hidden bg-white rounded-lg shadow-xl">
      <p><img className="h-80 w-full object-cover" src={movie.image} alt={movie.title} /></p>
      <h2 className="p-4 text-lg font-bold bg-gray-900 text-white">{movie.title}</h2>
      <p className="p-4 text-xs">{movie.subtitle}</p>
      <div className="bg-gray-50 overflow-y-auto h-32 p-4 border-t text-sm">
        <h3 className="font-bold mb-2">Synopsis :</h3>
        <p>{movie.description}</p>
      </div>
      <p className="p-4 border-t">{movie.rating}<svg class="block h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg></p>
    </li>
  );
}

export default Card;
