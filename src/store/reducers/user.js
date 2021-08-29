import { SET_USER_INFO } from "../actionTyps";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    password: "",
    c_password: "",
  },
};


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return { ...state };
  }
};
