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
            <div>
                <FormControl component="fieldset" className="send-select-form">
                    <FormLabel component="legend">Schicken an:</FormLabel>
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

                    </RadioGroup>
                    {this.checkBtn()}
                </FormControl>
            </div>
        )
    }

    checkBtn() {
        switch (this.state.btnValue) {
            case 'Kunden':
                return (<div>
                    <NativeSelect
                        className="customer-select"
                        name="Customer Group"

                    >
                        <option>Choose User Group</option>
                    </NativeSelect>
                    <Button
                        variant="contained"
                        color="primary"
                        className="send-btn"

                    >
                        Send
                    </Button>
                </div>);
            case 'Test User':
                return (<div>
                    Test User Eingeben: <Input
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