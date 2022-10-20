import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function FilmPage(props){
    let params = useParams();
    const [movie,setMovie] = useState({});

    useEffect(()=>{
        props.movies.forEach(movie => {
            if(movie.name === params.filmname){
                setMovie(movie);
            }
        });
    },[])

    return(
        <div className="film-page">
            <h1>{movie.name}</h1>
            <div>{movie.rating}</div>
            <div>{movie.summary}</div>
            <div>{movie.review}</div>
            <div>{movie.releasedate}</div>
            <div>{movie.agerating}</div>
            <div className="updoots">
                <button>^{props.upvotes}</button>
                <button>v{props.downvotes}</button>
            </div>
        </div>
    )
}