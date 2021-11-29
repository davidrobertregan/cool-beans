import React, { useState } from "react";
import CoffeeCard from "./CoffeeCard"
import CardGroup from 'react-bootstrap/CardGroup'
import Modal from 'react-bootstrap/Modal'
import CoffeeDetails from "./CoffeeDetails"

function CoffeeList({ coffee }) {
    const [show, setShow] = useState();
    const [coffeeId, setCoffeeId] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = (event) => {
        setShow(true);
        setCoffeeId(event.target.id)
    }
    

    const coffeeCards = coffee.map(item => 
    <CoffeeCard key={item.id} coffee={item} handleShow={handleShow}/>)

    return (
        <>
        {show ? 
        <div>
        <Modal show={show} onHide={handleClose} style={{textAlign: 'center'}}>
            <CoffeeDetails coffeeId={coffeeId}/>
        </Modal> 
        <CardGroup className="justify-content-center" id="coffee-list">
        {coffeeCards}
        </CardGroup>
        </div> 
        :  
        <CardGroup className="justify-content-center" id="coffee-list">
            {coffeeCards}
        </CardGroup>}
        </>
    )
}

export default CoffeeList