
function Review ({ review, onDelete }) {

    function handleDelete() {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => onDelete(review));
    }

    return (
        <>
        <p>{review.drinker.name} says: "{review.content}" Rating: {review.rating}</p>
        <button onClick = {handleDelete}>Delete Review</button>
        </>
        
    )
}

export default Review
