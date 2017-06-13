import * as Types from "../constants";
import {ValidationError} from "./../utils/errors";

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
  // let data = {
  //   method: 'POST',
  //   credentials: 'same-origin',
  //   mode: 'same-origin',
  //   body: JSON.stringify(user),
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   }
  // }
  const data = createData(user);
  console.log('actions user createData', data,' user', user);
  const emailData = user.email;
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
}

export const loginUser = user => {
  console.log('login user:', user);

}


