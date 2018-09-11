import React, {Component} from 'react';
import './SendTo.css'
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Input from "@material-ui/core/Input/Input";
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import Button from "@material-ui/core/Button/Button";

class SendTo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnValue: ''

        }
    }

    handleChange(btnValue) {
        this.setState({btnValue});
    };


    render() {
        return (
            <div className="send">
                <FormControl component="fieldset" className="send-select-form">
                    <span className="send-obj">
                    <FormLabel component="legend"><span className="send-text">Schicken an:</span></FormLabel>
                    <div className="radio-display">
                    <RadioGroup
                        aria-label="Schicken an:"
                        name="sendTo"
                        className="send-radio-group"
                        value={this.state.btnValue}
                        onChange={event => {
                            this.handleChange(event.target.value)
                        }}
                    >

                            <FormControlLabel value="Kunden" control={<Radio/>} label="Kunden"/>
                            <FormControlLabel value="Test User" control={<Radio/>} label="Test User"/>

                    </RadioGroup></div>
                    </span>
                    {this.checkBtn()}
                </FormControl>
            </div>
        )
    }

    checkBtn() {
        switch (this.state.btnValue) {
            case 'Kunden':
                return (<div className="input-data-customer">
                    <NativeSelect
                        className="customer-select"
                        name="Customer Group"

                    >
                        <option>Choose User Group</option>
                    </NativeSelect>
                    <span className="send-btn">
                    <Button
                        variant="contained"
                        color="primary"
                        className="send-btn"

                    >
                        Send
                    </Button>
                    </span>
                </div>);
            case 'Test User':
                return (<div className="input-data-test">
                    <span className="input-data-test-text">Test User Eingeben: </span><Input
                    placeholder="Input Test User"
                /> <Button
                    variant="contained"
                    color="primary"
                    className="send-btn"

                >
                    Send
                </Button>
                </div>);
            default:

        }
    }
}

export default SendTo;