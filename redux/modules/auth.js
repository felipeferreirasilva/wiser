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
          payload: {
            isLogged: true,
            user: data,
            error: null,
          },
        });
      })
      .catch(({ response }) => {
        dispatch({
          type: Types.LOGIN,
          payload: {
            isLogged: false,
            user: {},
            error: response.data.error,
          },
        });
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
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case Types.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;
