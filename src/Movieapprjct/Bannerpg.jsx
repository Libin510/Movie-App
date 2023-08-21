import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { LatestMovies } from './Details';
import { imageUrl } from './Details';
function Bannerpg() {
    const [latest,setLatest] =useState([])

      useEffect(()=>{
        fetch(LatestMovies)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setLatest(data.results);
      
    })
  },[])
      
  window.onload = function(){
    const random = Math.floor(Math.random() *latest.latest);
    document.getElementById('img') .style.backgroundImage=`url(${latest[random]})`
console.log(latest);
  }




  return (
    <div style={{width:'400px',height:'500px'}}>
        <div id='img'>
<img id='img'></img>
        </div>
        
         
    </div>
  )
}

export default Bannerpg