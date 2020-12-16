import ReactStars from "react-rating-stars-component";
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
      <div className="flex items-center p-4 border-t">
        <ReactStars
          count={5}
          value={movie.rating}
          size={28}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
        <span className="inline-block ml-2 leading-4 text-2xl">{movie.rating}</span>
      </div>
    </li>
  );
}

export default Card;
