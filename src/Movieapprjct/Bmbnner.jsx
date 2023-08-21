import React, { useEffect, useState } from 'react'
import {  LatestMovies } from './Details';
import { API_KEY } from './Details';
import axios from 'axios';
import { imageUrl } from './Details';
import './pgstyl.css';
import Button from 'react-bootstrap/esm/Button';
import { LuPlayCircle} from "react-icons/lu";
import { FaImdb} from "react-icons/fa";



function Bmbnner() {
   
      
    const [movie, setmovie] = useState([]);
    
          useEffect(() => {
            
              
              axios.get(LatestMovies).then((res)=>setmovie(res.data.results[Math.floor(Math.random()*res.data.results.length-1)
              ]));
              
          }, []);
          
        
          
        
          return (
            <div className='bnnermaindiv' >
             <div className='banner' style={{ backgroundImage:`url(${imageUrl+movie.backdrop_path})` }}>
              <div >
              <h1 >{movie.title}</h1>

              <h6 className='dtilstylbnner'><FaImdb ></FaImdb>{movie.vote_average}</h6>
              <h5 className='dtilstylbnner'>Release Date:{movie.release_date}</h5>
              <p className='dtilstylbnner'>
                {movie.overview}
              </p>
              </div>
              <Button className='btnbnner'><LuPlayCircle></LuPlayCircle> Play trailer</Button>

             </div>
            </div>
          );
        }
     
        
  

export default Bmbnner;