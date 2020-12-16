import React from 'react';

function Header() {
  return (
    <div className="sticky top-0 mb-4 bg-white shadow-sm">
      <header className="flex justify-center items-center container mx-auto p-4 text-center">
        <svg className="inline-block h-8 w-8 text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        <h1 className="inline-block mx-2 text-4xl uppercase tracking-wider font-extralight">Classement de films</h1>
        <svg className="inline-block h-8 w-8 text-gray-200" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      </header>
    </div>
  )
}

export default Header;
