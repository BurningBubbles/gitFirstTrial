import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import './Main.css'
import DenseAppBar from "./DenseAppBar";
import TextField from "@material-ui/core/TextField/TextField";
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import UrlDropDown from "./UrlDropDown";
import MessageInput from "./MessageInput";
import InputImage from "../../containers/Main/InputImage";
import TitleTextInput from "./TitleTextInput";
import TimeInput from "./TimeInput";
import SendTo from "./SendTo";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <DenseAppBar/>
                <div className="title-name">
                    <TitleTextInput/>
                </div>
                <div className="msg-name">
                    <MessageInput/>
                </div>
                <div className="urltype">
                    <UrlDropDown/>
                </div>
                <div className="img-input">
                    <InputImage/>
                </div>
                <div className="time-input">
                    <TimeInput/>
                </div>
                <div className="send-input">
                    <SendTo/>
                </div>
            </div>
        )
    }
}

export default Main;