import React, { useContext, useEffect, useState } from 'react'
import { newcontext } from '../App'
import Card from 'react-bootstrap/Card';
import { PopularMovies } from './Details';
import { imageUrl } from './Details';
import './pgstyl.css'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Bmbnner from './Bmbnner';

function Popularmovies() {
     const [pop,setpop] =useContext(newcontext);
     const [search,setSearch] =useState('')

     useEffect(()=>{
        fetch(PopularMovies)
        .then((res)=>res.json())
        .then(data=>{
          console.log(data)
          setpop(data.results);
        })
      },[])



      const searchhandle =(e)=>{
        e.preventDefault()
        const searchdata=pop.filter(data=>data.original_title.toLowerCase().includes(search.toLowerCase()) )
        setpop(searchdata)
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
{pop.map((item)=>{
    return(
    <Card className="dplypop">
          <Card.Img src={imageUrl+item.poster_path} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className='titl'>{item.title}</Card.Title>
            { data?
            <Link to={`/pop/${item.id}`}>
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

export default Popularmovies