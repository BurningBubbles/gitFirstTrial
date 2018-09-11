import React, {Component} from 'react';
import './MessageBox.css';
import messages from '../../constants/old_messages'
import Message from "./Message";

class MessageBox extends Component {
    render() {
        return (
            <div className="MessageBox">
                {messages.map(message => (
                    <div className="message"
                         key={message.id}>
                        <Message message={message}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default MessageBox;