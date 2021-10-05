import { useEffect, useState } from 'react'
import CoffeeList from "./CoffeeList"
import CoffeeDetails from "./CoffeeDetails"
import { Route, Switch } from 'react-router-dom';

function CoffeeContainer() {
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/coffees')
        .then(resp => resp.json())
        .then(data => setCoffee(data))
    }, [])

    return (
        <div>
          <Switch>   
            <Route path="/coffees/:id">
                <CoffeeDetails />
            </Route>
            <Route path="/">
                <CoffeeList coffee = {coffee}/> \
            </Route>
         </Switch>
        </div>
    )
}

export default CoffeeContainer