import React from "react"
import CoffeeCard from "./CoffeeCard"

function CoffeeList({ coffee }) {

    const coffeeCards = coffee.map(item => 
    <CoffeeCard key={item.id} coffee={item}/>)

    return (
        <div >
            {coffeeCards}
        </div>
    )
}

export default CoffeeList