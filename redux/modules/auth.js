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
const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return state;
    default:
      return state;
  }
};

export default reducer;
