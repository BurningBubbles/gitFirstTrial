import React, {Component} from 'react';
import './TimeInput.css'
import TextField from "@material-ui/core/TextField/TextField";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import {connect} from 'react-redux';
import {addTime} from "../../actions";

class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            timeValue: ''
        }
    }

    render() {
        return (
            <div className="time">
               <span className="time-text">
                Zeitpunkt zu schicken:
               </span>
                <form className="time-input-form" noValidate>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        placeholder={this.state.timeValue}
                        disabled={this.state.checked}
                        onChange={event => (this.handleInputChange(event.target.value))}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <span className="text-now"> oder jetzt </span>
                <span className="time-checkbox">
                    <Checkbox
                        onChange={event => {
                            this.handleCheckChange(event.target.checked)
                        }}
                    />
                </span>
            </div>
        )
    }

    handleInputChange(value) {
        this.setState({timeValue: value});
        this.props.addTime(value)
    }


    handleCheckChange(bool) {
        if (bool === false) {
            this.props.addTime(this.state.timeValue);
        }
        else {
            this.props.addTime("immediately")
        }
        this.setState(prevState => ({
            checked: !prevState.checked
        }));
    }
}

const mapStateToProps = (state) => ({
    title: state.activeMessage
});
export default connect(mapStateToProps, {addTime})(TimeInput);