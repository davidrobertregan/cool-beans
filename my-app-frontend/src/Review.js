import React, { useState } from "react";

function Review ({ review, onDelete, toggle, setToggle }) {
    const [formData, setFormData] = useState ({
        content:"",
        rating:""
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
                setFormData({
                    content:"",
                    rating:""
                });
            }

        function handleChange(event) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }

    return (
        <>
        <p>{review.drinker.name} says: "{review.content}" Rating: {review.rating}</p>
        <form onSubmit = {handleEdit}>
            <input type = "text" value={formData.content} onChange={handleChange} name="content"></input>
            <input type = "number" value={formData.rating} onChange={handleChange} name="rating"></input>  
            <button>Edit Review</button>
        </form>
      
        <button onClick = {handleDelete}>Delete Review</button>
        </>
        
    )
}

export default Review
