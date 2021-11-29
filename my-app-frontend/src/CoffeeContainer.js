import { useEffect, useState } from 'react'
import CoffeeList from "./CoffeeList"
import CoffeeDetails from "./CoffeeDetails"
import About from './About';
import RoasterList from './RoasterList';
import RoasterDetails from './RoasterDetails';
import { Route, Switch } from 'react-router-dom';

function CoffeeContainer() {
    const [coffee, setCoffee] = useState([])
    const [roasters, setRoasters] = useState([])

    useEffect(() => {
        fetch('https://cool-beans-regan-christensen.herokuapp.com/coffees')
        .then(resp => resp.json())
        .then(data => setCoffee(data))
    }, [])

    useEffect(() => {
        fetch('https://cool-beans-regan-christensen.herokuapp.com/roasters')
        .then(resp => resp.json())
        .then(data => setRoasters(data))
    }, [])


    return (
        <div>
          <Switch>
            <Route path="/about">   
                <About />   
            </Route>
            <Route path="/coffees/:id">
                <CoffeeDetails />
            </Route>
            <Route path="/roasters/:id">
                <RoasterDetails coffee = {coffee} />
            </Route>
            <Route path="/roasters">
                <RoasterList roasters = {roasters}/> 
            </Route>
            <Route path="/">
                <CoffeeList coffee = {coffee}/> 
            </Route>
            
         </Switch>
        </div>
    )
}

export default CoffeeContainer