import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import CoffeeList from "./CoffeeList";
import Image from 'react-bootstrap/Image'

function RoasterDetails ({ coffee }) {
    const [roaster, setRoaster] = useState({})
    
    const { name, image, location, url } = roaster
    const id = useParams().id;
    let history = useHistory();

useEffect(() => {
        fetch(`https://cool-beans-regan-christensen.herokuapp.com/roasters/${id}`)
          .then((r) => r.json())
          .then((roaster) => {
            setRoaster(roaster)
          });
      }, [id]);
            
      const filteredCoffee = coffee.filter(item => item.roaster_id === roaster.id)

      return (
        <>
        <a href={url}><Image src={image} thumbnail alt={name} style={{maxHeight: '400px', objectFit: 'contain', padding: '10px'}}/></a>
        <h3>{location}</h3>
        <CoffeeList coffee = {filteredCoffee}/>       
        <button onClick={() => history.goBack()}>
        ⬅ Back
        </button>
        </>
    )     
}

export default RoasterDetails