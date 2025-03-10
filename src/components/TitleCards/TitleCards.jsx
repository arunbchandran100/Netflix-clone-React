import React, { useEffect, useRef, useState } from "react";
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data';


const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmRlNzI0NDY4MDNkMTI5Njc1ZjgzYjViYjNmNmQwNyIsIm5iZiI6MTc0MTYwMDkwMS42MzgsInN1YiI6IjY3Y2ViODg1MDVkYTFhOWUxNWUyYzkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TV1aAbpq9qfl8ufI-mgQ68KZdoLAx98qM98gbFaZuOY'
    }
  };



  function handleWheel(e) {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`,
        options
      )
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return <div className="title-cards">
    <h2>{title ? title : 'Popular on Netflix'}</h2>
    <div className="card-list" ref={cardsRef}>
      {apiData.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        );
      })}
    </div>
  </div>;
}

export default TitleCards