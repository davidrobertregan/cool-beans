import React, { useEffect, useState } from "react";

function CoffeeDetails () {
    const [coffeeItem, setCoffeeItem] = useState({});

    const { name, image, roaster, reveiws } = coffeeItem
   
 useEffect(() => {
        fetch(`/${id}`)
          .then((r) => r.json())
          .then((coffeeItem) => {
            setCoffeeItem(coffeeItem);
          });
      }, [id]);

    return (
        <>
        <h2>{name}</h2>
        <h3>{roaster.name}</h3>
        <div><img src={image} alt={name}/></div>
        <div>{reviews}</div>
        </>
    )     
}

export default CoffeeDetails