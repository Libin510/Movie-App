import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { newcontext } from '../App';
import { imageUrl } from '../Movieapprjct/Details';
import { RxShare1} from "react-icons/rx";

function Latestdtail() {
    const [latest,setLatest] =useContext(newcontext)
  

    const  {id} =useParams()


    const found = latest ? latest.filter(found=> found.id  ==  id) :[]


  return (
    <div>

        {found.map((item)=>
        <div>
            <Card className="bg-dark text-white">
      <Card.Img src={imageUrl+item.backdrop_path} alt="Card image" />
      <Card.ImgOverlay>
        <Card  className='mvdtlimg' >

        <Card.Img  src={imageUrl+item.poster_path} alt="Card image" />
        <Card.ImgOverlay>
        <Card.Title className='crdtxt' >{item.title}</Card.Title>
        <Card.Text className='crdtxt'>
        IMDB:{ item.vote_average}
        </Card.Text  >
        <Card.Text className='crdtxt'>Release Date:{item.release_date}</Card.Text>
        <Card.Text className='crdtxt'>{item.overview}</Card.Text>
        <Button variant="outline-secondary" className='dtail2bttn'>
          <RxShare1></RxShare1> | Language:English  <Button className='dtailinnerbttn'>Watch Now</Button>
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

export default Latestdtail