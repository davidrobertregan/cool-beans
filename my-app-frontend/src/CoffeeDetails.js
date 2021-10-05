import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Review from './Review'

function CoffeeDetails () {
    const [coffee, setCoffee] = useState({});
    const [roaster, setRoaster] = useState("")
    const [average, setAverage] = useState("")
    const [reviews, setReviews] = useState([])

    const { name, image } = coffee
    const id = useParams().id;
    let history = useHistory();

    const coffeeReviews = reviews.map(item => 
        <Review key={item.id} review={item}/>)
   
useEffect(() => {
        fetch(`http://localhost:9292/coffees/${id}`)
          .then((r) => r.json())
          .then((coffee) => {
            setCoffee(coffee);
            setRoaster(coffee.roaster.name)
          });
      }, [id]);

useEffect(() => {
    fetch(`http://localhost:9292/coffees/${id}/average_rating`)
      .then((r) => r.json())
      .then((average) => {
        setAverage(average);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:9292/coffees/${id}/reviews`)
      .then((r) => r.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [id]);

                    
      return (
        <>
        <h2>Coffee: {name}</h2>
        <h3>Roaster: {roaster}</h3>
        <img src={image} alt={name}/>
        <h4>Overall Rating: {average}</h4>
        <div>User Reviews: {coffeeReviews}</div>
        <button onClick={() => history.push("/")}>
         ⬅ Back
        </button>
        </>
    )     
}

export default CoffeeDetails