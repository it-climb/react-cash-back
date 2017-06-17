import * as Types from "../constants";
import {ValidationError} from "./../utils/errors";

export const inputUser = field => ({
  type: Types.INPUT_USER,
  field
});

const createData = user => {
  return {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}

export const createUser = user => {
  const data = createData(user);
  const emailData = user.email;
  return fetch(`/users/findEmail?email=${emailData}`)
    .then(res => {
      if (Math.floor(res.status / 100) === 2) {
        return fetch("users", data);
      }
      if(res == 409){
        throw new ValidationError('createUser email is exists.');
      }else{
        throw new Error('Error status = ' + res);
      }
    })
    .then(res => {
      console.log('fetch /users.then res:', res);
    })
    .catch(ValidationError => {
      console.log(ValidationError);
    })
    .catch(err => {
      console.log('err:', err);
    })
}

export const loginUser = user => {
  console.log('login user:', user);
}



