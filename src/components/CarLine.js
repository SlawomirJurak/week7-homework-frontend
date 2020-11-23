import React, {Component} from 'react';
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

class CarLine extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.car.mark}</td>
                <td>{this.props.car.model}</td>
                <td>{this.props.car.color}</td>
                <td>{this.props.car.productionYear}</td>
                <td>
                    <ButtonEdit id={this.props.car.id}/>
                    <ButtonDelete id={this.props.car.id}/>
                </td>
            </tr>
        );
    }
}

export default CarLine;