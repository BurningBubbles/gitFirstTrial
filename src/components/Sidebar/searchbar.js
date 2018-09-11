import React, {Component} from 'react';
import './searchbar.css';
import SearchButton from "./SearchButton";
import Input from "@material-ui/core/Input/Input";


class Searchbar extends Component {
    render() {
        return (
            <div className="searchBar">
                <form className="search-form">
                    <Input className="search-input"
                           placeholder="search"
                    />
                    <SearchButton/>
                </form>
            </div>
        )
    }
}

export default Searchbar;