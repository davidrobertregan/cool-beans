import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import {Form, FormControl, Button, Row, Col, Card, Container} from "react-bootstrap"
import Review from './Review'
import CoffeeForm from './CoffeeForm'

function CoffeeDetails () {
    const [coffee, setCoffee] = useState({});
    const [roaster, setRoaster] = useState("")
    const [average, setAverage] = useState("")
    const [reviews, setReviews] = useState([])
    const [toggle, setToggle] = useState(true)

    const [formDataNew, setFormDataNew] = useState ({
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

function handleSubmit(event) {
    event.preventDefault()

      const newReview = {
        content: formDataNew.content,
        rating: formDataNew.rating,
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
        setFormDataNew({
          content:"",
          rating:""
      });
    }
                
      return (
        <Container fluid style={{padding:"2em"}}>
          <h2>{name}</h2>
          <img src={image} alt={name} style={{maxHeight: '400px'}}/>
          <h5>{"⭐".repeat(Math.round(average))}</h5>
          <h4><em>from {roaster}</em></h4>
          <Button variant="light" onClick={() => history.goBack()}>
            ⬅ Back
          </Button>
          <Container style={{padding: "2em"}}>
            <Row className="justify-content-md-center">
              <h4>Reviews</h4>
              {coffeeReviews}
              <Card style={{ maxWidth:"35em", margin: "2em"}}>
                <Row>
                  <Col md="auto">
                    <Card.Title><em>Submit a Review</em></Card.Title>
                  </Col>
                </Row>

                <CoffeeForm handleSubmit={handleSubmit} formData={formDataNew} setFormData={setFormDataNew}/>

              </Card>
            </Row>
          </Container>
      </Container>
    )     
}

export default CoffeeDetails