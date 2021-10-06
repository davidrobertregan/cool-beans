import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import Review from './Review'

function CoffeeDetails () {
    const [coffee, setCoffee] = useState({});
    const [roaster, setRoaster] = useState("")
    const [average, setAverage] = useState("")
    const [reviews, setReviews] = useState([])
    const [toggle, setToggle] = useState(true)

    const [formData, setFormData] = useState ({
        content:"",
        rating:""
    });

    const { name, image } = coffee
    const id = useParams().id;
    let history = useHistory();

    const coffeeReviews = reviews.map(item => 
        <Review key={item.id} review={item} onDelete={handleDelete} toggle = {toggle} setToggle = {setToggle}/>)
   
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
  }, [id, toggle]);

  function handleDelete(deletedReview) {
    const updatedReviews = reviews.filter(item => item.id !== deletedReview.id)
    setReviews(updatedReviews)
  }

  function handleChange(event) {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value,
    });
}

function handleSubmit(event) {
    event.preventDefault()

      const newReview = {
        content: formData.content,
        rating: formData.rating,
        drinker_id: 2,
        coffee_id: coffee.id,
      };

      fetch(`http://localhost:9292/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      })
        .then((r) => r.json())
        .then(setToggle(!toggle));
    }

                 
      return (
        <>
        <h2>Coffee: {name}</h2>
        <h3>Roaster: {roaster}</h3>
        <img src={image} alt={name}/>
        <h4>Overall Rating: {"⭐".repeat(Math.round(average))}</h4>
        <div>User Reviews: {coffeeReviews}</div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder ="Write Review Here!" value={formData.content} onChange={handleChange} name="content"></input>
            <input type="number" placeholder ="Rating" value={formData.rating} onChange={handleChange} name="rating"></input>
            <button type="submit" >Submit Review</button>
        </form>
        <button onClick={() => history.push("/")}>
         ⬅ Back
        </button>
        </>
    )     
}

export default CoffeeDetails