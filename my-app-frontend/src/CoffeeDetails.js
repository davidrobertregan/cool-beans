import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function CoffeeDetails () {
    const [coffee, setCoffee] = useState({});
    const [roaster, setRoaster] = useState("")

    const { name, image } = coffee
    const id = useParams().id;
   
 useEffect(() => {
        fetch(`http://localhost:9292/coffees/${id}`)
          .then((r) => r.json())
          .then((coffee) => {
            setCoffee(coffee);
            setRoaster(coffee.roaster.name)
          });
      }, [id]);
    
      return (
        <>
        <h2>{name}</h2>
        <h3>{roaster}</h3>
        <img src={image} alt={name}/>
        </>
    )     
}

export default CoffeeDetails