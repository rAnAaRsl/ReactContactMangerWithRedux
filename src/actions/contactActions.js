import {ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT} from "./types";
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    })
};
export const getContact = (id) => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
};
export const addContact = (newContact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users/', newContact);
    dispatch({
        type: ADD_CONTACTS,
        payload: res.data
    })
}
export const deleteContact = (id) => async dispatch => {
    try {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: DELETE_CONTACTS,
            payload: id
        });
    }
    catch (e) {
        dispatch({
            type: DELETE_CONTACTS,
            payload: id
        });
    }
}
export const updateContact = (newContact) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${newContact.id}`, newContact);
    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    })
}