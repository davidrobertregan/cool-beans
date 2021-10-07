import React from "react"
import CoffeeCard from "./CoffeeCard"
import CardGroup from 'react-bootstrap/CardGroup'

function CoffeeList({ coffee }) {

    const coffeeCards = coffee.map(item => 
    <CoffeeCard key={item.id} coffee={item}/>)

    return (
        <div >
            <CardGroup className="justify-content-center" id="coffee-list">
            {coffeeCards}
            </CardGroup>
        </div>
    )
}

export default CoffeeList