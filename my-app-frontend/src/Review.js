import React, { useState } from "react";
import { Form, Col, Row, Button, Card, ButtonGroup } from "react-bootstrap"

function Review ({ review, onDelete, toggle, setToggle }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState ({
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
                content: formData.content,
                rating: formData.rating
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
        function handleChange(event) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    return (
    <div>
        {isEditing ?
        <form onSubmit = {handleEdit}>
            <input type = "text" value={formData.content} onChange={handleChange} name="content"></input>
            <input type = "number" value={formData.rating}  min="0" max="5" onChange={handleChange} name="rating"></input>
            <button>Save Review</button>
        </form>
        :
        <Card style={{ maxWidth:"35em"}}>
            <Row>
                <Col md="auto">
                    <h6>{review.drinker.name} {"⭐".repeat(review.rating)}</h6>
                </Col>
            </Row>
            <Row>
                <Col md="auto">
                    <p>"{review.content}"</p>
                </Col>
                <Col md="auto">
                    <ButtonGroup>
                        <Button variant="light" onClick={() => setIsEditing((isEditing) => !isEditing)}>✏️</Button> 
                        <Button variant="light" onClick = {handleDelete}>🗑</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Card>
        }
        
    </div>
    )
}
export default Review     