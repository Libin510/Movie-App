import React, { useContext } from 'react'
import { newcontext } from '../App'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import { imageUrl } from '../Movieapprjct/Details'
import Card from 'react-bootstrap/Card';
import { RxShare1} from "react-icons/rx";

function Comedydtails() {
    const [movies,setmovies] =useContext(newcontext)


    const  {id} =useParams()


    const found = movies ? movies.filter(found=> found.id  ==  id) :[]

  return (
    <div>
        {found.map((item)=>
        <div >
           
               

       



<Card className="bg-dark text-white">
      <Card.Img src={imageUrl+item.backdrop_path} alt="Card image" />
      <Card.ImgOverlay>
        <Card  className='mvdtlimg' >

        <Card.Img  src={imageUrl+item.poster_path} alt="Card image" />
        <Card.ImgOverlay>
        <Card.Title className='crdtxt' >{item.name}</Card.Title>
        <Card.Text className='crdtxt'>
        IMDB:{ item.vote_average}
        </Card.Text  >
        <Card.Text className='crdtxt'>Release Date:{item.first_air_date}</Card.Text>
        <Card.Text className='crdtxt'>{item.overview}</Card.Text>
        <Button variant="outline-secondary" className='dtail2bttn'>
          <RxShare1></RxShare1> | Language:English  <Button  className='dtailinnerbttn'>Watch Now</Button>
        </Button>
        </Card.ImgOverlay>
        </Card>
      </Card.ImgOverlay>
    </Card>


        </div>
        )} 

    </div>
  )
}

export default Comedydtails