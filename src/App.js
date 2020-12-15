import React, {useState, useEffect } from 'react';
import './App.css';
import CardsList from './components/CardsList';

const movies = [
  {
    id: 1,
    title: "Title 1",
    subtitle: "Subtitle 1",
    description: "Descr 1",
    image: "img1.png",
    rating: 4
  },
  {
    id: 2,
    title: "Title 2",
    subtitle: "Subtitle 2",
    description: "Descr 2",
    image: "img2.png",
    rating: 2.5
  },
  {
    id: 3,
    title: "Title 3",
    subtitle: "Subtitle 23",
    description: "Descr 3",
    image: "img3.png",
    rating: 2.5
  }
];

function App() {

  const [data, setData] = useState(movies);

  return (
    <CardsList movies={data} />
  )
 
}

export default App;
