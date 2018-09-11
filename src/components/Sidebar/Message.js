import React, {Component} from 'react';
import './Message.css';
import DeleteIcon from '@material-ui/icons/Delete';
import withStyles from "@material-ui/core/es/styles/withStyles";

const StyledIcon = withStyles({
    root: {
        marginLeft: '200px',
        color: 'gray',
    }
})(DeleteIcon);


class Message extends Component {
    render() {
        return (
            <div className="message-single">
                {this.props.message.title}
                <span className="delete-icon"><StyledIcon/></span>
            </div>
        )
    }
}

export default Message;