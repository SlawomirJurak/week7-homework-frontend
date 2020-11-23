import React, {Component} from "react";

class FilterForm extends Component {

    render() {
        return (
            <form>
                <div className={'form-inline'}>
                    <label>Year from</label>
                    <input type={'number'} className={'form-control mb-2 mr-sm-2'}/>
                    <label>Year to</label>
                    <input type={'number'} className={'form-control mb-2 mr-sm-2'}/>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        )
    }
}

export default FilterForm;