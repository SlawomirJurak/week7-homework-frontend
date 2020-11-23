import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarList from "./components/CarList";
import {HashRouter, Route, Switch, NavLink} from 'react-router-dom'
import CarForm from "./components/CarForm";


const Navigation = () => {
    let style = {
        color: 'red',
        fontWeight: 'bold'
    };

    return <ul>
        <li><NavLink exact to={'/'} activeStyle={style}>All cars</NavLink></li>
        <li><NavLink exact to={'/cars/newCar'} activeStyle={style}>New car</NavLink></li>
    </ul>
}

function App() {
  return (
    <div>
        <HashRouter>
            <Navigation/>
            <Switch>
                <Route exact path={'/'} component={CarList}/>
                <Route exact path={'/cars/newCar'} component={CarForm}/>
                <Route exact path={'/cars/edit/:id'} render={(props) => <CarForm {...props} edit={true}/>}/>
            </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
