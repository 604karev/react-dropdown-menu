import React, {Component} from "react";
import './Search.sass'

class Search extends Component {
    state = {
        inputState: ''
    };

    search = (e) => {
        console.log(e.target.value);
        e.stopPropagation();
        this.props.search(e.target.value)
    };


    render() {

        return (
            <div className="search-wrapper">
                <input
                    onChange={this.search}
                    onClick={(e) => {
                        e.stopPropagation()
                    }} className="search" type="text"/>
            </div>
        )
    }
}

export default Search