import Axios from "axios";
const API_URL = "/api/auth/login";

// TYPES
export const Types = {
  LOGIN: "LOGIN",
};

//ACTIONS
export const login = (userData) => {
  return (dispatch) => {
    Axios.post(API_URL, userData)
      .then(({ data }) => {
        dispatch({
          type: Types.LOGIN,
          payload: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//REDUCER

const initialState = {
  isLogged: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, isLogged: true, user: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
