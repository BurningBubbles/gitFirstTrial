import {DELETE_ACTIVE_IMAGE, IMAGE_ADDED} from "../constants/actionTypes";

export default function(state = null,action){
    switch(action.type){
        case IMAGE_ADDED:
            return action.payload;
        case DELETE_ACTIVE_IMAGE:
            return action.payload;
        default:return state;
    }
}