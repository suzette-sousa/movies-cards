import ReactStars from "react-rating-stars-component";
import React from 'react';

function Header() {
  return (
    <div className="sticky top-0 mb-4 bg-white shadow-sm">
      <header className="flex flex-wrap justify-between items-center container mx-auto p-4 text-center">
        <h1 className="text-4xl uppercase tracking-wider font-extralight">Classement de films</h1>
        <div className="flex flex-wrap items-center">
          <span className="flex flex-wrap items-center mr-4">
            <span className="inline-block mr-2">Du mieux noté</span>
            <ReactStars
              count={5}
              value={5}
              size={28}
              edit={false}
              activeColor="#ffd700"
            />
          </span>
          <span className="flex flex-wrap items-center">
            <span className="inline-block mr-2">au moins bien noté</span>
            <ReactStars
              count={5}
              value={0}
              size={28}
              edit={false}
              activeColor="#ffd700"
            />
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header;
