import React, {Component} from 'react';
import {connect} from 'react-redux';
import './TitleTextInput.css'
import Input from "@material-ui/core/Input/Input";
import {addTitle} from "../../actions";

class TitleTextInput extends Component {
    render() {
        return (
            <div className="title">Uberschrift:
                <Input className="title-input"
                       placeholder="Uberschrift eingeben"
                       onChange={event => this.props.addTitle(event.target.value)}
                />
            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    title: state.activeMessage
});

export default connect(mapStateToProps, {addTitle})(TitleTextInput);