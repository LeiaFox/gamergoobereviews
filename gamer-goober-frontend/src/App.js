import './App.css';
import morbius from './imeg/morbius.png'
import spood from './imeg/oop.webp'
import blockland from './imeg/blockland.png'
import amongus from './imeg/amongus.jpg'
import supermario from './imeg/supermario.jpg'
import legmovie from './imeg/legmovie.jpg'

import FilmSummary from './components/FilmSummary';
import {Routes, Route} from "react-router-dom"
import FilmPage from './components/FilmPage';
import Header from './components/header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
  const [moviePage, setmoviePage] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((response)=> response.json())
    .then((data)=>setMovies(data))
  },[])

  useEffect(()=>{
    fetch("http://localhost:4000/moviepage")
    .then((response)=> response.json())
    .then((data)=>setmoviePage(data))
  },[])

  return (
    <div className="App">
      <Header movies={movies}/>
      <Routes>
        <Route path='/' element={<div className='movies'>{
          movies.map((movie) => <FilmSummary {...movie} />)
          }</div>}
        />
        <Route path="film/:filmname" element={<FilmPage movies={moviePage}/>}/>
      </Routes>
    </div>
  );
}

export default App;