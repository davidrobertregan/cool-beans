import React, { useEffect, useState } from "react";
import {Form, FormControl, Button, Row, Col, Card, Container} from "react-bootstrap"
import Review from './Review'

function CoffeeDetails ({ coffeeId }) {
    
    const [coffee, setCoffee] = useState({});
    const [roaster, setRoaster] = useState("")
    const [average, setAverage] = useState("")
    const [reviews, setReviews] = useState([])

    const [formData, setFormData] = useState ({
        content:"",
        rating:""
    });

    const { name, image } = coffee

    const coffeeReviews = reviews.map(item => 
        <Review key={item.id} review={item} onDelete={deleteReview} editReview={editReview}/>)

useEffect(() => {
        fetch(`https://cool-beans-regan-christensen.herokuapp.com/coffees/${coffeeId}`)
          .then((r) => r.json())
          .then((coffee) => {
            setCoffee(coffee);
            setRoaster(coffee.roaster.name)
          });
      }, [coffeeId]);

useEffect(() => {
    fetch(`https://cool-beans-regan-christensen.herokuapp.com/coffees/${coffeeId}/average_rating`)
      .then((r) => r.json())
      .then((average) => {
        setAverage(average);
      });
  }, [coffeeId]);

useEffect(() => {
    fetch(`https://cool-beans-regan-christensen.herokuapp.com/coffees/${coffeeId}/reviews`)
      .then((r) => r.json())
      .then((reviews) => {
        setReviews(reviews);
      });
  }, [coffeeId]);

  function deleteReview(deletedReview) {
    const updatedReviews = reviews.filter(item => item.id !== deletedReview.id)
    setReviews(updatedReviews)
  }

  function addReview(newReview) {
    const updatedReviews = [...reviews, newReview]
    setReviews(updatedReviews)
  }

  function editReview(review) {
    let reviewsArr = reviews.filter(r => r.id != review.id)
    setReviews([...reviewsArr, review].sort((a, b) => a.id - b.id))
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
      fetch(`https://cool-beans-regan-christensen.herokuapp.com/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }).then(r => r.json())
        .then(review => addReview(review))
        
        setFormData({
          content:"",
          rating:""
      });
    }
                
      return (
        <Container fluid style={{padding:"2em"}}>
          <h2>{name}</h2>
          <img src={image} alt={name} style={{maxHeight: '400px'}}/>
          <h5>{"???".repeat(Math.round(average))}</h5>
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
                        <FormControl type = "text" value={formData.content} onChange={handleChange} name="content" placeholder="Write a comment..."/>
                    </Col>
                    <Col md="auto">
                        <Form.Label>??????</Form.Label>
                    </Col>
                    <Col md="auto">
                        <FormControl type = "number" value={formData.rating}  min="0" max="5" onChange={handleChange} name="rating" />
                    </Col>
                    <Col md="auto">
                        <Button variant="light" type="submit">???</Button>
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