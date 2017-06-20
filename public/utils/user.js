export const checkEmail = email => {
  console.log("utils user checkEmail", email);
  return fetch(`/users/findEmail?email=${email}`);
}

const createData = user => {
  return {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'cors',
    body: JSON.stringify(user),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }
}

export const createUser = user => {
  // console.log("utils user createUser", user);
  const data = createData(user);
  // return fetch("users", data);
  return fetch("users", data).then(res => {
    // console.log('utils user 24 res:', res);
    if (Math.floor(res.status / 100) === 2) {
      return res.json();
    } else {
      throw new Error('utils/user 28 Error: ' + a);
    }
  });
}