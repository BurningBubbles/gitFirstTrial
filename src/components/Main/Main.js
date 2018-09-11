import React, {Component} from 'react';
import './Main.css'
import DenseAppBar from "./DenseAppBar";
import UrlDropDown from "../../containers/Main/UrlDropDown";
import MessageInput from "../../containers/Main/MessageInput";
import InputImage from "../../containers/Main/InputImage";
import TitleTextInput from "../../containers/Main/TitleTextInput";
import TimeInput from "../../containers/Main/TimeInput";
import SendTo from "./SendTo";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <DenseAppBar title={"Werbenachricht Schreiben"}/>
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