import React from "react"
import RoasterCard from "./RoasterCard"

function RoasterList({ roasters }) {

    const roasterCards = roasters.map(item => 
    <RoasterCard key={item.id} roaster={item} />)

    return (
        <div >
            {roasterCards}
        </div>
    )
}

export default RoasterList