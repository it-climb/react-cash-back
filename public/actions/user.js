import * as Types from "../constants";
import {ValidationError} from "./../utils/errors";

export const createUser = user => {
  // console.log('action2 createUser user:', user);
  let data = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
  let emailData = user.email;
  return fetch(`/users/findEmail?email=${emailData}`)
    .then(res => {
      if (Math.floor(res.status / 100) === 2) {
        return fetch("users", data);
      }
      if(res == 409){
        throw new ValidationError('1 email is exists.');
      }else{
        throw new Error('Error status = ' + res);
      }
    })
    .then(res => {
      console.log('THEN res:', res);
    })
    .catch(ValidationError => {
      console.log(ValidationError);
    })
    .catch(err => {
      console.log('err:', err);
    })
};


