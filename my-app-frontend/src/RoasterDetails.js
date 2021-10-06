import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import CoffeeList from "./CoffeeList";

function RoasterDetails ({ coffee }) {
    const [roaster, setRoaster] = useState({})
    
    const { name, image, location, url } = roaster
    const id = useParams().id;
    let history = useHistory();
   
useEffect(() => {
        fetch(`http://localhost:9292/roasters/${id}`)
          .then((r) => r.json())
          .then((roaster) => {
            setRoaster(roaster)
          });
      }, [id]);
            
      const filteredCoffee = coffee.filter(item => item.roaster_id === roaster.id)

      return (
        <>
        <h2>{name}</h2>
        <a href={url}><img src={image} alt={name}/></a>
        <h3>Locations: {location}</h3>
        <button onClick={() => history.goBack()}>
         ⬅ Back
        </button>
        <CoffeeList coffee = {filteredCoffee}/>
        </>
    )     
}

export default RoasterDetails