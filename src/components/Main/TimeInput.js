import React, {Component} from 'react';
import './TimeInput.css'
import TextField from "@material-ui/core/TextField/TextField";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            timeValue: "dd/mm/yyyy hour:min"
        }
    }

    render() {
        return (
            <div className="time">
               <span className="time-text">
                Zeitpunkt zu schicken:
               </span>
                <form className="time-input-form" noValidate>
                    {this.state.checked
                        ?
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue={this.state.timeValue}
                            className="time-input-text"
                            disabled={true}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        :
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue={this.state.timeValue}
                            className="time-input-text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    }

                </form>
                <span className="text-now"> oder jetzt </span>
                <span className="time-checkbox">
                    <Checkbox
                        checked={this.state.checked}
                        onChange={event => this.handleChange(event.target.checked)}
                    />
                </span>
            </div>
        )
    }

    handleChange(bool) {
        this.setState({checked: bool});
    }
}

export default TimeInput;