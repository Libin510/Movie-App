import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { newcontext } from '../App';
import { LatestMovies, imageUrl } from './Details';
import {  Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Bmbnner from './Bmbnner';

function Latestmovies() {
  const [latest,setLatest] =useContext(newcontext)
const [search,setSearch] =useState('')


  useEffect(()=>{
    fetch(LatestMovies)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setLatest(data.results);
    })
  },[])

const searchhandle =(e)=>{
  e.preventDefault()
  const searchdata=latest.filter(data=>data.original_title.toLowerCase().includes(search.toLowerCase()) )
  setLatest(searchdata)
}
const [data,setData] = useState(true)
    console.log(data)

    let changedata = ()=>{
        setData(!data)
        console.log(data)
        
    }


  return (
    <div>
      <div><Bmbnner/>  </div>
      <div className='search'>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={searchhandle}>Search</Button>
          </Form>
       </div> 
       
<div>

</div>


      <div>
      {latest.map((item,index)=>{
    return(
      
      <Card className="dplypop" key={index}>
          <Card.Img src={imageUrl+item.poster_path} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='titl'>{item.title}</Card.Title>
            { data?
            <Link to={`/late/${item.id}`}>
          <Button className='dpbtn' variant="outline-info" >View More</Button>
          </Link>:<Bmbnner/> }
          </Card.ImgOverlay>
       
          </Card>
           
              )
            })}
      </div>
    </div>
  )
}

export default Latestmovies