import { Link } from 'react-router-dom';

function CoffeeCard({ coffee }) {
    
    const { name, image, roaster, id } = coffee
    
    return(
        <div className="coffee-card">
            <h4>{name}</h4>
            <Link to={`/coffees/${id}`}>
            <img src={image} alt={name} style={{width: '150px'}}/>
            </Link>
            <h5>{roaster.name}</h5>
        </div>
    )
}

export default CoffeeCard