import React from 'react'
import { Card } from 'react-bootstrap'

const Meme = ({meme, header, footer}) => {
   const {url}=meme
    return (
        <div>
           <>
  <Card className="m-2" style={{height:'300px', width:'250px'}}>
  <Card.Header>{header}</Card.Header>
    <Card.Img variant="top" height="70%" width="80%" src={url} />
  <Card.Footer>{footer}</Card.Footer>
  </Card>
</> 
        </div>
    )
}

export default Meme
