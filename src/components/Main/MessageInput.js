import React, {Component} from 'react';
import './MessageInput.css'
import TextField from "@material-ui/core/TextField/TextField";

class MessageInput extends Component {
    render() {
        return (<div> Nachricht:
                <TextField
                    id="textarea"
                    placeholder="Nachricht Eingeben"
                    multiline
                    className="msg-input"
                    margin="normal"
                />
            </div>
        )
    }
}

export default MessageInput;