import React, { useContext, useEffect, useState } from 'react'
import { newcontext } from '../App'
import { ComedyMovies, imageUrl } from './Details'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Bmbnner from './Bmbnner';

function Comedymovies() {
  const [movies,setmovies] =useContext(newcontext)
  const [search,setSearch] =useState('')

  useEffect(()=>{
    fetch(ComedyMovies)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setmovies(data.results);
    })
  },[])

  const searchhandle =(e)=>{
    e.preventDefault()
    const searchdata=movies.filter(data=>data.original_title.toLowerCase().includes(search.toLowerCase()) )
    setmovies(searchdata)
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
      {movies.map((item)=>{
    return(
      <Card className="dplypop">
          <Card.Img src={imageUrl+item.poster_path} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='titl'>{item.name}</Card.Title>
            { data?
            <Link to={`/come/${item.id}`}>
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

export default Comedymovies