import {combineReducers} from 'redux';
import images from "./Images";
import activeImage from "./activeImage"


export default combineReducers({
    activeImage,
    images
})