
function Review ({ review, onDelete }) {

    function handleDelete() {
        onDelete(review)
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE"
        })
    }

    return (
        <>
        <p>{review.drinker.name} says: "{review.content}" Rating: {review.rating}</p>
        <button onClick = {handleDelete}>Delete Review</button>
        </>
        
    )
}

export default Review
