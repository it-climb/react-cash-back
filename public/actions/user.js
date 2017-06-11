import * as Types from "../constants";

export const createUser = user => ({
  type: Types.CREATE_USER,
  user
});

export const submitRegistrationUserForm = user => ({
  type: Types.SUBMIT_REGISTRATION_USER_FORM,
  user
});

export const inputUserField = field => ({
  type: Types.INPUT_USER_FIELD,
  field
});

