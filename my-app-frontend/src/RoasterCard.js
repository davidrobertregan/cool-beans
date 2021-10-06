import { Link } from 'react-router-dom';

function RoasterCard({ roaster }) {
    const { name, image, id } = roaster

    return(
        <div className="roaster-card">
            <h4>{name}</h4>
            <Link to={`/roasters/${id}`}>
            <img src={image} alt={name} style={{width: '150px'}}/>
            </Link>
        </div>
    )
}

export default RoasterCard