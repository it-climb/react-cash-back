import * as Types from "../constants";
//
// export const createUser = user => ({
//   type: Types.CREATE_USER,
//   user
// });

export const createUser = user =>
  {
    console.log('action2 createUser user:', user);
      let data = {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'same-origin',
          body: JSON.stringify(user),
          headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json',
              // 'X-CSRFToken':  cookie.load('csrftoken')
          }
      }
      return fetch("users", data)
          .then(res => {
            console.log('THEN res:', res);
          })
          .catch(err => {
              console.log('ERR err:', err);
          })

  };

export const submitRegistrationUserForm = user => ({
  type: Types.SUBMIT_REGISTRATION_USER_FORM,
  user
});

export const inputUserField = field => ({
  type: Types.INPUT_USER_FIELD,
  field
});

