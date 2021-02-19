import Axios from "axios";
const API_URL = "/api/auth/login";

// TYPES
export const Types = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
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

export const logout = () => {
  return {
    type: Types.LOGOUT,
  };
};

//REDUCER
const initialState = {
  isLogged: false,
  user: {},
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return { ...state, isLogged: true, user: { ...action.payload } };
    case Types.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;
