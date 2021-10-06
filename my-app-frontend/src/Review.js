import React, { useState } from "react";

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
    <>
        {isEditing ?
        <form onSubmit = {handleEdit}>
            <input type = "text" value={formData.content} onChange={handleChange} name="content"></input>
            <input type = "number" value={formData.rating}  min="0" max="5" onChange={handleChange} name="rating"></input>
            <button>Save Review</button>
        </form>
        :
        <div>
        <p>{review.drinker.name} says: "{review.content}" Rating: {"⭐".repeat(review.rating)}</p>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">
                    ✏️
                </span>
            </button> 
        <button onClick = {handleDelete}>🗑</button>
        </div>
        }
        
    </>
    )
}
export default Review     