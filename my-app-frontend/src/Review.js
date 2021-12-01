import React, { useState } from "react";
import { Form, Col, Row, Button, Card, ButtonGroup, FormControl } from "react-bootstrap"

function Review ({ review, onDelete, editReview }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState ({
        content: review.content,
        rating: review.rating
    });

    function handleDelete() {
        onDelete(review)
        fetch(`https://cool-beans-regan-christensen.herokuapp.com/reviews/${review.id}`, {
            method: "DELETE"
        })
    }
    
    function handleSubmit(event) {
            event.preventDefault()
                const newReview = {
                content: formData.content,
                rating: formData.rating
            };
            fetch(`https://cool-beans-regan-christensen.herokuapp.com/reviews/${review.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReview),
            }).then(r => r.json())
            .then(review => editReview(review))
                setIsEditing((isEditing) => !isEditing);
            }

        function handleChange(event) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
        
    return (
    <>
        <Card style={{ maxWidth:"35em", margin: ".25em"}}>
            <Row>
                <Col md="auto">
                    <h6>{review.drinker.name} {"⭐".repeat(review.rating)}</h6>
                </Col>
            </Row>
            {isEditing ?
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <FormControl type = "text" value={formData.content} onChange={handleChange} name="content" />
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
        :
            <Row>
                <Col md="auto">
                    <p>"{review.content}"</p>
                </Col>
                <Col>
                    <ButtonGroup style={{float: "right"}}>
                        <Button variant="light" onClick={() => setIsEditing((isEditing) => !isEditing)}>✏️</Button> 
                        <Button variant="light" onClick = {handleDelete}>🗑</Button>
                    </ButtonGroup>
                </Col>
            </Row>}
        </Card>
    </>
    )
}
export default Review     