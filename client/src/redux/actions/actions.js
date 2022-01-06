import axios from "axios";

export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const ADD_OPERATIONS = "ADD_OPEARATIONS";
export const GET_OPERATIONS = "GET_OPERATIONS";
export const UPDATE_OPERATIONS = "UPDATE_OPERATIONS";
export const DELETE_OPERATIONS = "DELETE_OPERATIONS";

export function addUser(payload) {
  return async (dispatch) => {
    console.log("add data: ", payload)
    const { data } = await axios.post(`/users/create`, payload);
    dispatch({ type: ADD_USER, payload: data });
  };
}

export function getUser() {
  return async (dispatch) => {
    const { data } = await axios.get(`/user`);
    dispatch({ type: GET_USER, payload: data });
  };
}

export function updateUser() {
  return async (dispatch) => {
    const { data } = await axios.put(`/user/update/:id`);
    dispatch({ type: UPDATE_USER, payload: data });
  };
}

export function deleteUser() {
  return async (dispatch) => {
    const { data } = await axios.delete(`/user/delete/:id`);
    dispatch({ type: DELETE_USER, payload: data });
  };
}

export function addOperations(payload) {
  return async (dispatch) => {
    const { data } = await axios.post(`/operations/create`,payload);
    dispatch({ type: ADD_OPERATIONS, payload: data });
  };
}

export function getOperationsDb() {
  return async (dispatch) => {
    const { data } = await axios.get(`/operations`);
    dispatch({ type: GET_OPERATIONS, payload: data });
  };
}

export function updateOperations() {
  return async (dispatch) => {
    const { data } = await axios.put(`/operations/update/:id`);
    dispatch({ type: UPDATE_OPERATIONS, payload: data });
  };
}

export function delteOperations() {
  return async (dispatch) => {
    const { data } = await axios.delete(`/operations/delete/:id`);
    dispatch({ type: DELETE_OPERATIONS, payload: data });
  };
}
