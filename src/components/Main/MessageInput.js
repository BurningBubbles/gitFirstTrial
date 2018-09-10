import React, {Component} from 'react';
import './MessageInput.css'
import TextField from "@material-ui/core/TextField/TextField";

class MessageInput extends Component {
    render() {
        return (
            <div className="msg"> Nachricht:
                <span className="msg-input">
                    <TextField
                        id="textarea"
                        placeholder="Nachricht Eingeben"
                        multiline
                        margin="normal"
                    />
                </span>
            </div>
        )
    }
}

export default MessageInput;