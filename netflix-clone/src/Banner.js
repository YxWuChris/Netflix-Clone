import React, { useState , useEffect } from 'react'
import requests from './Requests';
import axios from './axios';
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
           const request = await axios.get(requests.fetchNetflixOrginals)

          // console.log(Math.floor(Math.random() * request.data.results.length-1))

           setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);

            //    Math.floor(Math.random() * request.data.results.length-1)
           return request;
        }
        fetchData();
    },[]);

    //console.log(movie)
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"...":str;
    }

    return (
        <div>
            <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>

            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>

                </div>
            </header>           
        </div>
    )
}

export default Banner
