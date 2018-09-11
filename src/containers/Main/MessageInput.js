import React, {Component} from 'react';
import './MessageInput.css'
import TextField from "@material-ui/core/TextField/TextField";
import {connect} from 'react-redux';
import {addMessageInput} from "../../actions";

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
                        onChange={event => {this.props.addMessageInput(event.target.value)}}
                    />
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    title: state.activeMessage
});

export default connect(mapStateToProps, {addMessageInput})(MessageInput);