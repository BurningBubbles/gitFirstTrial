import {createActions} from 'redux-actions';
import {DELETE_ACTIVE_IMAGE, IMAGE_ADDED} from "../constants/actionTypes";


export const imageAdded = (url,name) => ({
        type: IMAGE_ADDED,
        payload: {
            url,
            name
        }
});

export const deleteActiveImage = () => ({
    type: DELETE_ACTIVE_IMAGE,
    payload: null
});
