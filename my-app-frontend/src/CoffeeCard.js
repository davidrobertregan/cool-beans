import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function CoffeeCard({ coffee }) {
    const [average, setAverage] = useState("")

    const { name, image, roaster, id } = coffee

    useEffect(() => {
        fetch(`http://localhost:9292/coffees/${id}/average_rating`)
          .then((r) => r.json())
          .then((average) => {
            setAverage(average);
          });
      }, [id]);
    
    return(
        <div className="coffee-card">
            <h4>Coffee: {name}</h4>
            <Link to={`/coffees/${id}`}>
            <img src={image} alt={name} style={{width: '150px'}}/>
            </Link>
            <Link to={`roasters/${roaster.id}`}>
            <h5>Roaster: {roaster.name}</h5>
            </Link>
            <h5>Rating: {average}</h5>
        </div>
    )
}

export default CoffeeCard