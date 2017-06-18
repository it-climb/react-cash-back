import * as Types from "../constants";

const defaultState = {
  firstName: "",
  lastName: "",
  login: "",
  email: "",
  professionId: "",
  password: "",
  confirmPassword: "",
  emailValidate: false,
  token: "",
};

export default (state = defaultState, { type, ...action }) => {
  // console.log('reducer: action:', action);
  switch (type) {
    case Types.INPUT_USER:
      return Object.assign({}, state, action.field);
    case Types.SET_EMAIL_VALIDATE:
      return Object.assign({}, state, action.field);
    case Types.SET_USER_TOKEN:
      return Object.assign({}, state, action.field);
    // case Types.CREATE_USER:
    //
    //   return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
