import React, { useState } from "react";
import { Form, Col, Row, Button, Card, ButtonGroup, FormControl, FloatingLabel, Container, CardGroup } from "react-bootstrap"
import CoffeeForm from "./CoffeeForm"

function Review ({ review, onDelete, toggle, setToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formDataEdit, setFormDataEdit] = useState ({
        content: review.content,
        rating: review.rating
    });
    function handleDelete() {
        onDelete(review)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE"
        })
    }
    function handleEdit(event) {
        event.preventDefault()
        const editReview = {
            content: formDataEdit.content,
            rating: formDataEdit.rating
            };
            fetch(`http://localhost:9292/reviews/${review.id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(editReview),
                })
                .then((r) => r.json())
                .then(setToggle(!toggle));
                setIsEditing((isEditing) => !isEditing);
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
            <CoffeeForm handleFetch={handleEdit} formData={formDataEdit} setFormData={setFormDataEdit} />
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

// <Form onSubmit={handleEdit}>
{/* <Row>
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
</Form> */}