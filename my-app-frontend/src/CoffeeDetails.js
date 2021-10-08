import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import {Form, FormControl, Button, Row, Col, Card, Container} from "react-bootstrap"
import Review from './Review'

function CoffeeDetails ({ coffeeId }) {
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
    // const id = useParams().id;
    let history = useHistory();

    const coffeeReviews = reviews.map(item => 
        <Review key={item.id} review={item} onDelete={handleDelete} toggle = {toggle} setToggle = {setToggle}/>)
   
useEffect(() => {
        fetch(`http://localhost:9292/coffees/${coffeeId}`)
          .then((r) => r.json())
          .then((coffee) => {
            setCoffee(coffee);
            setRoaster(coffee.roaster.name)
          });
      }, [coffeeId]);

useEffect(() => {
    fetch(`http://localhost:9292/coffees/${coffeeId}/average_rating`)
      .then((r) => r.json())
      .then((average) => {
        setAverage(average);
      });
  }, [coffeeId]);

useEffect(() => {
    fetch(`http://localhost:9292/coffees/${coffeeId}/reviews`)
      .then((r) => r.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [coffeeId, toggle]);

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
        <Container fluid style={{padding:"2em"}}>
        <h2>{name}</h2>
        <img src={image} alt={name} style={{maxHeight: '400px'}}/>
        <h5>{"⭐".repeat(Math.round(average))}</h5>
        <h4><em>from {roaster}</em></h4>
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
          <Form style={{padding: "1em"}} onSubmit = {handleSubmit}>
                <Row>
                    <Col>
                        <FormControl type = "text" value={formData.content} onChange={handleChange} name="content" placeholder="Helga Hufflepuff says..."/>
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
            </Row>
          </Container>
      </Container>
    )     
}

export default CoffeeDetails