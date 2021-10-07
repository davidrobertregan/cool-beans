import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RoasterCard({ roaster }) {
    const { name, image, id, location } = roaster

    return(
        <CardGroup style={{ padding:'10px'}}>
        <Card style={{ width: '18rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} className="roaster-card">
        <Card.Header>
            <Card.Title>{name}</Card.Title> 
        </Card.Header>
            <Link to={`/roasters/${id}`}>
                <Card.Img src={image} alt={name} style={{maxHeight: '150px', objectFit: 'contain', padding: '10px'}}/>
            </Link>
        <Card.Body>
            {location}
        </Card.Body>   
        </Card>
        </CardGroup>
    )
}

export default RoasterCard
