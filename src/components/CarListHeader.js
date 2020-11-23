import React, {Component} from "react";

class CarListHeader extends Component {

    render() {
        return (
            <thead>
            <tr>
                <th>Mark</th>
                <th>Model</th>
                <th>Color</th>
                <th>Year</th>
                <th>Actions</th>
            </tr>
            </thead>
        );
    }
}

export default CarListHeader;