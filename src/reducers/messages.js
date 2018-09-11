import {SAVE_MESSAGE} from "../constants/actionTypes";

export default function (state=null, action){
    switch (action.type) {
        case SAVE_MESSAGE:
            console.log(action.payload);
            return [
                ...state,
                action.payload
            ];
        default: return state;
    }
}