import { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";

export default function Header(props){
    const [search,setSearch] = useState("");
    const [filteredList,setFilteredList] = useState([]);

    let navigate = useNavigate();

    useEffect(()=>{
        let tempFilters = [];
        props.movies.forEach((movie)=>{
            if(movie.name.toLowerCase().includes(search.toLowerCase())){
                tempFilters.push(movie);
            }
        })
        setFilteredList(tempFilters);
    },[search])

    const navagateWithRefresh=(url)=>{
        navigate(url);
        window.location.reload();
    }

    return(
        <header className="app-header">
            <h1 onClick={()=>navagateWithRefresh("/")}>Gamer Goobereviews</h1>
            <div className={search === "" ? 'search-bar' : 'search-bar filled'}>
                <input value={search} onChange={(e) => setSearch(e.target.value)}/>
                {
                    search === "" ? null : 
                    <div>{
                        filteredList.map((movie)=><div onClick={()=>navagateWithRefresh("film/" + movie.name)}>{movie.name}</div>)
                    }</div>
                }
            </div>
        </header>
    )
}