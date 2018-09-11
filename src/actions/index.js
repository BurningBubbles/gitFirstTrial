import {
    ADD_LINK,
    ADD_MESSAGE_INPUT, ADD_TIME,
    ADD_TITLE,
    DELETE_ACTIVE_IMAGE,
    IMAGE_ADDED,
    SAVE_MESSAGE
} from "../constants/actionTypes";


export const imageAdded = (url, name) => ({
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

export const addTitle = (title) => ({
    type: ADD_TITLE,
    payload: title
});
export const addMessageInput = (text) => ({
    type: ADD_MESSAGE_INPUT,
    payload: text
});
export const addLink = (link) => ({
    type: ADD_LINK,
    payload: link
});
export const addTime = (time) => ({
    type: ADD_TIME,
    payload: time
});

export const saveMessage = (message) => ({
    type: SAVE_MESSAGE,
    payload: message
});
