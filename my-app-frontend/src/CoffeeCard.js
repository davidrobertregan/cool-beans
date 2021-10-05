function CoffeeCard({ coffee }) {
    
    const { name, image, roaster, rating } = coffee
    
    return(
        <div className="coffee-card">
            <h4>{name}</h4>
            <img src={image} alt={name} style={{width: '150px'}}/>
            <h5>{roaster.name}</h5>
        </div>
    )
}

export default CoffeeCard