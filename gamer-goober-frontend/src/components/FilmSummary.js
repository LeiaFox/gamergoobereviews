import "./FilmSummary.css";
import { useNavigate } from "react-router-dom";

export default function FilmSummary(props){
    let navigate = useNavigate();
    return(
        <div className="filmsummary">
            <div className="titleagerating" onClick={()=>navigate("film/" + props.name)}>
                <h1>Title: {props.name}</h1> 
                <h2>Age Rating: {props.agerating}</h2>
            </div>
            <img id="spinner" src={"http://localhost:4000/"+props.image} onClick={()=>navigate("film/" + props.name)}/>
            <footer>
                <h1>Rating {props.rating}</h1>
            </footer>
            <div className="updoots">
                <button>^{props.upvotes}</button>
                <button>v{props.downvotes}</button>
            </div>
        </div>
    )
}