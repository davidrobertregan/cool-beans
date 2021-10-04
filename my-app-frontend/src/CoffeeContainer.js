import { useEffect, useState } from 'react'
import CoffeeList from "./CoffeeList"
function CoffeeContainer() {
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/coffees')
        .then(resp => resp.json())
        .then(data => setCoffee(data))
    }, [])

    return (
        <div>
            <CoffeeList coffee = {coffee}/>  
        </div>
    )
}

export default CoffeeContainer