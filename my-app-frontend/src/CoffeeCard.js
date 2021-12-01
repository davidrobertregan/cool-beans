import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap'

function CoffeeCard({ coffee, handleShow }) {
    const [average, setAverage] = useState("")

    const { name, image, roaster, id } = coffee

    useEffect(() => {
        fetch(`https://cool-beans-regan-christensen.herokuapp.com/coffees/${id}/average_rating`)
          .then((r) => r.json())
          .then((average) => {
            setAverage(average);
          });
      }, [id]);
    
    return(
        <CardGroup style={{ padding:'10px'}}> 
        <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} className="coffee-card"  >
          <Card.Header>
            <Card.Title>{name}</Card.Title> 
          </Card.Header>
            <Card.Img id={coffee.id} onClick={handleShow} variant="top" src={image} style={{maxHeight: '200px', objectFit: 'contain', padding: '10px'}}/>
            <Card.Body> 
            <Link to={`roasters/${roaster.id}`}>
            <Card.Text>Roaster: {roaster.name}</Card.Text>
            </Link>
            <Card.Text>Rating: {"⭐".repeat(Math.round(average))}</Card.Text>
            </Card.Body> 
          </Card>
        </CardGroup>
    )
}

export default CoffeeCard