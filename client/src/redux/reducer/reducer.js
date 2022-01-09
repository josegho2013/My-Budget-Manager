import {
  ADD_USER,
  GET_USER,
  UPDATE_USER,
  DELETE_USER,
  ADD_OPERATIONS,
  GET_OPERATIONS,
  UPDATE_OPERATIONS,
  DELETE_OPERATIONS,
} from "../actions/actions";

const initialState = {
  getUser: [],
  addUser: [],
  upateUser: [],
  deleteUser: false,
  getOperations: [],
  addOperations: [],
  upateOperations: [],
  deleteOperation: false,
};
function RootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        addUser: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        getUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        upateUser: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        deleteUser: action.payload,
      };

    /////////////////////////////////////////////
    case ADD_OPERATIONS:
      return {
        ...state,
        addOperations: action.payload,
      };
    case GET_OPERATIONS:
      return {
        ...state,
        getOperations: action.payload,
      };
    case UPDATE_OPERATIONS:
      return {
        ...state,
        upateOperations: action.payload,
      };
    case DELETE_OPERATIONS:
      return {
        ...state,
        deleteOperation: action.payload,
      };
    default:
      return state;
  }
}
export default RootReducer;
