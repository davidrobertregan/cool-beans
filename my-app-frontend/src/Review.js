
function Review ({ review }) {

    function handleDelete() {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => onDelete(comment));
    }

    return (
        <p>{review.drinker.name} says: "{review.content}" Rating: {review.rating}</p>
        <button>Delete Review</button>
    )
}

export default Review
