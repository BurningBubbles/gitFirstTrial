import React, {Component} from 'react';
import './TimeInput.css'
import TextField from "@material-ui/core/TextField/TextField";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

class TimeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <div className="time">
                Zeitpunkt zu schicken <form className="time-input-form" noValidate>
                {this.state.checked
                    ?
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
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
                        defaultValue="2017-05-24T10:30"
                        className="time-input-text"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                }

            </form>
                oder jetzt <Checkbox
                checked={this.state.checked}
                onChange={event => this.handleChange(event.target.checked)}
                value="checkedA"
            />

            </div>
        )
    }

    handleChange(bool) {
        this.setState({checked: bool});
    }
}

export default TimeInput;