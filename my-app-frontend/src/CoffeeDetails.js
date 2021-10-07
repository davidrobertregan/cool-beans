import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import {Form, FormControl, Button, Row, Col, Card} from "react-bootstrap"
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
        setFormData({
          content:"",
          rating:""
      });
    }
                
      return (
        <>
        <h2>{name}</h2>
        <img src={image} alt={name} style={{maxHeight: '400px'}}/>
        <h4>{roaster}</h4>
        <h5>Overall Rating: {"⭐".repeat(Math.round(average))}</h5>
        <h5>User Reviews:</h5>
        {coffeeReviews}
        {/* old form was here */}
        <Card style={{ maxWidth:"35em"}}>
          <Row>
            <Col md="auto">
              <Card.Title>Submit a Review</Card.Title>
            </Col>
          </Row>
          <Form onSubmit = {handleSubmit}>
                <Row>
                    <Col>
                        <FormControl type = "text" value={formData.content} onChange={handleChange} name="content" placeholder="Ginny Weasly says..."/>
                    </Col>
                    <Col md="auto">
                        <Form.Label>⭐️</Form.Label>
                    </Col>
                    <Col md="auto">
                        <FormControl type = "number" value={formData.rating}  min="0" max="5" onChange={handleChange} name="rating" />
                    </Col>
                    <Col md="auto">
                        <Button variant="light" type="submit">✅</Button>
                    </Col>
                </Row>
            </Form>
            </Card>

        <button onClick={() => history.goBack()}>
         ⬅ Back
        </button>
        </>
    )     
}

{/*     <form onSubmit={handleSubmit} style={{padding: '20px'}}>
            <input type="text" placeholder ="Write Review Here!" value={formData.content} onChange={handleChange} name="content"></input>
            <input type="number" placeholder ="Rating" value={formData.rating} min="0" max="5" onChange={handleChange} name="rating"></input>
            <button type="submit" >Submit Review</button>
        </form> */}

export default CoffeeDetails