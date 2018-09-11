import {ADD_LINK, ADD_MESSAGE_INPUT, ADD_TIME, ADD_TITLE} from "../constants/actionTypes";

export default function (state = null, action) {
    switch (action.type) {
        case ADD_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case ADD_MESSAGE_INPUT:
            return {
                ...state,
                message: action.payload
            };
        case ADD_LINK:
            return {
                ...state,
                link: action.payload
            };
        case ADD_TIME:
            return {
                ...state,
                time: action.payload
            };
        default:
            return state;
    }
}