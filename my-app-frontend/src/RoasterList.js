import React from "react"
import RoasterCard from "./RoasterCard"
import CardGroup from 'react-bootstrap/CardGroup'

function RoasterList({ roasters }) {

    const roasterCards = roasters.map(item => 
    <RoasterCard key={item.id} roaster={item} />)

    return (
        <div >
            <CardGroup className="justify-content-center"id="coffee-list">
            {roasterCards}
            </CardGroup>
        </div>
    )
}

export default RoasterList