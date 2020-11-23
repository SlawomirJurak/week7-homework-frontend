import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

class CarForm extends Component {

    state = {
        car: {
            mark: '',
            model: '',
            color: '#000000',
            productionYear: 0
        },
        redirect: false
    }

    async componentDidMount() {
        if (this.props.edit) {
            let car = await fetch('http://localhost:8080/cars/' + this.props.match.params.id);

            car = await car.json();
            this.setState({car});
        }
    }

    handleChange = (event) => {
        let car = this.state.car;

        car = {...car, [event.target.name]: event.target.value}
        this.setState({car});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let method = this.props.edit ? 'PUT' : 'POST';

        fetch('http://localhost:8080/cars', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.car)
        }).then(result => {
            this.setState({
                redirect: true
            });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/'}/>
        }

        return <form onSubmit={this.handleSubmit}>
            <div className={'form-group'}>
                <label>Mark</label>
                <input type={'text'} className={'form-control'} id={'mark'} name={'mark'} value={this.state.car.mark}
                       onChange={this.handleChange}/>
            </div>
            <div className={'form-group'}>
                <label>Model</label>
                <input type={'text'} className={'form-control'} id={'model'} name={'model'} value={this.state.car.model}
                       onChange={this.handleChange}/>
            </div>
            <div className={'form-group'}>
                <label>Color</label>
                <input type={'color'} className={'form-control'} id={'color'} name={'color'}
                       value={this.state.car.color}
                       onChange={this.handleChange}/>
            </div>
            <div className={'form-group'}>
                <label>Production year</label>
                <input type={'number'} className={'form-control'} id={'productionYear'} name={'productionYear'}
                       value={this.state.car.productionYear}
                       onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    }
}

export default CarForm;