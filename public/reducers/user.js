import * as Types from "../constants";

const defaultState = {
  firstName: "",
  lastName: "",
  login: "",
  email: "",
  professionId: "",
  password: "",
  confirmPassword: "",
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case Types.INPUT_USER:
      // console.log('INPUT_USER reducer:', action);
      return Object.assign({}, state, action.field);
    // case Types.CREATE_USER:
    //
    //   return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
