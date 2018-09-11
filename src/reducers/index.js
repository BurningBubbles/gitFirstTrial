import {combineReducers} from 'redux';
import images from "./Images";
import activeImage from "./activeImage";
import messages from "./messages";
import activeMessage from "./activeMessage";


export default combineReducers({
    activeImage,
    images,
    messages,
    activeMessage
})