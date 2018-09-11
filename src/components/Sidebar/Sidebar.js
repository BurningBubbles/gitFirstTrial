import React, {Component} from 'react';
import './Sidebar.css'
import Searchbar from "./searchbar";
import MessageBox from "./MessageBox";
import DenseAppBar from "../Main/DenseAppBar";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <DenseAppBar title={"Alte Nachrichten"}/>
                <Searchbar/>
                <MessageBox/>
            </div>
        )
    }
}

export default Sidebar;