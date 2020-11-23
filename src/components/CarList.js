import React, {Component} from "react";
import CarListHeader from "./CarListHeader";
import CarLine from "./CarLine";
import FilterForm from "./FilterForm";

class CarList extends Component {

    state = {
        cars: []
    }

    async componentDidMount() {
        let cars = await fetch('http://localhost:8080/cars');

        cars = await cars.json();
        this.setState({cars});
    }

    render() {

        return (
            <div>
                <h1>Car list</h1>
                <FilterForm/>
                <table className={'table'}>
                    <CarListHeader/>
                    {this.state.cars.length > 0 && <tbody>
                    {this.state.cars.map(car => <CarLine key={car.id} car={car}/>)}
                    </tbody>}
                </table>
            </div>
        );
    }
}

export default CarList;