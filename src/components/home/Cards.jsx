import React, { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'


function Cards() {
const [myData, setMyData] = useState([])
useEffect(() => {
    //api call get events
    fetch("https://api.sampleapis.com/beers/ale")
        .then(result => result.json())
        .then(data => setMyData(data))
        .catch(error => console.log('error', error))
    }, [])
    

return(

<CardGroup >
{myData.map(myData =>
  <Card key={myData.id}>
    <Card.Img variant="top" src={myData.image} />
    <Card.Body>
      <Card.Title>{myData.name}</Card.Title>
      <Card.Text>
        {myData.price}
      </Card.Text>
    </Card.Body>
  </Card>
  )}
</CardGroup>
)
} 

export default Cards 