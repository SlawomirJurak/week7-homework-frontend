import React, {Component} from "react";
import CarListHeader from "./CarListHeader";
import CarLine from "./CarLine";

class CarList extends Component {

    state = {
        cars: [],
        yearFrom: 0,
        yearTo: 0,
        redirect: false
    }

    componentDidMount() {
        this.fetchCars();
    }

    fetchCars = async () => {
        let yearFrom = this.state.yearFrom;
        let yearTo = this.state.yearTo;
        let url;

        if (yearFrom > 0 && yearTo > 0) {
            url = 'http://localhost:8080/cars/' + yearFrom + '/' + yearTo;
        } else {
            url = 'http://localhost:8080/cars';
        }

        let cars = await fetch(url);

        cars = await cars.json();
        this.setState({cars});
    }

    handleFilter = (event) => {
        this.fetchCars();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleResetFilter = (event) => {
        this.setState({
            yearFrom: 0,
            yearTo: 0
        }, this.fetchCars);
    }

    render() {

        return (
            <div>
                <h1>Car list</h1>
                <div className={'form-inline'}>
                    <label>Year from</label>
                    <input type={'number'} className={'form-control mb-2 mr-sm-2'} name={'yearFrom'}
                           value={this.state.yearFrom} onChange={this.handleChange}/>
                    <label>Year to</label>
                    <input type={'number'} className={'form-control mb-2 mr-sm-2'} name={'yearTo'}
                           value={this.state.yearTo} onChange={this.handleChange}/>
                    <button className="btn btn-primary mb-2" onClick={this.handleFilter}>Filter</button>
                    <button className="btn btn-primary mb-2" onClick={this.handleResetFilter}>Reset filter</button>
                </div>
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